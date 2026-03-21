"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button, Sheet, SheetContent, SheetTrigger, SheetTitle } from "@repo/ui"
import { navigation } from "@/content/navigation"
import { site } from "@/content/site"
import { ThemeSwitcher } from "./theme-switcher"

export function HeaderClient() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" aria-label="Abrir menú" className="text-foreground">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 border-l-0 bg-background">
        <div className="flex items-center gap-2">
          <span className="inline-block h-5 w-1 bg-primary" />
          <SheetTitle className="font-heading text-lg font-bold uppercase tracking-wider text-foreground">
            {site.shortName}
          </SheetTitle>
        </div>
        <div className="mt-1 ml-3 h-px w-16 bg-primary/40" />
        <nav className="mt-10 flex flex-col gap-1">
          {navigation.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 rounded-sm px-3 py-3 text-base font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="h-px w-4 bg-border transition-all group-hover:w-6 group-hover:bg-primary" />
              {item.label}
            </a>
          ))}
          <div className="mt-6 px-3">
            <Button asChild className="w-full rounded-sm font-semibold uppercase tracking-wider">
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                Cotizar por WhatsApp
              </a>
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-2 px-3">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Tema</span>
            <ThemeSwitcher />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
