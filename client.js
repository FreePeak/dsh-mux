/**
 * Mux sidebar entry + main panel — this bundle's `./client` export.
 *
 * Served through the `dsh.client` contract and loaded with the published
 * registration protocol (hand-authored like apps/web's fixture-live-client:
 * external bundles ship a browser file directly; the harness's tsdown client
 * preset only builds in-repo packages).
 *
 * Host state flows over `ctx.remote.mux.*` (src/remote.ts): discover() drives
 * the strip, listThreads() the thread column, send() the composer.
 */
window.__ModuleLoader__.load({
  id: '@freepeak/dsh-mux',
  factory(require) {
    const React = require('react')
    const e = React.createElement
    const { useState, useEffect, useCallback } = React

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

    const style = document.createElement('style')
    style.dataset.plugin = '@freepeak/dsh-mux'
    style.textContent = `
      [data-mux-panel] { display: flex; flex-direction: column; height: 100%; background: var(--color-bg, #101114); color: var(--color-fg, #e6e6e6); font-size: 13px; }
      [data-mux-strip] { display: flex; gap: 6px; flex-wrap: wrap; padding: 10px 12px; border-bottom: 1px solid #26272b; }
      [data-mux-chip] { display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border: 1px solid #2f3035; border-radius: 999px; background: transparent; color: inherit; cursor: pointer; }
      [data-mux-chip][data-active="true"] { border-color: #4f8cff; color: #cfe1ff; }
      [data-mux-chip][data-installed="false"] { opacity: 0.55; }
      [data-mux-dot] { width: 7px; height: 7px; border-radius: 50%; background: #666; }
      [data-mux-dot][data-on="true"] { background: #3ecf6f; }
      [data-mux-body] { display: flex; flex: 1; min-height: 0; }
      [data-mux-threads] { width: 240px; border-right: 1px solid #26272b; display: flex; flex-direction: column; }
      [data-mux-threads-head] { display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; border-bottom: 1px solid #26272b; }
      [data-mux-new] { border: 1px solid #2f3035; background: transparent; color: inherit; border-radius: 6px; padding: 3px 10px; cursor: pointer; }
      [data-mux-thread] { padding: 9px 12px; border-bottom: 1px solid #1d1e22; cursor: pointer; }
      [data-mux-thread][data-active="true"] { background: #1b2333; }
      [data-mux-thread-title] { display: flex; gap: 6px; align-items: center; font-weight: 600; }
      [data-mux-thread-preview] { color: #9a9aa0; margin-top: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      [data-mux-main] { flex: 1; display: flex; flex-direction: column; min-width: 0; }
      [data-mux-turns] { flex: 1; overflow-y: auto; padding: 12px; }
      [data-mux-turn] { margin-bottom: 10px; padding: 8px 10px; border-radius: 8px; max-width: 90%; line-height: 1.45; white-space: pre-wrap; word-break: break-word; }
      [data-mux-turn][data-role="prompt"] { background: #22314d; margin-left: auto; }
      [data-mux-turn][data-role="answer"] { background: #1a1b1f; border: 1px solid #26272b; }
      [data-mux-turn][data-role="error"] { background: #3a1d1d; border: 1px solid #5c2b2b; color: #ffb4b4; }
      [data-mux-role] { font-size: 11px; color: #9a9aa0; margin-bottom: 3px; }
      [data-mux-empty] { color: #9a9aa0; margin: auto; text-align: center; }
      [data-mux-composer] { display: flex; gap: 8px; padding: 10px 12px; border-top: 1px solid #26272b; align-items: flex-end; }
      [data-mux-composer] textarea { flex: 1; resize: none; min-height: 38px; max-height: 140px; background: #17181c; color: inherit; border: 1px solid #2f3035; border-radius: 8px; padding: 9px 10px; font: inherit; }
      [data-mux-composer] button { border: 1px solid #2f3035; background: #2a3550; color: #cfe1ff; border-radius: 8px; padding: 9px 16px; cursor: pointer; font-weight: 600; }
      [data-mux-composer] button:disabled { opacity: 0.5; cursor: not-allowed; }
      [data-mux-notice] { padding: 7px 12px; background: #3a1d1d; color: #ffb4b4; }
      [data-mux-notice][data-kind="info"] { background: #1c2a1d; color: #a9e5bb; }
      [data-mux-badge] { font-size: 11px; color: #cfe1ff; background: #1b2333; border: 1px solid #2f3d5c; border-radius: 6px; padding: 3px 8px; }
    `
    document.head.append(style)

    /** Sidebar glyph: multiplex arrows, sized from the sidebar's request. */
    function MuxIcon({ size }) {
      const s = size ?? 16
      return e('svg', { width: s, height: s, viewBox: '0 0 16 16', 'data-mux-icon': '', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.6, 'stroke-linecap': 'round' },
        e('path', { d: 'M2 4.5h9.5M9 2l2.5 2.5L9 7' }),
        e('path', { d: 'M14 11.5H4.5M7 9l-2.5 2.5L7 14' }))
    }

    /** The main panel: discovery strip, thread list, live turns, composer. */
    function MuxPanel({ host, ready }) {
      const [statuses, setStatuses] = useState([])
      const [threads, setThreads] = useState([])
      const [selectedId, setSelectedId] = useState(null)
      const [activeCli, setActiveCli] = useState('claude')
      const [prompt, setPrompt] = useState('')
      const [busy, setBusy] = useState(false)
      const [notice, setNotice] = useState(null)

      const refresh = useCallback(async () => {
        try {
          await ready
          const mux = host.get('remote.mux')
          if (mux === undefined) {
            setNotice({ kind: 'error', text: 'mux host remote not available (mount failed).' })
            return
          }
          const [list, found] = await Promise.all([
            mux.listThreads(),
            mux.discover(),
          ])
          if (list.ok) setThreads(list.value)
          else setNotice({ kind: 'error', text: `threads: ${list.error.message}` })
          if (found.ok) setStatuses(found.value)
          else setNotice({ kind: 'error', text: `discover: ${found.error.message}` })
        } catch (error) {
          setNotice({ kind: 'error', text: String(error && error.message ? error.message : error) })
        }
      }, [host, ready])

      useEffect(() => { void refresh() }, [refresh])

      const thread = threads.find(item => item.id === selectedId) ?? null
      const tool = thread !== null ? thread.cli : activeCli
      const statusOf = id => statuses.find(item => item.id === id)
      const installedOf = id => statusOf(id)?.installed === true
      const canSend = !busy && prompt.trim().length > 0 && installedOf(tool)

      const send = async () => {
        const text = prompt.trim()
        if (text.length === 0 || busy) return
        setBusy(true)
        setNotice(null)
        try {
          await ready
          const mux = host.get('remote.mux')
          if (mux === undefined) throw new Error('mux host remote not available')
          const answer = await mux.send({
            cli: tool,
            prompt: text,
            ...(thread === null ? {} : { threadId: thread.id }),
          })
          if (!answer.ok) {
            setNotice({ kind: 'error', text: answer.error.message })
            return
          }
          setPrompt('')
          setSelectedId(answer.value.threadId)
          await refresh()
        } catch (error) {
          setNotice({ kind: 'error', text: String(error && error.message ? error.message : error) })
        } finally {
          setBusy(false)
        }
      }

      const newThread = () => {
        setSelectedId(null)
        setPrompt('')
        setNotice(null)
      }

      const chipClick = id => {
        if (!installedOf(id)) return
        setActiveCli(id)
        if (thread !== null && thread.cli !== id) setSelectedId(null)
      }

      const onKeyDown = event => {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault()
          void send()
        }
      }

      const lastPreview = item => {
        const turns = item.turns ?? []
        const last = turns[turns.length - 1]
        return last === undefined ? 'no turns yet' : last.text.replace(/\s+/g, ' ').slice(0, 80)
      }

      return e('div', { 'data-mux-panel': '' },
        e('div', { 'data-mux-strip': '' },
          ...CLIS.map(cli => {
            const status = statusOf(cli.id)
            const installed = status?.installed === true
            return e('button', {
              key: cli.id,
              type: 'button',
              'data-mux-chip': '',
              'data-active': String(tool === cli.id),
              'data-installed': String(installed),
              title: status === undefined ? 'checking…' : installed ? status.path : `${cli.id} not on PATH`,
              onClick: () => chipClick(cli.id),
            },
              e('span', { 'data-mux-dot': '', 'data-on': String(installed) }),
              cli.label)
          })),
        notice !== null ? e('div', { 'data-mux-notice': '', 'data-kind': notice.kind }, notice.text) : null,
        e('div', { 'data-mux-body': '' },
          e('div', { 'data-mux-threads': '' },
            e('div', { 'data-mux-threads-head': '' },
              e('strong', null, 'Threads'),
              e('button', { type: 'button', 'data-mux-new': '', onClick: newThread }, 'New')),
            ...threads.map(item => e('div', {
              key: item.id,
              'data-mux-thread': '',
              'data-active': String(item.id === selectedId),
              onClick: () => setSelectedId(item.id),
            },
              e('div', { 'data-mux-thread-title': '' },
                CLIS.find(cli => cli.id === item.cli)?.label ?? item.cli,
                item.cliSessionId !== undefined ? e('span', { title: `resumes ${item.cliSessionId}` }, '●') : null),
              e('div', { 'data-mux-thread-preview': '' }, lastPreview(item)))),
            threads.length === 0
              ? e('div', { 'data-mux-empty': '', style: { padding: '16px 12px' } }, 'No threads yet — pick a CLI and send a message.')
              : null),
          e('div', { 'data-mux-main': '' },
            e('div', { 'data-mux-turns': '' },
              // Spread outside the ternary: a ternary branch is one argument,
              // and `...` is only legal as a direct call/array element.
              ...(thread === null
                ? [e('div', { 'data-mux-empty': '' },
                    `New thread on ${CLIS.find(cli => cli.id === tool)?.label ?? tool}.`,
                    e('br'), 'Send a message to start it.')]
                : (thread.turns ?? []).map((turn, index) => e('div', {
                    key: index,
                    'data-mux-turn': '',
                    'data-role': turn.role,
                  },
                    e('div', { 'data-mux-role': '' },
                      turn.role === 'prompt' ? 'you' : turn.role === 'error' ? 'error' : CLIS.find(cli => cli.id === thread.cli)?.label ?? thread.cli),
                    turn.text)))),
            e('div', { 'data-mux-composer': '' },
              e('span', { 'data-mux-badge': '' }, tool + (thread !== null && thread.cliSessionId !== undefined ? ` · ${thread.cliSessionId}` : '')),
              e('textarea', {
                value: prompt,
                placeholder: 'Message this CLI thread…',
                rows: 1,
                onChange: event => setPrompt(event.target.value),
                onKeyDown,
              }),
              e('button', { type: 'button', disabled: !canSend, onClick: () => void send() },
                busy ? 'Sending…' : 'Send'),
              e('button', {
                type: 'button',
                disabled: true,
                title: 'Stop arrives with remote cancellation in v1.1; the host enforces a 10 min per-turn timeout.',
              }, 'Stop')))))
    }

    /**
     * This package's Host-Remote contribution (the form the typert generator
     * emits as `./remote` — external bundles hand-author it). The harness's own
     * remotes assembly doesn't know external packages, so the page mounts its
     * own. `codec.create().parse()` is the only schema call the gateway makes,
     * so identity parses are full-fidelity for JSON-source parameters.
     */
    const identity = () => ({ parse: value => value })
    const jsonCodec = typeSymbol => ({ mode: 'strict', typeSymbol, create: identity })
    const param = (name, typeSymbol) => ({ name, wire: name, source: 'json', codec: jsonCodec(typeSymbol) })
    const result = typeSymbol => jsonCodec(typeSymbol)
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

    return {
      // 'remote.mux' is NOT injected: this bundle mounts the contribution
      // itself in apply, so waiting for the namespace before apply would deadlock.
      inject: ['slots', 'locale', 'remote'],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register(NS, {
          zh: { 'mux.panel': 'Mux' },
          en: { 'mux.panel': 'Mux' },
        }), 'dsh-mux: dictionaries')
        // Mount this package's Host-Remote contribution (validated by probe:
        // ctx.get('remote.mux') resolves after mount; direct property reads
        // throw "without inject", so the panel always goes through get()).
        const ready = ctx.remote.$mount(TYPERT_REMOTE)
          .then(dispose => dispose)
          .catch(error => { console.error('dsh-mux: remote mount failed', error); return undefined })
        // Console/debug + validation hook: call any mounted remote namespace
        // from devtools (or scripts/drive.py). Reads go through ctx.get —
        // direct property access throws "without inject" by design.
        window.__dshMux = Object.freeze({
          ready,
          call: (namespace, method, ...args) => {
            const service = ctx.get(`remote.${namespace}`)
            if (service === undefined || typeof service[method] !== 'function') {
              throw new Error(`remote.${namespace}.${method} not available`)
            }
            return service[method](...args)
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
        // The main-column page itself.
        ctx.slots.inject('main', () => ctx.slots.register({
          name: 'main',
          key: PANEL_ID,
          locale: NS,
        }, () => e(MuxPanel, { host: ctx, ready })))
        // Unmount this package's namespaces with the fiber.
        return () => { void ready.then(dispose => dispose?.()).catch(() => {}) }
      },
    }
  },
})
