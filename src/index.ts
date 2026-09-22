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
export { ADAPTERS, ADAPTER_IDS, adapterFor, firstTurnArgv, resumeTurnArgv, scanSessionId } from './adapters.ts'
export type { CliSpec } from './adapters.ts'
export { binOnPath, discover, pathEntries } from './discovery.ts'
export type { AdapterStatus } from './discovery.ts'
export { runTurn } from './run.ts'
export type { RunTurnOptions, RunTurnResult } from './run.ts'
export { ThreadStore, hasStore } from './threads.ts'
export type { MuxThread, MuxTurn } from './threads.ts'
export { knownClis, parseMuxInput } from './commands.ts'
export type { MuxRequest } from './commands.ts'

import { apply } from './plugin.ts'

export default apply
