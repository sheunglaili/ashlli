import type React from 'react'

export interface TocItem {
  id: string
  title: string
  level?: number
}

export interface TocProps {
  items: TocItem[]
}

export const Toc: React.FC<TocProps> = ({ items }) => {
  if (!items || items.length === 0) return null

  return (
    <aside className="docs-toc hidden xl:block" aria-label="On this page">
      <p className="docs-toc__title">On this page</p>
      <ul className="docs-toc__links">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? 'docs-toc__item docs-toc__item--nested' : 'docs-toc__item'}>
            <a
              href={`#${item.id}`}
              className="docs-toc__link"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
