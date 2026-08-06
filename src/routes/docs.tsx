import React from 'react'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Sidebar } from '../components/docs/sidebar'

export const Route = createFileRoute('/docs')({
  component: DocsLayout,
})

function DocsLayout() {
  return (
    <div className="docs-shell">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="docs-main">
        <Outlet />
      </main>
    </div>
  )
}
