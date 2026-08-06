import React, { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '../../../components/ui/button'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { Badge } from '../../../components/ui/badge'
import { Toc } from '../../../components/docs/toc'
import { ArrowRight, Download, Send, Check } from '../../../components/ui/icons'

export const Route = createFileRoute('/docs/components/button')({
  component: ButtonDocPage,
})

function ButtonDocPage() {
  const [variant, setVariant] = useState<'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'>('primary')
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md')

  const codeSnippet = `<Button variant="${variant}" size="${size}" icon={<Send className="w-3.5 h-3.5" />}>
  ${variant.toUpperCase()} BUTTON
</Button>`

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <div className="flex items-center gap-2">
            <Badge symbol="◆">BASE COMPONENT</Badge>
            <span className="text-xs text-ink-2">design.md § CTA Voice</span>
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Button
          </h1>
          <p className="text-base-plus text-ink-2">
            Stark ink-on-paper button with solid primary CTA and secondary outlined filter chip variants.
          </p>
        </div>

        {/* Interactive Sandbox */}
        <section id="sandbox">
          <ComponentPreview
            title="Button Interactive Sandbox"
            description="Toggle variants and sizes to test live button behavior."
            code={codeSnippet}
            controls={
              <>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-ink-2 uppercase">Variant:</span>
                  <div className="flex gap-1">
                    {(['primary', 'secondary', 'outline', 'ghost', 'destructive'] as const).map((v) => (
                      <Button
                        key={v}
                        variant={variant === v ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => setVariant(v)}
                      >
                        {v}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-ink-2 uppercase">Size:</span>
                  <div className="flex gap-1">
                    {(['sm', 'md', 'lg'] as const).map((s) => (
                      <Button
                        key={s}
                        variant={size === s ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => setSize(s)}
                      >
                        {s}
                      </Button>
                    ))}
                  </div>
                </div>
              </>
            }
          >
            <Button variant={variant} size={size} icon={<Send className="w-3.5 h-3.5" />}>
              {variant.toUpperCase()} BUTTON
            </Button>
          </ComponentPreview>
        </section>

        {/* Props Reference Table */}
        <section id="props" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink">
            # Props Reference
          </h2>
          <Table caption="Button Component API">
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
                <TableCell className="text-sky-700">"primary" | "secondary" | "outline" | "ghost" | "destructive"</TableCell>
                <TableCell>"primary"</TableCell>
                <TableCell className="text-ink-2">Visual style per design.md CTA voice specs.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">size</TableCell>
                <TableCell className="text-sky-700">"sm" | "md" | "lg"</TableCell>
                <TableCell>"md"</TableCell>
                <TableCell className="text-ink-2">Padding & text scaling.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">icon</TableCell>
                <TableCell className="text-sky-700">ReactNode</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell className="text-ink-2">Leading icon component.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">children</TableCell>
                <TableCell className="text-sky-700">ReactNode</TableCell>
                <TableCell>required</TableCell>
                <TableCell className="text-ink-2">Button label content.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">...props</TableCell>
                <TableCell className="text-sky-700">ButtonHTMLAttributes</TableCell>
                <TableCell>—</TableCell>
                <TableCell className="text-ink-2">Native button attributes (onClick, disabled, type...) pass through.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>

      <Toc items={[{ id: 'sandbox', title: 'Interactive Sandbox' }, { id: 'props', title: 'Props Reference' }]} />
    </div>
  )
}
