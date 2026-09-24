import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { bump, commitLevel, nextVersion, rollChangelog } from '../scripts/release.ts'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

void describe('release', () => {
  void describe('commitLevel', () => {
    void it('maps conventional types onto semver levels', () => {
      assert.equal(commitLevel('feat: add a thing'), 2)
      assert.equal(commitLevel('feat(panel): add a thing'), 2)
      assert.equal(commitLevel('fix: repair the thing'), 1)
      assert.equal(commitLevel('perf: speed the thing'), 1)
      assert.equal(commitLevel('revert: take it back'), 1)
      // Release commits, chores and merges must never re-trigger a release.
      assert.equal(commitLevel('chore(release): v0.2.0 [skip ci]'), 0)
      assert.equal(commitLevel('docs: explain the thing'), 0)
      assert.equal(commitLevel('ci: release pipeline'), 0)
      assert.equal(commitLevel('Merge pull request #6 from a/b'), 0)
      assert.equal(commitLevel('not a conventional commit'), 0)
    })

    void it('flags breaking changes from the subject and the footer', () => {
      assert.equal(commitLevel('feat!: drop node 20'), 3)
      assert.equal(commitLevel('fix(api)!: change the wire'), 3)
      assert.equal(commitLevel('feat: something', 'BREAKING CHANGE: the wire changed'), 3)
      assert.equal(commitLevel('odd subject', 'BREAKING-CHANGE: footer spelling also counts'), 3)
    })
  })

  void describe('bump / nextVersion', () => {
    void it('applies patch, minor and major bumps', () => {
      assert.equal(bump('0.1.0', 1), '0.1.1')
      assert.equal(bump('1.2.3', 1), '1.2.4')
      assert.equal(bump('0.1.0', 2), '0.2.0')
      assert.equal(bump('1.2.3', 2), '1.3.0')
      assert.equal(bump('1.2.3', 3), '2.0.0')
      assert.equal(bump('v0.1.0', 0), '0.1.0')
    })

    void it('parks pre-1.0 breaking changes in a minor bump (changelog policy)', () => {
      assert.equal(bump('0.1.0', 3), '0.2.0')
    })

    void it('bootstraps from package.json and never releases below it', () => {
      // First run: no tag, the declared version is the floor.
      assert.equal(nextVersion('', '0.1.0', 2), '0.2.0')
      assert.equal(nextVersion('', '0.1.0', 0), '0.1.0')
      // Steady state: bump from the last tag.
      assert.equal(nextVersion('v0.2.0', '0.2.0', 1), '0.2.1')
      // A manual bump ahead of the tags survives (never downgrade).
      assert.equal(nextVersion('v0.1.0', '0.5.0', 2), '0.5.0')
      // A tag ahead of a drifted package.json heals it upward.
      assert.equal(nextVersion('v0.2.0', '0.1.0', 0), '0.2.0')
    })
  })

  void describe('rollChangelog', () => {
    const source = readFileSync(join(root, 'CHANGELOG.md'), 'utf8')
    const repoUrl = 'https://github.com/FreePeak/dsh-mux'

    // Hermetic fixture: the live CHANGELOG gains a `[0.2.0]` section the
    // moment the release pipeline runs (via a `[skip ci]` commit that never
    // re-runs this test), after which rolling into that version is a no-op.
    // Pinning the source keeps this test green across releases.
    const fixture = [
      '# Changelog',
      '',
      '## [Unreleased]',
      '',
      '### Added',
      '',
      '- Brand assets under `assets/` (logo, mark, favicon, social card).',
      '',
      '## [0.1.0] — 2026-09-23',
      '',
      '### Added',
      '',
      '- DeepSeek Harness external bundle.',
      '',
      '[Unreleased]: https://github.com/FreePeak/dsh-mux/compare/v0.1.0...HEAD',
      '[0.1.0]: https://github.com/FreePeak/dsh-mux/releases/tag/v0.1.0',
      '',
    ].join('\n')

    void it('rolls [Unreleased] into the new version and fixes the link refs', () => {
      const rolled = rollChangelog(fixture, '0.2.0', '2026-09-24', repoUrl)
      const unreleased = /^## \[Unreleased\]\n(.*?)^## \[/ms.exec(rolled)
      assert.ok(unreleased, 'rolled file keeps an Unreleased section')
      assert.equal(unreleased[1].trim(), '', 'Unreleased is emptied by the roll')
      assert.ok(rolled.includes('## [0.2.0] — 2026-09-24'), 'new version section exists')
      assert.ok(rolled.includes('- Brand assets under `assets/`'), 'content moved into the new section')
      assert.equal(rolled.split('## [0.1.0]').length - 1, 1, 'older sections stay untouched')
      assert.ok(rolled.includes(`[Unreleased]: ${repoUrl}/compare/v0.2.0...HEAD`), 'Unreleased compares from the new tag')
      assert.ok(rolled.includes(`[0.2.0]: ${repoUrl}/releases/tag/v0.2.0`), 'new version gets a link ref')
      assert.ok(rolled.indexOf('[0.2.0]:') < rolled.indexOf('[0.1.0]:'), 'link refs stay newest-first')
    })

    void it('leaves a file with nothing pending alone', () => {
      const empty = '# Changelog\n\n## [Unreleased]\n\n## [0.1.0] — 2026-09-23\n\n- x\n'
      assert.equal(rollChangelog(empty, '0.2.0', '2026-09-24', repoUrl), empty)
    })

    void it('never duplicates an already-released section', () => {
      assert.equal(rollChangelog(source, '0.1.0', '2026-09-23', repoUrl), source)
    })
  })
})
