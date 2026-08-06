import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export const Input: React.FC<InputProps> = ({ label, error, hint, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 font-mono text-sm-minus w-full">
      {label && (
        <label className="font-semibold text-sm-minus text-ink uppercase tracking-wider">
          {label}
        </label>
      )}
      <input
        className={`bg-paper-2 border border-rule rounded-input px-3 py-2 text-ink font-mono placeholder:text-ink-2 focus:outline-none focus:border-ink transition-colors ${
          error ? 'border-error' : ''
        } ${className}`}
        {...props}
      />
      {hint && !error && <span className="text-xs text-ink-2">{hint}</span>}
      {error && <span className="text-xs text-error font-medium">{error}</span>}
    </div>
  )
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea: React.FC<TextareaProps> = ({ label, error, className = '', ...props }) => (
  <div className="flex flex-col gap-1.5 font-mono text-sm-minus w-full">
    {label && (
      <label className="font-semibold text-sm-minus text-ink uppercase tracking-wider">
        {label}
      </label>
    )}
    <textarea
      className={`bg-paper-2 border border-rule rounded-input p-3 text-ink font-mono min-h-[100px] placeholder:text-ink-2 focus:outline-none focus:border-ink transition-colors ${
        error ? 'border-error' : ''
      } ${className}`}
      {...props}
    />
    {error && <span className="text-xs text-error font-medium">{error}</span>}
  </div>
)

export interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  className?: string
}

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, label, className = '' }) => (
  <label className={`inline-flex items-center gap-3 cursor-pointer font-mono text-sm-minus select-none ${className}`}>
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex items-center h-5 w-9 shrink-0 cursor-pointer rounded-full border border-rule transition-colors duration-[200ms] ease-in-out focus:outline-none ${
        checked ? 'bg-ink border-ink' : 'bg-paper-2'
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-paper shadow-sm ring-0 transition duration-[200ms] ease-in-out ${
          checked ? 'translate-x-4 bg-paper' : 'translate-x-0 bg-ink-2'
        }`}
      />
    </button>
    {label && <span className="text-ink font-medium">{label}</span>}
  </label>
)
