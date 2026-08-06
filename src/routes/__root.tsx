import React, { useState } from 'react'
import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import { Header } from '../components/docs/header'
import { CommandMenu } from '../components/docs/command-menu'
import { ToastProvider } from '../components/ui/toast'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'ashlli/ui — Shared Technical Design System & Components',
      },
      {
        name: 'description',
        content:
          'Stark monospaced technical component library & design system following design.md specs. Built with TanStack Router and React 19.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const [commandMenuOpen, setCommandMenuOpen] = useState(false)

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ToastProvider>
          <div className="min-h-screen flex flex-col bg-paper text-ink font-mono">
            <Header onOpenCommandMenu={() => setCommandMenuOpen(true)} />
            <div className="flex-1">{children}</div>
            <CommandMenu isOpen={commandMenuOpen} onClose={() => setCommandMenuOpen(false)} />
          </div>
        </ToastProvider>

        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'TanStack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
