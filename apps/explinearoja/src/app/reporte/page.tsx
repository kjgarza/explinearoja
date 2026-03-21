import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reporte de Prospectos 2026 — Express Linea Roja",
  description:
    "Análisis de oportunidades en proyectos de infraestructura pública en Monterrey, Nuevo León para 2026–2027: obras viales, Metro y programas de mantenimiento.",
  robots: { index: false },
}

export default function ReportePage() {
  return (
    <main className="px-6 py-16 lg:py-24">
      <article className="prose prose-lg mx-auto prose-headings:font-heading prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-hr:border-border prose-table:text-sm prose-th:text-foreground prose-td:text-muted-foreground">

        <p className="not-prose text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Análisis Estratégico · 2026
        </p>

        <h1>Prospectos de Servicios de Camiones en Monterrey</h1>

        {/* ── Alcance ── */}
        <section id="alcance">
          <h2>Alcance y Definición de &ldquo;Servicios de Camiones&rdquo;</h2>

          <p>
            Este análisis se centra en proyectos de infraestructura pública donde una pequeña empresa
            de transporte puede obtener contratos mediante:
          </p>

          <ul>
            <li>
              <strong>Subcontratación</strong> con contratistas principales.
            </li>
            <li>
              <strong>Cadenas de suministro de materiales</strong> (acero, agregados, concreto
              premezclado, entregas de prefabricados).
            </li>
            <li>
              <strong>Contratación municipal/estatal</strong> para servicios adyacentes (renta de
              equipo, remoción/disposición de desechos, materiales de paisajismo).
            </li>
          </ul>

          <p>
            El enfoque de investigación es de &ldquo;generación de prospectos&rdquo;, identificando
            dónde se publican los proyectos, qué licitaciones para 2026 implican movimiento de carga
            pesada y a quién contactar (ya sea la autoridad contratante o el contratista principal).
          </p>
        </section>

        <hr />

        {/* ── Fuentes de Demanda ── */}
        <section id="demanda">
          <h2>Fuentes de Demanda para 2026–2027</h2>

          <h3>Prioridad en Obras Viales y Pluviales</h3>

          <p>
            Para marzo de 2026, el gobierno municipal de Monterrey proyecta una inversión de
            aproximadamente <strong>$4,200 millones de MXN</strong> en:
          </p>

          <ul>
            <li>Proyectos viales y pavimentación.</li>
            <li>Drenaje pluvial (alta demanda de excavación y acarreo).</li>
            <li>Rehabilitación de espacios públicos y el Barrio Antiguo.</li>
          </ul>

          <h3>Expansión del Metro (Líneas 4 y 6)</h3>

          <p>
            Estas obras representan la mayor intensidad de movimiento de materiales. Aunque el
            contrato principal es complejo, existen oportunidades críticas para transportistas
            locales en:
          </p>

          <ul>
            <li>Entrega de acero y concreto.</li>
            <li>Movimiento de escombro y residuos.</li>
            <li>
              Logística en &ldquo;100 frentes de trabajo&rdquo; que requieren flexibilidad y
              capacidad de respuesta inmediata.
            </li>
          </ul>

          <h3>Programas de Mantenimiento Continuo</h3>

          <p>
            El programa <strong>&ldquo;Vialidades Regias 2026&rdquo;</strong> ya realiza trabajos de
            rehabilitación en la <strong>Carretera Nacional</strong>. Estos proyectos generan una
            demanda constante de suministros de asfalto y retiro de material fresado, a menudo
            realizados en horarios nocturnos.
          </p>
        </section>

        <hr />

        {/* ── Canales de Monitoreo ── */}
        <section id="monitoreo">
          <h2>Canales de Monitoreo y Registro</h2>

          <p>
            Para acceder a estas oportunidades, es fundamental monitorear los siguientes portales y
            procesos:
          </p>

          <table>
            <thead>
              <tr>
                <th>Entidad / Portal</th>
                <th>Utilidad para el Transportista</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Proveedores Nuevo León / SECOP</strong>
                </td>
                <td>
                  Registro obligatorio para participar en licitaciones estatales de obras y
                  servicios.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Licitaciones Metrorrey</strong>
                </td>
                <td>
                  Publica paquetes de mantenimiento y construcción (ej. inspección de túneles en
                  Línea 2).
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Agua y Drenaje de Monterrey (SADM)</strong>
                </td>
                <td>
                  Crucial para proyectos de reemplazo de tuberías y drenaje que requieren acarreo
                  masivo.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Periódico Oficial del Estado</strong>
                </td>
                <td>
                  Medio oficial donde se publican las convocatorias de obras públicas municipales
                  (ej. San Pedro).
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Transparencia Monterrey</strong>
                </td>
                <td>
                  Permite acceder a los &ldquo;Resúmenes de convocatoria&rdquo; y calendarios de
                  eventos de licitación.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr />

        {/* ── Prospectos de Alta Prioridad ── */}
        <section id="prospectos">
          <h2>Prospectos de Proyectos de Alta Prioridad</h2>

          <h3>Distribuidor Vial Gómez Morín (San Pedro Garza García)</h3>

          <ul>
            <li>
              <strong>Detalles:</strong> Iniciado en febrero de 2026 con un periodo de ejecución de
              300 días.
            </li>
            <li>
              <strong>Oportunidad:</strong> Requiere logística frecuente para acero de refuerzo,
              cimbra y retiro de material excavado en una zona urbana densa.
            </li>
          </ul>

          <h3>Infraestructura Estatal (FIDEPROES)</h3>

          <ul>
            <li>
              <strong>Ejemplo:</strong> Contrato de sistemas contra incendios adjudicado a{" "}
              <strong>FAMEL INTERNACIONAL, S.A. DE C.V.</strong>
            </li>
            <li>
              <strong>Valor del Lead:</strong> Identificar a los ganadores permite ofrecerles
              servicios de logística de materiales de forma directa.
            </li>
          </ul>
        </section>

        <hr />

        {/* ── Plan de Acción ── */}
        <section id="plan">
          <h2>Plan de Acción para Pequeñas Empresas</h2>

          <p>
            Para maximizar las probabilidades de éxito, se recomienda la siguiente secuencia:
          </p>

          <ol>
            <li>
              <strong>Registro Temprano:</strong> Inscribirse en el Catálogo de Proveedores
              municipal y estatal para evitar retrasos administrativos al ser contratado.
            </li>
            <li>
              <strong>Identificar al Contratista Principal:</strong> Utilizar los documentos de
              &ldquo;Fallo&rdquo; o &ldquo;Acta de Adjudicación&rdquo; para obtener los nombres de
              las empresas que ganaron la obra.
            </li>
            <li>
              <strong>Oferta de Valor Específica:</strong>
              <ul>
                <li>Capacidad para trabajos nocturnos (especialmente en rehabilitación vial).</li>
                <li>
                  Disponibilidad de camiones para múltiples frentes de trabajo simultáneos.
                </li>
                <li>Conocimiento de rutas locales y cumplimiento normativo.</li>
              </ul>
            </li>
          </ol>
        </section>
      </article>
    </main>
  )
}
