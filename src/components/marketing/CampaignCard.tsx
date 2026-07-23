// src/components/marketing/CampaignCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { Campaign } from "@/lib/data";
import { Pill } from "@/components/ui/Pill";
import { Progress } from "@/components/ui/Progress";
import { Sparkline } from "@/components/ui/Sparkline";

function trendFor(pct: number): number[] {
  const target = Math.max(8, pct);
  return Array.from({ length: 12 }, (_, i) => {
    const t = (i + 1) / 12;
    return Math.round(target * Math.pow(t, 1.4) + (Math.random() - 0.5) * 4);
  });
}

function demandScore(pct: number, certainty: number): number {
  return Math.min(100, Math.round(pct * 0.6 + certainty * 0.4));
}

function DemandScoreBadge({ score }: { score: number }) {
  const color =
    score >= 75 ? "var(--color-emerald2)" :
    score >= 50 ? "var(--color-amber2)" :
    "var(--color-txt3)";
  const label = score >= 75 ? "Alto" : score >= 50 ? "Medio" : "Bajo";
  const r = 14;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 40 40" className="-rotate-90" aria-hidden>
          <circle cx="20" cy="20" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
          <circle cx="20" cy="20" r={r} fill="none" stroke={color} strokeWidth="3" strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" />
        </svg>
        <span className="absolute text-[11px] font-extrabold tabular-nums" style={{ fontFamily: "var(--font-mono)", color }}>{score}</span>
      </div>
      <span className="text-[9px] uppercase tracking-[0.1em] font-semibold" style={{ color: "var(--color-txt3)" }}>{label}</span>
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
      className="flex flex-col rounded-xl overflow-hidden transition-transform hover:-translate-y-1 group"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
      }}
    >
      {/* Cover */}
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
        {/* Imagen del tour (solo campañas oficiales con tourImg) */}
        {c.tourImg ? (
          <>
            <Image
              src={c.tourImg}
              alt={`${c.artist} — ${c.event}`}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              style={{ objectFit: "cover", objectPosition: "center top", opacity: 0.92 }}
            />
            {/* Overlay sutil para legibilidad de badges */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 55%)" }}
            />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 flex items-center justify-end pr-4 pointer-events-none select-none opacity-10"
              style={{ fontFamily: "var(--font-display)", fontSize: 80, color: c.type === "official" ? "var(--color-burg3)" : "#2563eb", letterSpacing: "-0.04em" }}
            >
              {c.type === "official" ? "OFF" : "FAN"}
            </div>
            <div
              className="leading-none uppercase select-none relative z-10"
              style={{ fontFamily: "var(--font-display)", fontSize: 100, color: "rgba(255,255,255,0.16)", letterSpacing: "-0.04em" }}
            >
              {c.img}
            </div>
          </>
        )}

        {/* Badges tipo */}
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
      <div className="flex flex-col flex-1 px-4 pt-4 pb-3 gap-3">
        <div>
          <div className="font-bold text-[15px] leading-tight group-hover:text-[var(--color-burg3)] transition-colors">
            {c.artist}
          </div>
          <div className="text-[12px] text-[var(--color-txt3)] mt-0.5">{c.event}</div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px]" style={{ color: "var(--color-txt3)" }}>
          <span>◎</span>
          <span>{c.city} · {c.country}</span>
        </div>

        <div>
          <div className="flex justify-between text-[11px] mb-1.5" style={{ color: "var(--color-txt3)" }}>
            <span className="tabular-nums font-mono">{c.current.toLocaleString("es-AR")} / {c.goal.toLocaleString("es-AR")}</span>
            <span className="font-bold" style={{ color: pct >= 75 ? "var(--color-burg3)" : "var(--color-txt2)" }}>{pct}%</span>
          </div>
          <Progress value={pct} height={4} />
        </div>

        {/* Meta */}
        <div className="grid grid-cols-3 gap-0 mt-auto py-3 border-t items-center" style={{ borderColor: "var(--color-border)" }}>
          <div>
            <div className="text-[10px] uppercase tracking-[0.08em] text-[var(--color-txt3)]">Precio est.</div>
            <div className="text-[13px] font-bold mt-0.5 tabular-nums" style={{ fontFamily: "var(--font-mono)" }}>{c.price}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.08em] text-[var(--color-txt3)]">Cierra en</div>
            <div className="text-[13px] font-bold mt-0.5 tabular-nums" style={{ fontFamily: "var(--font-mono)", color: c.days < 14 ? "var(--color-amber2)" : "var(--color-txt)" }}>
              {c.days} días
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col items-center gap-0.5">
              <div className="text-[9px] uppercase tracking-[0.1em] font-semibold text-[var(--color-txt3)] mb-0.5">Demand Score</div>
              <DemandScoreBadge score={score} />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-4">
        <div
          className="w-full py-2.5 rounded-md text-[12px] font-bold uppercase tracking-[0.06em] text-center text-white transition-opacity group-hover:opacity-90"
          style={{ background: "var(--color-burg3)", boxShadow: "0 4px 12px rgba(196,38,78,0.25)" }}
        >
          Apoyar →
        </div>
      </div>
    </Link>
  );
}
