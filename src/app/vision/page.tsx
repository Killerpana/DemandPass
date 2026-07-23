import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visión",
  description: "DemandPass es la capa de inteligencia previa al ticketing: demanda verificada antes de confirmar un show.",
};

const HORIZONS = [
  {
    n: "H1",
    t: "La herramienta",
    d: "Campañas de validación de demanda como servicio para productoras. La productora y el artista traen su audiencia; DemandPass mide ciudad, precio aceptado e intención real de compra, y entrega un reporte accionable antes de firmar venue o talent.",
  },
  {
    n: "H2",
    t: "La capa de datos",
    d: "Con campañas acumuladas, DemandPass deja de vender campañas sueltas y vende conocimiento del mercado: benchmarks por ciudad y género, elasticidad de precio regional y Tour Expansion Intelligence por suscripción. El dato que hoy nadie tiene en LATAM: disposición a pagar, por ciudad.",
  },
  {
    n: "H3",
    t: "El rail",
    d: "La reserva condicional y el Priority Pass como estándar regional para lanzar shows con incertidumbre. DemandPass se convierte en la infraestructura por la que pasa la intención de compra antes del ticketing — en LATAM y en cualquier mercado con la misma asimetría entre capital e interior.",
  },
] as const;

const WHY_NOW = [
  { t: "La industria decide a ciegas", d: "El booking usa streams y redes: miden atención, no intención de compra. La brecha entre escuchar y pagar sigue sin dueño." },
  { t: "El interior está desatendido", d: "Los shows se concentran en capitales. Cada fecha que no se abre en Córdoba, Rosario o Montevideo es revenue que la industria deja en la mesa." },
  { t: "La señal con costo predice", d: "Una reserva condicional respaldada con dinero es la única señal de demanda que se comporta como una compra. Eso es lo que DemandPass mide." },
] as const;

export default function VisionPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-txt3 mb-3">La visión</p>
      <h1 className="font-condensed text-5xl md:text-7xl font-extrabold uppercase leading-[0.95] mb-8">
        La capa de inteligencia<br />previa al ticketing.
      </h1>

      <div className="space-y-5 text-[16px] leading-relaxed text-txt2 mb-16">
        <p>
          En la música en vivo, las decisiones más caras se toman con las señales más pobres. Una productora
          compromete talent fee, venue y producción antes de vender una sola entrada — con streams, seguidores
          e intuición como única evidencia.
        </p>
        <p>
          <strong className="text-txt">DemandPass convierte la intención de compra en un dato medible antes de que el show exista.</strong>{" "}
          Los fans expresan demanda real por ciudad, precio y tipo de entrada — y pueden respaldarla con una
          reserva condicional reembolsable. Las productoras deciden con esa señal, y la venta final ocurre
          siempre en la ticketera oficial.
        </p>
      </div>

      <p className="font-mono text-xs uppercase tracking-[0.2em] text-txt3 mb-6">Por qué ahora</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {WHY_NOW.map((w) => (
          <div key={w.t} className="rounded-lg p-5" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "var(--color-surface)" }}>
            <div className="font-condensed text-lg font-extrabold uppercase mb-2">{w.t}</div>
            <p className="text-[13px] leading-relaxed text-txt2">{w.d}</p>
          </div>
        ))}
      </div>

      <p className="font-mono text-xs uppercase tracking-[0.2em] text-txt3 mb-6">Cómo crece</p>
      <div className="flex flex-col gap-5 mb-16">
        {HORIZONS.map((h) => (
          <div key={h.n} className="rounded-lg p-6 flex gap-6 items-start" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "var(--color-surface)" }}>
            <div className="font-condensed text-3xl font-extrabold shrink-0" style={{ color: "var(--color-burg3)" }}>{h.n}</div>
            <div>
              <div className="font-condensed text-2xl font-extrabold uppercase mb-2">{h.t}</div>
              <p className="text-[14px] leading-relaxed text-txt2">{h.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg p-8 text-center" style={{ border: "1px solid rgba(255,255,255,0.10)", background: "var(--color-surface)" }}>
        <div className="font-condensed text-3xl font-extrabold uppercase mb-3">Miralo en acción</div>
        <p className="text-[14px] text-txt2 mb-6">
          Esta demo recorre el flujo completo con datos simulados: del apoyo de un fan al dashboard con el que
          una productora decide.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/campaigns"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[14px] font-bold uppercase tracking-[0.06em] text-white"
            style={{ background: "var(--color-burg3)", boxShadow: "0 6px 18px rgba(196,38,78,0.32)" }}
          >
            Empezar como fan <span aria-hidden>→</span>
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[14px] font-bold uppercase tracking-[0.06em] text-txt"
            style={{ border: "1px solid rgba(255,255,255,0.18)" }}
          >
            Ver el dashboard B2B
          </Link>
        </div>
      </div>
    </main>
  );
}
