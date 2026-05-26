import Link from "next/link";
import type { Metadata } from "next";
import { Search, ShieldCheck, Ticket, Star, Bell, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Para fans",
  description: "Expresá demanda real. Obtené prioridad de acceso cuando el show se confirme.",
};

const PASOS = [
  { n: "01", title: "Elegí tu artista",    desc: "Encontrá campañas activas o apoyá una Fan Demand para un artista que querés ver en tu ciudad." },
  { n: "02", title: "Registrá tu demanda", desc: "Indicá ciudad, precio y tipo de entrada. Podés hacer una reserva condicional en campañas oficiales." },
  { n: "03", title: "Obtené tu Priority Pass",     desc: "Tu DemandPass Priority Pass te da acceso prioritario a la preventa si el show se confirma oficialmente." },
];

const BENEFICIOS = [
  { Icon: Search,      title: "Descubrí antes",       desc: "Accedé a campañas antes de que el show se anuncie públicamente." },
  { Icon: ShieldCheck, title: "Demanda verificada",   desc: "Apoyos verificados con controles anti-fraude. Sin cuentas falsas ni bots." },
  { Icon: Ticket,      title: "Prioridad de acceso",  desc: "Tu Priority Pass te da ventana de preventa antes que el público general." },
  { Icon: Star,        title: "Mejor posición",       desc: "Bronce, Plata y Oro acceden a sectores exclusivos cuando el show se confirma." },
  { Icon: Bell,        title: "Alertas a tiempo",     desc: "Te avisamos cuando se confirma un show que apoyaste." },
  { Icon: Globe,       title: "LATAM y más",          desc: "Argentina, México, Chile, Colombia y creciendo." },
];

const PLANES = [
  {
    nombre: "Free", precio: "Gratis", sub: null,
    rol: "Descubrimiento y señal",
    items: [
      "Ver todas las campañas",
      "Seguir artistas (con límite)",
      "Apoyar Fan Demand (con límite)",
      "Reservar si la campaña lo habilita",
      "Alertas básicas",
    ],
    nota: "Sin beneficios físicos por membresía. Sin acceso a cupos liberados.",
    highlight: false, cta: "Crear cuenta",
  },
  {
    nombre: "Bronce", precio: "USD 2,49", sub: "/mes · USD 25,40/año",
    rol: "Fan activo — digital",
    items: [
      "Límites mucho más altos que Free",
      "Más campañas para seguir y apoyar",
      "Badge Bronce verificado",
      "Alertas mejoradas y personalizadas",
      "Mayor participación en Fan Demand",
      "Sin beneficios físicos por membresía",
    ],
    nota: "Plan 100% digital. Los beneficios físicos están disponibles desde Plata.",
    highlight: false, cta: "Empezar",
  },
  {
    nombre: "Plata", precio: "USD 5,99", sub: "/mes · USD 61,10/año",
    rol: "Fan frecuente — beneficios reales",
    items: [
      "Todo Bronce con límites más altos",
      "Descuentos en entradas y merch (eventos participantes)",
      "Fast-lane en eventos participantes",
      "Fanzone y upgrades/sorteos (sujeto a disponibilidad)",
      "Mejor posición en cupos liberados",
      "Acceso anticipado a ciertas campañas",
      "Beneficios en eventos participantes",
    ],
    nota: "En eventos y campañas participantes, sujeto a disponibilidad, stock y acuerdo con productora o artista.",
    highlight: true, cta: "Empezar",
  },
  {
    nombre: "Oro", precio: "USD 10,99", sub: "/mes · USD 112,10/año",
    rol: "Superfan — experiencia premium",
    items: [
      "Todo Plata con los mejores límites",
      "Máxima prioridad secundaria (tras reservantes)",
      "Fast-lane y fanzone prioritarios (eventos participantes)",
      "Mejores upgrades y sorteos (sujeto a disponibilidad)",
      "Soporte prioritario",
      "Acceso a funciones beta",
    ],
    nota: "En eventos y campañas participantes, sujeto a disponibilidad, stock y acuerdo con productora o artista.",
    highlight: false, cta: "Empezar",
  },
];

function IconBox({ Icon }: { Icon: React.ElementType }) {
  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
      style={{ background: "rgba(163,22,69,0.12)", border: "1px solid rgba(163,22,69,0.2)" }}>
      <Icon size={18} color="#E43A66" strokeWidth={1.75} />
    </div>
  );
}

export default function FansPage() {
  return (
    <main id="main-content">
      <section className="px-5 md:px-12 pt-20 pb-24 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #08080D 55%, #120818 100%)" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-[11px] font-semibold uppercase tracking-[0.1em]"
            style={{ background: "rgba(163,22,69,0.15)", border: "1px solid rgba(163,22,69,0.35)", color: "#E43A66" }}>
            Para fans
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(42px,7vw,88px)] font-black leading-[0.92] uppercase mb-6">
            TU APOYO<br /><span style={{ color: "var(--color-burg3)" }}>MUEVE SHOWS.</span>
          </h1>
          <p className="text-[17px] leading-[1.65] max-w-[520px] mb-10" style={{ color: "var(--color-txt2)" }}>
            Expresá demanda real antes de que el show se confirme. Si llega al objetivo, obtenés acceso prioritario a la preventa oficial — antes que todos.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/fan/campaigns"
              className="px-7 py-3.5 rounded-md text-white font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.05em] transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-burg3)", boxShadow: "0 8px 24px rgba(196,38,78,0.38), inset 0 1px 0 rgba(255,255,255,0.18)" }}>
              Ver campañas →
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
                <div className="font-[family-name:var(--font-display)] text-[48px] font-black mb-4 leading-none" style={{ color: "rgba(163,22,69,0.2)" }}>{p.n}</div>
                <h3 className="font-[family-name:var(--font-display)] text-[17px] font-bold uppercase tracking-[0.03em] mb-3">{p.title}</h3>
                <p className="text-[14px] leading-[1.65]" style={{ color: "var(--color-txt2)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="px-5 md:px-12 py-20" style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--color-burg3)" }}>Beneficios</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,48px)] font-black uppercase mb-14">
            MÁS QUE UN VOTO.<br /><span style={{ color: "var(--color-txt3)" }}>UN ACCESO.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFICIOS.map(({ Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl" style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
                <IconBox Icon={Icon} />
                <h3 className="font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.04em] mb-2">{title}</h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: "var(--color-txt2)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="px-5 md:px-12 py-20" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--color-burg3)" }}>Planes</p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,48px)] font-black uppercase">
              EMPEZÁ GRATIS.<br /><span style={{ color: "var(--color-txt3)" }}>SUBÍ TU PRIORIDAD.</span>
            </h2>
            <p className="text-[13px] mt-4" style={{ color: "var(--color-txt3)" }}>Planes anuales con 15% de descuento.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLANES.map(p => (
              <div key={p.nombre} className="relative p-6 rounded-xl flex flex-col"
                style={{ background: p.highlight ? "rgba(163,22,69,0.08)" : "var(--color-surface)", border: p.highlight ? "1px solid rgba(163,22,69,0.45)" : "1px solid var(--color-border)" }}>
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] text-white"
                    style={{ background: "var(--color-burg3)" }}>Más elegido</div>
                )}
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] mb-1" style={{ color: "var(--color-burg3)" }}>{p.nombre}</p>
                <p className="text-[10px] mb-3" style={{ color: "var(--color-txt3)" }}>{p.rol}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-[family-name:var(--font-display)] text-[26px] font-black">{p.precio}</span>
                </div>
                {p.sub && <p className="text-[10px] mb-4" style={{ color: "var(--color-txt3)" }}>{p.sub}</p>}
                {!p.sub && <div className="mb-4" />}
                <ul className="flex flex-col gap-2 flex-1 mb-3">
                  {p.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[12px]" style={{ color: "var(--color-txt2)" }}>
                      <span style={{ color: "var(--color-burg3)", flexShrink: 0 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                {p.nota && (
                  <p className="text-[10px] mb-4 leading-[1.5]" style={{ color: "var(--color-txt3)" }}>{p.nota}</p>
                )}
                <Link href="/signin" className="w-full py-2.5 text-center rounded-md font-[family-name:var(--font-display)] text-[12px] font-bold uppercase tracking-[0.06em] transition-all mt-auto"
                  style={p.highlight ? { background: "var(--color-burg3)", color: "white" } : { border: "1px solid var(--color-border2)", color: "var(--color-txt)" }}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-[11px] mt-6" style={{ color: "var(--color-txt3)" }}>
            Regla de prioridad: Reservantes condicionales → Oro → Plata → Bronce → Free.
            La reserva condicional supera siempre a cualquier plan.
          </p>
        </div>
      </section>
    </main>
  );
}
