import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { DefinitionBlock } from '../../../components/ui/definition-block'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { Badge } from '../../../components/ui/badge'
import { Toc } from '../../../components/docs/toc'

export const Route = createFileRoute('/docs/components/definition-block')({
  component: DefinitionBlockDocPage,
})

function DefinitionBlockDocPage() {
  const codeSnippet = `<DefinitionBlock
  title="SINGLE-FAMILY JETBRAINS MONO SYSTEM"
  tag="TYPOGRAPHY"
  subtitle="design.md § System"
>
  All typography is unified under a single monospaced typeface family. No serif or sans-serif fonts are permitted.
</DefinitionBlock>`

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <Badge symbol="◆">ARCHETYPE</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Definition Block
          </h1>
          <p className="text-base-plus text-ink-2">
            Container archetype featuring wash background surface, 8px card radius, and bold uppercase header tags.
          </p>
        </div>

        <section id="preview">
          <ComponentPreview title="Definition Block Archetype" code={codeSnippet}>
            <div className="w-full">
              <DefinitionBlock
                title="SINGLE-FAMILY JETBRAINS MONO SYSTEM"
                tag="TYPOGRAPHY"
                subtitle="design.md § System"
              >
                All typography is unified under a single monospaced typeface family. No serif or sans-serif fonts are permitted.
              </DefinitionBlock>
            </div>
          </ComponentPreview>
        </section>

        {/* Props Reference Table */}
        <section id="props" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink">
            # Props Reference
          </h2>
          <Table caption="DefinitionBlock Component API">
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
                <TableCell className="font-bold">title</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>required</TableCell>
                <TableCell className="text-ink-2">Bold uppercase header title.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">tag</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>"DEF"</TableCell>
                <TableCell className="text-ink-2">Chip label rendered beside the title.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">subtitle</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell className="text-ink-2">Muted annotation on the right of the header.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">children</TableCell>
                <TableCell className="text-sky-700">ReactNode</TableCell>
                <TableCell>required</TableCell>
                <TableCell className="text-ink-2">Body content rendered in muted prose.</TableCell>
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

      <Toc items={[{ id: 'preview', title: 'Definition Block Archetype' }, { id: 'props', title: 'Props Reference' }]} />
    </div>
  )
}
