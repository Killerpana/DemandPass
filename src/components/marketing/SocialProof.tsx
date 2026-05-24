// src/components/marketing/SocialProof.tsx
import { testimonials } from "@/lib/marketing-data";
import { StaggerReveal } from "@/components/ui/ScrollReveal";

export function SocialProof() {
  return (
    <section className="py-[80px] md:py-[120px] px-5 md:px-12 border-b border-[var(--color-border)]">
      <div className="max-w-[1344px] mx-auto">
        <div className="mb-14 text-center">
          <div
            className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-3.5"
            style={{ color: "var(--color-burg3)" }}
          >
            Productoras que ya miden
          </div>
          <h2
            className="uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4vw, 56px)",
              lineHeight: 0.95,
              letterSpacing: "0.005em",
            }}
          >
            Datos en la mesa.
            <br />
            <span style={{ color: "var(--color-txt3)" }}>Decisiones más rápidas.</span>
          </h2>
        </div>

        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          staggerMs={100}
          variant="slide-up"
          duration={550}
        >
          {testimonials.map((t) => (
            <article
              key={t.co}
              className="p-7 rounded-xl"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-md flex items-center justify-center font-extrabold text-[14px]"
                  style={{
                    background: "var(--color-surface3)",
                    border: "1px solid var(--color-border2)",
                    color: "var(--color-txt)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {t.logo}
                </div>
                <div>
                  <div className="text-[14px] font-bold">{t.co}</div>
                  <div className="text-[11px] text-[var(--color-txt3)]">{t.name} · {t.role}</div>
                </div>
              </div>

              <p className="text-[15px] leading-[1.5] text-[var(--color-txt)] min-h-[132px]">
                &ldquo;{t.q}&rdquo;
              </p>

              <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex items-baseline justify-between">
                <div
                  className="text-[18px] font-bold tabular-nums"
                  style={{ color: "var(--color-burg3)", fontFamily: "var(--font-mono)" }}
                >
                  {t.kpi}
                </div>
                <div className="text-[10px] uppercase tracking-[0.08em] text-[var(--color-txt3)]">{t.kpiL}</div>
              </div>
            </article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
