<p align="center">
  <h1 align="center">dsh-mux</h1>
  <p align="center">
    Talk to other coding CLIs from inside the DeepSeek Harness GUI — and keep the thread.
  </p>
  <p align="center">
    <a href="#installation">Install</a> •
    <a href="#supported-clis">CLIs</a> •
    <a href="#architecture">Architecture</a> •
    <a href="#development">Dev</a> •
    <a href="#license">License</a>
  </p>
</p>

![Version](https://img.shields.io/badge/version-0.1.0-informational)
![DSH Plugin](https://img.shields.io/badge/dsh-plugin-external-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Tests](https://img.shields.io/badge/tests-28%20passing-brightgreen)
![Validated](https://img.shields.io/badge/validated-docker%20container-2ea44f)

---

## What

`dsh-mux` is a **DeepSeek Harness plugin** that lets you talk to other coding
language models — Claude Code, OMP, Pi, Cursor, Agy, Command Code, opencode —
directly from the DSH web GUI, while keeping each conversation alive as a thread.

Instead of switching terminals, open a thread in DSH, type a follow-up, and the
same CLI session continues where it left off. Stream output in real time, stop a
turn in progress, or hand a session id to the model with the **mux** tool.

It is also a **sidebar page** — "Mux" appears alongside DSH's other panels and
opens a thread list, live turns, and a Send / Stop composer.

> This is **not** a standalone server, not a HarnessRouter deployment, and not a
> live bidirectional PTY. It runs one CLI process per turn, resumed by session id.

## Table of contents

- [Installation](#installation)
- [Supported CLIs](#supported-clis)
- [Architecture](#architecture)
- [How it works](#how-it-works)
- [Development](#development)
- [License](#license)
- [Contributing](#contributing)

## Installation

Install from the source directory as an external DSH bundle:

```bash
dsh plugin install /path/to/dsh-mux
```

Installed into the active web profile (patch reload is live on that profile, so
future edits to the bundle are picked up without a full restart).

> Make sure the target CLI binaries (`claude`, `omp`, `pi`, `cursor`, `agy`,
> `command-code`) are on your `PATH`. `opencode` is tracked but reported as
> missing until its binary appears.

### First run

1. Open the DSH web GUI (`dsh web` prints `http://127.0.0.1:3081/?token=...`).
2. Click **Mux** in the sidebar — the discovery strip shows which CLIs are installed.
3. Type a message and hit **Send**. The CLI runs non-interactively (accept mode) and streams its reply into the panel and into the DSH transcript.
4. Type a follow-up — it resumes the same CLI session id rather than starting fresh.

From the composer you can also run:

```text
/mux                  # open the Mux panel
/mux claude say hi    # start a thread and send the result to the transcript
/ask omp explain this # same thing, shorter name
```

## Run in Docker

A self-contained container boots DSH with dsh-mux installed, including a
**fixture `claude` CLI** (`docker/fixtures/claude`) that validates the full
spawn/stdin/session-id/resume pipeline without any model credentials:

```bash
docker compose -f docker/docker-compose.yml up --build -d
docker compose -f docker/docker-compose.yml logs -f   # the `dsh web:` line has the token
```

Open `http://127.0.0.1:3101/?token=...` (host loopback only — the harness
refuses a wildcard bind, so an in-container relay forwards to its private
`127.0.0.1:3099`). `FORCE_REINIT=1 docker compose ... up -d` re-seeds the
profile from the image; `down -v` resets everything.

## Validation (container)

`scripts/drive.py` walks the container end-to-end over the harness's own
mounted remote wire (workspace → session → `commands.execute` → panel) and
captures:

| Screenshot | Proves |
| --- | --- |
| [01-boot-sidebar-mux-entry](docs/screenshots/01-boot-sidebar-mux-entry.png) | Container boots; client bundle loads; **Mux** sidebar entry renders |
| [02-command-execution-ok](docs/screenshots/02-command-execution-ok.png) | `/mux` + `/ask claude` execute on the host; fixture CLI turn returns `mux · claude · exit 0` |
| [03-mux-panel-discovery-strip](docs/screenshots/03-mux-panel-discovery-strip.png) | Panel + discovery strip over `remote.mux.discover()` (installed → green dot) |
| [04-mux-panel-thread-turns](docs/screenshots/04-mux-panel-thread-turns.png) | Stored thread shows prompt/answer turns |

The full transcript of the run (including the **resume proof** — a second send
on the same thread passes `cliSessionId` to `--resume` and the fixture echoes it
back) is in [docs/screenshots/drive.log](docs/screenshots/drive.log):

```bash
python3 scripts/drive.py "http://127.0.0.1:3101/?token=..."   # needs brew playwright
python3 scripts/shot.py  "http://127.0.0.1:3101/?token=..."    # composer/onboarding walkthrough
```

## Supported CLIs

Every adapter keeps the prompt on **stdin**, never in argv, and runs in
non-interactive accept mode so a turn can never block on a prompt nobody can see.

| CLI             | First turn                                      | Resume turn                                     | Status  |
| --------------- | ----------------------------------------------- | ----------------------------------------------- | ------- |
| **Claude Code** | `-p --output-format stream-json`                | `--resume <id> -p`                              | ✅ ready |
| **OMP**         | `-p --mode json`                                | `--resume <id> -p`                              | ✅ ready |
| **Pi**          | `-p --mode json`                                | `--resume <id> -p`                              | ✅ ready |
| **Cursor**      | `agent -p --output-format stream-json`          | `agent --resume <id> -p`                        | ✅ ready |
| **Agy**         | `-p --output-format stream-json`                | `--conversation <id> -p`                        | ✅ ready |
| **Command Code**| `-p --output-format json --skip-onboarding`     | `--resume <id> -p`                              | ✅ ready |
| **opencode**    | _(binary missing)_                              | _(not applicable)_                              | ⚠️ missing |

## Architecture

```text
 You ──► DSH Web GUI (:3081)
            │
     ┌──────┴──────────┐
     ▼                  ▼
 Mux page            DSH agent
 (thread list,       (/mux, /ask,
  composer,          tool mux)
  Send / Stop)
     │                  │
     └────────┬─────────┘
              ▼
         dsh-mux host ──► Thread store (cliSessionId)
              │
              ▼
   Coding CLIs (one process per turn)
```

![Architecture diagram](docs/diagrams/dsh-mux-architecture.html)
![One-turn workflow](docs/diagrams/dsh-mux-turn-workflow.html)
![Resume sequence](docs/diagrams/dsh-mux-resume-sequence.html)

### Key design decisions

- **One CLI process per turn.** Resume is driven by the CLI's own session id.
  This works uniformly across all seven targets without a long-lived RPC pipe.
- **Fail-closed.** Timeouts, empty stdout, or unknown IDs produce clear errors
  and are never left hanging. Stop kills the running process (SIGTERM → SIGKILL).
- **Threads persist in JSON** under the profile's data dir. Deletion removes the
  mux record only — the CLI's own session files are untouched.
- **The model can drive it too.** The **mux** tool accepts `{ tool, prompt, threadId }`
  so an agent can start or continue a thread within a larger task.

## How it works (one turn)

1. `runTurn` spawns the chosen CLI with the appropriate print args plus a
   permission-mode flag, on stdin.
2. The prompt is written, stdin is closed; stdout and stderr are streamed.
3. A session id is parsed out of the CLI's output and stored with the thread.
4. On the next turn that session id is fed back via the CLI's resume flag.
5. Every result carries a header: `mux · claude · 4.2s · exit 0`.

Ceilings by default: **10 minutes** per turn, **1 MiB** combined output.

## Development

### Requirements

- Node.js **>= 22**
- The DeepSeek Harness runtime (to load it as a plugin in a profile)

### Run tests

```bash
node --experimental-strip-types --test test/*.test.ts
```

No network access, no real CLI binaries — fixtures are small shell scripts on a
temporary `PATH`.

### Scripts

| Script      | Purpose                        |
| ----------- | ------------------------------ |
| `test`      | Run the test suite (see above) |

### Project layout

```text
dsh-mux/
├── package.json         # dsh.bundle + dsh.client flags, exports (./, ./remote, ./client)
├── cordis.patch.yml     # two rows: host plugin + host remote service
├── client.js            # browser half: Mux sidebar entry + panel + remote contribution
├── docker/
│   ├── Dockerfile       # builds the plugin, provisions a dsh-mux profile on npm DSH
│   ├── entrypoint.sh    # profile seed + loopback relay (harness refuses wildcard binds)
│   ├── docker-compose.yml
│   └── fixtures/claude  # fixture CLI: stdin prompt, session id, --resume ack
├── scripts/
│   ├── drive.py         # container validation: workspace→session→commands→panel+shots
│   └── shot.py          # composer/onboarding walkthrough shots
├── src/
│   ├── adapters.ts      # seven CLI specs: argv, resume flags, session-id parser
│   ├── discovery.ts     # PATH availability for the strip
│   ├── run.ts           # spawn one turn, stream, cap, kill
│   ├── threads.ts       # thread store (JSON, per profile dir)
│   ├── commands.ts      # /mux + /ask parser (shared)
│   ├── plugin.ts        # host: tool mux, /mux, /ask, thread store
│   ├── remote.ts        # host remote: discover/listThreads/send over ctx.remote.mux
│   └── index.ts         # cordis entry point (named exports only — no default)
├── test/                # 28 tests: adapters, commands, discovery, run, threads, artifacts
├── docs/
│   ├── PRD.md           # detailed product plan
│   ├── diagrams/        # architecture / workflow / resume (HTML + JSON)
│   ├── screenshots/     # container validation captures + drive.log
│   └── ui/mux-sketch.html
└── tsconfig.json
```

## Feature-loop integration

When `@freepeak/dsh-feature-loop` is mounted, it gates the **mux** tool by name
via its `gatePolicies` configuration — no code change in this repository is
required. Suggested policy line:

```yaml
gatePolicies.mux: auto-if-confident
```

## License

MIT — see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome. Please open an issue to discuss larger changes before
submitting a pull request. For smaller changes, follow the existing style:

- TypeScript (`*.ts`), no runtime dependencies outside Node builtins.
- Tests live in `test/` and must pass before a PR is merged.
- One commit, one concern — the repository is small by design.

### Pull request checklist

- [ ] Tests added/updated and green (`node --experimental-strip-types --test test/*.test.ts`)
- [ ] Adapter argv tables updated if a target CLI's flags change
- [ ] `docs/diagrams/` HTML regenerated if `src/` flow changes
- [ ] No new runtime dependencies without explicit justification

---

Built for the DeepSeek Harness ecosystem. Not affiliated with Anthropic, OpenAI,
Cursor, or any of the supported CLIs.
