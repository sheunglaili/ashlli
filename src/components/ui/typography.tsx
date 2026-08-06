/* Hallmark · component: typography primitives · genre: modern-minimal · theme: studied-DNA
 * states: non-interactive typography primitives · contrast: pass (46–50)
 */
import type React from 'react'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TextTag = 'p' | 'span' | 'div'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingTag
  size?: 'display' | 'section' | 'subsection'
}

export function Heading({ as: Tag = 'h2', size = 'section', className = '', ...props }: HeadingProps) {
  const sizeClass = {
    display: 'text-[clamp(1.8rem,3.5vw,var(--text-display))] leading-[1.08] tracking-[-0.06em]',
    section: 'text-lg leading-[1.25] tracking-[-0.03em]',
    subsection: 'text-base leading-[1.4] tracking-[-0.02em]',
  }[size]

  return <Tag className={`min-w-0 font-bold text-ink ${sizeClass} ${className}`} {...props} />
}

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextTag
  tone?: 'default' | 'muted'
  size?: 'body' | 'small' | 'caption'
}

export function Text({ as: Tag = 'p', tone = 'default', size = 'body', className = '', ...props }: TextProps) {
  const toneClass = tone === 'muted' ? 'text-ink-2' : 'text-ink'
  const sizeClass = {
    body: 'text-base leading-7',
    small: 'text-sm leading-6',
    caption: 'text-xs leading-5',
  }[size]

  return <Tag className={`min-w-0 ${toneClass} ${sizeClass} ${className}`} {...props} />
}
