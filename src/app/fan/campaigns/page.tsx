import type { Metadata } from "next";
import { CampaignsBrowser } from "@/components/marketing/CampaignsBrowser";

export const metadata: Metadata = { title: "Campañas" };
export default function FanCampaignsPage() {
  return <CampaignsBrowser />;
}
