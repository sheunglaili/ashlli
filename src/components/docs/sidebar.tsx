import type React from 'react'
import { Link } from '@tanstack/react-router'

export interface SidebarNavGroup {
  title: string
  items: {
    title: string
    href: string
    badge?: string
    isNew?: boolean
  }[]
}

export const sidebarNav: SidebarNavGroup[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Design Tokens (design.md)', href: '/docs/tokens' },
    ],
  },
  {
    title: 'Core Archetypes',
    items: [
      { title: 'Status Badge', href: '/docs/components/badge', badge: 'ARCHETYPE' },
      { title: 'Definition Block', href: '/docs/components/definition-block', badge: 'ARCHETYPE' },
      { title: 'Leaderboard Row', href: '/docs/components/leaderboard', badge: 'ARCHETYPE' },
      { title: 'Code Pill', href: '/docs/components/code-pill', badge: 'ARCHETYPE' },
    ],
  },
  {
    title: 'Base Components',
    items: [
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Typography', href: '/docs/components/typography' },
      { title: 'Layout', href: '/docs/components/layout' },
      { title: 'Progress Bar', href: '/docs/components/progress-bar' },
      { title: 'Slider', href: '/docs/components/slider' },
      { title: 'Inputs & Switch', href: '/docs/components/input' },
      { title: 'Tabs', href: '/docs/components/tabs' },
      { title: 'Table', href: '/docs/components/table' },
      { title: 'Dialog / Modal', href: '/docs/components/dialog' },
      { title: 'Toast', href: '/docs/components/toast' },
      { title: 'Accordion', href: '/docs/components/accordion' },
    ],
  },
]

export const Sidebar: React.FC = () => {
  return (
    <aside className="docs-sidebar hidden lg:block">
      <nav aria-label="Documentation" className="docs-sidebar__nav">
        {sidebarNav.map((group) => (
          <section key={group.title} className="docs-sidebar__group" aria-labelledby={`sidebar-group-${group.title}`}>
            <h2 id={`sidebar-group-${group.title}`} className="docs-sidebar__title">{group.title}</h2>
            <div className="docs-sidebar__links">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="docs-sidebar__link"
                >
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className="sr-only">{item.badge}</span>
                  )}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </nav>
    </aside>
  )
}
