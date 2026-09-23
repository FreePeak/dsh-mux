import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { parseClaudeStreamJson } from '../src/parse-answer.ts'
import { ENABLED_ADAPTER_IDS, adapterFor } from '../src/adapters.ts'
import { discover } from '../src/discovery.ts'

/** Shape of the live Claude Code stream the user pasted (abbreviated). */
const CLAUDE_STREAM = [
  '{"type":"system","subtype":"hook_started","hook_name":"SessionStart:startup","session_id":"522a7924-b0a2-49e7-a2d6-354fd1a245ab"}',
  '{"type":"system","subtype":"init","cwd":"/Users/example/repo","session_id":"522a7924-b0a2-49e7-a2d6-354fd1a245ab","claude_code_version":"2.1.280"}',
  '{"type":"assistant","message":{"content":[{"type":"text","text":"Hello! I see you\'re in the repo."}],"id":"4427"},"session_id":"522a7924-b0a2-49e7-a2d6-354fd1a245ab"}',
  '{"type":"result","subtype":"success","stop_reason":"end_turn","session_id":"522a7924-b0a2-49e7-a2d6-354fd1a245ab","total_cost_usd":0.18,"usage":{"input_tokens":35926,"output_tokens":30},"is_error":false,"num_turns":1,"subtype2":"success","result":"Hello! I see you\'re in the deepseek-harness repo on `master`, clean tree.\\n\\nWhat would you like to work on?"}',
].join('\n')

void describe('parseClaudeStreamJson', () => {
  void it('extracts the final result string from stream-json NDJSON', () => {
    const text = parseClaudeStreamJson(CLAUDE_STREAM)
    assert.ok(text?.startsWith('Hello! I see you\'re in the deepseek-harness repo'))
    assert.ok(!text?.includes('"type":"system"'))
    assert.ok(!text?.includes('hook_started'))
    assert.ok(!text?.includes('"total_cost_usd"'))
  })

  void it('falls back to assistant text frames when no result envelope', () => {
    const stream = [
      '{"type":"system","subtype":"init","session_id":"s1"}',
      '{"type":"assistant","message":{"content":[{"type":"text","text":"Part one. "}]}}',
      '{"type":"assistant","message":{"content":[{"type":"text","text":"Part two."}]}}',
    ].join('\n')
    assert.equal(parseClaudeStreamJson(stream), 'Part one. Part two.')
  })

  void it('returns plain text stdout unchanged when there are no JSON lines', () => {
    assert.equal(parseClaudeStreamJson('plain answer\n'), 'plain answer')
  })

  void it('returns undefined for empty or only-malformed JSON', () => {
    assert.equal(parseClaudeStreamJson(''), undefined)
    assert.equal(parseClaudeStreamJson('not json {\n'), undefined)
  })

  void it('ignores empty result envelopes', () => {
    const stream = [
      '{"type":"assistant","message":{"content":[{"type":"text","text":"fallback."}]}}',
      '{"type":"result","result":"   "}',
    ].join('\n')
    assert.equal(parseClaudeStreamJson(stream), 'fallback.')
  })
})

void describe('claude-only enablement', () => {
  void it('enables only claude on the allowlist', () => {
    assert.deepEqual([...ENABLED_ADAPTER_IDS], ['claude'])
  })

  void it('marks discovery status enabled only for claude', () => {
    const statuses = discover([adapterFor('claude')!, adapterFor('omp')!], { PATH: process.env.PATH ?? '' })
    for (const status of statuses) {
      assert.equal(status.enabled, status.id === 'claude')
    }
  })
})
