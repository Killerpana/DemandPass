"use client";

import { FanShell } from "@/components/ui/FanShell";

import Link from "next/link";
import { useState } from "react";
import { Bell, Ticket, TrendingUp, CheckCircle2, Clock, XCircle, ChevronRight, Star, Zap, Music2 } from "lucide-react";
import { campaigns } from "@/lib/data";

const FAN = {
  name: "Facundo Barile",
  handle: "@facundobarile",
  avatar: "FB",
  city: "Buenos Aires",
  memberSince: "Marzo 2024",
  level: "Plata" as const,
  apoyosActivos: 3,
  showsConfirmados: 2,
  totalInvertido: 420,
  apoyosTotales: 7,
};

const LEVEL_CONFIG = {
  Bronce: { color: "#cd7f32", bg: "rgba(205,127,50,0.12)", next: "Plata",  progress: 46 },
  Plata:  { color: "#C9CAD3", bg: "rgba(201,202,211,0.12)", next: "Oro",   progress: 47 },
  Oro:    { color: "#f59e0b", bg: "rgba(245,158,11,0.12)",  next: null,    progress: 100 },
};

const ACTIVOS = [
  { id: 0, artist: "Lenny Kravitz", event: "Raise Vibration Tour", city: "Buenos Aires", img: "LK", color: "#7a2a8a", current: 5420, goal: 8000, days: 47, precio: "USD 80–120", nivel: "Plata", ventana: "Preventa 24 hs antes", score: 91 },
  { id: 1, artist: "K-Pop Night",   event: "Argentina Tour",        city: "Buenos Aires", img: "KP", color: "#1b5a70", current: 9850, goal: 12000, days: 62, precio: "USD 40–70",  nivel: "Bronce", ventana: "Info anticipada",   score: 71 },
];

const HISTORIAL = [
  { artist: "Bad Bunny",    event: "Most Wanted Tour", city: "Buenos Aires", fecha: "Nov 2024", monto: "USD 90",  estado: "confirmado",    color: "#7c3aed" },
  { artist: "Billie Eilish", event: "Hit Me Hard Tour", city: "Buenos Aires", fecha: "Feb 2024", monto: "USD 80",  estado: "confirmado",    color: "#ec4899" },
  { artist: "Tame Impala",  event: "Currents Tour",    city: "Buenos Aires", fecha: "Oct 2023", monto: "USD 70",  estado: "no_confirmado", color: "#f59e0b" },
];

const ACTIVIDAD = [
  { icon: CheckCircle2, color: "#10b981", text: "Lenny Kravitz alcanzó el 67% del objetivo",        time: "hace 2 hs",   type: "milestone" },
  { icon: Bell,         color: "#A31645", text: "Tu Priority Pass para K-Pop Night fue generado",             time: "hace 5 hs",   type: "Priority Pass"     },
  { icon: TrendingUp,   color: "#3b82f6", text: "+580 apoyos esta semana en K-Pop Night",            time: "ayer",        type: "trend"     },
  { icon: Star,         color: "#f59e0b", text: "Subiste a Fan Plata — mejor posición en preventa",  time: "hace 3 días", type: "level"     },
  { icon: Zap,          color: "#8b5cf6", text: "Bad Bunny confirmó fecha en Cdmx — tu Priority Pass activo", time: "hace 5 días", type: "confirm"   },
];

const DESCUBRIR = campaigns.slice(0, 3);

export function FanProfile() {
  const [tab, setTab] = useState<"activos" | "historial" | "actividad">("activos");
  const level = LEVEL_CONFIG[FAN.level];

  return (
    <FanShell>
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8 p-6 rounded-2xl"
          style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-[22px] font-black shrink-0"
            style={{ background: level.bg, color: level.color, fontFamily: "var(--font-display)" }}>
            {FAN.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="font-[family-name:var(--font-display)] text-[22px] font-black uppercase tracking-[0.02em]">{FAN.name}</h1>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.08em]"
                style={{ background: level.bg, color: level.color }}>
                Fan {FAN.level}
              </span>
            </div>
            <p className="text-[13px] mt-0.5" style={{ color: "var(--color-txt3)" }}>
              {FAN.handle} · {FAN.city} · Miembro desde {FAN.memberSince}
            </p>
            {/* Progress bar */}
            {level.next && (
              <div className="mt-3">
                <div className="flex justify-between text-[11px] mb-1.5" style={{ color: "var(--color-txt3)" }}>
                  <span>Progreso a nivel {level.next}</span>
                  <span>{FAN.apoyosTotales} / 15 apoyos</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-border)" }}>
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${level.progress}%`, background: level.color }} />
                </div>
              </div>
            )}
          </div>
          <Link href="/signin"
            className="shrink-0 px-4 py-2 rounded-lg text-[12px] font-bold uppercase tracking-[0.06em] font-[family-name:var(--font-display)]"
            style={{ border: "1px solid var(--color-border2)", color: "var(--color-txt2)" }}>
            Editar perfil
          </Link>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "DemandPasses activos", value: FAN.apoyosActivos, Icon: Ticket,     color: "#A31645" },
            { label: "Shows confirmados",    value: FAN.showsConfirmados, Icon: CheckCircle2, color: "#10b981" },
            { label: "Total invertido",      value: `USD ${FAN.totalInvertido}`, Icon: TrendingUp, color: "#3b82f6", isStr: true },
          ].map(({ label, value, Icon, color, isStr }) => (
            <div key={label} className="p-5 rounded-xl text-center"
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
              <div className="flex justify-center mb-2">
                <Icon size={18} color={color} strokeWidth={1.75} />
              </div>
              <div className="font-[family-name:var(--font-display)] text-[26px] font-black leading-none mb-1"
                style={{ color }}>
                {isStr ? value : value}
              </div>
              <p className="text-[11px]" style={{ color: "var(--color-txt3)" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 p-1 rounded-xl mb-6"
          style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          {(["activos", "historial", "actividad"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className="flex-1 py-2 rounded-lg text-[12px] font-bold uppercase tracking-[0.06em] font-[family-name:var(--font-display)] transition-all"
              style={{
                background: tab === t ? "var(--color-burg3)" : "transparent",
                color: tab === t ? "white" : "var(--color-txt2)",
                boxShadow: tab === t ? "0 4px 12px rgba(163,22,69,0.3)" : "none",
              }}>
              {t === "activos" ? "Activos" : t === "historial" ? "Historial" : "Actividad"}
            </button>
          ))}
        </div>

        {/* Tab: Activos */}
        {tab === "activos" && (
          <div className="flex flex-col gap-4">
            {ACTIVOS.map(c => {
              const pct = Math.round((c.current / c.goal) * 100);
              return (
                <div key={c.id} className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[13px] font-black shrink-0"
                      style={{ background: c.color, fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.9)" }}>
                      {c.img}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-[family-name:var(--font-display)] text-[15px] font-bold uppercase tracking-[0.03em]">{c.artist}</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.06em]"
                          style={{ background: "rgba(163,22,69,0.12)", color: "#E43A66" }}>
                          {c.nivel}
                        </span>
                      </div>
                      <p className="text-[12px] mt-0.5" style={{ color: "var(--color-txt3)" }}>
                        {c.event} · {c.city} · {c.days} días restantes
                      </p>
                      <div className="mt-3">
                        <div className="flex justify-between text-[11px] mb-1.5" style={{ color: "var(--color-txt3)" }}>
                          <span>{c.current.toLocaleString()} apoyos</span>
                          <span style={{ color: pct >= 80 ? "#10b981" : "var(--color-txt3)" }}>{pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                          <div className="h-full rounded-full" style={{ width: `${pct}%`, background: pct >= 80 ? "#10b981" : "#A31645" }} />
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0 hidden sm:block">
                      <p className="text-[13px] font-semibold">{c.precio}</p>
                      <p className="text-[11px] mt-0.5" style={{ color: "#10b981" }}>{c.ventana}</p>
                      <p className="text-[11px] mt-1" style={{ color: "var(--color-txt3)" }}>Score {c.score}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <Link href="/campaigns"
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-[13px] font-bold uppercase tracking-[0.06em] font-[family-name:var(--font-display)] transition-colors hover:bg-white/5"
              style={{ border: "1px dashed var(--color-border2)", color: "var(--color-txt3)" }}>
              <Music2 size={14} strokeWidth={2} />
              Explorar más campañas
            </Link>
          </div>
        )}

        {/* Tab: Historial */}
        {tab === "historial" && (
          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
            {HISTORIAL.map((h, i) => (
              <div key={h.artist} className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/3"
                style={{ background: "var(--color-surface)", borderTop: i > 0 ? "1px solid var(--color-border)" : "none" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: h.color + "22" }}>
                  {h.estado === "confirmado"
                    ? <CheckCircle2 size={16} color="#10b981" strokeWidth={2} />
                    : <XCircle size={16} color="#6b7280" strokeWidth={2} />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-semibold truncate">{h.artist}</p>
                  <p className="text-[11px]" style={{ color: "var(--color-txt3)" }}>{h.event} · {h.city}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[13px] font-semibold">{h.monto}</p>
                  <p className="text-[11px]" style={{ color: h.estado === "confirmado" ? "#10b981" : "#6b7280" }}>
                    {h.estado === "confirmado" ? "Confirmado" : "No confirmado"} · {h.fecha}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Actividad */}
        {tab === "actividad" && (
          <div className="flex flex-col gap-3">
            {ACTIVIDAD.map(({ icon: Icon, color, text, time }, i) => (
              <div key={i} className="flex items-start gap-4 px-5 py-4 rounded-xl"
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: color + "18" }}>
                  <Icon size={15} color={color} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] leading-[1.5]">{text}</p>
                  <p className="text-[11px] mt-1" style={{ color: "var(--color-txt3)" }}>{time}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Descubrir */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-[family-name:var(--font-display)] text-[16px] font-bold uppercase tracking-[0.04em]">
              Descubrí más campañas
            </h2>
            <Link href="/campaigns" className="flex items-center gap-1 text-[12px] font-semibold"
              style={{ color: "var(--color-burg3)" }}>
              Ver todas <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {DESCUBRIR.map(c => {
              const pct = Math.round((c.current / c.goal) * 100);
              return (
                <Link key={c.id} href={`/campaigns/${c.id}`}
                  className="p-4 rounded-xl transition-all hover:border-[rgba(163,22,69,0.3)] hover:-translate-y-0.5"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-[12px] font-black shrink-0"
                      style={{ background: c.color || "#1a1a2e", fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.85)" }}>
                      {c.img}
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase leading-tight">{c.artist}</p>
                      <p className="text-[11px]" style={{ color: "var(--color-txt3)" }}>{c.city}</p>
                    </div>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden mb-2" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "#A31645" }} />
                  </div>
                  <p className="text-[11px]" style={{ color: "var(--color-txt3)" }}>{pct}% del objetivo</p>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
    </FanShell>
  );
}
