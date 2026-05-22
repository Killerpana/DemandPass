import type { Metadata } from "next";
import { OnboardingFlow } from "@/components/marketing/OnboardingFlow";

export const metadata: Metadata = {
  title: "Configurá tu perfil — DemandPass",
};

export default function OnboardingPage() {
  return <OnboardingFlow />;
}
