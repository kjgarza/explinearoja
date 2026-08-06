import { Badge } from "@repo/ui"
import { adFormats } from "@/content/advertising"

export function AdFormatSection() {
  return (
    <section id="publicidad-formatos" className="relative px-6 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-secondary/30" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="flex items-center gap-3">
          <span className="h-px w-12 bg-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            El formato
          </p>
        </div>
        <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Wrap en Vinil Estático
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Elige cubrir toda la caja o un panel lateral, con arte fijo por el término del contrato
        </p>

        {/* Formats */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {adFormats.map((format) => (
            <div
              key={format.id}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-card p-8 transition-all hover:border-primary/30"
            >
              {/* Accent corner */}
              <div className="absolute right-0 top-0 h-16 w-16">
                <div className="absolute right-0 top-0 h-px w-16 bg-primary/40 transition-all group-hover:bg-primary" />
                <div className="absolute right-0 top-0 h-16 w-px bg-primary/40 transition-all group-hover:bg-primary" />
              </div>

              <Badge variant="outline" className="rounded-sm border-primary/30 font-mono text-xs font-medium text-primary">
                {format.coverage}
              </Badge>
              <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-wide text-foreground">
                {format.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {format.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
