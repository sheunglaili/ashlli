import React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { CodePill } from '../components/ui/code-pill'
import { ArrowRight } from '../components/ui/icons'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="font-mono bg-paper">
      <section className="border-b border-rule px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <Badge symbol="◆" variant="outline">A SHARED INTERFACE FOUNDATION</Badge>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.06em] text-ink sm:text-6xl">
            ashlli<span className="text-ink-2">/ui</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink-2 sm:text-lg">
            A quiet, portable design system for carrying one clear visual language across every project I build.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link to="/docs" className="no-underline">
              <Button variant="primary" size="md" icon={<ArrowRight className="h-4 w-4" />}>
                READ THE DOCS
              </Button>
            </Link>
            <CodePill command="npx ashlli-ui add button" label="START" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-3">
        <div className="border-t border-rule pt-4">
          <h2 className="text-base font-bold text-ink">A stable foundation</h2>
          <p className="mt-3 text-sm leading-6 text-ink-2">
            Shared tokens, spacing, type, and interaction rules make a new project feel connected to the last one from its first screen.
          </p>
        </div>
        <div className="border-t border-rule pt-4">
          <h2 className="text-base font-bold text-ink">A deliberate visual voice</h2>
          <p className="mt-3 text-sm leading-6 text-ink-2">
            Ink on paper, mono type, generous space, and hairline rules leave room for the content and the work itself.
          </p>
        </div>
        <div className="border-t border-rule pt-4">
          <h2 className="text-base font-bold text-ink">A system you can extend</h2>
          <p className="mt-3 text-sm leading-6 text-ink-2">
            Start with dependable primitives, then add the components and patterns each project genuinely needs.
          </p>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-2 px-4 py-16 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-ink">The system lives in <code className="text-ink-2">design.md</code>.</p>
            <p className="mt-2 text-sm leading-6 text-ink-2">
              It records the decisions that should travel with you—so the next interface begins with intent rather than a blank slate.
            </p>
          </div>
          <Link to="/docs/tokens" className="shrink-0 text-sm font-bold text-ink no-underline hover:underline">
            EXPLORE THE TOKENS →
          </Link>
        </div>
      </section>
    </main>
  )
}
