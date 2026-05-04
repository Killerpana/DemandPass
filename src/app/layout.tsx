import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "DemandPass — Verified Demand for Live Entertainment",
  description:
    "DemandPass convierte el apoyo de fans en intención de compra verificable antes de confirmar un show.",
  openGraph: {
    title: "DemandPass",
    description: "Verified demand for live entertainment",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 56px)" }}>{children}</main>
      </body>
    </html>
  );
}
