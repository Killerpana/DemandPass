// src/components/marketing/DemandConsole.tsx
// Client component — live ticking apoyos counter + mock data console.
"use client";

import { useEffect, useState } from "react";
import { Pill } from "@/components/ui/Pill";
import { Progress } from "@/components/ui/Progress";
import { Sparkline } from "@/components/ui/Sparkline";
import { heroCities } from "@/lib/marketing-data";

export function DemandConsole() {
  const [apoyos, setApoyos] = useState(5420);

  useEffect(() => {
    const id = setInterval(() => {
      setApoyos((n) => n + Math.floor(Math.random() * 3 + 1));
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative rounded-2xl p-6"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border2)",
        boxShadow: "0 16px 48px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Window header */}
      <div className="flex items-center gap-3 pb-4 mb-5 border-b border-[var(--color-border)]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-surface3)" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-surface3)" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-burg3)" }} />
        </div>
        <div className="text-[11px] text-[var(--color-txt3)]" style={{ fontFamily: "var(--font-mono)" }}>
          demandpass.app/console/lenny-kravitz
        </div>
        <Pill variant="live" pulse>Live</Pill>
      </div>

      {/* Artist card */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-16 h-16 rounded-md flex items-center justify-center text-2xl font-extrabold"
          style={{
            background: "linear-gradient(135deg, #2a1a1a, #4a2530)",
            border: "1px solid var(--color-border2)",
            fontFamily: "var(--font-display)",
            letterSpacing: "1px",
          }}
        >
          LK
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--color-txt3)] font-semibold">Artista</div>
          <div className="uppercase mt-0.5 text-xl font-extrabold" style={{ fontFamily: "var(--font-display)", letterSpacing: "1px" }}>
            LENNY KRAVITZ
          </div>
          <div className="text-xs mt-1 text-[var(--color-txt2)]">Raise Vibration Tour · 2026</div>
        </div>
        <div className="text-right">
          <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--color-txt3)] font-semibold">APOYOS</div>
          <div
            className="text-2xl font-bold tabular-nums"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-burg3)" }}
          >
            {apoyos.toLocaleString("es-AR")}
          </div>
        </div>
      </div>

      {/* Cities */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)]">
            Demanda por ciudad
          </span>
          <span className="text-[11px]" style={{ color: "var(--color-burg3)", fontFamily: "var(--font-mono)" }}>
            ↑ +148 hoy
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {heroCities.map((c) => (
            <div key={c.name} className="grid grid-cols-[110px_1fr_60px_50px] gap-3 items-center">
              <div className="text-[13px] font-medium text-[var(--color-txt)]">{c.name}</div>
              <Progress value={c.pct} height={5} />
              <div className="text-[12px] text-right tabular-nums" style={{ fontFamily: "var(--font-mono)" }}>
                {c.votes.toLocaleString("es-AR")}
              </div>
              <Sparkline data={[...c.trend]} width={50} height={18} color="var(--color-burg3)" />
            </div>
          ))}
        </div>
      </div>

      {/* Price band */}
      <div
        className="grid grid-cols-3 gap-4 p-3.5 rounded-md"
        style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}
      >
        {[
          { l: "Precio aceptado", v: "USD 84", mono: true },
          { l: "Forecast venue",  v: "Movistar Arena" },
          { l: "Confianza",       v: "Alta · 91%", color: "var(--color-emerald2)" },
        ].map((m) => (
          <div key={m.l}>
            <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)]">
              {m.l}
            </div>
            <div
              className="mt-1 text-[15px] font-bold"
              style={{
                color: m.color || "var(--color-txt)",
                fontFamily: m.mono ? "var(--font-mono)" : "var(--font-sans)",
              }}
            >
              {m.v}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3.5 text-[11px] text-[var(--color-txt3)] flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-txt3)" }} />
        Actualizado hace 6 segundos · 12 productoras observando
      </div>
    </div>
  );
}
