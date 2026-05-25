import { DashboardPageShell } from "@/components/dashboard/DashboardPageShell";

const FANS = [
  { id: "#4521", name: "Santiago R.", city: "Buenos Aires", plan: "Plata", campaigns: 3, since: "Ene 2024",  trustScore: 98 },
  { id: "#3812", name: "Valentina M.", city: "Córdoba",     plan: "Oro",   campaigns: 5, since: "Mar 2023",  trustScore: 100 },
  { id: "#2947", name: "Luciano P.",   city: "Rosario",     plan: "Bronce",campaigns: 2, since: "Jun 2024",  trustScore: 87 },
  { id: "#5103", name: "Camila G.",    city: "Buenos Aires",plan: "Plata", campaigns: 4, since: "Nov 2023",  trustScore: 95 },
  { id: "#1788", name: "Martín F.",    city: "Mendoza",     plan: "Free",  campaigns: 1, since: "Feb 2025",  trustScore: 72 },
];

const planColor: Record<string, string> = { Oro: "#f59e0b", Plata: "#C9CAD3", Bronce: "#cd7f32", Free: "#6b7280" };

export default function FansVerificadosPage() {
  return (
    <DashboardPageShell title="Fans verificados" breadcrumb="Fans verificados" active="fans">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[["33.886", "Total fans"], ["94%", "Verificados"], ["4.2", "Campañas prom."]].map(([v, l]) => (
          <div key={l} className="p-4 rounded-xl text-center" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <p className="font-[family-name:var(--font-display)] text-[26px] font-black" style={{ color: "var(--color-burg3)" }}>{v}</p>
            <p className="text-[11px]" style={{ color: "var(--color-txt3)" }}>{l}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
        <div className="grid grid-cols-[auto_1fr_1fr_auto_auto_auto] gap-0 px-5 py-2.5"
          style={{ background: "var(--color-surface2)", borderBottom: "1px solid var(--color-border)" }}>
          {["ID","Nombre","Ciudad","Plan","Campañas","Trust"].map(h => (
            <span key={h} className="text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--color-txt3)" }}>{h}</span>
          ))}
        </div>
        {FANS.map((f, i) => (
          <div key={f.id} className="grid grid-cols-[auto_1fr_1fr_auto_auto_auto] gap-0 items-center px-5 py-3.5"
            style={{ background: "var(--color-surface)", borderTop: i > 0 ? "1px solid var(--color-border)" : "none" }}>
            <span className="text-[12px] font-mono w-14" style={{ color: "var(--color-txt3)" }}>{f.id}</span>
            <span className="text-[13px] font-semibold">{f.name}</span>
            <span className="text-[12px]" style={{ color: "var(--color-txt2)" }}>{f.city}</span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded"
              style={{ color: planColor[f.plan], background: planColor[f.plan] + "20" }}>{f.plan}</span>
            <span className="text-[13px] text-center w-16">{f.campaigns}</span>
            <span className="text-[12px] font-bold w-12 text-right" style={{ color: f.trustScore >= 95 ? "#10b981" : f.trustScore >= 80 ? "#f59e0b" : "#6b7280" }}>
              {f.trustScore}%
            </span>
          </div>
        ))}
      </div>
    </DashboardPageShell>
  );
}
