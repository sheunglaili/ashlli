import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'success' | 'warning' | 'info' | 'monochrome'
  symbol?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  symbol = '◆',
  className = '',
  ...props
}) => {
  let badgeStyle = 'bg-transparent border-rule text-ink'
  let symbolStyle = 'text-ink-2'

  if (variant === 'outline') {
    badgeStyle = 'bg-transparent border-rule text-ink-2'
  } else if (variant === 'success') {
    badgeStyle = 'bg-transparent border-success text-success'
    symbolStyle = 'text-current'
  } else if (variant === 'warning') {
    badgeStyle = 'bg-transparent border-warning text-warning'
    symbolStyle = 'text-current'
  } else if (variant === 'info') {
    badgeStyle = 'bg-transparent border-info text-info'
    symbolStyle = 'text-current'
  } else if (variant === 'monochrome') {
    badgeStyle = 'bg-ink border-ink text-accent-ink'
    symbolStyle = 'text-accent-ink'
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-mono font-medium rounded-full border transition-colors ${badgeStyle} ${className}`}
      {...props}
    >
      {symbol && (
        <span className={symbolStyle}>
          {symbol}
        </span>
      )}
      <span>{children}</span>
    </div>
  )
}
