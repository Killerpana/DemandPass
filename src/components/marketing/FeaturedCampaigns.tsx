// src/components/marketing/FeaturedCampaigns.tsx
import Link from "next/link";
import { campaigns } from "@/lib/data";
import { CampaignCard } from "./CampaignCard";

export function FeaturedCampaigns() {
  return (
    <section className="py-[80px] md:py-[120px] px-5 md:px-12 border-b border-[var(--color-border)]">
      <div className="max-w-[1344px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div
              className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-3.5"
              style={{ color: "var(--color-burg3)" }}
            >
              Campañas destacadas
            </div>
            <h2
              className="uppercase"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4.5vw, 64px)",
                lineHeight: 0.95,
                letterSpacing: "0.005em",
              }}
            >
              Apoyá antes
              <br />
              <span style={{ color: "var(--color-txt3)" }}>que se confirme.</span>
            </h2>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            {["Todas", "Oficiales", "Fan demand", "Cerca del objetivo"].map((f, i) => (
              <button
                key={f}
                className="px-3.5 py-2 text-[12px] font-semibold uppercase tracking-[0.06em] rounded-full transition-colors"
                style={{
                  background: i === 0 ? "var(--color-burg3)" : "transparent",
                  color: i === 0 ? "#fff" : "var(--color-txt)",
                  border: `1px solid ${i === 0 ? "var(--color-burg3)" : "var(--color-border2)"}`,
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {campaigns.map((c) => <CampaignCard key={c.id} c={c} />)}
        </div>

        <div className="flex justify-center mt-14">
          <Link
            href="/campaigns"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-md text-[14px] font-bold uppercase tracking-[0.06em]"
            style={{
              background: "var(--color-surface2)",
              color: "var(--color-txt)",
              border: "1px solid var(--color-border2)",
            }}
          >
            Ver todas las campañas activas <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
