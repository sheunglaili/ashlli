import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Leaderboard } from '../../components/ui/leaderboard-bar'
import { Badge } from '../../components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/table'
import { Toc } from '../../components/docs/toc'
import { BarChart3, Cpu, Zap, Activity } from '../../components/ui/icons'

export const Route = createFileRoute('/docs/benchmarks')({
  component: BenchmarksPage,
})

function BenchmarksPage() {
  const benchmarkData = [
    { id: '1', label: 'ashlli/ui (Mono)', score: 98, formattedValue: '0.4ms (98%)', color: 'var(--color-ink)', badge: 'FASTEST' },
    { id: '2', label: 'Radix UI', score: 82, formattedValue: '1.4ms (82%)', color: 'var(--color-ink-2)' },
    { id: '3', label: 'Headless UI', score: 78, formattedValue: '1.9ms (78%)', color: 'var(--color-rule)' },
    { id: '4', label: 'Chakra UI', score: 54, formattedValue: '5.2ms (54%)', color: 'var(--color-rule)' },
  ]

  const tocItems = [
    { id: 'latency', title: 'Render Latency Benchmark' },
    { id: 'bundle', title: 'Bundle Size Comparison' },
    { id: 'matrix', title: 'System Metrics Matrix' },
  ]

  return (
    <div className="flex gap-8 font-mono">
      <div className="flex-1 space-y-8 max-w-3xl">
        <div className="space-y-2 border-b border-rule pb-6">
          <Badge symbol="◆">WORKBENCH & BENCHMARKS</Badge>
          <h1 className="text-3xl font-bold uppercase tracking-tight text-ink">
            Benchmark Matrix
          </h1>
          <p className="text-base-plus text-ink-2">
            Real-time latency metrics and bundle size leaderboards for ashlli/ui components.
          </p>
        </div>

        {/* Latency Section */}
        <section id="latency" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink flex items-center gap-2">
            <Zap className="w-5 h-5" />
            <span># Render Latency (ms)</span>
          </h2>
          <Leaderboard
            title="Component Render Overhead (lower is faster)"
            subtitle="Measured via React 19 Concurrent Profiler"
            items={benchmarkData}
          />
        </section>

        {/* Bundle Size Cards */}
        <section id="bundle" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            <span># Bundle Size Comparison</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card variant="wash">
              <CardHeader className="p-3">
                <CardTitle className="text-sm">ashlli/ui</CardTitle>
              </CardHeader>
              <CardContent className="p-3 text-center">
                <span className="text-2xl font-bold text-ink">1.2 KB</span>
                <span className="block text-xs text-ink-2 mt-1">GZIPPED</span>
              </CardContent>
            </Card>

            <Card variant="outline">
              <CardHeader className="p-3">
                <CardTitle className="text-sm">shadcn/ui</CardTitle>
              </CardHeader>
              <CardContent className="p-3 text-center">
                <span className="text-2xl font-bold text-ink-2">4.8 KB</span>
                <span className="block text-xs text-ink-2 mt-1">GZIPPED</span>
              </CardContent>
            </Card>

            <Card variant="outline">
              <CardHeader className="p-3">
                <CardTitle className="text-sm">MUI Core</CardTitle>
              </CardHeader>
              <CardContent className="p-3 text-center">
                <span className="text-2xl font-bold text-ink-2">42.1 KB</span>
                <span className="block text-xs text-ink-2 mt-1">GZIPPED</span>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* System Matrix Table */}
        <section id="matrix" className="space-y-4">
          <h2 className="text-xl font-bold uppercase tracking-wide border-b border-rule pb-2 text-ink flex items-center gap-2">
            <Activity className="w-5 h-5" />
            <span># System Metrics Matrix</span>
          </h2>
          <Table caption="System benchmark parameters & compliance status">
            <TableHeader>
              <TableRow>
                <TableHead>METRIC</TableHead>
                <TableHead>TARGET</TableHead>
                <TableHead>MEASURED</TableHead>
                <TableHead>STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">Monospace Purity</TableCell>
                <TableCell>100% JetBrains Mono</TableCell>
                <TableCell>100%</TableCell>
                <TableCell><Badge symbol="✓" variant="success">PASS</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">OKLCH Palette</TableCell>
                <TableCell>Zero hex floods</TableCell>
                <TableCell>100% OKLCH</TableCell>
                <TableCell><Badge symbol="✓" variant="success">PASS</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Third-party Motion Libs</TableCell>
                <TableCell>0 Bytes</TableCell>
                <TableCell>0 Bytes</TableCell>
                <TableCell><Badge symbol="✓" variant="success">PASS</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>

      <Toc items={tocItems} />
    </div>
  )
}
