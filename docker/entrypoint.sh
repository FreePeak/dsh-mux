#!/usr/bin/env bash
# Entrypoint: seed a persistent $DSH_HOME, then boot the harness web UI.
#
# The profile is BAKED into the image at /opt/dsh-home (provisioned at build
# time, so no registry access is needed at run time). This script copies it
# into the volume on first run and leaves it alone afterwards, so a `docker run`
# with a fresh volume works offline.
#
# Idempotent: re-running with the same volume changes nothing. Set
# FORCE_REINIT=1 to re-seed the profile from the image.
set -euo pipefail

DSH_BIN="${DSH_BIN:-dsh}"
DSH_HOME="${DSH_HOME:-/data}"
DSH_PROFILE="${DSH_PROFILE:-dsh-mux}"
DSH_PORT="${DSH_PORT:-3099}"
BAKED_HOME="/opt/dsh-home"

log() { printf '[entrypoint] %s\n' "$*"; }

mkdir -p "$DSH_HOME/profiles"

# ── 1. the profile ─────────────────────────────────────────────────────────
if [ ! -d "$DSH_HOME/profiles/$DSH_PROFILE" ] || [ "${FORCE_REINIT:-0}" = "1" ]; then
  log "seeding profile '$DSH_PROFILE' from the image"
  rm -rf "${DSH_HOME:?}/profiles/$DSH_PROFILE"
  cp -R "$BAKED_HOME/profiles/$DSH_PROFILE" "$DSH_HOME/profiles/$DSH_PROFILE"
else
  log "profile '$DSH_PROFILE' already present — leaving it untouched"
fi

if [ -z "${ONEGW_API_KEY:-}" ]; then
  log "NOTE: ONEGW_API_KEY is unset. The UI and every /mux, /ask and panel send run"
  log "      without it; only model calls would fail."
fi

# ── 2. boot ────────────────────────────────────────────────────────────────
#
# The harness refuses a wildcard bind (it would expose remote code execution to
# the network), so the app binds 127.0.0.1 inside the container and a small
# relay listens on the container's external interface, forwarding to it — the
# same posture as running `dsh` natively. Compose publishes the relay to the
# HOST LOOPBACK only.
DSH_INTERNAL_PORT="${DSH_INTERNAL_PORT:-8099}"

log "booting '$DSH_PROFILE' on 127.0.0.1:${DSH_PORT} (DSH_HOME=$DSH_HOME)"
log "relaying 0.0.0.0:${DSH_INTERNAL_PORT} -> 127.0.0.1:${DSH_PORT} for Docker's port mapping"
log "open the URL from the 'dsh web: ...' line below — it carries the auth token"

node -e '
const net = require("node:net")
const to = Number(process.env.DSH_PORT || 3099)
net.createServer(s => {
  const up = net.connect(to, "127.0.0.1")
  s.pipe(up).pipe(s)
  const end = () => { s.destroy(); up.destroy() }
  s.on("error", end); up.on("error", end)
}).listen(Number(process.env.DSH_INTERNAL_PORT || 8099), "0.0.0.0")
' &

exec "$DSH_BIN" --profile "$DSH_PROFILE" \
  --host 127.0.0.1 --port "$DSH_PORT" --no-open "$@"
