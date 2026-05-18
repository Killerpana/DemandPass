// src/components/marketing/CampaignCard.tsx
// Premium campaign card with cover, status pills, progress, sparkline.
import Link from "next/link";
import type { Campaign } from "@/lib/data";
import { Pill } from "@/components/ui/Pill";
import { Progress } from "@/components/ui/Progress";
import { Sparkline } from "@/components/ui/Sparkline";

// Generate a plausible upward trend from current progress
function trendFor(pct: number): number[] {
  const target = Math.max(8, pct);
  return Array.from({ length: 12 }, (_, i) => {
    const t = (i + 1) / 12;
    return Math.round(target * Math.pow(t, 1.4) + (Math.random() - 0.5) * 4);
  });
}

// Demand Score: weighted combo of campaign progress (60%) + certainty (40%)
function demandScore(pct: number, certainty: number): number {
  return Math.min(100, Math.round(pct * 0.6 + certainty * 0.4));
}

function DemandScoreBadge({ score }: { score: number }) {
  const color =
    score >= 75 ? "var(--color-emerald2)" :
    score >= 50 ? "var(--color-amber2)" :
    "var(--color-txt3)";
  const label =
    score >= 75 ? "Alto" :
    score >= 50 ? "Medio" :
    "Bajo";
  // Arc SVG: radius 14, circumference ~88
  const r = 14;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 40 40" className="-rotate-90" aria-hidden>
          <circle cx="20" cy="20" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
          <circle
            cx="20" cy="20" r={r} fill="none"
            stroke={color} strokeWidth="3"
            strokeDasharray={`${dash} ${circ}`}
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 0.6s ease" }}
          />
        </svg>
        <span
          className="absolute text-[11px] font-extrabold tabular-nums"
          style={{ fontFamily: "var(--font-mono)", color }}
        >
          {score}
        </span>
      </div>
      <span className="text-[9px] uppercase tracking-[0.1em] font-semibold" style={{ color: "var(--color-txt3)" }}>
        {label}
      </span>
    </div>
  );
}

export function CampaignCard({ c, hot }: { c: Campaign; hot?: boolean }) {
  const pct = Math.min(100, Math.round((c.current / c.goal) * 100));
  const isHot = hot ?? pct >= 70;
  const score = demandScore(pct, c.certainty);
  return (
    <Link
      href={`/campaigns/${c.id}`}
      className="flex flex-col overflow-hidden rounded-xl group transition-all hover:-translate-y-0.5"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      {/* Cover — borde superior de color según tipo */}
      <div
        className="h-40 relative overflow-hidden flex items-center justify-center"
        style={{
          background: c.type === "official"
            ? `linear-gradient(135deg, ${c.color}30 0%, ${c.color}90 100%)`
            : `linear-gradient(135deg, #1a2a3a 0%, #0f1e2e 100%)`,
          borderTop: c.type === "official"
            ? "2px solid var(--color-burg3)"
            : "2px solid #2563eb",
        }}
      >
        {/* Watermark tipo */}
        <div
          className="absolute inset-0 flex items-center justify-end pr-4 pointer-events-none select-none opacity-10"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 80,
            color: c.type === "official" ? "var(--color-burg3)" : "#2563eb",
            letterSpacing: "-0.04em",
          }}
        >
          {c.type === "official" ? "OFF" : "FAN"}
        </div>

        <div
          className="leading-none uppercase select-none relative z-10"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 100,
            color: "rgba(255,255,255,0.16)",
            letterSpacing: "-0.04em",
          }}
        >
          {c.img}
        </div>

        <div className="absolute top-3 left-3 flex gap-1.5 z-10">
          {c.type === "official" ? (
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.08em]"
              style={{ background: "var(--color-burg3)", color: "#fff" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block animate-pulse" />
              Campaña oficial
            </span>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.08em]"
              style={{ background: "rgba(37,99,235,0.85)", color: "#fff", border: "1px solid rgba(37,99,235,0.6)" }}
            >
              ◈ Fan demand
            </span>
          )}
          {isHot && <Pill variant="hot" glyph="▲">Alta demanda</Pill>}
        </div>
        <div className="absolute bottom-3 right-3 z-10">
          <Sparkline data={trendFor(pct)} width={60} height={24} color="rgba(255,255,255,0.7)" filled={false} />
        </div>
      </div>

      {/* Body */}
      <div className="p-[18px] flex flex-col flex-1">
        <h3
          className="uppercase font-extrabold mb-1"
          style={{ fontFamily: "var(--font-display)", fontSize: 22, letterSpacing: "0.005em" }}
        >
          {c.artist}
        </h3>
        <div className="text-xs text-[var(--color-txt2)] mb-3.5">{c.event}</div>
        <div className="flex items-center gap-1.5 text-xs text-[var(--color-txt)] mb-[18px]">
          <span style={{ color: "var(--color-txt3)" }}>◉</span> {c.city} · {c.country}
        </div>

        {/* Progress */}
        <div className="mb-3.5">
          <div className="flex justify-between items-baseline mb-1.5">
            <span className="text-[14px] font-bold tabular-nums" style={{ fontFamily: "var(--font-mono)" }}>
              {c.current.toLocaleString("es-AR")}
              <span className="text-[var(--color-txt3)] font-normal"> / {c.goal.toLocaleString("es-AR")}</span>
            </span>
            <span
              className="text-[14px] font-bold tabular-nums"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-burg3)" }}
            >
              {pct}%
            </span>
          </div>
          <Progress value={pct} />
        </div>

        {/* Meta */}
        <div
          className="grid grid-cols-3 gap-0 mt-auto py-3 border-t items-center"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div>
            <div className="text-[10px] uppercase tracking-[0.08em] text-[var(--color-txt3)]">Precio est.</div>
            <div
              className="text-[13px] font-bold mt-0.5 tabular-nums"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {c.price}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.08em] text-[var(--color-txt3)]">Cierra en</div>
            <div
              className="text-[13px] font-bold mt-0.5 tabular-nums"
              style={{
                fontFamily: "var(--font-mono)",
                color: c.days < 14 ? "var(--color-amber2)" : "var(--color-txt)",
              }}
            >
              {c.days} días
            </div>
          </div>
          {/* Demand Score */}
          <div className="flex justify-end">
            <div className="flex flex-col items-center gap-0.5">
              <div className="text-[9px] uppercase tracking-[0.1em] font-semibold text-[var(--color-txt3)] mb-0.5">
                Demand Score
              </div>
              <DemandScoreBadge score={score} />
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-opacity group-hover:opacity-90"
          style={{
            background: "var(--color-burg3)",
            boxShadow: "0 6px 18px rgba(196,38,78,0.32), inset 0 1px 0 rgba(255,255,255,0.18)",
          }}
        >
          Apoyar <span aria-hidden>→</span>
        </div>
      </div>
    </Link>
  );
}
