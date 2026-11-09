# ashlli token reference

The `style` preset carries two vocabularies. The **ashlli vocabulary** is the design
system's own names; the **standard shadcn vocabulary** is what stock shadcn components
read. Both live in the same style item and resolve to identical oklch values.

## Colors — ashlli vocabulary

| Token | Light | Dark | Utilities |
|---|---|---|---|
| `paper` | oklch(100% 0 0) white | oklch(12% 0 0) near-black | `bg-paper`, `text-paper` |
| `paper-2` | oklch(96.5% 0 0) off-white | oklch(18% 0 0) dark gray | `bg-paper-2`, `border-paper-2` |
| `ink` | oklch(15% 0 0) near-black | oklch(95% 0 0) near-white | `text-ink`, `bg-ink` |
| `ink-2` | oklch(45% 0 0) mid-gray | oklch(68% 0 0) mid-gray | `text-ink-2`, `bg-ink-2` |
| `rule` | oklch(83% 0 0) light gray | oklch(30% 0 0) dark gray | `border-rule` |
| `accent` | ink (near-black) | ink (near-white) | `bg-accent` |
| `accent-ink` | white | near-black | `text-accent-ink` |
| `focus` | ink | ink | `ring-focus` |
| `success` | oklch(55% 0.18 145) green | oklch(70% 0.18 145) bright green | `bg-success`, `text-success` |
| `warning` | oklch(65% 0.18 75) amber | oklch(75% 0.18 75) bright amber | `bg-warning`, `text-warning` |
| `error` | oklch(55% 0.22 25) red | oklch(70% 0.22 25) bright red | `bg-error`, `text-error` |
| `info` | oklch(55% 0.18 240) blue | oklch(70% 0.18 240) bright blue | `bg-info`, `text-info` |

## Colors — standard shadcn vocabulary (mapped)

| Token | ashlli value |
|---|---|
| `background` / `foreground` | `paper` / `ink` |
| `card` / `card-foreground` | `paper` / `ink` |
| `popover` / `popover-foreground` | `paper-2` / `ink` |
| `primary` / `primary-foreground` | `ink` / `paper` |
| `secondary` / `secondary-foreground` | `paper-2` / `ink` |
| `muted` / `muted-foreground` | `paper-2` / `ink-2` |
| `accent` | `ink` (unchanged ashlli meaning) |
| `accent-foreground` | `paper` |
| `destructive` / `destructive-foreground` | `error` / `paper` |
| `border` / `input` / `ring` | `rule` / `rule` / `focus` |
| `chart-1` … `chart-5` (light) | ink ramp 15 / 30 / 45 / 65 / 83% |
| `chart-1` … `chart-5` (dark) | paper ramp 95 / 75 / 55 / 40 / 30% |

## Shape

| Token group | Values |
|---|---|
| Radii (ashlli) | `radius-card` 8px · `radius-pill` 999px · `radius-input` 8px |
| Radii (standard) | `--radius` 8px · `radius-sm` 4px · `radius-md` 6px · `radius-lg` 8px (card) · `radius-xl` 12px |
| Fonts (all roles) | `font-display`, `font-body`, `font-mono`, `font-sans` → `"JetBrains Mono Variable", ui-monospace, SFMono-Regular, Menlo, monospace` |
| Type scale | `text-2xs` 0.65rem → `text-display` 2.25rem (see SKILL.md · full scale in `styles.css`) |
| Spacing | 4-pt grid, plain CSS vars: `--spacing-3xs` 0.25rem → `--spacing-3xl` 6rem (utilities use Tailwind's numeric scale, never `--spacing-*` names) |

## Dark mode

Everything switches on the `.dark` class of `<html>`. The `@custom-variant dark`
(`(&:where(.dark, .dark *))`) ships with the style preset — `dark:` variants are not
needed in project code.
