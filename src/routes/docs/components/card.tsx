import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../../components/ui/card'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Button } from '../../../components/ui/button'
import { Badge } from '../../../components/ui/badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { Toc } from '../../../components/docs/toc'

export const Route = createFileRoute('/docs/components/card')({
  component: CardDocPage,
})

function CardDocPage() {
  const codeSnippet = `<Card>
  <CardHeader>
    <CardTitle>WORKBENCH MODEL</CardTitle>
    <CardDescription>Monospaced container archetype</CardDescription>
  </CardHeader>
  <CardContent>
    Hairline 1px border container with wash header surface per design.md.
  </CardContent>
  <CardFooter>
    <span className="text-xs text-ink-2">STATUS: READY</span>
    <Button variant="secondary" size="sm">EXECUTE</Button>
  </CardFooter>
</Card>`

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <Badge symbol="◆">BASE COMPONENT</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Card Container
          </h1>
          <p className="text-base-plus text-ink-2">
            Monospaced card container with hair-line rules, wash headers, and 8px border radius.
          </p>
        </div>

        <section id="preview">
          <ComponentPreview title="Card Component" code={codeSnippet}>
            <div className="w-full max-w-md">
              <Card>
                <CardHeader>
                  <CardTitle>WORKBENCH MODEL</CardTitle>
                  <CardDescription>Monospaced container archetype</CardDescription>
                </CardHeader>
                <CardContent>
                  Hairline 1px border container with wash header surface per design.md.
                </CardContent>
                <CardFooter>
                  <span className="text-xs text-ink-2">STATUS: READY</span>
                  <Button variant="secondary" size="sm">
                    EXECUTE
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </ComponentPreview>
        </section>

        {/* Props Reference Table */}
        <section id="props" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink">
            # Props Reference
          </h2>
          <Table caption="Card Component API">
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
                <TableCell className="font-bold">Card variant</TableCell>
                <TableCell className="text-sky-700">"default" | "wash" | "outline"</TableCell>
                <TableCell>"default"</TableCell>
                <TableCell className="text-ink-2">Surface treatment. Wash fills with paper-2, outline is transparent.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">CardHeader</TableCell>
                <TableCell className="text-sky-700">HTMLAttributes</TableCell>
                <TableCell>—</TableCell>
                <TableCell className="text-ink-2">Wash header row with bottom rule.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">CardTitle</TableCell>
                <TableCell className="text-sky-700">HTMLAttributes</TableCell>
                <TableCell>—</TableCell>
                <TableCell className="text-ink-2">Bold uppercase heading.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">CardDescription</TableCell>
                <TableCell className="text-sky-700">HTMLAttributes</TableCell>
                <TableCell>—</TableCell>
                <TableCell className="text-ink-2">Muted secondary text.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">CardContent</TableCell>
                <TableCell className="text-sky-700">HTMLAttributes</TableCell>
                <TableCell>—</TableCell>
                <TableCell className="text-ink-2">Main body area.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">CardFooter</TableCell>
                <TableCell className="text-sky-700">HTMLAttributes</TableCell>
                <TableCell>—</TableCell>
                <TableCell className="text-ink-2">Footer with top rule, left-right flex layout.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>

      <Toc items={[{ id: 'preview', title: 'Card Component' }, { id: 'props', title: 'Props Reference' }]} />
    </div>
  )
}
