"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const path = usePathname();

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        height: 56,
        background: "var(--surface)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 200,
        backdropFilter: "blur(12px)",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: "linear-gradient(135deg,var(--violet),var(--blue))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            fontWeight: 800,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          D
        </div>
        <span
          style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.3px", color: "var(--txt)" }}
        >
          DemandPass
        </span>
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <NavPill href="/campaigns" active={path.startsWith("/campaigns")}>
          Campañas
        </NavPill>
        <NavPill href="/dashboard" active={path === "/dashboard"}>
          Dashboard B2B
        </NavPill>
        <Link href="/campaigns" className="btn btn-sm btn-violet">
          Comenzar
        </Link>
      </div>
    </nav>
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
      style={{
        padding: "6px 14px",
        borderRadius: 20,
        fontSize: 13,
        fontWeight: 500,
        border: "1px solid",
        borderColor: active ? "var(--violet)" : "var(--border)",
        background: active ? "var(--violet)" : "transparent",
        color: active ? "#fff" : "var(--txt2)",
        transition: "all .15s",
      }}
    >
      {children}
    </Link>
  );
}
