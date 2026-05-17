"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      role="img"
    >
      <path
        d="M6 4H18C28 4 34 10 34 20C34 30 28 36 18 36H6V4Z"
        fill="none"
        stroke="#8B0F35"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <rect x="11" y="26" width="3.5" height="6" rx="1" fill="#8B0F35" opacity="0.7"/>
      <rect x="16" y="21" width="3.5" height="11" rx="1" fill="#A31645" opacity="0.9"/>
      <rect x="21" y="16" width="3.5" height="16" rx="1" fill="#A31645"/>
    </svg>
  );
}

export function Navbar() {
  const path = usePathname();

  return (
    <>
      {/* web-design-guidelines: skip link for accessibility */}
      <a
        href="#main-content"
        style={{
          position: "absolute",
          top: -40,
          left: 0,
          background: "var(--burg)",
          color: "#fff",
          padding: "8px 16px",
          borderRadius: "0 0 8px 0",
          fontSize: 13,
          fontWeight: 600,
          zIndex: 9999,
          transition: "top 0.1s ease",
        }}
        onFocus={(e) => { e.currentTarget.style.top = "0"; }}
        onBlur={(e) => { e.currentTarget.style.top = "-40px"; }}
      >
        Ir al contenido
      </a>

      <nav
        className="navbar-glass"
        aria-label="Navegación principal"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: 56,
          borderBottom: "1px solid rgba(139,15,53,0.2)",
          position: "sticky",
          top: 0,
          zIndex: 200,
        }}
      >
        <Link
          href="/"
          aria-label="DemandPass — Inicio"
          style={{ display: "flex", alignItems: "center", gap: 10 }}
        >
          <DIcon size={32} />
          <span
            aria-hidden="true"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#F4F4F5" }}>DEMAND</span>
            <span style={{ color: "#A31645" }}>PASS</span>
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 6 }} role="navigation">
          <NavPill href="/campaigns" active={path.startsWith("/campaigns")}>
            Campañas
          </NavPill>
          <NavPill href="/dashboard" active={path === "/dashboard"}>
            Dashboard B2B
          </NavPill>
          <Link
            href="/campaigns"
            style={{
              padding: "7px 16px",
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 700,
              background: "var(--burg)",
              color: "#fff",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontFamily: "'Barlow Condensed', sans-serif",
              minHeight: 36,
              display: "flex",
              alignItems: "center",
            }}
          >
            Comenzar
          </Link>
        </div>
      </nav>
    </>
  );
}

function NavPill({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      style={{
        padding: "6px 14px",
        borderRadius: 6,
        fontSize: 13,
        fontWeight: 600,
        border: "1px solid",
        borderColor: active ? "var(--burg)" : "var(--border)",
        background: active ? "rgba(139,15,53,0.15)" : "transparent",
        color: active ? "var(--burg3)" : "var(--txt2)",
        transition: "border-color 0.15s ease, background-color 0.15s ease, color 0.15s ease",
        minHeight: 36,
        display: "flex",
        alignItems: "center",
      }}
    >
      {children}
    </Link>
  );
}
