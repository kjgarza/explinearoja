import { Button } from "@repo/ui"
import { site } from "@/content/site"
import { WhatsAppIcon } from "./icons/whatsapp-icon"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-primary" />

      {/* Decorative diagonal lines */}
      <div className="absolute inset-0 -z-[5] opacity-10">
        <div className="absolute -left-32 top-0 h-full w-px rotate-12 bg-white" />
        <div className="absolute left-1/4 top-0 h-full w-px rotate-12 bg-white" />
        <div className="absolute left-1/2 top-0 h-full w-px rotate-12 bg-white" />
        <div className="absolute left-3/4 top-0 h-full w-px rotate-12 bg-white" />
        <div className="absolute -right-32 top-0 h-full w-px rotate-12 bg-white" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              ¿Necesitas
              <br />
              enviar carga?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/80">
              Cotiza tu envío en minutos. Respuesta inmediata por WhatsApp.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="shrink-0 rounded-sm px-10 font-semibold uppercase tracking-wider"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              Solicitar Cotización
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
