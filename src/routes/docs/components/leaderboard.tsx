import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Leaderboard } from '../../../components/ui/leaderboard-bar'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { Badge } from '../../../components/ui/badge'
import { Toc } from '../../../components/docs/toc'

export const Route = createFileRoute('/docs/components/leaderboard')({
  component: LeaderboardDocPage,
})

function LeaderboardDocPage() {
  const codeSnippet = `<Leaderboard
  title="Latency Benchmarks (lower is faster)"
  subtitle="ashlli/ui benchmark matrix"
  items={[
    { id: '1', label: 'Engine V2', score: 95, formattedValue: '0.2ms (95%)', color: 'var(--color-ink)', badge: 'THIS' },
    { id: '2', label: 'Legacy V1', score: 40, formattedValue: '1.8ms (40%)', color: 'var(--color-ink-2)' },
    { id: '3', label: 'Standard API', score: 25, formattedValue: '3.4ms (25%)', color: 'var(--color-rule)' }
  ]}
/>`

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <Badge symbol="◆">ARCHETYPE</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Leaderboard Bar Rows
          </h1>
          <p className="text-base-plus text-ink-2">
            Horizontal benchmark row archetype featuring wash tracks and metric values.
          </p>
        </div>

        <section id="preview">
          <ComponentPreview title="Leaderboard Archetype" code={codeSnippet}>
            <div className="w-full">
              <Leaderboard
                title="Latency Benchmarks (lower is faster)"
                subtitle="ashlli/ui benchmark matrix"
                items={[
                  { id: '1', label: 'Engine V2', score: 95, formattedValue: '0.2ms (95%)', color: 'var(--color-ink)', badge: 'THIS' },
                  { id: '2', label: 'Legacy V1', score: 40, formattedValue: '1.8ms (40%)', color: 'var(--color-ink-2)' },
                  { id: '3', label: 'Standard API', score: 25, formattedValue: '3.4ms (25%)', color: 'var(--color-rule)' },
                ]}
              />
            </div>
          </ComponentPreview>
        </section>

        {/* Props Reference Table */}
        <section id="props" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink">
            # Props Reference
          </h2>
          <Table caption="Leaderboard Component API">
            <TableHeader>
              <TableRow>
                <TableHead>PROP</TableHead>
                <TableHead>TYPE</TableHead>
                <TableHead>DEFAULT</TableHead>
                <TableHead>DESCRIPTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">items</TableCell>
                <TableCell className="text-sky-700">LeaderboardItem[]</TableCell>
                <TableCell>required</TableCell>
                <TableCell className="text-ink-2">Ranked rows. Each item: id, label, score, formattedValue?, color?, badge?.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">title</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell className="text-ink-2">Header title.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">subtitle</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell className="text-ink-2">Muted header annotation.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">maxScore</TableCell>
                <TableCell className="text-sky-700">number</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-ink-2">Maximum score for fill percentage.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">className</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>""</TableCell>
                <TableCell className="text-ink-2">Additional CSS classes.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>

      <Toc items={[{ id: 'preview', title: 'Leaderboard Archetype' }, { id: 'props', title: 'Props Reference' }]} />
    </div>
  )
}
