# Contributing to `@freepeak/dsh-mux`

Thanks for taking the time. This repository is deliberately small: seven CLI
adapters, a thread store, a host plugin + remote service, and a hand-authored
browser panel. Keep diffs that way.

Questions, bug reports, and proposals go to
[GitHub issues](https://github.com/FreePeak/dsh-mux/issues). There is no mailing
list and no chat channel.

## Prerequisites

- **Node.js ≥ 22.** Tests run with `node --experimental-strip-types`. The build
  uses `tsdown` (see `package.json` scripts).
- Target CLI binaries (`claude`, `omp`, …) are optional for unit tests — fixtures
  live on a temporary `PATH`. They are required only when you exercise a real
  profile or the Docker drive script.

```bash
npm install
npm test
npm run build
```

## What belongs where

| Path | Owns |
| --- | --- |
| `src/adapters.ts` | One table for the seven CLIs (argv, resume, session-id parse) |
| `src/run.ts` | Spawn one turn, stream, cap, kill |
| `src/threads.ts` | JSON thread store under the profile dir |
| `src/commands.ts` | Shared `/mux` + `/ask` line parser |
| `src/plugin.ts` | Host: tool `mux`, commands, thread store wiring |
| `src/remote.ts` | Host remote service (`ctx.remote.mux.*`) |
| `client.js` | Browser half: sidebar entry, panel, typert contribution |
| `docker/` | Container recipe + fixture `claude` |
| `scripts/drive.py` | Wire-level container validation + screenshots |

## Rules that have already cost time

- **No `export default` on the function plugin.** Cordis `unwrapExports` prefers
  `default`; a bare function loses `.inject` and every service access throws
  `cannot get property "…" without inject`. Class plugins (the remote) keep
  their default export.
- **No raw `@Remote` syntax in shipped JS.** Node 22 cannot parse decorators and
  `tsdown` does not lower them. Hand-apply the marker (see `src/remote.ts`).
- **schemastery has no `.optional()`.** End config fields with `.default(...)`.
- **Browser remotes:** mount with `ctx.remote.$mount(...)`; read with
  `ctx.get('remote.mux')`. Direct `ctx.remote.mux` throws without inject.
- **Prompt on stdin, never argv.** Every adapter keeps the user text off the
  process argument list.

## Tests

```bash
node --experimental-strip-types --test test/*.test.ts   # 28 tests
npm test                                                # same
```

The suite is offline: no network, no real model, no real CLI binaries. Fixtures
are small shell scripts. Non-trivial logic should leave **one** runnable check
that fails if the logic breaks (`test/artifacts.test.ts` already gates
`client.js` syntax, no default on the function entry, and no raw `@Remote` in
`lib/remote.mjs`).

## Adapter changes

If a target CLI changes flags:

1. Update the row in `src/adapters.ts`.
2. Extend or adjust `test/adapters.test.ts`.
3. Mention the CLI version you verified against in the PR notes.

## Docker validation (optional but welcome)

```bash
docker compose -f docker/docker-compose.yml up --build -d
# copy token from: docker compose -f docker/docker-compose.yml logs
python3 scripts/drive.py "http://127.0.0.1:3101/?token=..."
```

Needs Playwright (`pip install playwright && playwright install chromium`).

## Continuous integration

CI is GitHub Actions (`.github/workflows/ci.yml`). The job installs with
`npm ci`, runs the full suite, builds the host bundle, and re-runs the artifact
gates. While this repository is private it targets the self-hosted runner
labelled `dsh-mux` (see the long comment at the top of the workflow). Maintainers
restart that runner with:

```bash
cd ~/actions-runners/dsh-mux && ./svc.sh status   # or stop / start
```

Contributors do not need the runner — `npm test` and `npm run build` locally are
the same gates.

## Pull requests

- One concern per PR; small diffs beat clever ones.
- Update `CHANGELOG.md` under **Unreleased** when behaviour changes.
- Do not add runtime dependencies without an explicit justification in the PR.
- Fill out the pull request template.
- CI must be green before merge.

## Code of conduct

By participating you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).
