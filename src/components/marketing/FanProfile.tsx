"use client";
// src/components/marketing/FanProfile.tsx
// Página de perfil del fan — DemandPasses activos, historial, nivel

import Link from "next/link";
import { campaigns } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";

// ── Mock data del fan ──────────────────────────────────────────────────────
const FAN = {
  name: "Facundo Barile",
  handle: "@facundobarile",
  avatar: "FB",
  city: "Buenos Aires",
  memberSince: "Marzo 2024",
  level: "Plata" as const,
  totalApoyos: 7,
  totalInvertido: 420,
  showsConfirmados: 2,
};

// IDs de campañas que el fan apoyó (mock)
const APOYOS_ACTIVOS = [0, 1, 3];
const APOYOS_HISTORIAL = [
  { artist: "Bad Bunny", event: "Most Wanted Tour", city: "Buenos Aires", fecha: "Nov 2024", monto: "USD 90", estado: "confirmado", color: "#7c3aed" },
  { artist: "Billie Eilish", event: "Hit Me Hard Tour", city: "Buenos Aires", fecha: "Feb 2024", monto: "USD 80", estado: "confirmado", color: "#ec4899" },
  { artist: "Tame Impala", event: "Currents Tour", city: "Buenos Aires", fecha: "Oct 2023", monto: "USD 70", estado: "no_confirmado", color: "#f59e0b" },
];

const LEVEL_CONFIG = {
  Bronce: { color: "#cd7f32", next: "Plata", apoyosNext: 5, bg: "rgba(205,127,50,0.1)" },
  Plata:  { color: "#C9CAD3", next: "Oro",   apoyosNext: 15, bg: "rgba(201,202,211,0.1)" },
  Oro:    { color: "#f59e0b", next: null,     apoyosNext: null, bg: "rgba(245,158,11,0.1)" },
};

export function FanProfile() {
  const level = LEVEL_CONFIG[FAN.level];
  const apoyosActivos = campaigns.filter((c) => APOYOS_ACTIVOS.includes(c.id));
  const progressToNext = level.apoyosNext
    ? Math.min(100, Math.round((FAN.totalApoyos / level.apoyosNext) * 100))
    : 100;

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-12">

        {/* ── Header de perfil ── */}
        <ScrollReveal variant="slide-up" duration={600}>
          <div
            className="rounded-2xl p-8 mb-8 relative overflow-hidden"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border2)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
            }}
          >
            {/* Glow de nivel */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20"
              style={{ background: `radial-gradient(circle, ${level.color}, transparent 70%)` }}
            />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-[28px] font-extrabold shrink-0"
                style={{
                  background: "var(--color-surface2)",
                  border: `2px solid ${level.color}`,
                  fontFamily: "var(--font-display)",
                  color: level.color,
                  boxShadow: `0 0 24px ${level.color}40`,
                }}
              >
                {FAN.avatar}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1
                    className="text-[28px] font-extrabold leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {FAN.name}
                  </h1>
                  <span
                    className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.08em]"
                    style={{ background: level.bg, color: level.color, border: `1px solid ${level.color}40` }}
                  >
                    ★ Fan {FAN.level}
                  </span>
                </div>
                <div className="text-[13px] text-[var(--color-txt3)] mt-1">
                  {FAN.handle} · {FAN.city} · Miembro desde {FAN.memberSince}
                </div>

                {/* Progreso de nivel */}
                {level.next && (
                  <div className="mt-4 max-w-sm">
                    <div className="flex justify-between text-[11px] mb-1.5" style={{ color: "var(--color-txt3)" }}>
                      <span>Progreso a nivel {level.next}</span>
                      <span>{FAN.totalApoyos} / {level.apoyosNext} apoyos</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-border)" }}>
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${progressToNext}%`, background: level.color }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Editar perfil */}
              <Link
                href="/signin"
                className="px-4 py-2 rounded-md text-[12px] font-bold uppercase tracking-[0.06em] border shrink-0"
                style={{ borderColor: "var(--color-border2)", color: "var(--color-txt2)" }}
              >
                Editar perfil
              </Link>
            </div>

            {/* KPIs */}
            <div
              className="grid grid-cols-3 gap-0 mt-8 pt-6 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              {[
                { label: "DemandPasses activos", value: APOYOS_ACTIVOS.length, suffix: "" },
                { label: "Total invertido", value: FAN.totalInvertido, suffix: " USD" },
                { label: "Shows confirmados", value: FAN.showsConfirmados, suffix: "" },
              ].map((k, i) => (
                <div key={k.label} className={`px-6 ${i > 0 ? "border-l" : ""}`} style={{ borderColor: "var(--color-border)" }}>
                  <div
                    className="text-[32px] font-extrabold leading-none tabular-nums"
                    style={{ fontFamily: "var(--font-display)", color: i === 0 ? "var(--color-burg3)" : "var(--color-txt)" }}
                  >
                    <AnimatedCounter value={k.value} suffix={k.suffix} duration={1200} />
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.08em] font-semibold mt-1" style={{ color: "var(--color-txt3)" }}>
                    {k.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── DemandPasses activos ── */}
        <ScrollReveal variant="slide-up" delay={100}>
          <h2
            className="text-[13px] uppercase tracking-[0.14em] font-bold mb-4"
            style={{ color: "var(--color-burg3)" }}
          >
            DemandPasses activos
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12" staggerMs={100} variant="slide-up">
          {apoyosActivos.map((c) => {
            const pct = Math.min(100, Math.round((c.current / c.goal) * 100));
            return (
              <Link
                key={c.id}
                href={`/campaigns/${c.id}`}
                className="rounded-xl p-5 flex flex-col gap-3 transition-transform hover:-translate-y-1 group"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                }}
              >
                {/* Cover mini */}
                <div
                  className="h-20 rounded-lg flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${c.color}30, ${c.color}70)` }}
                >
                  <span
                    className="text-[40px] font-extrabold opacity-20 select-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {c.img}
                  </span>
                  <span
                    className="absolute top-2 left-2 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-[0.08em]"
                    style={{
                      background: c.type === "official" ? "var(--color-burg3)" : "rgba(37,99,235,0.85)",
                      color: "#fff",
                    }}
                  >
                    {c.type === "official" ? "Oficial" : "Fan"}
                  </span>
                </div>

                <div>
                  <div className="font-bold text-[14px] group-hover:text-[var(--color-burg3)] transition-colors">
                    {c.artist}
                  </div>
                  <div className="text-[12px] text-[var(--color-txt3)] mt-0.5">{c.city} · {c.days} días restantes</div>
                </div>

                {/* Progress */}
                <div>
                  <div className="flex justify-between text-[10px] mb-1" style={{ color: "var(--color-txt3)" }}>
                    <span>{pct}% del objetivo</span>
                    <span>{c.certainty}% certeza</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-border)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${pct}%`, background: "var(--color-burg3)" }}
                    />
                  </div>
                </div>

                <div className="text-[11px] font-semibold" style={{ color: "var(--color-txt2)" }}>
                  {c.price} · {c.benefit}
                </div>
              </Link>
            );
          })}
        </StaggerReveal>

        {/* ── Historial ── */}
        <ScrollReveal variant="slide-up" delay={150}>
          <h2
            className="text-[13px] uppercase tracking-[0.14em] font-bold mb-4"
            style={{ color: "var(--color-burg3)" }}
          >
            Historial
          </h2>
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)" }}
          >
            {APOYOS_HISTORIAL.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-6 py-4 border-b last:border-0"
                style={{ borderColor: "var(--color-border)" }}
              >
                {/* Avatar artista */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-[13px] font-extrabold shrink-0"
                  style={{ background: `${h.color}25`, color: h.color, fontFamily: "var(--font-display)" }}
                >
                  {h.artist.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[13px] truncate">{h.artist}</div>
                  <div className="text-[11px] text-[var(--color-txt3)]">{h.event} · {h.city}</div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-[12px] font-bold" style={{ color: "var(--color-txt)" }}>{h.monto}</div>
                  <div className="text-[10px] mt-0.5">{h.fecha}</div>
                </div>

                <span
                  className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.06em] shrink-0"
                  style={{
                    background: h.estado === "confirmado" ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)",
                    color: h.estado === "confirmado" ? "var(--color-emerald2)" : "#ef4444",
                  }}
                >
                  {h.estado === "confirmado" ? "✓ Confirmado" : "✗ No confirmado"}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
