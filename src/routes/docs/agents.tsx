import React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '../../components/ui/badge'
import { CodePill } from '../../components/ui/code-pill'
import { Toc } from '../../components/docs/toc'
import { ArrowLeft, ArrowRight } from '../../components/ui/icons'

export const Route = createFileRoute('/docs/agents')({
  component: AgentsPage,
})

function AgentsPage() {
  const tocItems = [
    { id: 'install', title: 'Install the skill' },
    { id: 'teaches', title: 'What the skill teaches' },
    { id: 'structure', title: 'Skill structure' },
  ]

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <Badge symbol="◆">AGENT SKILLS</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Agent Skills
          </h1>
          <p className="text-base-plus text-ink-2">
            Teach your AI coding assistant how to build with ashlli/ui. The bundled skill installs into Claude Code, Cursor, opencode, and other agents that support the Agent Skills format.
          </p>
        </div>

        {/* Install */}
        <section id="install" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-ink text-accent-ink font-bold text-xs flex items-center justify-center">
              1
            </span>
            <h2 className="text-lg font-bold uppercase text-ink">Install the skill</h2>
          </div>
          <p className="text-sm text-ink-2 leading-relaxed">
            Run the skills CLI from the project where your assistant works. The skill is fetched straight from this repository:
          </p>
          <CodePill command="npx skills add sheunglaili/ashlli --skill ashlli" label="SHELL" />
        </section>

        {/* What it teaches */}
        <section id="teaches" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-ink text-accent-ink font-bold text-xs flex items-center justify-center">
              2
            </span>
            <h2 className="text-lg font-bold uppercase text-ink">What the skill teaches</h2>
          </div>
          <ul className="space-y-2 text-sm text-ink-2 border border-rule rounded-card p-4 bg-paper-2">
            <li className="flex items-start gap-2">
              <span className="text-ink font-bold">◆</span>
              <span>Installing components with the <strong className="text-ink">shadcn CLI</strong> from the ashlli registry.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ink font-bold">◆</span>
              <span>Components that are <strong className="text-ink">styled out of the box</strong> — drop them in and they look right in light and dark mode.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ink font-bold">◆</span>
              <span>Every <strong className="text-ink">component's API</strong> — import paths, key props, and minimal examples.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ink font-bold">◆</span>
              <span>The <strong className="text-ink">design rules</strong> — JetBrains Mono only, no decorative gradients, restrained motion, no hardcoded colors.</span>
            </li>
          </ul>
        </section>

        {/* Structure */}
        <section id="structure" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-ink text-accent-ink font-bold text-xs flex items-center justify-center">
              3
            </span>
            <h2 className="text-lg font-bold uppercase text-ink">Skill structure</h2>
          </div>
          <p className="text-sm text-ink-2 leading-relaxed">
            The skill ships in <code className="bg-paper-2 px-1.5 py-0.5 border border-rule rounded">skills/ashlli/</code> in this repository:
          </p>
          <CodePill command="git clone https://github.com/sheunglaili/ashlli.git" label="GIT" />
          <ul className="space-y-2 text-sm text-ink-2 border border-rule rounded-card p-4 bg-paper-2">
            <li className="flex items-start gap-2">
              <span className="text-ink font-bold">1.</span>
              <span><code className="bg-paper px-1.5 py-0.5 border border-rule rounded">SKILL.md</code> — the main skill: install, usage, design rules, troubleshooting.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ink font-bold">2.</span>
              <span><code className="bg-paper px-1.5 py-0.5 border border-rule rounded">references/components.md</code> — per-component docs with props and examples.</span>
            </li>
          </ul>
        </section>

        {/* Navigation bottom */}
        <div className="pt-8 border-t border-rule flex justify-between">
          <Link to="/docs/installation" className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink">
            <ArrowLeft className="w-4 h-4" />
            <span>Installation</span>
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
