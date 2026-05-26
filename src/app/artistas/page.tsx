import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, DollarSign, BarChart2, Map, Gift, LayoutDashboard } from "lucide-react";

export const metadata: Metadata = {
  title: "Para artistas independientes",
  description: "Medí demanda real antes de confirmar tu show.",
};

const BENEFICIOS = [
  { Icon: MapPin,          title: "Sabé dónde están tus fans",  desc: "Demanda real por ciudad antes de confirmar cualquier fecha." },
  { Icon: DollarSign,      title: "Validá el precio",           desc: "Entendé cuánto está dispuesta a pagar tu audiencia antes de anunciar." },
  { Icon: BarChart2,       title: "Campañas propias",           desc: "Primero explorás la demanda. Si superás el umbral, DemandPass habilita reserva condicional." },
  { Icon: Map,             title: "Planificá mini-giras",       desc: "Demand Map te muestra qué ciudades pueden sostener una fecha tuya." },
  { Icon: Gift,            title: "Beneficios para tus fans",   desc: "Meet & greet, soundcheck, charla virtual — vos definís, DemandPass valida." },
  { Icon: LayoutDashboard, title: "Dashboard propio",           desc: "Apoyos, ciudades top, rango de precio y Demand Score en tiempo real." },
];

const PLANES = [
  {
    nombre: "Starter",
    precio: "USD 9,99",
    sub: "/mes · USD 101,90/año",
    rol: "Artista emergente que valida si existe demanda",
    items: [
      "1 campaña exploratoria activa",
      "Perfil verificado y página pública",
      "Dashboard básico (señales por ciudad)",
      "Reserva solo tras umbral + validación DemandPass",
      "1 crédito/mes incluido (rollover máx. 2)",
    ],
    nota: "Ideal para validar si existe demanda antes de comprometer producción.",
    highlight: false,
  },
  {
    nombre: "Indie",
    precio: "USD 29,99",
    sub: "/mes · USD 305,90/año",
    rol: "Artista en crecimiento que quiere convertir demanda en show",
    items: [
      "3 campañas exploratorias activas",
      "Hasta 1 campaña con reserva (tras validación)",
      "Demand Score + comparación de ciudades",
      "Testeo de precio y exportables",
      "Tour básico (planificación multi-ciudad)",
      "3 créditos/mes incluidos (rollover máx. 5)",
    ],
    nota: null,
    highlight: true,
  },
  {
    nombre: "Pro",
    precio: "USD 99,99",
    sub: "/mes · USD 1.019,90/año",
    rol: "Artista profesional o manager que planifica mini-giras",
    items: [
      "8 campañas exploratorias o hasta 3 con reserva",
      "Demand Map avanzado + benchmark pricing",
      "Tour mode completo multi-ciudad",
      "Gestión de venue, merch y pauta digital",
      "Soporte prioritario y revisión rápida",
      "8 créditos/mes incluidos (rollover máx. 12)",
    ],
    nota: null,
    highlight: false,
  },
];

const FEES = [
  { label: "Campaña exploratoria extra",    valor: "desde USD 25" },
  { label: "Activación de reserva validada", valor: "USD 99"       },
  { label: "Success fee (ticketing atribuible)", valor: "6–8%"     },
];

function IconBox({ Icon }: { Icon: React.ElementType }) {
  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
      style={{ background: "rgba(163,22,69,0.12)", border: "1px solid rgba(163,22,69,0.2)" }}>
      <Icon size={18} color="#E43A66" strokeWidth={1.75} />
    </div>
  );
}

export default function ArtistasPage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden px-5 md:px-12 pt-20 pb-24"
        style={{ background: "linear-gradient(160deg, #08080D 60%, #1a0812 100%)" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-[11px] font-semibold uppercase tracking-[0.1em]"
            style={{ background: "rgba(163,22,69,0.15)", border: "1px solid rgba(163,22,69,0.35)", color: "#E43A66" }}>
            Para artistas independientes
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(42px,7vw,88px)] font-black leading-[0.92] uppercase mb-6">
            TUS FANS<br /><span style={{ color: "var(--color-burg3)" }}>SON DATOS.</span><br />USÁLOS.
          </h1>
          <p className="text-[17px] leading-[1.65] max-w-[540px] mb-10" style={{ color: "var(--color-txt2)" }}>
            Primero medís demanda por ciudad y precio. Si superás el umbral, DemandPass habilita la reserva condicional. Tu show se confirma con datos, no con intuición.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/signin"
              className="px-7 py-3.5 rounded-md text-white font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.05em] transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-burg3)", boxShadow: "0 8px 24px rgba(196,38,78,0.38), inset 0 1px 0 rgba(255,255,255,0.18)" }}>
              Crear mi perfil →
            </Link>
            <Link href="/artistas/dashboard"
              className="px-7 py-3.5 rounded-md font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.05em]"
              style={{ border: "1px solid var(--color-border2)", color: "var(--color-txt)" }}>
              Ver demo del dashboard
            </Link>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-[40%] h-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 50%, #A31645 0%, transparent 70%)" }} />
      </section>

      {/* Flujo */}
      <section className="px-5 md:px-12 py-16" style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--color-burg3)" }}>Flujo de validación</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(22px,3vw,36px)] font-black uppercase mb-8">
            EXPLORÁS → SUPERÁS UMBRAL → RESERVA HABILITADA
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {[
              { n: "1", title: "Campaña exploratoria",  desc: "Apoyos + ciudad + precio + follows" },
              { n: "→", title: "", desc: "" },
              { n: "2", title: "Umbral mínimo",         desc: "Calculado por ciudad, venue, precio y plan" },
              { n: "→", title: "", desc: "" },
              { n: "3", title: "Validación DemandPass", desc: "Artista + ciudad + venue + riesgo" },
              { n: "→", title: "", desc: "" },
              { n: "4", title: "Reserva condicional",   desc: "Token + campaña oficial + waitlist" },
            ].map((s, i) => s.n === "→" ? (
              <div key={i} className="hidden md:block text-2xl" style={{ color: "var(--color-burg3)" }}>→</div>
            ) : (
              <div key={i} className="flex-1 p-4 rounded-xl" style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
                <span className="font-[family-name:var(--font-display)] text-[28px] font-black" style={{ color: "rgba(163,22,69,0.25)" }}>{s.n}</span>
                <p className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase mt-1">{s.title}</p>
                <p className="text-[11px] mt-1" style={{ color: "var(--color-txt3)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="px-5 md:px-12 py-20" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--color-burg3)" }}>Por qué DemandPass</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,48px)] font-black uppercase mb-14">
            DECIDÍ CON DATOS,<br /><span style={{ color: "var(--color-txt3)" }}>NO CON INTUICIÓN.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFICIOS.map(({ Icon, title, desc }) => (
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
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--color-burg3)" }}>Planes para artistas</p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,48px)] font-black uppercase">
              EMPEZÁ EXPLORANDO.<br /><span style={{ color: "var(--color-txt3)" }}>ESCALÁ CUANDO CONFIRMES.</span>
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
                <p className="text-[11px] mb-4 leading-tight" style={{ color: "var(--color-txt3)" }}>{p.rol}</p>
                <div className="mb-1">
                  <span className="font-[family-name:var(--font-display)] text-[30px] font-black">{p.precio}</span>
                </div>
                <p className="text-[11px] mb-5" style={{ color: "var(--color-txt3)" }}>{p.sub}</p>
                <ul className="flex flex-col gap-2.5 flex-1 mb-4">
                  {p.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-[12px]" style={{ color: "var(--color-txt2)" }}>
                      <span style={{ color: "var(--color-burg3)", flexShrink: 0 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                {p.nota && <p className="text-[11px] mb-4 leading-[1.5]" style={{ color: "var(--color-txt3)" }}>{p.nota}</p>}
                <Link href="/signin" className="w-full py-3 text-center rounded-md font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] mt-auto"
                  style={p.highlight ? { background: "var(--color-burg3)", color: "white", boxShadow: "0 6px 18px rgba(196,38,78,0.3)" } : { border: "1px solid var(--color-border2)", color: "var(--color-txt)" }}>
                  Empezar
                </Link>
              </div>
            ))}
          </div>

          {/* Fees adicionales */}
          <div className="p-5 rounded-xl" style={{ background: "rgba(163,22,69,0.06)", border: "1px solid rgba(163,22,69,0.2)" }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] mb-3" style={{ color: "var(--color-burg3)" }}>Fees adicionales</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {FEES.map(f => (
                <div key={f.label} className="flex items-center justify-between gap-2">
                  <span className="text-[12px]" style={{ color: "var(--color-txt2)" }}>{f.label}</span>
                  <span className="text-[13px] font-bold shrink-0" style={{ color: "var(--color-txt)" }}>{f.valor}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] mt-3" style={{ color: "var(--color-txt3)" }}>
              El success fee se aplica solo sobre ticketing atribuible a DemandPass. Se negocia a la baja en plan Pro o por volumen.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
