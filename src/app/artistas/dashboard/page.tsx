import type { Metadata } from "next";
import { ArtistDashboard } from "@/components/marketing/ArtistDashboard";

export const metadata: Metadata = {
  title: "Mi campaña — DemandPass Artistas",
  description: "Tu dashboard de demanda — fans por ciudad, precio y Demand Score.",
};

export default function ArtistDashboardPage() {
  return <ArtistDashboard />;
}
