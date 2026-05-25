import type { Metadata } from "next";
import { campaigns } from "@/lib/data";
import { enrichCampaign, extraCampaigns } from "@/lib/marketing-data";
import { CampaignsHero } from "@/components/marketing/CampaignsHero";
import { CampaignsBrowser } from "@/components/marketing/CampaignsBrowser";

export const metadata: Metadata = { title: "Campañas" };

export default function FanCampaignsPage() {
  const all = [...campaigns.map(enrichCampaign), ...extraCampaigns];
  return (
    <>
      <CampaignsHero campaigns={all} />
      <CampaignsBrowser campaigns={all} />
    </>
  );
}
