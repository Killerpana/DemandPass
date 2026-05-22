// src/app/page.tsx — redesigned landing con animaciones de scroll

import type { Metadata } from "next";
import { Hero }              from "@/components/marketing/Hero";
import { Marquee }           from "@/components/marketing/Marquee";
import { HowItWorks }        from "@/components/marketing/HowItWorks";
import { FeaturedCampaigns } from "@/components/marketing/FeaturedCampaigns";
import { B2BPreview }        from "@/components/marketing/B2BPreview";
import { PlanesB2B }         from "@/components/marketing/PlanesB2B";
import { SocialProof }       from "@/components/marketing/SocialProof";
import { FAQ }               from "@/components/marketing/FAQ";
import { ScrollReveal }      from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "DemandPass — Demanda verificada para eventos en vivo",
  description:
    "Convertimos el apoyo de fans en datos reales antes de confirmar un show. Demanda verificada por ciudad, precio y tipo de entrada — para fans y productoras en LATAM.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero sin animación — ya tiene sus propias animaciones */}
      <Hero />

      {/* Marquee — fade simple */}
      <ScrollReveal variant="fade" duration={800}>
        <Marquee />
      </ScrollReveal>

      {/* Cómo funciona — slide desde abajo */}
      <ScrollReveal variant="slide-up" duration={700} delay={100}>
        <HowItWorks />
      </ScrollReveal>

      {/* Campañas destacadas — zoom sutil */}
      <ScrollReveal variant="zoom" duration={700} delay={50}>
        <FeaturedCampaigns />
      </ScrollReveal>

      {/* Preview B2B — slide desde la derecha */}
      <ScrollReveal variant="slide-right" duration={700}>
        <B2BPreview />
      </ScrollReveal>

      {/* Planes B2B — blur + fade */}
      <ScrollReveal variant="blur" duration={800} delay={50}>
        <PlanesB2B />
      </ScrollReveal>

      {/* Social Proof — slide desde abajo */}
      <ScrollReveal variant="slide-up" duration={600}>
        <SocialProof />
      </ScrollReveal>

      {/* FAQ — fade */}
      <ScrollReveal variant="fade" duration={600} delay={100}>
        <FAQ />
      </ScrollReveal>
    </>
  );
}
