import Link from "next/link";
import { notFound } from "next/navigation";
import { campaigns } from "@/lib/data";
export default async function TokenPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    token?: string;
    level?: string;
    city?: string;
    price?: string;
    ticket?: string;
    benefits?: string;
    num?: string;
  }>;
}) {
  const { id: idStr } = await params;
  const id = Number(idStr);
  const c = campaigns[id];
  if (!c) notFound();

  const sp = await searchParams;
  const token = sp.token || "DP-XX-BA-0000";
  const level = sp.level || "Bronce";
  const city = sp.city || "—";
  const price = sp.price || "—";
  const ticket = sp.ticket || "—";
  const benefits = sp.benefits
    ? sp.benefits.split(",").filter(Boolean)
    : [];
  const num = sp.num || "0000";

  const levelColors: Record<string, string> = {
    Bronce: "#d97706",
    Plata: "#94a3b8",
    Oro: "#f59e0b",
  };
  const levelColor = levelColors[level] || "var(--violet2)";

  return (
    <div
      style={{
        minHeight: "calc(100vh - 56px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        background:
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%)",
      }}
    >
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border2)",
          borderRadius: "var(--r24)",
          padding: 32,
          maxWidth: 520,
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "linear-gradient(90deg, var(--violet), var(--blue), var(--violet))",
          }}
        />

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <span className="badge badge-emerald">
            <span className="dot-pulse" />
            Generado con éxito
          </span>
          <span style={{ fontSize: 12, color: "var(--txt3)" }}>
            {c.artist} · {c.city}
          </span>
        </div>

        <h1
          style={{
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: "-0.5px",
            color: "var(--txt)",
            marginBottom: 4,
          }}
        >
          Tu DemandPass está listo
        </h1>
        <p style={{ fontSize: 13, color: "var(--txt2)", marginBottom: 20 }}>
          Guardá este token. Es tu acceso prioritario si el show se confirma.
        </p>

        {/* Token box */}
        <div
          style={{
            background: "var(--surface2)",
            border: "1px solid var(--border2)",
            borderRadius: "var(--r12)",
            padding: 20,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "var(--txt3)",
              marginBottom: 10,
            }}
          >
            Claim Token
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 24,
              fontWeight: 500,
              color: "var(--txt)",
              letterSpacing: 3,
              wordBreak: "break-all",
            }}
          >
            {token}
          </div>
        </div>

        {/* Detail grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            marginBottom: 16,
          }}
        >
          {[
            ["Campaña", c.artist],
            ["Ciudad", city],
            [
              "Nivel",
              <span key="level" style={{ color: levelColor, fontWeight: 700 }}>
                {level}
              </span>,
            ],
            [
              "Estado",
              <span key="status" style={{ color: "var(--amber2)" }}>
                Pendiente de confirmación
              </span>,
            ],
            [
              "Prioridad simulada",
              <span key="prio" style={{ color: "var(--violet2)", fontWeight: 700 }}>
                #{num}
              </span>,
            ],
            ["Ventana", "Preventa 24 hs antes"],
          ].map(([k, v]) => (
            <div
              key={String(k)}
              style={{
                background: "var(--surface2)",
                borderRadius: "var(--r8)",
                padding: 12,
                border: "1px solid var(--border)",
              }}
            >
              <div style={{ fontSize: 11, color: "var(--txt3)", marginBottom: 3 }}>
                {k}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--txt)" }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Resumen */}
        <div style={{ marginBottom: 4 }}>
          <div
            style={{
              fontSize: 12,
              color: "var(--txt3)",
              marginBottom: 8,
            }}
          >
            Preferencias registradas
          </div>
          <div>
            {[price, ticket, ...benefits].filter(Boolean).map((item) => (
              <span key={item} className="tag tag-active">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div
          style={{
            background: "var(--surface2)",
            borderRadius: "var(--r12)",
            padding: 14,
            fontSize: 12,
            color: "var(--txt3)",
            lineHeight: 1.7,
            border: "1px solid var(--border)",
            margin: "16px 0 20px",
          }}
        >
          <span style={{ color: "var(--amber2)", fontWeight: 600 }}>Importante: </span>
          Este Claim Token no es una entrada. Es un derecho condicional de acceso prioritario si
          la campaña se confirma oficialmente. Si no se confirma, el monto nominal de la reserva
          condicional es devuelto íntegramente.
        </div>

        <Link href="/campaigns" className="btn btn-violet btn-full">
          Explorar más campañas →
        </Link>
      </div>
    </div>
  );
}
