"use client";
// src/components/dashboard/KPIStrip.tsx — KPIs animados con personalidad musical
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const KPIS = [
  { icon: "🎤", label: "Campañas activas",   value: 8,     suffix: "",     prefix: "",      delta: "+2 esta semana",   color: "var(--color-burg3)",    trend: "up" },
  { icon: "🎟",  label: "Apoyos verificados", value: 34200, suffix: "",     prefix: "",      delta: "+12.3% esta semana", color: "var(--color-emerald2)", trend: "up" },
  { icon: "💰", label: "Precio promedio",    value: 78,    suffix: "",     prefix: "USD ",  delta: "+2.4 esta semana",  color: "var(--color-txt)",      trend: "up" },
  { icon: "🏟",  label: "Forecast tickets",   value: 42800, suffix: "",     prefix: "",      delta: "+18% esta semana",  color: "var(--color-amber2)",   trend: "up" },
  { icon: "⚡", label: "Prob. confirmación", value: 78,    suffix: "%",    prefix: "",      delta: "+4pp esta semana",  color: "var(--color-emerald2)", trend: "up" },
];

export function KPIStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {KPIS.map((k) => (
        <div
          key={k.label}
          className="rounded-xl p-5 flex flex-col gap-2 relative overflow-hidden group hover:-translate-y-0.5 transition-transform"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          {/* Glow sutil al hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{ background: `radial-gradient(circle at 50% 0%, ${k.color}15, transparent 70%)` }}
          />

          <div className="flex items-center gap-2">
            <span className="text-[20px]">{k.icon}</span>
            <span className="text-[10px] uppercase tracking-[0.12em] font-semibold" style={{ color: "var(--color-txt3)" }}>
              {k.label}
            </span>
          </div>

          <div
            className="text-[28px] font-extrabold leading-none tabular-nums"
            style={{ fontFamily: "var(--font-display)", color: k.color, letterSpacing: "0.01em" }}
          >
            {k.prefix}
            <AnimatedCounter
              value={k.value}
              suffix={k.suffix}
              duration={1400}
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[10px]" style={{ color: "var(--color-emerald2)" }}>↑</span>
            <span className="text-[10px]" style={{ color: "var(--color-txt3)" }}>{k.delta}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
