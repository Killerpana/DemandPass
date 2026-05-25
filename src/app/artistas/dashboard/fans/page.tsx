import type { Metadata } from "next";
export const metadata: Metadata = { title: "Mis fans — Artista" };

const CITIES = [
  { city: "Buenos Aires", fans: 892, pct: 100, avgAge: "24–32", topBeneficio: "Meet & greet" },
  { city: "Córdoba",      fans: 431, pct: 48,  avgAge: "22–30", topBeneficio: "Preventa 48hs" },
  { city: "Rosario",      fans: 298, pct: 33,  avgAge: "20–28", topBeneficio: "Campo delantero" },
  { city: "Mendoza",      fans: 156, pct: 17,  avgAge: "25–33", topBeneficio: "Meet & greet" },
  { city: "La Plata",     fans: 70,  pct: 8,   avgAge: "18–26", topBeneficio: "Info anticipada" },
  { city: "Montevideo",   fans: 45,  pct: 5,   avgAge: "22–30", topBeneficio: "Preventa 48hs" },
];

const SEGMENTS = [
  { label: "Superfans",    pct: 18, desc: "Apoyan más de 3 campañas", color: "#f59e0b" },
  { label: "Frecuentes",   pct: 34, desc: "1–2 campañas apoyadas",    color: "#A31645" },
  { label: "Nuevos",       pct: 48, desc: "Primera campaña",          color: "#3b82f6" },
];

export default function ArtistFansPage() {
  return (
    <div className="p-5 md:p-7 max-w-[900px]">
      <div className="mb-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: "#8b5cf6" }}>Mis fans</p>
        <h1 className="font-[family-name:var(--font-display)] text-[26px] font-black uppercase">
          {(892+431+298+156+70+45).toLocaleString()} FANS VERIFICADOS
        </h1>
        <p className="text-[13px] mt-1" style={{ color: "var(--color-txt3)" }}>Campaña: Gira Argentina 2026</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5 mb-6">
        {/* Por ciudad */}
        <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <h2 className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] mb-4">Por ciudad</h2>
          {CITIES.map(c => (
            <div key={c.city} className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[13px] font-medium">{c.city}</span>
                <div className="flex gap-4 text-[11px]" style={{ color: "var(--color-txt3)" }}>
                  <span style={{ color: "var(--color-txt)" }}>{c.fans} fans</span>
                  <span>{c.avgAge} años</span>
                </div>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: "linear-gradient(90deg, #7c3aed, #8b5cf6)" }} />
              </div>
              <p className="text-[10px] mt-1" style={{ color: "var(--color-txt3)" }}>Top beneficio: {c.topBeneficio}</p>
            </div>
          ))}
        </div>

        {/* Segmentos */}
        <div className="flex flex-col gap-4">
          <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <h2 className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] mb-4">Segmentos</h2>
            {SEGMENTS.map(s => (
              <div key={s.label} className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
                <div className="flex-1">
                  <div className="flex justify-between text-[13px]">
                    <span className="font-medium">{s.label}</span>
                    <span style={{ color: s.color }}>{s.pct}%</span>
                  </div>
                  <p className="text-[11px]" style={{ color: "var(--color-txt3)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <h2 className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] mb-3">Dispositivos</h2>
            {[["Mobile", "74%"], ["Desktop", "21%"], ["Tablet", "5%"]].map(([d, p]) => (
              <div key={d} className="flex justify-between text-[13px] mb-2">
                <span style={{ color: "var(--color-txt2)" }}>{d}</span>
                <span style={{ color: "var(--color-txt)" }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
