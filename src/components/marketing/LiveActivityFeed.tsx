// src/components/marketing/LiveActivityFeed.tsx
// Client component — simulated live activity that ticks every few seconds.
"use client";

import { useEffect, useState } from "react";
import { Pill } from "@/components/ui/Pill";

type Entry = { user: string; city: string; price: string; when: string };

const SAMPLE_USERS = ["sofi_m", "mateoa", "fer.gonzalez", "jaz.r", "lautaro", "valencabaña", "tomi.k", "agus_", "ines.b", "feli.m"];
const PRICES = ["USD 75", "USD 80", "USD 85", "USD 90", "USD 95", "USD 100", "USD 110", "USD 120"];

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function relative(secondsAgo: number): string {
  if (secondsAgo < 60) return `hace ${secondsAgo}s`;
  if (secondsAgo < 3600) return `hace ${Math.floor(secondsAgo / 60)}m`;
  return `hace ${Math.floor(secondsAgo / 3600)}h`;
}

export function LiveActivityFeed({ artistCity }: { artistCity: string }) {
  const cities = [artistCity, "Córdoba", "Rosario", "Mendoza"];

  // Initial seed entries (rendered server-side for SSR safety, then animated client-side)
  const [entries, setEntries] = useState<Entry[]>(() => [
    { user: "sofi_m", city: artistCity, price: "USD 95", when: "hace 12s" },
    { user: "mateoa", city: "Córdoba",  price: "USD 80", when: "hace 28s" },
    { user: "fer.gonzalez", city: "Rosario", price: "USD 100", when: "hace 41s" },
    { user: "jaz.r", city: artistCity, price: "USD 85", when: "hace 1m" },
  ]);

  useEffect(() => {
    const id = setInterval(() => {
      setEntries((prev) => {
        const next: Entry = {
          user: pick(SAMPLE_USERS),
          city: pick(cities),
          price: pick(PRICES),
          when: "hace 1s",
        };
        // Bump existing entries' time labels by an estimated 5s
        const bumped = prev.slice(0, 3).map((e, i) => ({
          ...e,
          when: relative(5 + i * 12),
        }));
        return [next, ...bumped];
      });
    }, 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artistCity]);

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
    >
      <div className="px-5 py-4 flex items-center justify-between border-b border-[var(--color-border)]">
        <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)]">
          Actividad en vivo
        </div>
        <Pill variant="live" pulse>Live</Pill>
      </div>
      <ul className="flex flex-col list-none m-0">
        {entries.map((e, i) => (
          <li
            key={`${e.user}-${i}-${e.when}`}
            className="px-5 py-3 flex items-center gap-3 text-[12px]"
            style={{
              borderBottom: i < entries.length - 1 ? "1px solid var(--color-border)" : "none",
              animation: i === 0 ? "dp-flash 600ms ease-out" : undefined,
            }}
          >
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0"
              style={{
                background: "var(--color-surface3)",
                border: "1px solid var(--color-border2)",
                color: "var(--color-txt2)",
                fontFamily: "var(--font-display)",
              }}
              aria-hidden
            >
              {e.user.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div
                className="text-[12px] text-[var(--color-txt)] truncate"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                @{e.user}
              </div>
              <div className="text-[11px] text-[var(--color-txt3)]">
                {e.city} · {e.when}
              </div>
            </div>
            <div
              className="text-[12px] font-semibold tabular-nums"
              style={{ color: "var(--color-burg3)", fontFamily: "var(--font-mono)" }}
            >
              {e.price}
            </div>
          </li>
        ))}
      </ul>

      <style>{`
        @keyframes dp-flash {
          0%   { background: rgba(196,38,78,0.18); }
          100% { background: transparent; }
        }
      `}</style>
    </div>
  );
}
