import { MapPin, ShieldCheck, Power } from "lucide-react"

export const vehicles = [
  {
    id: "tractocamion",
    name: "Tractocamiónes con Caja Seca 53'",
    capacity: "Hasta 25 toneladas",
    description:
      "Unidad de largo alcance para carga general y voluminosa. Caja seca de 53 pies con cierre hermético.",
  },
  {
    id: "camioneta",
    name: "Camionetas de Carga 3.5t",
    capacity: "Hasta 3.5 toneladas",
    description:
      "Ideal para entregas locales y distribución urbana. Maniobrabilidad en zonas de acceso restringido.",
  },
] as const

export const trustFeatures = [
  {
    id: "gps",
    title: "Rastreo GPS 24/7",
    description: "Monitoreo en tiempo real de todas las unidades",
    icon: MapPin,
  },
  {
    id: "seguro",
    title: "Seguro de Carga",
    description: "Tu mercancía protegida durante todo el trayecto",
    icon: ShieldCheck,
  },
  {
    id: "kill-switch",
    title: "Corte de Motor Remoto",
    description: "Sistema de seguridad ante cualquier contingencia",
    icon: Power,
  },
] as const
