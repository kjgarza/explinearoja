import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllReports, getReportBySlug, getReportSlugs } from "@/lib/reports"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await getReportSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const reports = await getAllReports()
  const report = reports.find((r) => r.slug === slug)
  if (!report) return {}
  return {
    title: `${report.title} — Express Linea Roja`,
    description: report.description,
    robots: { index: false },
  }
}

export default async function ReportPage({ params }: Props) {
  const { slug } = await params

  let report
  try {
    report = await getReportBySlug(slug)
  } catch {
    notFound()
  }

  return (
    <main className="px-6 py-16 lg:py-24">
      <article className="prose prose-lg mx-auto prose-headings:font-heading prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-hr:border-border prose-table:text-sm prose-th:text-foreground prose-td:text-muted-foreground">
        <p className="not-prose text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {report.category ?? "Análisis Estratégico"} · {new Date(report.date + "T00:00:00Z").getFullYear()}
        </p>
        <h1>{report.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: report.contentHtml }} />
      </article>
    </main>
  )
}
