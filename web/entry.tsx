/**
 * The Mux sidebar entry + main panel — this bundle's `./client` export.
 *
 * Built by `web/build.mjs` (esbuild → ModuleLoader CJS factory). Shape mirrors
 * the hand-authored client contract: `inject` + `apply(ctx)`. React comes from
 * the host module table (external in the bundle).
 *
 * Host state flows over `ctx.remote.mux.*` (src/remote.ts): discover() drives
 * the strip, listThreads() the thread column, send() the composer.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  AuiIf,
  ActionBarPrimitive,
  AssistantRuntimeProvider,
  ComposerPrimitive,
  MessagePartPrimitive,
  MessagePrimitive,
  ThreadPrimitive,
  useExternalStoreRuntime,
} from '@assistant-ui/react'
import type { ThreadMessageLike } from '@assistant-ui/react'
import tokensCss from './tokens.css'
// assistant-ui's precompiled stylesheet (text-injected with tokens below).
// The package export map rewrites ./dist/styles/* onto the styles root,
// so the subpath is just the file name under dist/styles/.
import auiCss from '@assistant-ui/styles/index.css'

// ── remote descriptor (host /src/remote.ts) ────────────────────────────────
const identity = () => ({ parse: (value: unknown) => value })
const jsonCodec = (typeSymbol: string) => ({ mode: 'strict', typeSymbol, create: identity })
const param = (name: string, typeSymbol: string) => ({ name, wire: name, source: 'json', codec: jsonCodec(typeSymbol) })
const result = (typeSymbol: string) => jsonCodec(typeSymbol)

const TYPERT_REMOTE = {
  package: '@freepeak/dsh-mux',
  descriptors: [
    {
      id: '@freepeak/dsh-mux#mux/discover',
      service: 'mux', namespace: 'mux', method: 'discover',
      invocation: { kind: 'direct' },
      parameters: [],
      result: result('@freepeak/dsh-mux#AdapterStatus[]'),
    },
    {
      id: '@freepeak/dsh-mux#mux/listThreads',
      service: 'mux', namespace: 'mux', method: 'listThreads',
      invocation: { kind: 'direct' },
      parameters: [],
      result: result('@freepeak/dsh-mux#MuxThread[]'),
    },
    {
      id: '@freepeak/dsh-mux#mux/deleteThread',
      service: 'mux', namespace: 'mux', method: 'deleteThread',
      invocation: { kind: 'direct' },
      parameters: [param('id', 'string')],
      result: result('boolean'),
    },
    {
      id: '@freepeak/dsh-mux#mux/send',
      service: 'mux', namespace: 'mux', method: 'send',
      invocation: { kind: 'direct' },
      parameters: [param('request', '@freepeak/dsh-mux#MuxSendRequest')],
      result: result('@freepeak/dsh-mux#MuxTurnResult'),
    },
  ],
}

const NS = 'mux'
const PANEL_ID = 'mux'
// id/label parity with src/adapters.ts — the ids are the wire contract.
const CLIS = [
  { id: 'claude', label: 'Claude Code' },
  { id: 'omp', label: 'OMP' },
  { id: 'pi', label: 'Pi' },
  { id: 'cursor', label: 'Cursor' },
  { id: 'agy', label: 'Agy' },
  { id: 'command-code', label: 'Command Code' },
  { id: 'opencode', label: 'opencode' },
]

// Cursor Dark Anysphere tokens, scoped under [data-mux-panel].
let style: HTMLStyleElement | undefined
function ensureStyles(): void {
  if (style !== undefined) return
  style = document.createElement('style')
  style.dataset.plugin = '@freepeak/dsh-mux'
  style.textContent = `${auiCss}\n${tokensCss}`
  document.head.append(style)
}

/** Sidebar glyph: multiplex arrows, sized from the sidebar's request. */
function MuxIcon({ size }: { size?: number }): React.ReactElement {
  const s = size ?? 16
  return React.createElement('svg', {
    width: s, height: s, viewBox: '0 0 16 16', 'data-mux-icon': '', fill: 'none',
    stroke: 'currentColor', 'stroke-width': 1.6, 'stroke-linecap': 'round',
  },
    React.createElement('path', { d: 'M2 4.5h9.5M9 2l2.5 2.5L9 7' }),
    React.createElement('path', { d: 'M14 11.5H4.5M7 9l-2.5 2.5L7 14' }))
}

interface AdapterStatus {
  id: string
  installed: boolean
  path?: string
  enabled?: boolean
}

interface MuxTurn {
  role: 'prompt' | 'answer' | 'error'
  text: string
  at: number
}

interface MuxThread {
  id: string
  cli: string
  cwd: string
  cliSessionId?: string
  createdAt: number
  turns: MuxTurn[]
}

type Answer<T> =
  | { ok: true; value: T }
  | { ok: false; error: { message: string } }

/**
 * Map mux turns onto assistant-ui messages for the selected thread.
 * prompt → user, answer → assistant, error → assistant with error marker
 * in metadata (rendered styled, not as a fake user turn).
 */
export function turnsToMessages(thread: MuxThread | null): ThreadMessageLike[] {
  if (thread === null) return []
  return thread.turns.map((turn, index) => ({
    id: `${thread.id}:${index}:${turn.at}`,
    role: turn.role === 'prompt' ? 'user' : 'assistant',
    content: [{ type: 'text', text: turn.text }],
    ...(turn.role === 'error' ? { metadata: { muxError: true } } : {}),
  } as ThreadMessageLike))
}

/**
 * One message bubble. Uses the children render fn for Parts (the current
 * API) so each text part becomes a real <p>, and an ActionBar so a CLI answer
 * can be copied — the single most useful action for terminal output.
 */
function MuxMessage({ role }: { role: 'user' | 'assistant' }): React.ReactElement {
  return (
    <MessagePrimitive.Root data-mux-turn="" data-role={role} className="mux-msg">
      <div className="mux-msg-body">
        <MessagePrimitive.Parts>
          {({ part }) =>
            part.type === 'text'
              ? <p className="mux-text"><MessagePartPrimitive.Text /></p>
              : null
          }
        </MessagePrimitive.Parts>
        <MessagePrimitive.Error className="mux-msg-error" />
      </div>
      {role === 'assistant' && (
        <ActionBarPrimitive.Root
          hideWhenRunning
          autohide="not-last"
          autohideFloat="always"
          className="mux-actionbar"
        >
          <ActionBarPrimitive.Copy
            copiedDuration={2000}
            className="mux-action"
            title="Copy answer"
          >
            <span className="mux-action-copy" aria-hidden="true">Copy</span>
            <span className="mux-action-done" aria-hidden="true">Copied</span>
          </ActionBarPrimitive.Copy>
        </ActionBarPrimitive.Root>
      )}
    </MessagePrimitive.Root>
  )
}

/** The main panel: discovery strip, session rail, aui thread, composer. */
function MuxPanel({ host, ready }: {
  host: { get(path: string): unknown, effect(fn: () => unknown, key: string): unknown, remote: { $mount(d: unknown): Promise<unknown> }, locale: { register(ns: string, dict: unknown): unknown }, slots: { inject(name: string, fn: () => unknown): unknown, register(spec: unknown, comp: unknown): unknown } },
  ready: Promise<unknown>,
}): React.ReactElement {
  const [statuses, setStatuses] = useState<AdapterStatus[]>([])
  const [threads, setThreads] = useState<MuxThread[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [activeCli, setActiveCli] = useState('claude')
  const [busy, setBusy] = useState(false)
  const [notice, setNotice] = useState<{ kind: string, text: string } | null>(null)

  const refresh = useCallback(async () => {
    try {
      await ready
      const mux = host.get('remote.mux') as {
        listThreads(): Promise<Answer<MuxThread[]>>
        discover(): Promise<Answer<AdapterStatus[]>>
      } | undefined
      if (mux === undefined) {
        setNotice({ kind: 'error', text: 'mux host remote not available (mount failed).' })
        return
      }
      const [list, found] = await Promise.all([mux.listThreads(), mux.discover()])
      if (list.ok) setThreads(list.value)
      else setNotice({ kind: 'error', text: `threads: ${list.error.message}` })
      if (found.ok) setStatuses(found.value)
      else setNotice({ kind: 'error', text: `discover: ${found.error.message}` })
    } catch (error) {
      setNotice({ kind: 'error', text: String(error instanceof Error ? error.message : error) })
    }
  }, [host, ready])

  useEffect(() => { void refresh() }, [refresh])

  const thread = threads.find(item => item.id === selectedId) ?? null
  const tool = thread !== null ? thread.cli : activeCli
  const statusOf = (id: string): AdapterStatus | undefined => statuses.find(item => item.id === id)
  const installedOf = (id: string): boolean => statusOf(id)?.installed === true
  const enabledOf = (id: string): boolean => statusOf(id)?.enabled !== false

  // One send path for every entry point (composer Enter, Send click, /mux).
  // Takes the text explicitly so aui's onNew can hand it over without the
  // deferred read of composer state that used to race the send.
  const send = useCallback(async (raw: string): Promise<void> => {
    const text = raw.trim()
    if (text.length === 0 || busy || !enabledOf(tool)) return
    setBusy(true)
    setNotice(null)
    try {
      await ready
      const mux = host.get('remote.mux') as {
        send(req: { cli: string, prompt: string, threadId?: string }): Promise<Answer<{ header: string, text: string, threadId: string }>>
      } | undefined
      if (mux === undefined) throw new Error('mux host remote not available')
      const answer = await mux.send({
        cli: tool,
        prompt: text,
        ...(selectedId !== null && selectedId !== '' ? { threadId: selectedId } : {}),
      })
      if (!answer.ok) {
        setNotice({ kind: 'error', text: answer.error.message })
        return
      }
      setSelectedId(answer.value.threadId)
      await refresh()
    } catch (error) {
      setNotice({ kind: 'error', text: String(error instanceof Error ? error.message : error) })
    } finally {
      setBusy(false)
    }
  }, [busy, host, ready, refresh, selectedId, tool])

  // `onNew` is rebuilt every render; a ref keeps it pointing at the current
  // send without re-subscribing the runtime on every keystroke-driven render.
  const sendRef = useRef(send)
  sendRef.current = send

  const newThread = useCallback(() => {
    setSelectedId(null)
    setNotice(null)
  }, [])

  const chipClick = useCallback((id: string): void => {
    if (!installedOf(id) || !enabledOf(id)) return
    setActiveCli(id)
    if (thread !== null && thread.cli !== id) setSelectedId(null)
  }, [installedOf, thread])

  const deleteThread = useCallback(async (id: string): Promise<void> => {
    try {
      await ready
      const mux = host.get('remote.mux') as { deleteThread(id: string): Promise<Answer<boolean>> } | undefined
      if (mux === undefined) return
      await mux.deleteThread(id)
      if (selectedId === id) setSelectedId(null)
      await refresh()
    } catch (error) {
      setNotice({ kind: 'error', text: String(error instanceof Error ? error.message : error) })
    }
  }, [host, ready, refresh, selectedId])

  const lastPreview = (item: MuxThread): string => {
    const turns = item.turns ?? []
    const last = turns[turns.length - 1]
    return last === undefined ? 'no turns yet' : last.text.replace(/\s+/g, ' ').slice(0, 80)
  }

  const messages = turnsToMessages(thread)

  const runtime = useExternalStoreRuntime({
    messages,
    isRunning: busy,
    convertMessage: (message: ThreadMessageLike) => message,
    onNew: async (message) => {
      // onNew receives an AppendMessage — an object whose `.content` is the
      // parts array (or a plain string). Handle all three shapes so a future
      // runtime change degrades to "ignore" rather than a thrown TypeError.
      const raw = (message as { content?: unknown } | string | undefined)
      const parts = typeof raw === 'string' ? raw : raw?.content
      const text = typeof parts === 'string'
        ? parts
        : Array.isArray(parts)
          ? parts.map(part => (part as { type?: string, text?: string }).type === 'text'
              ? (part as { text?: string }).text ?? ''
              : '').join('')
          : ''
      if (text.trim().length === 0) return
      void sendRef.current(text)
    },
  })

  return (
    <div data-mux-panel="">
      <div data-mux-strip="">
        {CLIS.map(cli => {
          const status = statusOf(cli.id)
          const installed = status?.installed === true
          const enabled = status?.enabled !== false
          const title = status === undefined
            ? 'checking…'
            : !installed
              ? `${cli.id} not on PATH`
              : !enabled
                ? `${cli.id} is disabled in this build (only claude enabled)`
                : status.path ?? cli.id
          return (
            <button
              key={cli.id}
              type="button"
              data-mux-chip=""
              data-active={String(tool === cli.id)}
              data-installed={String(installed)}
              data-enabled={String(enabled)}
              title={title}
              disabled={!installed || !enabled}
              onClick={() => chipClick(cli.id)}
            >
              <span data-mux-dot="" data-on={String(installed)} data-enabled={String(enabled)} />
              {cli.label}
            </button>
          )
        })}
      </div>
      {notice !== null && (
        <div data-mux-notice="" data-kind={notice.kind}>{notice.text}</div>
      )}
      <div data-mux-body="">
        <div data-mux-threads="">
          <div data-mux-threads-head="">
            <strong>Threads</strong>
            <button type="button" data-mux-new="" onClick={newThread}>New</button>
          </div>
          {threads.map(item => (
            <div
              key={item.id}
              data-mux-thread=""
              data-active={String(item.id === selectedId)}
              onClick={() => setSelectedId(item.id)}
            >
              <div data-mux-thread-title="">
                {CLIS.find(cli => cli.id === item.cli)?.label ?? item.cli}
                {item.cliSessionId !== undefined && (
                  <span data-mux-resume="" title={`resumes ${item.cliSessionId}`}>●</span>
                )}
                <button
                  type="button"
                  data-mux-delete=""
                  title="Delete thread (CLI session files are kept)"
                  onClick={(event) => {
                    event.stopPropagation()
                    void deleteThread(item.id)
                  }}
                >
                  ×
                </button>
              </div>
              <div data-mux-thread-preview="">{lastPreview(item)}</div>
            </div>
          ))}
          {threads.length === 0 && (
            <div data-mux-empty="" style={{ padding: '16px 12px' }}>
              No threads yet — pick a CLI and send a message.
            </div>
          )}
        </div>
        <div data-mux-main="">
          <AssistantRuntimeProvider runtime={runtime}>
            <ThreadPrimitive.Root>
              <ThreadPrimitive.Viewport data-mux-turns="">
                {/* Empty state: aui's own signal, not our `thread === null` guess. */}
                <AuiIf condition={(s) => s.thread.isEmpty}>
                  <div data-mux-empty="" className="mux-empty">
                    <div className="mux-empty-title">
                      {`New thread on ${CLIS.find(cli => cli.id === tool)?.label ?? tool}.`}
                    </div>
                    <div className="mux-empty-hint">Send a message to start it.</div>
                  </div>
                </AuiIf>
                <ThreadPrimitive.Messages>
                  {({ message }) =>
                    message.role === 'user'
                      ? <MuxMessage role="user" />
                      : <MuxMessage role="assistant" />
                  }
                </ThreadPrimitive.Messages>
                <ThreadPrimitive.ScrollToBottom
                  className="mux-scroll-bottom"
                  aria-label="Scroll to latest"
                >
                  ↓
                </ThreadPrimitive.ScrollToBottom>
                {/* Registers composer height with the auto-scroll system so the
                    last message is never hidden behind it. */}
                <ThreadPrimitive.ViewportFooter className="mux-footer">
                  <div data-mux-composer="">
                    <span data-mux-badge="" title={thread?.cliSessionId === undefined
                      ? `Sending as ${tool}`
                      : `Resumes CLI session ${thread.cliSessionId}`}>
                      {tool + (thread !== null && thread.cliSessionId !== undefined
                        ? ` · ${thread.cliSessionId.slice(0, 8)}`
                        : '')}
                    </span>
                    {/* Real ComposerPrimitive: aui's internal composer owns the
                        text, so Send gates itself on empty/running and Enter
                        submits for free. `disabled` additionally holds it shut
                        while this CLI is unavailable. */}
                    <ComposerPrimitive.Root
                      data-mux-composer-root=""
                      className="mux-composer-form"
                      compact
                    >
                      <ComposerPrimitive.Input
                        data-mux-input=""
                        placeholder={`Message ${CLIS.find(cli => cli.id === tool)?.label ?? tool}…`}
                        rows={1}
                        className="mux-input"
                        submitMode="enter"
                      />
                      <ComposerPrimitive.Send
                        data-mux-send=""
                        className="mux-send"
                        disabled={busy || !installedOf(tool) || !enabledOf(tool)}
                        aria-label="Send message"
                      >
                        {busy ? 'Running…' : 'Send'}
                      </ComposerPrimitive.Send>
                    </ComposerPrimitive.Root>
                  </div>
                </ThreadPrimitive.ViewportFooter>
              </ThreadPrimitive.Viewport>
            </ThreadPrimitive.Root>
          </AssistantRuntimeProvider>
        </div>
      </div>
    </div>
  )
}

/** The client module: DSH ModuleLoader contract. */
export const inject = ['slots', 'locale', 'remote']

export function apply(ctx: {
  effect(fn: () => unknown, key: string): unknown
  locale: { register(ns: string, dict: Record<string, string>): unknown }
  remote: { $mount(descriptor: unknown): Promise<unknown> }
  slots: {
    inject(name: string, fn: () => unknown): unknown
    register(spec: Record<string, unknown>, component: unknown): unknown
  }
  get(path: string): unknown
}): () => void {
  ensureStyles()
  ctx.effect(() => ctx.locale.register(NS, {
    zh: { 'mux.panel': 'Mux' },
    en: { 'mux.panel': 'Mux' },
  }), 'dsh-mux: dictionaries')
  // Mount this package's Host-Remote contribution (validated by probe:
  // ctx.get('remote.mux') resolves after mount; direct property reads
  // throw "without inject", so the panel always goes through get()).
  const ready = ctx.remote.$mount(TYPERT_REMOTE)
    .then(dispose => dispose)
    .catch((error: unknown) => {
      console.error('dsh-mux: remote mount failed', error)
      return undefined
    })
  // Console/debug + validation hook: call any mounted remote namespace
  // from devtools (or scripts/drive.py). Reads go through ctx.get —
  // direct property access throws "without inject" by design.
  ;(window as unknown as { __dshMux?: unknown }).__dshMux = Object.freeze({
    ready,
    call: (namespace: string, method: string, ...args: unknown[]) => {
      const service = ctx.get(`remote.${namespace}`) as Record<string, ((...a: unknown[]) => unknown) | undefined> | undefined
      if (service === undefined || typeof service[method] !== 'function') {
        throw new Error(`remote.${namespace}.${method} not available`)
      }
      return (service[method] as (...a: unknown[]) => unknown)(...args)
    },
  })
  // Sidebar entry: the sidebar owns the button; `id` selects this panel.
  ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
    name: 'sidebar.panellist',
    id: PANEL_ID,
    order: 10,
    label: 'Mux',
    locale: NS,
  }, MuxIcon))
  ctx.slots.inject('main', () => ctx.slots.register({
    name: 'main',
    key: PANEL_ID,
    locale: NS,
  }, () => React.createElement(MuxPanel, { host: ctx, ready })))
  // Unmount this package's namespaces with the fiber.
  return () => { void ready.then(dispose => (dispose as (() => void) | undefined)?.()).catch(() => {}) }
}

