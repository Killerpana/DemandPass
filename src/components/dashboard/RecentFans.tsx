// src/components/dashboard/RecentFans.tsx
import { Pill } from "@/components/ui/Pill";
import { recentFans } from "@/lib/dashboard-data";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function RecentFans() {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
    >
      <div className="px-5 py-4 flex justify-between items-center border-b border-[var(--color-border)]">
        <div>
          <div className="text-[14px] font-bold">Fans verificados</div>
          <div className="text-[11px] text-[var(--color-txt3)] mt-0.5">
            34.2K total · top contribuyentes
          </div>
        </div>
        <button
          type="button"
          className="px-2.5 py-1 rounded text-[11px]"
          style={{
            background: "transparent",
            border: "1px solid var(--color-border2)",
            color: "var(--color-txt)",
            fontFamily: "var(--font-sans)",
          }}
        >
          Exportar
        </button>
      </div>
      <div>
        {recentFans.map((f, i) => (
          <div
            key={f.u}
            className="px-5 py-3 flex items-center gap-3"
            style={{
              borderBottom: i < recentFans.length - 1 ? "1px solid var(--color-border)" : "none",
            }}
          >
            <div
              className="w-8 h-8 rounded flex items-center justify-center text-[11px] font-bold shrink-0"
              style={{
                background: "var(--color-surface3)",
                border: "1px solid var(--color-border2)",
                color: "var(--color-txt2)",
                fontFamily: "var(--font-display)",
              }}
              aria-hidden
            >
              {initials(f.n)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-semibold">{f.n}</div>
              <div className="text-[10px] text-[var(--color-txt3)]" style={{ fontFamily: "var(--font-mono)" }}>
                @{f.u} · {f.c} · {f.age}a
              </div>
            </div>
            <div className="text-right">
              <div
                className="text-[12px] font-bold tabular-nums"
                style={{ color: "var(--color-burg3)", fontFamily: "var(--font-mono)" }}
              >
                ${f.p}
              </div>
              <Pill variant={f.tier === "gold" ? "hot" : "mute"}>
                {f.tier === "gold" ? "Gold" : "Silver"}
              </Pill>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
