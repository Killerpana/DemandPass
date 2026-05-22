// src/components/dashboard/CampaignsTable.tsx — rediseñada con covers y más visual
import { dashboardCampaigns } from "@/lib/dashboard-data";
import { Sparkline } from "@/components/ui/Sparkline";

const ARTIST_COLORS: Record<string, string> = {
  LK: "#7c3aed", BL: "#f97316", SZ: "#ec4899",
  TI: "#e879a8", TY: "#84cc16", BD: "#eab308", JB: "#3b82f6",
};

export function CampaignsTable() {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
    >
      {/* Header */}
      <div className="px-5 py-4 flex justify-between items-center border-b border-[var(--color-border)]">
        <div>
          <div className="text-[15px] font-bold flex items-center gap-2">
            🎤 Campañas activas
          </div>
          <div className="text-[11px] mt-0.5" style={{ color: "var(--color-txt3)" }}>
            {dashboardCampaigns.length} campañas · ordenadas por progreso
          </div>
        </div>
        <span
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.08em]"
          style={{ background: "rgba(16,185,129,0.12)", color: "var(--color-emerald2)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
          Live
        </span>
      </div>

      {/* Filas */}
      <div>
        {dashboardCampaigns.map((r, i) => {
          const color = ARTIST_COLORS[r.c] ?? "var(--color-burg3)";
          const isLast = i === dashboardCampaigns.length - 1;
          return (
            <div
              key={r.c + i}
              className="flex items-center gap-4 px-5 py-3.5 cursor-pointer transition-colors hover:bg-[var(--color-surface2)]"
              style={{ borderBottom: isLast ? "none" : "1px solid var(--color-border)" }}
            >
              {/* Mini cover */}
              <div
                className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center text-[13px] font-extrabold"
                style={{
                  background: `linear-gradient(135deg, ${color}40, ${color}90)`,
                  border: `1px solid ${color}60`,
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.005em",
                }}
              >
                {r.c}
              </div>

              {/* Artista */}
              <div className="w-[130px] shrink-0">
                <div className="text-[13px] font-semibold truncate">{r.a}</div>
                <div className="text-[10px] mt-0.5" style={{ color: "var(--color-txt3)" }}>
                  {r.city} · {r.days}d restantes
                </div>
              </div>

              {/* Tipo */}
              <span
                className="text-[9px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full shrink-0"
                style={{
                  background: r.s === "oficial" ? "rgba(196,38,78,0.12)" : "rgba(37,99,235,0.12)",
                  color: r.s === "oficial" ? "var(--color-burg3)" : "#60a5fa",
                }}
              >
                {r.s === "oficial" ? "● Oficial" : "◈ Fan"}
              </span>

              {/* Progress bar */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between text-[10px] mb-1" style={{ color: "var(--color-txt3)" }}>
                  <span>{r.sup.toLocaleString("es-AR")}</span>
                  <span className="font-bold" style={{ color: r.pct >= 80 ? "var(--color-emerald2)" : "var(--color-txt2)" }}>
                    {r.pct}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-border)" }}>
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${r.pct}%`, background: r.pct >= 80 ? "var(--color-emerald2)" : "var(--color-burg3)" }}
                  />
                </div>
              </div>

              {/* Precio */}
              <div className="text-[13px] font-bold tabular-nums shrink-0 w-16 text-right" style={{ fontFamily: "var(--font-mono)" }}>
                ${r.price}
              </div>

              {/* Trend sparkline */}
              <div className="shrink-0">
                <Sparkline data={r.trend} width={64} height={24} color="var(--color-burg3)" filled={false} />
              </div>

              {/* Prob */}
              <div
                className="text-[13px] font-bold tabular-nums w-10 text-right shrink-0"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: r.prob >= 80 ? "var(--color-emerald2)" : r.prob >= 60 ? "var(--color-amber2)" : "var(--color-txt3)",
                }}
              >
                {r.prob}%
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
