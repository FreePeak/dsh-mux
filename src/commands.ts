/**
 * `/mux` and `/ask` share one parser: `/ask` is the short alias, not a second
 * code path. Harness-free so tests cover it without a runtime.
 *
 * @module dsh-mux/commands
 */

import { ADAPTER_IDS } from './adapters.ts'

/** What the user asked for. */
export type MuxRequest =
  | { readonly kind: 'open' }
  | { readonly kind: 'send'; readonly cli: string; readonly prompt: string }
  | { readonly kind: 'error'; readonly text: string }

const USAGE = 'Usage: /mux [<cli> <prompt>] · /ask <cli> <prompt>'

/** List the known CLI ids for an error line. */
export function knownClis(): string {
  return ADAPTER_IDS.join(', ')
}

/**
 * Parse the text after `/mux` or `/ask`.
 * @param rawInput - exact text following the command name.
 */
export function parseMuxInput(rawInput: string): MuxRequest {
  const input = rawInput.trim()
  if (input.length === 0) return { kind: 'open' }
  const space = input.search(/\s/)
  if (space === -1) {
    return {
      kind: 'error',
      text: `A CLI id alone sends nothing. ${USAGE} Known: ${knownClis()}.`,
    }
  }
  const cli = input.slice(0, space).toLowerCase()
  const prompt = input.slice(space).trim()
  if (!ADAPTER_IDS.includes(cli)) {
    return {
      kind: 'error',
      text: `Unknown CLI "${cli}". Known: ${knownClis()}.`,
    }
  }
  if (prompt.length === 0) {
    return { kind: 'error', text: `Empty prompt. ${USAGE}` }
  }
  return { kind: 'send', cli, prompt }
}
