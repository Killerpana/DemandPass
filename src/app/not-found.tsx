import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 56px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 440 }}>
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            background: "linear-gradient(135deg, var(--burg2), var(--burg3))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-4px",
            lineHeight: 1,
            marginBottom: 16,
          }}
        >
          404
        </div>
        <h1
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: "var(--txt)",
            marginBottom: 12,
            letterSpacing: "-0.5px",
          }}
        >
          Esta página no existe
        </h1>
        <p style={{ fontSize: 14, color: "var(--txt2)", lineHeight: 1.7, marginBottom: 28 }}>
          La campaña o sección que buscás no fue encontrada. Puede que haya sido removida o que la URL esté incorrecta.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-violet">
            Volver al inicio
          </Link>
          <Link href="/campaigns" className="btn btn-ghost">
            Ver campañas
          </Link>
        </div>
      </div>
    </div>
  );
}
