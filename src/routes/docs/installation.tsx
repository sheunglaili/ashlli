import React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '../../components/ui/badge'
import { CodePill } from '../../components/ui/code-pill'
import { Toc } from '../../components/docs/toc'
import { ArrowLeft, ArrowRight } from '../../components/ui/icons'

export const Route = createFileRoute('/docs/installation')({
  component: InstallationPage,
})

function InstallationPage() {
  const tocItems = [
    { id: 'requirements', title: 'Requirements' },
    { id: 'step-1', title: 'Step 1: Install the ashlli style' },
    { id: 'step-2', title: 'Step 2: Add components' },
    { id: 'step-3', title: 'Step 3: Use a component' },
  ]

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <Badge symbol="◆">INSTALLATION</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Installation & Setup
          </h1>
          <p className="text-base-plus text-ink-2">
            Install ashlli/ui with the shadcn CLI. Every component is copied into your project — no lock-in, fully yours to customize.
          </p>
        </div>

        {/* Requirements */}
        <section id="requirements" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-ink text-accent-ink font-bold text-xs flex items-center justify-center">
              ✓
            </span>
            <h2 className="text-lg font-bold uppercase text-ink">Requirements</h2>
          </div>
          <ul className="space-y-2 text-sm text-ink-2 border border-rule rounded-card p-4 bg-paper-2">
            <li className="flex items-start gap-2">
              <span className="text-ink font-bold">1.</span>
              <span>A React project with <strong className="text-ink">Tailwind CSS v4</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ink font-bold">2.</span>
              <span>The <strong className="text-ink">shadcn</strong> CLI (invoked via <code className="bg-paper px-1.5 py-0.5 border border-rule rounded">npx shadcn@latest</code>).</span>
            </li>
          </ul>
        </section>

        {/* Step 1 */}
        <section id="step-1" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-ink text-accent-ink font-bold text-xs flex items-center justify-center">
              1
            </span>
            <h2 className="text-lg font-bold uppercase text-ink">Install the ashlli style</h2>
          </div>
          <p className="text-sm text-ink-2 leading-relaxed">
            Adds the theme tokens, fonts, and Tailwind configuration to your project:
          </p>
          <CodePill command="npx shadcn@latest add sheunglaili/ashlli/ashlli" label="SHELL" />
        </section>

        {/* Step 2 */}
        <section id="step-2" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-ink text-accent-ink font-bold text-xs flex items-center justify-center">
              2
            </span>
            <h2 className="text-lg font-bold uppercase text-ink">Add components</h2>
          </div>
          <p className="text-sm text-ink-2 leading-relaxed">
            Add any component by registry name. Dependencies resolve automatically:
          </p>
          <CodePill command="npx shadcn@latest add sheunglaili/ashlli/button" label="SHELL" />
          <CodePill command="npx shadcn@latest add sheunglaili/ashlli/toast" label="SHELL" />
        </section>

        {/* Step 3 */}
        <section id="step-3" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-ink text-accent-ink font-bold text-xs flex items-center justify-center">
              3
            </span>
            <h2 className="text-lg font-bold uppercase text-ink">Use a component</h2>
          </div>
          <p className="text-sm text-ink-2 leading-relaxed">
            Import components from <code className="bg-paper-2 px-1.5 py-0.5 border border-rule rounded">@/components/ui</code>:
          </p>
          <div className="p-4 bg-ink text-accent-ink rounded-card text-sm-minus">
            <pre>
              <code>{`import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function MyPage() {
  return (
    <div>
      <Badge symbol="◆">TECHNICAL</Badge>
      <Button variant="primary">RUN BENCHMARK</Button>
    </div>
  )
}`}</code>
            </pre>
          </div>
        </section>

        {/* Navigation bottom */}
        <div className="pt-8 border-t border-rule flex justify-between">
          <Link to="/docs" className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink">
            <ArrowLeft className="w-4 h-4" />
            <span>Introduction</span>
          </Link>
          <Link to="/docs/tokens" className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:underline">
            <span>Design Tokens</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Toc items={tocItems} />
    </div>
  )
}
