"use client";
// src/components/dashboard/DemandPulse.tsx — feed de actividad en tiempo real
import { useEffect, useState } from "react";
import { demandPulseEvents } from "@/lib/dashboard-data";

const TAG_CONFIG = {
  NEW_SUPPORT:  { label: "Nuevo apoyo",   color: "var(--color-emerald2)", bg: "rgba(16,185,129,0.1)",  icon: "🎟" },
  THRESHOLD:    { label: "Hito alcanzado", color: "var(--color-amber2)",  bg: "rgba(245,158,11,0.1)",  icon: "⚡" },
  CONDITIONAL:  { label: "Reserva",        color: "#38bdf8",               bg: "rgba(56,189,248,0.1)",  icon: "🔒" },
  PRICE_SIGNAL: { label: "Señal precio",   color: "var(--color-burg3)",    bg: "rgba(196,38,78,0.1)",   icon: "📈" },
} as const;

type EventKey = keyof typeof TAG_CONFIG;

export function DemandPulse() {
  const [events, setEvents] = useState(demandPulseEvents);
  const [newIdx, setNewIdx] = useState<number | null>(null);

  // Simular eventos nuevos cada 4 segundos
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
    <div
      className="rounded-xl overflow-hidden flex flex-col"
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
        <div>
          <div className="text-[14px] font-bold flex items-center gap-2">
            🔴 Demand Pulse
          </div>
          <div className="text-[11px] text-[var(--color-txt3)] mt-0.5">
            Actividad en tiempo real · 27 eventos/min
          </div>
        </div>
        <span
          className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.08em] flex items-center gap-1.5"
          style={{ background: "rgba(16,185,129,0.12)", color: "var(--color-emerald2)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
          Live
        </span>
      </div>

      {/* Feed */}
      <div className="flex-1 overflow-y-auto max-h-[360px]">
        {events.map((ev, i) => {
          const tag = TAG_CONFIG[ev.e as EventKey] ?? TAG_CONFIG.NEW_SUPPORT;
          const isNew = i === newIdx;
          return (
            <div
              key={`${ev.t}-${i}`}
              className="px-5 py-3 flex items-center gap-3 border-b last:border-0 transition-all duration-500"
              style={{
                borderColor: "var(--color-border)",
                background: isNew ? "rgba(196,38,78,0.06)" : "transparent",
                opacity: 1 - i * 0.07,
              }}
            >
              {/* Ícono */}
              <span className="text-[16px] shrink-0">{tag.icon}</span>

              {/* Tag */}
              <span
                className="text-[9px] font-bold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded shrink-0"
                style={{ background: tag.bg, color: tag.color }}
              >
                {tag.label}
              </span>

              {/* Mensaje */}
              <span className="text-[12px] text-[var(--color-txt)] flex-1 truncate">
                {ev.m}
              </span>

              {/* Artista + hora */}
              <div className="flex items-center gap-2 shrink-0">
                <span
                  className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                  style={{ background: "var(--color-surface2)", color: "var(--color-txt2)" }}
                >
                  {ev.c}
                </span>
                <span className="text-[10px] text-[var(--color-txt3)]">{ev.t}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
