import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { campaigns } from "@/lib/data";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const c = campaigns[Number(id)];
  if (!c) return { title: "Campaña no encontrada" };
  return {
    title: `${c.artist} · ${c.city}`,
    description: c.description,
  };
}

export default async function CampaignDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const c = campaigns[Number(id)];
  if (!c) notFound();
  const pct = Math.min(100, Math.round((c.current / c.goal) * 100));

  return (
    <div style={{ padding: "24px 0 60px" }}>
      <div className="wrap" style={{ maxWidth: 720 }}>
        <Link href="/campaigns" className="btn btn-ghost btn-sm" style={{ marginBottom: 20, display: "inline-flex" }}>
          ← Todas las campañas
        </Link>

        {/* Artist header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 16,
            marginBottom: 24,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: `${c.color}22`,
              border: `1px solid ${c.color}44`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 800,
              color: c.color,
              flexShrink: 0,
            }}
          >
            {c.img}
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
                marginBottom: 4,
              }}
            >
              <h1
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                  color: "var(--txt)",
                }}
              >
                {c.artist}
              </h1>
              <span
                className={`badge ${c.type === "official" ? "badge-violet" : "badge-blue"}`}
              >
                {c.type === "official" ? "Campaña oficial" : "Fan demand"}
              </span>
              {c.reserve && (
                <span className="badge badge-amber">Reserva {c.reserve}</span>
              )}
            </div>
            <p style={{ fontSize: 14, color: "var(--txt2)" }}>
              {c.event} · {c.city}, {c.country}
            </p>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 15,
            color: "var(--txt2)",
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          {c.description}
        </p>

        {/* KPIs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: 10,
            marginBottom: 20,
          }}
        >
          {[
            ["Apoyos actuales", c.current.toLocaleString("es-AR"), "var(--violet2)"],
            ["Objetivo", c.goal.toLocaleString("es-AR"), "var(--txt)"],
            ["Días restantes", String(c.days), "var(--amber2)"],
            ["Precio estimado", c.price, "var(--txt)"],
            ["Certeza", `${c.certainty}%`, "var(--emerald2)"],
            ["Reserva sugerida", c.reserve ?? "—", "var(--txt)"],
          ].map(([label, value, color]) => (
            <div key={label} className="stat-card">
              <div
                style={{ fontSize: 18, fontWeight: 800, color, letterSpacing: "-0.3px" }}
              >
                {value}
              </div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 13,
              marginBottom: 6,
            }}
          >
            <span style={{ color: "var(--txt2)", fontWeight: 600 }}>
              {pct}% alcanzado
            </span>
            <span style={{ color: "var(--txt3)" }}>
              {(c.goal - c.current).toLocaleString("es-AR")} apoyos para el objetivo
            </span>
          </div>
          <div className="progress" style={{ height: 8 }}>
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>

        {/* Campaign type explanation */}
        <div
          style={{
            background: c.type === "official" ? "rgba(124,58,237,0.07)" : "rgba(37,99,235,0.07)",
            border: `1px solid ${c.type === "official" ? "rgba(124,58,237,0.2)" : "rgba(37,99,235,0.2)"}`,
            borderRadius: "var(--r12)",
            padding: "14px 16px",
            marginBottom: 20,
            display: "flex",
            gap: 12,
            alignItems: "flex-start",
          }}
        >
          <div style={{ flexShrink: 0, marginTop: 2 }}>
            <span
              className={`badge ${c.type === "official" ? "badge-violet" : "badge-blue"}`}
            >
              {c.type === "official" ? "Campaña oficial" : "Fan demand"}
            </span>
          </div>
          <p style={{ fontSize: 13, color: "var(--txt2)", lineHeight: 1.65, margin: 0 }}>
            {c.type === "official"
              ? "Esta campaña es impulsada por la productora. El show aún no está confirmado — se confirma cuando se alcance el objetivo de demanda. Tu apoyo registra una reserva condicional."
              : "Esta es una campaña iniciada por fans. No hay compromiso de productora. Si alcanzamos el objetivo, la productora evalúa confirmar el evento. No requiere reserva económica."}
          </p>
        </div>

        {/* Perks */}
        <div className="card" style={{ marginBottom: 16 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "var(--txt3)",
              marginBottom: 12,
            }}
          >
            Beneficios disponibles
          </p>
          {c.perks.map((perk) => (
            <div
              key={perk}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 0",
                borderBottom: "1px solid var(--border)",
                fontSize: 14,
                color: "var(--txt)",
              }}
            >
              <span
                style={{ color: "var(--emerald2)", fontSize: 12, fontWeight: 700, flexShrink: 0 }}
              >
                ✓
              </span>
              {perk}
            </div>
          ))}
        </div>

        {/* Legal */}
        <div
          style={{
            background: "rgba(217,119,6,0.06)",
            border: "1px solid rgba(217,119,6,0.2)",
            borderRadius: "var(--r12)",
            padding: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "var(--amber2)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              marginBottom: 8,
            }}
          >
            Antes de apoyar — leé esto
          </div>
          <ul
            style={{
              fontSize: 13,
              color: "var(--txt2)",
              lineHeight: 1.8,
              paddingLeft: 16,
              margin: 0,
            }}
          >
            <li>Esta campaña <strong style={{ color: "var(--txt)" }}>no garantiza la realización del show.</strong></li>
            <li>Si la campaña no se confirma, la reserva condicional se devuelve por el <strong style={{ color: "var(--txt)" }}>mismo monto nominal</strong> abonado, sin intereses.</li>
            <li>DemandPass <strong style={{ color: "var(--txt)" }}>no vende entradas.</strong> La compra final ocurre en la ticketera oficial.</li>
          </ul>
        </div>

        <Link
          href={`/campaigns/${c.id}/support`}
          className="btn btn-violet btn-full btn-lg"
        >
          Apoyar esta campaña →
        </Link>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return campaigns.map((c) => ({ id: String(c.id) }));
}
