import { services } from "@/content/services"

export function ServicesSection() {
  return (
    <section id="servicios" className="relative px-6 py-24 lg:py-32">
      {/* Section background accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="flex items-center gap-3">
          <span className="h-px w-12 bg-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Lo que hacemos
          </p>
        </div>
        <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Nuestros Servicios
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Soluciones de transporte adaptadas a las necesidades de tu negocio
        </p>

        {/* Services grid */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border/50 bg-border/50 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="group relative bg-card p-8 transition-colors hover:bg-card/80 lg:p-10"
            >
              {/* Number */}
              <span className="font-heading text-6xl font-bold leading-none text-border/60 transition-colors group-hover:text-primary/20">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="mt-6 font-heading text-xl font-bold uppercase tracking-wide text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
