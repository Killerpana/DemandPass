// src/components/dashboard/DemandPulse.tsx — mission-control style event log
import { Pill } from "@/components/ui/Pill";
import { demandPulseEvents } from "@/lib/dashboard-data";

const TAG_COLORS = {
  ok: "var(--color-emerald2)",
  warn: "var(--color-amber2)",
  info: "#38bdf8",
} as const;

export function DemandPulse() {
  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col"
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
    >
      <div className="px-5 py-4 border-b border-[var(--color-border)]">
        <div className="flex justify-between items-center mb-2">
          <div className="text-[14px] font-bold">Demand pulse</div>
          <Pill variant="live" pulse>Live · 4s ago</Pill>
        </div>
        <div className="text-[11px] text-[var(--color-txt3)]" style={{ fontFamily: "var(--font-mono)" }}>
          Eventos en tiempo real · 27 / min
        </div>
      </div>
      <div className="max-h-[400px] overflow-y-auto">
        {demandPulseEvents.map((ev, i) => (
          <div
            key={`${ev.t}-${i}`}
            className="px-5 py-2.5 flex items-start gap-3 text-[11px]"
            style={{
              borderBottom: i < demandPulseEvents.length - 1 ? "1px solid var(--color-border)" : "none",
              fontFamily: "var(--font-mono)",
              opacity: 1 - i * 0.06,
            }}
          >
            <span className="text-[var(--color-txt3)]">{ev.t}</span>
            <span
              className="w-[90px] shrink-0 font-bold"
              style={{ color: TAG_COLORS[ev.tag] }}
            >
              {ev.e}
            </span>
            <span className="flex-1 text-[var(--color-txt)]">{ev.m}</span>
            <span
              className="text-[10px] px-1.5 py-0.5 rounded font-semibold"
              style={{
                background: "var(--color-surface3)",
                color: "var(--color-txt2)",
              }}
            >
              {ev.c}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
