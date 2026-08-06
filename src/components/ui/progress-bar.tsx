import React from 'react'

export interface ProgressBarProps {
  value: number
  max?: number
  color?: string
  label?: string
  showValue?: boolean
  className?: string
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  color,
  label,
  showValue = false,
  className = '',
}) => {
  const percent = Math.min(100, Math.max(0, (value / max) * 100))
  const barColor = color || 'var(--color-ink)'

  return (
    <div className={`w-full ${className}`}>
      {(label || showValue) && (
        <div className="flex items-center justify-between gap-2 mb-1.5">
          {label && (
            <span className="text-xs font-mono text-ink-2 uppercase tracking-wider">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-xs font-mono font-semibold text-ink">
              {`${Math.round(percent)}%`}
            </span>
          )}
        </div>
      )}
      <div className="h-5 bg-paper rounded border border-rule overflow-hidden p-0.5 relative">
        <div
          className="h-full rounded-sm transition-all duration-[320ms] ease-out"
          style={{
            width: `${percent}%`,
            backgroundColor: barColor,
          }}
        />
      </div>
    </div>
  )
}
