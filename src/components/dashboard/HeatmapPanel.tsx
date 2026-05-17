// src/components/dashboard/HeatmapPanel.tsx
// LATAM silhouette with pulsing bubbles + city ranking.
import { Progress } from "@/components/ui/Progress";
import { heatmapCities } from "@/lib/dashboard-data";

const MAP_CITIES = [
  { x: 58, y: 80, r: 24, l: "BA",  col: "#C4264E" },
  { x: 28, y: 26, r: 18, l: "MX",  col: "#C4264E" },
  { x: 54, y: 68, r: 12, l: "CB",  col: "#E43A66" },
  { x: 48, y: 78, r: 10, l: "SCL", col: "#f59e0b" },
  { x: 42, y: 40, r: 9,  l: "BOG", col: "#f59e0b" },
  { x: 38, y: 52, r: 9,  l: "LIM", col: "#f59e0b" },
];

export function HeatmapPanel() {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
    >
      <div className="px-5 py-4 border-b border-[var(--color-border)]">
        <div className="flex justify-between items-center mb-1">
          <div className="text-[14px] font-bold">Heatmap · LATAM</div>
          <select
            className="text-[11px] px-2.5 py-1 rounded"
            style={{
              background: "var(--color-surface2)",
              border: "1px solid var(--color-border)",
              color: "var(--color-txt)",
              fontFamily: "var(--font-sans)",
            }}
          >
            <option>Todas las campañas</option>
          </select>
        </div>
        <div className="text-[11px] text-[var(--color-txt3)]">34.2K apoyos · 5 países</div>
      </div>
      <div className="p-5 flex gap-4">
        <LATAMmap />
        <div className="flex-1 flex flex-col gap-2.5">
          {heatmapCities.map((r) => (
            <div
              key={r.c}
              className="grid items-center gap-2 text-[11px]"
              style={{ gridTemplateColumns: "90px 1fr 50px" }}
            >
              <span className="text-[var(--color-txt)] font-medium">{r.c}</span>
              <Progress value={r.p} max={50} height={4} />
              <span
                className="text-right text-[var(--color-txt2)] tabular-nums"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {r.n.toLocaleString("es-AR")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LATAMmap() {
  return (
    <svg viewBox="0 0 100 110" width="220" height="240" className="shrink-0" aria-hidden>
      <path
        d="M22 10 L40 6 L46 14 L42 22 L48 28 L40 32 L34 28 L36 38 L42 42 L40 50 L48 56 L54 64 L52 74 L60 82 L60 90 L56 100 L58 106 L50 102 L46 108 L42 100 L46 92 L50 84 L42 76 L40 66 L36 58 L34 48 L26 42 L22 32 L16 24 Z"
        fill="rgba(196,38,78,0.05)"
        stroke="var(--color-border2)"
        strokeWidth="0.6"
      />
      {MAP_CITIES.map((c) => (
        <g key={c.l}>
          <circle cx={c.x} cy={c.y} r={c.r} fill={c.col} opacity="0.18">
            <animate
              attributeName="r"
              values={`${c.r};${c.r * 1.15};${c.r}`}
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={c.x} cy={c.y} r={c.r * 0.55} fill={c.col} opacity="0.55" />
          <circle cx={c.x} cy={c.y} r="1.8" fill={c.col} />
          <text
            x={c.x + c.r * 0.6 + 2}
            y={c.y + 1.5}
            fontSize="3.5"
            fill="var(--color-txt)"
            fontFamily="JetBrains Mono"
          >
            {c.l}
          </text>
        </g>
      ))}
    </svg>
  );
}
