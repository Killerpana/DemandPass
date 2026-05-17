// src/app/page.tsx — redesigned landing
// Composed of marketing sections; mostly server components, with two client
// islands: DemandConsole (live counter) and FAQ (accordion).

import type { Metadata } from "next";
import { Hero }              from "@/components/marketing/Hero";
import { Marquee }           from "@/components/marketing/Marquee";
import { HowItWorks }        from "@/components/marketing/HowItWorks";
import { FeaturedCampaigns } from "@/components/marketing/FeaturedCampaigns";
import { B2BPreview }        from "@/components/marketing/B2BPreview";
import { SocialProof }       from "@/components/marketing/SocialProof";
import { FAQ }               from "@/components/marketing/FAQ";

export const metadata: Metadata = {
  title: "DemandPass — Demanda verificada para eventos en vivo",
  description:
    "Convertimos el apoyo de fans en datos reales antes de confirmar un show. Demanda verificada por ciudad, precio y tipo de entrada — para fans y productoras en LATAM.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <HowItWorks />
      <FeaturedCampaigns />
      <B2BPreview />
      <SocialProof />
      <FAQ />
    </>
  );
}
