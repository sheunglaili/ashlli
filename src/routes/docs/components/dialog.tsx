import React, { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Dialog } from '../../../components/ui/dialog'
import { Button } from '../../../components/ui/button'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { Badge } from '../../../components/ui/badge'
import { Toc } from '../../../components/docs/toc'

export const Route = createFileRoute('/docs/components/dialog')({
  component: DialogDocPage,
})

function DialogDocPage() {
  const [isOpen, setIsOpen] = useState(false)

  const codeSnippet = `<Button onClick={() => setIsOpen(true)}>TRIGGER MODAL DIALOG</Button>

<Dialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="RUN BENCHMARK SUITE"
  subtitle="Execute technical performance tests"
  footer={
    <>
      <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>CANCEL</Button>
      <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>START BENCHMARK</Button>
    </>
  }
>
  This action will trigger an automated benchmark run across all registered models. Results will be emitted directly to your console.
</Dialog>`

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <Badge symbol="◆">BASE COMPONENT</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Modal Dialog
          </h1>
          <p className="text-base-plus text-ink-2">
            Technical modal overlay with wash header, ESC key listener, and focus trapping.
          </p>
        </div>

        <section id="preview">
          <ComponentPreview title="Modal Dialog" code={codeSnippet}>
            <div>
              <Button variant="primary" onClick={() => setIsOpen(true)}>
                TRIGGER MODAL DIALOG
              </Button>

              <Dialog
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="RUN BENCHMARK SUITE"
                subtitle="Execute technical performance tests"
                footer={
                  <>
                    <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>
                      CANCEL
                    </Button>
                    <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>
                      START BENCHMARK
                    </Button>
                  </>
                }
              >
                This action will trigger an automated benchmark run across all registered models. Results will be emitted directly to your console.
              </Dialog>
            </div>
          </ComponentPreview>
        </section>

        {/* Props Reference Table */}
        <section id="props" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink">
            # Props Reference
          </h2>
          <Table caption="Dialog Component API">
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
                <TableCell className="font-bold">isOpen</TableCell>
                <TableCell className="text-sky-700">boolean</TableCell>
                <TableCell>required</TableCell>
                <TableCell className="text-ink-2">Controls dialog visibility.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">onClose</TableCell>
                <TableCell className="text-sky-700">() =&gt; void</TableCell>
                <TableCell>required</TableCell>
                <TableCell className="text-ink-2">Called on close button, ESC key, or backdrop click.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">title</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>required</TableCell>
                <TableCell className="text-ink-2">Dialog header title.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">subtitle</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell className="text-ink-2">Muted subtitle under the title.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">children</TableCell>
                <TableCell className="text-sky-700">ReactNode</TableCell>
                <TableCell>required</TableCell>
                <TableCell className="text-ink-2">Dialog body content.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">footer</TableCell>
                <TableCell className="text-sky-700">ReactNode</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell className="text-ink-2">Right-aligned footer actions.</TableCell>
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

      <Toc items={[{ id: 'preview', title: 'Modal Dialog' }, { id: 'props', title: 'Props Reference' }]} />
    </div>
  )
}
