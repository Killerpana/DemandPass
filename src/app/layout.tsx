import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { FooterGate } from "@/components/ui/FooterGate";

export const viewport = {
  themeColor: "#08080D",
};

export const metadata: Metadata = {
  title: { default: "DemandPass — Real Fans · Real Demand", template: "%s — DemandPass" },
  description: "DemandPass convierte el apoyo de fans en intención de compra verificable antes de confirmar un show.",
  metadataBase: new URL("https://demand-pass.vercel.app"),
  openGraph: {
    title: "DemandPass — Real Fans · Real Demand",
    description: "La capa de inteligencia previa al ticketing. Demanda verificada por ciudad, precio y tipo de entrada para eventos en vivo en LATAM.",
    url: "https://demand-pass.vercel.app",
    siteName: "DemandPass",
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: "DemandPass" }],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DemandPass — Real Fans · Real Demand",
    description: "La capa de inteligencia previa al ticketing para eventos en vivo en LATAM.",
    images: ["/brand/og.png"],
  },
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/brand/app-icon-180.png", sizes: "180x180" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" style={{ colorScheme: "dark" }}>
      <head>
        <meta name="theme-color" content="#08080D" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@700;800;900&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main id="main-content" style={{ flex: 1 }}>{children}</main>
        <FooterGate />
      </body>
    </html>
  );
}
