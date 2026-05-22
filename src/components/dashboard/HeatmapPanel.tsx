"use client";
// src/components/dashboard/HeatmapPanel.tsx — mapa real de LATAM con paths de world-atlas
import { Progress } from "@/components/ui/Progress";
import { heatmapCities } from "@/lib/dashboard-data";
import { MapPin } from "lucide-react";
import { LATAM_PATHS } from "@/lib/latam-paths";

// Ciudades con coordenadas reales (misma proyección que gen_svg.js)
// lng -120..-30 → x 0..300, lat 35..-60 → y 0..380
const W = 300, H = 380;
function project(lng: number, lat: number) {
  return {
    x: ((lng - (-120)) / 90) * W,
    y: ((35 - lat) / 95) * H,
  };
}

const CITIES = [
  { lat: -34.6, lng: -58.4, r: 14, label: "BUE", col: "#C4264E" },
  { lat:  19.4, lng: -99.1, r: 10, label: "MEX", col: "#C4264E" },
  { lat: -31.4, lng: -64.2, r:  8, label: "CBA", col: "#e06090" },
  { lat: -33.4, lng: -70.7, r:  7, label: "SCL", col: "#f59e0b" },
  { lat:   4.7, lng: -74.1, r:  7, label: "BOG", col: "#f59e0b" },
  { lat: -12.0, lng: -77.0, r:  6, label: "LIM", col: "#f59e0b" },
  { lat: -32.9, lng: -60.7, r:  5, label: "ROS", col: "#f59e0b" },
];

export function HeatmapPanel() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
      <div className="px-5 py-4 border-b border-[var(--color-border)]">
        <div className="flex justify-between items-center mb-1">
          <div className="text-[14px] font-bold flex items-center gap-2">
            <MapPin size={14} style={{ color: "var(--color-burg3)" }} />
            Heatmap · LATAM
          </div>
          <select className="text-[11px] px-2.5 py-1 rounded-lg" style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)", color: "var(--color-txt)" }}>
            <option>Todas las campañas</option>
          </select>
        </div>
        <div className="text-[11px]" style={{ color: "var(--color-txt3)" }}>34.2K apoyos · 5 países</div>
      </div>

      <div className="p-4 flex gap-4">
        <svg viewBox="60 60 220 300" width="140" height="190" aria-label="Mapa LATAM" className="shrink-0">
          {/* Países */}
          {LATAM_PATHS.map((p, i) => (
            <path
              key={i}
              d={p.d}
              fill="rgba(196,38,78,0.07)"
              stroke="rgba(196,38,78,0.25)"
              strokeWidth="0.8"
            />
          ))}

          {/* Ciudades */}
          {CITIES.map((c) => {
            const { x, y } = project(c.lng, c.lat);
            return (
              <g key={c.label}>
                <circle cx={x} cy={y} r={c.r * 1.8} fill={c.col} opacity="0.08">
                  <animate attributeName="r" values={`${c.r * 1.6};${c.r * 2.2};${c.r * 1.6}`} dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx={x} cy={y} r={c.r} fill={c.col} opacity="0.22" />
                <circle cx={x} cy={y} r={c.r * 0.4} fill={c.col} opacity="0.95" />
                <text x={x + c.r + 2} y={y + 2.5} fontSize="6" fill="rgba(255,255,255,0.65)" fontFamily="JetBrains Mono,monospace" fontWeight="700">
                  {c.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Rankings */}
        <div className="flex-1 flex flex-col gap-2.5 justify-center">
          {heatmapCities.map((r, i) => (
            <div key={r.c} className="grid items-center gap-2 text-[11px]" style={{ gridTemplateColumns: "14px 85px 1fr 46px" }}>
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
