# ashlli — an ink-on-paper style preset for shadcn

A monospaced ink-on-paper **style preset** for [shadcn](https://ui.shadcn.com), distributed as a shadcn-compatible GitHub registry. One install command, and every stock shadcn component renders in a quiet, technical system: **JetBrains Mono Variable** everywhere, hairline `1px` rules, 8px card radii, 999px pill radii, and an OKLCH palette anchored on paper and ink.

No components ship in the registry — only the `style`, which carries tokens, fonts, and Tailwind v4 configuration. Components are whatever you install from the default shadcn registry, copied into your codebase and fully yours to customize.

## Quick Start

```bash
npx shadcn@latest add sheunglaili/ashlli/style
```

Then add any component — stock shadcn components arrive already styled by the preset:

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog card ...
```

## Works with stock shadcn components

The preset maps the standard shadcn token vocabulary (`--background`, `--primary`, `--muted`, `--border`, `--radius-*`, ...) onto ashlli's ink-on-paper values. Stock `button`, `dialog`, `card` — anything from the default shadcn registry — automatically renders in the ashlli look. The original ashlli names (`paper`, `ink`, `rule`, ...) stay available under their own utilities for custom work.

## Design Tokens

The style installs the full token set as Tailwind v4 `@theme` variables in your `styles.css`, plus the JetBrains Mono font. Dark mode is automatic via the `.dark` class.

| Token | Light | Dark | Utility |
|---|---|---|---|
| `paper` | white | near-black | `bg-paper`, `text-paper` |
| `paper-2` | off-white | dark gray | `bg-paper-2`, `border-paper-2` |
| `ink` | near-black | near-white | `text-ink`, `bg-ink` |
| `ink-2` | mid-gray | mid-gray | `text-ink-2`, `bg-ink-2` |
| `rule` | light gray | dark gray | `border-rule` |
| `accent` | near-black | near-white | `bg-accent` |
| `accent-ink` | white | near-black | `text-accent-ink` |
| `focus` | near-black | near-white | `ring-focus` |
| `success` | green | bright green | `bg-success`, `text-success` |
| `warning` | amber | bright amber | `bg-warning`, `text-warning` |
| `error` | red | bright red | `bg-error`, `text-error`, `border-error` |
| `info` | blue | bright blue | `bg-info`, `text-info` |

The standard vocabulary maps on top: `background`/`foreground` → paper/ink, `primary` → ink, `muted` → paper-2, `border`/`input` → rule, `ring` → focus, `destructive` → error. Radii (`--radius-card`, `--radius-pill`, `--radius-input`, plus the standard `--radius-sm…xl` scale) and type scale (`--text-*`) install as `@theme` tokens; spacing ships as `--spacing-*` CSS variables with utilities on Tailwind's built-in numeric scale (`gap-4`, `px-6`, `space-y-4`).

## Agent Skill

AI coding assistants can learn how to use ashlli from the bundled agent skill (Agent Skills format, loadable in Claude Code, Cursor, opencode, etc.):

```bash
npx skills add sheunglaili/ashlli --skill ashlli
```

The skill lives in `skills/ashlli/` and teaches agents how to install the style, use both token vocabularies, and follow the ink-on-paper design rules.

## Local Development

This repo is also a TanStack Start app hosting a one-page showcase of the preset applied to stock shadcn components:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Validate the registry against the live repo:

```bash
npx shadcn@latest registry validate sheunglaili/ashlli   # 1 item, valid
```

## Registry Structure

- `registry.json` — the registry manifest at the repo root, read by the shadcn CLI; ships exactly one item (`style`)
- `src/styles.css` — the site's token sheet; always keep in sync with `registry.json` cssVars
- `src/components/ui/*.tsx` — stock shadcn components vendored for the showcase site only (not part of the registry item)
- `src/routes/index.tsx` — the one-page showcase
