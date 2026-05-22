"use client";
// src/components/dashboard/KPIStrip.tsx — íconos Lucide profesionales
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Mic2, Users, DollarSign, Ticket, TrendingUp } from "lucide-react";

const KPIS = [
  { Icon: Mic2,        label: "Campañas activas",   value: 8,     suffix: "",  prefix: "",     delta: "+2 esta semana",    color: "var(--color-burg3)" },
  { Icon: Users,       label: "Apoyos verificados", value: 34200, suffix: "",  prefix: "",     delta: "+12.3% esta semana", color: "var(--color-emerald2)" },
  { Icon: DollarSign,  label: "Precio promedio",    value: 78,    suffix: "",  prefix: "USD ", delta: "+2.4 esta semana",   color: "var(--color-txt)" },
  { Icon: Ticket,      label: "Forecast tickets",   value: 42800, suffix: "",  prefix: "",     delta: "+18% esta semana",   color: "var(--color-amber2)" },
  { Icon: TrendingUp,  label: "Prob. confirmación", value: 78,    suffix: "%", prefix: "",     delta: "+4pp esta semana",   color: "var(--color-emerald2)" },
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
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{ background: `radial-gradient(circle at 50% 0%, ${k.color}15, transparent 70%)` }}
          />

          <div className="flex items-center gap-2">
            <k.Icon size={14} style={{ color: k.color }} />
            <span className="text-[10px] uppercase tracking-[0.12em] font-semibold" style={{ color: "var(--color-txt3)" }}>
              {k.label}
            </span>
          </div>

          <div
            className="text-[28px] font-extrabold leading-none tabular-nums"
            style={{ fontFamily: "var(--font-display)", color: k.color, letterSpacing: "0.01em" }}
          >
            {k.prefix}
            <AnimatedCounter value={k.value} suffix={k.suffix} duration={1400} />
          </div>

          <div className="flex items-center gap-1.5">
            <TrendingUp size={10} style={{ color: "var(--color-emerald2)" }} />
            <span className="text-[10px]" style={{ color: "var(--color-txt3)" }}>{k.delta}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
