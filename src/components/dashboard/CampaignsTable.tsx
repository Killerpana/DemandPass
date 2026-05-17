// src/components/dashboard/CampaignsTable.tsx
import { Pill } from "@/components/ui/Pill";
import { Progress } from "@/components/ui/Progress";
import { Sparkline } from "@/components/ui/Sparkline";
import { dashboardCampaigns } from "@/lib/dashboard-data";

export function CampaignsTable() {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
    >
      <div className="px-5 py-4 flex justify-between items-center border-b border-[var(--color-border)]">
        <div>
          <div className="text-[14px] font-bold">Campañas activas</div>
          <div className="text-[11px] text-[var(--color-txt3)] mt-0.5">
            {dashboardCampaigns.length} de 8 mostradas · ordenado por progreso
          </div>
        </div>
        <Pill variant="live" pulse>Live</Pill>
      </div>

      {/* Header */}
      <div
        className="grid items-center gap-4 px-5 py-2.5 text-[10px] uppercase tracking-[0.08em] font-semibold text-[var(--color-txt3)] border-b border-[var(--color-border)]"
        style={{ gridTemplateColumns: "24px 1.4fr 0.5fr 0.6fr 1fr 0.7fr 0.8fr 0.7fr 0.5fr" }}
      >
        <span></span>
        <span>Artista</span>
        <span>Ciudad</span>
        <span>Tipo</span>
        <span>Progreso</span>
        <span>Precio</span>
        <span>Cierra</span>
        <span className="text-right">Trend</span>
        <span className="text-right">Prob.</span>
      </div>

      {dashboardCampaigns.map((r, i) => (
        <div
          key={r.c + i}
          className="grid items-center gap-4 px-5 py-3 text-[12px] cursor-pointer transition-colors hover:bg-[var(--color-surface2)]"
          style={{
            gridTemplateColumns: "24px 1.4fr 0.5fr 0.6fr 1fr 0.7fr 0.8fr 0.7fr 0.5fr",
            borderBottom: i < dashboardCampaigns.length - 1 ? "1px solid var(--color-border)" : "none",
          }}
        >
          <div
            className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-extrabold"
            style={{
              background: "linear-gradient(135deg, #2a1a1a, #6b1b30)",
              border: "1px solid var(--color-border2)",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.005em",
            }}
          >
            {r.c}
          </div>
          <div className="font-semibold text-[var(--color-txt)]">{r.a}</div>
          <span className="text-[11px] text-[var(--color-txt2)]" style={{ fontFamily: "var(--font-mono)" }}>
            {r.city}
          </span>
          <Pill variant={r.s === "oficial" ? "live" : "info"}>
            {r.s === "oficial" ? "Oficial" : "Fan"}
          </Pill>
          <div className="flex items-center gap-2">
            <div className="flex-1"><Progress value={r.pct} height={4} /></div>
            <span
              className="w-[30px] text-[11px] font-bold tabular-nums"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-burg3)" }}
            >
              {r.pct}%
            </span>
          </div>
          <span className="text-[12px] font-semibold tabular-nums" style={{ fontFamily: "var(--font-mono)" }}>
            ${r.price}
          </span>
          <span
            className="text-[11px] tabular-nums"
            style={{
              fontFamily: "var(--font-mono)",
              color: r.days < 14 ? "var(--color-amber2)" : "var(--color-txt)",
            }}
          >
            {r.days}d
          </span>
          <div className="flex justify-end">
            <Sparkline data={[...r.trend]} width={60} height={20} color="var(--color-burg3)" />
          </div>
          <span
            className="text-[12px] font-bold tabular-nums text-right"
            style={{
              fontFamily: "var(--font-mono)",
              color: r.prob >= 80 ? "var(--color-emerald2)" : r.prob >= 50 ? "var(--color-amber2)" : "var(--color-txt2)",
            }}
          >
            {r.prob}%
          </span>
        </div>
      ))}
    </div>
  );
}
