import React, { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Slider } from '../../../components/ui/slider'
import { Button } from '../../../components/ui/button'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { Badge } from '../../../components/ui/badge'
import { Toc } from '../../../components/docs/toc'

export const Route = createFileRoute('/docs/components/slider')({
  component: SliderDocPage,
})

function SliderDocPage() {
  const [vol, setVol] = useState(50)
  const [thresh, setThresh] = useState(500)
  const [latency, setLatency] = useState(320)
  const [showValue, setShowValue] = useState(true)

  const codeSnippet = `<Slider value={${vol}} onChange={setVol} showValue={${showValue}} label="Volume" />

<Slider value={${thresh}} onChange={setThresh} showValue={${showValue}} label="Threshold" min={0} max={1000} step={10} />

<Slider value={${latency}} onChange={setLatency} showValue={${showValue}} label="With Label" valueLabel={(v) => \`\${v}ms\`} />`

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <div className="flex items-center gap-2">
            <Badge symbol="◆">BASE COMPONENT</Badge>
            <span className="text-xs text-ink-2">design.md § Inputs</span>
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Slider
          </h1>
          <p className="text-base-plus text-ink-2">
            Range input with wash track, ink fill, and pill-shaped thumb. Native input styled to match design.md tokens.
          </p>
        </div>

        {/* Interactive Sandbox */}
        <section id="sandbox">
          <ComponentPreview
            title="Slider Interactive Sandbox"
            description="Drag the slider and toggle options to test live behavior."
            code={codeSnippet}
            controls={
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
            }
          >
            <div className="w-full max-w-md space-y-6">
              <Slider value={vol} onChange={setVol} showValue={showValue} label="Volume" />
              <Slider value={thresh} onChange={setThresh} showValue={showValue} label="Threshold" min={0} max={1000} step={10} />
              <Slider value={latency} onChange={setLatency} showValue={showValue} label="With Label" valueLabel={(v) => `${v}ms`} />
            </div>
          </ComponentPreview>
        </section>

        {/* Static Examples */}
        <section id="examples" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink">
            # Examples
          </h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-ink-2 uppercase tracking-wider">Basic with value</span>
              <Slider value={65} showValue label="Opacity" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-ink-2 uppercase tracking-wider">Custom label formatter</span>
              <Slider value={320} showValue label="Latency" valueLabel={(v) => `${v}ms`} />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-ink-2 uppercase tracking-wider">No label, no value</span>
              <Slider value={75} />
            </div>
          </div>
        </section>

        {/* Props Reference Table */}
        <section id="props" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink">
            # Props Reference
          </h2>
          <Table caption="Slider Component API">
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
                <TableCell className="text-ink-2">Current slider value.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">onChange</TableCell>
                <TableCell className="text-sky-700">(value: number) =&gt; void</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell className="text-ink-2">Callback fired when the value changes.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">min</TableCell>
                <TableCell className="text-sky-700">number</TableCell>
                <TableCell>0</TableCell>
                <TableCell className="text-ink-2">Minimum value.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">max</TableCell>
                <TableCell className="text-sky-700">number</TableCell>
                <TableCell>100</TableCell>
                <TableCell className="text-ink-2">Maximum value.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">step</TableCell>
                <TableCell className="text-sky-700">number</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="text-ink-2">Step increment between values.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">label</TableCell>
                <TableCell className="text-sky-700">string</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell className="text-ink-2">Optional label above the slider.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">showValue</TableCell>
                <TableCell className="text-sky-700">boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell className="text-ink-2">Show current value next to the label.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">valueLabel</TableCell>
                <TableCell className="text-sky-700">(value: number) =&gt; string</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell className="text-ink-2">Custom formatter for the displayed value.</TableCell>
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
