import type { Metadata } from "next";
import { AuthScreen } from "@/components/marketing/AuthScreen";

export const metadata: Metadata = {
  title: "Acceso — DemandPass",
  description: "Crear cuenta o ingresar a DemandPass como fan, artista o productora.",
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>;
}) {
  const { mode } = await searchParams;
  return <AuthScreen initialMode={mode === "signin" ? "signin" : "signup"} />;
}
