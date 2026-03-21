import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { FleetSection } from "@/components/fleet-section"
import { CtaSection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <FleetSection />
      <CtaSection />
      <ContactSection />
    </main>
  )
}
