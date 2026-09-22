/**
 * The dsh-mux host plugin: tool `mux`, commands `/mux` + `/ask`, and the
 * remote the Mux page drives.
 *
 * The harness loads this module by package name from a profile's
 * `cordis.patch.yml` and calls `apply(ctx, config)`.
 *
 * @module dsh-mux/plugin
 */

import type { Context } from '@deepseek-ai/cordis'
import { join } from 'node:path'
import { ADAPTERS, adapterFor, firstTurnArgv, resumeTurnArgv } from './adapters.ts'
import { binOnPath, discover, pathEntries } from './discovery.ts'
import { runTurn } from './run.ts'
import type { RunTurnResult } from './run.ts'
import { ThreadStore } from './threads.ts'
import { parseMuxInput } from './commands.ts'

/** The name cordis and the harness log address this plugin by. */
export const name = 'dsh-mux'

/** The services this plugin reads. `profileContext` carries the data dir. */
export const inject = ['agents', 'commands', 'tools']

/** Deployment configuration, as it appears under the patch row's `config:`. */
export interface Config {
  /** Per-turn timeout in ms. Defaults to 600_000. */
  timeoutMs?: number
  /** Combined stdout+stderr cap in bytes. Defaults to 1 MiB. */
  outputCapBytes?: number
}

/** Header line the tool and transcript prefix every settled turn with. */
export function turnHeader(cli: string, durationMs: number, exit: number | null): string {
  const seconds = (durationMs / 1000).toFixed(1)
  return `mux · ${cli} · ${seconds}s · exit ${exit === null ? '—' : exit}`
}

interface TurnServices {
  readonly store: ThreadStore
  readonly timeoutMs: number | undefined
  readonly outputCapBytes: number | undefined
}

function storeDir(ctx: Context): string {
  // profileContext.dir is the profile dir (confirmed in app-boot); the mux
  // threads live beside it so a profile reinstall never wipes them silently.
  const profile = (ctx as unknown as { profileContext?: { dir?: string } }).profileContext
  const base = profile?.dir ?? process.cwd()
  return join(base, 'mux')
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
  const stored = services.store.append(
    threadId,
    { role: 'answer', text: result.text, at: Date.now() },
    sessionId,
  )
  const resumed = sessionId !== undefined && stored?.cliSessionId !== undefined
  const text = result.truncated
    ? `${result.text}\n(output truncated at the 1 MiB cap)`
    : result.text
  return {
    header: turnHeader(spec.id, result.durationMs, result.exitCode)
      + (resumed ? '' : ' · single-turn (no session id)'),
    text,
    threadId,
  }
}

/** Install the mux tool and commands into a harness context. */
export function apply(ctx: Context, config: Config = {}): void {
  const store = new ThreadStore(storeDir(ctx))
  const services: TurnServices = {
    store,
    timeoutMs: config.timeoutMs,
    outputCapBytes: config.outputCapBytes,
  }

  ctx.tools.register({
    name: 'mux',
    description: 'Run one turn of another coding CLI (claude, omp, pi, cursor, agy, '
      + 'command-code, opencode) and return its text. The prompt runs non-interactively; '
      + 'a stored CLI session id continues the same thread when threadId is passed.',
    parameters: {
      type: 'object',
      additionalProperties: false,
      properties: {
        tool: { type: 'string', enum: ADAPTERS.map(spec => spec.id) },
        prompt: { type: 'string' },
        threadId: { type: 'string' },
      },
      required: ['tool', 'prompt'],
    },
    output: {
      schema: {
        type: 'object',
        additionalProperties: false,
        properties: {
          header: { type: 'string' },
          text: { type: 'string' },
          threadId: { type: 'string' },
        },
      },
      render: (_args: unknown, value: unknown) => {
        const text = (value as { header: string; text: string }).header
          + '\n' + (value as { text: string }).text
        return [{ type: 'text' as const, text }]
      },
    },
    execute: async (args: unknown, exec: { agent?: unknown; signal: AbortSignal }) => {
      const parsed = args as { tool: string; prompt: string; threadId?: string }
      const agent = exec.agent as { session?: { header?: { cwd?: string } } } | undefined
      const cwd = agent?.session?.header?.cwd ?? process.cwd()
      const settled = await sendTurn(services, {
        cli: parsed.tool,
        prompt: parsed.prompt,
        cwd,
        ...(parsed.threadId === undefined ? {} : { threadId: parsed.threadId }),
        signal: exec.signal,
      })
      return settled
    },
    presentCall: (args: unknown) => {
      const parsed = args as { tool?: string; prompt?: string };
      return {
        card: 'generic',
        title: `Mux ${typeof parsed.tool === 'string' ? parsed.tool : ''}`,
        kind: 'other',
        ...(typeof parsed.prompt === 'string' ? { rawInput: parsed.prompt } : {}),
      }
    },
  })

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
        const cwd = invocation.agent.session.header.cwd ?? process.cwd()
        return sendTurn(services, { cli: request.cli, prompt: request.prompt, cwd })
          .then(settled => {
            void invocation.agent.followup({
              content: [{ type: 'text', text: `${settled.header}\n${settled.text}` }],
              source: { kind: 'plugin', plugin: name },
            } as never)
            return { kind: 'success' as const, text: `${settled.header}\n${settled.text}` }
          })
          .catch((error: unknown) => ({
            kind: 'error' as const,
            text: `mux failed: ${error instanceof Error ? error.message : String(error)}`,
          }))
      },
    })
  }
  registerCommand('mux')
  registerCommand('ask')

  ctx.effect(() => {
    void services
    return () => {}
  }, 'dsh-mux: store lifetime')
}

export { discover, ADAPTERS }
export type { AdapterStatus } from './discovery.ts'
export type { MuxThread, MuxTurn } from './threads.ts'
export { ThreadStore } from './threads.ts'

export default apply
