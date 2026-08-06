import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '../../../components/ui/badge'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { Toc } from '../../../components/docs/toc'

export const Route = createFileRoute('/docs/components/badge')({
  component: BadgeDocPage,
})

function BadgeDocPage() {
  const codeSnippet = `<div className="flex flex-wrap items-center gap-3">
  <Badge symbol="◆" variant="default">DEFAULT</Badge>
  <Badge symbol="✓" variant="success">PASSING</Badge>
  <Badge symbol="!" variant="warning">DEPRECATED</Badge>
  <Badge symbol="i" variant="info">INFO</Badge>
  <Badge symbol="◆" variant="monochrome">MONOCHROME</Badge>
</div>`

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <Badge symbol="◆">ARCHETYPE</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Status Badge
          </h1>
          <p className="text-base-plus text-ink-2">
            Page status indicator archetype featuring leading diamond symbol and rounded pill borders.
          </p>
        </div>

        <section id="preview">
          <ComponentPreview title="Status Badge Variants" code={codeSnippet}>
            <div className="flex flex-wrap items-center gap-3">
              <Badge symbol="◆" variant="default">DEFAULT</Badge>
              <Badge symbol="✓" variant="success">PASSING</Badge>
              <Badge symbol="!" variant="warning">DEPRECATED</Badge>
              <Badge symbol="i" variant="info">INFO</Badge>
              <Badge symbol="◆" variant="monochrome">MONOCHROME</Badge>
            </div>
          </ComponentPreview>
        </section>

        {/* Props Reference Table */}
        <section id="props" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink">
            # Props Reference
          </h2>
          <Table caption="Badge Component API">
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
                <TableCell className="font-bold">variant</TableCell>
                <TableCell className="text-sky-700">"default" | "outline" | "success" | "warning" | "info" | "monochrome"</TableCell>
                <TableCell>"default"</TableCell>
                <TableCell className="text-ink-2">Status styling. Monochrome inverts to solid ink.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">symbol</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>"◆"</TableCell>
                <TableCell className="text-ink-2">Leading glyph before the label.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">children</TableCell>
                <TableCell className="text-sky-700">ReactNode</TableCell>
                <TableCell>required</TableCell>
                <TableCell className="text-ink-2">Badge label text.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>

      <Toc items={[{ id: 'preview', title: 'Badge Variants' }, { id: 'props', title: 'Props Reference' }]} />
    </div>
  )
}
