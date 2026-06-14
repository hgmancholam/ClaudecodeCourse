# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A bilingual (English/Spanish) internal training deck about **Claude Code (the CLI)**, built as standalone HTML/JS files. There is no build system, package manager, or test suite — files are opened directly in a browser. The authoritative source for content is Anthropic's official courses at https://anthropic.skilljar.com/ ; content is added incrementally as the author works through those courses.

## Files

- `theme.css` — **single source of truth for the visual identity** (color tokens, typography tokens, base reset, and the `.s-*` accent classes). Both HTML pages link it. Change a color/font here and it propagates site-wide; do not redefine these tokens inside a page's `<style>`.
- `index.html` — the **slide deck**. A presentation framework (page-specific layout in inline `<style>` + vanilla JS, plus html2canvas via CDN; shared tokens come from `theme.css`). Loads slides via `<script src="slides/NN-nombre.js">` tags — works with `file://`, no server needed.
- `slides/` — individual slide files as `.js`. Each file pushes a **bilingual object** to `window._deck`:
  ```js
  (window._deck = window._deck || []).push({
    en: `<section class="slide ...">…English content…</section>`,
    es: `<section class="slide ...">…Spanish content…</section>`
  });
  ```
  `index.html` calls `renderDeck()` which reads the current `lang` variable (`'en'` or `'es'`) and does `stage.innerHTML = window._deck.map(s => s[lang]).join('\n')`. **If the HTML content contains a backtick, escape it as `\`` inside the template literal.**

  | # | File | `data-title` | Class |
  |---|------|-------------|-------|
  | 1 | `slides/01-portada.js` | `portada` | `slide cover s-proj` |
  | 2 | `slides/02-que-es-claude-code.js` | `que-es-claude-code` | `slide s-info` |
  | 3 | `slides/03-claude-modes.js` | `claude-modes` | `slide s-mode` |
  | 4 | `slides/04-installing-claude.js` | `installing-claude` | `slide s-info` |
  | 5 | `slides/05-contexto-memoria.js` | `contexto-memoria` | `slide s-flow` |
  | 6 | `slides/06-claude-agent-sdk.js` | `claude-agent-sdk` | `slide s-mode` |
  | 7 | `slides/07-estructura-proyecto.js` | `estructura-proyecto` | `slide s-feat` |
  | 8 | `slides/08-subagents.js` | `subagents` | `slide s-mode` |
  | 9 | `slides/09-custom-commands.js` | `custom-commands` | `slide s-short` |
  | 10 | `slides/10-hooks.js` | `hooks` | `slide s-env` |
  | 11 | `slides/11-slash-commands.js` | `slash-commands` | `slide no-export s-cli` |
  | 12 | `slides/12-atajos-cli.js` | `atajos-cli` | `slide no-export s-flag` |
  | 13 | `slides/13-features-map.js` | `features-map` | `slide no-export s-proj` |
  | 14 | `slides/14-bonus-skills.js` | `bonus-skills` | `slide no-export s-short` |

  Next slide: `15` → `slides/15-nombre.js`. Add `no-export` to slides too dense for 1080×1080 (reference grids, tables).
- `claude-commands-infografia.html` — a standalone single-page cheat-sheet of Claude Code commands (1600px wide, 3-column layout). Also consumes `theme.css` for its palette and typography.

## Running

Open `index.html` directly in a browser (double-click) — **no server needed**. Slides load via `<script src>` tags which work with `file://`. html2canvas loads from a CDN — internet access needed for the export feature.

## Language selector

A **`ES / EN` button** in the control bar (or press `L`) switches the deck language at runtime. Default is **English**. The button shows the language you will switch *to* (so when showing English, it reads "ES"). Switching calls `renderDeck()` which re-injects the slides for the new language and navigates back to the same slide index.

## Slide deck architecture (`index.html`)

The deck is designed so **adding content never requires touching the JavaScript**.

**Dual-format / fluid design (the core idea).** Slides are NOT a fixed size. `#stage` is a CSS **container** (`container-type: size`) that fills the viewport during presentation (any aspect ratio) and is temporarily forced to 1080×1080 during export. A single markup adapts to both because:
- All typography and spacing use **`cqmin` units** (1% of the container's shorter side), so sizes stay consistent whether the canvas is a 1920×1080 screen or a 1080×1080 export. Avoid fixed `px` for slide content — use `cqmin` (px is fine for the controls UI, which lives outside `#stage`).
- A single `@container slide (min-aspect-ratio: 1.15)` block switches layout: wide screens get 2-column bodies (`.body.grid2`) and slightly smaller relative type; square/export collapses to one stacked column. Keep new aspect-driven responsive rules inside this block rather than adding more container queries.
- **Mobile / narrow view (`@media (max-width: 700px)`).** On a portrait phone the container's shorter side is the *width*, so `cqmin` text becomes tiny and the fit-to-screen `overflow:hidden` makes it illegible. A single `@media (max-width: 700px)` block (in `index.html`'s `<style>`) handles this exception: it hides `#hint`, switches the active slide to `overflow-y:auto` with content flowing from the top, and overrides the key text components to **fixed, legible px sizes** so a slide stays readable and scrolls vertically when it doesn't fit. `fitRefgrid()` early-returns on this breakpoint (the reference grids drop to one column with fixed-size rows). The control bar (`#bar`) stays pinned to the bottom on **one line** (`flex-wrap:nowrap`, shrunken buttons) — the 1:1 export buttons (`#exp`, `#expAll`) and the separator are hidden on mobile since exporting PNGs is a desktop authoring action. This is the *only* width-based media query — keep mobile readability fixes here.

Authoring rules:
- **Adding a slide:** create `slides/NN-nombre.js` with the bilingual object pattern above, then add `<script src="slides/NN-nombre.js"></script>` in `index.html` before the main `<script>`. The slide counter and footer page numbers derive from the DOM after injection, so they update automatically.
- **`.body.grid2`** — add this class to bodies with several parallel items (lists, command rows) so they spread into 2 columns on a wide screen and stack on the square export. Single-focus bodies (one callout, cover) stay plain `.body`.
- **Section color:** a class `s-proj | s-mode | s-feat | s-info | s-env | s-integ | s-flow | s-cli | s-flag | s-short` (defined in `theme.css`), each mapping a palette var to `--accent`. Components read `var(--accent)` to tint themselves.
- **`data-title` attribute:** becomes the exported PNG filename (`NN-<data-title>.png`).
- **Reusable content components** (used inside `.body`): `ul.points` (numbered list), `.cmdrow` with `.cmd`/`.desc` (cheat-sheet rows), `.callout` + `code.inline`, and the `.cover` variant for title slides.
- **`.refgrid`** — dense reference grid (the full command cheat-sheet on one slide). A CSS multi-column container holding `.cat` cards (3 columns on the square export, 5 on a wide screen). Each `.cat` carries its own `.s-*` class so it sets its own `--accent` locally; inner rows use `.ln` with `.k` (command) / `.d` (description). This is the deck-native re-implementation of `claude-commands-infografia.html` — keep the two in sync if commands change.
  - **MUST — auto-fit font size:** `.refgrid` font sizes use the CSS custom properties `--rg-fs` (row text) and `--rg-h3` (category header) via `var(--rg-fs, fallback)`. The `fitRefgrid()` JS function (called on every `show()` and `resize`) binary-searches for the largest `cqmin` value where the content fits — it measures the lowest rendered `.cat` via `getBoundingClientRect()` (not `scrollHeight`, which is unreliable in multi-column layouts) — then sets both variables as inline styles on the `.refgrid` element so the content always expands to fill the available slide height. **Every slide that contains a `.refgrid` automatically benefits — no per-slide JS needed. Per-slide CSS overrides must use `var(--rg-fs, X)` so the auto-fit can override them.**

### Export (social-media images)

Each slide exports to a 1080×1080 PNG at `scale:2` (2160px, sharp). `exportSlide()` forces `#stage` to `1080px × 1080px`, waits two animation frames for the container queries to relayout into square form, captures with html2canvas, then restores `#stage` to its viewport size. `body.exporting` hides the controls during capture. Keep the controls bar (`#bar`) and `#hint` outside `#stage` so they are never part of a capture.

### Keyboard

`←/→/space` navigate, `F` fullscreen, `E` export current slide, `A` export all, `L` toggle language, `Home/End` jump to first/last.

## Conventions

- All slide content must be provided in **both English and Spanish** inside each `.js` file. English is the default language shown on load.
- Keep everything self-contained per file (inline CSS/JS); the only external dependency is the html2canvas CDN script.
- When generating new slides from course material, match an existing component pattern rather than introducing new CSS, and pick the section color that fits the topic.
- Technical terms, command names, and Claude reserved words (e.g. `CLAUDE.md`, `/init`, `PreToolUse`) are kept identical in both languages.
- **Footer author note:** every `<footer>` (in both languages) must carry an author note `<span class="author">Giovanny Manchola</span>` placed immediately to the **left of the paginator** — i.e. right before the page-number span (`<span class="pg"></span>`, or `<span>2026</span>` on the cover). The footer is a flex row where `.brand` takes `margin-right:auto`, so `.author` and the paginator group together on the right. When adding a new slide, include this author span in every footer.
- **Mobile legibility:** a new slide must stay readable on a narrow phone. Build it from the existing components (`ul.points`, `.cmdrow`, `.callout`, `.refgrid`, `.ctable`, …) so the shared `@media (max-width: 700px)` block already gives it fixed legible type + vertical scroll. If a slide introduces a **new** content component with its own `cqmin` font sizes, add a matching override inside that media query (fixed px size, single column) — otherwise it will render too small to read on mobile.
