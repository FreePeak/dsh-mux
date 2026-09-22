# dsh-mux — PRD

Talk to other coding CLIs from inside this DSH GUI, and keep the thread.

## 1. Status

Accepted plan. `dsh-mux` is a **page and host plugin inside DSH** — not a standalone
app, not a HarnessRouter deployment. Its **code** lives in its own repo
(`@freepeak/dsh-mux`) so it installs as an external bundle, like
`@freepeak/dsh-feature-loop`.

## 2. Problem

DSH already ships Claude Code and Codex as subagents
(`@deepseek-ai/dsh-subagent-claude-code`, `@deepseek-ai/dsh-subagent-codex`), but both
are **unattended one-shots**: the parent session hands the child one task, permission
mode is fixed non-interactive, and only the final answer returns. You cannot type into
the child's session, steer it mid-run, or resume that thread from the GUI.

The other CLIs on this machine (`omp`, `pi`, `cursor agent`, `agy`, `command-code`,
`opencode`) have no DSH path at all. HarnessRouter
([github.com/HarnessRouter/harnessrouter](https://github.com/HarnessRouter/harnessrouter))
proves the desired interaction — pick a harness, watch it work, type the next message
into the same thread — but it is a separate product (own Docker console, login,
OpenAI-Responses API). Copying it would mean a second server and a second window.

## 3. Goal

`@freepeak/dsh-mux`, installed into the running web profile as an external bundle.
A **Mux** page in this GUI (`http://127.0.0.1:3081`) lists the CLIs, opens a thread on
one, shows its output as it arrives, and sends the next message into the same CLI
session. `/mux` and `/ask` do the same from the composer.

**Success criteria**

- Mux sidebar page lists six installed CLIs; `opencode` shows missing.
- A first message returns text in the panel (and the DSH transcript).
- A second message resumes the same CLI session id rather than starting fresh.
- A missing CLI never spawns. Stop kills the running turn.
- With feature-loop mounted and `gatePolicies.mux` unset, a send raises its review
  gate. With feature-loop absent, a send runs directly.

## 4. Non-goals (v1)

- Not an embedded terminal. Input is the Mux page (and composer); no CLI TUI,
  slash-command menu, or permission picker. Mux runs are non-interactive accept mode
  per adapter, so a run cannot block on a prompt nobody can see.
- Not a live bidirectional pipe. `omp`/`pi` have `--mode rpc`, the others do not.
  One process per turn, resumed by session id, is the ceiling that works for all
  seven (`ponytail:` one turn at a time per thread; rpc for omp/pi later).
- Not a HarnessRouter client, not a UHP server. No Docker, no second port, no login.
- Not multi-CLI fanout. One thread talks to one CLI.
- Not edits to feature-loop. Integration is the tool name plus a documented
  `gatePolicies.mux` line.
- Not installing the missing `opencode` binary.

## 5. Targets

| id | bin | first turn | next turn | live output |
|---|---|---|---|---|
| claude | `claude` | `-p --output-format stream-json` | `--resume <id> -p` | stream-json |
| omp | `omp` | `-p --mode json` | `--resume <id> -p` | json |
| pi | `pi` | `-p --mode json` | `--resume <id> -p` | json |
| cursor | `cursor` | `agent -p --output-format stream-json` | `agent --resume <id> -p` | stream-json |
| agy | `agy` | `-p --output-format stream-json` | `--conversation <id> -p` | stream-json |
| command-code | `command-code` | `-p --output-format json --skip-onboarding` | `--resume <id> -p` | json |
| opencode | `opencode` | not installed; adapter stays, discovery reports `missing` | — | — |

Prompt goes on **stdin**, never argv. `cwd` is the DSH session workspace. Env is
inherited (these CLIs hold their own credentials); never print env.
`opencode`'s print subcommand is confirmed only if the binary appears; until then it
is missing-safe.

## 6. Architecture

Full interactive diagram: [docs/diagrams/dsh-mux-architecture.html](diagrams/dsh-mux-architecture.html)
(spec: [dsh-mux-architecture.json](diagrams/dsh-mux-architecture.json)).

```text
 You ──► DSH Web GUI (:3081)
            │
     ┌──────┴──────┐
     ▼             ▼
 Mux page      DSH agent
 (type here)   (/ask, tool mux)
     │             │
     └──────┬──────┘
            ▼
       dsh-mux host ──► Threads (cliSessionId)
            │
            ▼
     Coding CLIs (claude · omp · pi · cursor · agy · command-code · opencode)
```

`feature-loop`, when mounted, sits on `tools/pre-execute` and gates tool `mux` by
name (`gatePolicies.mux`; unset = unclassified = irreversible = ask). No import of
its code.

## 7. One turn

Full interactive diagram: [docs/diagrams/dsh-mux-turn-workflow.html](diagrams/dsh-mux-turn-workflow.html).

```text
 You type ─► Mux page ─► runTurn ─┬─► CLI -p / --resume ─► stdout ─► Save session id ─► Thread view
                                  └─► missing / timeout ─► error (no hang)
```

`runTurn({ cli, prompt, cwd, resumeId })`:

- spawn bin with the adapter argv, `stdio: ['pipe','pipe','pipe']`; write prompt,
  close stdin.
- Ceilings: 10 min default timeout, 1 MiB combined output.
  (`ponytail:` raise via config, not streaming, for v1.)
- On timeout or dispose: `SIGTERM`, then `SIGKILL` after 3 s.
- Success = exit 0 and non-empty stdout; otherwise an error result naming the CLI,
  exit code, and the tail of stderr (last 2 KB).
- Never throws across the tool boundary; the thread record survives errors so the
  user can retry.

## 8. Threads and resume

Full interactive diagram: [docs/diagrams/dsh-mux-resume-sequence.html](diagrams/dsh-mux-resume-sequence.html).

```text
Turn 1: send(cli, prompt) → spawn -p → stream + session_id → save
Turn 2: send(threadId, prompt) → load session_id → --resume sess_abc -p → append turn
```

JSON store under the profile data dir, one object per thread:
`{ id, cli, cwd, cliSessionId, turns: [{ role, text, at }] }`.
New thread = no resume id. Reply = stored `cliSessionId` passed to that CLI's resume
flag. Delete removes the mux record only, never the CLI's own session files.

## 9. Host plugin

Cordis plugin `name = 'dsh-mux'`, `inject = ['tools', 'commands', ...]`.

- Tool `mux`: `{ tool: <one of seven ids>, prompt: string, threadId?: string }`.
  The model can start or continue a thread. Result is the text plus a one-line
  header (`mux · claude · 4.2s · exit 0`).
- `/mux` with no args opens the panel. `/mux <id> <prompt>` and `/ask <id> <prompt>`
  start a thread and follow the result into the transcript as a plugin-sourced
  message, so it is visible in the conversation as well as the panel. One parser,
  two names.
- Status + send host methods serve the page. Copy the remote shape of one existing
  service (`pluginManager`); if the boilerplate is larger than the feature, the page
  drives the same methods through the tool channel. No invented protocol.

Command-registry and client-bundle build flags are confirmed against the harness at
implementation time; the file list does not grow if those names differ.

## 10. The page

`MainPanelId = 'mux'`, `dsh.client` with `platform: web`, `./client` export.
Sidebar entry **Mux**.

Sketch (plan wireframe, not production UI): [docs/ui/mux-sketch.html](../ui/mux-sketch.html).

```text
┌────┬──────────────────────────────────────────────────────────────┐
│Chat│  [claude●] [omp●] [pi●] [cursor●] [agy●] [command-code●]     │
│Plug│  [opencode○ missing]                                         │
│Mux●│┌────────────┬───────────────────────────────────────────────┐│
│Set ││ Threads    │ you → claude                                  ││
│    ││ + New      │   find the flaky login root cause…             ││
│    ││ claude ·… ●│ claude · turn 1 · 12s                         ││
│    ││ omp · …    │   race on cookie write; smallest fix is …      ││
│    ││ cursor ·…  │ you → same thread                             ││
│    ││            │   apply the one-line fix                      ││
│    ││            │ claude · turn 2 · streaming… █                ││
│    ││            │───────────────────────────────────────────────││
│    ││            │ [ Message this CLI thread…          ] Stop Send││
│    │└────────────┴───────────────────────────────────────────────┘│
└────┴──────────────────────────────────────────────────────────────┘
```

- Top strip: the seven CLIs, installed or missing. Missing is not selectable.
- Left: threads, newest first, with the CLI name. A New button picks a CLI.
- Right: the turns of the selected thread, a text box, Send, Stop. Output appends
  while the turn runs. Same text also lands in the transcript.
- Refresh once after install for the client bundle. Host row reloads live
  (`patchReload: live` on the web profile). No second server.

## 11. Package shape

Node builtins only. No new runtime dependency.

```text
dsh-mux/
  package.json            # dsh.bundle + dsh.client
  cordis.patch.yml
  src/adapters.ts         # seven specs: argv, session-id parse, permission flag
  src/run.ts              # spawn one turn, stream, cap, kill
  src/threads.ts          # thread store
  src/commands.ts         # /mux + /ask parse (harness-free)
  src/plugin.ts           # host: tool mux, /mux, /ask, remote service
  src/client/index.ts     # Mux sidebar page
  test/*.test.ts          # node --test, no network, no real CLI
  docs/PRD.md             # this file
  docs/diagrams/*         # interactive archify diagrams + specs
  docs/ui/mux-sketch.html # plan wireframe
  README.md
```

Install path:

```bash
dsh plugin install /Users/linh.doan/work/harvey/freepeak/dsh-mux
```

Feature-loop line (README patch example): `gatePolicies.mux: auto-if-confident`
(or `ask`).

## 12. Tests

`node --experimental-strip-types --test test/*.test.ts`, no network, no real CLI:

- each adapter's first-turn argv and resume argv match §5; prompt is not in argv.
- a fixture script that prints a session id is parsed; a second turn's argv
  contains that id.
- exit 2 returns the stderr tail and does not clear the thread.
- a fixture that ignores SIGTERM is killed after the grace.
- an unknown id and a missing bin never spawn.
- `/ask` and `/mux` parse to the same `{ cli, prompt }`.

## 13. Acceptance

1. Package typechecks; tests pass.
2. Installed into the web profile, the Mux page lists six installed CLIs and marks
   opencode missing.
3. Sending "say hi" to claude shows the reply in the panel and the transcript.
4. A second message on that thread resumes the same CLI session.
5. Stop kills the running turn. A missing CLI cannot be sent to.

## 14. Assumptions and open confirmations

- Work stays in this `dsh-mux` repo. The harness checkout is read-only reference.
- `opencode`'s print subcommand is confirmed only if the binary appears.
- The exact `commands` inject name, remote-service base class import, and
  client-bundle build flags are read from the harness at implementation time.
  (Confirmed during implementation: `ctx.commands.register`, raw
  `ctx.tools.register` definitions, `TypertRemoteService` + `@Remote`,
  `dsh.client` + `./client` export + `__ModuleLoader__.load` factory bundle.)
- Direct input means the Mux page and `/ask`, not a PTY of the CLI's TUI.
