import type { Metadata } from "next";

export const metadata: Metadata = { title: "Alertas" };
export default function FanAlertasPage() {
  return (
    <div className="p-8 max-w-[700px]">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-burg3)" }}>Alertas</p>
      <h1 className="font-[family-name:var(--font-display)] text-[28px] font-black uppercase mb-8">TUS NOTIFICACIONES</h1>
      <div className="flex flex-col gap-3">
        {[
          { text: "Lenny Kravitz alcanzó el 67% del objetivo", time: "hace 2 hs",   dot: "#10b981" },
          { text: "Tu token para K-Pop Night fue generado",    time: "hace 5 hs",   dot: "#A31645" },
          { text: "+580 apoyos esta semana en K-Pop Night",    time: "ayer",        dot: "#3b82f6" },
          { text: "Subiste a Fan Plata — mejor posición",      time: "hace 3 días", dot: "#f59e0b" },
          { text: "Bad Bunny confirmó fecha — token activo",   time: "hace 5 días", dot: "#10b981" },
        ].map((a, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-xl"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: a.dot }} />
            <span className="text-[13px] flex-1">{a.text}</span>
            <span className="text-[11px] shrink-0" style={{ color: "var(--color-txt3)" }}>{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
