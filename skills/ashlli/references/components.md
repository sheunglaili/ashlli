# ashlli/ui — Component Reference

All components install via the shadcn CLI and land in `@/components/ui/`. Install the `ashlli` style first:

```bash
npx shadcn@latest add sheunglaili/ashlli/ashlli
```

Then add any component:

```bash
npx shadcn@latest add sheunglaili/ashlli/<name>
```

`leaderboard` pulls in `progress-bar`; `code-pill`, `dialog`, and `toast` pull in `icons` — dependencies resolve automatically.

---

## badge

Registry: `badge` — import `{ Badge } from '@/components/ui/badge'`

Props: `variant?: 'default' | 'outline' | 'success' | 'warning' | 'info' | 'monochrome'`, `symbol?: string`

```tsx
<Badge symbol="◆" variant="outline">TECHNICAL</Badge>
```

## button

Registry: `button` — import `{ Button } from '@/components/ui/button'`

Props: `variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive'`, `size?: 'sm' | 'md' | 'lg'`, `icon?: ReactNode`

```tsx
<Button variant="primary" size="md" icon={<ArrowRight className="h-4 w-4" />}>RUN BENCHMARK</Button>
```

## card

Registry: `card` — import `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }`

Props: `Card` takes `variant?: 'default' | 'wash' | 'outline'`; the subcomponents are standard slot containers.

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Body content</CardContent>
  <CardFooter>Actions</CardFooter>
</Card>
```

## code-pill

Registry: `code-pill` — import `{ CodePill } from '@/components/ui/code-pill'`

Props: `command: string`, `label?: string`

```tsx
<CodePill command="npx shadcn@latest add sheunglaili/ashlli/button" label="SHELL" />
```

## definition-block

Registry: `definition-block` — import `{ DefinitionBlock } from '@/components/ui/definition-block'`

Props: `title: string`, `subtitle?: string`, `tag?: string`, `children`

```tsx
<DefinitionBlock title="DESIGN SYSTEM PROVENANCE" tag="PROVENANCE" subtitle="design.md">
  Extracted from source HTML & CSS inspection.
</DefinitionBlock>
```

## dialog

Registry: `dialog` — import `{ Dialog } from '@/components/ui/dialog'`

Props: `isOpen: boolean`, `onClose: () => void`, `title: string`, `subtitle?: string`, `footer?: ReactNode`, `children`

```tsx
<Dialog
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Confirm"
  footer={<Button variant="primary">CONFIRM</Button>}
>
  Are you sure?
</Dialog>
```

## input

Registry: `input` — import `{ Input, Textarea, Switch }` from `@/components/ui/input'`

Props: `Input` — `label?: string`, `error?: string`, `hint?: string`; `Switch` — `checked: boolean`, `onChange: (checked: boolean) => void`, `label?: string`.

```tsx
<Input label="MODEL" placeholder="gpt-4o" hint="Optional hint" />
<Switch checked={on} onChange={setOn} label="Enabled" />
```

## layout

Registry: `layout` — import `{ Container, Stack, Cluster, Grid, Section }` from `@/components/ui/layout'`

Props: `Container` — `size?: 'reading' | 'content' | 'wide'`; `Stack`/`Cluster`/`Grid` — `gap?: '2xs'|'xs'|'sm'|'md'|'lg'|'xl'|'2xl'`, `Grid` also `columns?: 1 | 2 | 3`. All accept `as` to change the tag.

```tsx
<Container size="content">
  <Stack gap="md">
    <Grid columns={2}>…</Grid>
  </Stack>
</Container>
```

## leaderboard

Registry: `leaderboard` (pulls in `progress-bar`) — import `{ Leaderboard } from '@/components/ui/leaderboard-bar'`

Props: `title?: string`, `subtitle?: string`, `maxScore?: number`, `items: { id, label, score, formattedValue?, color?, badge? }[]`

```tsx
<Leaderboard
  title="LATENCY"
  items={[
    { id: 'a', label: 'Model A', score: 92, formattedValue: '92ms' },
    { id: 'b', label: 'Model B', score: 74, formattedValue: '74ms' },
  ]}
/>
```

## progress-bar

Registry: `progress-bar` — import `{ ProgressBar } from '@/components/ui/progress-bar'`

Props: `value: number`, `max?: number`, `color?: string`, `label?: string`, `showValue?: boolean`

```tsx
<ProgressBar value={75} label="ACCURACY" showValue />
```

## slider

Registry: `slider` — import `{ Slider } from '@/components/ui/slider'`

Props: `value?: number`, `label?: string`, `showValue?: boolean`, `valueLabel?: (value: number) => string`, `onChange?: (value: number) => void`, plus range input props (`min`, `max`, `step`).

```tsx
<Slider label="TEMPERATURE" min={0} max={1} step={0.1} showValue onChange={setTemp} />
```

## table

Registry: `table` — import `{ Table, TableHeader, TableBody, TableRow, TableHead, TableCell }`

Props: `Table` takes `caption?: string`; the rest are semantic slot components.

```tsx
<Table caption="Benchmark Results">
  <TableHeader>
    <TableRow>
      <TableHead>MODEL</TableHead>
      <TableHead>LATENCY</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Model A</TableCell>
      <TableCell>92ms</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## tabs

Registry: `tabs` — import `{ Tabs }` from `@/components/ui/tabs'`

Props: `items: { id, label, icon?, badge?, content }[]`, `defaultTabId?: string`, `variant?: 'underline' | 'pills' | 'segmented'`, `onChange?: (tabId) => void`

```tsx
<Tabs
  variant="pills"
  items={[
    { id: 'overview', label: 'OVERVIEW', content: <p>Overview content</p> },
    { id: 'details', label: 'DETAILS', content: <p>Details content</p> },
  ]}
/>
```

## toast

Registry: `toast` (pulls in `icons`) — import `{ ToastProvider, useToast }` from `@/components/ui/toast'`

Wrap your app in `<ToastProvider>`, then call `toast({ title, description?, type? })` where `type` is `'success' | 'warning' | 'error' | 'info'`.

```tsx
function MyPage() {
  const { toast } = useToast()
  return (
    <Button onClick={() => toast({ title: 'Saved', type: 'success' })}>SAVE</Button>
  )
}
```

## typography

Registry: `typography` — import `{ Heading, Text }` from `@/components/ui/typography'`

Props: `Heading` — `as?: 'h1'…'h6'`, `size?: 'display' | 'section' | 'subsection'`; `Text` — `as?: 'p'|'span'|'div'`, `tone?: 'default'|'muted'`, `size?: 'body'|'small'|'caption'`.

```tsx
<Heading as="h1" size="display">Page title</Heading>
<Text tone="muted" size="small">Muted supporting copy.</Text>
```

## icons

Registry: `icons` — import any named icon from `@/components/ui/icons'` (e.g. `ArrowRight`, `ArrowLeft`, `Check`, `X`, `Sun`, `Moon`, `Search`, `Copy`, `Terminal`, `Palette`, `Grid`, `Activity`, `ShieldAlert`, `AlertCircle`, `AlertTriangle`, `Info`, `CheckCircle`, `Layers`). All accept `className` and `size` for sizing.
