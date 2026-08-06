import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useToast } from '../../../components/ui/toast'
import { Button } from '../../../components/ui/button'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { Badge } from '../../../components/ui/badge'
import { Toc } from '../../../components/docs/toc'

export const Route = createFileRoute('/docs/components/toast')({
  component: ToastDocPage,
})

function ToastDocPage() {
  const { toast } = useToast()

  const codeSnippet = `const { toast } = useToast()

toast({
  title: 'SYSTEM DNA LOCKED',
  description: 'design.md generated and saved to root repository.'
})

toast({
  title: 'BENCHMARK RUNNING',
  description: 'Processing metric passes across tracks...'
})`

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <Badge symbol="◆">BASE COMPONENT</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Toast Notifications
          </h1>
          <p className="text-base-plus text-ink-2">
            Minimal toast callouts positioned in bottom corner.
          </p>
        </div>

        <section id="preview">
          <ComponentPreview title="Toast Notifications" code={codeSnippet}>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                onClick={() =>
                  toast({
                    title: 'SYSTEM DNA LOCKED',
                    description: 'design.md generated and saved to root repository.',
                  })
                }
              >
                TRIGGER SUCCESS TOAST
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  toast({
                    title: 'BENCHMARK RUNNING',
                    description: 'Processing metric passes across tracks...',
                  })
                }
              >
                TRIGGER INFO TOAST
              </Button>
            </div>
          </ComponentPreview>
        </section>

        {/* Props Reference Table */}
        <section id="props" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink">
            # Props Reference
          </h2>
          <Table caption="toast() Payload API">
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
                <TableCell className="text-ink-2">Toast heading text.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">description</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell className="text-ink-2">Muted body text.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">type</TableCell>
                <TableCell className="text-sky-700">"success" | "warning" | "error" | "info"</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell className="text-ink-2">Reserved for variant styling.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="text-sm text-ink-2">
            Usage requires a <code className="font-bold text-ink">ToastProvider</code> at the app root. Auto-dismisses after 4s.
          </p>
        </section>
      </div>

      <Toc items={[{ id: 'preview', title: 'Toast Notifications' }, { id: 'props', title: 'Props Reference' }]} />
    </div>
  )
}
