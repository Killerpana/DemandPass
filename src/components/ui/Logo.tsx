// src/components/ui/Logo.tsx
// Implementación del Brand Kit v1.0 de DemandPass
// El wordmark es vectorial puro — no requiere ninguna tipografía externa

import Image from "next/image";
import Link from "next/link";

type Mono = null | "white" | "black" | "burgundy";

interface LogoProps {
  height?: number;
  href?: string;
  inverted?: boolean;
  mono?: Mono;
  compact?: boolean;
  showTagline?: boolean;
}

export function Logo({
  height = 28,
  href = "/",
  inverted = false,
  mono = null,
  compact = false,
  showTagline = false,
}: LogoProps) {
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

  // Nuevo SVG: 705x128 — wordmark en y:0-75, tagline en y:94-113
  // Sin tagline: ratio = 705/75 ≈ 9.4, multiplicador altura = 128/75 ≈ 1.707
  // Con tagline: ratio = 705/128 ≈ 5.5 (SVG completo)
  const aspectRatio = compact ? (202 / 209) : showTagline ? 5.5 : 9.4;
  const width = Math.round(height * aspectRatio);

  const img = (
    <div
      style={{
        height,
        width,
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <img
        src={src}
        alt="DemandPass"
        style={{
          height: showTagline ? height : Math.round(height * (128 / 75)),
          width: "auto",
          display: "block",
          maxWidth: "none",
        }}
      />
    </div>
  );

  if (!href) return img;
  return (
    <Link href={href} aria-label="DemandPass — inicio" className="shrink-0 inline-flex">
      {img}
    </Link>
  );
}

export function Isotype({ size = 32, variant = "burgundy" }: { size?: number; variant?: "burgundy" | "white" | "black" }) {
  return (
    <img
      src={`/brand/isotype-${variant}.svg`}
      alt="DemandPass"
      width={size}
      height={size}
      style={{ width: size, height: size }}
    />
  );
}
