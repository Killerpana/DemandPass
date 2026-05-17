// src/app/campaigns/page.tsx — listing page (server component).
// Combines campaigns from src/lib/data with extras from marketing-data,
// then hands off to the CampaignsBrowser client component for filtering.
import type { Metadata } from "next";
import { campaigns } from "@/lib/data";
import { enrichCampaign, extraCampaigns } from "@/lib/marketing-data";
import { CampaignsHero } from "@/components/marketing/CampaignsHero";
import { CampaignsBrowser } from "@/components/marketing/CampaignsBrowser";

export const metadata: Metadata = {
  title: "Campañas activas",
  description:
    "Explorá todas las campañas de demanda verificada para conciertos y eventos en vivo. Filtrá por tipo, país, género y orden. Apoyá antes que se confirme el show.",
};

export default function CampaignsPage() {
  const all = [...campaigns.map(enrichCampaign), ...extraCampaigns];

  return (
    <>
      <CampaignsHero campaigns={all} />
      <CampaignsBrowser campaigns={all} />
    </>
  );
}
