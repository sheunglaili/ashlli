import React, { useState, useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Search, X, Layers, Box, Terminal, ChevronRight } from '../ui/icons'
import { sidebarNav } from './sidebar'

export interface CommandMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) onClose()
        else {
          // Open menu via trigger
        }
      }
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const allItems = sidebarNav.flatMap((group) =>
    group.items.map((item) => ({
      ...item,
      groupTitle: group.title,
    }))
  )

  const filteredItems = query.trim()
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.groupTitle.toLowerCase().includes(query.toLowerCase())
      )
    : allItems

  const handleSelect = (href: string) => {
    navigate({ to: href })
    onClose()
    setQuery('')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/40 backdrop-blur-xs font-mono animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-paper border border-rule rounded-card shadow-2xl w-full max-w-xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-3.5 border-b border-rule bg-paper">
          <Search className="w-4 h-4 text-ink-2 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Type a component, archetype, or token..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none font-mono text-sm-plus text-ink placeholder:text-ink-2"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-ink-2 hover:text-ink hover:bg-paper-2 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-rule/50">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-sm text-ink-2">
              No matching documentation or components found.
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(item.href)}
                className="w-full p-2.5 rounded text-left flex items-center justify-between gap-3 text-sm hover:bg-paper transition-colors cursor-pointer text-ink group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xs-plus px-1.5 py-0.5 rounded border border-rule bg-transparent text-ink-2 uppercase font-semibold">
                    {item.groupTitle}
                  </span>
                  <span className="font-medium group-hover:font-bold">{item.title}</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-ink-2 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-2.5 px-4 bg-paper border-t border-rule flex items-center justify-between text-xs text-ink-2">
          <span>Navigate with click or Enter</span>
          <span className="font-semibold">ashlli/ui search</span>
        </div>
      </div>
    </div>
  )
}
