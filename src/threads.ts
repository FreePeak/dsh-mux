/**
 * The mux thread store: which CLI session id each thread resumes.
 *
 * Harness-free so tests cover it with plain files. The plugin persists under
 * the profile's data dir; deletion removes the mux record only, never the
 * CLI's own session files.
 *
 * @module dsh-mux/threads
 */

import { randomUUID } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

/** One turn in a thread. */
export interface MuxTurn {
  /** Who produced it: the human/composer prompt or the CLI answer. */
  readonly role: 'prompt' | 'answer' | 'error'
  readonly text: string
  /** Epoch milliseconds. */
  readonly at: number
}

/** One mux thread. */
export interface MuxThread {
  readonly id: string
  readonly cli: string
  readonly cwd: string
  /** The CLI's own session id, when a turn returned one. */
  readonly cliSessionId: string | undefined
  readonly createdAt: number
  readonly turns: readonly MuxTurn[]
}

/** The file shape. */
interface ThreadFile {
  readonly version: 1
  readonly threads: readonly MuxThread[]
}

const STORE_FILE = 'threads.json'

function emptyFile(): ThreadFile {
  return { version: 1, threads: [] }
}

function readFile(path: string): ThreadFile {
  try {
    const raw = readFileSync(path, 'utf8')
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null) return emptyFile()
    const threads = (parsed as { threads?: unknown }).threads
    if (!Array.isArray(threads)) return emptyFile()
    return { version: 1, threads: threads as MuxThread[] }
  } catch {
    return emptyFile()
  }
}

function writeFileAtomic(dir: string, path: string, file: ThreadFile): void {
  mkdirSync(dir, { recursive: true })
  const tmp = join(dir, `.threads.${process.pid}.tmp`)
  writeFileSync(tmp, JSON.stringify(file, null, 2), 'utf8')
  // Rename is atomic on POSIX; a crash leaves the tmp file, never half a store.
  try {
    renameSync(tmp, path)
  } catch {
    writeFileSync(path, JSON.stringify(file, null, 2), 'utf8')
  }
}

/** A JSON thread store rooted at one directory. */
export class ThreadStore {
  private readonly file: string

  constructor(dir: string) {
    mkdirSync(dir, { recursive: true })
    this.file = join(dir, STORE_FILE)
  }

  /** Create a thread for one CLI in one workspace. */
  create(cli: string, cwd: string): MuxThread {
    const thread: MuxThread = {
      id: randomUUID(),
      cli,
      cwd,
      cliSessionId: undefined,
      createdAt: Date.now(),
      turns: [],
    }
    const file = readFile(this.file)
    writeFileAtomic(this.dirOf(), this.file, {
      version: 1,
      threads: [...file.threads, thread],
    })
    return thread
  }

  /** Read one thread, or undefined. */
  get(id: string): MuxThread | undefined {
    return readFile(this.file).threads.find(thread => thread.id === id)
  }

  /** Every thread, newest first. */
  list(): MuxThread[] {
    return [...readFile(this.file).threads].sort((a, b) => b.createdAt - a.createdAt)
  }

  /**
   * Append a turn; optionally record the CLI session id the turn returned.
   * @returns the updated thread, or undefined when the id is unknown.
   */
  append(id: string, turn: MuxTurn, cliSessionId?: string): MuxThread | undefined {
    const file = readFile(this.file)
    const index = file.threads.findIndex(thread => thread.id === id)
    if (index === -1) return undefined
    const current = file.threads[index]!
    const updated: MuxThread = {
      ...current,
      ...(cliSessionId === undefined || current.cliSessionId !== undefined
        ? {}
        : { cliSessionId }),
      turns: [...current.turns, turn],
    }
    const threads = [...file.threads]
    threads[index] = updated
    writeFileAtomic(this.dirOf(), this.file, { version: 1, threads })
    return updated
  }

  /** Forget the stored session id (fresh thread, same record). */
  clearSession(id: string): MuxThread | undefined {
    const file = readFile(this.file)
    const index = file.threads.findIndex(thread => thread.id === id)
    if (index === -1) return undefined
    const current = file.threads[index]!
    const updated: MuxThread = { ...current, cliSessionId: undefined }
    const threads = [...file.threads]
    threads[index] = updated
    writeFileAtomic(this.dirOf(), this.file, { version: 1, threads })
    return updated
  }

  /** Delete the thread record. Never touches the CLI's own session files. */
  delete(id: string): boolean {
    const file = readFile(this.file)
    if (!file.threads.some(thread => thread.id === id)) return false
    writeFileAtomic(this.dirOf(), this.file, {
      version: 1,
      threads: file.threads.filter(thread => thread.id !== id),
    })
    return true
  }

  private dirOf(): string {
    return this.file.slice(0, this.file.length - STORE_FILE.length - 1)
  }
}

/** Whether a threads data dir already holds a store. */
export function hasStore(dir: string): boolean {
  return existsSync(join(dir, STORE_FILE))
}
