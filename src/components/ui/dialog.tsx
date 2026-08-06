import React, { useEffect } from 'react'
import { X } from './icons'

export interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  className = '',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-[200ms]">
      <div
        className={`bg-paper border border-rule rounded-card shadow-xl w-full max-w-lg overflow-hidden font-mono text-ink animate-in zoom-in-95 duration-[200ms] ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-rule bg-paper flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xs px-1.5 py-0.5 rounded bg-ink text-accent-ink font-bold">
                ◆ DIALOG
              </span>
              <h3 className="font-bold text-base uppercase tracking-wider text-ink">{title}</h3>
            </div>
            {subtitle && <p className="text-xs-plus text-ink-2 mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-ink-2 hover:text-ink hover:bg-paper transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 text-sm leading-relaxed">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="p-4 border-t border-rule bg-paper flex items-center justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
