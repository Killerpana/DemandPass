// src/app/campaigns/[id]/page.tsx — campaign detail (redesigned)
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { campaigns } from "@/lib/data";
import { extraCampaigns } from "@/lib/marketing-data";
import { CampaignDetail } from "@/components/marketing/CampaignDetail";

const allCampaigns = [...campaigns, ...extraCampaigns];

function findCampaign(idStr: string) {
  const id = Number(idStr);
  return allCampaigns.find((c) => c.id === id) ?? null;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const c = findCampaign(id);
  if (!c) return { title: "Campaña no encontrada" };
  return {
    title: `${c.artist} · ${c.city}`,
    description: c.description,
  };
}

export default async function CampaignDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const c = findCampaign(id);
  if (!c) notFound();

  return <CampaignDetail c={c} />;
}

export function generateStaticParams() {
  return allCampaigns.map((c) => ({ id: String(c.id) }));
}
