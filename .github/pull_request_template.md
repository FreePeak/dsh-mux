<!--
Keep this short where it can be and long where it matters. Say what changed,
why, and what it replaced. If you found a bug on the way, write the mechanism.
-->

## Summary

<!-- One paragraph: what this changes and why. -->

## What changed

<!-- Bullets. File-by-file where that helps. -->

## Checklist

- [ ] `npm test` passes (28 tests)
- [ ] `npm run build` succeeds when host/`remote` sources changed
- [ ] No new runtime dependencies, or the one added is justified below
- [ ] Adapter argv tables updated if a target CLI's flags changed
- [ ] `CHANGELOG.md` updated under Unreleased when behaviour changed
- [ ] Screenshots / `docs/diagrams/` touched only when the UI or flow changed

## Notes for reviewers

<!--
Tradeoffs, alternatives rejected, known limits (`ponytail:` in code with an
upgrade path), and anything you could not verify locally (plugin path needs a
harness profile; Docker drive needs Playwright).
-->
