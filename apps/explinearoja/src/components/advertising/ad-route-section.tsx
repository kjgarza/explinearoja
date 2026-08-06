import { MapPin } from "lucide-react"
import { adRoute } from "@/content/advertising"

export function AdRouteSection() {
  return (
    <section id="publicidad-ruta" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="flex items-center gap-3">
          <span className="h-px w-12 bg-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            {adRoute.eyebrow}
          </p>
        </div>
        <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {adRoute.title}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {adRoute.description}
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Route stops */}
          <ol className="space-y-8">
            {adRoute.stops.map((stop, i) => (
              <li key={stop.name} className="relative flex items-start gap-4">
                {/* Connector line between stops */}
                {i < adRoute.stops.length - 1 && (
                  <span className="absolute left-5 top-12 h-[calc(100%-1rem)] w-px bg-border/60" />
                )}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold uppercase tracking-wide text-foreground">
                      {stop.name}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {stop.note}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Map embed */}
          <div className="overflow-hidden rounded-lg border border-border/50">
            <iframe
              src={adRoute.mapEmbedUrl}
              width="100%"
              height="100%"
              className="aspect-[4/3] lg:aspect-auto lg:h-full"
              style={{ border: 0, minHeight: 360 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ruta de exposición del tráiler por el noreste de Monterrey"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
