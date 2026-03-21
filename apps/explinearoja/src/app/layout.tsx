import type { Metadata } from "next"
import { Barlow, Barlow_Condensed } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import "./globals.css"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow-condensed",
})

export const metadata: Metadata = {
  title: "Express Linea Roja — Transporte de Carga en Monterrey",
  description:
    "Empresa de autotransporte de carga en Monterrey, Nuevo León. Servicio local, foráneo y plataforma desde 2006. Cotiza tu envío por WhatsApp.",
  keywords: [
    "transporte de carga",
    "Monterrey",
    "autotransporte",
    "carga en plataforma",
    "transporte local",
    "transporte foráneo",
    "Nuevo León",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark-warm"
          themes={["dark-warm", "dark-cool", "light-warm", "light-parchment"]}
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <WhatsAppFab />
        </ThemeProvider>
      </body>
    </html>
  )
}
