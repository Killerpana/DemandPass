// src/components/ui/Pill.tsx
// Status pill — dot + label, optional pulsing dot.
import { cn } from "@/lib/utils";

type Variant = "live" | "hot" | "ok" | "info" | "crit" | "mute";

const VARIANT_STYLES: Record<Variant, { bg: string; fg: string; dot: string }> = {
  live: { bg: "rgba(196,38,78,0.12)", fg: "#E43A66", dot: "var(--color-burg3)" },
  hot:  { bg: "rgba(245,158,11,0.12)", fg: "var(--color-amber2)", dot: "var(--color-amber2)" },
  ok:   { bg: "rgba(16,185,129,0.12)", fg: "var(--color-emerald2)", dot: "var(--color-emerald2)" },
  info: { bg: "rgba(56,189,248,0.12)", fg: "#38bdf8", dot: "#38bdf8" },
  crit: { bg: "rgba(239,68,68,0.12)", fg: "var(--color-red2)", dot: "var(--color-red2)" },
  mute: { bg: "rgba(255,255,255,0.04)", fg: "var(--color-txt2)", dot: "var(--color-txt3)" },
};

export function Pill({
  variant = "mute",
  pulse = false,
  glyph,
  children,
  className,
}: {
  variant?: Variant;
  pulse?: boolean;
  glyph?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const v = VARIANT_STYLES[variant];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[1.5px] whitespace-nowrap leading-none",
        className
      )}
      style={{ background: v.bg, color: v.fg, fontFamily: "var(--font-condensed)" }}
    >
      {pulse ? (
        <span className="dot-pulse" style={{ background: v.dot }} aria-hidden />
      ) : glyph ? (
        <span style={{ color: v.dot, fontSize: 9 }} aria-hidden>{glyph}</span>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: v.dot }} aria-hidden />
      )}
      {children}
    </span>
  );
}
