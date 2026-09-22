/**
 * The seven coding-CLI specs: bin, first-turn argv, resume argv builder, and
 * session-id parsing. Prompt always travels on stdin, never argv.
 *
 * One table, not seven modules — every adapter differs only in these fields.
 *
 * @module dsh-mux/adapters
 */

export interface CliSpec {
  /** Adapter id, used by the tool / commands / threads. */
  readonly id: string
  /** Human label for the discovery strip. */
  readonly label: string
  /** Executable name looked up on PATH. */
  readonly bin: string
  /** Extra argv before the prompt-mode flags (e.g. `agent` for cursor). */
  readonly prefix: readonly string[]
  /** Print-mode argv (prompt on stdin, not in argv). */
  readonly printArgs: readonly string[]
  /** Flags that resume a stored CLI session id. */
  readonly resumeFlag: readonly string[]
  /** Permission flag so a run cannot block on a hidden prompt. */
  readonly permissionArgs: readonly string[]
  /**
   * Parse the CLI's session id out of json-ish stdout, for resume.
   * Returns undefined when no id is found — the thread then stays
   * single-turn rather than failing.
   */
  readonly parseSessionId: (stdout: string) => string | undefined
}

/**
 * Best-effort session-id extraction: walk the stdout lines, JSON-parse any
 * object line, and take the first string under a known id key. The seven CLIs
 * disagree on key names (`session_id`, `sessionId`, `id`) and envelope shape,
 * so one lenient scan covers them all.
 */
export function scanSessionId(stdout: string): string | undefined {
  const keys = ['session_id', 'sessionId', 'sessionIdPrefix', 'id', 'conversation_id', 'conversationId']
  for (const line of stdout.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed.startsWith('{')) continue
    let parsed: unknown
    try {
      parsed = JSON.parse(trimmed)
    } catch {
      continue
    }
    if (typeof parsed !== 'object' || parsed === null) continue
    const record = parsed as Record<string, unknown>
    for (const key of keys) {
      const value = record[key]
      if (typeof value === 'string' && value.length > 0) return value
    }
    const nested = record['session']
    if (typeof nested === 'object' && nested !== null) {
      for (const key of keys) {
        const value = (nested as Record<string, unknown>)[key]
        if (typeof value === 'string' && value.length > 0) return value
      }
    }
  }
  return undefined
}

export const ADAPTERS: readonly CliSpec[] = [
  {
    id: 'claude',
    label: 'Claude Code',
    bin: 'claude',
    prefix: [],
    printArgs: ['-p', '--output-format', 'stream-json'],
    resumeFlag: ['--resume'],
    permissionArgs: ['--permission-mode', 'acceptEdits'],
    parseSessionId: scanSessionId,
  },
  {
    id: 'omp',
    label: 'OMP',
    bin: 'omp',
    prefix: [],
    printArgs: ['-p', '--mode', 'json'],
    resumeFlag: ['--resume'],
    permissionArgs: ['--approval-mode', 'yolo'],
    parseSessionId: scanSessionId,
  },
  {
    id: 'pi',
    label: 'Pi',
    bin: 'pi',
    prefix: [],
    printArgs: ['-p', '--mode', 'json'],
    resumeFlag: ['--resume'],
    permissionArgs: ['--approval-mode', 'yolo'],
    parseSessionId: scanSessionId,
  },
  {
    id: 'cursor',
    label: 'Cursor',
    bin: 'cursor',
    prefix: ['agent'],
    printArgs: ['-p', '--output-format', 'stream-json'],
    resumeFlag: ['--resume'],
    permissionArgs: ['--force'],
    parseSessionId: scanSessionId,
  },
  {
    id: 'agy',
    label: 'Agy',
    bin: 'agy',
    prefix: [],
    printArgs: ['-p', '--output-format', 'stream-json'],
    resumeFlag: ['--conversation'],
    permissionArgs: ['--dangerously-skip-permissions'],
    parseSessionId: scanSessionId,
  },
  {
    id: 'command-code',
    label: 'Command Code',
    bin: 'command-code',
    prefix: [],
    printArgs: ['-p', '--output-format', 'json', '--skip-onboarding'],
    resumeFlag: ['--resume'],
    permissionArgs: ['--auto-accept'],
    parseSessionId: scanSessionId,
  },
  {
    id: 'opencode',
    label: 'opencode',
    bin: 'opencode',
    prefix: [],
    printArgs: ['run'],
    resumeFlag: [],
    permissionArgs: [],
    parseSessionId: scanSessionId,
  },
]

/** The adapter ids the `mux` tool accepts, in discovery-strip order. */
export const ADAPTER_IDS: readonly string[] = ADAPTERS.map(spec => spec.id)

/** Find an adapter by id; unknown ids return undefined (never spawn). */
export function adapterFor(id: string): CliSpec | undefined {
  return ADAPTERS.find(spec => spec.id === id)
}

/**
 * First-turn argv for one adapter (prompt travels on stdin).
 * @param spec - the adapter to build argv for.
 */
export function firstTurnArgv(spec: CliSpec): string[] {
  return [...spec.prefix, ...spec.printArgs, ...spec.permissionArgs]
}

/**
 * Resume-turn argv, or undefined when the adapter cannot resume.
 * @param spec - the adapter to build argv for.
 * @param sessionId - the stored CLI session id.
 */
export function resumeTurnArgv(spec: CliSpec, sessionId: string): string[] | undefined {
  if (spec.resumeFlag.length === 0) return undefined
  return [...spec.prefix, ...spec.resumeFlag, sessionId, ...spec.printArgs, ...spec.permissionArgs]
}
