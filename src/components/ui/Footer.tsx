import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
        padding: "40px 24px 32px",
        marginTop: "auto",
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 32,
            marginBottom: 40,
          }}
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 7,
                  background: "linear-gradient(135deg, var(--violet), var(--blue))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                D
              </div>
              <span style={{ fontSize: 15, fontWeight: 800, color: "var(--txt)" }}>DemandPass</span>
            </Link>
            <p style={{ fontSize: 12, color: "var(--txt3)", lineHeight: 1.7, maxWidth: 200 }}>
              Demanda verificada para eventos en vivo. No vendemos entradas.
            </p>
          </div>

          {/* Plataforma */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--txt3)", marginBottom: 12 }}>
              Plataforma
            </p>
            {[
              { label: "Campañas activas", href: "/campaigns" },
              { label: "Cómo funciona", href: "/#como-funciona" },
              { label: "Dashboard B2B", href: "/dashboard" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{ display: "block", fontSize: 13, color: "var(--txt2)", marginBottom: 8, textDecoration: "none" }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--txt3)", marginBottom: 12 }}>
              Legal
            </p>
            {[
              { label: "Términos de uso", href: "/terms" },
              { label: "Política de privacidad", href: "/privacy" },
              { label: "Condiciones de reserva", href: "/conditions" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{ display: "block", fontSize: 13, color: "var(--txt2)", marginBottom: 8, textDecoration: "none" }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contacto */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--txt3)", marginBottom: 12 }}>
              Contacto
            </p>
            <p style={{ fontSize: 13, color: "var(--txt2)", marginBottom: 6 }}>hola@demandpass.app</p>
            <p style={{ fontSize: 13, color: "var(--txt2)", marginBottom: 6 }}>Para productoras y partners:</p>
            <p style={{ fontSize: 13, color: "var(--violet3)" }}>partners@demandpass.app</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12, color: "var(--txt3)" }}>
            © 2025 DemandPass. Todos los derechos reservados.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "var(--surface2)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: "4px 12px",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--amber2)",
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: 11, color: "var(--txt3)", fontWeight: 500 }}>
              Demo — datos simulados
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <p
          style={{
            fontSize: 11,
            color: "var(--txt3)",
            marginTop: 16,
            lineHeight: 1.7,
            borderTop: "1px solid var(--border)",
            paddingTop: 16,
          }}
        >
          DemandPass no es una ticketera ni vende entradas. Las reservas son condicionales y no garantizan la realización del evento.
          Si un show no se confirma, el monto nominal abonado es devuelto íntegramente. La venta final de tickets
          ocurre exclusivamente en la ticketera oficial del evento.
        </p>
      </div>
    </footer>
  );
}
