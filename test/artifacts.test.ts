import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

void describe('built artifacts', () => {
  // node --check catches the exact class of bug that broke the container's
  // browser load once: client.js served verbatim, so its syntax IS the gate.
  void it('client.js parses', () => {
    execFileSync(process.execPath, ['--check', join(root, 'client.js')], { stdio: 'pipe' })
  })

  void it('function-plugin entries carry no default export (would strip inject)', { skip: !existsSync(join(root, 'lib/index.mjs')) }, () => {
    const index = readFileSync(join(root, 'lib/index.mjs'), 'utf8')
    assert.ok(!index.includes('export default'), 'lib/index.mjs must not export default')
  })

  void it('remote entry keeps class default, no raw decorator syntax', { skip: !existsSync(join(root, 'lib/remote.mjs')) }, () => {
    const remote = readFileSync(join(root, 'lib/remote.mjs'), 'utf8')
    // Rolldown emits `export { X as default }`, not the `export default` keyword.
    assert.ok(remote.includes('as default') || remote.includes('export default'), 'class plugin entry needs its default export')
    // Only a comment may mention `@Remote`; real decorator syntax breaks Node 22.
    const code = remote.replace(/\/\*\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '')
    assert.ok(!code.includes('@Remote'), 'decorator syntax must be lowered, not shipped')
  })
})
