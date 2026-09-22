import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { knownClis, parseMuxInput } from '../src/commands.ts'

void describe('commands', () => {
  void it('opens the panel on empty input', () => {
    assert.deepEqual(parseMuxInput(''), { kind: 'open' })
    assert.deepEqual(parseMuxInput('   '), { kind: 'open' })
  })

  void it('parses /mux and /ask to the same send shape', () => {
    // One parser serves both names; the plugin registers it twice.
    assert.deepEqual(parseMuxInput('claude say hi'), {
      kind: 'send', cli: 'claude', prompt: 'say hi',
    })
    assert.deepEqual(parseMuxInput('  omp   explain this  '), {
      kind: 'send', cli: 'omp', prompt: 'explain this',
    })
  })

  void it('rejects unknown ids without spawning', () => {
    const result = parseMuxInput('code say hi')
    assert.equal(result.kind, 'error')
    assert.ok(result.kind === 'error' && result.text.includes('Unknown CLI'))
  })

  void it('rejects a bare id and an empty prompt', () => {
    const bare = parseMuxInput('claude')
    assert.equal(bare.kind, 'error')
    const empty = parseMuxInput('claude   ')
    assert.equal(empty.kind, 'error')
  })

  void it('names every known CLI in errors', () => {
    for (const id of ['claude', 'omp', 'pi', 'cursor', 'agy', 'command-code', 'opencode']) {
      assert.ok(knownClis().includes(id), `knownClis omits ${id}`)
    }
  })
})
