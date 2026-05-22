"use client";
// src/components/dashboard/PriceCurvePanel.tsx — curva de precio con SVG animado
import { priceCurveData } from "@/lib/dashboard-data";

export function PriceCurvePanel() {
  const bars = priceCurveData.bars;
  const maxD = Math.max(...bars.map((b) => b.d));
  const W = 280, H = 120, PAD = 8;
  const step = (W - PAD * 2) / (bars.length - 1);

  // Puntos de la curva
  const points = bars.map((b, i) => ({
    x: PAD + i * step,
    y: PAD + H - (b.d / maxD) * (H - PAD * 2),
    isSweet: b.p === priceCurveData.sweetSpot,
    price: b.p,
    demand: b.d,
  }));

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
  const fillD = `${pathD} L ${points[points.length - 1].x} ${H + PAD} L ${points[0].x} ${H + PAD} Z`;
  const sweetPoint = points.find((p) => p.isSweet);

  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col"
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
    >
      <div className="px-5 py-4 border-b border-[var(--color-border)]">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[15px] font-bold flex items-center gap-2">
              📊 Curva de precio
            </div>
            <div className="text-[11px] mt-0.5" style={{ color: "var(--color-txt3)" }}>
              Sweet spot:{" "}
              <span style={{ color: "var(--color-burg3)", fontWeight: 700 }}>
                USD {priceCurveData.sweetSpot}
              </span>
            </div>
          </div>
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-bold"
            style={{ background: "rgba(16,185,129,0.12)", color: "var(--color-emerald2)" }}
          >
            +12% revenue
          </span>
        </div>
      </div>

      <div className="p-4 flex justify-center">
        <svg width={W} height={H + PAD * 2} viewBox={`0 0 ${W} ${H + PAD * 2}`} aria-label="Curva de demanda vs precio">
          <defs>
            <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C4264E" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C4264E" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[25, 50, 75, 100].map((v) => {
            const y = PAD + H - (v / maxD) * (H - PAD * 2);
            return (
              <line key={v} x1={PAD} y1={y} x2={W - PAD} y2={y}
                stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            );
          })}

          {/* Fill area */}
          <path d={fillD} fill="url(#curveGrad)" />

          {/* Curva */}
          <path
            d={pathD}
            fill="none"
            stroke="#C4264E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Sweet spot marker */}
          {sweetPoint && (
            <>
              <line
                x1={sweetPoint.x} y1={sweetPoint.y}
                x2={sweetPoint.x} y2={H + PAD}
                stroke="#C4264E" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"
              />
              <circle cx={sweetPoint.x} cy={sweetPoint.y} r={6} fill="#C4264E" stroke="#fff" strokeWidth="2" />
              <rect x={sweetPoint.x - 22} y={sweetPoint.y - 22} width={44} height={16} rx={4} fill="#C4264E" />
              <text x={sweetPoint.x} y={sweetPoint.y - 10} textAnchor="middle" fontSize={9} fill="#fff" fontWeight="700">
                ${sweetPoint.price}
              </text>
            </>
          )}

          {/* Eje X — precios */}
          {points.filter((_, i) => i % 2 === 0).map((p) => (
            <text key={p.price} x={p.x} y={H + PAD * 2 - 2} textAnchor="middle"
              fontSize={8} fill="rgba(255,255,255,0.3)">
              ${p.price}
            </text>
          ))}
        </svg>
      </div>

      <div className="px-5 py-3 border-t" style={{ borderColor: "var(--color-border)" }}>
        <p className="text-[11px]" style={{ color: "var(--color-txt3)" }}>
          Precio óptimo para maximizar revenue sin caída de demanda
        </p>
      </div>
    </div>
  );
}
