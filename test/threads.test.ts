import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { ThreadStore, hasStore } from '../src/threads.ts'

void describe('threads', () => {
  void it('creates, lists newest-first, and gets', () => {
    const store = new ThreadStore(mkdtempSync(join(tmpdir(), 'mux-threads-')))
    const first = store.create('claude', '/repo')
    const second = store.create('omp', '/repo')
    assert.deepEqual(store.list().map(thread => thread.id), [second.id, first.id])
    assert.equal(store.get(first.id)?.cli, 'claude')
    assert.equal(store.get('missing'), undefined)
  })

  void it('appends turns and records the first session id only', () => {
    const store = new ThreadStore(mkdtempSync(join(tmpdir(), 'mux-threads-')))
    const thread = store.create('claude', '/repo')
    store.append(thread.id, { role: 'prompt', text: 'hi', at: 1 })
    const updated = store.append(thread.id, { role: 'answer', text: 'yo', at: 2 }, 'sess_1')
    assert.equal(updated?.cliSessionId, 'sess_1')
    assert.equal(updated?.turns.length, 2)
    // A later session id never overwrites the first: resume stays stable.
    const again = store.append(thread.id, { role: 'answer', text: 'yo2', at: 3 }, 'sess_2')
    assert.equal(again?.cliSessionId, 'sess_1')
    assert.equal(store.append('missing', { role: 'prompt', text: 'x', at: 4 }), undefined)
  })

  void it('clears and deletes without touching CLI sessions', () => {
    const store = new ThreadStore(mkdtempSync(join(tmpdir(), 'mux-threads-')))
    const thread = store.create('claude', '/repo')
    store.append(thread.id, { role: 'answer', text: 'yo', at: 1 }, 'sess_1')
    assert.equal(store.clearSession(thread.id)?.cliSessionId, undefined)
    assert.equal(store.delete(thread.id), true)
    assert.equal(store.get(thread.id), undefined)
    assert.equal(store.delete(thread.id), false)
  })

  void it('survives a corrupt store file', () => {
    const dir = mkdtempSync(join(tmpdir(), 'mux-threads-'))
    writeFileSync(join(dir, 'threads.json'), 'not json{', 'utf8')
    const store = new ThreadStore(dir)
    assert.deepEqual(store.list(), [])
    assert.equal(hasStore(dir), true)
  })

  void it('reports no store for a fresh dir', () => {
    assert.equal(hasStore(mkdtempSync(join(tmpdir(), 'mux-threads-'))), false)
  })
})
