// src/components/marketing/CampaignsHero.tsx — listing page top section
import type { EnrichedCampaign } from "@/lib/marketing-data";

export function CampaignsHero({ campaigns }: { campaigns: EnrichedCampaign[] }) {
  const totalSupports = campaigns.reduce((acc, c) => acc + c.current, 0);
  const countries = new Set(campaigns.map((c) => c.country)).size;

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] px-12 py-12">
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,38,78,0.12), transparent 65%)" }}
      />
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-[1344px] mx-auto relative flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <div
            className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-3.5"
            style={{ color: "var(--color-burg3)" }}
          >
            Campañas activas
          </div>
          <h1
            className="uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5.5vw, 72px)",
              lineHeight: 0.95,
              letterSpacing: "0.005em",
            }}
          >
            Apoyá antes que se confirme.
          </h1>
          <p className="text-[15px] text-[var(--color-txt2)] mt-3 max-w-[580px] leading-[1.55]">
            <span
              className="tabular-nums font-semibold text-[var(--color-txt)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {campaigns.length} campañas
            </span>{" "}
            activas ·{" "}
            <span
              className="tabular-nums font-semibold text-[var(--color-txt)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {totalSupports >= 1000 ? `${(totalSupports / 1000).toFixed(1)}K` : totalSupports}
            </span>{" "}
            apoyos verificados ·{" "}
            <span className="tabular-nums font-semibold text-[var(--color-txt)]" style={{ fontFamily: "var(--font-mono)" }}>
              {countries}
            </span>{" "}
            {countries === 1 ? "país" : "países"}
          </p>
        </div>
      </div>
    </section>
  );
}
