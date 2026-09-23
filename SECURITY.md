# Security Policy

## Supported versions

This project is pre-1.0. The only supported line is `0.1.x` on the `main`
branch. Fixes land on `main`; there are no maintenance branches and no
backports to older pre-1.0 versions.

| Version | Supported |
| --- | --- |
| `0.1.x` (`main`) | Yes |
| Anything else | No |

## Reporting a vulnerability

Report privately through GitHub's private vulnerability reporting: open the
repository's **Security** tab and choose **Report a vulnerability**. That
channel is private between you and the maintainer; a public issue is not a
substitute, because a public issue discloses the problem before there is a fix.

Please include what you need to make the report actionable: the affected
version or commit, the smallest reproduction you have, and what you believe the
impact is. A rough reproduction is more useful than a perfect one that never
arrives.

## What to expect

This is a small project with one maintainer, and the honest expectation is
sized to that:

- **Acknowledgement** within a few days of the report.
- **An assessment** — whether it is a security issue, what the impact is, and
  whether a fix is coming — shortly after that.
- **A fix** as soon as it can be written and tested. There is no response-time
  SLA and no bug bounty.

If you get no acknowledgement after about a week, it is reasonable to assume
the report was missed rather than ignored, and to follow up on the same private
report.

## Security-relevant design

dsh-mux spawns local coding CLIs on behalf of a DSH session. A few behaviours
are deliberate; weakening any of them is a security issue rather than a bug.

### Prompt on stdin, never argv

User text is written to the child process **stdin** and never placed on the
argument vector. That keeps prompts out of `ps` listings and shell history for
the child invocation. An adapter change that moves the prompt into argv is a
security issue.

### Fail-closed turns

Timeouts, empty stdout, unknown CLI ids, and over-cap output produce clear
errors. A turn is never left hanging as a silent success. Stop sends
SIGTERM → SIGKILL to the running child.

### Ceilings are real

Default ceilings (**10 minutes** wall time, **1 MiB** combined stdout+stderr)
are enforced in `src/run.ts`. A path that spends unbounded time or buffer
before consulting the ceiling is a bug worth reporting.

### Threads are local records only

Deleting a mux thread removes the JSON record under the profile data dir. It
does **not** delete the target CLI's own session files on disk. That separation
is intentional so a mux cleanup cannot wipe another tool's history.

### Host surface

The host plugin and remote service run inside the DeepSeek Harness process.
They inherit that process's trust boundary (profile token, workspace paths).
Do not treat `remote.mux.send` as an unauthenticated public API — it is a
harness-mounted remote behind the same auth as every other controller.

## Out of scope

- **Fixture CLI** (`docker/fixtures/claude`) is a test double. It is not a real
  model endpoint and is not shipped as a product binary.
- **Upstream CLI behaviour** (Claude Code, Cursor, …) is owned by those
  projects. Report issues in their trackers unless dsh-mux mis-invokes them.
- **Harness directory picker / first-run UI** failures inside Docker are
  harness or environment issues unless dsh-mux itself breaks the wire path
  (covered by `scripts/drive.py`).

## Known limits that are not vulnerabilities

- **One process per turn, not a live PTY.** Resume is by session id. There is
  no bidirectional interactive TTY multiplexing.
- **Output is capped and decoded as text.** Binary or extremely wide streams
  are truncated at the ceiling; that is a resource guard, not a parser bug.
- **`opencode` is tracked as missing** until its binary appears on `PATH`.
  Discovery reporting it missing is expected.
