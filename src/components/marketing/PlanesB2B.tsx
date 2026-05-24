"use client";
// src/components/marketing/PlanesB2B.tsx
// Sección de planes para productoras con toggle Mensual / Anual

import { useState } from "react";

const planes = [
  {
    name: "Standard",
    priceMes: "Gratis",
    precioAnual: "Gratis",
    numMes: null,
    numAnual: null,
    sub: "Para empezar",
    color: "var(--color-border2)",
    features: [
      "1 campaña activa",
      "Dashboard básico de demanda",
      "Datos por ciudad (top 3)",
      "Soporte por email",
      "Hasta 5.000 apoyos",
    ],
    cta: "Crear cuenta gratis",
    ctaVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Premium",
    priceMes: "USD 299",
    precioAnual: "USD 239",
    numMes: 299,
    numAnual: 239,
    sub: "por campaña",
    color: "var(--color-burg3)",
    features: [
      "Campañas ilimitadas",
      "Dashboard completo + exportación CSV",
      "Segmentación por ciudad, precio y nivel",
      "Heatmap geográfico",
      "Curva de precio óptima (IA)",
      "Acceso a lista de prioridad de fans",
      "Soporte prioritario",
    ],
    cta: "Hablar con ventas",
    ctaVariant: "solid" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    priceMes: "A medida",
    precioAnual: "A medida",
    numMes: null,
    numAnual: null,
    sub: "para grandes eventos",
    color: "var(--color-amber2)",
    features: [
      "Todo lo de Premium",
      "API de datos en tiempo real",
      "Integración con ticketera",
      "White label disponible",
      "Account manager dedicado",
      "SLA garantizado",
    ],
    cta: "Contactar",
    ctaVariant: "outline" as const,
    popular: false,
  },
];

export function PlanesB2B() {
  const [anual, setAnual] = useState(false);

  return (
    <section
      id="planes"
      className="py-[80px] md:py-[120px] px-5 md:px-12 border-b border-[var(--color-border)]"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-3.5 text-center" style={{ color: "var(--color-burg3)" }}>
          Para productoras
        </div>
        <h2
          className="uppercase mb-4 text-center"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "0.005em" }}
        >
          Planes que escalan<br />
          <span style={{ color: "var(--color-burg3)" }}>con tu operación.</span>
        </h2>
        <p className="text-center text-[16px] text-[var(--color-txt2)] max-w-[560px] mx-auto mb-10 leading-[1.55]">
          Desde tu primera campaña hasta operaciones a escala regional. Sin costos fijos si no confirmás el show.
        </p>

        {/* Toggle Mensual / Anual */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-[13px] font-semibold" style={{ color: anual ? "var(--color-txt3)" : "var(--color-txt)" }}>
            Mensual
          </span>
          <button
            type="button"
            onClick={() => setAnual((v) => !v)}
            className="relative w-12 h-6 rounded-full transition-colors duration-300"
            style={{ background: anual ? "var(--color-burg3)" : "var(--color-border2)" }}
            aria-label="Cambiar a facturación anual"
          >
            <span
              className="absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300"
              style={{ left: anual ? "calc(100% - 20px)" : "4px" }}
            />
          </button>
          <span className="text-[13px] font-semibold flex items-center gap-2" style={{ color: anual ? "var(--color-txt)" : "var(--color-txt3)" }}>
            Anual
            <span
              className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-[0.06em]"
              style={{ background: "rgba(196,38,78,0.15)", color: "var(--color-burg3)" }}
            >
              −20%
            </span>
          </span>
        </div>

        {/* Grid de planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {planes.map((p) => {
            const precio = anual ? p.precioAnual : p.priceMes;
            return (
              <div
                key={p.name}
                className="rounded-xl p-7 flex flex-col relative overflow-hidden transition-transform hover:-translate-y-1"
                style={{
                  background: p.popular ? "var(--color-surface2)" : "var(--color-surface)",
                  border: `1px solid ${p.popular ? "var(--color-burg3)" : "var(--color-border)"}`,
                  boxShadow: p.popular
                    ? "0 0 0 1px var(--color-burg3), 0 24px 48px rgba(196,38,78,0.15)"
                    : "0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                {p.popular && (
                  <div className="absolute top-0 right-6 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white rounded-b-md" style={{ background: "var(--color-burg3)" }}>
                    Más elegido
                  </div>
                )}
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl" style={{ background: p.color }} />

                <div className="mb-6 pt-2">
                  <div className="text-[11px] uppercase tracking-[0.14em] font-bold mb-2" style={{ color: p.color }}>{p.name}</div>
                  <div className="text-[36px] font-extrabold leading-none transition-all duration-300" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.005em" }}>
                    {precio}
                  </div>
                  {anual && p.numMes && (
                    <div className="text-[12px] line-through mt-0.5" style={{ color: "var(--color-txt3)" }}>
                      antes USD {p.numMes}
                    </div>
                  )}
                  <div className="text-[13px] text-[var(--color-txt3)] mt-1">{p.sub}</div>
                </div>

                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-[var(--color-txt2)]">
                      <span style={{ color: p.color }} className="mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="w-full py-3 rounded-md text-[13px] font-bold uppercase tracking-[0.06em] transition-opacity hover:opacity-90"
                  style={
                    p.ctaVariant === "solid"
                      ? { background: "var(--color-burg3)", color: "#fff", boxShadow: "0 6px 18px rgba(196,38,78,0.32)" }
                      : { background: "transparent", color: "var(--color-txt)", border: "1px solid var(--color-border2)" }
                  }
                >
                  {p.cta}
                </button>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[12px] text-[var(--color-txt3)] mt-8">
          Los precios no incluyen IVA. Si el show no se confirma, no se cobra el plan por esa campaña.
        </p>
      </div>
    </section>
  );
}
