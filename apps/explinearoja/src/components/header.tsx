import Link from "next/link"
import { Button } from "@repo/ui"
import { navigation } from "@/content/navigation"
import { site } from "@/content/site"
import { ThemeSwitcher } from "./theme-switcher"
import { HeaderClient } from "./header-client"
import { LogoSmall } from "./icons/logo-small"


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/#inicio"
          className="group flex items-center text-foreground transition-opacity hover:opacity-80"
          aria-label={site.shortName}
        >
          <LogoSmall className="h-9 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <ThemeSwitcher />
          <Button asChild size="sm" className="rounded-sm px-6 font-semibold uppercase tracking-wider">
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Cotizar
            </a>
          </Button>
        </nav>

        {/* Mobile nav */}
        <HeaderClient />
      </div>
      {/* Red line accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    </header>
  )
}
