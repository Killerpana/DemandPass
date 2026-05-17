// src/components/marketing/ArtistMomentumChart.tsx — server SVG chart
// 90-day cumulative supports with event annotations.

export function ArtistMomentumChart({ target = 5420 }: { target?: number }) {
  // Generate 90 days of plausible cumulative data ending at `target`.
  const data = Array.from({ length: 90 }, (_, i) => {
    const base = Math.pow(i / 89, 1.5) * target;
    return Math.round(base + Math.sin(i * 0.3) * (target * 0.012));
  });

  const events = [
    { x: 12, l: "Anuncio campaña",    col: "#38bdf8" },
    { x: 38, l: "+ Spotify featured", col: "var(--color-amber2)" },
    { x: 64, l: "+ Press release",    col: "var(--color-burg3)" },
  ];

  const W = 760;
  const H = 220;
  const pad = 24;
  const max = Math.max(...data);

  const pt = (i: number, v: number): [number, number] => [
    pad + (i / (data.length - 1)) * (W - pad * 2),
    H - pad - (v / max) * (H - pad * 2),
  ];

  const path = data
    .map((v, i) => {
      const [x, y] = pt(i, v);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  const area = `${path} L ${W - pad} ${H - pad} L ${pad} ${H - pad} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{ display: "block" }} aria-hidden>
      <defs>
        <linearGradient id="mom-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--color-burg3)" stopOpacity="0.34" />
          <stop offset="100%" stopColor="var(--color-burg3)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[0.25, 0.5, 0.75, 1].map((p) => {
        const y = H - pad - p * (H - pad * 2);
        return (
          <g key={p}>
            <line x1={pad} x2={W - pad} y1={y} y2={y} stroke="var(--color-border2)" strokeWidth="0.5" strokeDasharray="2,3" />
            <text x={pad - 6} y={y + 3} fontSize="10" fill="var(--color-txt3)" fontFamily="JetBrains Mono" textAnchor="end">
              {Math.round(max * p).toLocaleString("es-AR")}
            </text>
          </g>
        );
      })}

      {events.map((e) => {
        const [x, y] = pt(e.x, data[e.x]);
        return (
          <g key={e.x}>
            <line x1={x} x2={x} y1={pad} y2={H - pad} stroke={e.col} strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
            <circle cx={x} cy={y} r="4" fill={e.col} stroke="var(--color-bg)" strokeWidth="2" />
            <text x={x} y={pad - 6} fontSize="9" fill={e.col} fontFamily="Barlow" fontWeight="700" textAnchor="middle">
              {e.l}
            </text>
          </g>
        );
      })}

      <path d={area} fill="url(#mom-fill)" />
      <path d={path} fill="none" stroke="var(--color-burg3)" strokeWidth="2" />

      {/* end marker */}
      {(() => {
        const lastIdx = data.length - 1;
        const [x, y] = pt(lastIdx, data[lastIdx]);
        return <circle cx={x} cy={y} r="5" fill="#E43A66" stroke="var(--color-surface)" strokeWidth="2" />;
      })()}

      <text x={pad} y={H - 4} fontSize="9" fill="var(--color-txt3)" fontFamily="JetBrains Mono">
        — 90 días
      </text>
      <text x={W - pad} y={H - 4} fontSize="9" fill="var(--color-txt3)" fontFamily="JetBrains Mono" textAnchor="end">
        hoy
      </text>
    </svg>
  );
}
