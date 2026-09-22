import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  ADAPTERS,
  ADAPTER_IDS,
  adapterFor,
  firstTurnArgv,
  resumeTurnArgv,
  scanSessionId,
} from '../src/adapters.ts'

void describe('adapters', () => {
  void it('covers the seven planned CLI ids', () => {
    assert.deepEqual([...ADAPTER_IDS], [
      'claude', 'omp', 'pi', 'cursor', 'agy', 'command-code', 'opencode',
    ])
  })

  void it('keeps the prompt out of argv', () => {
    for (const spec of ADAPTERS) {
      for (const token of firstTurnArgv(spec)) {
        assert.ok(!token.includes('prompt'), `${spec.id}: argv leaks prompt vocabulary`)
      }
      const resumed = resumeTurnArgv(spec, 'sess_abc')
      if (resumed !== undefined) {
        assert.ok(resumed.includes('sess_abc'), `${spec.id}: resume argv drops the session id`)
        for (const token of resumed) {
          assert.ok(!token.includes('prompt'), `${spec.id}: resume argv leaks prompt vocabulary`)
        }
      }
    }
  })

  void it('matches the per-CLI first-turn table', () => {
    assert.deepEqual(firstTurnArgv(adapterFor('claude')!), [
      '-p', '--output-format', 'stream-json', '--permission-mode', 'acceptEdits',
    ])
    assert.deepEqual(firstTurnArgv(adapterFor('omp')!), [
      '-p', '--mode', 'json', '--approval-mode', 'yolo',
    ])
    assert.deepEqual(firstTurnArgv(adapterFor('pi')!), [
      '-p', '--mode', 'json', '--approval-mode', 'yolo',
    ])
    assert.deepEqual(firstTurnArgv(adapterFor('cursor')!), [
      'agent', '-p', '--output-format', 'stream-json', '--force',
    ])
    assert.deepEqual(firstTurnArgv(adapterFor('agy')!), [
      '-p', '--output-format', 'stream-json', '--dangerously-skip-permissions',
    ])
    assert.deepEqual(firstTurnArgv(adapterFor('command-code')!), [
      '-p', '--output-format', 'json', '--skip-onboarding', '--auto-accept',
    ])
  })

  void it('matches the per-CLI resume table', () => {
    assert.deepEqual(resumeTurnArgv(adapterFor('claude')!, 's1'), [
      '--resume', 's1', '-p', '--output-format', 'stream-json', '--permission-mode', 'acceptEdits',
    ])
    assert.deepEqual(resumeTurnArgv(adapterFor('omp')!, 's1'), [
      '--resume', 's1', '-p', '--mode', 'json', '--approval-mode', 'yolo',
    ])
    assert.deepEqual(resumeTurnArgv(adapterFor('cursor')!, 's1'), [
      'agent', '--resume', 's1', '-p', '--output-format', 'stream-json', '--force',
    ])
    assert.deepEqual(resumeTurnArgv(adapterFor('agy')!, 's1'), [
      '--conversation', 's1', '-p', '--output-format', 'stream-json', '--dangerously-skip-permissions',
    ])
    assert.deepEqual(resumeTurnArgv(adapterFor('command-code')!, 's1'), [
      '--resume', 's1', '-p', '--output-format', 'json', '--skip-onboarding', '--auto-accept',
    ])
    assert.equal(resumeTurnArgv(adapterFor('opencode')!, 's1'), undefined)
  })

  void it('returns undefined for unknown ids without spawning', () => {
    assert.equal(adapterFor('nope'), undefined)
  })

  void it('parses session ids from json trailers', () => {
    assert.equal(scanSessionId('hello\n{"session_id":"sess_1"}\n'), 'sess_1')
    assert.equal(scanSessionId('{"type":"result","sessionId":"abc"}\n'), 'abc')
    assert.equal(scanSessionId('{"session":{"id":"nested"}}\n'), 'nested')
    assert.equal(scanSessionId('plain text, no json\n'), undefined)
    assert.equal(scanSessionId('not json {\n'), undefined)
  })
})
