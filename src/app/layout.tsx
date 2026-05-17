import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "DemandPass — Verified Demand. Live Access.",
    template: "%s — DemandPass",
  },
  description: "DemandPass convierte el apoyo de fans en intención de compra verificable antes de confirmar un show. No vendemos entradas.",
  keywords: ["ticketing", "conciertos", "eventos en vivo", "demanda verificada", "preventa", "fans"],
  openGraph: {
    title: "DemandPass — Verified Demand. Live Access.",
    description: "Fans apoyan campañas. Productoras reciben datos reales.",
    type: "website",
    locale: "es_AR",
    siteName: "DemandPass",
  },
  themeColor: "#08080D",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" style={{ colorScheme: "dark" }}>
      <head>
        <meta name="theme-color" content="#08080D" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main id="main-content" style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
