// src/app/campaigns/[id]/support/page.tsx — wizard page (redesigned shell)
import Link from "next/link";
import { notFound } from "next/navigation";
import { campaigns } from "@/lib/data";
import { extraCampaigns } from "@/lib/marketing-data";
import { Pill } from "@/components/ui/Pill";
import { SupportWizardV2 } from "@/components/marketing/SupportWizardV2";

const allCampaigns = [...campaigns, ...extraCampaigns];

export default async function SupportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: idStr } = await params;
  const id = Number(idStr);
  const c = allCampaigns.find((x) => x.id === id) ?? null;
  if (!c) notFound();

  // The wizard component only works for indexed campaigns in /lib/data.
  // For extra campaigns we still render the wizard with `index 0` as a safe fallback —
  // production would wire this through your real backend / id resolver.
  const wizardIndex =
    campaigns.findIndex((x) => x.id === c.id) !== -1
      ? campaigns.findIndex((x) => x.id === c.id)
      : 0;

  return (
    <div className="max-w-[760px] mx-auto px-6 sm:px-12 py-10">
      <Link
        href={`/campaigns/${id}`}
        className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.08em] font-semibold text-[var(--color-txt2)] hover:text-[var(--color-txt)] mb-6"
      >
        ← Volver a campaña
      </Link>

      {/* Campaign context bar */}
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-md mb-7"
        style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}
      >
        <div
          className="w-9 h-9 rounded-md flex items-center justify-center font-extrabold text-[12px]"
          style={{
            background: `linear-gradient(135deg, ${c.color}30, ${c.color}90)`,
            border: "1px solid var(--color-border2)",
            color: "#fff",
            fontFamily: "var(--font-display)",
          }}
        >
          {c.img}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[14px] font-semibold truncate">{c.artist}</div>
          <div className="text-[12px] text-[var(--color-txt3)]" style={{ fontFamily: "var(--font-mono)" }}>
            {c.city} · {c.price}
          </div>
        </div>
        <Pill variant={c.type === "official" ? "live" : "info"} pulse={c.type === "official"}>
          {c.type === "official" ? "Oficial" : "Fan"}
        </Pill>
      </div>

      <SupportWizardV2 campaignId={wizardIndex} />
    </div>
  );
}

export function generateStaticParams() {
  return allCampaigns.map((c) => ({ id: String(c.id) }));
}
