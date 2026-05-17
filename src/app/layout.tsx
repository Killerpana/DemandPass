import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "DemandPass — Demanda verificada para eventos en vivo",
    template: "%s — DemandPass",
  },
  description:
    "DemandPass convierte el apoyo de fans en intención de compra verificable antes de confirmar un show. No vendemos entradas.",
  keywords: ["ticketing", "conciertos", "eventos en vivo", "demanda verificada", "preventa", "fans"],
  openGraph: {
    title: "DemandPass — Demanda verificada para eventos en vivo",
    description: "Fans apoyan campañas. Productoras reciben datos reales para decidir artista, ciudad, precio y venue.",
    type: "website",
    locale: "es_AR",
    siteName: "DemandPass",
  },
  twitter: {
    card: "summary_large_image",
    title: "DemandPass",
    description: "Demanda verificada para eventos en vivo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
