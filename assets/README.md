# Brand assets

| File | Use |
| --- | --- |
| [favicon.svg](favicon.svg) | Site / repo favicon (64×64 mark on dark tile) |
| [mark.svg](mark.svg) | App icon / avatar (dark) |
| [mark-light.svg](mark-light.svg) | App icon on light surfaces |
| [mark-mono.svg](mark-mono.svg) | Single-color mark (`currentColor`) for CSS theming |
| [logo.svg](logo.svg) | Horizontal lockup for light README / docs headers |
| [logo-dark.svg](logo-dark.svg) | Horizontal lockup for dark backgrounds |
| [social-card.svg](social-card.svg) | Open Graph / Twitter card master (1280×640) |
| [social-card.png](social-card.png) | Rasterized social card |
| [favicon-256.png](favicon-256.png) | Rasterized favicon preview (256×256) |

## Mark meaning

Two inbound strokes (cyan + violet) join at a mux node and leave as one
outbound trunk (cyan→green), ending in a green continuity dot — **many coding
CLIs in, one resumed thread out**.

Palette (dark OLED / developer tool):

| Token | Hex | Role |
| --- | --- | --- |
| Tile | `#152341` → `#070D18` | Mark background |
| Channel A | `#22D3EE` | First CLI path |
| Channel B | `#A78BFA` | Second CLI path |
| Join | `#F8FAFC` | Mux node |
| Out / resume | `#34D399` | Trunk + session continuity |

No emoji icons; SVG only. Keep stroke width ≥ 4 on the 64px viewBox so the
favicon stays legible at 16–32px.
