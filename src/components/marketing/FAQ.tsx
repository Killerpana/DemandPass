// src/components/marketing/FAQ.tsx — accordion, client component
"use client";

import { useState } from "react";
import { faqItems } from "@/lib/marketing-data";

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-[120px] px-12 border-b border-[var(--color-border)]">
      <div className="max-w-[960px] mx-auto">
        <div
          className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-3.5 text-center"
          style={{ color: "var(--color-burg3)" }}
        >
          Preguntas frecuentes
        </div>
        <h2
          className="uppercase mb-12 text-center"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 4vw, 56px)",
            lineHeight: 0.95,
            letterSpacing: "0.005em",
          }}
        >
          Lo que necesitás saber.
        </h2>
        <div className="flex flex-col gap-2">
          {faqItems.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-xl transition-colors"
                style={{
                  background: "var(--color-surface)",
                  border: `1px solid ${isOpen ? "var(--color-border2)" : "var(--color-border)"}`,
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 text-[16px] font-semibold text-[var(--color-txt)]"
                >
                  {f.q}
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-base font-bold transition-transform shrink-0"
                    style={{
                      background: isOpen ? "var(--color-burg3)" : "var(--color-surface3)",
                      color: isOpen ? "#fff" : "var(--color-txt)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                      transitionDuration: "200ms",
                    }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-[14px] leading-[1.6] text-[var(--color-txt2)]">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
