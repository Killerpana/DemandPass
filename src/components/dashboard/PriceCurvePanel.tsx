// src/components/dashboard/PriceCurvePanel.tsx — demand vs price + revenue curve
import { Pill } from "@/components/ui/Pill";

export function PriceCurvePanel() {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
    >
      <div className="px-5 py-4 border-b border-[var(--color-border)]">
        <div className="flex justify-between items-baseline">
          <div>
            <div className="text-[14px] font-bold">Curva de precio · LK</div>
            <div className="text-[11px] text-[var(--color-txt3)] mt-0.5">
              Sweet spot:{" "}
              <span
                className="font-bold"
                style={{ color: "var(--color-burg3)", fontFamily: "var(--font-mono)" }}
              >
                USD 84
              </span>
            </div>
          </div>
          <Pill variant="ok" glyph="◆">+12% revenue</Pill>
        </div>
      </div>
      <div className="p-5">
        <PriceCurveChart />
        <div
          className="mt-4 pt-4 grid grid-cols-3 gap-3 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          {([
            { l: "Tickets prev.",   v: "6.840",     sub: "USD 84" },
            { l: "Revenue est.",    v: "USD 574K",  sub: "óptimo", brand: true },
            { l: "Sell-through",    v: "85%",       sub: "a 30 días" },
          ] as const).map((m) => (
            <div key={m.l}>
              <div className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)]">
                {m.l}
              </div>
              <div
                className="mt-0.5 text-[14px] font-bold tabular-nums"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: ("brand" in m ? "var(--color-burg3)" : "var(--color-txt)"),
                }}
              >
                {m.v}
              </div>
              <div className="text-[10px] text-[var(--color-txt3)]">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PriceCurveChart() {
  const W = 280;
  const H = 130;
  const xs = Array.from({ length: 30 }, (_, i) => i);
  const demand = xs.map((x) => 100 * Math.exp(-Math.pow((x - 14) / 7, 2)));
  const revenue = xs.map((x, i) => (demand[i] / 100) * (30 + x * 5) * 1.4);
  const max = Math.max(...demand, ...revenue);

  const pt = (arr: number[]) =>
    arr.map((v, i) => `${(i / (xs.length - 1)) * W},${H - (v / max) * (H - 8) - 4}`).join(" ");

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} className="block" aria-hidden>
      <defs>
        <linearGradient id="dem-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--color-burg3)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--color-burg3)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((p, i) => (
        <line key={i} x1="0" x2={W} y1={H * p} y2={H * p} stroke="var(--color-border)" strokeWidth="0.5" />
      ))}
      <polygon points={`0,${H} ${pt(demand)} ${W},${H}`} fill="url(#dem-fill)" />
      <polyline points={pt(demand)} fill="none" stroke="var(--color-burg3)" strokeWidth="1.5" />
      <polyline points={pt(revenue)} fill="none" stroke="var(--color-amber2)" strokeWidth="1.5" strokeDasharray="3,3" />
      <line
        x1={(15 / 29) * W}
        x2={(15 / 29) * W}
        y1="0"
        y2={H}
        stroke="#E43A66"
        strokeWidth="1"
        strokeDasharray="2,2"
      />
      <circle cx={(15 / 29) * W} cy={H - (revenue[15] / max) * (H - 8) - 4} r="4" fill="#E43A66" stroke="var(--color-surface)" strokeWidth="2" />
      <text x={(15 / 29) * W + 6} y="14" fontSize="10" fill="#E43A66" fontFamily="JetBrains Mono" fontWeight="700">
        $84
      </text>
      <text x="0" y={H - 2} fontSize="8" fill="var(--color-txt3)" fontFamily="JetBrains Mono">$30</text>
      <text x={W - 22} y={H - 2} fontSize="8" fill="var(--color-txt3)" fontFamily="JetBrains Mono">$180</text>

      <g transform={`translate(${W - 78}, 6)`}>
        <rect width="76" height="22" fill="var(--color-surface2)" stroke="var(--color-border)" strokeWidth="0.5" rx="3" />
        <line x1="6" x2="14" y1="8" y2="8" stroke="var(--color-burg3)" strokeWidth="1.5" />
        <text x="18" y="10" fontSize="7" fill="var(--color-txt)" fontFamily="Barlow">Demanda</text>
        <line x1="6" x2="14" y1="16" y2="16" stroke="var(--color-amber2)" strokeWidth="1.5" strokeDasharray="2,2" />
        <text x="18" y="18" fontSize="7" fill="var(--color-txt)" fontFamily="Barlow">Revenue</text>
      </g>
    </svg>
  );
}
