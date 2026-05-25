import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Para productoras y promotores — DemandPass",
  description: "Inteligencia de demanda verificada para tomar decisiones de booking, ciudad, precio y preventa.",
};

const FEATURES = [
  { icon: "📊", title: "Demand Score", desc: "Índice accionable de la fuerza de demanda de cada campaña. No son likes — es inteligencia real." },
  { icon: "🗺", title: "Demand Map", desc: "Mapa de demanda por ciudad y región. Sabé si Córdoba o Mendoza aguantan una fecha antes de confirmarla." },
  { icon: "🚀", title: "Tour Expansion Intelligence", desc: "Evaluá si una gira puede expandirse a ciudades del interior o nuevos países con datos verificados." },
  { icon: "💰", title: "Price Intelligence", desc: "Curva de precio óptima basada en el rango que tus fans están dispuestos a pagar." },
  { icon: "⚡", title: "Fan Signals", desc: "Encuestas y señales agregadas: ciudad, precio, tipo de entrada, beneficios, disposición a viajar." },
  { icon: "🎟", title: "Priority Access", desc: "Gestioná la preventa con tokens de prioridad verificados — integración con ticketera oficial." },
];

const PLANES = [
  {
    nombre: "Standard",
    desc: "Para productoras medianas o campañas puntuales",
    items: ["Campañas oficiales ilimitadas", "Dashboard básico", "Demand por ciudad", "Rango de precio", "Export básico", "Encuestas limitadas"],
    cta: "Consultar precio", highlight: false,
  },
  {
    nombre: "Premium",
    desc: "Para productoras grandes",
    items: ["Todo Standard", "Demand Score + Demand Map", "Price Intelligence", "Fan Signals avanzado", "Tour Expansion Intelligence", "Análisis post-campaña", "Soporte prioritario"],
    cta: "Hablar con ventas", highlight: true,
  },
  {
    nombre: "Enterprise",
    desc: "Ticketeras y grupos regionales",
    items: ["Todo Premium", "Integración API", "Reportes regionales LATAM", "Benchmarks agregados", "Success fee negociado", "Account manager dedicado", "SLA garantizado"],
    cta: "Contactar", highlight: false,
  },
];

export default function ProductorasPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="px-5 md:px-12 pt-20 pb-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #08080D 55%, #0d1218 100%)" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-[11px] font-semibold uppercase tracking-[0.1em]"
            style={{ background: "rgba(163,22,69,0.15)", border: "1px solid rgba(163,22,69,0.35)", color: "#E43A66" }}>
            ◆ Para productoras y promotores
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(42px,7vw,88px)] font-black leading-[0.92] uppercase mb-6">
            DECIDÍ CON DATOS,<br />
            <span style={{ color: "var(--color-burg3)" }}>NO CON INTUICIÓN.</span>
          </h1>
          <p className="text-[17px] leading-[1.65] max-w-[560px] mb-10" style={{ color: "var(--color-txt2)" }}>
            La industria tiene streams, seguidores e históricos. Pero no tiene una forma confiable de saber cuánta gente va a comprar una entrada, a qué precio, en qué ciudad — antes de confirmar el show. DemandPass resuelve eso.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/dashboard"
              className="px-7 py-3.5 rounded-md text-white font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.05em] transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-burg3)", boxShadow: "0 8px 24px rgba(196,38,78,0.38), inset 0 1px 0 rgba(255,255,255,0.18)" }}>
              Ver demo del dashboard →
            </Link>
            <Link href="/signin"
              className="px-7 py-3.5 rounded-md font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.05em]"
              style={{ border: "1px solid var(--color-border2)", color: "var(--color-txt)" }}>
              Hablar con ventas
            </Link>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-[40%] h-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 50%, #1a3a6e 0%, transparent 70%)" }} />
      </section>

      {/* Features */}
      <section className="px-5 md:px-12 py-20" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--color-burg3)" }}>Módulos del producto</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,48px)] font-black uppercase mb-14">
            INTELIGENCIA ACCIONABLE<br /><span style={{ color: "var(--color-txt3)" }}>EN CADA DECISIÓN.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(f => (
              <div key={f.title} className="p-6 rounded-xl transition-colors hover:border-[rgba(163,22,69,0.3)]"
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.04em] mb-2">{f.title}</h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: "var(--color-txt2)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes B2B */}
      <section className="px-5 md:px-12 py-20" style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--color-burg3)" }}>Planes B2B</p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,48px)] font-black uppercase">
              ESCALÁ SEGÚN<br /><span style={{ color: "var(--color-txt3)" }}>TU OPERACIÓN.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLANES.map(p => (
              <div key={p.nombre} className="relative p-7 rounded-xl flex flex-col"
                style={{ background: p.highlight ? "rgba(163,22,69,0.08)" : "var(--color-bg)", border: p.highlight ? "1px solid rgba(163,22,69,0.5)" : "1px solid var(--color-border)" }}>
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] text-white"
                    style={{ background: "var(--color-burg3)" }}>Más elegido</div>
                )}
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] mb-1" style={{ color: "var(--color-burg3)" }}>{p.nombre}</p>
                <p className="text-[12px] mb-5" style={{ color: "var(--color-txt3)" }}>{p.desc}</p>
                <ul className="flex flex-col gap-2.5 flex-1 mb-7">
                  {p.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px]" style={{ color: "var(--color-txt2)" }}>
                      <span style={{ color: "var(--color-burg3)", flexShrink: 0, marginTop: "2px" }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <Link href="/signin" className="w-full py-3 text-center rounded-md font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] transition-all"
                  style={p.highlight ? { background: "var(--color-burg3)", color: "white", boxShadow: "0 6px 18px rgba(196,38,78,0.3)" } : { border: "1px solid var(--color-border2)", color: "var(--color-txt)" }}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-[11px] mt-6" style={{ color: "var(--color-txt3)" }}>
            Fase inicial: pilotos gratuitos o bonificados para primeras productoras. Contactanos.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-12 py-20 text-center" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,48px)] font-black uppercase mb-5">
            ¿LISTO PARA TOMAR<br /><span style={{ color: "var(--color-burg3)" }}>MEJORES DECISIONES?</span>
          </h2>
          <p className="text-[15px] leading-[1.65] mb-8" style={{ color: "var(--color-txt2)" }}>
            Empezá con un piloto gratuito. Te mostramos cómo DemandPass se integra a tu operación actual.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-white font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.05em] transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-burg3)", boxShadow: "0 8px 24px rgba(196,38,78,0.38)" }}>
              Ver demo →
            </Link>
            <Link href="/signin"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.05em]"
              style={{ border: "1px solid var(--color-border2)", color: "var(--color-txt)" }}>
              Hablar con ventas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
