import React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '../../components/ui/badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table'
import { Toc } from '../../components/docs/toc'
import { ArrowLeft, ArrowRight, Palette, Type, Grid, Activity } from '../../components/ui/icons'

export const Route = createFileRoute('/docs/tokens')({
  component: TokensPage,
})

function TokensPage() {
  const tocItems = [
    { id: 'colors', title: 'Color Palette (OKLCH)' },
    { id: 'typography', title: 'Typography Scale' },
    { id: 'spacing', title: 'Spacing (4-pt Grid)' },
    { id: 'motion', title: 'Motion & Transitions' },
  ]

  const colorTokens = [
    { name: '--color-paper', oklch: 'oklch(100% 0 0)', hex: '#ffffff', role: 'Main surface background' },
    { name: '--color-paper-2', oklch: 'oklch(96.5% 0 0)', hex: '#f4f4f4', role: 'Wash surface / track background' },
    { name: '--color-ink', oklch: 'oklch(15% 0 0)', hex: '#111111', role: 'Stark ink text & primary buttons' },
    { name: '--color-ink-2', oklch: 'oklch(45% 0 0)', hex: '#666666', role: 'Muted prose & secondary labels' },
    { name: '--color-rule', oklch: 'oklch(88% 0 0)', hex: '#e0e0e0', role: 'Hairline 1px borders & dividers' },
    { name: '--color-accent', oklch: 'oklch(15% 0 0)', hex: '#111111', role: 'Monochrome ink accent' },
  ]

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <Badge symbol="◆">DESIGN SYSTEM DNA</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Design Tokens (design.md)
          </h1>
          <p className="text-base-plus text-ink-2">
            Canonical tokens that define the ashlli/ui visual system.
          </p>
        </div>

        {/* Colors */}
        <section id="colors" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink flex items-center gap-2">
            <Palette className="w-5 h-5" />
            <span># Color Palette (OKLCH)</span>
          </h2>
          <Table caption="design.md Canonical Color Tokens">
            <TableHeader>
              <TableRow>
                <TableHead>SWATCH</TableHead>
                <TableHead>TOKEN NAME</TableHead>
                <TableHead>OKLCH VALUE</TableHead>
                <TableHead>ROLE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {colorTokens.map((c, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <div
                      className="w-8 h-8 rounded border border-rule"
                      style={{ backgroundColor: `var(${c.name})` }}
                    />
                  </TableCell>
                  <TableCell className="font-bold">{c.name}</TableCell>
                  <TableCell>{c.oklch}</TableCell>
                  <TableCell className="text-ink-2">{c.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Typography */}
        <section id="typography" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink flex items-center gap-2">
            <Type className="w-5 h-5" />
            <span># Single-Family JetBrains Mono System</span>
          </h2>
          <p className="text-sm text-ink-2 leading-relaxed">
            Per design.md rules: Display, body, and labels MUST remain strictly in JetBrains Mono or system mono. Do not use non-monospace fonts.
          </p>
          <div className="p-5 border border-rule rounded-card bg-paper-2 space-y-3 text-sm">
            <div className="text-display font-bold text-ink leading-tight">
              DISPLAY 2.25rem (36px)
            </div>
            <div className="text-xl font-bold text-ink">
              HEADING XL 1.3rem (20.8px)
            </div>
            <div className="text-base text-ink">
              BODY BASE 0.9rem (14.4px) - The quick brown fox jumps over the lazy dog 0123456789
            </div>
            <div className="text-xs text-ink-2 uppercase font-semibold">
              CAPTION XS 0.72rem (11.5px) — STATUS BADGES & LABELS
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section id="spacing" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink flex items-center gap-2">
            <Grid className="w-5 h-5" />
            <span># Spacing & Radii</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-4 border border-rule rounded-card bg-paper-2">
              <span className="font-bold text-ink uppercase block">CARD RADIUS</span>
              <span className="text-ink-2 font-mono">--radius-card: 8px</span>
            </div>
            <div className="p-4 border border-rule rounded-card bg-paper-2">
              <span className="font-bold text-ink uppercase block">PILL RADIUS</span>
              <span className="text-ink-2 font-mono">--radius-pill: 999px</span>
            </div>
          </div>
        </section>

        {/* Motion */}
        <section id="motion" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink flex items-center gap-2">
            <Activity className="w-5 h-5" />
            <span># Motion & Transition Specs</span>
          </h2>
          <div className="p-4 border border-rule rounded-card bg-paper-2 text-sm space-y-2">
            <p><strong>Easing:</strong> <code className="bg-paper px-1 py-0.5 rounded">--ease-out: cubic-bezier(0.16, 1, 0.3, 1)</code></p>
            <p><strong>Durations:</strong> Fast (180ms) · Base (240ms) · Slow (320ms)</p>
            <p className="text-ink-2">Silent native CSS transforms only. Bouncy hovers and transition:all are strictly forbidden.</p>
          </div>
        </section>

        {/* Navigation bottom */}
        <div className="pt-8 border-t border-rule flex justify-between">
          <Link to="/docs/installation" className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink">
            <ArrowLeft className="w-4 h-4" />
            <span>Installation</span>
          </Link>
          <Link to="/docs/components/button" className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:underline">
            <span>Button Component</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Toc items={tocItems} />
    </div>
  )
}
