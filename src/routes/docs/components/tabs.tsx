import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Tabs } from '../../../components/ui/tabs'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { Badge } from '../../../components/ui/badge'
import { Toc } from '../../../components/docs/toc'

export const Route = createFileRoute('/docs/components/tabs')({
  component: TabsDocPage,
})

function TabsDocPage() {
  const codeSnippet = `<Tabs
  variant="segmented"
  items={[
    {
      id: 'overview',
      label: 'Overview',
      badge: 'DOCS',
      content: <div className="p-4 border border-rule rounded bg-paper-2">Overview tab content area</div>
    },
    {
      id: 'benchmarks',
      label: 'Benchmarks',
      badge: 'METRICS',
      content: <div className="p-4 border border-rule rounded bg-paper-2">Benchmark metrics tab content area</div>
    }
  ]}
/>`

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <Badge symbol="◆">BASE COMPONENT</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Tabs Switcher
          </h1>
          <p className="text-base-plus text-ink-2">
            Tab switcher used for Preview / Code tab toggles and segmented views.
          </p>
        </div>

        <section id="preview">
          <ComponentPreview title="Segmented Tabs" code={codeSnippet}>
            <div className="w-full">
              <Tabs
                variant="segmented"
                items={[
                  {
                    id: 'overview',
                    label: 'Overview',
                    badge: 'DOCS',
                    content: <div className="p-4 border border-rule rounded bg-paper-2">Overview tab content area</div>,
                  },
                  {
                    id: 'benchmarks',
                    label: 'Benchmarks',
                    badge: 'METRICS',
                    content: <div className="p-4 border border-rule rounded bg-paper-2">Benchmark metrics tab content area</div>,
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
          <Table caption="Tabs Component API">
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
                <TableCell className="text-sky-700">TabItem[]</TableCell>
                <TableCell>required</TableCell>
                <TableCell className="text-ink-2">Tab definitions. Each item: id, label, icon?, badge?, content.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">variant</TableCell>
                <TableCell className="text-sky-700">"underline" | "pills" | "segmented"</TableCell>
                <TableCell>"segmented"</TableCell>
                <TableCell className="text-ink-2">Visual treatment of the tab strip.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">defaultTabId</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>items[0].id</TableCell>
                <TableCell className="text-ink-2">Tab active on initial render.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">onChange</TableCell>
                <TableCell className="text-sky-700">(tabId: string) =&gt; void</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell className="text-ink-2">Callback fired when the active tab changes.</TableCell>
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

      <Toc items={[{ id: 'preview', title: 'Tabs Switcher' }, { id: 'props', title: 'Props Reference' }]} />
    </div>
  )
}
