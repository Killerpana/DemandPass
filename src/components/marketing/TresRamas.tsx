import Link from "next/link";
import { Users, Music2, Building2, ChevronRight } from "lucide-react";

const RAMAS = [
  {
    Icon: Users,
    tag: "Para fans",
    title: "Apoyá antes\nque se confirme.",
    desc: "Expresá demanda real, obtené prioridad de acceso a la preventa y seguí a tus artistas favoritos con datos verificados.",
    items: ["Campañas activas en LATAM", "Token de acceso prioritario", "Planes Free, Bronce, Plata y Oro"],
    cta: "Ver campañas",
    href: "/campaigns",
    color: "#A31645",
    bg: "rgba(163,22,69,0.06)",
    border: "rgba(163,22,69,0.2)",
  },
  {
    Icon: Music2,
    tag: "Para artistas",
    title: "Saber dónde\nestán tus fans.",
    desc: "Creá tu campaña, medí demanda por ciudad y precio, planificá tu gira con datos reales antes de comprometerte.",
    items: ["Demand Map por ciudad", "Fan Signals de precio", "Publicar actualizaciones a fans"],
    cta: "Mi dashboard",
    href: "/artistas/dashboard",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    Icon: Building2,
    tag: "Para productoras",
    title: "Decidí con datos,\nno con intuición.",
    desc: "Demand Score, Demand Map y Tour Expansion Intelligence para confirmar shows con certeza antes de firmar contratos.",
    items: ["Demand Score accionable", "Tour Expansion Intelligence", "Planes Standard, Premium y Enterprise"],
    cta: "Ver demo B2B",
    href: "/dashboard",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.06)",
    border: "rgba(59,130,246,0.2)",
  },
];

export function TresRamas() {
  return (
    <section className="px-5 md:px-12 py-20 border-b border-[var(--color-border)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--color-burg3)" }}>
            Una plataforma, tres actores
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,52px)] font-black uppercase leading-[0.95]">
            CADA UNO GANA<br />
            <span style={{ color: "var(--color-txt3)" }}>A SU MANERA.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {RAMAS.map(({ Icon, tag, title, desc, items, cta, href, color, bg, border }) => (
            <div key={tag} className="flex flex-col p-7 rounded-2xl transition-all hover:-translate-y-1"
              style={{ background: bg, border: `1px solid ${border}` }}>
              {/* Icon + tag */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: color + "20", border: `1px solid ${color}40` }}>
                  <Icon size={18} color={color} strokeWidth={1.75} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color }}>
                  {tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-display)] text-[22px] font-black uppercase leading-[1] mb-4"
                style={{ letterSpacing: "0.01em" }}>
                {title.split("\n").map((line, i) => (
                  <span key={i}>{line}{i < title.split("\n").length - 1 && <br />}</span>
                ))}
              </h3>

              {/* Desc */}
              <p className="text-[13px] leading-[1.65] mb-5 flex-1" style={{ color: "var(--color-txt2)" }}>
                {desc}
              </p>

              {/* Items */}
              <ul className="flex flex-col gap-2 mb-6">
                {items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-[12px]" style={{ color: "var(--color-txt2)" }}>
                    <span style={{ color, fontSize: "8px" }}>◆</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href={href}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-bold uppercase tracking-[0.06em] font-[family-name:var(--font-display)] transition-all group"
                style={{ background: color + "15", border: `1px solid ${color}30`, color }}>
                {cta}
                <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
