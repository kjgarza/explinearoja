import { ImageResponse } from "next/og"

export const alt = "Express Linea Roja - Transporte de Carga en Monterrey"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(120deg, rgb(20, 24, 33) 0%, rgb(34, 43, 66) 45%, rgb(197, 45, 48) 100%)",
          color: "white",
          fontFamily: "Barlow, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px",
            background:
              "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 55%)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: "999px",
              border: "1px solid rgba(255, 255, 255, 0.45)",
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: "0.04em",
              padding: "12px 24px",
            }}
          >
            EXPRESS LINEA ROJA
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                fontSize: 82,
                fontWeight: 700,
                lineHeight: 1.03,
                maxWidth: "90%",
              }}
            >
              Transporte de Carga en Monterrey
            </div>
            <div
              style={{
                fontSize: 34,
                opacity: 0.95,
              }}
            >
              Servicio local, foraneo y plataforma desde 2006
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
