/**
 * Package entry: the cordis plugin the DeepSeek Harness loads.
 *
 * The harness addresses this package by name in a profile's `cordis.patch.yml`,
 * then imports this module and calls `apply(ctx, config)`.
 *
 * @module @freepeak/dsh-mux
 */

export { apply, name, inject, sendTurn, turnHeader } from './plugin.ts'
export type { Config } from './plugin.ts'
export {
  ADAPTERS,
  ADAPTER_IDS,
  adapterFor,
  firstTurnArgv,
  resumeTurnArgv,
  scanSessionId,
  ENABLED_ADAPTER_IDS,
} from './adapters.ts'
export type { CliSpec } from './adapters.ts'
export { binOnPath, discover, pathEntries } from './discovery.ts'
export type { AdapterStatus } from './discovery.ts'
export { parseClaudeStreamJson } from './parse-answer.ts'
export { runTurn } from './run.ts'
export type { RunTurnOptions, RunTurnResult } from './run.ts'
export { ThreadStore, hasStore } from './threads.ts'
export type { MuxThread, MuxTurn } from './threads.ts'
export { knownClis, parseMuxInput } from './commands.ts'
export type { MuxRequest } from './commands.ts'
// No `export default`: cordis's unwrapExports prefers `default` and would
// hand apply's bare function to the loader, dropping the `inject` namespace
// export (empty inject = every service access throws). See plugin.ts.
