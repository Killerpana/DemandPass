// src/components/marketing/CampaignDetail.tsx
// Detail page composition — server component, premium dark hero.
import Link from "next/link";
import type { Campaign } from "@/lib/data";
import { Pill } from "@/components/ui/Pill";
import { Progress } from "@/components/ui/Progress";
import { LiveActivityFeed } from "./LiveActivityFeed";

export function CampaignDetail({ c }: { c: Campaign }) {
  const pct = Math.min(100, Math.round((c.current / c.goal) * 100));
  const remaining = Math.max(0, c.goal - c.current);
  const isHot = pct >= 70;

  return (
    <>
      {/* Back link */}
      <div className="max-w-[1100px] mx-auto px-12 pt-6">
        <Link
          href="/campaigns"
          className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.08em] font-semibold text-[var(--color-txt2)] hover:text-[var(--color-txt)]"
        >
          ← Todas las campañas
        </Link>
      </div>

      {/* Hero cover */}
      <section
        className="relative overflow-hidden mt-4 mx-12 rounded-2xl"
        style={{
          background: `linear-gradient(180deg, ${c.color}40 0%, ${c.color}90 100%)`,
          minHeight: 360,
        }}
      >
        {/* Watermark */}
        <div
          className="absolute -top-8 -right-12 select-none pointer-events-none uppercase leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 360,
            color: "rgba(255,255,255,0.08)",
            letterSpacing: "-0.04em",
          }}
        >
          {c.img}
        </div>
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(180deg, transparent, var(--color-bg))" }}
        />

        <div className="relative max-w-[1100px] mx-auto px-10 pt-10 pb-12 flex flex-col gap-6 min-h-[360px] justify-end">
          <div className="flex flex-wrap gap-2">
            <Pill variant={c.type === "official" ? "live" : "info"} pulse={c.type === "official"}>
              {c.type === "official" ? "Campaña oficial" : "Fan demand"}
            </Pill>
            {c.reserve && <Pill variant="hot" glyph="◆">Reserva {c.reserve}</Pill>}
            {isHot && <Pill variant="hot" glyph="▲">Alta demanda</Pill>}
          </div>
          <h1
            className="uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 96px)",
              lineHeight: 0.92,
              letterSpacing: "0.005em",
            }}
          >
            {c.artist}
          </h1>
          <div className="text-[16px] text-[var(--color-txt)] opacity-90">
            {c.event} · {c.city}, {c.country}
          </div>
        </div>
      </section>

      {/* Main grid */}
      <div className="max-w-[1100px] mx-auto px-12 pt-10 pb-16 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          {/* Demand status panel */}
          <DemandStatus c={c} pct={pct} remaining={remaining} />

          {/* About */}
          <section>
            <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)] mb-3">
              Sobre el tour
            </div>
            <p className="text-[15px] leading-[1.65] text-[var(--color-txt)]">{c.description}</p>
          </section>

          {/* Perks */}
          <section
            className="rounded-xl p-7"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)] mb-4">
              Beneficios disponibles
            </div>
            <ul className="flex flex-col list-none">
              {c.perks.map((p, i) => (
                <li
                  key={p}
                  className="flex items-start gap-3 py-3 text-[14px] text-[var(--color-txt)]"
                  style={{ borderBottom: i < c.perks.length - 1 ? "1px solid var(--color-border)" : "none" }}
                >
                  <span
                    className="w-5 h-5 flex items-center justify-center text-[11px] font-bold rounded shrink-0"
                    style={{ border: "1px solid var(--color-burg3)", color: "var(--color-burg3)" }}
                    aria-hidden
                  >
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </section>

          {/* Legal */}
          <section
            className="rounded-xl p-6"
            style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.22)" }}
          >
            <div
              className="text-[11px] uppercase tracking-[0.14em] font-bold mb-2"
              style={{ color: "var(--color-amber2)" }}
            >
              Antes de apoyar — leé esto
            </div>
            <ul className="list-none pl-0 m-0 flex flex-col gap-2 text-[13px] leading-[1.6] text-[var(--color-txt2)]">
              <li>· Esta campaña <strong className="text-[var(--color-txt)]">no garantiza la realización del show</strong>.</li>
              <li>· Si la campaña no se confirma, la reserva condicional se devuelve por el <strong className="text-[var(--color-txt)]">mismo monto nominal</strong>, sin descuentos.</li>
              <li>· DemandPass <strong className="text-[var(--color-txt)]">no vende entradas</strong>. La venta final ocurre en la ticketera oficial.</li>
            </ul>
          </section>
        </div>

        {/* Right column — sticky CTA & activity */}
        <aside className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
          {/* CTA card */}
          <div
            className="rounded-xl p-6"
            style={{
              background: "linear-gradient(180deg, var(--color-surface), var(--color-surface2))",
              border: "1px solid var(--color-border2)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)] mb-2">
              Precio estimado
            </div>
            <div
              className="text-[28px] font-bold tabular-nums mb-5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {c.price}
            </div>
            <Link
              href={`/campaigns/${c.id}/support`}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-md text-[14px] font-bold uppercase tracking-[0.06em] text-white"
              style={{
                background: "var(--color-burg3)",
                boxShadow: "0 6px 18px rgba(196,38,78,0.32), inset 0 1px 0 rgba(255,255,255,0.18)",
              }}
            >
              Apoyar esta campaña <span aria-hidden>→</span>
            </Link>
            <div className="mt-3 text-[11px] text-center text-[var(--color-txt3)] leading-[1.55]">
              {c.reserve
                ? `Reserva condicional ${c.reserve} · 100% reembolsable si el show no se confirma`
                : "Sin reserva económica · Solo registrás interés"}
            </div>
          </div>

          {/* Live activity */}
          <LiveActivityFeed artistCity={c.city} />
        </aside>
      </div>
    </>
  );
}

function demandScore(pct: number, certainty: number): number {
  return Math.min(100, Math.round(pct * 0.6 + certainty * 0.4));
}

function DemandStatus({ c, pct, remaining }: { c: Campaign; pct: number; remaining: number }) {
  const score = demandScore(pct, c.certainty);
  const scoreColor =
    score >= 75 ? "var(--color-emerald2)" :
    score >= 50 ? "var(--color-amber2)" :
    "var(--color-txt3)";
  const scoreLabel = score >= 75 ? "Alto" : score >= 50 ? "Medio" : "Bajo";
  const r = 20;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;

  return (
    <section
      className="rounded-xl p-7"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border2)",
        boxShadow: "0 16px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div className="flex items-start justify-between mb-4 gap-4">
        <div className="flex-1">
          <div
            className="text-[28px] font-bold leading-none tabular-nums"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {c.current.toLocaleString("es-AR")}{" "}
            <span className="text-[18px] font-normal text-[var(--color-txt3)]">/ {c.goal.toLocaleString("es-AR")}</span>
          </div>
          <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)] mt-2">
            Apoyos verificados
          </div>
        </div>

        {/* Demand Score grande con tooltip */}
        <div className="relative group flex flex-col items-center gap-1 cursor-help shrink-0">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90" aria-hidden>
              <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
              <circle
                cx="32" cy="32" r={r} fill="none"
                stroke={scoreColor} strokeWidth="4"
                strokeDasharray={`${dash} ${circ}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-[18px] font-extrabold tabular-nums leading-none" style={{ fontFamily: "var(--font-mono)", color: scoreColor }}>{score}</span>
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-[0.1em] font-bold" style={{ color: scoreColor }}>
            Demand Score
          </span>
          <span className="text-[9px] uppercase tracking-[0.08em]" style={{ color: "var(--color-txt3)" }}>
            {scoreLabel}
          </span>

          {/* Tooltip */}
          <div
            className="absolute bottom-full mb-2 right-0 w-56 p-3 rounded-lg text-[12px] leading-[1.5] opacity-0 group-hover:opacity-100 pointer-events-none z-20 transition-opacity"
            style={{
              background: "var(--color-surface3)",
              border: "1px solid var(--color-border2)",
              color: "var(--color-txt2)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
            }}
          >
            <p className="font-bold text-[var(--color-txt)] mb-1">¿Qué es el Demand Score?</p>
            Combina el progreso de la campaña ({pct}%) con la certeza de confirmación ({c.certainty}%) para darte un índice accionable de 0 a 100.
          </div>
        </div>

        <div className="text-right">
          <div
            className="text-[28px] font-bold leading-none tabular-nums"
            style={{ fontFamily: "var(--font-mono)", color: "var(--color-burg3)" }}
          >
            {pct}%
          </div>
          <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)] mt-2">
            del objetivo
          </div>
        </div>
      </div>

      <Progress value={pct} height={8} />

      <div
        className="mt-5 pt-5 grid grid-cols-2 md:grid-cols-4 gap-4 border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        {([
          { l: "Quedan",         v: `${c.days} días`,            warn: c.days < 14 },
          { l: "Faltan apoyos",  v: remaining.toLocaleString("es-AR") },
          { l: "Certeza",        v: `${c.certainty}%`,           ok: c.certainty >= 70 },
          { l: "Beneficio",      v: c.benefit },
        ] as const).map((m) => (
          <div key={m.l}>
            <div className="text-[10px] uppercase tracking-[0.08em] font-semibold text-[var(--color-txt3)]">{m.l}</div>
            <div
              className="text-[14px] font-bold mt-1"
              style={{
                color: "warn" in m && m.warn ? "var(--color-amber2)" :
                       "ok" in m && m.ok     ? "var(--color-emerald2)" :
                                                "var(--color-txt)",
              }}
            >
              {m.v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
