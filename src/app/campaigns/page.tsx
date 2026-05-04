import Link from "next/link";
import { campaigns } from "@/lib/data";

export default function CampaignsPage() {
  return (
    <div style={{ padding: "32px 0 60px" }}>
      <div className="wrap">
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <p className="section-eyebrow">Todas las campañas</p>
          <h1 className="section-title" style={{ marginBottom: 12 }}>
            Elegí tu próximo show
          </h1>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <span className="badge badge-violet">
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--violet2)",
                  display: "inline-block",
                }}
              />
              Campaña oficial
            </span>
            <span className="badge badge-blue">
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--blue2)",
                  display: "inline-block",
                }}
              />
              Fan demand
            </span>
            <span className="tag">Buenos Aires</span>
            <span className="tag">Córdoba</span>
          </div>
        </div>

        {/* Disclaimer strip */}
        <div
          style={{
            background: "var(--surface2)",
            border: "1px solid var(--border)",
            borderRadius: "var(--r12)",
            padding: "12px 16px",
            marginBottom: 24,
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          <span
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              border: "1.5px solid var(--txt3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              color: "var(--txt3)",
              flexShrink: 0,
              marginTop: 1,
              fontWeight: 700,
            }}
          >
            i
          </span>
          <p style={{ fontSize: 12, color: "var(--txt3)", lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: "var(--txt2)" }}>DemandPass no vende entradas.</strong>{" "}
            Registrás tu interés y preferencias. Si el show se confirma, recibís acceso prioritario a la
            preventa en la ticketera oficial. La venta final siempre ocurre fuera de esta plataforma.
          </p>
        </div>

        {/* Campaign cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {campaigns.map((c) => {
            const pct = Math.min(100, Math.round((c.current / c.goal) * 100));
            return (
              <div
                key={c.id}
                className="card"
                style={{ transition: "all .2s" }}
              >
                {/* Top row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    marginBottom: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: `${c.color}22`,
                      border: `1px solid ${c.color}44`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      fontWeight: 800,
                      color: c.color,
                      flexShrink: 0,
                    }}
                  >
                    {c.img}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: 8,
                        flexWrap: "wrap",
                        marginBottom: 4,
                      }}
                    >
                      <div>
                        <h2
                          style={{
                            fontSize: 20,
                            fontWeight: 800,
                            color: "var(--txt)",
                            letterSpacing: "-0.3px",
                          }}
                        >
                          {c.artist}
                        </h2>
                        <p style={{ fontSize: 13, color: "var(--txt2)", marginTop: 2 }}>
                          {c.event} · {c.city}, {c.country}
                        </p>
                      </div>
                      <span
                        className={`badge ${
                          c.type === "official" ? "badge-violet" : "badge-blue"
                        }`}
                      >
                        {c.type === "official" ? "Campaña oficial" : "Fan demand"}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        color: "var(--txt3)",
                        lineHeight: 1.6,
                        marginTop: 6,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {c.description}
                    </p>
                  </div>
                </div>

                {/* Metrics grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                    gap: 10,
                    marginBottom: 14,
                  }}
                >
                  {[
                    ["Apoyos", c.current.toLocaleString("es-AR")],
                    ["Objetivo", c.goal.toLocaleString("es-AR")],
                    ["Quedan", `${c.days} días`],
                    ["Precio est.", c.price],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      style={{
                        background: "var(--surface2)",
                        borderRadius: "var(--r8)",
                        padding: "10px 12px",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--txt3)",
                          fontWeight: 500,
                          marginBottom: 2,
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{ fontSize: 14, fontWeight: 700, color: "var(--txt)" }}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress */}
                <div className="progress progress-lg" style={{ marginBottom: 6 }}>
                  <div className="progress-fill" style={{ width: `${pct}%` }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 12,
                    marginBottom: 16,
                  }}
                >
                  <span style={{ color: "var(--txt2)" }}>{pct}% del objetivo</span>
                  <span style={{ color: "var(--emerald2)", fontWeight: 600 }}>
                    ✓ {c.benefit}
                  </span>
                </div>

                <Link
                  href={`/campaigns/${c.id}`}
                  className="btn btn-violet btn-full"
                >
                  Ver campaña y apoyar →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
