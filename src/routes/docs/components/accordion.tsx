import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Accordion } from '../../../components/ui/accordion'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { Badge } from '../../../components/ui/badge'
import { Toc } from '../../../components/docs/toc'

export const Route = createFileRoute('/docs/components/accordion')({
  component: AccordionDocPage,
})

function AccordionDocPage() {
  const codeSnippet = `<Accordion
  defaultOpenId="1"
  items={[
    {
      id: '1',
      title: 'SYSTEM ARCHITECTURE',
      subtitle: 'design.md § System',
      content: 'Monospaced single-family JetBrains Mono system with 4-pt grid spacing scale.'
    },
    {
      id: '2',
      title: 'OKLCH COLOR SYSTEM',
      subtitle: 'design.md § Tokens',
      content: 'Stark ink-on-paper OKLCH palette with zero decorative color gradients.'
    }
  ]}
/>`

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <Badge symbol="◆">BASE COMPONENT</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Accordion Sections
          </h1>
          <p className="text-base-plus text-ink-2">
            Collapsible sections with monospaced [+] / [-] indicators.
          </p>
        </div>

        <section id="preview">
          <ComponentPreview title="Collapsible Accordion" code={codeSnippet}>
            <div className="w-full">
              <Accordion
                defaultOpenId="1"
                items={[
                  {
                    id: '1',
                    title: 'SYSTEM ARCHITECTURE',
                    subtitle: 'design.md § System',
                    content: 'Monospaced single-family JetBrains Mono system with 4-pt grid spacing scale.',
                  },
                  {
                    id: '2',
                    title: 'OKLCH COLOR SYSTEM',
                    subtitle: 'design.md § Tokens',
                    content: 'Stark ink-on-paper OKLCH palette with zero decorative color gradients.',
                  },
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
          <Table caption="Accordion Component API">
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
                <TableCell className="text-sky-700">AccordionItem[]</TableCell>
                <TableCell>required</TableCell>
                <TableCell className="text-ink-2">Collapsible sections. Each item: id, title, subtitle?, content.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">defaultOpenId</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell className="text-ink-2">ID of the item opened on initial render.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">allowMultiple</TableCell>
                <TableCell className="text-sky-700">boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell className="text-ink-2">Allow multiple sections open at once.</TableCell>
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

      <Toc items={[{ id: 'preview', title: 'Collapsible Accordion' }, { id: 'props', title: 'Props Reference' }]} />
    </div>
  )
}
