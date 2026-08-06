import { Wallet, Route as RouteIcon, ShieldOff } from "lucide-react"
import { site } from "./site"

export const advertising = {
  eyebrow: "Nueva línea · Publicidad móvil",
  title: "Publicidad",
  titleAccent: "en Movimiento",
  subtitle:
    "Renta la superficie de nuestro tráiler de 53 pies como espectacular móvil. Tu marca recorre Monterrey — local y foráneo — mientras el equipo sigue su ruta de carga.",
  whatsappUrl: `https://wa.me/52${site.phone}?text=${encodeURIComponent(
    "Hola, me interesa anunciar mi marca en su tráiler"
  )}`,
  stats: [
    { value: "53'", label: "Pies de superficie" },
    { value: "Local + Foráneo", label: "Cobertura de rutas" },
    { value: "6–12", label: "Meses por contrato" },
  ],
} as const

export const adBenefits = [
  {
    id: "espectacular-movil",
    title: "Espectacular Móvil",
    description:
      "Tu marca circula por avenidas, carreteras y corredores industriales de Monterrey. Exposición en calle y en tramo foráneo que un espectacular fijo no alcanza.",
    icon: RouteIcon,
  },
  {
    id: "costo-unico",
    title: "Inversión de una Sola Vez",
    description:
      "Un costo único de instalación del vinil por todo el término del contrato. Sin renta mensual de estructura ni pago por impresión.",
    icon: Wallet,
  },
  {
    id: "sin-mantenimiento",
    title: "Cero Mantenimiento",
    description:
      "Vinil estático de alta durabilidad: sin electrónica, sin consumo de energía y sin cambios en la operación ni en la ruta del tráiler.",
    icon: ShieldOff,
  },
] as const

export const adFormats = [
  {
    id: "wrap-completo",
    name: "Wrap Completo",
    coverage: "Superficie total",
    description:
      "Rotulación integral de ambos laterales y la parte trasera de la caja de 53 pies. Máxima visibilidad e impacto para tu campaña.",
  },
  {
    id: "wrap-parcial",
    name: "Wrap Parcial",
    coverage: "Panel lateral",
    description:
      "Rotulación de un panel lateral definido. Opción de menor costo para logotipo, promoción o lanzamiento con presencia en avenida y carretera.",
  },
] as const

export const adProcess = [
  {
    id: "formato",
    title: "Elige Formato y Término",
    description:
      "Definimos wrap completo o parcial y el plazo del contrato, típicamente de 6 a 12 meses.",
  },
  {
    id: "diseno",
    title: "Diseño del Vinil",
    description:
      "Adaptamos tu arte a las medidas de la caja con un taller de rotulación local de Monterrey.",
  },
  {
    id: "instalacion",
    title: "Instalación Única",
    description:
      "Se instala el vinil una sola vez, sin electrónica ni tiempo fuera de operación relevante.",
  },
  {
    id: "rueda",
    title: "Tu Marca Rueda",
    description:
      "El tráiler retoma su ruta de carga y tu marca gana kilómetros de exposición cada día.",
  },
] as const

export const adRoute = {
  eyebrow: "Dónde se verá",
  title: "Ruta de Exposición",
  description:
    "Recorrido habitual por el noreste del área metropolitana de Monterrey: San Nicolás de los Garza, el corredor industrial y aeropuerto de Apodaca, y Guadalupe, sobre Av. Miguel Alemán y la carretera a Reynosa.",
  mapEmbedUrl:
    "https://maps.google.com/maps?saddr=San%20Nicol%C3%A1s%20de%20los%20Garza%2C%20N.L.&daddr=Apodaca%2C%20N.L.%20to:Aeropuerto%20Internacional%20de%20Monterrey%20to:Guadalupe%2C%20N.L.&output=embed",
  stops: [
    {
      name: "San Nicolás de los Garza",
      note: "Zona industrial y comercial de alto tránsito",
    },
    {
      name: "Apodaca",
      note: "Corredor industrial y parques logísticos",
    },
    {
      name: "Aeropuerto Internacional de Monterrey",
      note: "Carretera a Reynosa, flujo foráneo",
    },
    {
      name: "Guadalupe",
      note: "Av. Miguel Alemán, vialidades primarias",
    },
  ],
} as const
