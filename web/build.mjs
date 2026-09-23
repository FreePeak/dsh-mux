#!/usr/bin/env node
/**
 * Build the Mux panel's vendored client bundle.
 *
 * Input:  web/entry.tsx + web/panel.tsx (assistant-ui Thread surface, Cursor tokens)
 * Output: client.js — the package's exports["./client"] artifact
 *
 * Shape: esbuild CJS output wrapped in the DSH client factory, exactly the
 * banner/footer contract of packages/client/tsdown.client.ts:
 *   window.__ModuleLoader__.load({ id, factory: (require) => { … } })
 * React/react-dom are external: the host module table provides them (the
 * factory's `require`), so this bundle never ships a second React.
 *
 * Vendored (committed), like dsh-feature-loop's dashboard bundle: install does
 * no client build, and the artifact is auditable — including a hard refusal
 * to emit assistant-cloud / telemetry code (assistant-ui depends on
 * assistant-cloud; it tree-shakes "today", and the build makes that invariant).
 *
 * Rebuild: npm run build:client (after touching web/ or the aui deps).
 */
import { buildSync } from 'esbuild'
import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outfile = join(root, 'client.js')
mkdirSync(dirname(outfile), { recursive: true })

buildSync({
  entryPoints: [join(root, 'web/entry.tsx')],
  bundle: true,
  minify: true,
  format: 'cjs',
  platform: 'browser',
  target: 'es2020',
  jsx: 'automatic',
  // Production React + external host-provided React. The CJS output's
  // require()/module.exports run inside the ModuleLoader factory below.
  define: { 'process.env.NODE_ENV': '"production"' },
  external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
  loader: { '.css': 'text' },
  banner: {
    js: 'window.__ModuleLoader__.load({ id: "@freepeak/dsh-mux", factory: (require) => { var module = { exports: {} }; var exports = module.exports;',
  },
  footer: {
    js: 'return module.exports; } });',
  },
  outfile,
  logLevel: 'info',
})

const js = readFileSync(outfile, 'utf8')
const kb = (path) => `${String(Math.round(statSync(path).size / 1024))} KB`

/**
 * The load-bearing assertion of this build: the Mux page must not phone home.
 * Same invariant as dsh-feature-loop/web/build.mjs — `assistant-cloud` ships
 * engagement/run reporters and tree-shakes today; today is the whole problem.
 */
const FORBIDDEN = [
  'CloudEngagementReporter',
  'CloudRunReporter',
  'assistant-cloud',
  'posthog',
  'telemetry',
]
const found = FORBIDDEN.filter((needle) => js.includes(needle))
if (found.length > 0) {
  throw new Error(
    `client bundle carries telemetry/cloud code (${found.join(', ')}) — `
    + 'the Mux page must not phone home. Check what pulled it in.',
  )
}

if (!js.includes('window.__ModuleLoader__.load')) {
  throw new Error('client bundle missing the ModuleLoader factory banner')
}

const pkg = (name) => JSON.parse(
  readFileSync(join(root, 'node_modules', name, 'package.json'), 'utf8'),
).version

writeFileSync(
  join(root, 'assets', 'client-MANIFEST.txt'),
  [
    `built: ${new Date().toISOString()}`,
    `react (external): ${pkg('react')}`,
    `assistant-ui/react: ${pkg('@assistant-ui/react')}`,
    `assistant-ui/styles: ${pkg('@assistant-ui/styles')}`,
    `client.js: ${kb(outfile)}`,
    'checked: no assistant-cloud / telemetry code in client.js',
    'checked: ModuleLoader factory banner present',
    'library: assistant-ui Thread/ExternalStoreRuntime + mux chrome (web/*.tsx)',
  ].join('\n') + '\n',
)
console.log('client.js written (no telemetry found; React external)')
