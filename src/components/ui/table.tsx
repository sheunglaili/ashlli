import React from 'react'

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  caption?: string
}

export const Table: React.FC<TableProps> = ({ children, caption, className = '', ...props }) => (
  <div className="w-full overflow-x-auto border border-rule rounded-card font-mono bg-paper">
    <table className={`w-full text-left text-sm-minus border-collapse ${className}`} {...props}>
      {caption && (
        <caption className="p-3 text-xs-plus text-ink-2 bg-paper border-b border-rule text-left font-medium">
          {caption}
        </caption>
      )}
      {children}
    </table>
  </div>
)

export const TableHeader: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ children, className = '', ...props }) => (
  <thead className={`bg-paper border-b border-rule text-xs uppercase tracking-wider text-ink font-bold ${className}`} {...props}>
    {children}
  </thead>
)

export const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ children, className = '', ...props }) => (
  <tbody className={`divide-y divide-rule text-ink ${className}`} {...props}>
    {children}
  </tbody>
)

export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ children, className = '', ...props }) => (
  <tr className={`hover:bg-paper transition-colors ${className}`} {...props}>
    {children}
  </tr>
)

export const TableHead: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>> = ({ children, className = '', ...props }) => (
  <th className={`p-3 font-bold border-r last:border-r-0 border-rule ${className}`} {...props}>
    {children}
  </th>
)

export const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = ({ children, className = '', ...props }) => (
  <td className={`p-3 border-r last:border-r-0 border-rule ${className}`} {...props}>
    {children}
  </td>
)
