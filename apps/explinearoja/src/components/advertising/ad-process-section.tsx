import { adProcess } from "@/content/advertising"

export function AdProcessSection() {
  return (
    <section id="publicidad-proceso" className="relative px-6 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-secondary/30" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="flex items-center gap-3">
          <span className="h-px w-12 bg-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Cómo funciona
          </p>
        </div>
        <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          De la Idea a la Carretera
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Un proceso simple, sin equipo nuevo ni cambios en la operación
        </p>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {adProcess.map((step, i) => (
            <div
              key={step.id}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-card p-8 transition-colors hover:border-primary/30"
            >
              <span className="font-heading text-5xl font-bold leading-none text-border/60 transition-colors group-hover:text-primary/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
