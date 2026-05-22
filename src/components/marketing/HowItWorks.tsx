// src/components/marketing/HowItWorks.tsx
import { Pill } from "@/components/ui/Pill";
import { howItWorksSteps, trustPoints } from "@/lib/marketing-data";
import { StaggerReveal, ScrollReveal } from "@/components/ui/ScrollReveal";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-[120px] px-12 border-b border-[var(--color-border)]">
      <div className="max-w-[1344px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-16">
          <div>
            <div
              className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-3.5"
              style={{ color: "var(--color-burg3)", fontFamily: "var(--font-sans)" }}
            >
              Cómo funciona
            </div>
            <h2
              className="uppercase"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 5vw, 72px)",
                lineHeight: 0.95,
                letterSpacing: "0.005em",
              }}
            >
              Tres pasos.
              <br />
              <span style={{ color: "var(--color-txt3)" }}>Datos reales.</span>
            </h2>
          </div>
          <p className="text-base text-[var(--color-txt2)] max-w-[420px] leading-[1.55]">
            No vendemos entradas. Convertimos el apoyo de fans en{" "}
            <strong className="text-[var(--color-txt)]">una señal de demanda accionable</strong>{" "}
            que las productoras pueden usar antes de confirmar producción, talent y venue.
          </p>
        </div>

        {/* Steps */}
        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerMs={120}
          baseDelay={100}
          variant="slide-up"
          duration={600}
        >
          {howItWorksSteps.map((s) => (
            <div
              key={s.n}
              className="overflow-hidden rounded-xl"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border2)",
              }}
            >
              <div
                className="p-7 border-b border-[var(--color-border)]"
                style={{ background: "linear-gradient(180deg, rgba(196,38,78,0.03), transparent)" }}
              >
                <div className="flex items-baseline justify-between mb-6">
                  <div
                    className="leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 64,
                      color: "var(--color-burg3)",
                      letterSpacing: "1px",
                    }}
                  >
                    {s.n}
                  </div>
                  <Pill variant="mute">PASO {s.n}</Pill>
                </div>
                <h3
                  className="uppercase mb-3"
                  style={{ fontFamily: "var(--font-display)", fontSize: 28, letterSpacing: "1px", lineHeight: 1 }}
                >
                  {s.t}
                </h3>
                <p className="text-sm text-[var(--color-txt2)] leading-[1.55]">{s.d}</p>
              </div>
              <ul className="p-6 flex flex-col gap-2.5 list-none">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[13px] text-[var(--color-txt)]">
                    <span
                      className="w-4 h-4 flex items-center justify-center text-[11px] font-bold rounded"
                      style={{ border: "1px solid var(--color-burg3)", color: "var(--color-burg3)" }}
                      aria-hidden
                    >
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggerReveal>

        {/* Trust points */}
        <div
          className="mt-10 p-5 grid grid-cols-1 md:grid-cols-3 gap-8 rounded-xl"
          style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
        >
          {trustPoints.map((t, i) => (
            <div key={t.a} className="flex items-start gap-3">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                style={{ background: "var(--color-surface3)", color: "var(--color-txt2)" }}
              >
                {i + 1}
              </div>
              <div>
                <div className="text-[13px] font-semibold text-[var(--color-txt)]">{t.a}</div>
                <div className="text-xs mt-0.5 text-[var(--color-txt2)]">{t.b}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
