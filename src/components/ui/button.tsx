import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  ...props
}) => {
  let baseStyles =
    'inline-flex items-center justify-center font-mono font-medium transition-all duration-[180ms] ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none'

  let variantStyles = ''
  if (variant === 'primary') {
    // Primary per design.md: Solid ink background, white text, radius 8px, padding 0.7rem 1.4rem
    variantStyles =
      'bg-ink text-accent-ink border border-ink rounded-card hover:opacity-88 active:scale-[0.98]'
  } else if (variant === 'secondary') {
    // Secondary / Filter Chips per design.md: Ghost/outlined hairline, pill radius, hover fills ink
    variantStyles =
      'bg-transparent text-ink border border-rule rounded-pill hover:bg-ink hover:text-accent-ink hover:border-ink'
  } else if (variant === 'outline') {
    variantStyles =
      'bg-transparent text-ink border border-rule rounded-card hover:bg-paper-2'
  } else if (variant === 'ghost') {
    variantStyles =
      'bg-transparent text-ink border border-transparent rounded-card hover:bg-paper-2'
  } else if (variant === 'destructive') {
    variantStyles =
      'bg-error text-accent-ink border border-error rounded-card hover:bg-error active:scale-[0.98]'
  }

  let sizeStyles = ''
  if (size === 'sm') {
    sizeStyles = 'text-xs-plus px-2.5 py-1 gap-1.5'
  } else if (size === 'md') {
    sizeStyles = variant === 'secondary' ? 'text-sm-minus px-3.5 py-1.5 gap-1.5' : 'text-sm px-5 py-2.5 gap-2'
  } else if (size === 'lg') {
    sizeStyles = 'text-base-plus px-6 py-3 gap-2.5'
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props}>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </button>
  )
}
