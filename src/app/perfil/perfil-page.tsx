// src/app/perfil/page.tsx
import type { Metadata } from "next";
import { FanProfile } from "@/components/marketing/FanProfile";

export const metadata: Metadata = {
  title: "Mi Perfil",
  description: "Tus DemandPasses activos, historial y nivel de fan.",
};

export default function PerfilPage() {
  return <FanProfile />;
}
