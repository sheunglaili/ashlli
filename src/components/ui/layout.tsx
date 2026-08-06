/* Hallmark · component: layout primitives · genre: modern-minimal · theme: studied-DNA
 * states: non-interactive layout primitives · contrast: pass (46–50)
 */
import type React from 'react'

type ElementTag = 'div' | 'section' | 'main' | 'article' | 'aside' | 'nav'

type LayoutProps = React.HTMLAttributes<HTMLElement> & {
  as?: ElementTag
}

type Gap = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const gapClass: Record<Gap, string> = {
  '2xs': 'gap-2xs',
  xs: 'gap-xs',
  sm: 'gap-sm',
  md: 'gap-md',
  lg: 'gap-lg',
  xl: 'gap-xl',
  '2xl': 'gap-2xl',
}

export interface ContainerProps extends LayoutProps {
  size?: 'reading' | 'content' | 'wide'
}

export function Container({ as: Tag = 'div', size = 'content', className = '', ...props }: ContainerProps) {
  const sizeClass = {
    reading: 'max-w-[43rem]',
    content: 'max-w-4xl',
    wide: 'max-w-6xl',
  }[size]

  return <Tag className={`mx-auto w-full min-w-0 px-md ${sizeClass} ${className}`} {...props} />
}

export interface StackProps extends LayoutProps {
  gap?: Gap
}

export function Stack({ as: Tag = 'div', gap = 'md', className = '', ...props }: StackProps) {
  return <Tag className={`flex min-w-0 flex-col ${gapClass[gap]} ${className}`} {...props} />
}

export interface ClusterProps extends LayoutProps {
  gap?: Gap
  align?: 'start' | 'center' | 'end'
}

export function Cluster({ as: Tag = 'div', gap = 'sm', align = 'center', className = '', ...props }: ClusterProps) {
  const alignClass = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  }[align]

  return <Tag className={`flex flex-wrap ${alignClass} ${gapClass[gap]} ${className}`} {...props} />
}

export interface GridProps extends LayoutProps {
  columns?: 1 | 2 | 3
  gap?: Gap
}

export function Grid({ as: Tag = 'div', columns = 2, gap = 'md', className = '', ...props }: GridProps) {
  const columnClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
  }[columns]

  return <Tag className={`grid min-w-0 ${columnClass} ${gapClass[gap]} ${className}`} {...props} />
}

export type SectionProps = LayoutProps

export function Section({ as: Tag = 'section', className = '', ...props }: SectionProps) {
  return <Tag className={`border-b border-rule bg-paper py-2xl sm:py-3xl ${className}`} {...props} />
}
