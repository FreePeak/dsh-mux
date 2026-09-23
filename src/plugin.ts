/**
 * The dsh-mux host plugin: tool `mux`, commands `/mux` + `/ask`, and the
 * thread store both share with the host remote (`./remote`).
 *
 * The harness loads this module by package name from a profile's
 * `cordis.patch.yml` and calls `apply(ctx, config)`.
 *
 * Command results render directly in the composer (`CommandResult` is the
 * dispatching UI's render), so handlers return their text and never inject a
 * second copy into the transcript.
 *
 * @module dsh-mux/plugin
 */

import type { Context } from '@deepseek-ai/cordis'
import { join } from 'node:path'
import { defineTool } from '@deepseek-ai/dsh-tools'
import type { GenericCallView } from '@deepseek-ai/dsh-tools'
import { ADAPTERS, ADAPTER_IDS, adapterFor, firstTurnArgv, resumeTurnArgv } from './adapters.ts'
import { binOnPath, discover, pathEntries } from './discovery.ts'
import { runTurn } from './run.ts'
import type { RunTurnResult } from './run.ts'
import { ThreadStore } from './threads.ts'
import { parseMuxInput } from './commands.ts'

/** The name cordis and the harness log address this plugin by. */
export const name = 'dsh-mux'

/** `commands`/`tools` register here; `profileContext` carries the data dir. */
export const inject = ['commands', 'tools', 'profileContext']

/** Deployment configuration, as it appears under the patch row's `config:`. */
export interface Config {
  /** Per-turn timeout in ms. Defaults to 600_000. */
  timeoutMs?: number
  /** Combined stdout+stderr cap in bytes. Defaults to 1 MiB. */
  outputCapBytes?: number
  /** Workspace for panel sends (no session context); defaults to the host cwd. */
  workspace?: string
}

/** Header line the tool and transcript prefix every settled turn with. */
export function turnHeader(cli: string, durationMs: number, exit: number | null): string {
  const seconds = (durationMs / 1000).toFixed(1)
  return `mux · ${cli} · ${seconds}s · exit ${exit === null ? '—' : exit}`
}

/** The shared turn dependencies: store plus config ceilings. */
export interface TurnServices {
  readonly store: ThreadStore
  readonly timeoutMs: number | undefined
  readonly outputCapBytes: number | undefined
}

/**
 * The thread store lives beside the profile dir (confirmed in app-boot), so a
 * profile reinstall never wipes it silently.
 * @param ctx - a host context carrying `profileContext`.
 */
export function storeDir(ctx: Context): string {
  const profile = (ctx as unknown as { profileContext?: { dir?: string } }).profileContext
  return join(profile?.dir ?? process.cwd(), 'mux')
}

/** Turn services for one host context and config (shared by apply + remote). */
export function turnServices(ctx: Context, config: Config): TurnServices {
  return {
    store: new ThreadStore(storeDir(ctx)),
    timeoutMs: config.timeoutMs,
    outputCapBytes: config.outputCapBytes,
  }
}

/**
 * Run one turn: resolve the bin, pick first/resume argv, spawn, record.
 * Never throws for CLI-side failures — those return a result.
 */
export async function sendTurn(
  services: TurnServices,
  options: {
    readonly cli: string
    readonly prompt: string
    readonly cwd: string
    readonly threadId?: string
    readonly signal?: AbortSignal
  },
): Promise<{ readonly header: string; readonly text: string; readonly threadId: string }> {
  const spec = adapterFor(options.cli)
  if (spec === undefined) {
    return {
      header: `mux · ${options.cli} · unknown CLI`,
      text: `Unknown CLI "${options.cli}".`,
      threadId: options.threadId ?? '',
    }
  }
  const binPath = binOnPath(spec.bin, pathEntries())
  if (binPath === undefined) {
    return {
      header: `mux · ${spec.id} · missing`,
      text: `"${spec.bin}" is not on PATH. Install it or pick another CLI. Nothing was spawned.`,
      threadId: options.threadId ?? '',
    }
  }
  let threadId = options.threadId
  let argv: string[] | undefined
  if (threadId !== undefined) {
    const thread = services.store.get(threadId)
    if (thread !== undefined && thread.cliSessionId !== undefined) {
      argv = resumeTurnArgv(spec, thread.cliSessionId) ?? firstTurnArgv(spec)
    }
  }
  if (threadId === undefined || services.store.get(threadId) === undefined) {
    threadId = services.store.create(spec.id, options.cwd).id
  }
  argv ??= firstTurnArgv(spec)
  const current = services.store.get(threadId)
  if (current === undefined) {
    return { header: `mux · ${spec.id} · error`, text: 'Thread vanished mid-turn.', threadId }
  }
  services.store.append(threadId, { role: 'prompt', text: options.prompt, at: Date.now() })
  const result: RunTurnResult = await runTurn({
    binPath,
    argv,
    prompt: options.prompt,
    cwd: current.cwd,
    ...(services.timeoutMs === undefined ? {} : { timeoutMs: services.timeoutMs }),
    ...(services.outputCapBytes === undefined ? {} : { outputCapBytes: services.outputCapBytes }),
    ...(options.signal === undefined ? {} : { signal: options.signal }),
  })
  if (!result.ok) {
    const text = `${result.detail}${result.stderrTail.length > 0 ? `\n${result.stderrTail}` : ''}`
    services.store.append(threadId, { role: 'error', text, at: Date.now() })
    return { header: turnHeader(spec.id, result.durationMs, result.exitCode), text, threadId }
  }
  const sessionId = spec.parseSessionId(result.text)
  services.store.append(
    threadId,
    { role: 'answer', text: result.text, at: Date.now() },
    sessionId,
  )
  const text = result.truncated
    ? `${result.text}\n(output truncated at the 1 MiB cap)`
    : result.text
  return {
    header: turnHeader(spec.id, result.durationMs, result.exitCode),
    text,
    threadId,
  }
}

/** Generic, args-only pending presentation for the mux tool call. */
function present(title: string, rawInput?: unknown): GenericCallView {
  return { card: 'generic', title, kind: 'other', ...rawInput === undefined ? {} : { rawInput } }
}

/** Register the model-facing `mux` tool and the `/mux` + `/ask` commands. */
export function apply(ctx: Context, config: Config = {}): void {
  const services = turnServices(ctx, config)
  const panelCwd = (): string => config.workspace || process.cwd()

  ctx.tools.register(defineTool({
    name: 'mux',
    description: 'Run one turn of another coding CLI (claude, omp, pi, cursor, agy, '
      + 'command-code, opencode) and return its text. Non-interactive accept mode; '
      + 'pass threadId to continue that thread on the stored CLI session id. '
      + 'Known ids: ' + ADAPTER_IDS.join(', '),
    parameters: {
      tool: { type: 'string', enum: [...ADAPTER_IDS], required: true },
      prompt: { type: 'string', required: true },
      threadId: { type: 'string' },
    },
    output: {
      schema: {
        type: 'object',
        additionalProperties: false,
        properties: {
          header: { type: 'string', required: true },
          text: { type: 'string', required: true },
          threadId: { type: 'string', required: true },
        },
      },
      render: (_args: unknown, value: { header: string, text: string }) => [
        { type: 'text' as const, text: `${value.header}\n${value.text}` },
      ],
    },
    execute: async (args: { tool: string, prompt: string, threadId?: string }, exec: { signal: AbortSignal }) => {
      const agent = (exec as { agent?: { session?: { header?: { cwd?: string } } } }).agent
      const cwd = agent?.session?.header?.cwd ?? panelCwd()
      return sendTurn(services, {
        cli: args.tool,
        prompt: args.prompt,
        cwd,
        ...(args.threadId === undefined ? {} : { threadId: args.threadId }),
        signal: exec.signal,
      })
    },
    presentCall: (args: { tool?: string, prompt?: string }) =>
      present(`Mux ${typeof args.tool === 'string' ? args.tool : ''} ${args.prompt ?? ''}`.trim()),
  }))

  const registerCommand = (commandName: 'mux' | 'ask'): void => {
    ctx.commands.register({
      name: commandName,
      description: commandName === 'mux'
        ? 'Talk to another coding CLI (or open the Mux page with no args)'
        : 'Ask another coding CLI: /ask <cli> <prompt>',
      input: { hint: '[<cli> <prompt>]' },
      handler: invocation => {
        const request = parseMuxInput(invocation.rawInput)
        if (request.kind === 'open') {
          return { kind: 'success', text: 'Open the Mux page in the sidebar.' }
        }
        if (request.kind === 'error') return { kind: 'error', text: request.text }
        const cwd = invocation.agent.session.header.cwd ?? panelCwd()
        return sendTurn(services, { cli: request.cli, prompt: request.prompt, cwd })
          .then(settled => ({
            kind: 'success' as const,
            text: `${settled.header}\n${settled.text}`,
          }))
          .catch((error: unknown) => ({
            kind: 'error' as const,
            text: `mux failed: ${error instanceof Error ? error.message : String(error)}`,
          }))
      },
    })
  }
  registerCommand('mux')
  registerCommand('ask')
}

export { discover, ADAPTERS, ADAPTER_IDS }
export type { AdapterStatus } from './discovery.ts'
export type { MuxThread, MuxTurn } from './threads.ts'
export { ThreadStore } from './threads.ts'
// No `export default`: the loader's unwrapExports prefers `default`, which
// would hand cordis the bare function — its `.inject` is undefined and the
// fiber starts with an empty inject. The named { name, inject, apply } shape
// is what cordis consumes for function plugins (default is for class plugins).
