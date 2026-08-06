import React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { DefinitionBlock } from '../../components/ui/definition-block'
import { CodePill } from '../../components/ui/code-pill'
import { Toc } from '../../components/docs/toc'
import { ArrowRight, ShieldAlert } from '../../components/ui/icons'

export const Route = createFileRoute('/docs/')({
  component: DocsIntroPage,
})

function DocsIntroPage() {
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'design-md', title: 'Locked design.md' },
    { id: 'archetypes', title: 'Core Archetypes' },
    { id: 'anti-patterns', title: 'Anti-Patterns' },
  ]

  return (
    <div className="docs-article-layout">
      <article className="docs-article">
        {/* Title block */}
        <div className="space-y-2 border-b border-rule pb-6">
          <span className="docs-kicker">Getting started · v1.0.0</span>
          <h1 className="docs-page-title">
            Introduction to ashlli/ui
          </h1>
          <p className="docs-intro">
            Re-usable monospaced UI component system built directly from the locked design.md specifications. Beautiful, stark, ink-on-paper UI designed for documentation, technical products, and benchmark platforms.
          </p>
        </div>

        {/* Section: Overview */}
        <section id="overview" className="docs-section">
          <h2>Overview</h2>
          <p className="text-sm-plus text-ink-2 leading-relaxed">
            Unlike traditional UI kits that rely on heavy decorative gradients, rounded bubbly shapes, or multi-font families, <strong className="text-ink">ashlli/ui</strong> strictly enforces a single-family monospaced architecture using <strong className="text-ink">JetBrains Mono</strong> and <strong className="text-ink">oklch</strong> ink-on-paper tokens.
          </p>
          <CodePill command="npx ashlli-ui add button" label="QUICKSTART" />
        </section>

        {/* Section: Locked design.md */}
        <section id="design-md" className="docs-section">
          <h2>Locked design.md</h2>
          <DefinitionBlock title="DESIGN SYSTEM PROVENANCE" tag="PROVENANCE" subtitle="design.md">
            Extracted directly from site HTML & CSS inspection. All color tokens use canonical OKLCH definitions, hairline 1px rules, 8px card radii, and 999px pill radii.
          </DefinitionBlock>
        </section>

        {/* Section: Core Archetypes */}
        <section id="archetypes" className="docs-section">
          <h2>Core archetypes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="border-t border-rule pt-3 space-y-1">
              <h4 className="font-bold text-ink">Page status badge</h4>
              <p className="text-sm-minus text-ink-2">Leading diamond indicator and rounded-pill border.</p>
            </div>
            <div className="border-t border-rule pt-3 space-y-1">
              <h4 className="font-bold text-ink">Definition block</h4>
              <p className="text-sm-minus text-ink-2">Wash surface container with uppercase bold headers.</p>
            </div>
            <div className="border-t border-rule pt-3 space-y-1">
              <h4 className="font-bold text-ink">Leaderboard rows</h4>
              <p className="text-sm-minus text-ink-2">Horizontal grid tracks for latency and benchmark metrics.</p>
            </div>
            <div className="border-t border-rule pt-3 space-y-1">
              <h4 className="font-bold text-ink">Command pill</h4>
              <p className="text-sm-minus text-ink-2">Wash background command runner with copy button.</p>
            </div>
          </div>
        </section>

        {/* Section: Anti-Patterns */}
        <section id="anti-patterns" className="docs-section">
          <h2>Anti-patterns to avoid</h2>
          <ul className="space-y-2 text-sm text-ink-2 border border-rule rounded-card p-4 bg-paper-2">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>Do NOT use non-monospace fonts:</strong> Display, body, and labels must remain strictly in JetBrains Mono.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>Do NOT introduce decorative gradients:</strong> Palette remains stark ink-on-paper with subtle grey washes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>Do NOT use bouncy hovers or `transition: all`:</strong> Restrained CSS transform/color transitions only.</span>
            </li>
          </ul>
        </section>

        {/* Navigation bottom */}
        <div className="pt-8 border-t border-rule flex justify-between">
          <span />
          <Link to="/docs/installation" className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:underline">
            <span>Installation Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>

      <Toc items={tocItems} />
    </div>
  )
}
