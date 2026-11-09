# Skill: ashlli

# ashlli — style preset for shadcn

[ashlli](https://github.com/sheunglaili/ashlli) is a monospaced ink-on-paper **style preset** for [shadcn](https://ui.shadcn.com), distributed as a shadcn-compatible GitHub registry. It ships exactly one item — the `style` — which installs the token set, fonts, and Tailwind v4 configuration. Every stock shadcn component then renders in the ashlli look without any code changes; components are copied into your project and fully yours to customize.

The system is deliberately stark and technical: **JetBrains Mono Variable** everywhere, hairline `1px` rules, 8px card radii, 999px pill radii, and an OKLCH palette anchored on paper and ink. If a screen looks soft, rounded, or colorful, it is not following ashlli.

## Prerequisites

- A React project with **Tailwind CSS v4**, initialized with the shadcn CLI (`npx shadcn@latest init`).
- The [shadcn](https://ui.shadcn.com) CLI (invoked via `npx shadcn@latest`).

## Installing

Run the CLI from the project root (where `package.json` lives). Install the style first, then add any components:

```bash
# 1. The style: standard + ashlli token vocabularies, fonts, Tailwind v4 config
npx shadcn@latest add sheunglaili/ashlli/style

# 2. Any component straight from the default shadcn registry
npx shadcn@latest add button
npx shadcn@latest add dialog card ...
```

Stock components arrive already styled by the preset — the `style` defines the standard shadcn vocabulary (`--background`, `--primary`, `--muted`, `--border`, `--radius-*`, ...) mapped onto ashlli values, plus the original ashlli names (`paper`, `ink`, `rule`, ...) for custom work.

## Usage

Import components from `@/components/ui` and compose them like any React component:

```tsx
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function MyPage() {
  return (
    <div className="space-y-4">
      <Badge variant="outline">TECHNICAL</Badge>
      <Button>Run benchmark</Button>
    </div>
  )
}
```

Dark mode is automatic via the `.dark` class on `<html>` — no `dark:` variant classes are needed.

## Design rules

Follow these rules so the UI stays on-system:

- **JetBrains Mono only** — display, body, and labels stay monospaced. No secondary font families.
- **No hand-rolled styling** — components are styled out of the box. When composing custom layout around them, use the theme's Tailwind utilities rather than hardcoded hex or `oklch(...)` values.
- **No decorative gradients** — the palette is stark ink-on-paper with subtle grey washes.
- **Restrained motion** — native CSS `transform`/`color` transitions only; no `transition: all`, no bouncy hovers, no animation libraries.
- **Hairline rules** — separators are 1px, not heavy borders or shadows.

## Tokens

Two vocabularies travel together; see `references/tokens.md` for the full mapping table:

- **ashlli vocabulary**: `paper`, `paper-2`, `ink`, `ink-2`, `rule`, `accent`, `accent-ink`, `focus`, `success`, `warning`, `error`, `info` — plus `radius-card` (8px), `radius-pill` (999px), `radius-input` (8px), and the `text-*` type scale.
- **standard shadcn vocabulary** (what stock components read): `background`/`foreground` = paper/ink, `primary` = ink, `muted` = paper-2, `border`/`input` = rule, `ring` = focus, `destructive` = error, `accent` = ink (with `accent-foreground` = paper), plus a grayscale chart ramp and the standard radius scale.

## Troubleshooting

### My components are unstyled
Your project must be configured for shadcn/ui with Tailwind v4 — a `styles.css`/`globals.css` that imports Tailwind and includes the ashlli token set. Re-run `npx shadcn@latest add sheunglaili/ashlli/style` and confirm the `@theme` block was written to your CSS.

### Dark mode doesn't work
ashlli uses the `.dark` class on the root `<html>` element. Make sure your theme toggle adds/removes `.dark`; the tokens switch automatically.

### The component imports fail with "module not found"
Check your `tsconfig.json` maps `@/*` to your project root (e.g. `"@/*": ["./*"]`) and that the component file exists under `@/components/ui/<name>.tsx`.

### I want to verify the registry
`npx shadcn@latest registry validate sheunglaili/ashlli`

## References

- `references/tokens.md` — the token mapping table: ashlli name, standard shadcn equivalent, light/dark values, and utilities.

Base directory for this skill: skills/ashlli
Relative paths in this skill (e.g. scripts/, reference/) are relative to this base directory.
