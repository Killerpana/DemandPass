"use client";

import Link from "next/link";
import { useState } from "react";
import { Users, Music2, Building2, ChevronRight } from "lucide-react";

const RAMAS = [
  {
    id: "fan",
    Icon: Users,
    label: "Soy fan",
    color: "#A31645",
    bg: "rgba(163,22,69,0.08)",
    border: "rgba(163,22,69,0.35)",
    headline: "Apoyá antes. Entrá primero.",
    desc: "Expresá demanda real por tus artistas favoritos. Si el show se confirma, obtenés prioridad de acceso a la preventa antes que el público general.",
    puntos: [
      "Apoyá campañas oficiales y Fan Demand",
      "Token de acceso prioritario a preventa",
      "Mejor posición en sectores exclusivos",
      "Alertas cuando tu artista está en campaña",
      "Planes Free, Bronce, Plata y Oro",
    ],
    cta: "Ver planes para fans",
    href: "/fans",
    plans: "Free · Bronce · Plata · Oro",
  },
  {
    id: "artista",
    Icon: Music2,
    label: "Soy artista",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.35)",
    headline: "Sabé dónde están tus fans antes de confirmar.",
    desc: "Medí demanda real por ciudad y precio. DemandPass te dice si existe el show antes de que gastes un peso en producción.",
    puntos: [
      "Campañas exploratorias por ciudad",
      "Demand Map — fans y precio por ciudad",
      "Fan Signals — qué beneficios valoran",
      "Reserva condicional tras validación",
      "Tour mode para mini-giras",
    ],
    cta: "Ver planes para artistas",
    href: "/artistas",
    plans: "Starter · Indie · Pro",
  },
  {
    id: "productora",
    Icon: Building2,
    label: "Soy productora",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.35)",
    headline: "Confirmá shows con datos, no con intuición.",
    desc: "Demand Score, Demand Map y Tour Expansion Intelligence para tomar decisiones de booking antes de firmar contratos.",
    puntos: [
      "Demand Score accionable por campaña",
      "Demand Map por ciudad y región LATAM",
      "Price Intelligence — curva de precio óptima",
      "Tour Expansion — expandí la gira con datos",
      "Integración con ticketeras oficiales",
    ],
    cta: "Ver planes para productoras",
    href: "/productoras",
    plans: "Standard · Premium · Enterprise",
  },
];

export function PlanesB2B() {
  const [active, setActive] = useState<"fan" | "artista" | "productora">("fan");
  const rama = RAMAS.find(r => r.id === active)!;

  return (
    <section id="planes" className="py-20 px-5 md:px-12 border-b border-[var(--color-border)]">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--color-burg3)" }}>
            Planes
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,52px)] font-black uppercase leading-[0.95]">
            ¿QUÉ ROL<br />
            <span style={{ color: "var(--color-txt3)" }}>TENÉS EN EL SHOW?</span>
          </h2>
        </div>

        {/* Selector */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-2 p-1.5 rounded-2xl"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            {RAMAS.map(r => (
              <button key={r.id} type="button" onClick={() => setActive(r.id as typeof active)}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl transition-all"
                style={{
                  background: active === r.id ? r.bg : "transparent",
                  border: active === r.id ? `1px solid ${r.border}` : "1px solid transparent",
                  color: active === r.id ? r.color : "var(--color-txt3)",
                }}>
                <r.Icon size={16} strokeWidth={2} />
                <span className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.05em] hidden sm:block">
                  {r.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Panel */}
        <div key={active}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 rounded-2xl overflow-hidden animate-fadein"
          style={{ border: `1px solid ${rama.border}`, background: rama.bg }}>

          {/* Left */}
          <div className="p-8 md:p-10 flex flex-col justify-between"
            style={{ borderRight: `1px solid ${rama.border}` }}>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: rama.color + "20", border: `1px solid ${rama.color}40` }}>
                  <rama.Icon size={18} color={rama.color} strokeWidth={2} />
                </div>
                <span className="font-[family-name:var(--font-display)] text-[12px] font-bold uppercase tracking-[0.08em]"
                  style={{ color: rama.color }}>
                  {rama.label}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-[clamp(22px,3vw,34px)] font-black uppercase leading-[1.0] mb-4">
                {rama.headline}
              </h3>
              <p className="text-[15px] leading-[1.65] mb-8" style={{ color: "var(--color-txt2)" }}>
                {rama.desc}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link href={rama.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-[family-name:var(--font-display)] text-[14px] font-bold uppercase tracking-[0.05em] text-white transition-all hover:-translate-y-0.5 w-fit"
                style={{ background: rama.color, boxShadow: `0 8px 24px ${rama.color}40` }}>
                {rama.cta} <ChevronRight size={16} />
              </Link>
              <p className="text-[11px]" style={{ color: "var(--color-txt3)" }}>
                Planes disponibles: <span style={{ color: "var(--color-txt)" }}>{rama.plans}</span>
              </p>
            </div>
          </div>

          {/* Right — bullets */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-5" style={{ color: rama.color }}>
              Qué incluye
            </p>
            <ul className="flex flex-col gap-4">
              {rama.puntos.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: rama.color + "20", border: `1px solid ${rama.color}40` }}>
                    <span style={{ color: rama.color, fontSize: "10px", fontWeight: 700 }}>✓</span>
                  </div>
                  <span className="text-[14px] leading-[1.5]" style={{ color: "var(--color-txt)" }}>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-[12px] mt-8 pt-5" style={{ color: "var(--color-txt3)", borderTop: `1px solid ${rama.border}` }}>
              Los precios y detalles de cada plan están en la página de {rama.label.toLowerCase().replace("soy ", "")}.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
