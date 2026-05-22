"use client";
// src/components/dashboard/DemandPulse.tsx — íconos Lucide
import { useEffect, useState } from "react";
import { demandPulseEvents } from "@/lib/dashboard-data";
import { Ticket, Zap, Lock, BarChart2, Circle } from "lucide-react";

const TAG_CONFIG = {
  NEW_SUPPORT:  { label: "Nuevo apoyo",    color: "var(--color-emerald2)", bg: "rgba(16,185,129,0.1)",  Icon: Ticket },
  THRESHOLD:    { label: "Hito alcanzado", color: "var(--color-amber2)",   bg: "rgba(245,158,11,0.1)",  Icon: Zap },
  CONDITIONAL:  { label: "Reserva",        color: "#38bdf8",               bg: "rgba(56,189,248,0.1)",  Icon: Lock },
  PRICE_SIGNAL: { label: "Señal precio",   color: "var(--color-burg3)",    bg: "rgba(196,38,78,0.1)",   Icon: BarChart2 },
} as const;

type EventKey = keyof typeof TAG_CONFIG;

export function DemandPulse() {
  const [events, setEvents] = useState(demandPulseEvents);
  const [newIdx, setNewIdx] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = demandPulseEvents[Math.floor(Math.random() * demandPulseEvents.length)];
      const newEvent = { ...random, t: new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) };
      setEvents((prev) => [newEvent, ...prev.slice(0, 11)]);
      setNewIdx(0);
      setTimeout(() => setNewIdx(null), 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl overflow-hidden flex flex-col" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
      <div className="px-5 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
        <div>
          <div className="text-[14px] font-bold">Demand Pulse</div>
          <div className="text-[11px] mt-0.5" style={{ color: "var(--color-txt3)" }}>Actividad en tiempo real · 27 eventos/min</div>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.08em] flex items-center gap-1.5" style={{ background: "rgba(16,185,129,0.12)", color: "var(--color-emerald2)" }}>
          <Circle size={6} fill="var(--color-emerald2)" className="animate-pulse" />
          Live
        </span>
      </div>

      <div className="flex-1 overflow-y-auto max-h-[360px]">
        {events.map((ev, i) => {
          const tag = TAG_CONFIG[ev.e as EventKey] ?? TAG_CONFIG.NEW_SUPPORT;
          const Icon = tag.Icon;
          const isNew = i === newIdx;
          return (
            <div
              key={`${ev.t}-${i}`}
              className="px-5 py-3 flex items-center gap-3 border-b last:border-0 transition-all duration-500"
              style={{ borderColor: "var(--color-border)", background: isNew ? "rgba(196,38,78,0.06)" : "transparent", opacity: 1 - i * 0.07 }}
            >
              <Icon size={14} style={{ color: tag.color, flexShrink: 0 }} />
              <span className="text-[9px] font-bold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded shrink-0" style={{ background: tag.bg, color: tag.color }}>
                {tag.label}
              </span>
              <span className="text-[12px] flex-1 truncate" style={{ color: "var(--color-txt)" }}>{ev.m}</span>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ background: "var(--color-surface2)", color: "var(--color-txt2)" }}>{ev.c}</span>
                <span className="text-[10px]" style={{ color: "var(--color-txt3)" }}>{ev.t}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
