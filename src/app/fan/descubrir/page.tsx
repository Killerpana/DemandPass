import type { Metadata } from "next";
import { CampaignsBrowser } from "@/components/marketing/CampaignsBrowser";

export const metadata: Metadata = { title: "Descubrir" };
export default function FanDescubrirPage() {
  return <CampaignsBrowser />;
}
