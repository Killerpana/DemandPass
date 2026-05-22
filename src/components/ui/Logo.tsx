import Link from "next/link";

interface LogoProps {
  height?: number;
  href?: string;
  inverted?: boolean;
  mono?: null | "white" | "black" | "burgundy";
  compact?: boolean;
}

export function Logo({
  height = 32,
  href = "/",
  inverted = false,
  mono = null,
  compact = false,
}: LogoProps) {
  let src: string;
  if (compact) {
    src = mono === "white"    ? "/brand/isotype-white.svg"
        : mono === "black"    ? "/brand/isotype-black.svg"
        : "/brand/isotype-burgundy.svg";
  } else {
    src = mono === "white"    ? "/brand/lockup-horizontal-mono-white.svg"
        : mono === "black"    ? "/brand/lockup-horizontal-mono-black.svg"
        : mono === "burgundy" ? "/brand/lockup-horizontal-mono-burgundy.svg"
        : inverted            ? "/brand/lockup-horizontal-light.svg"
        : "/brand/lockup-horizontal-dark.svg";
  }

  const img = (
    <img
      src={src}
      alt="DemandPass"
      style={{ height, width: "auto", display: "block", flexShrink: 0 }}
    />
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
      style={{ width: size, height: size }}
    />
  );
}
