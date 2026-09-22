import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { chmodSync, mkdirSync, writeFileSync } from 'node:fs'
import { runTurn } from '../src/run.ts'

function fixture(dir: string, name: string, script: string): string {
  mkdirSync(dir, { recursive: true })
  const path = join(dir, name)
  writeFileSync(path, script, 'utf8')
  chmodSync(path, 0o755)
  return path
}

void describe('runTurn', () => {
  void it('returns stdout on exit 0', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'mux-run-'))
    const bin = fixture(dir, 'echo-cli', '#!/bin/sh\ncat\nprintf \'{"session_id":"s1"}\\n\'\n')
    const result = await runTurn({ binPath: bin, argv: [], prompt: 'hello', cwd: dir })
    assert.equal(result.ok, true)
    assert.ok(result.ok && result.text.includes('hello'))
    assert.equal(result.ok && result.exitCode, 0)
  })

  void it('returns the stderr tail on exit 2', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'mux-run-'))
    const bin = fixture(dir, 'fail-cli', '#!/bin/sh\necho boom >&2\nexit 2\n')
    const result = await runTurn({ binPath: bin, argv: [], prompt: 'hi', cwd: dir })
    assert.equal(result.ok, false)
    assert.ok(!result.ok && result.reason === 'exit')
    assert.ok(!result.ok && result.stderrTail.includes('boom'))
    assert.equal(!result.ok && result.exitCode, 2)
  })

  void it('fails closed on empty stdout', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'mux-run-'))
    const bin = fixture(dir, 'quiet-cli', '#!/bin/sh\nexit 0\n')
    const result = await runTurn({ binPath: bin, argv: [], prompt: 'hi', cwd: dir })
    assert.equal(result.ok, false)
    assert.ok(!result.ok && result.reason === 'exit')
  })

  void it('kills a hung process after the timeout', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'mux-run-'))
    const bin = fixture(dir, 'hang-cli', '#!/bin/sh\ntrap "" TERM\nsleep 30\n')
    const started = Date.now()
    const result = await runTurn({
      binPath: bin, argv: [], prompt: 'hi', cwd: dir, timeoutMs: 300, killGraceMs: 100,
    })
    assert.equal(result.ok, false)
    assert.ok(!result.ok && result.reason === 'timeout')
    assert.ok(Date.now() - started < 10_000, 'hung fixture must be killed, not awaited')
  })

  void it('honours caller cancellation', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'mux-run-'))
    const bin = fixture(dir, 'slow-cli', '#!/bin/sh\nsleep 30\n')
    const controller = new AbortController()
    setTimeout(() => { controller.abort() }, 200)
    const result = await runTurn({
      binPath: bin, argv: [], prompt: 'hi', cwd: dir, timeoutMs: 60_000, signal: controller.signal,
    })
    assert.equal(result.ok, false)
    assert.ok(!result.ok && result.reason === 'signal')
  })

  void it('fails closed when the bin cannot start', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'mux-run-'))
    const result = await runTurn({
      binPath: join(dir, 'missing-cli'), argv: [], prompt: 'hi', cwd: dir,
    })
    assert.equal(result.ok, false)
    assert.ok(!result.ok && result.reason === 'spawn')
  })
})
