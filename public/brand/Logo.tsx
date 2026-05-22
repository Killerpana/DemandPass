// src/components/ui/Logo.tsx
// Implementación del Brand Kit v1.0 de DemandPass
// El wordmark es vectorial puro — no requiere ninguna tipografía externa

import Image from "next/image";
import Link from "next/link";

type Mono = null | "white" | "black" | "burgundy";

interface LogoProps {
  height?: number;
  href?: string;
  inverted?: boolean;  // sobre fondo claro
  mono?: Mono;         // null = color completo
  compact?: boolean;   // solo isotipo
}

export function Logo({
  height = 32,
  href = "/",
  inverted = false,
  mono = null,
  compact = false,
}: LogoProps) {
  // Selección del SVG según variante
  let src: string;
  if (compact) {
    src = mono === "white"    ? "/brand/isotype-white.svg"
        : mono === "black"    ? "/brand/isotype-black.svg"
        : mono === "burgundy" ? "/brand/isotype-burgundy.svg"
        : "/brand/isotype-burgundy.svg";
  } else {
    src = mono === "white"    ? "/brand/lockup-horizontal-mono-white.svg"
        : mono === "black"    ? "/brand/lockup-horizontal-mono-black.svg"
        : mono === "burgundy" ? "/brand/lockup-horizontal-mono-burgundy.svg"
        : inverted            ? "/brand/lockup-horizontal-light.svg"
        : "/brand/lockup-horizontal-dark.svg";
  }

  // Ratio: lockup horizontal ~5.2:1, isotipo ~202/209
  const aspectRatio = compact ? (202 / 209) : 5.2;
  const width = Math.round(height * aspectRatio);

  const img = (
    <Image
      src={src}
      alt="DemandPass"
      width={width}
      height={height}
      priority
      style={{ height, width: "auto", display: "block" }}
    />
  );

  if (!href) return img;
  return (
    <Link href={href} aria-label="DemandPass — inicio" className="shrink-0 inline-flex">
      {img}
    </Link>
  );
}

// Isotipo solo — útil para favicon, avatar, etc.
export function Isotype({ size = 32, variant = "burgundy" }: { size?: number; variant?: "burgundy" | "white" | "black" }) {
  return (
    <Image
      src={`/brand/isotype-${variant}.svg`}
      alt="DemandPass"
      width={size}
      height={size}
      style={{ width: size, height: size }}
    />
  );
}
