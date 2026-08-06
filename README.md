# ashlli/ui

A monospaced ink-on-paper design system for React, distributed as a [shadcn](https://ui.shadcn.com) compatible GitHub registry.

Install components straight into your project with the shadcn CLI. There's no lock-in — every component is copied into your codebase and fully yours to customize.

## Requirements

- A React + [Tailwind CSS v4](https://tailwindcss.com) project
- The [shadcn](https://ui.shadcn.com) CLI

## Quick Start

1. Install the ashlli style (theme tokens, fonts, and Tailwind configuration):

```bash
npx shadcn@latest add sheunglaili/ashlli/ashlli
```

2. Add any component. Dependencies resolve automatically:

```bash
npx shadcn@latest add sheunglaili/ashlli/button
npx shadcn@latest add sheunglaili/ashlli/toast
```

## Components

| Registry name | Component | Description |
|---|---|---|
| `button` | Button | Primary action component with variant and size props. |
| `badge` | Badge | Inline status and category labels. |
| `card` | Card | Content container with header, body, and footer slots. |
| `input` | Input | Text input with label and optional error state. |
| `slider` | Slider | Range input with label and value display. |
| `tabs` | Tabs | Tabbed content panels. |
| `accordion` | Accordion | Collapsible content sections. |
| `dialog` | Dialog | Modal dialog with overlay, header, and close button. |
| `toast` | Toast | Notification toast with auto-dismiss. |
| `table` | Table | Data table with header, body, and sortable columns. |
| `layout` | Layout | Grid and flex layout primitives. |
| `typography` | Typography | Text styling primitives. |
| `definition-block` | Definition Block | Definition list with term and description pairing. |
| `code-pill` | Code Pill | Monospaced inline code with copy-to-clipboard. |
| `progress-bar` | Progress Bar | Determinate progress indicator with value label. |
| `leaderboard` | Leaderboard | Ranked progress bar with label and value. |
| `icons` | Icons | Shared SVG icon library used by code-pill, dialog, and toast. |

`leaderboard` pulls in `progress-bar`, and `code-pill`, `dialog`, and `toast` pull in `icons` — the CLI resolves these dependencies for you.

## Design Tokens

The `ashlli` style installs the full token set as Tailwind v4 `@theme` variables in your `styles.css`, plus the JetBrains Mono font. Dark mode is automatic via the `.dark` class.

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

Radii (`--radius-card`, `--radius-pill`, `--radius-input`), type scale (`--text-*`), and spacing (`--space-*`) tokens are installed as well.

## Local Development

This repo is also a TanStack Start app that hosts the component docs:

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
npx shadcn@latest registry validate sheunglaili/ashlli
```

## Registry Structure

- `registry.json` — the registry manifest at the repo root, read by the shadcn CLI
- `src/components/ui/*.tsx` — the source for every component
- `src/routes/docs/components/*.tsx` — per-component docs pages
