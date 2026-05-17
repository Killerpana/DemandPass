// src/app/signin/page.tsx — auth entrypoint (signup default)
import type { Metadata } from "next";
import { AuthScreen } from "@/components/marketing/AuthScreen";

export const metadata: Metadata = {
  title: "Crear cuenta",
  description: "Sumate a DemandPass — como fan o como productora. Apoyá artistas o medí demanda verificada.",
};

export default function SignInPage() {
  return <AuthScreen initialMode="signup" />;
}
