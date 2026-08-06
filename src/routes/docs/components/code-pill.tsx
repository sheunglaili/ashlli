import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { CodePill } from '../../../components/ui/code-pill'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { Badge } from '../../../components/ui/badge'
import { Toc } from '../../../components/docs/toc'

export const Route = createFileRoute('/docs/components/code-pill')({
  component: CodePillDocPage,
})

function CodePillDocPage() {
  const codeSnippet = `<div className="flex flex-col items-center gap-3">
  <CodePill command="npx ashlli-ui add button" label="NPX" />
  <CodePill command="git clone https://github.com/sheunglaili/ashlli.git" label="GIT" />
</div>`

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <Badge symbol="◆">ARCHETYPE</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Command Code Pill
          </h1>
          <p className="text-base-plus text-ink-2">
            Wash background command runner container with attached inline copy button.
          </p>
        </div>

        <section id="preview">
          <ComponentPreview title="Command Code Pill" code={codeSnippet}>
            <div className="w-full flex flex-col gap-3 items-center">
              <CodePill command="npx ashlli-ui add button" label="NPX" />
              <CodePill command="git clone https://github.com/sheunglaili/ashlli.git" label="GIT" />
            </div>
          </ComponentPreview>
        </section>

        {/* Props Reference Table */}
        <section id="props" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink">
            # Props Reference
          </h2>
          <Table caption="CodePill Component API">
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
                <TableCell className="font-bold">command</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>required</TableCell>
                <TableCell className="text-ink-2">Command text displayed and copied to clipboard.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">label</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>"npx"</TableCell>
                <TableCell className="text-ink-2">Prefix label rendered in a bordered chip.</TableCell>
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

      <Toc items={[{ id: 'preview', title: 'Command Code Pill' }, { id: 'props', title: 'Props Reference' }]} />
    </div>
  )
}
