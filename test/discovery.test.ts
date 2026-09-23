import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { binOnPath, discover, pathEntries } from '../src/discovery.ts'
import { ADAPTERS } from '../src/adapters.ts'
import { mkdirSync, writeFileSync, chmodSync } from 'node:fs'

function fixtureBin(dir: string, name: string): void {
  mkdirSync(dir, { recursive: true })
  const path = join(dir, name)
  writeFileSync(path, '#!/bin/sh\necho hi\n', 'utf8')
  chmodSync(path, 0o755)
}

void describe('discovery', () => {
  void it('reads PATH entries in order', () => {
    assert.deepEqual(
      pathEntries({ PATH: `/a${process.platform === 'win32' ? ';' : ':'}/b::` }),
      ['/a', '/b'],
    )
    assert.deepEqual(pathEntries({}), [])
  })

  void it('finds a fixture bin and misses an absent one', () => {
    const dir = mkdtempSync(join(tmpdir(), 'mux-disc-'))
    fixtureBin(dir, 'claude')
    assert.equal(binOnPath('claude', [dir]) !== undefined, true)
    assert.equal(binOnPath('definitely-not-a-cli', [dir]), undefined)
  })

  void it('reports installed/missing per adapter on a fake PATH', () => {
    const dir = mkdtempSync(join(tmpdir(), 'mux-disc-'))
    fixtureBin(dir, 'claude')
    const statuses = discover(ADAPTERS, { PATH: dir })
    const byId = new Map(statuses.map(status => [status.id, status]))
    assert.equal(byId.get('claude')?.installed, true)
    assert.ok(byId.get('claude')?.path?.endsWith('claude'))
    assert.equal(byId.get('claude')?.enabled, true)
    assert.equal(byId.get('opencode')?.installed, false)
    assert.equal(byId.get('opencode')?.path, undefined)
    assert.equal(byId.get('opencode')?.enabled, false)
  })
})
