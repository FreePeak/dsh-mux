#!/opt/homebrew/opt/python@3.14/bin/python3.14
"""Drive workspace -> session -> /mux -> /ask over the wire and screenshot.

    python3 scripts/drive.py "http://127.0.0.1:3101/?token=..."

Uses the harness's own mounted remote namespaces (session/commands) through
window.__dshMux.call — the same path the composer takes when the onboarding
flow is unavailable (directory picker fails inside the container). Results are
rendered into an overlay so the screenshot shows the real command text.
"""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

url = sys.argv[1] if len(sys.argv) > 1 else None
if not url:
    sys.exit("usage: drive.py <authenticated-url>")

root = Path(__file__).resolve().parent.parent
shots = root / "docs" / "screenshots"
shots.mkdir(parents=True, exist_ok=True)
log = []

def say(line):
    log.append(line)
    print(line, flush=True)

PRIORITY = ["Configure later", "Continue", "Got it", "OK", "Skip"]
CWD = "/data/mux-validation"

def dismiss_all(page, rounds=8):
    for _ in range(rounds):
        dialogs = page.locator('[role="dialog"]')
        visible = [i for i in range(dialogs.count()) if dialogs.nth(i).is_visible()]
        if not visible:
            return
        d = dialogs.nth(visible[0])
        labels = d.locator("button").all_inner_texts()
        for want in PRIORITY:
            if want in labels:
                d.get_by_role("button", name=want, exact=True).first.click()
                break
        else:
            d.locator("button").last.click()
        page.wait_for_timeout(900)

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_context(viewport={"width": 1680, "height": 1000}, locale="en-US").new_page()
    page.on("console", lambda m: say(f"[console.{m.type}] {m.text[:180]}") if m.type == "error" else None)
    page.on("pageerror", lambda e: say(f"[pageerror] {e}"))
    step = [0]

    def shot(name):
        step[0] += 1
        path = shots / f"{step[0]:02d}-{name}.png"
        page.screenshot(path=str(path))
        say(f"shot: {path}")

    try:
        page.goto(url, wait_until="load", timeout=45000)
        page.locator("[data-mux-icon]").first.wait_for(timeout=45000)
        page.wait_for_timeout(2500)
        try:
            page.locator('[role="dialog"]:visible').first.wait_for(timeout=7000)
        except Exception:  # noqa: BLE001 - already onboarded
            pass
        dismiss_all(page)
        shot("boot-sidebar-mux-entry")

        page.wait_for_function("() => window.__dshMux !== undefined", timeout=30000)
        say("ok: __dshMux hook present")

        # Workspace + session over the harness wire API.
        def call(ns, method, *args):
            return page.evaluate(
                "([ns, method, args]) => window.__dshMux.call(ns, method, ...args)",
                [ns, method, list(args)],
            )

        ws = call("workspace", "create", {"path": CWD})
        say(f"workspace.create -> {ws}")
        workspace_id = (ws or {}).get("value", {}).get("workspace", {}).get("workspaceId")
        # session.create accepts workspaceId or cwd, exactly one of the two.
        session_request = {"workspaceId": workspace_id} if workspace_id else {"cwd": CWD}
        session = call("session", "create", session_request)
        say(f"session.create {session_request} -> {session}")
        session_id = (session or {}).get("value", {}).get("sessionId")
        if not session_id:
            raise RuntimeError(f"no sessionId: {session}")

        results = []
        for line in ("/mux", "/ask claude say hi to the fixture"):
            execution = call("commands", "execute", session_id, line, [])
            say(f"execute({line!r}) -> {execution}")
            value = (execution or {}).get("value")
            text = ""
            if isinstance(value, dict):
                result = value.get("result", value)
                text = result.get("text", "") if isinstance(result, dict) else str(result)
            results.append((line, text or str(value)))
            page.wait_for_timeout(400)

        # Overlay the real command results onto the page for the screenshot.
        markup = "".join(
            f"<div style='margin:8px 0'><b>$ {line}</b><pre style='white-space:pre-wrap;margin:2px 0;color:#b6f3c1'>{text}</pre></div>"
            for line, text in results
        )
        page.evaluate("""(markup) => {
            const box = document.createElement('div')
            box.id = 'mux-drive-results'
            box.setAttribute('style', 'position:fixed;inset:auto 24px 24px 24px;z-index:9999;background:#101418ee;color:#e6e6e6;border:1px solid #3a4a3a;border-radius:10px;padding:14px 16px;font:13px/1.45 ui-monospace,monospace;max-height:46%;overflow:auto')
            box.innerHTML = markup
            document.body.append(box)
        }""", markup)
        page.wait_for_timeout(400)
        shot("command-execution-ok")

        # The /ask turn must exist as a mux thread host-side.
        threads = call("mux", "listThreads")
        say(f"mux.listThreads -> {threads}")
        if not isinstance(threads, dict) or threads.get("ok") is not True:
            raise RuntimeError(f"listThreads not ok: {threads}")
        if not threads["value"]:
            raise RuntimeError("no mux thread stored from /ask turn")
        preview = threads["value"][0]["turns"]
        say(f"thread turns: {[(t['role'], t['text'][:70]) for t in preview]}")

        # Resume acceptance: a second send on the SAME thread must pass the
        # stored cliSessionId to --resume (the fixture echoes its id back).
        thread_id = threads["value"][0]["id"]
        resumed = call("mux", "send", {"cli": "claude", "prompt": "second turn", "threadId": thread_id})
        say(f"mux.send (resume) -> {resumed}")
        resumed_text = (resumed or {}).get("value", {}).get("text", "")
        stored_id = threads["value"][0].get("cliSessionId", "")
        if (resumed or {}).get("ok") is not True or stored_id not in resumed_text or "resumed" not in resumed_text:
            raise RuntimeError(f"resume turn did not prove --resume: {resumed_text!r}")
        say(f"ok: resume passed session id {stored_id} to --resume")

        # Panel view: discovery strip first, then the stored thread.
        page.evaluate("() => document.getElementById('mux-drive-results')?.remove()")
        page.locator("[data-mux-icon]").first.click()
        page.locator("[data-mux-panel]").wait_for(timeout=15000)
        page.locator('[data-mux-chip][data-installed="true"]').first.wait_for(timeout=15000)
        page.wait_for_timeout(500)
        shot("mux-panel-discovery-strip")
        page.locator("[data-mux-thread]").first.wait_for(timeout=15000)
        page.locator("[data-mux-thread]").first.click()
        page.wait_for_timeout(700)
        shot("mux-panel-thread-turns")
        say("ok: all steps")
    except Exception as error:  # noqa: BLE001 - evidence over abort
        say(f"FAIL: {error}")
        shot("drive-FAIL")
    (shots / "drive.log").write_text("\n".join(log) + "\n")
    browser.close()
say("done")
