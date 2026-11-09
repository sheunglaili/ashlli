---
name: ashlli
description: "Build interfaces with ashlli/ui — a monospaced ink-on-paper React design system distributed as a shadcn-compatible GitHub registry. Use when building new UI with ashlli/ui or installing ashlli components via the shadcn CLI."
---

# ashlli/ui

[ashlli/ui](https://github.com/sheunglaili/ashlli) is a monospaced ink-on-paper design system for React, distributed as a [shadcn](https://ui.shadcn.com)-compatible GitHub registry. Every component is copied into your project and fully yours to customize — there is no lock-in.

The system is deliberately stark and technical: **JetBrains Mono** everywhere, hairline `1px` rules, 8px card radii, 999px pill radii, and an OKLCH palette anchored on paper and ink. If a screen looks soft, rounded, or colorful, it is not following ashlli.

## Prerequisites

- A React project with **Tailwind CSS v4**.
- The [shadcn](https://ui.shadcn.com) CLI (invoked via `npx shadcn@latest`).

## Installing

Run the CLI from the project root (where `package.json` lives). Install the ashlli **style** first, then any components — the CLI resolves component dependencies automatically:

```bash
# 1. The style: theme tokens, fonts, and Tailwind configuration
npx shadcn@latest add sheunglaili/ashlli/style

# 2. Any component by registry name
npx shadcn@latest add sheunglaili/ashlli/button
npx shadcn@latest add sheunglaili/ashlli/toast
```

You can also register a namespace once, then add by name:

```bash
npx shadcn@latest registry add @ashlli=https://ashlli.github.io/ashlli/r/{name}.json
npx shadcn@latest add @ashlli/button
```

Components land in `@/components/ui/` (per your shadcn config). The `ashlli` style installs the token set as Tailwind v4 `@theme` variables in your `styles.css`, plus the JetBrains Mono font.

## Usage

Import components from `@/components/ui` and compose them like any React component:

```tsx
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CodePill } from '@/components/ui/code-pill'

export function MyPage() {
  return (
    <div className="space-y-4">
      <Badge symbol="◆">TECHNICAL</Badge>
      <Button variant="primary">RUN BENCHMARK</Button>
      <CodePill command="npm run dev" label="SHELL" />
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

## Troubleshooting

### My components are unstyled
Your project must be configured for shadcn/ui with Tailwind v4 — a `styles.css`/`globals.css` that imports Tailwind and includes the `ashlli` `@theme` tokens. Re-run `npx shadcn@latest add sheunglaili/ashlli/style` and confirm the `@theme` block was written to your CSS.

### Dark mode doesn't work
ashlli uses the `.dark` class on the root `<html>` element. Make sure your theme toggle adds/removes `.dark`; the tokens switch automatically.

### The component imports fail with "module not found"
Check your `tsconfig.json` maps `@/*` to your project root (e.g. `"@/*": ["./*"]`) and that the component file exists under `@/components/ui/<name>.tsx`.

### I want to verify the registry
`npx shadcn@latest registry validate sheunglaili/ashlli`

## References

- `references/components.md` — every component: install command, import path, key props, and a minimal example.
