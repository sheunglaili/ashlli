import React, { useState } from 'react'

export interface AccordionItem {
  id: string
  title: string
  subtitle?: string
  content: React.ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  defaultOpenId?: string
  allowMultiple?: boolean
  className?: string
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  allowMultiple = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenId ? [defaultOpenId] : [])

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div
      className={`border border-rule rounded-card overflow-hidden font-mono divide-y divide-rule bg-paper ${className}`}
    >
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        return (
          <div key={item.id} className="transition-colors">
            <button
              onClick={() => toggle(item.id)}
              className="w-full p-4 bg-paper hover:bg-paper-2 flex items-center justify-between gap-3 text-left cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm-minus text-ink-2">{isOpen ? '[-]' : '[+]'}</span>
                <span className="font-bold text-sm-plus uppercase tracking-wide text-ink">
                  {item.title}
                </span>
                {item.subtitle && <span className="text-xs-plus text-ink-2">({item.subtitle})</span>}
              </div>
              <span className="text-2xs-plus px-1.5 py-0.5 rounded border border-rule text-ink-2">
                {isOpen ? 'EXPANDED' : 'COLLAPSED'}
              </span>
            </button>
            {isOpen && <div className="p-5 text-sm text-ink-2 leading-relaxed">{item.content}</div>}
          </div>
        )
      })}
    </div>
  )
}
