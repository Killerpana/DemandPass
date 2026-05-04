import Link from "next/link";
import { campaigns } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          padding: "64px 24px 56px",
          textAlign: "center",
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 70%)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--surface2)",
            border: "1px solid var(--border2)",
            borderRadius: 20,
            padding: "5px 14px 5px 8px",
            marginBottom: 28,
          }}
        >
          <span className="dot-pulse" />
          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--txt2)" }}>
            3 campañas activas ahora
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(36px, 5.5vw, 58px)",
            fontWeight: 800,
            lineHeight: 1.07,
            letterSpacing: "-1.5px",
            marginBottom: 18,
            color: "var(--txt)",
          }}
        >
          Demanda verificada para
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, var(--violet2), var(--blue2))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            eventos en vivo
          </span>
        </h1>

        <p
          style={{
            fontSize: 17,
            color: "var(--txt2)",
            maxWidth: 540,
            margin: "0 auto 12px",
            lineHeight: 1.65,
          }}
        >
          DemandPass convierte el apoyo de fans en intención de compra verificable{" "}
          <strong style={{ color: "var(--txt)" }}>antes de confirmar un show.</strong>
        </p>
        <p
          style={{
            fontSize: 14,
            color: "var(--txt3)",
            maxWidth: 480,
            margin: "0 auto 36px",
          }}
        >
          Fans apoyan campañas. Productoras reciben datos reales para decidir artista, ciudad,
          precio y venue.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 56,
          }}
        >
          <Link href="/campaigns" className="btn btn-violet btn-lg">
            Explorar campañas →
          </Link>
          <Link href="/dashboard" className="btn btn-ghost btn-lg">
            Ver dashboard productora
          </Link>
        </div>

        {/* Stats strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "var(--border)",
            borderRadius: "var(--r16)",
            overflow: "hidden",
            maxWidth: 540,
            margin: "0 auto",
          }}
        >
          {[
            { val: "12.4K", label: "Fans registrados", color: "var(--violet2)" },
            { val: "82%", label: "Demanda verificada", color: "var(--blue2)" },
            { val: "3", label: "Campañas activas", color: "var(--emerald2)" },
          ].map(({ val, label, color }) => (
            <div
              key={label}
              style={{ background: "var(--surface)", padding: "20px", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color,
                  letterSpacing: "-1px",
                }}
              >
                {val}
              </div>
              <div
                style={{ fontSize: 12, color: "var(--txt3)", marginTop: 4, fontWeight: 500 }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section
        style={{
          padding: "56px 24px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <p className="section-eyebrow">Cómo funciona</p>
            <h2 className="section-title">Tres pasos. Datos reales.</h2>
          </div>
          <div className="grid-3">
            {[
              {
                n: "1",
                title: "Fans apoyan",
                desc: "Indican ciudad, rango de precio y tipo de entrada. Las campañas oficiales incluyen reserva condicional.",
              },
              {
                n: "2",
                title: "Se mide la demanda",
                desc: "Datos verificados por ciudad, precio aceptado y perfil del fan. Sin bots ni datos falsos.",
              },
              {
                n: "3",
                title: "Productoras deciden",
                desc: "Dashboard con forecast, venue recomendado y lista de fans verificados con acceso prioritario si el show avanza.",
              },
            ].map(({ n, title, desc }) => (
              <div
                key={n}
                style={{
                  padding: 24,
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--r20)",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "var(--r12)",
                    background: "linear-gradient(135deg, var(--violet), var(--blue))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: 16,
                  }}
                >
                  {n}
                </div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    marginBottom: 8,
                    color: "var(--txt)",
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--txt2)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust banner ── */}
      <section
        style={{
          padding: "20px 24px",
          borderTop: "1px solid var(--border)",
          background: "var(--surface2)",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { icon: "○", text: "No es una entrada. Es un registro de interés verificado." },
              { icon: "○", text: "El show no está confirmado. La reserva es condicional." },
              { icon: "○", text: "La venta final ocurre en la ticketera oficial." },
            ].map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  color: "var(--txt3)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--txt3)",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured campaigns ── */}
      <section
        style={{
          padding: "48px 24px 64px",
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 24,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <p className="section-eyebrow">Campañas destacadas</p>
              <h2 className="section-title" style={{ fontSize: 22 }}>
                Apoyá antes que se confirme
              </h2>
            </div>
            <Link href="/campaigns" className="btn btn-ghost btn-sm">
              Ver todas →
            </Link>
          </div>
          <div className="grid-3">
            {campaigns.map((c) => {
              const pct = Math.min(100, Math.round((c.current / c.goal) * 100));
              return (
                <Link
                  key={c.id}
                  href={`/campaigns/${c.id}`}
                  className="card card-hover"
                  style={{ display: "block" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: `${c.color}22`,
                        border: `1px solid ${c.color}44`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 800,
                        color: c.color,
                        flexShrink: 0,
                      }}
                    >
                      {c.img}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "var(--txt)",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {c.artist}
                      </div>
                      <div style={{ fontSize: 12, color: "var(--txt3)" }}>{c.city}</div>
                    </div>
                  </div>
                  <span
                    className={`badge ${c.type === "official" ? "badge-violet" : "badge-blue"}`}
                    style={{ marginBottom: 10, display: "inline-flex" }}
                  >
                    {c.type === "official" ? "Oficial" : "Fan demand"}
                  </span>
                  <div className="progress" style={{ marginBottom: 6 }}>
                    <div className="progress-fill" style={{ width: `${pct}%` }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                    <span style={{ color: "var(--txt2)", fontWeight: 600 }}>
                      {c.current.toLocaleString("es-AR")} apoyos
                    </span>
                    <span style={{ color: "var(--txt3)" }}>{pct}%</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
