import React, { useState } from 'react'
import { Copy, Check } from './icons'

export interface CodePillProps {
  command: string
  label?: string
  className?: string
}

export const CodePill: React.FC<CodePillProps> = ({ command, label = 'npx', className = '' }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={`inline-flex items-center justify-between gap-3 bg-paper-2 border border-rule rounded-card px-3.5 py-2 font-mono text-sm-minus text-ink select-all transition-colors hover:border-ink-2 ${className}`}
    >
      <div className="flex items-center gap-2 overflow-hidden">
        <span className="text-2xs-plus text-ink-2 bg-paper border border-rule px-1.5 py-0.5 rounded uppercase font-semibold shrink-0">
          {label}
        </span>
        <code className="truncate text-ink font-mono">{command}</code>
      </div>
      <button
        onClick={handleCopy}
        className="p-1 rounded text-ink-2 hover:text-ink hover:bg-paper transition-colors shrink-0 cursor-pointer"
        title="Copy to clipboard"
        aria-label="Copy command"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
      </button>
    </div>
  )
}
