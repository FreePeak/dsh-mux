/**
 * Discover which adapter bins exist on PATH. Cached per process; the panel's
 * refresh button re-runs it.
 *
 * @module dsh-mux/discovery
 */

import { accessSync, constants } from 'node:fs'
import { delimiter, join } from 'node:path'
import { ENABLED_ADAPTER_IDS } from './adapters.ts'
import type { CliSpec } from './adapters.ts'

/** The PATH entries to search, in order. */
export function pathEntries(env: NodeJS.ProcessEnv = process.env): string[] {
  const path = env.PATH
  if (path === undefined || path.length === 0) return []
  return path.split(delimiter).filter(entry => entry.length > 0)
}

/** Whether a file at `dir/bin` is executable (or at least present on win32). */
export function binOnPath(bin: string, dirs: readonly string[]): string | undefined {
  for (const dir of dirs) {
    const candidate = join(dir, bin)
    try {
      accessSync(candidate, constants.X_OK)
      return candidate
    } catch {
      continue
    }
  }
  return undefined
}

/** One adapter's availability. */
export interface AdapterStatus {
  /** Adapter id. */
  readonly id: string
  /** Whether its bin resolved on PATH. */
  readonly installed: boolean
  /** Resolved path, when installed. */
  readonly path?: string
  /** Whether this adapter is in the enabled allowlist (Claude first). */
  readonly enabled: boolean
}

/**
 * Report every adapter's availability against PATH.
 * @param specs - the adapters to check.
 * @param env - environment to read PATH from (defaults to process.env).
 */
export function discover(
  specs: readonly CliSpec[],
  env: NodeJS.ProcessEnv = process.env,
): AdapterStatus[] {
  const dirs = pathEntries(env)
  return specs.map(spec => {
    const path = binOnPath(spec.bin, dirs)
    const enabled = ENABLED_ADAPTER_IDS.has(spec.id)
    return path === undefined
      ? { id: spec.id, installed: false, enabled }
      : { id: spec.id, installed: true, path, enabled }
  })
}
