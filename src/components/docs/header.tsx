import React, { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from '../ui/button'
import { Sun, Moon } from '../ui/icons'

export const Header: React.FC = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
    }
    return false
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <header className="w-full border-b border-rule font-mono">
      <div className="max-w-[860px] mx-auto px-6 h-12 flex items-center justify-between">
        <Link to="/" className="font-bold text-base tracking-tight text-ink no-underline">
          ashlli<span className="text-ink-2">/ui</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm-minus text-ink-2">
          <Link to="/docs" className="hover:text-ink [&.active]:text-ink no-underline">
            Docs
          </Link>
          <Link to="/docs/components" className="hover:text-ink [&.active]:text-ink no-underline">
            Components
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink no-underline"
          >
            GitHub
          </a>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDark(!dark)}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </nav>
      </div>
    </header>
  )
}
