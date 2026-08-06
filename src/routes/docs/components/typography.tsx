import { createFileRoute } from '@tanstack/react-router'
import { Toc } from '../../../components/docs/toc'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Badge } from '../../../components/ui/badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { Heading, Text } from '../../../components/ui/typography'

export const Route = createFileRoute('/docs/components/typography')({
  component: TypographyDocPage,
})

function TypographyDocPage() {
  const codeSnippet = `<div className="space-y-6">
  <div>
    <Text size="caption" tone="muted">DISPLAY</Text>
    <Heading as="h3" size="display" className="mt-2">A clear page title</Heading>
  </div>
  <div>
    <Text size="caption" tone="muted">SECTION</Text>
    <Heading as="h3" size="section" className="mt-2">A purposeful section heading</Heading>
  </div>
  <Text tone="muted">Body copy uses a steady reading measure and muted tone.</Text>
</div>`

  return (
    <div className="docs-article-layout">
      <article className="docs-article">
        <header>
          <Badge symbol="◆" variant="outline">FOUNDATION</Badge>
          <Heading as="h1" size="display" className="mt-4">Typography</Heading>
          <Text tone="muted" className="mt-4 max-w-[39rem]">
            A small set of type roles for building a clear, repeatable hierarchy across projects.
          </Text>
        </header>

        <section id="roles" className="docs-section">
          <Heading as="h2" size="section">Type roles</Heading>
          <ComponentPreview title="Heading and text" code={codeSnippet}>
            <div className="w-full space-y-6">
              <div>
                <Text size="caption" tone="muted">DISPLAY</Text>
                <Heading as="h3" size="display" className="mt-2">A clear page title</Heading>
              </div>
              <div>
                <Text size="caption" tone="muted">SECTION</Text>
                <Heading as="h3" size="section" className="mt-2">A purposeful section heading</Heading>
              </div>
              <Text tone="muted">
                Body copy uses a steady reading measure and muted tone when it supports—not competes with—the main content.
              </Text>
            </div>
          </ComponentPreview>
        </section>

        <section id="props" className="docs-section">
          <Heading as="h2" size="section">Props Reference</Heading>
          <Table caption="Heading Component API">
            <TableHeader>
              <TableRow>
                <TableHead>PROP</TableHead>
                <TableHead>TYPE</TableHead>
                <TableHead>DEFAULT</TableHead>
                <TableHead>DESCRIPTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">as</TableCell>
                <TableCell className="text-sky-700">"h1" | "h2" | "h3" | "h4" | "h5" | "h6"</TableCell>
                <TableCell>"h2"</TableCell>
                <TableCell className="text-ink-2">Semantic heading tag.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">size</TableCell>
                <TableCell className="text-sky-700">"display" | "section" | "subsection"</TableCell>
                <TableCell>"section"</TableCell>
                <TableCell className="text-ink-2">Type scale step.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table caption="Text Component API">
            <TableHeader>
              <TableRow>
                <TableHead>PROP</TableHead>
                <TableHead>TYPE</TableHead>
                <TableHead>DEFAULT</TableHead>
                <TableHead>DESCRIPTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">as</TableCell>
                <TableCell className="text-sky-700">"p" | "span" | "div"</TableCell>
                <TableCell>"p"</TableCell>
                <TableCell className="text-ink-2">Semantic text tag.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">size</TableCell>
                <TableCell className="text-sky-700">"body" | "small" | "caption"</TableCell>
                <TableCell>"body"</TableCell>
                <TableCell className="text-ink-2">Type scale step.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">tone</TableCell>
                <TableCell className="text-sky-700">"default" | "muted"</TableCell>
                <TableCell>"default"</TableCell>
                <TableCell className="text-ink-2">Muted renders in ink-2.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </article>

      <Toc items={[{ id: 'roles', title: 'Type roles' }, { id: 'props', title: 'Props Reference' }]} />
    </div>
  )
}
