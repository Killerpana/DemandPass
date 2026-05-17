// src/components/ui/Progress.tsx
// Linear progress with optional glow. Reaches 100% → green tint.
import { cn } from "@/lib/utils";

export function Progress({
  value,
  max = 100,
  height = 6,
  className,
}: {
  value: number;
  max?: number;
  height?: number;
  className?: string;
}) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div
      className={cn("w-full rounded-full overflow-hidden relative", className)}
      style={{ height, background: "rgba(255,255,255,0.04)" }}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full transition-[width]"
        style={{
          width: `${pct}%`,
          background: pct >= 100
            ? "var(--color-emerald2)"
            : "linear-gradient(90deg, var(--color-burg), var(--color-burg2))",
          boxShadow: pct > 5 ? "0 0 12px rgba(196,38,78,0.5)" : "none",
          transitionDuration: "400ms",
          transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)",
        }}
      />
    </div>
  );
}
