# The DeepSeek Harness web UI with the dsh-mux plugin, containerised.
#
# Same proven shape as dsh-feature-loop's Dockerfile: no `# syntax=` directive
# on purpose (a pinned BuildKit frontend must be fetched from Docker Hub, and
# a network that reaches the npm registry but not that registry fails before
# any stage runs). The harness monorepo is NOT built — the CLI and every bundle
# this setup needs are on npm; only the one unpublished package, dsh-mux, is
# built here.
#
# Version pinning: 0.1.7-alpha.1 is the newest tag whose dependency tree
# resolves (feature-loop verified by installing and booting it), and it
# postdates the external live-client bundle support (fixture committed
# 2026-09-14, published 2026-09-22) that serves this plugin's `./client`.
#
# ---------------------------------------------------------------------------
# Stage 1 — build the dsh-mux plugin (node half).
#
# peerDependencies are optional and auto-install is off (.npmrc): they resolve
# at runtime from the profile, exactly as in production. The build needs only
# tsdown + typescript + the one real dependency (schemastery).
# ---------------------------------------------------------------------------
FROM node:22-slim AS plugin-build

WORKDIR /build

COPY package.json package-lock.json* .npmrc ./
RUN npm install --no-audit --no-fund

COPY src ./src
COPY cordis.patch.yml ./

RUN npm run build && test -f lib/index.mjs && test -f lib/remote.mjs

# ---------------------------------------------------------------------------
# Stage 2 — runtime.
# ---------------------------------------------------------------------------
FROM node:22-slim AS runtime

ENV DEBIAN_FRONTEND=noninteractive \
    NODE_ENV=production

# `dsh plugin ...` forwards to pnpm, so pnpm must exist. The profile is
# provisioned at BUILD time (below), so the running container needs no
# registry access and no network beyond any model gateway.
RUN npm install -g --no-audit --no-fund pnpm@9.15.9 \
 && npm install --prefix /opt/dsh --no-audit --no-fund --no-save \
      @deepseek-ai/dsh@0.1.7-alpha.1 \
 && ln -s /opt/dsh/node_modules/.bin/dsh /usr/local/bin/dsh

ENV DSH_BIN=/usr/local/bin/dsh \
    DSH_HOME=/data

# Provision the profile at build time so first boot is offline and deterministic.
# `--dump-config` makes this non-interactive: it creates the profile from the
# shipped template and exits instead of booting the app.
RUN mkdir -p /opt/dsh-home \
 && DSH_HOME=/opt/dsh-home dsh dsh-mux --from-default-profile web --dump-config > /dev/null

# The plugin itself: built lib + manifest + patch + browser client file.
COPY --from=plugin-build /build/lib         /opt/dsh-mux/lib
COPY package.json cordis.patch.yml \
     client.js                              /opt/dsh-mux/

# Fixture CLI so the container validates the full spawn/stdin/resume pipeline
# out of the box (see docker/fixtures/claude). Remove when installing real CLIs.
COPY docker/fixtures/claude /usr/local/bin/claude
RUN chmod +x /usr/local/bin/claude

RUN DSH_HOME=/opt/dsh-home dsh plugin --profile dsh-mux add -w file:/opt/dsh-mux \
 && DSH_HOME=/opt/dsh-home dsh --profile dsh-mux --dump-config \
      | grep -q 'dsh-mux'

COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

VOLUME ["/data"]
# 8099 is the relay the entrypoint exposes; the harness UI itself listens on
# 127.0.0.1:3099 inside the container (the harness refuses a wildcard bind).
EXPOSE 8099

# Probes the relay port, which is the path Docker actually publishes.
HEALTHCHECK --interval=30s --timeout=5s --start-period=40s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.DSH_INTERNAL_PORT||8099)+'/').then(r=>process.exit(r.status===401||r.ok?0:1)).catch(()=>process.exit(1))"

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
