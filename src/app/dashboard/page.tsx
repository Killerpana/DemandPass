"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { dashboardData } from "@/lib/data";

const d = dashboardData;

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ paddingBottom: 60 }}>
      {/* Header */}
      <div
        style={{
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
          padding: "20px 24px",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 4,
                }}
              >
                <h1
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    letterSpacing: "-0.3px",
                    color: "var(--txt)",
                  }}
                >
                  Dashboard Productora
                </h1>
                <span className="badge badge-violet">Beta</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--txt2)" }}>
                Lenny Kravitz — Tour Latinoamérica 2025 &nbsp;·&nbsp;{" "}
                <span style={{ color: "var(--emerald2)" }}>Actualizado hace 3 min</span>
              </p>
            </div>
            <button className="btn btn-ghost btn-sm">↓ Exportar informe</button>
          </div>
        </div>
      </div>

      <div className="wrap" style={{ paddingTop: 24 }}>
        {/* KPIs */}
        <div className="grid-3" style={{ marginBottom: 20 }}>
          {[
            {
              val: "12.450",
              label: "Interesados totales",
              change: "+234 esta semana",
              changeColor: "var(--emerald2)",
            },
            {
              val: "4.820",
              label: "Reservas condicionales",
              change: "+89 hoy",
              changeColor: "var(--emerald2)",
            },
            {
              val: "82%",
              label: "Fans verificados",
              change: "Sin cambios",
              changeColor: "var(--txt3)",
            },
            {
              val: "USD 74",
              label: "Precio promedio aceptado",
              change: "▲ vs USD 68 estimado",
              changeColor: "var(--emerald2)",
            },
            {
              val: "7.800",
              label: "Forecast tickets 48 hs",
              change: "Confianza: alta",
              changeColor: "var(--violet2)",
            },
            {
              val: "8–12K",
              label: "Venue recomendado",
              change: "Buenos Aires",
              changeColor: "var(--amber2)",
            },
          ].map(({ val, label, change, changeColor }) => (
            <div key={label} className="stat-card">
              <div className="stat-val">{val}</div>
              <div className="stat-label">{label}</div>
              <div className="stat-change" style={{ color: changeColor }}>
                {change}
              </div>
            </div>
          ))}
        </div>

        {/* Recommendation */}
        <div
          style={{
            background: "linear-gradient(135deg, #0a1a0e, #081814)",
            border: "1px solid rgba(16,185,129,0.2)",
            borderRadius: "var(--r16)",
            padding: 20,
            marginBottom: 20,
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--emerald2)",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "var(--emerald3)",
              }}
            >
              Recomendación automática
            </span>
          </div>
          <p
            style={{
              fontSize: 14,
              color: "#d1fae5",
              lineHeight: 1.7,
              marginBottom: 14,
            }}
          >
            La demanda validada sugiere lanzar una preventa limitada en Buenos Aires, con precio
            base entre{" "}
            <strong style={{ color: "#6ee7b7" }}>USD 60–90</strong>, cupo inicial de{" "}
            <strong style={{ color: "#6ee7b7" }}>8.000 tickets</strong> y ventana prioritaria
            para usuarios Plata/Oro.
          </p>
          <div>
            {["Venue 8.000–12.000 personas", "Preventa 72 hs antes", "Precio base: USD 70"].map(
              (t) => (
                <span key={t} className="tag tag-active">
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        {/* Charts row */}
        <div className="grid-2" style={{ marginBottom: 20 }}>
          <div className="card">
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "var(--txt3)",
                marginBottom: 16,
              }}
            >
              Demanda por ciudad
            </p>
            {d.cities.map(({ name, pct, fans }) => (
              <BarRow
                key={name}
                label={name}
                pct={pct}
                sub={`${fans.toLocaleString("es-AR")} fans`}
                color="linear-gradient(90deg, var(--violet), var(--blue))"
                animate={mounted}
              />
            ))}
          </div>
          <div className="card">
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "var(--txt3)",
                marginBottom: 16,
              }}
            >
              Rango de precio aceptado
            </p>
            {d.prices.map(({ range, pct }) => (
              <BarRow
                key={range}
                label={range}
                pct={pct}
                sub={`${pct}%`}
                color="linear-gradient(90deg, var(--blue), var(--violet2))"
                animate={mounted}
              />
            ))}
          </div>
        </div>

        {/* Levels + Quality */}
        <div className="grid-2" style={{ marginBottom: 20 }}>
          <div className="card">
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "var(--txt3)",
                marginBottom: 16,
              }}
            >
              Fans por nivel
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {d.levels.map(({ name, count, pct, color }) => (
                <div
                  key={name}
                  style={{
                    flex: 1,
                    background: "var(--surface2)",
                    borderRadius: "var(--r12)",
                    padding: 14,
                    textAlign: "center",
                    borderTop: `3px solid ${color}`,
                    border: `1px solid var(--border)`,
                    borderTopColor: color,
                  }}
                >
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      color,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {count.toLocaleString("es-AR")}
                  </div>
                  <div
                    style={{ fontSize: 11, color: "var(--txt3)", marginTop: 4, fontWeight: 500 }}
                  >
                    {name}
                  </div>
                  <div style={{ fontSize: 10, color: "var(--txt3)", marginTop: 2 }}>
                    {pct}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "var(--txt3)",
                marginBottom: 16,
              }}
            >
              Calidad de demanda
            </p>
            {d.quality.map(({ label, pct, count, color }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: color,
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 5,
                    }}
                  >
                    <span style={{ fontSize: 13, color: "var(--txt)" }}>{label}</span>
                    <span style={{ fontSize: 12, color, fontWeight: 600 }}>
                      {pct}% · {count.toLocaleString("es-AR")}
                    </span>
                  </div>
                  <div className="progress">
                    <div
                      style={{
                        height: "100%",
                        borderRadius: 3,
                        background: color,
                        width: mounted ? `${pct}%` : "0%",
                        transition: "width 0.8s ease",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="card">
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: "var(--txt3)",
              marginBottom: 16,
            }}
          >
            Beneficios más solicitados
          </p>
          <div className="grid-2">
            {d.benefits.map(({ label, pct }) => (
              <BarRow
                key={label}
                label={label}
                pct={pct}
                sub={`${pct}%`}
                color="linear-gradient(90deg, var(--violet), var(--blue))"
                animate={mounted}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BarRow({
  label,
  pct,
  sub,
  color,
  animate,
}: {
  label: string;
  pct: number;
  sub: string;
  color: string;
  animate: boolean;
}) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 5,
        }}
      >
        <span style={{ fontSize: 13, color: "var(--txt)", fontWeight: 500 }}>{label}</span>
        <span style={{ fontSize: 12, color: "var(--txt3)" }}>{sub}</span>
      </div>
      <div className="progress">
        <div
          style={{
            height: "100%",
            borderRadius: 3,
            background: color,
            width: animate ? `${pct}%` : "0%",
            transition: "width 0.8s ease",
          }}
        />
      </div>
    </div>
  );
}
