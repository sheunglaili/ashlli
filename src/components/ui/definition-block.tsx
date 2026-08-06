import React from 'react'

export interface DefinitionBlockProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  tag?: string
  className?: string
}

export const DefinitionBlock: React.FC<DefinitionBlockProps> = ({
  title,
  subtitle,
  children,
  tag = 'DEF',
  className = '',
}) => {
  return (
    <div
      className={`bg-paper border border-rule rounded-card overflow-hidden my-4 font-mono ${className}`}
    >
      <div className="flex items-center justify-between gap-2 border-b border-rule bg-paper p-5">
        <div className="flex items-center gap-2">
          <span className="text-2xs font-bold px-1.5 py-0.5 rounded bg-ink text-accent-ink tracking-wider">
            {tag}
          </span>
          <h4 className="font-bold text-base uppercase tracking-wider text-ink">{title}</h4>
        </div>
        {subtitle && <span className="text-xs-plus text-ink-2 font-normal">{subtitle}</span>}
      </div>
      <div className="p-5 text-sm text-ink-2 leading-relaxed">{children}</div>
    </div>
  )
}
