import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'wash' | 'outline'
}

export const Card: React.FC<CardProps> = ({ children, variant = 'default', className = '', ...props }) => {
  let bgStyle = 'bg-paper-2'
  if (variant === 'wash') bgStyle = 'bg-paper-2'
  if (variant === 'outline') bgStyle = 'bg-transparent'

  return (
    <div
      className={`border border-rule rounded-card font-mono overflow-hidden ${bgStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`p-5 border-b border-rule bg-paper ${className}`} {...props}>
    {children}
  </div>
)

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, className = '', ...props }) => (
  <h3 className={`font-bold text-base-plus text-ink uppercase tracking-wide ${className}`} {...props}>
    {children}
  </h3>
)

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <p className={`text-sm-minus text-ink-2 mt-1 font-normal ${className}`} {...props}>
    {children}
  </p>
)

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`p-5 text-sm text-ink ${className}`} {...props}>
    {children}
  </div>
)

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`p-4 border-t border-rule bg-paper flex items-center justify-between gap-3 text-sm-minus ${className}`} {...props}>
    {children}
  </div>
)
