import Link from "next/link";
import type { Metadata } from "next";
import { TrendingUp, Map, Route, LineChart, Zap, Ticket } from "lucide-react";

export const metadata: Metadata = {
  title: "Para productoras y promotores",
  description: "Inteligencia de demanda verificada para booking, ciudad, precio y preventa.",
};

const FEATURES = [
  { Icon: TrendingUp, title: "Demand Score",                desc: "Índice accionable de fuerza de demanda. No son likes — es inteligencia real." },
  { Icon: Map,        title: "Demand Map",                  desc: "Mapa por ciudad y región. Sabé si Córdoba aguanta una fecha antes de confirmarla." },
  { Icon: Route,      title: "Tour Expansion Intelligence", desc: "Evaluá expansión a ciudades del interior o nuevos países con datos verificados." },
  { Icon: LineChart,  title: "Price Intelligence",          desc: "Curva de precio óptima basada en lo que los fans están dispuestos a pagar." },
  { Icon: Zap,        title: "Fan Signals",                 desc: "Ciudad, precio, tipo de entrada, beneficios, disposición a viajar — agregado." },
  { Icon: Ticket,     title: "Priority Access",             desc: "Tokens verificados para preventa — integración con ticketera oficial." },
];

const PLANES = [
  {
    nombre: "Standard",
    precio: "USD 199",
    sub: "/mes · USD 2.029,80/año",
    desc: "Productora chica o campaña puntual",
    items: [
      "Campañas oficiales nativas con reservas",
      "Dashboard básico",
      "Señales de demanda por ciudad",
      "Sensibilidad de precio y beneficios",
      "2 créditos/mes incluidos (rollover máx. 3)",
      "Reporte estándar + soporte estándar",
    ],
    cta: "Consultar", highlight: false,
  },
  {
    nombre: "Premium",
    precio: "USD 999",
    sub: "/mes · USD 10.189,80/año",
    desc: "Productora recurrente que opera a volumen",
    items: [
      "Todo Standard con más campañas",
      "Demand Score + Demand Map completo",
      "Price Intelligence + Tour Expansion",
      "Encuestas custom + Fan Signals avanzado",
      "Análisis post-campaña + descarga de reportes y datos",
      "6 créditos/mes incluidos (rollover máx. 9)",
      "Soporte prioritario",
    ],
    cta: "Hablar con ventas", highlight: true,
  },
  {
    nombre: "Enterprise",
    precio: "desde USD 3.500",
    sub: "/mes · desde USD 35.700/año",
    desc: "Gran productora, ticketera o grupo multi-marca",
    items: [
      "Todo Premium con capacidad custom",
      "APIs + dashboards custom + multi-país",
      "Benchmarks + capas de datos avanzadas",
      "SLA garantizado + account manager",
      "White-label / Powered by DemandPass",
      "Créditos y campañas según contrato",
      "Success fee negociado (0,5–2%)",
    ],
    cta: "Contactar", highlight: false,
  },
];

const FEES = [
  { label: "Campaña extra en Standard",  valor: "USD 150" },
  { label: "Campaña extra en Premium",   valor: "USD 100" },
  { label: "Reporte / survey / map one-off", valor: "USD 300–1.000" },
  { label: "Integración API / setup Enterprise", valor: "desde USD 2.500" },
];

function IconBox({ Icon }: { Icon: React.ElementType }) {
  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
      style={{ background: "rgba(163,22,69,0.12)", border: "1px solid rgba(163,22,69,0.2)" }}>
      <Icon size={18} color="#E43A66" strokeWidth={1.75} />
    </div>
  );
}

export default function ProductorasPage() {
  return (
    <main id="main-content">
      <section className="px-5 md:px-12 pt-20 pb-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #08080D 55%, #0d1218 100%)" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-[11px] font-semibold uppercase tracking-[0.1em]"
            style={{ background: "rgba(163,22,69,0.15)", border: "1px solid rgba(163,22,69,0.35)", color: "#E43A66" }}>
            Para productoras y promotores
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(42px,7vw,88px)] font-black leading-[0.92] uppercase mb-6">
            DECIDÍ CON DATOS,<br /><span style={{ color: "var(--color-burg3)" }}>NO CON INTUICIÓN.</span>
          </h1>
          <p className="text-[17px] leading-[1.65] max-w-[560px] mb-10" style={{ color: "var(--color-txt2)" }}>
            La industria tiene streams y seguidores. Pero no sabe cuánta gente va a comprar una entrada, a qué precio, en qué ciudad — antes de confirmar el show. DemandPass resuelve eso.
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
            {FEATURES.map(({ Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
                <IconBox Icon={Icon} />
                <h3 className="font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.04em] mb-2">{title}</h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: "var(--color-txt2)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="px-5 md:px-12 py-20" style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--color-burg3)" }}>Planes B2B</p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,48px)] font-black uppercase">
              CUOTA MENSUAL ALTA,<br /><span style={{ color: "var(--color-txt3)" }}>MENOR COSTO POR CAMPAÑA.</span>
            </h2>
            <p className="text-[13px] mt-4" style={{ color: "var(--color-txt3)" }}>Planes anuales con 15% de descuento.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {PLANES.map(p => (
              <div key={p.nombre} className="relative p-7 rounded-xl flex flex-col"
                style={{ background: p.highlight ? "rgba(163,22,69,0.08)" : "var(--color-bg)", border: p.highlight ? "1px solid rgba(163,22,69,0.5)" : "1px solid var(--color-border)" }}>
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] text-white"
                    style={{ background: "var(--color-burg3)" }}>Más elegido</div>
                )}
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] mb-1" style={{ color: "var(--color-burg3)" }}>{p.nombre}</p>
                <p className="text-[11px] mb-4" style={{ color: "var(--color-txt3)" }}>{p.desc}</p>
                <span className="font-[family-name:var(--font-display)] text-[26px] font-black mb-1">{p.precio}</span>
                <p className="text-[11px] mb-5" style={{ color: "var(--color-txt3)" }}>{p.sub}</p>
                <ul className="flex flex-col gap-2.5 flex-1 mb-7">
                  {p.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-[12px]" style={{ color: "var(--color-txt2)" }}>
                      <span style={{ color: "var(--color-burg3)", flexShrink: 0 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <Link href="/signin" className="w-full py-3 text-center rounded-md font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] mt-auto"
                  style={p.highlight ? { background: "var(--color-burg3)", color: "white", boxShadow: "0 6px 18px rgba(196,38,78,0.3)" } : { border: "1px solid var(--color-border2)", color: "var(--color-txt)" }}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Fees */}
          <div className="p-5 rounded-xl" style={{ background: "rgba(163,22,69,0.06)", border: "1px solid rgba(163,22,69,0.2)" }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] mb-3" style={{ color: "var(--color-burg3)" }}>Fees adicionales</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FEES.map(f => (
                <div key={f.label} className="flex items-center justify-between gap-2">
                  <span className="text-[12px]" style={{ color: "var(--color-txt2)" }}>{f.label}</span>
                  <span className="text-[13px] font-bold shrink-0" style={{ color: "var(--color-txt)" }}>{f.valor}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] mt-3" style={{ color: "var(--color-txt3)" }}>
              Activación de reservas incluida en todos los planes. Fase inicial: pilotos bonificados para primeras productoras.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
