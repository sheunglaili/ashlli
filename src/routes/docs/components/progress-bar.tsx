import React, { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ProgressBar } from '../../../components/ui/progress-bar'
import { Slider } from '../../../components/ui/slider'
import { Button } from '../../../components/ui/button'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { Badge } from '../../../components/ui/badge'
import { Toc } from '../../../components/docs/toc'

export const Route = createFileRoute('/docs/components/progress-bar')({
  component: ProgressBarDocPage,
})

function ProgressBarDocPage() {
  const [value, setValue] = useState(65)
  const [showValue, setShowValue] = useState(true)

  const codeSnippet = `<ProgressBar value={${value}} showValue={${showValue}} />
<ProgressBar value={${value}} color="var(--color-success)" label="Memory" showValue={${showValue}} />
<ProgressBar value={${value}} color="var(--color-warning)" label="Disk I/O" showValue={${showValue}} />`

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <div className="flex items-center gap-2">
            <Badge symbol="◆">BASE COMPONENT</Badge>
            <span className="text-xs text-ink-2">design.md § Data Tracks</span>
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Progress Bar
          </h1>
          <p className="text-base-plus text-ink-2">
            Horizontal data track showing fill percentage with wash background and animated fill bar.
          </p>
        </div>

        {/* Interactive Sandbox */}
        <section id="sandbox">
          <ComponentPreview
            title="Progress Bar Interactive Sandbox"
            description="Drag the slider and toggle options to test live behavior."
            code={codeSnippet}
            controls={
              <>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-ink-2 uppercase whitespace-nowrap">Value: {value}%</span>
                  <Slider
                    value={value}
                    onChange={setValue}
                    min={0}
                    max={100}
                    className="flex-1"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-ink-2 uppercase">Show Value:</span>
                  <Button
                    variant={showValue ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setShowValue(!showValue)}
                  >
                    {showValue ? 'on' : 'off'}
                  </Button>
                </div>
              </>
            }
          >
            <div className="w-full max-w-md space-y-4">
              <ProgressBar value={value} showValue={showValue} />
              <ProgressBar value={value} color="var(--color-success)" label="Memory" showValue={showValue} />
              <ProgressBar value={value} color="var(--color-warning)" label="Disk I/O" showValue={showValue} />
            </div>
          </ComponentPreview>
        </section>

        {/* Static Examples */}
        <section id="examples" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink">
            # Examples
          </h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-ink-2 uppercase tracking-wider">Labeled with value</span>
              <ProgressBar value={72} label="CPU Usage" showValue />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-ink-2 uppercase tracking-wider">Custom color</span>
              <ProgressBar value={45} color="var(--color-success)" showValue />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-ink-2 uppercase tracking-wider">No label, no value</span>
              <ProgressBar value={90} />
            </div>
          </div>
        </section>

        {/* Props Reference Table */}
        <section id="props" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink">
            # Props Reference
          </h2>
          <Table caption="ProgressBar Component API">
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
                <TableCell className="font-bold">value</TableCell>
                <TableCell className="text-sky-700">number</TableCell>
                <TableCell>required</TableCell>
                <TableCell className="text-ink-2">Current fill value (0 to max).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">max</TableCell>
                <TableCell className="text-sky-700">number</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-ink-2">Maximum value for percentage calculation.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">color</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>"var(--color-ink)"</TableCell>
                <TableCell className="text-ink-2">Fill bar color. Accepts CSS color values.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">label</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell className="text-ink-2">Optional label above the bar.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">showValue</TableCell>
                <TableCell className="text-sky-700">boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell className="text-ink-2">Show percentage value next to the label.</TableCell>
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

      <Toc items={[{ id: 'sandbox', title: 'Interactive Sandbox' }, { id: 'examples', title: 'Examples' }, { id: 'props', title: 'Props Reference' }]} />
    </div>
  )
}
