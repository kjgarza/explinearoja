import { Badge } from "@repo/ui"
import { vehicles, trustFeatures } from "@/content/fleet"

export function FleetSection() {
  return (
    <section id="flota" className="relative px-6 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-secondary/30" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="flex items-center gap-3">
          <span className="h-px w-12 bg-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Equipo
          </p>
        </div>
        <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Nuestra Flota
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Unidades equipadas con la mejor tecnología para proteger tu carga
        </p>

        {/* Vehicles */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-card p-8 transition-all hover:border-primary/30"
            >
              {/* Accent corner */}
              <div className="absolute right-0 top-0 h-16 w-16">
                <div className="absolute right-0 top-0 h-px w-16 bg-primary/40 transition-all group-hover:bg-primary" />
                <div className="absolute right-0 top-0 h-16 w-px bg-primary/40 transition-all group-hover:bg-primary" />
              </div>

              <Badge variant="outline" className="rounded-sm border-primary/30 font-mono text-xs font-medium text-primary">
                {vehicle.capacity}
              </Badge>
              <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-wide text-foreground">
                {vehicle.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {vehicle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust features */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {trustFeatures.map((feature) => (
            <div key={feature.id} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold uppercase tracking-wide text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
