import { Phone, Mail, Truck } from "lucide-react"
import { site } from "@/content/site"
import { WhatsAppIcon } from "./icons/whatsapp-icon"

export function ContactSection() {
  return (
    <section id="contacto" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="flex items-center gap-3">
          <span className="h-px w-12 bg-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Encuéntranos
          </p>
        </div>
        <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Contacto
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Estamos listos para atenderte
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-8">
            <a
              href={`tel:+52${site.phone}`}
              className="group flex items-start gap-4 rounded-lg border border-transparent p-4 -ml-4 transition-colors hover:border-border/50 hover:bg-card"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Teléfono
                </h3>
                <p className="mt-1 text-lg text-muted-foreground transition-colors group-hover:text-foreground">
                  {site.phoneFormatted}
                </p>
              </div>
            </a>

            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-lg border border-transparent p-4 -ml-4 transition-colors hover:border-border/50 hover:bg-card"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <WhatsAppIcon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  WhatsApp
                </h3>
                <p className="mt-1 text-lg text-muted-foreground transition-colors group-hover:text-foreground">
                  Enviar mensaje
                </p>
              </div>
            </a>
            <a
              href={site.driverContactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-lg border border-transparent p-4 -ml-4 transition-colors hover:border-border/50 hover:bg-card"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Truck className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
              </div>
              <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                ¿Eres chofer?
              </h3>
              <p className="mt-1 text-lg text-muted-foreground transition-colors group-hover:text-foreground">
                Trabaja con nosotros
              </p>
              </div>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-4 p-4 -ml-4 group rounded-sm transition-colors hover:bg-primary/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  Email
                </h3>
                <p className="mt-1 text-lg text-muted-foreground transition-colors group-hover:text-foreground">
                  Enviar Email
                </p>
              </div>
            </a>
          </div>

          {/* Map embed */}
          <div className="overflow-hidden rounded-lg border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230417.98761504!2d-100.44151!3d25.6866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662beb735f193f7%3A0x66a3e43e0e88838a!2sMonterrey%2C%20N.L.%2C%20Mexico!5e0!3m2!1ses!2smx!4v1"
              width="100%"
              height="100%"
              className="aspect-[4/3] md:aspect-auto md:h-full"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Express Linea Roja en Monterrey"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
