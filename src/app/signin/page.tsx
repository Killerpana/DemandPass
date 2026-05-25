import type { Metadata } from "next";
import { AuthScreen } from "@/components/marketing/AuthScreen";

export const metadata: Metadata = {
  title: "Empezar",
  description: "Accedé a DemandPass como fan, artista o productora.",
};

export default function SignInPage() {
  return <AuthScreen />;
}
