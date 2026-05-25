import { DashboardPageShell } from "@/components/dashboard/DashboardPageShell";

const EVENTS = [
  { campaign: "Lenny Kravitz",  event: "Nuevo apoyo",       city: "Buenos Aires", price: "USD 95 · Platea", time: "18:42:18", tag: "NUEVO APOYO",     color: "#3b82f6" },
  { campaign: "Godsmack",       event: "Nuevo apoyo",       city: "Córdoba",      price: "USD 60 · Campo",  time: "18:42:11", tag: "NUEVO APOYO",     color: "#3b82f6" },
  { campaign: "K-Pop Night",    event: "Hito alcanzado",    city: "Nacional",     price: "80% del objetivo",time: "18:42:04", tag: "HITO ALCANZADO",  color: "#f59e0b" },
  { campaign: "SZA",            event: "Nuevo apoyo",       city: "Buenos Aires", price: "USD 110 · VIP",   time: "18:41:52", tag: "NUEVO APOYO",     color: "#3b82f6" },
  { campaign: "Bad Bunny",      event: "Nuevo apoyo",       city: "México DF",    price: "USD 95 · Platea", time: "18:41:46", tag: "NUEVO APOYO",     color: "#3b82f6" },
  { campaign: "Lenny Kravitz",  event: "Reserva condicional",city:"Buenos Aires", price: "USD 15 reserva",  time: "18:41:38", tag: "RESERVA",         color: "#10b981" },
  { campaign: "Billie Eilish",  event: "Señal precio",      city: "Nacional",     price: "Sweet spot USD 82→84", time: "18:41:20", tag: "SEÑAL PRECIO", color: "#A31645" },
];

export default function DemandaLivePage() {
  return (
    <DashboardPageShell title="Demanda live" breadcrumb="Demanda live" active="demanda-live">
      <div className="flex items-center gap-3 mb-5">
        <span className="flex items-center gap-1.5 text-[12px] font-semibold" style={{ color: "#10b981" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          En vivo — 27 eventos/min
        </span>
        <span className="text-[12px]" style={{ color: "var(--color-txt3)" }}>8 campañas activas</span>
      </div>
      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
        {EVENTS.map((e, i) => (
          <div key={i} className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-white/3"
            style={{ background: "var(--color-surface)", borderTop: i > 0 ? "1px solid var(--color-border)" : "none" }}>
            <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-[0.08em] shrink-0 w-28 text-center"
              style={{ background: e.color + "18", color: e.color }}>{e.tag}</span>
            <span className="text-[13px] font-semibold w-28 truncate shrink-0">{e.campaign}</span>
            <span className="text-[12px] flex-1 truncate" style={{ color: "var(--color-txt2)" }}>{e.city} · {e.price}</span>
            <span className="text-[11px] font-mono shrink-0" style={{ color: "var(--color-txt3)" }}>{e.time}</span>
          </div>
        ))}
      </div>
    </DashboardPageShell>
  );
}
