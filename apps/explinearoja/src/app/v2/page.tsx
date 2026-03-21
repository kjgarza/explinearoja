import type { Metadata } from "next"
import { Button } from "@repo/ui"
import { Phone, Mail } from "lucide-react"
import { site } from "@/content/site"
import { services } from "@/content/services"
import { vehicles, trustFeatures } from "@/content/fleet"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

export const metadata: Metadata = {
  title: "Express Linea Roja — v2",
  robots: { index: false },
}

export default function V2Page() {
  const yearsExperience = new Date().getFullYear() - site.founded

  return (
    <main className="px-6 py-16 lg:py-24">
      <article
        className="prose prose-lg mx-auto prose-headings:font-heading prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-hr:border-border"
      >
        {/* ── Hero / Intro ── */}
        <section id="inicio">
          <p className="not-prose text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Desde {site.founded} en Monterrey
          </p>

          <h1 className="text-4xl md:text-5xl">
            Express Linea Roja
          </h1>

          <p className="lead text-xl leading-relaxed">
            {site.tagline}. Servicio local, foráneo y carga en plataforma con
            rastreo GPS y seguro de carga.
          </p>

          <p>
            Con <strong>{yearsExperience}+ años de experiencia</strong>, rastreo
            GPS <strong>24/7</strong> y <strong>100% de carga asegurada</strong>,
            Express Linea Roja es tu aliado en logística desde Monterrey, Nuevo
            León.
          </p>

          <div className="not-prose mt-8">
            <Button asChild size="lg" className="rounded-sm px-8 font-semibold uppercase tracking-wider">
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                Cotizar Envío
              </a>
            </Button>
          </div>
        </section>

        <hr />

        {/* ── Servicios ── */}
        <section id="servicios">
          <h2>Nuestros Servicios</h2>

          <p>
            Soluciones de transporte adaptadas a las necesidades de tu negocio.
          </p>

          {services.map((service, i) => (
            <div key={service.id}>
              {i > 0 && (
                <p className="my-8 text-center text-muted-foreground/40">
                  * * *
                </p>
              )}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </section>

        <hr />

        {/* ── Flota ── */}
        <section id="flota">
          <h2>Nuestra Flota</h2>

          <p>
            Unidades equipadas con la mejor tecnología para proteger tu carga.
          </p>

          {vehicles.map((vehicle) => (
            <div key={vehicle.id}>
              <h3>{vehicle.name}</h3>
              <p>
                <strong>Capacidad: {vehicle.capacity}</strong> — {vehicle.description}
              </p>
            </div>
          ))}

          <h3>Tecnología y Seguridad</h3>

          <ul>
            {trustFeatures.map((feature) => (
              <li key={feature.id}>
                <strong>{feature.title}</strong> — {feature.description}
              </li>
            ))}
          </ul>
        </section>

        <hr />

        {/* ── CTA ── */}
        <blockquote>
          <p>
            ¿Necesitas enviar carga? Cotiza tu envío en minutos. Respuesta
            inmediata por WhatsApp.
          </p>
        </blockquote>

        <div className="not-prose flex justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-sm px-10 font-semibold uppercase tracking-wider"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              Solicitar Cotización
            </a>
          </Button>
        </div>

        <hr />

        {/* ── Contacto ── */}
        <section id="contacto">
          <h2>Contacto</h2>

          <p>Estamos listos para atenderte.</p>

          <p>
            <Phone className="mb-1 inline-block h-4 w-4 text-primary" />{" "}
            <strong>Teléfono</strong>:{" "}
            <a href={`tel:+52${site.phone}`}>{site.phoneFormatted}</a>
          </p>

          <p>
            <WhatsAppIcon className="mb-1 inline-block h-4 w-4 text-primary" />{" "}
            <strong>WhatsApp</strong>:{" "}
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Enviar mensaje
            </a>
          </p>

          <p>
            <Mail className="mb-1 inline-block h-4 w-4 text-primary" />{" "}
            <strong>Email</strong>:{" "}
            <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-primary">
              Enviar Email
            </a>
          </p>
        </section>

        {/* ── Map ── */}
        <div className="not-prose mt-12 overflow-hidden rounded-lg border border-border/50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230417.98761504!2d-100.44151!3d25.6866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662beb735f193f7%3A0x66a3e43e0e88838a!2sMonterrey%2C%20N.L.%2C%20Mexico!5e0!3m2!1ses!2smx!4v1"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Express Linea Roja en Monterrey"
          />
        </div>
      </article>
    </main>
  )
}
