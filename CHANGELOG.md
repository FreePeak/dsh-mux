# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
starting at 0.1.0 (pre-1.0: breaking changes may land in minor bumps with a
clear note).

## [Unreleased]

### Changed

- CI runs on the self-hosted `dsh-mux` runner (private-repo Actions minutes),
  with a hard 15-minute timeout and maintainer docs for the launchd service.

### Added

- Brand assets under `assets/` (logo, mark, favicon, social card).
- Open-source meta: `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`,
  GitHub issue/PR templates, Dependabot, CODEOWNERS, actionlint labels, and CI.

## [0.1.0] — 2026-09-23

### Added

- DeepSeek Harness external bundle: host plugin (`/mux`, `/ask`, tool `mux`) and
  host remote service (`ctx.remote.mux`).
- Browser panel (`client.js`): Mux sidebar entry, discovery strip, thread list,
  live turns, Send / Stop.
- Seven CLI adapters (Claude Code, OMP, Pi, Cursor, Agy, Command Code, opencode
  tracked): prompt on stdin, accept mode, session-id parse, resume argv.
- Thread store (JSON under the profile data dir) with `cliSessionId` continuity.
- Docker recipe with fixture `claude` CLI and wire driver (`scripts/drive.py`)
  proving `/mux`, `/ask`, thread persistence, and `--resume`.
- Unit tests (28) including artifact gates for `client.js` and remote markers.

[Unreleased]: https://github.com/FreePeak/dsh-mux/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/FreePeak/dsh-mux/releases/tag/v0.1.0
