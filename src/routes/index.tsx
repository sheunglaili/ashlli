import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function toggleDark() {
  document.documentElement.classList.toggle('dark')
}

function InstallCommand() {
  return (
    <div className="flex w-full max-w-xl items-center justify-between gap-4 border border-rule bg-paper-2 px-4 py-3">
      <code className="text-sm text-ink">npx shadcn@latest add sheunglaili/ashlli/style</code>
      <Badge variant="outline">STYLE</Badge>
    </div>
  )
}

const ASHLLI_TOKENS: Array<[string, string, string, string]> = [
  ['paper', '100%', '12%', 'bg-paper · text-paper'],
  ['paper-2', '96.5%', '18%', 'bg-paper-2 · border-paper-2'],
  ['ink', '15%', '95%', 'text-ink · bg-ink'],
  ['ink-2', '45%', '68%', 'text-ink-2 · bg-ink-2'],
  ['rule', '83%', '30%', 'border-rule'],
  ['focus', '15%', '95%', 'ring-focus'],
]

const STANDARD_TOKENS: Array<[string, string]> = [
  ['background / foreground', 'paper / ink'],
  ['card, popover', 'paper, paper-2'],
  ['primary', 'ink (fg: paper)'],
  ['muted', 'paper-2 (fg: ink-2)'],
  ['accent', 'ink (fg: paper)'],
  ['destructive', 'error (fg: paper)'],
  ['border / input / ring', 'rule / rule / focus'],
  ['radius-sm…xl', '4 · 6 · 8 · 12 px'],
  ['font-sans', 'JetBrains Mono Variable'],
]

function TokenRow({ cols }: { cols: string[] }) {
  return (
    <tr className="border-t border-rule">
      {cols.map((c, i) => (
        <td key={i} className={`border-rule py-2 pr-4 align-top ${i === 0 ? 'font-bold text-ink' : 'text-ink-2'}`}>
          {c}
        </td>
      ))}
    </tr>
  )
}

function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
      {/* Hero */}
      <section className="border-b border-rule pb-16 pt-16 sm:pb-20 sm:pt-20">
        <Badge variant="outline">INK-ON-PAPER STYLE PRESET FOR SHADCN</Badge>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.06em] text-ink sm:text-6xl">
          ashlli
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-ink-2 sm:text-lg">
          One install command, and every stock shadcn component renders in a quiet,
          monospaced ink-on-paper system — JetBrains Mono, hairline rules, 8px cards,
          and an OKLCH paper-and-ink palette. No components shipped, nothing locked in.
        </p>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <InstallCommand />
          <Button variant="outline" onClick={toggleDark}>
            Toggle dark
          </Button>
        </div>
      </section>

      {/* Live showcase — every component below comes from the default shadcn registry */}
      <section className="pt-16 sm:pt-20">
        <h2 className="text-lg font-bold tracking-[-0.03em] text-ink">The preset, applied</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-2">
          Everything below is stock shadcn UI — installed from the default registry with
          components.json unchanged. Only the style preset differentiates.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
              <CardDescription>All six button variants map to ink values.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
              <Badge>Badge</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Form controls</CardTitle>
              <CardDescription>Inputs sit on rule borders, popovers on paper-2.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="alex@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="bio">Notes</Label>
                <Textarea id="bio" placeholder="Ink on paper…" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="lang">Language</Label>
                <Select>
                  <SelectTrigger id="lang">
                    <SelectValue placeholder="Pick one…" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ts">TypeScript</SelectItem>
                    <SelectItem value="rs">Rust</SelectItem>
                    <SelectItem value="go">Go</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Toggles and ranges</CardTitle>
              <CardDescription>Switch sits on muted; the slider on rule.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto">Auto-format</Label>
                <Switch id="auto" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="lint">Lint on save</Label>
                <Switch id="lint" />
              </div>
              <div className="flex flex-col gap-3">
                <Label>Default value 65%</Label>
                <Slider defaultValue={[65]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tabs and separators</CardTitle>
              <CardDescription>Hairline rules, never heavy borders.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="tokens">
                <TabsList>
                  <TabsTrigger value="tokens">Tokens</TabsTrigger>
                  <TabsTrigger value="stock">Stock</TabsTrigger>
                </TabsList>
                <TabsContent value="tokens" className="pt-4 text-sm leading-6 text-ink-2">
                  Colors come from the ashlli palette — paper, paper-2, ink, ink-2,
                  rule — mapped onto shadcn&apos;s standard vocabulary.
                </TabsContent>
                <TabsContent value="stock" className="pt-4 text-sm leading-6 text-ink-2">
                  These components ship directly from the default shadcn registry.
                  The style preset alone restyles them.
                </TabsContent>
              </Tabs>
              <Separator className="mt-6" />
              <p className="mt-4 text-xs text-ink-2">Separator on the rule token (83% / 30% L).</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tokens */}
      <section className="pt-16 sm:pt-20">
        <h2 className="text-lg font-bold tracking-[-0.03em] text-ink">Tokens</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-2">
          The preset carries two vocabularies: the ashlli originals, and the standard
          shadcn names mapped on top — so components from both worlds stay on-system.
          Dark mode is automatic via the <code className="text-ink">.dark</code> class.
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <caption className="sr-only">ashlli token vocabulary</caption>
              <thead>
                <tr>
                  <th className="pb-2 text-left font-bold text-ink">ashlli</th>
                  <th className="pb-2 text-left font-bold text-ink">Light L</th>
                  <th className="pb-2 text-left font-bold text-ink">Dark L</th>
                  <th className="pb-2 text-left font-bold text-ink">Utilities</th>
                </tr>
              </thead>
              <tbody>
                {ASHLLI_TOKENS.map((cols, i) => (
                  <TokenRow key={i} cols={cols} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <caption className="sr-only">standard shadcn vocabulary mapping</caption>
              <thead>
                <tr>
                  <th className="pb-2 text-left font-bold text-ink">standard shadcn</th>
                  <th className="pb-2 text-left font-bold text-ink">ashlli value</th>
                </tr>
              </thead>
              <tbody>
                {STANDARD_TOKENS.map((cols, i) => (
                  <TokenRow key={i} cols={cols} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="pt-16 sm:pt-20">
        <h2 className="text-lg font-bold tracking-[-0.03em] text-ink">Agent skill</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-2">
          ashlli ships an installable agent skill that teaches coding agents the token
          vocabulary and design rules, so generated UI stays on-system:
        </p>
        <div className="mt-4 flex w-full max-w-xl items-center justify-between gap-4 border border-rule bg-paper-2 px-4 py-3">
          <code className="text-sm text-ink">npx skills add sheunglaili/ashlli --skill ashlli</code>
          <Badge variant="outline">SKILL</Badge>
        </div>
      </section>

      <Separator className="mt-20" />
      <footer className="pt-6">
        <p className="text-xs text-ink-2">
          JetBrains Mono Variable · radius-lg 8px · hairline rules · OKLCH paper and ink ·
          design.md carries the full spec
        </p>
      </footer>
    </main>
  )
}
