"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users, MapPin, DollarSign, TrendingUp, Bell, Share2,
  Music2, MessageSquare, ChevronRight, BarChart2, Zap,
  CheckCircle2, Clock, Send, Settings, User, LogOut,
  PlusCircle, Globe, HelpCircle
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";

// ── Mock data ────────────────────────────────────────────────────────────────
const ARTIST = {
  name: "Los Planetas del Sur",
  handle: "@losplanetasdelsur",
  avatar: "LP",
  genre: "Indie / Rock",
  plan: "Indie",
  verified: true,
};

const CAMPAIGN = {
  title: "Gira Argentina 2026",
  status: "activa",
  daysLeft: 28,
  apoyos: 1847,
  goal: 3000,
  score: 74,
  avgPrice: "USD 45–75",
  topVenue: "Teatro Vorterix",
};

const CITIES = [
  { city: "Buenos Aires", apoyos: 892, pct: 100, avgPrice: "USD 65" },
  { city: "Córdoba",      apoyos: 431, pct: 48,  avgPrice: "USD 52" },
  { city: "Rosario",      apoyos: 298, pct: 33,  avgPrice: "USD 48" },
  { city: "Mendoza",      apoyos: 156, pct: 17,  avgPrice: "USD 45" },
  { city: "La Plata",     apoyos: 70,  pct: 8,   avgPrice: "USD 42" },
];

const PRECIO_RANGES = [
  { label: "Hasta USD 30", pct: 12 },
  { label: "USD 30–50",    pct: 31 },
  { label: "USD 50–80",    pct: 38 },
  { label: "USD 80–120",   pct: 14 },
  { label: "Más de USD 120", pct: 5 },
];

const ACTIVIDAD = [
  { icon: TrendingUp,   color: "#10b981", text: "+124 nuevos apoyos esta semana",           time: "hace 1 hs"   },
  { icon: MapPin,       color: "#3b82f6", text: "Córdoba superó los 400 apoyos",            time: "hace 3 hs"   },
  { icon: Zap,          color: "#A31645", text: "Tu Demand Score subió de 68 a 74",         time: "ayer"        },
  { icon: Users,        color: "#8b5cf6", text: "15 fans de Montevideo se sumaron",         time: "hace 2 días" },
  { icon: CheckCircle2, color: "#f59e0b", text: "Teatro Vorterix verificó disponibilidad",  time: "hace 3 días" },
];

const BENEFICIOS_OFRECIDOS = [
  { label: "Meet & greet", activo: true  },
  { label: "Acceso a soundcheck", activo: true  },
  { label: "Merch exclusivo",     activo: false },
  { label: "Charla virtual",      activo: true  },
];

const SIDEBAR_MAIN = [
  { label: "Mi campaña",    icon: BarChart2,     active: true  },
  { label: "Mis fans",      icon: Users,         active: false },
  { label: "Actividad",     icon: Bell,          active: false, badge: "5" },
  { label: "Publicar",      icon: MessageSquare, active: false },
  { label: "Compartir",     icon: Share2,        active: false },
  { label: "Nueva campaña", icon: PlusCircle,    active: false },
];
const SIDEBAR_BOTTOM = [
  { label: "Mi perfil",     icon: User,       },
  { label: "Configuración", icon: Settings,   },
  { label: "Ayuda",         icon: HelpCircle, },
  { label: "Ver sitio",     icon: Globe,      },
  { label: "Salir",         icon: LogOut,     },
];

// ── Componentes pequeños ─────────────────────────────────────────────────────
function KPICard({ label, value, sub, Icon, color }: {
  label: string; value: string | number; sub?: string;
  Icon: React.ElementType; color: string;
}) {
  return (
    <div className="p-5 rounded-xl flex flex-col gap-3"
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--color-txt3)" }}>{label}</span>
        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: color + "18" }}>
          <Icon size={14} color={color} strokeWidth={2} />
        </div>
      </div>
      <div>
        <span className="font-[family-name:var(--font-display)] text-[28px] font-black leading-none" style={{ color }}>{value}</span>
        {sub && <span className="text-[11px] ml-1.5" style={{ color: "var(--color-txt3)" }}>{sub}</span>}
      </div>
    </div>
  );
}

// ── Dashboard principal ──────────────────────────────────────────────────────
export function ArtistDashboard() {
  const [updateText, setUpdateText] = useState("");
  const [sent, setSent] = useState(false);
  const pct = Math.round((CAMPAIGN.apoyos / CAMPAIGN.goal) * 100);

  function sendUpdate() {
    if (!updateText.trim()) return;
    setSent(true);
    setTimeout(() => { setSent(false); setUpdateText(""); }, 3000);
  }

  return (
    <div className="p-5 md:p-7">

        {/* Header campaña */}
        <div className="flex items-start justify-between gap-4 mb-7 flex-wrap">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] mb-1" style={{ color: "var(--color-burg3)" }}>
              Campaña activa
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-[22px] font-black uppercase tracking-[0.02em]">
              {CAMPAIGN.title}
            </h1>
            <div className="flex items-center gap-3 mt-1.5 flex-wrap">
              <span className="flex items-center gap-1.5 text-[12px]" style={{ color: "#10b981" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Activa
              </span>
              <span className="text-[12px]" style={{ color: "var(--color-txt3)" }}>
                <Clock size={11} className="inline mr-1" />{CAMPAIGN.daysLeft} días restantes
              </span>
              <span className="text-[12px]" style={{ color: "var(--color-txt3)" }}>
                Demand Score: <strong style={{ color: "#f59e0b" }}>{CAMPAIGN.score}/100</strong>
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-bold uppercase tracking-[0.06em] font-[family-name:var(--font-display)]"
              style={{ border: "1px solid var(--color-border2)", color: "var(--color-txt2)" }}>
              <Share2 size={13} /> Compartir
            </button>
          </div>
        </div>

        {/* Progreso general */}
        <div className="p-5 rounded-xl mb-6" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <span className="font-[family-name:var(--font-display)] text-[32px] font-black leading-none">
              {CAMPAIGN.apoyos.toLocaleString()}
            </span>
            <span className="text-[14px]" style={{ color: "var(--color-txt3)" }}>objetivo: {CAMPAIGN.goal.toLocaleString()}</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden mb-2" style={{ background: "rgba(255,255,255,0.07)" }}>
            <div className="h-full rounded-full transition-all duration-1000"
              style={{ width: `${pct}%`, background: "linear-gradient(90deg, #A31645, #E43A66)" }} />
          </div>
          <div className="flex flex-wrap justify-between gap-x-2 text-[12px]" style={{ color: "var(--color-txt3)" }}>
            <span>{pct}% del objetivo</span>
            <span>{(CAMPAIGN.goal - CAMPAIGN.apoyos).toLocaleString()} apoyos para confirmar</span>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <KPICard label="Apoyos totales" value={CAMPAIGN.apoyos.toLocaleString()} Icon={Users}        color="#A31645" />
          <KPICard label="Demand Score"   value={CAMPAIGN.score}   sub="/100"  Icon={TrendingUp}   color="#f59e0b" />
          <KPICard label="Precio promedio" value="USD 56"                       Icon={DollarSign}   color="#3b82f6" />
          <KPICard label="Ciudad top"     value="Bs. As."         sub="892 fans" Icon={MapPin}       color="#10b981" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 mb-6">

          {/* Fans por ciudad */}
          <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <h2 className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] mb-4">
              Demand Map — Fans por ciudad
            </h2>
            <div className="flex flex-col gap-3">
              {CITIES.map(c => (
                <div key={c.city}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <MapPin size={12} color="#A31645" strokeWidth={2} />
                      <span className="text-[13px] font-medium">{c.city}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[12px]" style={{ color: "var(--color-txt3)" }}>
                      <span style={{ color: "var(--color-txt)" }}>{c.apoyos}</span>
                      <span>{c.avgPrice}</span>
                    </div>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: "linear-gradient(90deg, #A31645, #E43A66)" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Precio + beneficios */}
          <div className="flex flex-col gap-5">
            <div className="p-5 rounded-xl flex-1" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
              <h2 className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] mb-4">
                Fan Signals — Precio
              </h2>
              <div className="flex flex-col gap-2.5">
                {PRECIO_RANGES.map(r => (
                  <div key={r.label} className="flex items-center gap-3">
                    <span className="text-[12px] w-28 shrink-0" style={{ color: "var(--color-txt2)" }}>{r.label}</span>
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="h-full rounded-full" style={{ width: `${r.pct}%`, background: r.pct >= 30 ? "#A31645" : "rgba(163,22,69,0.4)" }} />
                    </div>
                    <span className="text-[12px] w-8 text-right" style={{ color: "var(--color-txt3)" }}>{r.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
              <h2 className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] mb-3">
                Beneficios ofrecidos
              </h2>
              <div className="flex flex-col gap-2">
                {BENEFICIOS_OFRECIDOS.map(b => (
                  <div key={b.label} className="flex items-center gap-2.5">
                    <CheckCircle2 size={14} color={b.activo ? "#10b981" : "#374151"} strokeWidth={2} />
                    <span className="text-[13px]" style={{ color: b.activo ? "var(--color-txt)" : "var(--color-txt3)" }}>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Publicar actualización + Actividad */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">

          {/* Publicar update */}
          <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <h2 className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] mb-1">
              Publicar actualización
            </h2>
            <p className="text-[12px] mb-4" style={{ color: "var(--color-txt3)" }}>
              Enviá un mensaje a tus {CAMPAIGN.apoyos.toLocaleString()} fans que apoyaron esta campaña.
            </p>
            {sent ? (
              <div className="flex items-center gap-2 p-4 rounded-xl" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)" }}>
                <CheckCircle2 size={16} color="#10b981" />
                <span className="text-[13px] font-semibold" style={{ color: "#10b981" }}>
                  ¡Actualización enviada a {CAMPAIGN.apoyos.toLocaleString()} fans!
                </span>
              </div>
            ) : (
              <>
                <textarea
                  value={updateText}
                  onChange={e => setUpdateText(e.target.value)}
                  placeholder="Contales algo a tus fans — una fecha posible, una novedad del show, un agradecimiento..."
                  rows={4}
                  className="w-full rounded-xl p-3.5 text-[13px] resize-none mb-3"
                  style={{
                    background: "var(--color-bg)", border: "1px solid var(--color-border2)",
                    color: "var(--color-txt)", outline: "none",
                  }}
                />
                <button onClick={sendUpdate}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: updateText.trim() ? "var(--color-burg3)" : "var(--color-surface2)",
                    boxShadow: updateText.trim() ? "0 6px 18px rgba(163,22,69,0.3)" : "none",
                    color: updateText.trim() ? "white" : "var(--color-txt3)",
                  }}>
                  <Send size={14} /> Enviar a fans
                </button>
              </>
            )}
          </div>

          {/* Actividad */}
          <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <h2 className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] mb-4">
              Actividad reciente
            </h2>
            <div className="flex flex-col gap-3">
              {ACTIVIDAD.map(({ icon: Icon, color, text, time }, i) => (
                <div key={i} className="flex items-start gap-3 pb-3"
                  style={{ borderBottom: i < ACTIVIDAD.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: color + "18" }}>
                    <Icon size={13} color={color} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[12px] leading-[1.5]">{text}</p>
                    <p className="text-[11px] mt-0.5" style={{ color: "var(--color-txt3)" }}>{time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

    </div>
  );
}
