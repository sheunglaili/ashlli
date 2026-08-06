import { createFileRoute } from '@tanstack/react-router'
import { Toc } from '../../../components/docs/toc'
import { ComponentPreview } from '../../../components/docs/component-preview'
import { Badge } from '../../../components/ui/badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table'
import { Container, Cluster, Grid, Section, Stack } from '../../../components/ui/layout'
import { Heading, Text } from '../../../components/ui/typography'

export const Route = createFileRoute('/docs/components/layout')({
  component: LayoutDocPage,
})

function LayoutDocPage() {
  const primitivesCode = `<Container size="reading" className="border border-rule p-md">
  <Stack gap="md">
    <Text size="caption" tone="muted">STACK · VERTICAL RHYTHM</Text>
    <Cluster gap="xs">
      <span className="border border-rule px-2 py-1 text-xs">CLUSTER</span>
      <span className="border border-rule px-2 py-1 text-xs">INLINE</span>
    </Cluster>
    <Grid columns={3} gap="xs">
      <div className="border border-rule p-2 text-center text-xs text-ink-2">ONE</div>
      <div className="border border-rule p-2 text-center text-xs text-ink-2">TWO</div>
      <div className="border border-rule p-2 text-center text-xs text-ink-2">THREE</div>
    </Grid>
  </Stack>
</Container>`
  const sectionCode = `<Section className="border border-rule px-md py-xl sm:py-xl">
  <Text size="small" tone="muted">
    Use <code>Section</code> to establish a deliberate break between major page ideas.
  </Text>
</Section>`

  return (
    <div className="docs-article-layout">
      <article className="docs-article">
        <header>
          <Badge symbol="◆" variant="outline">FOUNDATION</Badge>
          <Heading as="h1" size="display" className="mt-4">Layout</Heading>
          <Text tone="muted" className="mt-4 max-w-[39rem]">
            Spatial primitives for composing pages with consistent widths, rhythm, alignment, and responsive structure.
          </Text>
        </header>

        <section id="primitives" className="docs-section">
          <Heading as="h2" size="section">Layout primitives</Heading>
          <ComponentPreview title="Stack, cluster, and grid" code={primitivesCode}>
            <Container size="reading" className="border border-rule p-md">
              <Stack gap="md">
                <Text size="caption" tone="muted">STACK · VERTICAL RHYTHM</Text>
                <Cluster gap="xs">
                  <span className="border border-rule px-2 py-1 text-xs">CLUSTER</span>
                  <span className="border border-rule px-2 py-1 text-xs">INLINE</span>
                </Cluster>
                <Grid columns={3} gap="xs">
                  <div className="border border-rule p-2 text-center text-xs text-ink-2">ONE</div>
                  <div className="border border-rule p-2 text-center text-xs text-ink-2">TWO</div>
                  <div className="border border-rule p-2 text-center text-xs text-ink-2">THREE</div>
                </Grid>
              </Stack>
            </Container>
          </ComponentPreview>
        </section>

        <section id="section" className="docs-section">
          <Heading as="h2" size="section">Section cadence</Heading>
          <ComponentPreview title="Section" code={sectionCode}>
            <Section className="border border-rule px-md py-xl sm:py-xl">
              <Text size="small" tone="muted">Use <code>Section</code> to establish a deliberate break between major page ideas.</Text>
            </Section>
          </ComponentPreview>
        </section>

        <section id="props" className="docs-section">
          <Heading as="h2" size="section">Props Reference</Heading>
          <Table caption="Container Component API">
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
                <TableCell className="font-bold">Container size</TableCell>
                <TableCell className="text-sky-700">"reading" | "content" | "wide"</TableCell>
                <TableCell>"content"</TableCell>
                <TableCell className="text-ink-2">Max-width constraint: 43rem, 4xl, or 6xl.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Stack gap</TableCell>
                <TableCell className="text-sky-700">"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"</TableCell>
                <TableCell>"md"</TableCell>
                <TableCell className="text-ink-2">Vertical rhythm between children.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Cluster gap</TableCell>
                <TableCell className="text-sky-700">"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"</TableCell>
                <TableCell>"sm"</TableCell>
                <TableCell className="text-ink-2">Inline gap between wrap items.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Cluster align</TableCell>
                <TableCell className="text-sky-700">"start" | "center" | "end"</TableCell>
                <TableCell>"center"</TableCell>
                <TableCell className="text-ink-2">Cross-axis alignment.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Grid columns</TableCell>
                <TableCell className="text-sky-700">1 | 2 | 3</TableCell>
                <TableCell>2</TableCell>
                <TableCell className="text-ink-2">Column count (1 col on mobile, up to N on md+).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Grid gap</TableCell>
                <TableCell className="text-sky-700">"2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"</TableCell>
                <TableCell>"md"</TableCell>
                <TableCell className="text-ink-2">Gap between grid cells.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Section</TableCell>
                <TableCell className="text-sky-700">HTMLAttributes</TableCell>
                <TableCell>—</TableCell>
                <TableCell className="text-ink-2">Full-width band with bottom rule and generous padding.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">as (all)</TableCell>
                <TableCell className="text-sky-700">"div" | "section" | "main" | "article" | "aside" | "nav"</TableCell>
                <TableCell>varies</TableCell>
                <TableCell className="text-ink-2">Semantic element tag override.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </article>

      <Toc items={[{ id: 'primitives', title: 'Layout primitives' }, { id: 'section', title: 'Section cadence' }, { id: 'props', title: 'Props Reference' }]} />
    </div>
  )
}
