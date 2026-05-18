// src/components/marketing/PlanesB2B.tsx
// Sección de planes para productoras — server component

const planes = [
  {
    name: "Standard",
    price: "Gratis",
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
    price: "USD 299",
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
    price: "A medida",
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
  return (
    <section
      id="planes"
      className="py-[120px] px-12 border-b border-[var(--color-border)]"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div
          className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-3.5 text-center"
          style={{ color: "var(--color-burg3)" }}
        >
          Para productoras
        </div>
        <h2
          className="uppercase mb-4 text-center"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 4vw, 56px)",
            lineHeight: 0.95,
            letterSpacing: "0.005em",
          }}
        >
          Planes que escalan<br />
          <span style={{ color: "var(--color-burg3)" }}>con tu operación.</span>
        </h2>
        <p className="text-center text-[16px] text-[var(--color-txt2)] max-w-[560px] mx-auto mb-14 leading-[1.55]">
          Desde tu primera campaña hasta operaciones a escala regional. Sin costos fijos si no confirmás el show.
        </p>

        {/* Grid de planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {planes.map((p) => (
            <div
              key={p.name}
              className="rounded-xl p-7 flex flex-col relative overflow-hidden"
              style={{
                background: p.popular ? "var(--color-surface2)" : "var(--color-surface)",
                border: `1px solid ${p.popular ? "var(--color-burg3)" : "var(--color-border)"}`,
                boxShadow: p.popular
                  ? "0 0 0 1px var(--color-burg3), 0 24px 48px rgba(196,38,78,0.15)"
                  : "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              {/* Badge popular */}
              {p.popular && (
                <div
                  className="absolute top-0 right-6 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white rounded-b-md"
                  style={{ background: "var(--color-burg3)" }}
                >
                  Más elegido
                </div>
              )}

              {/* Borde superior de color */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
                style={{ background: p.color }}
              />

              {/* Nombre y precio */}
              <div className="mb-6 pt-2">
                <div
                  className="text-[11px] uppercase tracking-[0.14em] font-bold mb-2"
                  style={{ color: p.color }}
                >
                  {p.name}
                </div>
                <div
                  className="text-[36px] font-extrabold leading-none"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "0.005em" }}
                >
                  {p.price}
                </div>
                <div className="text-[13px] text-[var(--color-txt3)] mt-1">{p.sub}</div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] text-[var(--color-txt2)]">
                    <span style={{ color: p.color }} className="mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                type="button"
                className="w-full py-3 rounded-md text-[13px] font-bold uppercase tracking-[0.06em] transition-opacity hover:opacity-90"
                style={
                  p.ctaVariant === "solid"
                    ? {
                        background: "var(--color-burg3)",
                        color: "#fff",
                        boxShadow: "0 6px 18px rgba(196,38,78,0.32)",
                      }
                    : {
                        background: "transparent",
                        color: "var(--color-txt)",
                        border: "1px solid var(--color-border2)",
                      }
                }
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Nota legal */}
        <p className="text-center text-[12px] text-[var(--color-txt3)] mt-8">
          Los precios no incluyen IVA. Si el show no se confirma, no se cobra el plan por esa campaña.
        </p>
      </div>
    </section>
  );
}
