// src/components/marketing/Marquee.tsx — infinite scrolling trust strip
import { marqueeItems } from "@/lib/marketing-data";

export function Marquee() {
  // Triple the items for seamless loop
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden py-5 border-y border-[var(--color-border)] bg-[var(--color-bg)]">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: "dp-marquee 36s linear infinite" }}
      >
        {items.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-4 text-[13px] font-bold uppercase tracking-[0.14em]"
            style={{ color: i % 7 === 0 ? "var(--color-burg3)" : "var(--color-txt2)" }}
          >
            {t}
            <span style={{ color: "var(--color-border2)" }}>◆</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes dp-marquee { to { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
}
