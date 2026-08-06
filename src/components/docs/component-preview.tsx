import React, { useState } from 'react'
import { Copy, Check, Eye, Code, Sliders } from '../ui/icons'

export interface ComponentPreviewProps {
  title: string
  description?: string
  code: string
  children: React.ReactNode
  controls?: React.ReactNode
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  title,
  description,
  code,
  children,
  controls,
}) => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-8 border border-rule rounded-card overflow-hidden font-mono bg-paper">
      {/* Header Bar */}
      <div className="bg-paper border-b border-rule p-3 px-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-sm-plus uppercase tracking-wider text-ink">{title}</h3>
          {description && <p className="text-xs-plus text-ink-2 mt-0.5">{description}</p>}
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded border border-rule p-0.5 bg-paper">
            <button
              onClick={() => setTab('preview')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded cursor-pointer transition-colors ${
                tab === 'preview'
                  ? 'bg-ink text-accent-ink'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              <Eye className="w-3 h-3" />
              <span>Preview</span>
            </button>
            <button
              onClick={() => setTab('code')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded cursor-pointer transition-colors ${
                tab === 'code'
                  ? 'bg-ink text-accent-ink'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              <Code className="w-3 h-3" />
              <span>Code</span>
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="p-1.5 rounded border border-rule bg-paper text-ink-2 hover:text-ink transition-colors cursor-pointer"
            title="Copy code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Controls Bar if provided */}
      {controls && tab === 'preview' && (
        <div className="bg-paper border-b border-rule p-3 px-4 flex flex-wrap items-center gap-4 text-sm-minus">
          <div className="flex items-center gap-1.5 text-ink-2 font-bold text-xs uppercase tracking-wider shrink-0">
            <Sliders className="w-3.5 h-3.5" />
            <span>Controls:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">{controls}</div>
        </div>
      )}

      {/* Main Content Area */}
      {tab === 'preview' ? (
        <div className="p-4 sm:p-6 bg-[radial-gradient(var(--color-rule)_1px,transparent_1px)] [background-size:16px_16px] bg-paper">
          <div className="w-full flex items-center justify-center">{children}</div>
        </div>
      ) : (
        <div className="p-4 sm:p-6 bg-ink text-accent-ink overflow-x-auto text-sm-minus font-mono leading-relaxed select-all">
          <pre className="m-0">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  )
}
