/**
 * Extract the human-readable answer from a coding CLI's stdout.
 *
 * Claude Code `--output-format stream-json` prints one NDJSON event per line
 * (system hooks, assistant frames, a final result envelope). Storing that
 * dump as the thread answer is unusable — this pulls the final result text
 * (or assistant text parts) instead. Never throws; empty/malformed stdout
 * returns undefined so callers can fall back.
 *
 * @module dsh-mux/parse-answer
 */

/** Scan JSON object lines with the same lenient walk as session-id extraction. */
function scanJsonLines(stdout: string): Record<string, unknown>[] {
  const records: Record<string, unknown>[] = []
  for (const line of stdout.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed.startsWith('{')) continue
    try {
      const parsed: unknown = JSON.parse(trimmed)
      if (typeof parsed === 'object' && parsed !== null) {
        records.push(parsed as Record<string, unknown>)
      }
    } catch {
      continue
    }
  }
  return records
}

/** Concatenate text parts from one assistant message frame. */
function assistantText(message: unknown): string {
  if (typeof message !== 'object' || message === null) return ''
  const content = (message as { content?: unknown }).content
  if (!Array.isArray(content)) return ''
  const chunks: string[] = []
  for (const part of content) {
    if (typeof part !== 'object' || part === null) continue
    const record = part as { type?: unknown, text?: unknown, content?: unknown }
    if (record.type === 'text' && typeof record.text === 'string') {
      chunks.push(record.text)
    } else if (record.type === 'text' && typeof record.content === 'string') {
      chunks.push(record.content)
    }
  }
  return chunks.join('')
}

/**
 * Claude Code stream-json: prefer the final `type: result` envelope's
 * `result` string; otherwise stitch assistant text frames; otherwise give up.
 * @param stdout - raw combined stdout from one turn.
 */
export function parseClaudeStreamJson(stdout: string): string | undefined {
  const records = scanJsonLines(stdout)
  if (records.length === 0) {
    const trimmed = stdout.trim()
    if (trimmed.length === 0) return undefined
    // Broken JSON-looking dumps are not an answer; pass real prose through.
    if (trimmed.startsWith('{') || trimmed.includes('"type":') || trimmed.includes('{')) return undefined
    return trimmed
  }
  for (let i = records.length - 1; i >= 0; i--) {
    const record = records[i]
    if (record['type'] === 'result' && typeof record['result'] === 'string') {
      const text = record['result'].trim()
      if (text.length > 0) return text
    }
  }
  const parts: string[] = []
  for (const record of records) {
    if (record['type'] !== 'assistant') continue
    const text = assistantText(record['message'])
    if (text.length > 0) parts.push(text)
  }
  const joined = parts.join('').trim()
  return joined.length > 0 ? joined : undefined
}
