import React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '../../../components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../components/ui/card'
import { sidebarNav } from '../../../components/docs/sidebar'
import { ArrowRight, Box } from '../../../components/ui/icons'

export const Route = createFileRoute('/docs/components/')({
  component: ComponentsDirectoryPage,
})

function ComponentsDirectoryPage() {
  const componentGroups = sidebarNav.filter(
    (g) => g.title === 'Core Archetypes' || g.title === 'Base Components'
  )

  return (
    <div className="space-y-8 max-w-4xl font-mono">
      <div className="space-y-2 border-b border-rule pb-6">
        <Badge symbol="◆">DIRECTORY</Badge>
        <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
          UI Component Library
        </h1>
        <p className="text-base-plus text-ink-2">
          Explore all 12+ monospaced components & archetypes designed according to design.md specifications.
        </p>
      </div>

      {componentGroups.map((group, groupIdx) => (
        <div key={groupIdx} className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink flex items-center gap-2">
            <Box className="w-5 h-5" />
            <span># {group.title}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {group.items.map((item, itemIdx) => (
              <Link key={itemIdx} to={item.href} className="text-decoration-none group">
                <Card className="h-full hover:border-ink transition-colors">
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm-plus group-hover:text-ink">
                        {item.title}
                      </CardTitle>
                      {item.badge && (
                        <span className="text-2xs px-1.5 py-0.2 rounded border border-rule bg-paper-2 text-ink-2 font-mono">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 text-sm-minus text-ink-2 flex items-center justify-between">
                    <span>View docs & code</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
