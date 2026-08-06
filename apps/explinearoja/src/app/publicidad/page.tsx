import type { Metadata } from "next"
import { AdHeroSection } from "@/components/advertising/ad-hero-section"
import { AdBenefitsSection } from "@/components/advertising/ad-benefits-section"
import { AdFormatSection } from "@/components/advertising/ad-format-section"
import { AdRouteSection } from "@/components/advertising/ad-route-section"
import { AdProcessSection } from "@/components/advertising/ad-process-section"
import { AdCtaSection } from "@/components/advertising/ad-cta-section"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Publicidad en Tráiler — Express Linea Roja",
  description:
    "Renta el espacio publicitario de nuestro tráiler de 53 pies en Monterrey. Wrap en vinil estático como espectacular móvil con exposición en rutas local y foránea.",
  keywords: [
    "publicidad móvil",
    "espectacular móvil",
    "wrap vehicular",
    "vinil publicitario",
    "publicidad en tráiler",
    "Monterrey",
    "Nuevo León",
  ],
  alternates: {
    canonical: "/publicidad",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/publicidad",
    title: "Publicidad en Tráiler — Express Linea Roja",
    description:
      "Renta el espacio publicitario de nuestro tráiler de 53 pies en Monterrey. Wrap en vinil estático como espectacular móvil.",
    siteName: "Express Linea Roja",
  },
}

export default function AdvertisingPage() {
  return (
    <main>
      <AdHeroSection />
      <AdBenefitsSection />
      <AdFormatSection />
      <AdRouteSection />
      <AdProcessSection />
      <AdCtaSection />
      <ContactSection />
    </main>
  )
}
