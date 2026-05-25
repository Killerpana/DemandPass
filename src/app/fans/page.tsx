import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Para fans — DemandPass",
  description: "Expresá demanda real. Obtené prioridad de acceso cuando el show se confirme.",
};

const PASOS = [
  { n: "01", title: "Elegí tu artista", desc: "Encontrá campañas activas o creá una Fan Demand para un artista que querés ver en tu ciudad." },
  { n: "02", title: "Registrá tu demanda", desc: "Indicá ciudad, precio que estás dispuesto a pagar y tipo de entrada. Podés hacer una reserva condicional." },
  { n: "03", title: "Obtené tu token", desc: "Tu DemandPass token te da acceso prioritario a la preventa si el show se confirma oficialmente." },
];

const PLANES = [
  { nombre: "Free", precio: "Gratis", items: ["Ver campañas", "Apoyar Fan Demand", "Alertas básicas"], cta: "Crear cuenta", highlight: false },
  { nombre: "Bronce", precio: "USD 4", sub: "/mes", items: ["Todo Free", "Badge Bronce", "Acceso a cupos liberados", "Beneficios en eventos"], cta: "Empezar", highlight: false },
  { nombre: "Plata", precio: "USD 9", sub: "/mes", items: ["Todo Bronce", "Mejor posición en preventa", "Acceso anticipado a campañas", "Perks digitales"], cta: "Empezar", highlight: true },
  { nombre: "Oro", precio: "USD 19", sub: "/mes", items: ["Todo Plata", "Mayor prioridad en cupos liberados", "Impulsar bloques de demanda", "Beneficios premium"], cta: "Empezar", highlight: false },
];

export default function FansPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="px-5 md:px-12 pt-20 pb-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #08080D 55%, #120818 100%)" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-[11px] font-semibold uppercase tracking-[0.1em]"
            style={{ background: "rgba(163,22,69,0.15)", border: "1px solid rgba(163,22,69,0.35)", color: "#E43A66" }}>
            ◆ Para fans
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(42px,7vw,88px)] font-black leading-[0.92] uppercase mb-6">
            TU APOYO<br />
            <span style={{ color: "var(--color-burg3)" }}>MUEVE SHOWS.</span>
          </h1>
          <p className="text-[17px] leading-[1.65] max-w-[520px] mb-10" style={{ color: "var(--color-txt2)" }}>
            Expresá demanda real antes de que el show se confirme. Si llega al objetivo, obtenés acceso prioritario a la preventa oficial — antes que todos.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/campaigns"
              className="px-7 py-3.5 rounded-md text-white font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.05em] transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-burg3)", boxShadow: "0 8px 24px rgba(196,38,78,0.38), inset 0 1px 0 rgba(255,255,255,0.18)" }}>
              Ver campañas activas →
            </Link>
            <Link href="/signin"
              className="px-7 py-3.5 rounded-md font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.05em]"
              style={{ border: "1px solid var(--color-border2)", color: "var(--color-txt)" }}>
              Crear mi cuenta
            </Link>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-[40%] h-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 50%, #A31645 0%, transparent 70%)" }} />
      </section>

      {/* Pasos */}
      <section className="px-5 md:px-12 py-20" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--color-burg3)" }}>Cómo funciona</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,48px)] font-black uppercase mb-14">
            TRES PASOS.<br /><span style={{ color: "var(--color-txt3)" }}>DATOS REALES.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PASOS.map(p => (
              <div key={p.n} className="p-7 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
                <div className="font-[family-name:var(--font-display)] text-[48px] font-black mb-4 leading-none" style={{ color: "rgba(163,22,69,0.25)" }}>{p.n}</div>
                <h3 className="font-[family-name:var(--font-display)] text-[18px] font-bold uppercase tracking-[0.03em] mb-3">{p.title}</h3>
                <p className="text-[14px] leading-[1.65]" style={{ color: "var(--color-txt2)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="px-5 md:px-12 py-20" style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--color-burg3)" }}>Planes para fans</p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,48px)] font-black uppercase">
              EMPEZÁ GRATIS.<br /><span style={{ color: "var(--color-txt3)" }}>SUBÍ TU PRIORIDAD.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLANES.map(p => (
              <div key={p.nombre} className="relative p-6 rounded-xl flex flex-col"
                style={{ background: p.highlight ? "rgba(163,22,69,0.08)" : "var(--color-bg)", border: p.highlight ? "1px solid rgba(163,22,69,0.45)" : "1px solid var(--color-border)" }}>
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] text-white"
                    style={{ background: "var(--color-burg3)" }}>Más elegido</div>
                )}
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] mb-2" style={{ color: "var(--color-burg3)" }}>{p.nombre}</p>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="font-[family-name:var(--font-display)] text-[30px] font-black">{p.precio}</span>
                  {p.sub && <span className="text-[12px]" style={{ color: "var(--color-txt3)" }}>{p.sub}</span>}
                </div>
                <ul className="flex flex-col gap-2 flex-1 mb-6">
                  {p.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[12px]" style={{ color: "var(--color-txt2)" }}>
                      <span style={{ color: "var(--color-burg3)", flexShrink: 0 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <Link href="/signin" className="w-full py-2.5 text-center rounded-md font-[family-name:var(--font-display)] text-[12px] font-bold uppercase tracking-[0.06em] transition-all"
                  style={p.highlight ? { background: "var(--color-burg3)", color: "white" } : { border: "1px solid var(--color-border2)", color: "var(--color-txt)" }}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-[11px] mt-6" style={{ color: "var(--color-txt3)" }}>
            Ningún plan supera a quien hizo reserva condicional — la máxima prioridad siempre es del reservante.
          </p>
        </div>
      </section>
    </main>
  );
}
