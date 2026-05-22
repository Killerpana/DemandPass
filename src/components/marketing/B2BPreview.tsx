// src/components/marketing/B2BPreview.tsx
// Server component composing the marketing pitch + B2BDashPreview (also server safe).
import Link from "next/link";
import { Pill } from "@/components/ui/Pill";
import { Sparkline } from "@/components/ui/Sparkline";
import { Progress } from "@/components/ui/Progress";
import { b2bFeatures } from "@/lib/marketing-data";

export function B2BPreview() {
  return (
    <section className="relative overflow-hidden py-[120px] px-12 border-b border-[var(--color-border)]">
      <div
        className="absolute top-1/2 -left-52 w-[500px] h-[500px] -translate-y-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,38,78,0.12), transparent 65%)" }}
      />
      <div className="max-w-[1344px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-3.5"
              style={{ color: "var(--color-burg3)" }}
            >
              Para productoras y promotores
            </div>
            <h2
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4.5vw, 64px)",
                lineHeight: 0.95,
                letterSpacing: "0.005em",
              }}
            >
              Decidí con
              <br />
              datos, no con
              <br />
              <span style={{ color: "var(--color-burg3)" }}>intuición.</span>
            </h2>
            <p className="text-base leading-[1.55] mb-8 text-[var(--color-txt2)]">
              Demanda verificada por ciudad, rango de precio aceptado, forecast de venta a 48 hs y recomendación automática de venue. Todo antes de firmar contrato con el artista.
            </p>

            <ul className="flex flex-col gap-3.5 mb-9 list-none">
              {b2bFeatures.map((f) => (
                <li key={f.t} className="flex items-start gap-3.5">
                  <div
                    className="w-8 h-8 shrink-0 flex items-center justify-center rounded-md font-bold"
                    style={{
                      background: "rgba(196,38,78,0.12)",
                      border: "1px solid rgba(196,38,78,0.3)",
                      color: "#E43A66",
                    }}
                    aria-hidden
                  >
                    ◆
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-[var(--color-txt)]">{f.t}</div>
                    <div className="text-[13px] mt-0.5 text-[var(--color-txt2)]">{f.d}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex gap-3 flex-wrap">
              <Link
                href="mailto:partners@demandpass.app"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-md text-[14px] font-bold uppercase tracking-[0.06em] text-white"
                style={{
                  background: "var(--color-burg3)",
                  boxShadow: "0 6px 18px rgba(196,38,78,0.32), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              >
                Hablar con ventas <span aria-hidden>→</span>
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center px-6 py-4 rounded-md text-[14px] font-bold uppercase tracking-[0.06em]"
                style={{ border: "1px solid var(--color-border2)", color: "var(--color-txt)" }}
              >
                Demo dashboard
              </Link>
            </div>
          </div>

          {/* Right — dashboard mock */}
          <B2BDashPreview />
        </div>
      </div>
    </section>
  );
}

function B2BDashPreview() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border2)",
        boxShadow: "0 16px 48px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <div
        className="h-11 flex items-center px-4 gap-3 border-b border-[var(--color-border)]"
        style={{ background: "var(--color-surface2)" }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-surface3)" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-surface3)" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-surface3)" }} />
        </div>
        <div className="text-[10px] text-[var(--color-txt3)]" style={{ fontFamily: "var(--font-mono)" }}>
          demandpass.app/dashboard/df-entertainment
        </div>
        <Pill variant="live" pulse>Live</Pill>
      </div>

      <div className="p-5">
        {/* KPI strip */}
        <div
          className="grid grid-cols-4 mb-5 rounded-md"
          style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}
        >
          {([
            { l: "Fans verificados", v: "82%",     d: "+4.2 pp", sd: [12, 14, 16, 19, 22, 24, 26, 28] },
            { l: "Precio aceptado",  v: "USD 74",  d: "+2.1",    sd: [60, 62, 64, 68, 70, 72, 73, 74] },
            { l: "Forecast 48hs",    v: "7.8K",    d: "+18%",    sd: [4, 5, 5, 6, 6, 7, 7, 8] },
            { l: "Show probability", v: "91%",     d: "+6 pp",   color: "var(--color-emerald2)", sd: [70, 74, 80, 84, 86, 88, 90, 91] },
          ] as const).map((k, i) => (
            <div
              key={k.l}
              className={`p-3.5 ${i > 0 ? "border-l border-[var(--color-border)]" : ""}`}
            >
              <div className="text-[10px] uppercase tracking-[0.08em] text-[var(--color-txt3)] mb-1.5">{k.l}</div>
              <div
                className="text-[22px] font-bold leading-none tabular-nums"
                style={{ fontFamily: "var(--font-mono)", color: ("color" in k ? k.color : "var(--color-txt)") }}
              >
                {k.v}
              </div>
              <div className="flex items-center gap-1.5 mt-1.5">
                <span
                  className="text-[10px] font-semibold tabular-nums"
                  style={{ color: "var(--color-emerald2)", fontFamily: "var(--font-mono)" }}
                >
                  ↑ {k.d}
                </span>
                <Sparkline data={[...k.sd]} width={36} height={14} color="var(--color-burg3)" />
              </div>
            </div>
          ))}
        </div>

        {/* Heatmap + price */}
        <div className="grid grid-cols-[1.4fr_1fr] gap-4">
          <div
            className="p-3.5 rounded-md"
            style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)]">
                Heatmap · Argentina
              </span>
              <span className="text-[10px] text-[var(--color-txt3)]">5.4K apoyos</span>
            </div>
            <ARMap />
          </div>
          <div
            className="p-3.5 rounded-md"
            style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}
          >
            <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)] mb-3">
              Disposición a pagar (USD)
            </div>
            <PriceBars />
          </div>
        </div>
      </div>
    </div>
  );
}

import { AR_SVG_PATH } from "@/lib/ar-path";

function ARMap() {
  // Ciudades proyectadas sobre el mismo viewBox del path (lng -73..-53, lat -22..-55 → 0..100 x 0..140)
  const cities = [
    { x: 73,   y: 53.5, r: 10, l: "BA" },   // Buenos Aires
    { x: 44,   y: 39.9, r:  7, l: "CB" },   // Córdoba
    { x: 61.5, y: 46.2, r:  5, l: "RO" },   // Rosario
    { x: 21,   y: 46.2, r:  4, l: "MZ" },   // Mendoza
    { x: 38,   y: 11.9, r:  3, l: "SA" },   // Salta
    { x: 53.5, y: 70.8, r:  3, l: "BB" },   // Bahía Blanca
  ];
  return (
    <svg viewBox="0 0 100 140" width="100%" height="180" style={{ display: "block" }} aria-hidden>
      {/* Mapa real de Argentina */}
      <path
        d={AR_SVG_PATH}
        fill="rgba(196,38,78,0.08)"
        stroke="rgba(196,38,78,0.3)"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      {cities.map((c) => (
        <g key={c.l}>
          <circle cx={c.x} cy={c.y} r={c.r * 1.6} fill="var(--color-burg3)" opacity="0.08">
            <animate attributeName="r" values={`${c.r * 1.4};${c.r * 2};${c.r * 1.4}`} dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx={c.x} cy={c.y} r={c.r} fill="var(--color-burg3)" opacity="0.22" />
          <circle cx={c.x} cy={c.y} r={c.r * 0.4} fill="#E43A66" opacity="0.95" />
          <text x={c.x + c.r + 1.5} y={c.y + 1.8} fontSize="4" fill="rgba(255,255,255,0.65)" fontFamily="JetBrains Mono">
            {c.l}
          </text>
        </g>
      ))}
    </svg>
  );
}

function PriceBars() {
  const bars = [8, 18, 32, 58, 88, 72, 48, 26, 14, 6];
  const labels = ["40", "50", "60", "70", "80", "90", "100", "110", "120", "130"];
  const max = 100;
  const sweetIdx = 4;
  return (
    <div>
      <div className="flex items-end gap-1 h-32 mb-2">
        {bars.map((v, i) => (
          <div key={i} className="flex-1 relative rounded-t-sm"
            style={{
              height: `${(v / max) * 100}%`,
              background: i === sweetIdx
                ? "linear-gradient(180deg, #E43A66, var(--color-burg3))"
                : "var(--color-surface3)",
            }}
          >
            {i === sweetIdx && (
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-5 px-1.5 py-0.5 rounded text-[9px] font-bold whitespace-nowrap tabular-nums"
                style={{ background: "var(--color-burg3)", color: "#fff", fontFamily: "var(--font-mono)" }}
              >
                Sweet $80
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-1 text-[9px] text-[var(--color-txt3)]" style={{ fontFamily: "var(--font-mono)" }}>
        {labels.map((l, i) => (
          <div key={i} className="flex-1 text-center">{l}</div>
        ))}
      </div>
    </div>
  );
}
