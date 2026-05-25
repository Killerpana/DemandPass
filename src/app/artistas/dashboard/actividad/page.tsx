import type { Metadata } from "next";
export const metadata: Metadata = { title: "Actividad — Artista" };

const FEED = [
  { type: "apoyo",   text: "Santiago desde Córdoba apoyó tu campaña",          time: "hace 3 min",  color: "#8b5cf6" },
  { type: "hito",    text: "Alcanzaste 1.800 apoyos — récord semanal",          time: "hace 1 hs",   color: "#f59e0b" },
  { type: "ciudad",  text: "Mendoza superó los 150 fans",                       time: "hace 2 hs",   color: "#3b82f6" },
  { type: "precio",  text: "El 52% de fans acepta USD 50–80",                   time: "hace 3 hs",   color: "#10b981" },
  { type: "score",   text: "Tu Demand Score subió de 68 a 74",                  time: "ayer",        color: "#f59e0b" },
  { type: "apoyo",   text: "15 fans de Montevideo se sumaron esta semana",      time: "ayer",        color: "#8b5cf6" },
  { type: "venue",   text: "Teatro Vorterix verificó disponibilidad de fechas", time: "hace 3 días", color: "#10b981" },
  { type: "hito",    text: "Tu campaña apareció en Campañas Destacadas",        time: "hace 5 días", color: "#A31645" },
];

export default function ArtistActividadPage() {
  return (
    <div className="p-5 md:p-7 max-w-[700px]">
      <div className="mb-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: "#8b5cf6" }}>Actividad</p>
        <h1 className="font-[family-name:var(--font-display)] text-[26px] font-black uppercase">FEED EN TIEMPO REAL</h1>
      </div>
      <div className="flex flex-col gap-3">
        {FEED.map((item, i) => (
          <div key={i} className="flex items-start gap-4 p-4 rounded-xl"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: item.color }} />
            <div className="flex-1">
              <p className="text-[13px] leading-[1.5]">{item.text}</p>
              <p className="text-[11px] mt-0.5" style={{ color: "var(--color-txt3)" }}>{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
