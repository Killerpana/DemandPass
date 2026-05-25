import { DashboardPageShell } from "@/components/dashboard/DashboardPageShell";

const VENUES = [
  { name: "Movistar Arena",       city: "Buenos Aires", cap: "15.000",  type: "Arena",   score: 94, campaigns: 3 },
  { name: "Estadio Obras",        city: "Buenos Aires", cap: "8.000",   type: "Estadio", score: 88, campaigns: 4 },
  { name: "Teatro Vorterix",      city: "Buenos Aires", cap: "4.000",   type: "Teatro",  score: 91, campaigns: 2 },
  { name: "Luna Park",            city: "Buenos Aires", cap: "10.000",  type: "Arena",   score: 79, campaigns: 2 },
  { name: "Estadio Mario Kempes", city: "Córdoba",      cap: "40.000",  type: "Estadio", score: 72, campaigns: 1 },
  { name: "Quality Espacio",      city: "Córdoba",      cap: "6.000",   type: "Arena",   score: 83, campaigns: 1 },
];

export default function VenuesPage() {
  return (
    <DashboardPageShell title="Venues" breadcrumb="Venues" active="venues">
      <p className="text-[13px] mb-5" style={{ color: "var(--color-txt3)" }}>
        Venues recomendados según Demand Map. El score refleja compatibilidad entre demanda verificada y capacidad del venue.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {VENUES.map(v => (
          <div key={v.name} className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-[family-name:var(--font-display)] text-[15px] font-bold uppercase">{v.name}</p>
                <p className="text-[12px]" style={{ color: "var(--color-txt3)" }}>{v.city} · Cap. {v.cap} · {v.type}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-[family-name:var(--font-display)] text-[22px] font-black" style={{ color: v.score >= 90 ? "#10b981" : v.score >= 75 ? "#f59e0b" : "#6b7280" }}>
                  {v.score}
                </p>
                <p className="text-[9px] uppercase tracking-[0.08em] font-bold" style={{ color: "var(--color-txt3)" }}>Match score</p>
              </div>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
              <div className="h-full rounded-full" style={{ width: `${v.score}%`, background: "var(--color-burg3)" }} />
            </div>
            <p className="text-[11px] mt-2" style={{ color: "var(--color-txt3)" }}>{v.campaigns} campañas activas vinculadas</p>
          </div>
        ))}
      </div>
    </DashboardPageShell>
  );
}
