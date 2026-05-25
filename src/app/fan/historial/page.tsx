import type { Metadata } from "next";

export const metadata: Metadata = { title: "Historial" };
export default function FanHistorialPage() {
  return (
    <div className="p-8 max-w-[700px]">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-burg3)" }}>Historial</p>
      <h1 className="font-[family-name:var(--font-display)] text-[28px] font-black uppercase mb-8">MIS CAMPAÑAS PASADAS</h1>
      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
        {[
          { artist: "Bad Bunny",    tour: "Most Wanted Tour",  city: "Buenos Aires", fecha: "Nov 2024", monto: "USD 90",  ok: true  },
          { artist: "Billie Eilish", tour: "Hit Me Hard Tour", city: "Buenos Aires", fecha: "Feb 2024", monto: "USD 80",  ok: true  },
          { artist: "Tame Impala",  tour: "Currents Tour",     city: "Buenos Aires", fecha: "Oct 2023", monto: "USD 70",  ok: false },
        ].map((h, i) => (
          <div key={i} className="flex items-center gap-4 px-5 py-4 transition-colors"
            style={{ background: "var(--color-surface)", borderTop: i > 0 ? "1px solid var(--color-border)" : "none" }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[12px] font-black shrink-0"
              style={{ background: h.ok ? "rgba(16,185,129,0.15)" : "rgba(107,114,128,0.15)", fontFamily: "var(--font-display)", color: h.ok ? "#10b981" : "#6b7280" }}>
              {h.ok ? "✓" : "✗"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-semibold">{h.artist}</p>
              <p className="text-[11px]" style={{ color: "var(--color-txt3)" }}>{h.tour} · {h.city}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[13px] font-semibold">{h.monto}</p>
              <p className="text-[11px]" style={{ color: h.ok ? "#10b981" : "#6b7280" }}>
                {h.ok ? "Confirmado" : "No confirmado"} · {h.fecha}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
