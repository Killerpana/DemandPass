"use client";
// src/components/dashboard/HeatmapPanel.tsx
// Mapa de LATAM con dotted-map (inspirado en 21st.dev/shailendrakumar19999/map)
import { useMemo } from "react";
import { Progress } from "@/components/ui/Progress";
import { heatmapCities } from "@/lib/dashboard-data";
import { MapPin } from "lucide-react";

// Ciudades con coordenadas lat/lng reales
const CITIES = [
  { lat: -34.6, lng: -58.4, r: 6,  label: "BUE", color: "#C4264E" },  // Buenos Aires
  { lat: 19.4,  lng: -99.1, r: 5,  label: "MEX", color: "#C4264E" },  // Ciudad de México
  { lat: -31.4, lng: -64.2, r: 3.5,label: "CBA", color: "#e06090" },  // Córdoba
  { lat: -33.4, lng: -70.7, r: 3,  label: "SCL", color: "#f59e0b" },  // Santiago
  { lat:  4.7,  lng: -74.1, r: 3,  label: "BOG", color: "#f59e0b" },  // Bogotá
  { lat: -12.0, lng: -77.0, r: 2.8,label: "LIM", color: "#f59e0b" },  // Lima
  { lat: -32.9, lng: -60.7, r: 2.5,label: "ROS", color: "#f59e0b" },  // Rosario
];

// Convierte lat/lng a coordenadas SVG para un recorte de LATAM
// viewBox: lng -120...-30, lat 35...-60 → x: 0..300, y: 0..285
function project(lat: number, lng: number) {
  const x = ((lng - (-120)) / ((-30) - (-120))) * 300;
  const y = ((35 - lat) / (35 - (-60))) * 285;
  return { x, y };
}

// Path real de Sudamérica (simplificado pero reconocible)
const SA_PATH = `
M 185 48 L 200 44 L 218 46 L 232 52 L 244 62 L 252 76 L 258 94
L 262 114 L 260 134 L 254 152 L 244 168 L 236 182 L 228 196
L 222 212 L 218 228 L 216 244 L 210 258 L 200 270 L 188 278
L 176 280 L 164 276 L 156 266 L 152 252 L 154 238 L 158 224
L 156 210 L 150 196 L 144 180 L 140 164 L 138 148 L 136 132
L 134 116 L 132 100 L 136 84 L 144 70 L 156 58 L 172 50 Z
`;

// México
const MX_PATH = `
M 46 16 L 62 10 L 80 8 L 96 12 L 108 18 L 112 28 L 106 36
L 92 42 L 76 46 L 60 44 L 48 38 L 42 28 Z
`;

// Centroamérica + Colombia
const CA_PATH = `
M 106 36 L 116 42 L 122 52 L 124 64 L 118 72
L 110 70 L 104 60 L 100 50 Z
`;

export function HeatmapPanel() {
  const svgContent = useMemo(() => {
    // Genera puntos de dotted-map manualmente como SVG
    const dots: { x: number; y: number }[] = [];
    for (let lat = 35; lat > -60; lat -= 2.8) {
      for (let lng = -120; lng < -30; lng += 2.8) {
        dots.push(project(lat, lng));
      }
    }
    return dots;
  }, []);

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
    >
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
        {/* Mapa SVG tipo dotted-map */}
        <div className="shrink-0">
          <svg
            viewBox="30 0 280 290"
            width="150"
            height="155"
            aria-label="Mapa de demanda LATAM"
          >
            {/* Puntos del mapa */}
            {svgContent.map((d, i) => (
              <circle
                key={i}
                cx={d.x}
                cy={d.y}
                r="1"
                fill="rgba(255,255,255,0.08)"
              />
            ))}

            {/* Contornos */}
            <path d={SA_PATH} fill="rgba(196,38,78,0.05)" stroke="rgba(196,38,78,0.18)" strokeWidth="0.6" />
            <path d={MX_PATH} fill="rgba(196,38,78,0.05)" stroke="rgba(196,38,78,0.15)" strokeWidth="0.6" />
            <path d={CA_PATH} fill="rgba(196,38,78,0.04)" stroke="rgba(196,38,78,0.12)" strokeWidth="0.6" />

            {/* Ciudades */}
            {CITIES.map((c) => {
              const { x, y } = project(c.lat, c.lng);
              return (
                <g key={c.label}>
                  {/* Halo pulsante */}
                  <circle cx={x} cy={y} r={c.r * 2.2} fill={c.color} opacity="0.07">
                    <animate
                      attributeName="r"
                      values={`${c.r * 2};${c.r * 2.8};${c.r * 2}`}
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Burbuja media */}
                  <circle cx={x} cy={y} r={c.r * 1.2} fill={c.color} opacity="0.2" />
                  {/* Punto central */}
                  <circle cx={x} cy={y} r={c.r * 0.5} fill={c.color} opacity="0.95" />
                  {/* Label */}
                  <text
                    x={x + c.r + 2}
                    y={y + 2}
                    fontSize="5"
                    fill="rgba(255,255,255,0.6)"
                    fontFamily="JetBrains Mono, monospace"
                    fontWeight="600"
                  >
                    {c.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Rankings */}
        <div className="flex-1 flex flex-col gap-2.5 justify-center">
          {heatmapCities.map((r, i) => (
            <div
              key={r.c}
              className="grid items-center gap-2 text-[11px]"
              style={{ gridTemplateColumns: "14px 85px 1fr 46px" }}
            >
              <span
                className="text-[10px] font-bold tabular-nums"
                style={{ color: "var(--color-txt3)" }}
              >
                {i + 1}
              </span>
              <span className="truncate font-medium" style={{ color: "var(--color-txt)" }}>
                {r.c}
              </span>
              <Progress value={r.p} max={50} height={4} />
              <span
                className="text-right tabular-nums"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-txt2)" }}
              >
                {r.n >= 1000 ? `${(r.n / 1000).toFixed(1)}K` : r.n}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
