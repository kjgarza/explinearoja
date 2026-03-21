import { navigation } from "@/content/navigation"
import { site } from "@/content/site"

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-5 w-1 bg-primary" />
              <p className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
                {site.shortName}
              </p>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.tagline}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border/30 pt-8 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="text-xs text-muted-foreground/60">
              &copy; {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.
            </p>
            <p className="text-xs text-muted-foreground/40">
              {site.serviceType}
            </p>
          </div>
          <p className="text-xs text-muted-foreground/40">
            Monterrey, Nuevo León, México
          </p>
        </div>
      </div>
    </footer>
  )
}
