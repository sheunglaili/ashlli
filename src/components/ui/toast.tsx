import React, { createContext, useContext, useState } from 'react'
import { X, CheckCircle, AlertTriangle, Info, AlertCircle } from './icons'

export interface ToastMessage {
  id: string
  title: string
  description?: string
  type?: 'success' | 'warning' | 'error' | 'info'
}

interface ToastContextType {
  toast: (msg: Omit<ToastMessage, 'id'>) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const toast = (msg: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { ...msg, id }
    setToasts((prev) => [...prev, newToast])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 4000)
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none font-mono">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto bg-paper border border-rule shadow-lg rounded-card p-3.5 flex items-start justify-between gap-3 text-sm-minus animate-in slide-in-from-bottom-2 duration-[200ms]"
          >
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 shrink-0 text-ink font-bold text-xs">
                ◆
              </span>
              <div>
                <h5 className="font-bold text-ink">{t.title}</h5>
                {t.description && <p className="text-xs-plus text-ink-2 mt-0.5">{t.description}</p>}
              </div>
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="p-1 rounded text-ink-2 hover:text-ink hover:bg-paper-2 transition-colors cursor-pointer shrink-0"
              aria-label="Dismiss toast"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
