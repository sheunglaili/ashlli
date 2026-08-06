import React, { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Input, Textarea, Switch } from '../../../components/ui/input'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { Badge } from '../../../components/ui/badge'
import { Toc } from '../../../components/docs/toc'

export const Route = createFileRoute('/docs/components/input')({
  component: InputDocPage,
})

function InputDocPage() {
  const [switchChecked, setSwitchChecked] = useState(true)

  const codeSnippet = `<Input label="PROJECT NAME" placeholder="ashlli-app" hint="Monospaced input field with focus ring." />
<Textarea label="SYSTEM PROMPT" placeholder="Enter instructions..." />
<Switch checked={switchChecked} onChange={setSwitchChecked} label="STRICT MONOSPACE MODE" />`

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <Badge symbol="◆">BASE COMPONENT</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Inputs & Controls
          </h1>
          <p className="text-base-plus text-ink-2">
            Monospaced text input, textarea, and toggle switch controls.
          </p>
        </div>

        <section id="preview">
          <ComponentPreview title="Input & Switch Controls" code={codeSnippet}>
            <div className="w-full max-w-md space-y-5">
              <Input label="PROJECT NAME" placeholder="ashlli-app" hint="Monospaced input field with focus ring." />
              <Textarea label="SYSTEM PROMPT" placeholder="Enter instructions..." />
              <Switch checked={switchChecked} onChange={setSwitchChecked} label="STRICT MONOSPACE MODE" />
            </div>
          </ComponentPreview>
        </section>

        {/* Props Reference Table */}
        <section id="props" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink">
            # Props Reference
          </h2>

          <div className="space-y-2">
            <h3 className="text-lg font-bold uppercase tracking-wide text-ink">Input</h3>
            <Table caption="Input Component API">
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
                  <TableCell className="font-bold">label</TableCell>
                  <TableCell className="text-sky-700">string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell className="text-ink-2">Uppercase label above the field.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">hint</TableCell>
                  <TableCell className="text-sky-700">string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell className="text-ink-2">Muted helper text below the field.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">error</TableCell>
                  <TableCell className="text-sky-700">string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell className="text-ink-2">Error message; sets error border styling.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">...props</TableCell>
                  <TableCell className="text-sky-700">InputHTMLAttributes</TableCell>
                  <TableCell>—</TableCell>
                  <TableCell className="text-ink-2">Native input attributes pass through.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold uppercase tracking-wide text-ink">Textarea</h3>
            <Table caption="Textarea Component API">
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
                  <TableCell className="font-bold">label</TableCell>
                  <TableCell className="text-sky-700">string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell className="text-ink-2">Uppercase label above the field.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">error</TableCell>
                  <TableCell className="text-sky-700">string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell className="text-ink-2">Error message; sets error border styling.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">...props</TableCell>
                  <TableCell className="text-sky-700">TextareaHTMLAttributes</TableCell>
                  <TableCell>—</TableCell>
                  <TableCell className="text-ink-2">Native textarea attributes pass through.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold uppercase tracking-wide text-ink">Switch</h3>
            <Table caption="Switch Component API">
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
                  <TableCell className="font-bold">checked</TableCell>
                  <TableCell className="text-sky-700">boolean</TableCell>
                  <TableCell>required</TableCell>
                  <TableCell className="text-ink-2">Toggle state.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">onChange</TableCell>
                  <TableCell className="text-sky-700">(checked: boolean) =&gt; void</TableCell>
                  <TableCell>required</TableCell>
                  <TableCell className="text-ink-2">Called with the new value on toggle.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">label</TableCell>
                  <TableCell className="text-sky-700">string</TableCell>
                  <TableCell>undefined</TableCell>
                  <TableCell className="text-ink-2">Label rendered beside the toggle.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold">className</TableCell>
                  <TableCell className="text-sky-700">string</TableCell>
                  <TableCell>""</TableCell>
                  <TableCell className="text-ink-2">Additional CSS classes.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      </div>

      <Toc items={[{ id: 'preview', title: 'Input & Switch Controls' }, { id: 'props', title: 'Props Reference' }]} />
    </div>
  )
}
