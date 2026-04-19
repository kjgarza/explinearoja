import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import { site } from "@/content/site"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Express Linea Roja — Transporte de Carga en Monterrey",
  description:
    "Empresa de autotransporte de carga en Monterrey, Nuevo León. Servicio local, foráneo y en caja seca desde 2006. Cotiza tu envío por WhatsApp.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.NEXT_PUBLIC_REPO_NAME
        ? `https://kjgarza.github.io/${process.env.NEXT_PUBLIC_REPO_NAME}`
        : "https://kjgarza.github.io/explinearoja")
  ),
  keywords: [
    "transporte de carga",
    "Monterrey",
    "autotransporte",
    "caja seca",
    "transporte local",
    "transporte foráneo",
    "Nuevo León",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    title: "Express Linea Roja — Transporte de Carga en Monterrey",
    description:
      "Empresa de autotransporte de carga en Monterrey, Nuevo León. Servicio local, foráneo y en caja seca desde 2006. Cotiza tu envío por WhatsApp.",
    siteName: site.name,
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Express Linea Roja - Transporte de Carga en Monterrey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Express Linea Roja — Transporte de Carga en Monterrey",
    description:
      "Empresa de autotransporte de carga en Monterrey, Nuevo León. Servicio local, foráneo y en caja seca desde 2006.",
    images: ["/opengraph.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
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
