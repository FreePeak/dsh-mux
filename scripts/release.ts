#!/usr/bin/env node
/**
 * Release: turn pushes to `main` into semantic versions and GitHub Releases.
 *
 * Reads every conventional commit since the last `v*` tag — taken from `origin`
 * (`git ls-remote`) rather than local tags, because the self-hosted runner
 * reuses its workspace and a tag left by a failed push must not steer the next
 * release — computes the next version, rolls `package.json` and Keep a
 * Changelog's `[Unreleased]` section, pushes bump commit and tag together
 * (`--atomic`, so a version tag can never land without the commit carrying that
 * version), then creates the GitHub Release.
 *
 * Version policy (what CHANGELOG.md documents): `feat:` → minor,
 * `fix:`/`perf:`/`revert:` → patch, a BREAKING CHANGE (`!` after the type/scope
 * or a `BREAKING CHANGE` footer) → major — except pre-1.0, where breaking
 * changes land in a minor bump. Everything else releases nothing. With no tag
 * yet the run is a baseline release: the declared `package.json` version plus
 * whatever the whole history has accumulated.
 *
 * Node builtins only — no `gh` (its PATH on the runner is not guaranteed) and
 * no dependencies of its own, so the script runs anywhere Node 22 does. The
 * workflow re-runs the full CI gate first; invoked by
 * `.github/workflows/release.yml`:
 *
 *     node --experimental-strip-types scripts/release.ts [--dry-run]
 *
 * @module dsh-mux/scripts/release
 */

import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

/** How far a commit range moves the version: none, patch, minor, major. */
export type Level = 0 | 1 | 2 | 3

/** The package.json fields this script reads and rewrites. */
interface PackageJson {
  version: string
  repository?: { url?: string }
}

/** One commit's subject and footer/body, as conventional-commit rules read them. */
interface Commit {
  subject: string
  body: string
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

function log(message: string): void {
  console.log(`[release] ${message}`)
}

/** Run git in the repo root; a failure carries the stderr that explains it. */
function git(...args: string[]): string {
  try {
    return execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim()
  } catch (error) {
    const stderr = (error as { stderr?: unknown }).stderr
    throw new Error(`git ${args.join(' ')} failed${typeof stderr === 'string' && stderr.trim() !== '' ? `: ${stderr.trim()}` : ''}`)
  }
}

/** Parse `v1.2.3` / `1.2.3`; a suffix such as `-rc.1` parses but is not kept. */
export function parseVersion(raw: string): [number, number, number] {
  const match = /^v?(\d+)\.(\d+)\.(\d+)(?:[-+].*)?$/.exec(raw.trim())
  if (match === null) throw new Error(`not a semver version: ${raw}`)
  return [Number(match[1]), Number(match[2]), Number(match[3])]
}

/** Compare two plain versions: negative when `a` is older than `b`. */
export function compareVersions(a: string, b: string): number {
  const [aMajor, aMinor, aPatch] = parseVersion(a)
  const [bMajor, bMinor, bPatch] = parseVersion(b)
  return aMajor - bMajor || aMinor - bMinor || aPatch - bPatch
}

/**
 * The conventional-commit level of one commit. BREAKING CHANGE wins (from the
 * subject's `!` or the footer), then `feat` is minor and fix/perf/revert are
 * patch; anything else — merge commits and unrecognised subjects included —
 * releases nothing.
 *
 * @param subject - the commit's first line.
 * @param body - the commit's body and footer.
 */
export function commitLevel(subject: string, body = ''): Level {
  const match = /^(\w+)(?:\([^)]*\))?(!)?:/.exec(subject)
  if (match?.[2] === '!' || /^BREAKING[ -]CHANGE\b/im.test(body)) return 3
  switch (match?.[1]) {
    case 'feat': return 2
    case 'fix':
    case 'perf':
    case 'revert': return 1
    default: return 0
  }
}

/** Apply one level to a version string. */
export function bump(version: string, level: Level): string {
  const [major, minor, patch] = parseVersion(version)
  if (level === 1) return [major, minor, patch + 1].join('.')
  if (level === 2) return [major, minor + 1, 0].join('.')
  if (level === 3) {
    // Pre-1.0: breaking changes land in a minor bump — exactly what
    // CHANGELOG.md declares for the 0.x line.
    return major === 0 ? [0, minor + 1, 0].join('.') : [major + 1, 0, 0].join('.')
  }
  return [major, minor, patch].join('.')
}

/**
 * The version this run releases: bumped from the last tag, or from the declared
 * `package.json` version when nothing is tagged yet — and never below a manual
 * `package.json` bump that has not been released.
 *
 * @param lastTag - the newest `v*` tag on origin, or '' before the first release.
 * @param declared - the version currently in package.json.
 * @param level - the highest level found in the commit range.
 */
export function nextVersion(lastTag: string, declared: string, level: Level): string {
  const bumped = bump(lastTag === '' ? declared : lastTag, level)
  return compareVersions(bumped, declared) >= 0 ? bumped : declared
}

/**
 * Roll Keep a Changelog's `[Unreleased]` section into a new dated version
 * section and fix both link refs. A missing or empty `[Unreleased]`, or a
 * version section that already exists, leaves the file untouched.
 *
 * @param markdown - the current CHANGELOG.md content.
 * @param version - the version being released (no `v` prefix).
 * @param date - `YYYY-MM-DD` for the new section heading.
 * @param repoUrl - `https://github.com/owner/repo`, for the link refs.
 */
export function rollChangelog(markdown: string, version: string, date: string, repoUrl: string): string {
  const lines = markdown.split('\n')
  const start = lines.findIndex(line => /^## \[Unreleased\]\s*$/.test(line))
  if (start === -1) return markdown
  let end = lines.findIndex((line, index) => index > start && /^## \[/.test(line))
  if (end === -1) end = lines.length
  const body = lines.slice(start + 1, end)
  if (body.join('').trim() === '') return markdown
  if (lines.some(line => line.startsWith(`## [${version}]`))) return markdown

  // Exactly one blank line on each side of the new section, whatever the
  // source had — the roll must not depend on the hand-formatting above it.
  while (body.length > 0 && body[0]!.trim() === '') body.shift()
  while (body.length > 0 && body[body.length - 1]!.trim() === '') body.pop()
  const rolled = [...lines.slice(0, start + 1), '', `## [${version}] — ${date}`, '', ...body, '', ...lines.slice(end)]
  return rolled
    .join('\n')
    .replace(/^\[Unreleased\]: .*$/m, `[Unreleased]: ${repoUrl}/compare/v${version}...HEAD`)
    .replace(/(^|\n)(\[\d+\.\d+\.\d+\]: )/, `$1[${version}]: ${repoUrl}/releases/tag/v${version}\n$2`)
}

/** The `owner/repo` slug out of package.json's repository URL. */
function repoSlug(pkg: PackageJson): string {
  const url = pkg.repository?.url ?? ''
  const match = /github\.com[/:]([^/]+\/[^/.]+)/.exec(url)
  if (match?.[1] === undefined) throw new Error(`package.json repository.url is not a GitHub URL: ${url}`)
  return match[1]
}

/**
 * Release tags that exist on `origin`, newest first. Remote is the source of
 * truth: this runner's workspace keeps local tags across jobs, so a tag from a
 * failed push would otherwise steer (or fake) the next release.
 */
function remoteTags(): string[] {
  const out = execFileSync('git', ['ls-remote', '--tags', '--refs', 'origin'], { cwd: root, encoding: 'utf8' })
  return out
    .split('\n')
    .map(line => /^[\da-f]+\s+refs\/tags\/(v\d[\w.+-]*)$/.exec(line.trim())?.[1])
    .filter((tag): tag is string => tag !== undefined)
    .sort((a, b) => compareVersions(b, a))
}

/** Commits since `lastTag` (all of history when no tag exists yet). */
function commitsSince(lastTag: string): Commit[] {
  const out = git('log', '--format=%s%x1f%b%x1e', ...(lastTag === '' ? [] : [`${lastTag}..HEAD`]))
  return out
    .split('\x1e')
    .map(chunk => chunk.trim())
    .filter(chunk => chunk.length > 0)
    .map(chunk => {
      const [subject = '', ...footer] = chunk.split('\x1f')
      return { subject, body: footer.join('\x1f') }
    })
}

/**
 * Create the GitHub Release for `tag` unless it already exists. Talks REST with
 * the workflow-provided token instead of `gh`, whose PATH on the runner is not
 * guaranteed; `generate_release_notes` fills the body from the commits.
 */
async function ensureRelease(repo: string, tag: string): Promise<void> {
  const token = process.env.GITHUB_TOKEN ?? ''
  if (token === '') {
    // CI always passes one; a local dry run prints the full plan above and a
    // local real run skips only the GitHub half, leaving tag/commit pushed.
    if (process.env.CI === 'true') throw new Error('GITHUB_TOKEN is required to create the release')
    log(`no GITHUB_TOKEN: skipped the GitHub release for ${tag}`)
    return
  }
  const headers = {
    authorization: `Bearer ${token}`,
    accept: 'application/vnd.github+json',
    'user-agent': 'dsh-mux-release',
  }
  const existing = await fetch(`https://api.github.com/repos/${repo}/releases/tags/${encodeURIComponent(tag)}`, { headers })
  if (existing.status === 200) {
    log(`release ${tag} already exists`)
    return
  }
  if (existing.status !== 404) throw new Error(`release lookup for ${tag} failed: HTTP ${existing.status} ${await existing.text()}`)
  const created = await fetch(`https://api.github.com/repos/${repo}/releases`, {
    method: 'POST',
    headers: { ...headers, 'content-type': 'application/json' },
    body: JSON.stringify({ tag_name: tag, name: tag, generate_release_notes: true }),
  })
  if (!created.ok) throw new Error(`creating release ${tag} failed: HTTP ${created.status} ${await created.text()}`)
  log(`created release ${tag}`)
}

async function main(): Promise<void> {
  const dryRun = process.argv.includes('--dry-run')
  const ref = process.env.GITHUB_REF_NAME ?? 'main'
  if (ref !== 'main') {
    // workflow_dispatch can be started from any ref; releases belong to main.
    log(`skipping: releases only run from main (this run is ${ref})`)
    return
  }

  const pkgPath = join(root, 'package.json')
  const changelogPath = join(root, 'CHANGELOG.md')
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8')) as PackageJson
  const repo = repoSlug(pkg)

  const lastTag = remoteTags()[0] ?? ''
  const commits = commitsSince(lastTag)
  const level = commits.reduce<Level>((max, commit) => Math.max(max, commitLevel(commit.subject, commit.body)) as Level, 0)
  const bootstrap = lastTag === ''
  log(`last tag: ${bootstrap ? '(none — first release)' : lastTag} · commits analysed: ${commits.length} · level: ${level}`)

  if (!bootstrap && level === 0) {
    // Nothing version-worthy — but a previous run may have pushed the tag and
    // then failed to create the release. Finish that before bowing out.
    await ensureRelease(repo, lastTag)
    log(`no releasable commits since ${lastTag}; done`)
    return
  }

  const version = nextVersion(lastTag, pkg.version, level)
  const tag = `v${version}`
  const bumping = version !== pkg.version
  const date = new Date().toISOString().slice(0, 10)
  log(`plan: ${tag} (${bumping ? 'package.json bump + CHANGELOG roll' : 'baseline — package.json already there'})`)
  if (dryRun) {
    log('dry run: nothing written')
    return
  }

  if (bumping) {
    writeFileSync(pkgPath, `${JSON.stringify({ ...pkg, version }, null, 2)}\n`)
    writeFileSync(changelogPath, rollChangelog(
      readFileSync(changelogPath, 'utf8'),
      version,
      date,
      `https://github.com/${repo}`,
    ))
    if (process.env.GITHUB_ACTIONS === 'true') {
      // CI commits as the bot; a local run keeps the committer's own config.
      git('config', 'user.name', 'github-actions[bot]')
      git('config', 'user.email', '41881850+github-actions[bot]@users.noreply.github.com')
    }
    git('add', 'package.json', 'CHANGELOG.md')
    // [skip ci] on top of GitHub's rule that GITHUB_TOKEN pushes never trigger
    // workflows — the bump commit must not kick off a successor run.
    git('commit', '-m', `chore(release): ${tag} [skip ci]`)
  }

  // --force only rewrites a LOCAL tag the remote does not have (remoteTags
  // proved absence a moment ago; any existing remote tag would be newer).
  git('tag', '-a', tag, '-m', tag, '--force')
  // Atomic: bump commit and tag land together or not at all, so a version tag
  // can never point at a commit that still declares the previous version.
  git('push', '--atomic', 'origin', 'HEAD:main', tag)
  log(`pushed ${tag}`)

  await ensureRelease(repo, tag)
}

const invokedDirectly = process.argv[1] !== undefined && import.meta.url === pathToFileURL(process.argv[1]).href
if (invokedDirectly) {
  await main()
}
