// src/components/dashboard/KPIStrip.tsx
// 5 big KPIs with sparklines, separated by hairlines.
import { Sparkline } from "@/components/ui/Sparkline";
import { dashboardKPIs } from "@/lib/dashboard-data";

export function KPIStrip() {
  return (
    <div
      className="rounded-xl overflow-hidden grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      {dashboardKPIs.map((k, i) => {
        const deltaColor = k.dd === "up" ? "var(--color-emerald2)" : "var(--color-red2)";
        const arrow = k.dd === "up" ? "↑" : "↓";
        return (
          <div
            key={k.l}
            className="p-5"
            style={{
              borderLeft: i % 5 > 0 ? "1px solid var(--color-border)" : undefined,
            }}
          >
            <div className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)]">
              {k.l}
            </div>
            <div
              className="mt-2 text-[32px] font-extrabold leading-none tabular-nums"
              style={{
                fontFamily: "var(--font-display)",
                color: k.color || "var(--color-txt)",
                letterSpacing: "0.005em",
              }}
            >
              {k.v}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span
                className="text-[11px] font-semibold tabular-nums"
                style={{ color: deltaColor, fontFamily: "var(--font-mono)" }}
              >
                {arrow} {k.d}
              </span>
              <span className="text-[10px] text-[var(--color-txt3)]">esta semana</span>
              <Sparkline data={[...k.sd]} width={60} height={18} color={deltaColor} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
