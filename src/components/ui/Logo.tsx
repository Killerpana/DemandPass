// src/components/ui/Logo.tsx
// DemandPass primary lockup, using the brand PNG.
// Uses mix-blend-mode: screen so the PNG's black bg disappears on any dark surface.
import Image from "next/image";
import Link from "next/link";

const SRC = "/brand/logo-demandpass.png";
const SRC_W = 1150;
const SRC_H = 370;

export function Logo({ height = 32, href, className = "" }: { height?: number; href?: string; className?: string }) {
  const width = Math.round(height * (SRC_W / SRC_H));
  const img = (
    <Image
      src={SRC}
      alt="DemandPass"
      width={width}
      height={height}
      priority
      style={{ height, width: "auto", display: "block", mixBlendMode: "screen" }}
    />
  );
  return href ? (
    <Link href={href} aria-label="DemandPass — Inicio" className={`inline-flex items-center ${className}`}>
      {img}
    </Link>
  ) : (
    <span className={`inline-flex items-center ${className}`}>{img}</span>
  );
}
