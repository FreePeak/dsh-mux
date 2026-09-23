#!/opt/homebrew/opt/python@3.14/bin/python3.14
"""Docker validation screenshots for dsh-mux (brew's Python Playwright).

    python3 scripts/shot.py "http://127.0.0.1:3101/?token=..."

Walks: boot + sidebar Mux entry -> dismiss first-run dialogs -> new session ->
/mux command -> /ask claude fixture turn -> Mux panel (live discovery strip,
stored thread). Every step takes a best-effort screenshot, so a failure still
leaves evidence of where it stopped. Saves docs/screenshots/NN-*.png + capture.log.
"""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

url = sys.argv[1] if len(sys.argv) > 1 else None
if not url:
    sys.exit("usage: shot.py <authenticated-url>")

root = Path(__file__).resolve().parent.parent
shots = root / "docs" / "screenshots"
shots.mkdir(parents=True, exist_ok=True)
log = []

def say(line):
    log.append(line)
    print(line, flush=True)

DIALOG_BUTTONS = ["Configure later", "Continue", "Got it", "OK", "Skip"]

with sync_playwright() as p:
    try:
        browser = p.chromium.launch()
    except Exception:  # noqa: BLE001 - missing headless shell: use system Chrome
        browser = p.chromium.launch(channel="chrome")
    context = browser.new_context(viewport={"width": 1680, "height": 1000}, locale="en-US")
    page = context.new_page()
    page.on("console", lambda m: say(f"[console.{m.type}] {m.text}") if m.type == "error" else None)
    page.on("pageerror", lambda e: say(f"[pageerror] {e}"))
    step = [0]

    def shot(name):
        step[0] += 1
        path = shots / f"{step[0]:02d}-{name}.png"
        page.screenshot(path=str(path))
        say(f"shot: {path}")

    def step_try(name, fn):
        try:
            fn()
            say(f"ok: {name}")
        except Exception as error:  # noqa: BLE001 - evidence over abort
            say(f"FAIL: {name}: {error}")
            shot(f"{name}-FAIL")

    def dismiss_dialogs(rounds=8):
        """Click through first-run dialogs (testing notice, API-key prompt)."""
        for _ in range(rounds):
            dialogs = page.locator('[role="dialog"]')
            visible = [i for i in range(dialogs.count()) if dialogs.nth(i).is_visible()]
            if not visible:
                return
            d = dialogs.nth(visible[0])
            labels = d.locator("button").all_inner_texts()
            for want in DIALOG_BUTTONS:
                if want in labels:
                    d.get_by_role("button", name=want, exact=True).first.click()
                    break
            else:
                d.locator("button").last.click()
            page.wait_for_timeout(1000)

    def boot():
        page.goto(url, wait_until="load", timeout=45000)
        page.locator("[data-mux-icon]").first.wait_for(timeout=45000)
        page.wait_for_timeout(1500)
        # First-run dialogs mount a beat AFTER the shell: wait for one to show
        # (or give up), then click through until none are visible.
        try:
            page.locator('[role="dialog"]:visible').first.wait_for(timeout=7000)
        except Exception:  # noqa: BLE001 - none appeared (state already onboarded)
            pass
        dismiss_dialogs()
        shot("boot-sidebar-mux-entry")

    def panel():
        dismiss_dialogs(3)
        page.locator("[data-mux-icon]").first.click()
        page.locator("[data-mux-panel]").wait_for(timeout=15000)
        # Discovery strip: a chip settles installed once remote.mux.discover() answers.
        page.locator('[data-mux-chip][data-installed="true"]').first.wait_for(timeout=15000)
        page.wait_for_timeout(500)
        shot("mux-panel-discovery-strip")

    def new_session():
        dismiss_dialogs(3)
        button = page.get_by_role("button", name="New session")
        if button.count() and button.first.is_visible():
            button.first.click()
            page.wait_for_timeout(1500)
        box = page.locator('[class*="cardWorkspaceTrigger"] input')
        box.first.wait_for(timeout=15000)

    def composer(text, expect, timeout):
        box = page.locator('[class*="cardWorkspaceTrigger"] input').first
        box.wait_for(timeout=15000)
        box.fill(text)
        page.keyboard.press("Enter")
        page.get_by_text(expect, exact=False).first.wait_for(timeout=timeout)

    step_try("boot", boot)
    step_try("mux panel", panel)
    step_try("new session", new_session)
    step_try("/mux command",
             lambda: (composer("/mux", "Open the Mux page in the sidebar", 15000),
                      page.wait_for_timeout(800), shot("command-mux-ok")))
    step_try("/ask claude pipeline",
             lambda: (composer("/ask claude say hi to the fixture", "fixture claude received", 30000),
                      page.wait_for_timeout(800), shot("ask-claude-fixture-turn")))

    def thread():
        page.locator("[data-mux-icon]").first.click()
        page.locator("[data-mux-panel]").wait_for(timeout=10000)
        page.locator("[data-mux-thread]").first.wait_for(timeout=15000)
        page.locator("[data-mux-thread]").first.click()
        page.wait_for_timeout(600)
        shot("mux-panel-thread-turns")

    step_try("panel thread stored", thread)
    (shots / "capture.log").write_text("\n".join(log) + "\n")
    browser.close()
say("done")
