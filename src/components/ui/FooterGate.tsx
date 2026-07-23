"use client";
// Oculta el footer de marketing dentro de las vistas de aplicación
// (dashboards y flujos) para reforzar la sensación de producto.
import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

const HIDDEN = [/^\/dashboard/, /^\/fan(\/|$)/, /^\/artistas\/dashboard/, /^\/onboarding/];

export function FooterGate() {
  const pathname = usePathname();
  if (HIDDEN.some((r) => r.test(pathname))) return null;
  return <Footer />;
}
