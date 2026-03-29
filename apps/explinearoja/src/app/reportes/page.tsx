import type { Metadata } from "next"
import Link from "next/link"
import { getAllReports } from "@/lib/reports"

export const metadata: Metadata = {
  title: "Reportes — Express Linea Roja",
  description: "Análisis estratégicos y reportes de mercado para Express Linea Roja.",
  robots: { index: false },
}

export default async function ReportIndexPage() {
  const reports = await getAllReports()

  return (
    <main className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-prose">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Reportes Estratégicos
        </p>
        <h1 className="mt-2 font-heading text-3xl tracking-tight text-foreground">
          Análisis e Investigación
        </h1>

        <ul className="mt-10 space-y-6">
          {reports.map((report) => (
            <li key={report.slug}>
              <Link
                href={`/reportes/${report.slug}`}
                className="group block rounded-lg border border-border p-6 transition-colors hover:border-primary hover:bg-muted/50"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {report.category ?? "Análisis"} · {report.lang.toUpperCase()}
                </p>
                <h2 className="mt-1 font-heading text-lg font-semibold tracking-tight text-foreground group-hover:text-primary">
                  {report.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {report.description}
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {new Date(report.date + "T00:00:00Z").toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
