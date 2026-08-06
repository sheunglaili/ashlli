import React, { useState } from 'react'

export interface TabItem {
  id: string
  label: string
  icon?: React.ReactNode
  badge?: string
  content: React.ReactNode
}

export interface TabsProps {
  items: TabItem[]
  defaultTabId?: string
  variant?: 'underline' | 'pills' | 'segmented'
  className?: string
  onChange?: (tabId: string) => void
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultTabId,
  variant = 'segmented',
  className = '',
  onChange,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTabId || items[0]?.id)

  const handleSelect = (id: string) => {
    setActiveTab(id)
    if (onChange) onChange(id)
  }

  const activeContent = items.find((t) => t.id === activeTab)?.content

  return (
    <div className={`font-mono ${className}`}>
      <div className="flex items-center gap-1 border-b border-rule pb-px">
        {items.map((tab) => {
          const isActive = tab.id === activeTab
          if (variant === 'segmented') {
            return (
              <button
                key={tab.id}
                onClick={() => handleSelect(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-sm-minus font-mono font-medium rounded-t border-t border-x transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-paper border-rule text-ink border-b-paper -mb-px z-10'
                    : 'bg-transparent border-transparent text-ink-2 hover:text-ink'
                }`}
              >
                {tab.icon && <span className="w-3.5 h-3.5">{tab.icon}</span>}
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className="text-2xs px-1.5 py-0.2 rounded border border-rule bg-transparent text-ink-2">
                    {tab.badge}
                  </span>
                )}
              </button>
            )
          }

          if (variant === 'pills') {
            return (
              <button
                key={tab.id}
                onClick={() => handleSelect(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-sm-minus font-mono font-medium rounded-full border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-ink border-ink text-accent-ink'
                    : 'bg-transparent border-rule text-ink-2 hover:text-ink'
                }`}
              >
                {tab.icon && <span className="w-3.5 h-3.5">{tab.icon}</span>}
                <span>{tab.label}</span>
              </button>
            )
          }

          // underline default
          return (
            <button
              key={tab.id}
              onClick={() => handleSelect(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm-minus font-mono font-medium border-b-2 transition-colors cursor-pointer ${
                isActive
                  ? 'border-ink text-ink font-bold'
                  : 'border-transparent text-ink-2 hover:text-ink'
              }`}
            >
              {tab.icon && <span className="w-3.5 h-3.5">{tab.icon}</span>}
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>
      <div className="pt-4">{activeContent}</div>
    </div>
  )
}
