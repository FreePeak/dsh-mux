/**
 * One mux turn: spawn a CLI process, feed the prompt on stdin, stream stdout,
 * parse its session id, and kill it when it overstays.
 *
 * Node builtins only. Never throws for CLI-side failures — those return an
 * error result so the tool boundary stays total.
 *
 * @module dsh-mux/run
 */

import { spawn } from 'node:child_process'

export interface RunTurnOptions {
  /** Resolved executable path. */
  readonly binPath: string
  /** Full argv (prompt travels on stdin, never here). */
  readonly argv: readonly string[]
  /** The prompt text. */
  readonly prompt: string
  /** Working directory (the DSH session workspace). */
  readonly cwd: string
  /** Timeout in ms before SIGTERM. Defaults to 600_000. */
  readonly timeoutMs?: number
  /** Grace in ms between SIGTERM and SIGKILL. Defaults to 3_000. */
  readonly killGraceMs?: number
  /** Combined stdout+stderr cap in bytes. Defaults to 1 MiB. */
  readonly outputCapBytes?: number
  /** AbortSignal the caller owns (Stop button, tool cancellation). */
  readonly signal?: AbortSignal
}

/** What one turn settled as. */
export type RunTurnResult =
  | {
    readonly ok: true
    readonly text: string
    readonly sessionId: string | undefined
    readonly durationMs: number
    readonly exitCode: number
    readonly truncated: boolean
  }
  | {
    readonly ok: false
    readonly reason: 'timeout' | 'exit' | 'signal' | 'spawn'
    readonly detail: string
    readonly stderrTail: string
    readonly durationMs: number
    readonly exitCode: number | null
  }

const DEFAULT_TIMEOUT_MS = 600_000
const DEFAULT_KILL_GRACE_MS = 3_000
const DEFAULT_OUTPUT_CAP = 1 << 20
const STDERR_TAIL = 2048

function truncateTail(text: string, maxBytes: number): string {
  if (Buffer.byteLength(text) <= maxBytes) return text
  const buffer = Buffer.from(text)
  return buffer.subarray(buffer.length - maxBytes).toString()
}

/**
 * Run one turn of a coding CLI.
 *
 * @param options - bin path, argv, prompt, cwd, and ceilings.
 * @returns the settled text (or a fail-closed error result).
 */
// ponytail: one turn at a time per call; no queue or rpc pipe. The upgrade path
// is a long-lived rpc channel for omp/pi only, once the resume table proves out.
export function runTurn(options: RunTurnOptions): Promise<RunTurnResult> {
  const startedAt = Date.now()
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS
  const killGraceMs = options.killGraceMs ?? DEFAULT_KILL_GRACE_MS
  const cap = options.outputCapBytes ?? DEFAULT_OUTPUT_CAP
  return new Promise(resolve => {
    let settled = false
    const finish = (result: RunTurnResult): void => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      options.signal?.removeEventListener('abort', onAbort)
      resolve(result)
    }
    const child = spawn(options.binPath, [...options.argv], {
      cwd: options.cwd,
      stdio: ['pipe', 'pipe', 'pipe'],
      // Inherit env: these CLIs hold their own credentials. Never log it.
      env: process.env,
    })
    let stdout = ''
    let stderr = ''
    let stdoutBytes = 0
    let stderrBytes = 0
    let truncated = false
    const append = (chunk: Buffer | string, sink: 'out' | 'err'): void => {
      const text = chunk.toString()
      const bytes = Buffer.byteLength(text)
      if (sink === 'out') {
        if (stdoutBytes + bytes > cap) {
          truncated = true
          stdout += text.slice(0, Math.max(0, cap - stdoutBytes))
          stdoutBytes = cap
        } else {
          stdout += text
          stdoutBytes += bytes
        }
      } else {
        if (stderrBytes + bytes > cap) {
          stderr = truncateTail(stderr + text, cap)
          stderrBytes = cap
          truncated = true
        } else {
          stderr += text
          stderrBytes += bytes
        }
      }
    }
    const kill = (): void => {
      if (child.exitCode !== null || child.signalCode !== null) return
      child.kill('SIGTERM')
      setTimeout(() => {
        if (child.exitCode === null && child.signalCode === null) child.kill('SIGKILL')
      }, killGraceMs).unref()
    }
    const timer = setTimeout(() => {
      kill()
      finish({
        ok: false,
        reason: 'timeout',
        detail: `timed out after ${timeoutMs}ms`,
        stderrTail: truncateTail(stderr, STDERR_TAIL),
        durationMs: Date.now() - startedAt,
        exitCode: null,
      })
    }, timeoutMs)
    timer.unref?.()
    const onAbort = (): void => {
      kill()
      finish({
        ok: false,
        reason: 'signal',
        detail: 'cancelled',
        stderrTail: truncateTail(stderr, STDERR_TAIL),
        durationMs: Date.now() - startedAt,
        exitCode: null,
      })
    }
    options.signal?.addEventListener('abort', onAbort, { once: true })
    child.stdout.on('data', chunk => { append(chunk, 'out') })
    child.stderr.on('data', chunk => { append(chunk, 'err') })
    child.on('error', error => {
      finish({
        ok: false,
        reason: 'spawn',
        detail: `could not start: ${error instanceof Error ? error.message : String(error)}`,
        stderrTail: truncateTail(stderr, STDERR_TAIL),
        durationMs: Date.now() - startedAt,
        exitCode: null,
      })
    })
    child.on('close', (code, signal) => {
      const durationMs = Date.now() - startedAt
      if (signal !== null) {
        finish({
          ok: false,
          reason: 'signal',
          detail: `killed by ${signal}`,
          stderrTail: truncateTail(stderr, STDERR_TAIL),
          durationMs,
          exitCode: null,
        })
        return
      }
      const exitCode = code ?? 1
      if (exitCode !== 0 || stdout.trim().length === 0) {
        finish({
          ok: false,
          reason: 'exit',
          detail: exitCode !== 0
            ? `exited with code ${exitCode}`
            : 'produced no output',
          stderrTail: truncateTail(stderr, STDERR_TAIL),
          durationMs,
          exitCode,
        })
        return
      }
      finish({
        ok: true,
        text: stdout,
        sessionId: undefined,
        durationMs,
        exitCode,
        truncated,
      })
    })
    try {
      child.stdin.write(options.prompt)
      child.stdin.end()
    } catch (error) {
      finish({
        ok: false,
        reason: 'spawn',
        detail: `could not write prompt: ${error instanceof Error ? error.message : String(error)}`,
        stderrTail: truncateTail(stderr, STDERR_TAIL),
        durationMs: Date.now() - startedAt,
        exitCode: null,
      })
    }
  })
}
