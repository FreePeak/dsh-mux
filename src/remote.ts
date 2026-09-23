/**
 * The dsh-mux host remote: `ctx.remote.mux.*` for the browser Mux page.
 *
 * Cordis loads this module as a class plugin (row `dsh-mux-remote` in the
 * bundle patch), mirroring `@deepseek-ai/dsh-plugin-manager`. Every marked
 * method answers the client's `ctx.remote.mux.<method>(...)` call with the
 * shared `Answer<T>` envelope — `{ ok: true, value }` / `{ ok: false, error }`.
 *
 * @module dsh-mux/remote
 */

import type { Context } from '@deepseek-ai/cordis'
import z from '@deepseek-ai/schemastery'
import { TypertRemoteService, Remote } from '@deepseek-ai/dsh-typert-protocol'
import { ADAPTERS } from './adapters.ts'
import type { AdapterStatus } from './discovery.ts'
import { discover } from './discovery.ts'
import type { MuxThread } from './threads.ts'
import { sendTurn, turnServices } from './plugin.ts'
import type { Config } from './plugin.ts'

/** Cordis plugin name (matches the patch row id). */
export const name = 'dsh-mux-remote'

/** One send request from the panel composer. */
export interface MuxSendRequest {
  readonly cli: string
  readonly prompt: string
  readonly threadId?: string
}

/**
 * Apply `Remote`'s marker without decorator syntax.
 *
 * Node 22 cannot parse decorators and tsdown/rolldown leaves them verbatim —
 * the harness's own build pipeline lowers them, external bundles never get
 * that pass. This performs exactly what the standard decorator does behind
 * `Remote`: register the per-instance initializer, then run it once against
 * an instance-shaped object so `mark()` lands on this class's prototype,
 * where `remoteMethods()` (the gateway) reads it.
 *
 * ponytail: upgrade path is a tsdown that lowers standard decorators — then
 * this goes back to being a plain `@Remote` line.
 * @param proto - the class prototype owning the method.
 * @param method - the public instance method name to mark.
 */
function markRemote(proto: object, method: string): void {
  let initializer: (this: unknown) => void = function () {}
  const fn = (proto as Record<string, unknown>)[method]
  if (typeof fn !== 'function') throw new Error(`typert-protocol: markRemote cannot find method "${method}"`)
  Remote(fn as never, {
    kind: 'method',
    name: method,
    private: false,
    static: false,
    addInitializer(next: (this: unknown) => void) { initializer = next },
  } as never)
  // The callback reads Object.getPrototypeOf(this); this object's prototype is
  // the class prototype, so the marker lands exactly where the gateway looks.
  initializer.call(Object.create(proto))
}

/** The Mux page's host service. */
export class MuxRemote extends TypertRemoteService {
  static inject = ['profileContext']
  // schemastery has no `.optional()`; every field defaults exactly like
  // plugin-manager's Config so an absent row config validates to {}.
  static Config: z<Config> = z.object({
    timeoutMs: z.number().step(1).min(1).default(600000),
    outputCapBytes: z.number().step(1).min(1).default(1048576),
    workspace: z.string().default(''),
  })

  private readonly services: ReturnType<typeof turnServices>
  private readonly workspace: string | undefined

  constructor(ctx: Context, config: Config) {
    super(ctx, 'mux')
    this.services = turnServices(ctx, config)
    this.workspace = config.workspace || undefined
  }

  /** Every adapter's availability against the host PATH. */
  discover(): AdapterStatus[] {
    return discover(ADAPTERS)
  }

  /** Every stored thread, newest first (turns included for the panel). */
  listThreads(): MuxThread[] {
    return this.services.store.list()
  }

  /** Forget one thread record (never the CLI's own session files). */
  deleteThread(id: string): boolean {
    return this.services.store.delete(id)
  }

  /** Run one turn over the shared pipeline; no threadId = new thread. */
  async send(request: MuxSendRequest): Promise<{ header: string, text: string, threadId: string }> {
    return sendTurn(this.services, {
      cli: request.cli,
      prompt: request.prompt,
      cwd: this.workspace ?? process.cwd(),
      ...(request.threadId === undefined || request.threadId === '' ? {} : { threadId: request.threadId }),
    })
  }
}

markRemote(MuxRemote.prototype, 'discover')
markRemote(MuxRemote.prototype, 'listThreads')
markRemote(MuxRemote.prototype, 'deleteThread')
markRemote(MuxRemote.prototype, 'send')

export default MuxRemote
