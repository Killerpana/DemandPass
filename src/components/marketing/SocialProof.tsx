"use client";

import { useState } from "react";
import { testimonials } from "@/lib/marketing-data";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mostrar 3 a la vez
const PAGE_SIZE = 3;
const TOTAL_PAGES = Math.ceil(testimonials.length / PAGE_SIZE);

export function SocialProof() {
  const [page, setPage] = useState(0);

  const visible = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="py-[80px] md:py-[120px] px-5 md:px-12 border-b border-[var(--color-border)]">
      <div className="max-w-[1100px] mx-auto">

        {/* Header + flechas */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-3.5"
              style={{ color: "var(--color-burg3)" }}>
              Fans, artistas y productoras que ya lo usan
            </div>
            <h2 className="uppercase"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 0.95, letterSpacing: "0.005em" }}>
              Así se ve el valor.<br />
              <span style={{ color: "var(--color-txt3)" }}>De los tres lados.</span>
            </h2>
          </div>

          {/* Controles */}
          <div className="flex items-center gap-3 shrink-0 ml-6">
            {/* Dots */}
            <div className="flex gap-1.5">
              {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                <button key={i} onClick={() => setPage(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === page ? "20px" : "6px",
                    height: "6px",
                    background: i === page ? "var(--color-burg3)" : "var(--color-border2)",
                  }} />
              ))}
            </div>
            {/* Flechas */}
            <button onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border2)",
                color: page === 0 ? "var(--color-txt3)" : "var(--color-txt)",
                opacity: page === 0 ? 0.4 : 1,
              }}>
              <ChevronLeft size={16} strokeWidth={2} />
            </button>
            <button onClick={() => setPage(p => Math.min(TOTAL_PAGES - 1, p + 1))}
              disabled={page === TOTAL_PAGES - 1}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
              style={{
                background: page === TOTAL_PAGES - 1 ? "var(--color-surface)" : "var(--color-burg3)",
                border: "1px solid var(--color-border2)",
                color: "white",
                opacity: page === TOTAL_PAGES - 1 ? 0.4 : 1,
                boxShadow: page < TOTAL_PAGES - 1 ? "0 4px 12px rgba(163,22,69,0.35)" : "none",
              }}>
              <ChevronRight size={16} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div key={page} className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-fadein">
          {visible.map((t) => (
            <article key={t.co} className="p-7 rounded-xl flex flex-col"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)",
              }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-md flex items-center justify-center font-extrabold text-[14px] shrink-0"
                  style={{ background: "var(--color-surface3)", border: "1px solid var(--color-border2)", color: "var(--color-txt)", fontFamily: "var(--font-display)" }}>
                  {t.logo}
                </div>
                <div className="min-w-0">
                  <div className="text-[14px] font-bold truncate">{t.co}</div>
                  <div className="text-[11px]" style={{ color: "var(--color-txt3)" }}>{t.name} · {t.role}</div>
                </div>
              </div>

              <p className="text-[14px] leading-[1.6] flex-1" style={{ color: "var(--color-txt)" }}>
                &ldquo;{t.q}&rdquo;
              </p>

              <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex items-baseline justify-between">
                <div className="text-[16px] font-bold tabular-nums whitespace-nowrap"
                  style={{ color: "var(--color-burg3)", fontFamily: "var(--font-mono)" }}>
                  {t.kpi}
                </div>
                <div className="text-[10px] uppercase tracking-[0.08em]" style={{ color: "var(--color-txt3)" }}>
                  {t.kpiL}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
