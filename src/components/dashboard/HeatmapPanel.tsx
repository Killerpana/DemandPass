"use client";
// src/components/dashboard/HeatmapPanel.tsx — mapa real de LATAM con burbujas
import { Progress } from "@/components/ui/Progress";
import { heatmapCities } from "@/lib/dashboard-data";
import { MapPin } from "lucide-react";

// Ciudades con coordenadas reales en el viewBox 0 0 400 500
const MAP_CITIES = [
  { x: 185, y: 360, r: 22, l: "BUE", name: "Buenos Aires",      col: "#C4264E" },
  { x: 108, y: 118, r: 16, l: "MEX", name: "Ciudad de México",  col: "#C4264E" },
  { x: 172, y: 320, r: 11, l: "SCL", name: "Santiago",          col: "#e06090" },
  { x: 148, y: 185, r: 10, l: "BOG", name: "Bogotá",            col: "#f59e0b" },
  { x: 148, y: 250, r: 10, l: "LIM", name: "Lima",              col: "#f59e0b" },
  { x: 176, y: 345, r:  8, l: "ROS", name: "Rosario",           col: "#f59e0b" },
];

// Path simplificado pero reconocible de América del Sur + México/Centroamérica
const SOUTH_AMERICA = `
  M 148 180 L 160 170 L 175 165 L 195 168 L 210 175 L 225 185
  L 235 200 L 240 220 L 238 245 L 230 265 L 220 285 L 215 305
  L 205 325 L 198 345 L 195 365 L 190 385 L 185 400 L 178 415
  L 170 425 L 162 420 L 158 405 L 160 390 L 165 375 L 162 360
  L 155 345 L 150 325 L 145 305 L 140 280 L 135 260 L 132 240
  L 128 220 L 125 200 L 128 185 L 135 178 L 148 180 Z
`;

const MEXICO = `
  M 80 95 L 95 88 L 115 85 L 130 90 L 140 98 L 138 108
  L 128 115 L 115 118 L 100 120 L 88 115 L 80 107 L 80 95 Z
`;

const CENTRAL_AM = `
  M 128 115 L 138 108 L 145 112 L 148 120 L 145 128
  L 140 132 L 132 130 L 128 122 L 128 115 Z
`;

export function HeatmapPanel() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
      <div className="px-5 py-4 border-b border-[var(--color-border)]">
        <div className="flex justify-between items-center mb-1">
          <div className="text-[14px] font-bold flex items-center gap-2">
            <MapPin size={14} style={{ color: "var(--color-burg3)" }} />
            Heatmap · LATAM
          </div>
          <select
            className="text-[11px] px-2.5 py-1 rounded-lg"
            style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)", color: "var(--color-txt)" }}
          >
            <option>Todas las campañas</option>
          </select>
        </div>
        <div className="text-[11px]" style={{ color: "var(--color-txt3)" }}>34.2K apoyos · 5 países</div>
      </div>

      <div className="p-4 flex gap-4">
        {/* Mapa */}
        <svg viewBox="80 80 175 360" width="140" height="280" className="shrink-0" aria-label="Mapa de demanda LATAM">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* México */}
          <path d={MEXICO} fill="rgba(196,38,78,0.06)" stroke="rgba(196,38,78,0.2)" strokeWidth="0.5" />

          {/* Centroamérica */}
          <path d={CENTRAL_AM} fill="rgba(196,38,78,0.04)" stroke="rgba(196,38,78,0.15)" strokeWidth="0.5" />

          {/* Sudamérica */}
          <path d={SOUTH_AMERICA} fill="rgba(196,38,78,0.06)" stroke="rgba(196,38,78,0.2)" strokeWidth="0.5" />

          {/* Burbujas de ciudades */}
          {MAP_CITIES.map((c) => (
            <g key={c.l}>
              {/* Halo exterior pulsante */}
              <circle cx={c.x} cy={c.y} r={c.r * 1.6} fill={c.col} opacity="0.06">
                <animate attributeName="r" values={`${c.r * 1.4};${c.r * 1.9};${c.r * 1.4}`} dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.06;0.02;0.06" dur="2.5s" repeatCount="indefinite" />
              </circle>
              {/* Burbuja principal */}
              <circle cx={c.x} cy={c.y} r={c.r} fill={c.col} opacity="0.25" />
              {/* Punto central */}
              <circle cx={c.x} cy={c.y} r={c.r * 0.35} fill={c.col} opacity="0.9" />
              {/* Label */}
              <text x={c.x + c.r + 2} y={c.y + 3} fontSize="5.5" fill="var(--color-txt2)" fontFamily="JetBrains Mono, monospace" fontWeight="600">
                {c.l}
              </text>
            </g>
          ))}
        </svg>

        {/* Rankings */}
        <div className="flex-1 flex flex-col gap-2.5 justify-center">
          {heatmapCities.map((r, i) => (
            <div key={r.c} className="grid items-center gap-2 text-[11px]" style={{ gridTemplateColumns: "16px 85px 1fr 46px" }}>
              <span className="text-[10px] font-bold tabular-nums" style={{ color: "var(--color-txt3)" }}>{i + 1}</span>
              <span className="truncate font-medium" style={{ color: "var(--color-txt)" }}>{r.c}</span>
              <Progress value={r.p} max={50} height={4} />
              <span className="text-right tabular-nums" style={{ fontFamily: "var(--font-mono)", color: "var(--color-txt2)" }}>
                {r.n >= 1000 ? `${(r.n / 1000).toFixed(1)}K` : r.n}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
