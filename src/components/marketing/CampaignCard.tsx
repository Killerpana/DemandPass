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

export function CampaignCard({ c, hot }: { c: Campaign; hot?: boolean }) {
  const pct = Math.min(100, Math.round((c.current / c.goal) * 100));
  const isHot = hot ?? pct >= 70;
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
      {/* Cover */}
      <div
        className="h-40 relative overflow-hidden flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${c.color}30 0%, ${c.color}90 100%)` }}
      >
        <div
          className="leading-none uppercase select-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 100,
            color: "rgba(255,255,255,0.16)",
            letterSpacing: "-0.04em",
          }}
        >
          {c.img}
        </div>
        <div className="absolute top-3 left-3 flex gap-1.5">
          <Pill variant={c.type === "official" ? "live" : "info"} pulse={c.type === "official"}>
            {c.type === "official" ? "Campaña oficial" : "Fan demand"}
          </Pill>
          {isHot && <Pill variant="hot" glyph="▲">Alta demanda</Pill>}
        </div>
        <div className="absolute bottom-3 right-3">
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
          className="grid grid-cols-2 gap-0 mt-auto py-3 border-t"
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
