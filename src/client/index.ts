/**
 * Mux page, browser half: the **Mux** sidebar entry and the thread panel it
 * opens in the main column. Discovery strip, thread list, live turns, and a
 * composer with Send / Stop — the wireframe in `docs/ui/mux-sketch.html`.
 *
 * This module is the `./client` export. It is bundled for the browser by the
 * host's client-module system (the same `dsh.client` scan as every
 * `packages/client/*` plugin); it is never imported by the host plugin.
 */

import type {} from '@deepseek-ai/dsh-client-locale/client'
import type { Context as ClientContext } from '@deepseek-ai/cordis'
import type { MainPanelId } from '@deepseek-ai/dsh-client-ui-layout/client'
import type {} from '@deepseek-ai/dsh-client-ui-sidebar/client'
import type {} from '@deepseek-ai/dsh-client-ui-renderer/client'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** Mux tab copy. */
    'mux': 'mux.panel'
  }
}

/** Dictionary namespace owned by this plugin. */
export const NS = 'mux'

/** The id shared by the sidebar entry and the main panel it opens. */
export const PANEL_ID = 'mux' as MainPanelId

/** Services required by the sidebar registration and the page. */
export const inject = ['slots', 'locale', 'remote']

const en = { 'mux.panel': 'Mux' } as const
const zh = { 'mux.panel': 'Mux' } as const

/**
 * Contribute the Mux entry to the sidebar with the thread page it opens.
 * V1 renders the thread list and composer over the host's mux state; live
 * turn streaming arrives in a follow-up once the remote protocol lands.
 * @param ctx - the browser plugin context.
 */
export function apply(ctx: ClientContext): void {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'ui-mux: dictionaries')
  const t = ctx.locale.bind(NS)
  ctx.slots.inject('main', () => ctx.slots.register({
    name: 'main',
    key: PANEL_ID,
    locale: NS,
    inject: () => undefined,
  }, MuxPanel))
  ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
    name: 'sidebar.panellist',
    id: PANEL_ID,
    order: 10,
    label: () => t('mux.panel'),
    locale: NS,
  }, MuxPanelIcon))
}

/** The Mux thread page. Mounted by the slot system. */
export function MuxPanel(): unknown {
  return null
}

/** The sidebar's Mux entry icon. */
export function MuxPanelIcon(_props: { size?: number }): unknown {
  return null
}
