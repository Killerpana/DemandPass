import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Para artistas independientes — DemandPass",
  description: "Medí demanda real antes de confirmar tu show. Creá campañas, entendé dónde están tus fans y planificá tu gira con datos.",
};

const BENEFICIOS = [
  { icon: "📍", title: "Sabé dónde están tus fans", desc: "Demanda real por ciudad antes de confirmar cualquier fecha." },
  { icon: "💰", title: "Validá el precio", desc: "Entendé cuánto está dispuesta a pagar tu audiencia antes de anunciar." },
  { icon: "🎟", title: "Campañas propias", desc: "Creá una campaña de fan demand o campaña oficial verificada por DemandPass." },
  { icon: "🗺", title: "Planificá mini-giras", desc: "Demand Map te muestra qué ciudades pueden sostener una fecha tuya." },
  { icon: "⭐", title: "Beneficios para tus fans", desc: "Meet & greet, charla virtual, acceso a ensayo, merch — vos definís qué ofrecés." },
  { icon: "📊", title: "Dashboard propio", desc: "Estadísticas de tu campaña: apoyos, ciudades top, rango de precio, Demand Score." },
];

const PLANES = [
  {
    nombre: "Starter",
    precio: "Gratis",
    sub: "para empezar",
    items: ["1 campaña fan demand", "Hasta 500 apoyos", "Estadísticas básicas", "Perfil verificado"],
    cta: "Crear perfil",
    href: "/signin",
    highlight: false,
  },
  {
    nombre: "Indie",
    precio: "USD 29",
    sub: "por campaña",
    items: ["3 campañas activas", "Apoyos ilimitados", "Demand Score + Map", "Beneficios personalizados", "Dashboard completo", "Soporte por email"],
    cta: "Empezar ahora",
    href: "/signin",
    highlight: true,
  },
  {
    nombre: "Pro",
    precio: "USD 79",
    sub: "por mes",
    items: ["Campañas ilimitadas", "Todo lo de Indie", "Tour Expansion Intelligence", "Fan Signals avanzado", "Soporte prioritario"],
    cta: "Contactar",
    href: "/signin",
    highlight: false,
  },
];

export default function ArtistasPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 md:px-12 pt-20 pb-24"
        style={{ background: "linear-gradient(160deg, #08080D 60%, #1a0812 100%)" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-[11px] font-semibold uppercase tracking-[0.1em]"
            style={{ background: "rgba(163,22,69,0.15)", border: "1px solid rgba(163,22,69,0.35)", color: "#E43A66" }}>
            ◆ Para artistas independientes
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(42px,7vw,88px)] font-black leading-[0.92] uppercase mb-6"
            style={{ letterSpacing: "-0.01em" }}>
            TUS FANS<br />
            <span style={{ color: "var(--color-burg3)" }}>SON DATOS.</span><br />
            USÁLOS.
          </h1>

          <p className="text-[17px] leading-[1.65] max-w-[540px] mb-10" style={{ color: "var(--color-txt2)" }}>
            Antes de confirmar un show, saber si existe la demanda. DemandPass te da inteligencia real de fans — ciudad, precio, tipo de entrada — para que tomes decisiones con datos, no con intuición.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/signin"
              className="px-7 py-3.5 rounded-md text-white font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.05em] transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-burg3)", boxShadow: "0 8px 24px rgba(196,38,78,0.38), inset 0 1px 0 rgba(255,255,255,0.18)" }}>
              Crear mi perfil de artista →
            </Link>
            <Link href="/campaigns"
              className="px-7 py-3.5 rounded-md font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.05em] transition-colors"
              style={{ border: "1px solid var(--color-border2)", color: "var(--color-txt)" }}>
              Ver campañas activas
            </Link>
          </div>
        </div>

        {/* Decoración */}
        <div className="absolute right-0 top-0 w-[40%] h-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 50%, #A31645 0%, transparent 70%)" }} />
      </section>

      {/* Beneficios */}
      <section className="px-5 md:px-12 py-20" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--color-burg3)" }}>
            Por qué DemandPass
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,48px)] font-black uppercase mb-14" style={{ letterSpacing: "-0.01em" }}>
            DECIDÍ CON DATOS,<br />
            <span style={{ color: "var(--color-txt3)" }}>NO CON INTUICIÓN.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFICIOS.map((b) => (
              <div key={b.title} className="p-6 rounded-xl transition-colors hover:border-[rgba(163,22,69,0.3)]"
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-[family-name:var(--font-display)] text-[16px] font-bold uppercase tracking-[0.03em] mb-2">
                  {b.title}
                </h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: "var(--color-txt2)" }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="px-5 md:px-12 py-20" style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--color-burg3)" }}>
              Planes para artistas
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,48px)] font-black uppercase" style={{ letterSpacing: "-0.01em" }}>
              EMPEZÁ GRATIS.<br />
              <span style={{ color: "var(--color-txt3)" }}>ESCALÁ CUANDO ESTÉS LISTO.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLANES.map((p) => (
              <div key={p.nombre}
                className="relative p-7 rounded-xl flex flex-col"
                style={{
                  background: p.highlight ? "rgba(163,22,69,0.08)" : "var(--color-bg)",
                  border: p.highlight ? "1px solid rgba(163,22,69,0.5)" : "1px solid var(--color-border)",
                }}>
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] text-white"
                    style={{ background: "var(--color-burg3)" }}>
                    Más elegido
                  </div>
                )}
                <div className="mb-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] mb-2" style={{ color: "var(--color-burg3)" }}>
                    {p.nombre}
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-[family-name:var(--font-display)] text-[36px] font-black" style={{ letterSpacing: "-0.02em" }}>
                      {p.precio}
                    </span>
                    <span className="text-[12px]" style={{ color: "var(--color-txt3)" }}>{p.sub}</span>
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5 flex-1 mb-7">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px]" style={{ color: "var(--color-txt2)" }}>
                      <span style={{ color: "var(--color-burg3)", flexShrink: 0, marginTop: "2px" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href={p.href}
                  className="w-full py-3 text-center rounded-md font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] transition-all"
                  style={p.highlight ? {
                    background: "var(--color-burg3)",
                    color: "white",
                    boxShadow: "0 6px 18px rgba(196,38,78,0.3)",
                  } : {
                    border: "1px solid var(--color-border2)",
                    color: "var(--color-txt)",
                  }}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-5 md:px-12 py-20 text-center" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,48px)] font-black uppercase mb-5" style={{ letterSpacing: "-0.01em" }}>
            ¿LISTO PARA SABER<br />
            <span style={{ color: "var(--color-burg3)" }}>DÓNDE ESTÁN TUS FANS?</span>
          </h2>
          <p className="text-[15px] leading-[1.65] mb-8" style={{ color: "var(--color-txt2)" }}>
            Creá tu perfil de artista, lanzá tu primera campaña y entendé tu mercado antes de arriesgar tiempo o dinero en producción.
          </p>
          <Link href="/signin"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-white font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.05em] transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--color-burg3)", boxShadow: "0 8px 24px rgba(196,38,78,0.38)" }}>
            Crear mi perfil →
          </Link>
        </div>
      </section>
    </main>
  );
}
