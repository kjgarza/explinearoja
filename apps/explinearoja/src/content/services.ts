import { Truck, Route, Container } from "lucide-react"

export const services = [
  {
    id: "local",
    title: "Transporte Local",
    description:
      "Distribución de mercancía dentro del área metropolitana de Monterrey y zona conurbada. Entregas puntuales con rastreo en tiempo real.",
    icon: Truck,
  },
  {
    id: "foraneo",
    title: "Transporte Foráneo",
    description:
      "Envíos a nivel nacional con rutas optimizadas. Cobertura en las principales ciudades y zonas industriales de México.",
    icon: Route,
  },
  {
    id: "plataforma",
    title: "Carga en Caja Seca",
    description:
      "Transporte de carga general y mercancía paletizada en caja seca, con seguimiento operativo y atención puntual.",
    icon: Container,
  },
] as const
