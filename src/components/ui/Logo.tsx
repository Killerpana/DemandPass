// src/components/ui/Logo.tsx
// Usa el lockup vectorial oficial del Brand Kit v1.0
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  height?: number;
  href?: string;
  variant?: "dark" | "mono-white";
}

export function Logo({ height = 36, href = "/", variant = "dark" }: LogoProps) {
  const src = `/brand/lockup-horizontal-dark.svg`;
  // Ratio del lockup horizontal: aprox 5.2:1
  const width = Math.round(height * 5.2);

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
    <Link href={href} aria-label="DemandPass — inicio" className="shrink-0">
      {img}
    </Link>
  );
}
