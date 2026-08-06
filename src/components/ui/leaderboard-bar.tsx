import React from 'react'
import { ProgressBar } from './progress-bar'

export interface LeaderboardItem {
  id: string
  label: string
  score: number // percentage 0-100 or metric
  formattedValue?: string
  color?: string
  badge?: string
}

export interface LeaderboardProps {
  title?: string
  subtitle?: string
  items: LeaderboardItem[]
  maxScore?: number
  className?: string
}

export const Leaderboard: React.FC<LeaderboardProps> = ({
  title,
  subtitle,
  items,
  maxScore = 100,
  className = '',
}) => {
  return (
    <div
      className={`border border-rule rounded-card overflow-hidden font-mono bg-paper ${className}`}
    >
      {(title || subtitle) && (
        <div className="bg-paper border-b border-rule p-4 flex items-center justify-between">
          <div>
            {title && <h4 className="font-bold text-sm-plus uppercase tracking-wider text-ink">{title}</h4>}
            {subtitle && <p className="text-xs-plus text-ink-2 mt-0.5">{subtitle}</p>}
          </div>
          <span className="text-2xs-plus px-2 py-0.5 rounded border border-rule bg-paper text-ink-2 font-mono">
            BENCHMARK
          </span>
        </div>
      )}
      <div className="divide-y divide-rule">
        {items.map((item) => {
          return (
            <div key={item.id} className="grid grid-cols-[140px_1fr_80px] items-center gap-3 px-4 py-2.5 text-sm-minus">
              <div className="flex items-center gap-2 truncate">
                <span className="font-medium text-ink truncate">{item.label}</span>
                {item.badge && (
                  <span className="text-2xs px-1.5 py-0.2 rounded border border-rule text-ink-2">
                    {item.badge}
                  </span>
                )}
              </div>
              <ProgressBar
                value={item.score}
                max={maxScore}
                color={item.color}
              />
              <div className="text-right font-mono font-semibold text-ink">
                {item.formattedValue || `${item.score}`}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
