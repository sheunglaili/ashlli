# Design — ashlli/ui

Locked design system for ashlli/ui. Its visual DNA was studied from the jcode public reference; future work follows the ashlli/ui rules below. Amend intentionally — the file is the rule.

/* Hallmark · studied: yes · DNA-source: url https://jcode.sh/ · re-confirmed: 2026-07-23 */

## System
- Genre · modern-minimal / technical
- Macrostructure · Marquee Hero (homepage) / Long Document (/bench) / Workbench (/models)
- Theme · custom (vibe: "stark monospaced technical, ink-on-paper, benchmark-driven")
- Axes · light-paper / monospace-display / neutral-ink-accent

## Provenance
- Source mode · URL mode (`https://jcode.sh/` + same-origin CSS `styles-b7ba12f50d133f58.css`)
- Date extracted · 2026-07-23 · Re-confirmed · 2026-07-23
- Attestation · (b) public reference for user's brand
- Confidence note · Tokens and fonts are exact (extracted directly from `@font-face` declarations and `:root` custom properties in source CSS). Motion confirmed: native CSS `transform` only — no gsap/framer/lottie/lenis. Rhythm unknown — page is WASM-rendered SPA; screenshot would be needed for density/asymmetry pass.

## Tokens (canonical · `tokens.css` is the source of truth)
```css
:root {
  /* Surface & Paper */
  --color-paper:      oklch(100% 0 0);         /* #ffffff */
  --color-paper-2:    oklch(96.5% 0 0);        /* #f4f4f4 (wash surface) */
  --color-ink:        oklch(15% 0 0);          /* #111111 (stark ink) */
  --color-ink-2:      oklch(45% 0 0);          /* #666666 (muted prose) */
  --color-rule:       oklch(83% 0 0);          /* #cccccc (hairline rules — exact: --rule: #ccc in source) */
  --color-accent:     oklch(15% 0 0);          /* Monochrome ink accent */
  --color-accent-ink: oklch(100% 0 0);        /* #ffffff text on ink CTA */
  --color-focus:      oklch(15% 0 0);          /* Focus outline */

  /* Typography — Single-Family JetBrains Mono System */
  --font-display: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-body:    "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-mono:    "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;

  /* Spacing Scale (4-pt grid) */
  --space-3xs: 0.25rem; --space-2xs: 0.5rem; --space-xs: 0.75rem;
  --space-sm: 1rem;     --space-md: 1.5rem;   --space-lg: 2.5rem;
  --space-xl: 3.5rem;   --space-2xl: 5rem;    --space-3xl: 6rem;

  /* Typography Scale */
  --text-xs: 0.72rem;   --text-sm: 0.85rem;   --text-base: 0.9rem;
  --text-lg: 1.05rem;   --text-xl: 1.3rem;    --text-display: 2.5rem;

  /* Microinteractions & Transitions */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast: 180ms;  --dur-base: 240ms;  --dur-slow: 320ms;

  /* Border Radii */
  --radius-card: 8px;  --radius-pill: 999px;  --radius-input: 8px;
}
```

## CTA Voice
- Primary · Solid ink background (`var(--color-ink)`), white text (`var(--color-accent-ink)`), `var(--radius-card)` (8px), padding `0.7rem 1.4rem`.
- Secondary / Filter Chips · Ghost/outlined with hairline rule (`1px solid var(--color-rule)`), pill radius (`999px`), padding `0.25rem 0.7rem`. Pressed state matches primary ink.
- Copyable Command Pill · Wash background (`var(--color-paper-2)`), hairline border (`var(--color-rule)`), attached inline copy action.

## Surface Usage
- **Default:** `var(--color-paper)` is the page and component surface. Headers, footers, navigation, tables, dialogs, accordions, badges, tabs, and preview canvases stay white or transparent.
- **Wash:** `var(--color-paper-2)` is reserved for card bodies, text inputs and textareas, and copyable command/code pills. It is never the default fill for a component or an entire page section.
- **State:** A temporary wash on hover or an inactive control is allowed when it communicates interaction; it is not a resting surface treatment.

## Component Archetypes
- **Page Status Badge:** `.page-status` with leading `◆` symbol and rounded-pill border.
- **Definition Block:** `.definition` with white surface, 8px radius, and bold header.
- **Leaderboard / Bar Rows:** Horizontal grid (`.bar-row`) with hairline tracks and custom variable colours (`--c`).
- **Sticky Navigation Pill:** `.install-bar` popping down from top viewport on scroll.

## Motion Stance
- **Silent / Native:** No external animation libraries. Uses native WebAssembly, canvas rendering, SVG line graphs, and CSS `transform` transitions (`translateY(-150%)` to `0`).
- **Reduced-motion fallback:** `transition: transform 0ms; opacity 0ms;`.

## Notes (Anti-patterns to NOT carry over)
- **Do not use non-monospace fonts:** Display, body, and labels must remain strictly in `JetBrains Mono` or system mono.
- **Do not introduce decorative gradients or colored floods:** Palette remains stark ink-on-paper with subtle grey washes.
- **Do not use bouncy hovers or `transition: all`:** Restrained CSS transform/color transitions only.

## Exports
`src/styles.css` (in this project) is the canonical token source. The `:root` block in `styles.css` mirrors this file's `## Tokens` block exactly. For Tailwind v4 `@theme`, DTCG `tokens.json`, or shadcn/ui CSS variables, say *"extend design.md with Tailwind exports"* (or the format you want) — Hallmark will append them.

### Source verification (re-confirmed 2026-07-23)
| Token | Source CSS value | design.md value | Match |
|---|---|---|---|
| `--color-paper` (`--bg`) | `#fff` | `oklch(100% 0 0)` | ✓ |
| `--color-paper-2` (`--wash`) | `#f4f4f4` | `oklch(96.5% 0 0)` | ✓ |
| `--color-ink` (`--ink`) | `#111` | `oklch(15% 0 0)` | ✓ |
| `--color-ink-2` (`--muted`) | `#666` | `oklch(45% 0 0)` | ✓ |
| `--color-rule` (`--rule`) | `#ccc` | `oklch(83% 0 0)` | ✓ corrected |
| `--radius-card` (`--radius`) | `8px` | `8px` | ✓ |
| `--radius-pill` (`.beta-tag`) | `999px` | `999px` | ✓ |
| Font display | `JetBrains Mono` 700 self-hosted | `"JetBrains Mono"` | ✓ |
| Font body | `JetBrains Mono` 400 self-hosted | `"JetBrains Mono"` | ✓ |
| Motion library | none (`donut.js`, `toc.js`, `beacon.js` only) | none | ✓ |
