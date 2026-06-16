# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A bilingual (English/Spanish) **multi-presentation site** of internal training decks about **Claude Code (the CLI)** and related topics, built as standalone HTML/JS files. There is no build system, package manager, or test suite — files are opened directly in a browser. The authoritative source for content is Anthropic's official courses at https://anthropic.skilljar.com/ ; content is added incrementally as the author works through those courses.

The site hosts **several presentations, each in its own folder with its own URL** (deployed on Vercel). See "Multiple presentations & routing" below.

## Files

### Shared (root)
- `theme.css` — **single source of truth for the visual identity** (color tokens, typography tokens, base reset, and the `.s-*` accent classes). Every page links it. Change a color/font here and it propagates site-wide; do not redefine these tokens inside a page's `<style>`.
- `deck.css` — **the deck framework's styles** (slide layout, components, fluid `cqmin`/`@container` rules, controls bar, mobile media query). Extracted from the old inline `<style>` so every presentation reuses one copy. All the slide-rendering CSS described in this file now lives here.
- `deck.js` — **the deck framework's behavior** (`renderDeck`, language toggle, navigation, slide picker, `fitRefgrid`, PNG export, touch swipe). Extracted from the old inline `<script>`. Each presentation's `index.html` loads it **last**, after its slide `<script src>` tags and html2canvas.
- `presentations.js` — **central registry**: `window.PRESENTATIONS = [...]`. Each entry is one of two **types** (see "Presentation types & chapters"): a **simple deck** (has `slides:N`) or a **course** (has `chapters:[...]`). Both carry `slug`, `accent`, and bilingual `en`/`es` `{tag,title,desc}`. `/list` and the per-course index read this. Add/update an entry here when you add a presentation or chapter.
- `gallery.css` / `gallery.js` — the **shared card-gallery component** used by `/list` (lists presentations) **and** each course's index (lists its chapters). `gallery.js` reads a `window.GALLERY_CONFIG = {items, hrefFor, i18n, crumbs?, slugBase?}` that the page sets before loading it; it renders the cards, the bilingual header, breadcrumbs, and the `L` language toggle. A card shows "N chapters" when its item has `chapters`, else "N slides".
- `index.html` — **root redirect** to `/claude-code-basics` (relative meta-refresh + JS; on Vercel the `vercel.json` redirect handles `/` first).
- `list/index.html` — the **`/list` page**: sets `GALLERY_CONFIG` from `presentations.js` (items = all presentations, `hrefFor` → `../<slug>/`) and loads `gallery.js`.
- `vercel.json` — hosting config: `trailingSlash: true` and a redirect `/` → `/claude-code-basics`.

### Per presentation (`<slug>/`)
A presentation folder is **either** a deck **or** a course index:
- **Simple deck** (`claude-code-basics/`): `<slug>/index.html` is a **thin deck wrapper** — links `../theme.css` + `../deck.css`, contains `#stage` and `#bar` (with a `≡` home link to `../list/`), lists its own `slides/NN-*.js` via `<script src>`, then loads `../deck.js` last.
- **Course** (`TDM-training/`): `<slug>/index.html` is a **chapter index** (uses `../gallery.css`/`../gallery.js`, finds its own course in the registry by `COURSE_SLUG`, lists `course.chapters`). Each chapter lives in `<slug>/<chapter-slug>/` and is itself a deck wrapper, but linking the framework **two levels up** (`../../theme.css`, `../../deck.css`, `../../deck.js`) and with its `≡` home link pointing to `../` (the chapter index).
- `<slug>/slides/` (deck) or `<slug>/<chapter-slug>/slides/` (course chapter) — individual slide files as `.js`. Each file pushes a **bilingual object** to `window._deck`:
  ```js
  (window._deck = window._deck || []).push({
    en: `<section class="slide ...">…English content…</section>`,
    es: `<section class="slide ...">…Spanish content…</section>`
  });
  ```
  `deck.js` calls `renderDeck()` which reads the current `lang` variable (`'en'` or `'es'`) and does `stage.innerHTML = window._deck.map(s => s[lang]).join('\n')`. **If the HTML content contains a backtick, escape it as `\`` inside the template literal.**

  Presentations:
  - **`claude-code-basics/`** — simple deck, 15 slides (the original). Slide table below.
  - **`TDM-training/`** — a **course**; `TDM-training/chapter-0-overview/` is its first chapter (1 cover slide so far). Add more as `TDM-training/chapter-N-name/`.

  `claude-code-basics/slides/`:

  | # | File | `data-title` | Class |
  |---|------|-------------|-------|
  | 1 | `01-portada.js` | `portada` | `slide cover s-proj` |
  | 2 | `02-que-es-claude-code.js` | `que-es-claude-code` | `slide s-info` |
  | 3 | `03-claude-modes.js` | `claude-modes` | `slide s-mode` |
  | 4 | `04-installing-claude.js` | `installing-claude` | `slide s-info` |
  | 5 | `05-contexto-memoria.js` | `contexto-memoria` | `slide s-flow` |
  | 6 | `06-claude-agent-sdk.js` | `claude-agent-sdk` | `slide s-mode` |
  | 7 | `07-estructura-proyecto.js` | `estructura-proyecto` | `slide s-feat` |
  | 8 | `08-subagents.js` | `subagents` | `slide s-mode` |
  | 9 | `09-custom-commands.js` | `custom-commands` | `slide s-short` |
  | 10 | `10-hooks.js` | `hooks` | `slide s-env` |
  | 11 | `11-slash-commands.js` | `slash-commands` | `slide no-export s-cli` |
  | 12 | `12-atajos-cli.js` | `atajos-cli` | `slide no-export s-flag` |
  | 13 | `13-features-map.js` | `features-map` | `slide no-export s-proj` |
  | 14 | `14-bonus-skills.js` | `bonus-skills` | `slide no-export s-short` |
  | 15 | `15-gracias.js` | `gracias` | `slide cover s-proj` |

  Next slide in that deck: `16` → `slides/16-nombre.js`. Add `no-export` to slides too dense for 1080×1080 (reference grids, tables).

## Presentation types & chapters

A registry entry is **one of two types**, decided by which field it carries:

- **Simple deck** — has `slides:N`. `/<slug>/` **is** the deck. (e.g. `claude-code-basics`.)
- **Course** — has `chapters:[ {slug, accent, slides, en, es}, … ]`. `/<slug>/` is a **chapter index** (a gallery of chapter cards); each chapter is its own deck at `/<slug>/<chapter-slug>/`. (e.g. `TDM-training`.)

This nesting is **one level only** (presentation → chapter → slides). A chapter is just a deck that happens to live one folder deeper, so it links the shared framework with `../../` instead of `../`. Both `/list` and a course index render the same shared gallery (`gallery.js`); a card shows "N chapters" or "N slides" depending on the item.

## Routing

One folder per presentation (and per chapter), served on Vercel with clean URLs:

| URL | Serves |
|-----|--------|
| `/` | redirects → `/claude-code-basics` (`vercel.json`; `index.html` is the local/file:// fallback) |
| `/list` | `list/index.html` — gallery of all presentations |
| `/claude-code-basics` | `claude-code-basics/index.html` — a deck |
| `/TDM-training` | `TDM-training/index.html` — chapter index (course) |
| `/TDM-training/chapter-0-overview` | `TDM-training/chapter-0-overview/index.html` — a chapter deck |

`vercel.json` sets `trailingSlash: true`, so Vercel serves `/<path>/` and **relative asset paths resolve correctly** (a deck's `../deck.css` → `/deck.css`; a chapter's `../../deck.css` → `/deck.css`; `slides/NN.js` resolves under the current folder). Do **not** switch to absolute paths or these break on `file://` and at the folder root.

**To add a simple deck** (e.g. `/my-deck`):
1. Copy `claude-code-basics/index.html` → `my-deck/index.html` (change `<title>` and the slide `<script src>` list).
2. Create `my-deck/slides/01-portada.js` (and more) using the bilingual `window._deck` pattern.
3. Add a `{slug:'my-deck', accent, slides:N, en, es}` entry to `presentations.js`.

**To add a course** (e.g. `/my-course` with chapters):
1. Create `my-course/index.html` by copying `TDM-training/index.html` and setting `COURSE_SLUG = 'my-course'`.
2. For each chapter, copy `TDM-training/chapter-0-overview/index.html` → `my-course/<chapter-slug>/index.html` (keeps the `../../` framework paths and the `≡` → `../` home link) and add its `slides/`.
3. Add a registry entry with a `chapters:[…]` array (one object per chapter). That's all the indexes need.

**To add a chapter to an existing course:** create `TDM-training/<chapter-slug>/` (copy the chapter wrapper + add slides) and append a chapter object to that course's `chapters` array in `presentations.js`.

The shared `deck.css`/`deck.js`/`gallery.css`/`gallery.js`/`theme.css` are reused everywhere; never fork them per deck.

## Running

Open a presentation's `index.html` directly in a browser (e.g. `claude-code-basics/index.html`) — **no server needed**; slides load via `<script src>` tags which work with `file://`. Opening the **root** `index.html` redirects to the basics deck. html2canvas loads from a CDN — internet access needed for the export feature. The clean `/slug` URLs only apply when deployed (Vercel).

## Language selector

A **`ES / EN` button** in the control bar (or press `L`) switches the deck language at runtime. Default is **English**. The button shows the language you will switch *to* (so when showing English, it reads "ES"). Switching calls `renderDeck()` which re-injects the slides for the new language and navigates back to the same slide index.

## Slide deck architecture (`deck.css` + `deck.js`)

> The framework now lives in the shared root `deck.css` (styles) and `deck.js` (behavior); each presentation's `index.html` only links them and lists its slides. Where this section says "the `<style>`" it means `deck.css`, and "the main `<script>`" means `deck.js`.


The deck is designed so **adding content never requires touching the JavaScript**.

**Dual-format / fluid design (the core idea).** Slides are NOT a fixed size. `#stage` is a CSS **container** (`container-type: size`) that fills the viewport during presentation (any aspect ratio) and is temporarily forced to 1080×1080 during export. A single markup adapts to both because:
- All typography and spacing use **`cqmin` units** (1% of the container's shorter side), so sizes stay consistent whether the canvas is a 1920×1080 screen or a 1080×1080 export. Avoid fixed `px` for slide content — use `cqmin` (px is fine for the controls UI, which lives outside `#stage`).
- A single `@container slide (min-aspect-ratio: 1.15)` block switches layout: wide screens get 2-column bodies (`.body.grid2`) and slightly smaller relative type; square/export collapses to one stacked column. Keep new aspect-driven responsive rules inside this block rather than adding more container queries.
- **Mobile / narrow view (`@media (max-width: 700px)`).** On a portrait phone the container's shorter side is the *width*, so `cqmin` text becomes tiny and the fit-to-screen `overflow:hidden` makes it illegible. A single `@media (max-width: 700px)` block (in `deck.css`) handles this exception: it switches the active slide to `overflow-y:auto` with content flowing from the top, and overrides the key text components to **fixed, legible px sizes** so a slide stays readable and scrolls vertically when it doesn't fit. `fitRefgrid()` early-returns on this breakpoint (the reference grids drop to one column with fixed-size rows). The control bar (`#bar`) becomes a **full-width bottom bar** on mobile — pinned flush to the bottom edge (`left/right/bottom:0`, `transform:none`, `border-radius:0`, no side margins) on **one line** (`flex-wrap:nowrap`, shrunken buttons) — and `#full` (fullscreen) plus the 1:1 export buttons (`#exp`, `#expAll`) and the separator are hidden since fullscreen/exporting are desktop authoring actions. **This media query must stay at the very end of the `<style>`**: media queries don't raise specificity, so it has to come *after* the base `#bar`/`.slide` rules to win the cascade by source order (otherwise the base `#bar { bottom:18px }` overrode the mobile `bottom:0`, leaving a gap above the bottom edge).

  **Mobile re-shows everything the square layout hides.** A portrait phone also matches the `max-aspect-ratio: 1.14` container query, so its content-trimming rules (the `display:none` on `.callout`/`.codeblock`/`dl.defs` and the per-slide diagram hides that keep the 1:1 export uncluttered) would otherwise blank out the second-column visuals — callouts, code samples, diagrams — on mobile too. Because mobile scrolls, the media query re-shows them with `.callout, .codeblock{display:block !important}` (and `dl.defs{display:grid !important}`); the `!important` is required to beat the higher-specificity square rules. **If you add a new slide that hides an element in the square layout, also re-show it here**, or it will be invisible on mobile. This is the *only* width-based media query — keep mobile readability fixes here.

Authoring rules:
- **Adding a slide:** create `<slug>/slides/NN-nombre.js` with the bilingual object pattern above, then add `<script src="slides/NN-nombre.js"></script>` in **that presentation's** `index.html`, before the `../deck.js` `<script>`. The slide counter and footer page numbers derive from the DOM after injection, so they update automatically.
- **`.body.grid2`** — add this class to bodies with several parallel items (lists, command rows) so they spread into 2 columns on a wide screen and stack on the square export. Single-focus bodies (one callout, cover) stay plain `.body`.
- **Section color:** a class `s-proj | s-mode | s-feat | s-info | s-env | s-integ | s-flow | s-cli | s-flag | s-short` (defined in `theme.css`), each mapping a palette var to `--accent`. Components read `var(--accent)` to tint themselves.
- **`data-title` attribute:** becomes the exported PNG filename (`NN-<data-title>.png`).
- **Reusable content components** (used inside `.body`): `ul.points` (numbered list), `.cmdrow` with `.cmd`/`.desc` (cheat-sheet rows), `.callout` + `code.inline`, and the `.cover` variant for title slides.
- **`.refgrid`** — dense reference grid (the full command cheat-sheet on one slide). A CSS multi-column container holding `.cat` cards (3 columns on the square export, 5 on a wide screen). Each `.cat` carries its own `.s-*` class so it sets its own `--accent` locally; inner rows use `.ln` with `.k` (command) / `.d` (description). This is the deck-native re-implementation of `claude-commands-infografia.html` — keep the two in sync if commands change.
  - **MUST — auto-fit font size:** `.refgrid` font sizes use the CSS custom properties `--rg-fs` (row text) and `--rg-h3` (category header) via `var(--rg-fs, fallback)`. The `fitRefgrid()` JS function (called on every `show()` and `resize`) binary-searches for the largest `cqmin` value where the content fits — it measures the lowest rendered `.cat` via `getBoundingClientRect()` (not `scrollHeight`, which is unreliable in multi-column layouts) — then sets both variables as inline styles on the `.refgrid` element so the content always expands to fill the available slide height. **Every slide that contains a `.refgrid` automatically benefits — no per-slide JS needed. Per-slide CSS overrides must use `var(--rg-fs, X)` so the auto-fit can override them.**

### Export (social-media images)

Each slide exports to a 1080×1080 PNG at `scale:2` (2160px, sharp). `exportSlide()` forces `#stage` to `1080px × 1080px`, waits two animation frames for the container queries to relayout into square form, captures with html2canvas, then restores `#stage` to its viewport size. `body.exporting` hides the controls during capture. Keep the controls bar (`#bar`) outside `#stage` so it is never part of a capture.

### Keyboard

`←/→/space` navigate, `F` fullscreen, `E` export current slide, `A` export all, `L` toggle language, `Home/End` jump to first/last.

## Conventions

- All slide content must be provided in **both English and Spanish** inside each `.js` file. English is the default language shown on load.
- Keep everything self-contained per file (inline CSS/JS); the only external dependency is the html2canvas CDN script.
- When generating new slides from course material, match an existing component pattern rather than introducing new CSS, and pick the section color that fits the topic.
- Technical terms, command names, and Claude reserved words (e.g. `CLAUDE.md`, `/init`, `PreToolUse`) are kept identical in both languages.
- **Footer author note:** every `<footer>` (in both languages) must carry an author note `<span class="author">Giovanny Manchola</span>` placed immediately to the **left of the paginator** — i.e. right before the page-number span (`<span class="pg"></span>`, or `<span>2026</span>` on the cover). The footer is a flex row where `.brand` takes `margin-right:auto`, so `.author` and the paginator group together on the right. When adding a new slide, include this author span in every footer. The author note is styled **deliberately small and subdued** (`font-size:1.6cqmin; opacity:.6` — smaller than the rest of the footer's `2.3cqmin`, and `9px` in the mobile block) so it is credited without drawing attention; keep it that way.
- **Mobile legibility:** a new slide must stay readable on a narrow phone. Build it from the existing components (`ul.points`, `.cmdrow`, `.callout`, `.refgrid`, `.ctable`, …) so the shared `@media (max-width: 700px)` block already gives it fixed legible type + vertical scroll. If a slide introduces a **new** content component with its own `cqmin` font sizes, add a matching override inside that media query (fixed px size, single column) — otherwise it will render too small to read on mobile.
