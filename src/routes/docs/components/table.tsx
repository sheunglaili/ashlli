import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Badge } from '../../../components/ui/badge'
import { Toc } from '../../../components/docs/toc'

export const Route = createFileRoute('/docs/components/table')({
  component: TableDocPage,
})

function TableDocPage() {
  const codeSnippet = `<Table caption="design.md Canonical Tokens Reference">
  <TableHeader>
    <TableRow>
      <TableHead>TOKEN</TableHead>
      <TableHead>OKLCH</TableHead>
      <TableHead>STATUS</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-bold">--color-paper</TableCell>
      <TableCell>oklch(100% 0 0)</TableCell>
      <TableCell><Badge symbol="✓" variant="success">LOCKED</Badge></TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-bold">--color-paper-2</TableCell>
      <TableCell>oklch(96.5% 0 0)</TableCell>
      <TableCell><Badge symbol="✓" variant="success">LOCKED</Badge></TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-bold">--color-ink</TableCell>
      <TableCell>oklch(15% 0 0)</TableCell>
      <TableCell><Badge symbol="✓" variant="success">LOCKED</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>`

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <Badge symbol="◆">BASE COMPONENT</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Data Matrix Table
          </h1>
          <p className="text-base-plus text-ink-2">
            Benchmark & parameter matrix table with monospaced headers and hairline borders.
          </p>
        </div>

        <section id="preview">
          <ComponentPreview title="Data Table Matrix" code={codeSnippet}>
            <div className="w-full">
              <Table caption="design.md Canonical Tokens Reference">
                <TableHeader>
                  <TableRow>
                    <TableHead>TOKEN</TableHead>
                    <TableHead>OKLCH</TableHead>
                    <TableHead>STATUS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold">--color-paper</TableCell>
                    <TableCell>oklch(100% 0 0)</TableCell>
                    <TableCell><Badge symbol="✓" variant="success">LOCKED</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">--color-paper-2</TableCell>
                    <TableCell>oklch(96.5% 0 0)</TableCell>
                    <TableCell><Badge symbol="✓" variant="success">LOCKED</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">--color-ink</TableCell>
                    <TableCell>oklch(15% 0 0)</TableCell>
                    <TableCell><Badge symbol="✓" variant="success">LOCKED</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </ComponentPreview>
        </section>

        {/* Props Reference Table */}
        <section id="props" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink">
            # Props Reference
          </h2>
          <Table caption="Table Component API">
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
                <TableCell className="font-bold">Table caption</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell className="text-ink-2">Caption rendered above the table.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">TableHeader</TableCell>
                <TableCell className="text-sky-700">HTMLAttributes</TableCell>
                <TableCell>—</TableCell>
                <TableCell className="text-ink-2">Wash header row with uppercase tracking.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">TableBody</TableCell>
                <TableCell className="text-sky-700">HTMLAttributes</TableCell>
                <TableCell>—</TableCell>
                <TableCell className="text-ink-2">Divided body rows with hover state.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">TableRow</TableCell>
                <TableCell className="text-sky-700">HTMLAttributes</TableCell>
                <TableCell>—</TableCell>
                <TableCell className="text-ink-2">Single row container.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">TableHead</TableCell>
                <TableCell className="text-sky-700">ThHTMLAttributes</TableCell>
                <TableCell>—</TableCell>
                <TableCell className="text-ink-2">Bold header cell with right rule.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">TableCell</TableCell>
                <TableCell className="text-sky-700">TdHTMLAttributes</TableCell>
                <TableCell>—</TableCell>
                <TableCell className="text-ink-2">Data cell with right rule.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>

      <Toc items={[{ id: 'preview', title: 'Data Table Matrix' }, { id: 'props', title: 'Props Reference' }]} />
    </div>
  )
}
