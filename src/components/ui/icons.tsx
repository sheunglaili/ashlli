import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

const defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const Search: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

export const X: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

export const Layers: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
  </svg>
)

export const Box: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
)

export const Terminal: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </svg>
)

export const ChevronRight: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
)

export const Copy: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
)

export const Check: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export const Eye: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export const Code: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

export const Sliders: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <line x1="4" x2="4" y1="21" y2="14" />
    <line x1="4" x2="4" y1="10" y2="3" />
    <line x1="12" x2="12" y1="21" y2="12" />
    <line x1="12" x2="12" y1="8" y2="3" />
    <line x1="20" x2="20" y1="21" y2="16" />
    <line x1="20" x2="20" y1="12" y2="3" />
    <line x1="2" x2="6" y1="14" y2="14" />
    <line x1="10" x2="14" y1="8" y2="8" />
    <line x1="18" x2="22" y1="16" y2="16" />
  </svg>
)

export const Github: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export const Sparkles: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
)

export const BookOpen: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)

export const BarChart3: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
)

export const Settings: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export const ShieldCheck: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const CheckCircle: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

export const CheckCircle2: React.FC<IconProps> = CheckCircle

export const AlertTriangle: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" x2="12" y1="9" y2="13" />
    <line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
)

export const ShieldAlert: React.FC<IconProps> = AlertTriangle

export const Info: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="16" y2="12" />
    <line x1="12" x2="12.01" y1="8" y2="8" />
  </svg>
)

export const AlertCircle: React.FC<IconProps> = Info

export const Cpu: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <rect width="12" height="12" x="6" y="6" rx="2" />
    <line x1="9" x2="9" y1="2" y2="6" />
    <line x1="15" x2="15" y1="2" y2="6" />
    <line x1="9" x2="9" y1="18" y2="22" />
    <line x1="15" x2="15" y1="18" y2="22" />
    <line x1="2" x2="6" y1="9" y2="9" />
    <line x1="2" x2="6" y1="15" y2="15" />
    <line x1="18" x2="22" y1="9" y2="9" />
    <line x1="18" x2="22" y1="15" y2="15" />
  </svg>
)

export const Zap: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

export const Activity: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
)

export const ArrowRight: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

export const ArrowLeft: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
)

export const Download: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
)

export const Send: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <line x1="22" x2="11" y1="2" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

export const Shield: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

export const Palette: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.72 1.7-1.65 0-.43-.17-.83-.44-1.13-.27-.3-.43-.7-.43-1.14 0-.93.75-1.68 1.68-1.68H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9z" />
  </svg>
)

export const Type: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <polyline points="4 7 4 4 20 4 20 7" />
    <line x1="9" x2="15" y1="20" y2="20" />
    <line x1="12" x2="12" y1="4" y2="20" />
  </svg>
)

export const Grid: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <rect width="7" height="7" x="3" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="14" rx="1" />
    <rect width="7" height="7" x="3" y="14" rx="1" />
  </svg>
)

export const Sun: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
)

export const Moon: React.FC<IconProps> = ({ className = 'w-4 h-4', ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
)
