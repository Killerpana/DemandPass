import type { Metadata } from "next";
import { campaigns } from "@/lib/data";
import { enrichCampaign, extraCampaigns } from "@/lib/marketing-data";
import { CampaignsBrowser } from "@/components/marketing/CampaignsBrowser";
import { CampaignsHero } from "@/components/marketing/CampaignsHero";

export const metadata: Metadata = { title: "Descubrir" };

export default function FanDescubrirPage() {
  const all = [...campaigns.map(enrichCampaign), ...extraCampaigns];
  return (
    <>
      <CampaignsHero />
      <CampaignsBrowser campaigns={all} />
    </>
  );
}
