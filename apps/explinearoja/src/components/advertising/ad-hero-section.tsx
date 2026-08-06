import { Button } from "@repo/ui"
import { ArrowRight } from "lucide-react"
import { advertising } from "@/content/advertising"
import { WhatsAppIcon } from "../icons/whatsapp-icon"

export function AdHeroSection() {
  return (
    <section
      id="publicidad-inicio"
      className="relative flex min-h-[calc(100vh-4.25rem)] flex-col items-start justify-center overflow-hidden px-6"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-background via-background to-primary/15" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
      </div>

      {/* Diagonal red accent stripe */}
      <div className="absolute -right-20 top-1/4 -z-10 h-px w-96 rotate-45 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -left-20 bottom-1/3 -z-10 h-px w-80 -rotate-45 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto w-full max-w-6xl">
        {/* Eyebrow */}
        <div className="animate-fade-up flex items-center gap-3">
          <span className="h-px w-12 bg-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            {advertising.eyebrow}
          </p>
        </div>

        {/* Main heading */}
        <h1 className="animate-fade-up stagger-1 mt-6 font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          {advertising.title}
          <br />
          <span className="relative inline-block text-primary">
            {advertising.titleAccent}
            <span className="absolute -bottom-2 left-0 h-1 w-full origin-left animate-line-grow bg-primary/30" />
          </span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-up stagger-2 mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {advertising.subtitle}
        </p>

        {/* CTAs */}
        <div className="animate-fade-up stagger-3 mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Button asChild size="lg" className="rounded-sm px-8 font-semibold uppercase tracking-wider">
            <a href={advertising.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              Reservar Espacio
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="group rounded-sm px-6 font-medium uppercase tracking-wider text-muted-foreground">
            <a href="#publicidad-formatos">
              Ver Formatos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-up stagger-5 mt-20 flex items-center gap-8 border-t border-border/50 pt-8 sm:gap-12">
          {advertising.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
              {i > 0 && <div className="h-10 w-px bg-border/50" />}
              <div>
                <p className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
