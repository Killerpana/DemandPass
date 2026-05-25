import { DashboardPageShell } from "@/components/dashboard/DashboardPageShell";

const FORECASTS = [
  { campaign: "Lenny Kravitz",  venue: "Movistar Arena",    prob: 91, date: "Ago 2026", tickets: "8.000",  revenue: "USD 672K", risk: "Bajo"  },
  { campaign: "Billie Eilish",  venue: "Estadio Obras",     prob: 96, date: "Jul 2026", tickets: "12.000", revenue: "USD 1.2M", risk: "Bajo"  },
  { campaign: "SZA",            venue: "Teatro Vorterix",   prob: 82, date: "Sep 2026", tickets: "4.000",  revenue: "USD 472K", risk: "Medio" },
  { campaign: "K-Pop Night",    venue: "Luna Park",         prob: 71, date: "Oct 2026", tickets: "6.500",  revenue: "USD 260K", risk: "Medio" },
  { campaign: "Tyler the Creator",venue:"Estadio Obras",    prob: 38, date: "Nov 2026", tickets: "3.200",  revenue: "USD 294K", risk: "Alto"  },
];

const riskColor: Record<string, string> = { Bajo: "#10b981", Medio: "#f59e0b", Alto: "#ef4444" };

export default function ForecastsPage() {
  return (
    <DashboardPageShell title="Forecasts" breadcrumb="Forecasts" active="forecasts">
      <p className="text-[13px] mb-5" style={{ color: "var(--color-txt3)" }}>
        Probabilidades de confirmación y proyecciones de venta basadas en Demand Score y datos históricos.
      </p>
      <div className="flex flex-col gap-4">
        {FORECASTS.map(f => (
          <div key={f.campaign} className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="font-[family-name:var(--font-display)] text-[16px] font-bold uppercase">{f.campaign}</p>
                <p className="text-[12px]" style={{ color: "var(--color-txt3)" }}>{f.venue} · {f.date}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-[family-name:var(--font-display)] text-[28px] font-black" style={{ color: f.prob >= 80 ? "#10b981" : f.prob >= 60 ? "#f59e0b" : "#ef4444" }}>
                  {f.prob}%
                </p>
                <p className="text-[10px] font-bold uppercase" style={{ color: riskColor[f.risk] }}>Riesgo {f.risk}</p>
              </div>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden mb-3" style={{ background: "rgba(255,255,255,0.07)" }}>
              <div className="h-full rounded-full" style={{ width: `${f.prob}%`, background: f.prob >= 80 ? "#10b981" : f.prob >= 60 ? "#f59e0b" : "#ef4444" }} />
            </div>
            <div className="flex gap-6 text-[12px]" style={{ color: "var(--color-txt3)" }}>
              <span>Tickets proyectados: <strong style={{ color: "var(--color-txt)" }}>{f.tickets}</strong></span>
              <span>Revenue estimado: <strong style={{ color: "var(--color-txt)" }}>{f.revenue}</strong></span>
            </div>
          </div>
        ))}
      </div>
    </DashboardPageShell>
  );
}
