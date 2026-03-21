"use client"

import { useTheme } from "next-themes"
import { Palette } from "lucide-react"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@repo/ui"

const themes = [
  { value: "dark-warm", label: "Oscuro cálido", color: "hsl(30 20% 10%)" },
  { value: "dark-cool", label: "Oscuro frío", color: "hsl(220 10% 8%)" },
  { value: "light-warm", label: "Claro cálido", color: "hsl(30 12% 92%)" },
  { value: "light-parchment", label: "Pergamino", color: "hsl(34 37% 90%)" },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Cambiar tema">
          <Palette className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {themes.map((t) => (
            <DropdownMenuRadioItem key={t.value} value={t.value} className="gap-3">
              <span
                className="inline-block h-3.5 w-3.5 shrink-0 rounded-full border border-border"
                style={{ backgroundColor: t.color }}
              />
              {t.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
