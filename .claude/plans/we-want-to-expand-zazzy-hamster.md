# Plan: Página de publicidad en tráiler (trailer ad space)

## Context

Express Linea Roja quiere abrir una nueva línea de ingresos: vender el espacio
publicitario en la superficie exterior de su tráiler de 53 pies (vinil/wrap
estático) a marcas locales de Monterrey. El tráiler sigue haciendo su trabajo
normal de carga (local + foráneo) y, de paso, funciona como "espectacular
móvil" con exposición en carretera y calle.

Como **prueba de concepto**, se pide una **página adicional en el sitio** que
promueva este servicio publicitario, en el **mismo estilo visual** que el resto
de Express Linea Roja (acentos rojos, encabezados en mayúsculas Space Grotesk,
líneas de acento, tarjetas numeradas, CTAs a WhatsApp, español es-MX).

El sitio es Next.js 15 (App Router, `output: "export"` para GitHub Pages).
Patrón obligatorio del repo: **datos en `src/content/`**, **presentación en
`src/components/`**, **páginas mínimas** que solo componen secciones. Sin
semicolons, comillas dobles, 2 espacios, `kebab-case` para archivos, iconos solo
de `lucide-react`, botones/badges vía `@repo/ui`.

## Approach

Nueva ruta `/publicidad` que reutiliza el `Header`/`Footer`/`WhatsAppFab`
globales (igual que `/reportes`) y compone secciones nuevas específicas del
producto publicitario, alimentadas por un archivo de contenido dedicado.

### 1. Contenido — `apps/explinearoja/src/content/advertising.ts`

Nuevo archivo (data/format separation). Exporta objetos/arreglos tipados `as
const`, siguiendo el estilo de `services.ts` / `fleet.ts`:

- `advertising` — objeto con copy del hero (eyebrow, título, subtítulo),
  `stats` (p. ej. `53 pies` de superficie, `Local + Foráneo` de cobertura,
  `6–12 meses` de contrato), y un `whatsappUrl` propio construido con el
  teléfono de `site` (`site.phone`) pero con mensaje precargado de publicidad
  (p. ej. "Hola, me interesa anunciar mi marca en su tráiler"). Reutiliza
  `site.phone` — no duplicar el número.
- `adBenefits` — arreglo (3) con `{ id, title, description, icon }` usando
  iconos `lucide-react` (p. ej. `MapPin`/`Route` para exposición en ruta,
  `Wallet`/`BadgeDollarSign` para bajo costo/único, `Zap`/`Sparkles` para
  cero mantenimiento). Mensaje: espectacular móvil, exposición carretera+calle,
  bajo capex una sola vez, sin cambios de ruta.
- `adFormats` — arreglo (2) tipo "tarjetas de flota": **Wrap completo** y
  **Wrap parcial (lateral)**, cada uno con `{ id, name, coverage, description }`
  (vinil estático, término fijo 6–12 meses).
- `adProcess` — arreglo (3–4 pasos) `{ id, title, description }` para "Cómo
  funciona": 1) Elige formato y término, 2) Diseño/arte del vinil, 3)
  Instalación (una sola vez, sin electrónica), 4) Tu marca rueda por Monterrey.
- `adRoute` — objeto para la sección de ruta/mapa: `title`, `description`,
  `mapEmbedUrl` (embed de Google Maps con una **ruta** por el **noreste** del
  área metropolitana de Monterrey — San Nicolás de los Garza → Apodaca
  (aeropuerto / corredor industrial) → Guadalupe, sobre Av. Miguel Alemán /
  carretera a Reynosa), y `stops` (arreglo de `{ name, note }` con los puntos
  del recorrido). El embed usa el formato heredado sin API key
  `https://maps.google.com/maps?saddr=...&daddr=A to:B&output=embed`, mismo
  enfoque de `<iframe>` que ya usa `contact-section.tsx` (que no requiere clave).

### 2. Secciones — `apps/explinearoja/src/components/advertising/`

Componentes de servidor (sin `"use client"`), copiando clases/estructura de las
secciones existentes para consistencia visual exacta:

- `ad-hero-section.tsx` — clon de `hero-section.tsx` (fondo gradiente, grid
  decorativo, franjas diagonales rojas, eyebrow con línea, título grande con
  subrayado animado, subtítulo, botón WhatsApp con `WhatsAppIcon`, barra de
  `stats`). Texto desde `advertising`.
- `ad-benefits-section.tsx` — patrón de `services-section.tsx` (grid de tarjetas
  numeradas con icono, hover con línea inferior). Datos desde `adBenefits`.
- `ad-format-section.tsx` — patrón de `fleet-section.tsx` (tarjetas con esquina
  de acento y `Badge` de cobertura). Datos desde `adFormats`.
- `ad-process-section.tsx` — sección de pasos numerados (reutiliza el estilo de
  número grande de services). Datos desde `adProcess`.
- `ad-route-section.tsx` — sección "Ruta de exposición": encabezado con eyebrow
  rojo, un `<iframe>` con `adRoute.mapEmbedUrl` (mismo contenedor
  `overflow-hidden rounded-lg border` que el mapa de `contact-section.tsx`,
  `loading="lazy"`, `title` descriptivo) y, al lado, la lista de `stops` como
  puntos numerados/con icono `MapPin` marcando el recorrido por el noreste de
  Monterrey. Datos desde `adRoute`.
- `ad-cta-section.tsx` — clon de `cta-section.tsx` (fondo rojo, líneas
  diagonales, botón `secondary`), con copy de "Reserva tu espacio" y el
  `advertising.whatsappUrl`.

Para el contacto final se **reutiliza el `ContactSection` existente** (teléfono,
WhatsApp, email, mapa) — no se duplica.

### 3. Página — `apps/explinearoja/src/app/publicidad/page.tsx`

Server component mínimo con su propio `export const metadata` (título/description
en español, `openGraph` locale `es_MX`, `alternates.canonical: "/publicidad"`),
que compone: `AdHeroSection → AdBenefitsSection → AdFormatSection →
AdRouteSection → AdProcessSection → AdCtaSection → ContactSection`. Igual que
`page.tsx` raíz.

### 4. Navegación — `apps/explinearoja/src/content/navigation.ts`

Agregar una entrada `{ label: "Publicidad", href: "/publicidad" }` para que la
página sea descubrible desde el `Header`/`Footer` globales. Las otras entradas
siguen siendo anclas `#...` (comportamiento existente; en subpáginas las anclas
no hacen scroll, igual que hoy con `/reportes`).

## Critical files

- **New**: `src/content/advertising.ts`
- **New**: `src/components/advertising/ad-hero-section.tsx`,
  `ad-benefits-section.tsx`, `ad-format-section.tsx`, `ad-route-section.tsx`,
  `ad-process-section.tsx`, `ad-cta-section.tsx`
- **New**: `src/app/publicidad/page.tsx`
- **Edit**: `src/content/navigation.ts` (una línea)
- **Reuse (no cambios)**: `src/components/contact-section.tsx`,
  `src/components/icons/whatsapp-icon.tsx`, `@repo/ui` (`Button`, `Badge`),
  `src/content/site.ts` (`site.phone`)

## Verification

1. `bun run dev` (en `apps/explinearoja`) y abrir `http://localhost:3000/publicidad`:
   - El hero, beneficios, formatos, ruta, proceso, CTA y contacto se ven con el
     mismo estilo (rojo/mayúsculas) que la home; todos los temas (dark/light) se
     ven bien.
   - La sección de ruta muestra el mapa con el recorrido por el **noreste** de
     Monterrey (San Nicolás → Apodaca → Guadalupe) y la lista de paradas.
   - El botón "Publicidad" aparece en el header (desktop + menú móvil) y footer y
     navega a `/publicidad`.
   - Los CTAs de WhatsApp abren `wa.me` con el mensaje de publicidad precargado.
2. `bun run lint` y `bun run type-check` en la raíz — sin errores (revisar
   comillas dobles, sin `;`, `import type`).
3. `bun run build` — el export estático genera `publicidad/index.html` sin fallar.
