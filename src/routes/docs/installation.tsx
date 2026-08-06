import React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '../../components/ui/badge'
import { CodePill } from '../../components/ui/code-pill'
import { DefinitionBlock } from '../../components/ui/definition-block'
import { Toc } from '../../components/docs/toc'
import { ArrowLeft, ArrowRight, Terminal } from '../../components/ui/icons'

export const Route = createFileRoute('/docs/installation')({
  component: InstallationPage,
})

function InstallationPage() {
  const tocItems = [
    { id: 'step-1', title: 'Step 1: Copy design.md' },
    { id: 'step-2', title: 'Step 2: Add CSS Tokens' },
    { id: 'step-3', title: 'Step 3: Import Components' },
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
            How to set up ashlli/ui components and integrate design.md tokens into your TanStack React project.
          </p>
        </div>

        {/* Step 1 */}
        <section id="step-1" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-ink text-accent-ink font-bold text-xs flex items-center justify-center">
              1
            </span>
            <h2 className="text-lg font-bold uppercase text-ink">Copy design.md into your project root</h2>
          </div>
          <p className="text-sm text-ink-2 leading-relaxed">
            Ensure <code className="bg-paper-2 px-1.5 py-0.5 border border-rule rounded">design.md</code> is placed at the root of your repository so Hallmark skills and AI agents follow the locked system rules.
          </p>
          <CodePill command="cp ./design.md ./my-app/design.md" label="SHELL" />
        </section>

        {/* Step 2 */}
        <section id="step-2" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-ink text-accent-ink font-bold text-xs flex items-center justify-center">
              2
            </span>
            <h2 className="text-lg font-bold uppercase text-ink">Include Google Font & OKLCH Tokens</h2>
          </div>
          <p className="text-sm text-ink-2 leading-relaxed">
            Import JetBrains Mono in your <code className="bg-paper-2 px-1.5 py-0.5 border border-rule rounded">src/styles.css</code>:
          </p>
          <div className="p-4 bg-ink text-accent-ink rounded-card text-sm-minus">
            <pre>
              <code>{`@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');

:root {
  --color-paper: oklch(100% 0 0);
  --color-paper-2: oklch(96.5% 0 0);
  --color-ink: oklch(15% 0 0);
  --color-rule: oklch(88% 0 0);
  --font-mono: "JetBrains Mono", monospace;
}`}</code>
            </pre>
          </div>
        </section>

        {/* Step 3 */}
        <section id="step-3" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-ink text-accent-ink font-bold text-xs flex items-center justify-center">
              3
            </span>
            <h2 className="text-lg font-bold uppercase text-ink">Import and Use Components</h2>
          </div>
          <p className="text-sm text-ink-2 leading-relaxed">
            Import components directly into your TanStack route components:
          </p>
          <div className="p-4 bg-ink text-accent-ink rounded-card text-sm-minus">
            <pre>
              <code>{`import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'

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
