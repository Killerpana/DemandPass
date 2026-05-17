"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Logo SVG fiel al original — D geométrica con barras ascendentes
function DemandPassLogo({ size = 36 }: { size?: number }) {
  const h = size;
  const w = size * 0.85;
  return (
    <svg width={w} height={h} viewBox="0 0 85 100" fill="none" aria-hidden="true">
      {/* D shape — borde izquierdo recto, esquina sup-der cortada en diagonal, curva der */}
      <path
        d="M8 8 L8 92 L42 92 C68 92 78 76 78 50 C78 24 68 8 42 8 Z"
        fill="none"
        stroke="#8B0F35"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      {/* Corte diagonal en esquina superior derecha */}
      <path
        d="M42 8 L65 8 L78 22"
        fill="none"
        stroke="#8B0F35"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      {/* Barra 1 — más baja */}
      <rect x="22" y="68" width="8" height="16" rx="1.5" fill="#7A0F2E" />
      {/* Barra 2 — media */}
      <rect x="34" y="56" width="8" height="28" rx="1.5" fill="#9B1535" />
      {/* Barra 3 — más alta, cortada diagonal por la D */}
      <rect x="46" y="44" width="8" height="40" rx="1.5" fill="#A31645" />
      {/* Línea diagonal que corta las barras — efecto del logo original */}
      <line x1="18" y1="44" x2="60" y2="28" stroke="#08080D" strokeWidth="3.5" />
    </svg>
  );
}

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span style={{
      fontFamily: "'Barlow Condensed', sans-serif",
      fontSize: compact ? 16 : 20,
      fontWeight: 900,
      letterSpacing: "1px",
      textTransform: "uppercase" as const,
      fontStyle: "italic",
      lineHeight: 1,
    }}>
      <span style={{ color: "#F4F4F5" }}>DEMAND</span>
      <span style={{ color: "#A31645" }}>PASS</span>
    </span>
  );
}

export function Navbar() {
  const path = usePathname();

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        style={{
          position: "absolute", top: -40, left: 0,
          background: "var(--burg)", color: "#fff",
          padding: "8px 16px", borderRadius: "0 0 8px 0",
          fontSize: 13, fontWeight: 600, zIndex: 9999,
          transition: "top 0.1s ease",
        }}
        onFocus={e => { e.currentTarget.style.top = "0"; }}
        onBlur={e => { e.currentTarget.style.top = "-40px"; }}
      >
        Ir al contenido
      </a>

      <nav
        className="navbar-glass"
        aria-label="Navegación principal"
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 28px", height: 60,
          borderBottom: "1px solid rgba(139,15,53,0.25)",
          position: "sticky", top: 0, zIndex: 200,
        }}
      >
        <Link href="/" aria-label="DemandPass — Inicio" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <DemandPassLogo size={40} />
          <Wordmark />
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <NavLink href="/campaigns" active={path.startsWith("/campaigns")}>Campañas</NavLink>
          <NavLink href="/dashboard" active={path === "/dashboard"}>Dashboard B2B</NavLink>
          <Link
            href="/campaigns"
            style={{
              padding: "8px 18px", borderRadius: 4,
              fontSize: 13, fontWeight: 800,
              background: "var(--burg)",
              color: "#fff",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontStyle: "italic",
              minHeight: 38,
              display: "flex", alignItems: "center",
              border: "none",
            }}
          >
            Comenzar
          </Link>
        </div>
      </nav>
    </>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      style={{
        padding: "7px 16px", borderRadius: 4, fontSize: 13, fontWeight: 600,
        border: "1px solid",
        borderColor: active ? "var(--burg)" : "var(--border2)",
        background: active ? "rgba(139,15,53,0.12)" : "transparent",
        color: active ? "var(--burg3)" : "var(--txt2)",
        transition: "border-color 0.15s ease, background-color 0.15s ease, color 0.15s ease",
        minHeight: 36, display: "flex", alignItems: "center",
        fontFamily: "'Barlow', sans-serif",
      }}
    >
      {children}
    </Link>
  );
}
