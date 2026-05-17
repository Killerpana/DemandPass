// src/components/ui/Navbar.tsx — updated to use the brand PNG logo + new nav items.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const path = usePathname();
  return (
    <>
      <a
        href="#main-content"
        className="absolute top-[-40px] left-0 bg-[var(--color-burg)] text-white px-4 py-2 rounded-br-lg text-[13px] font-semibold z-[9999] focus:top-0 transition-all"
      >
        Ir al contenido
      </a>
      <nav
        className="sticky top-0 z-[200] h-16 px-12 flex items-center gap-8 border-b"
        style={{
          background: "rgba(8,8,13,0.85)",
          backdropFilter: "blur(14px) saturate(180%)",
          WebkitBackdropFilter: "blur(14px) saturate(180%)",
          borderColor: "var(--color-border)",
        }}
        aria-label="Navegación principal"
      >
        <Logo height={26} href="/" />

        <div className="flex gap-1 ml-6">
          <NavLink href="/campaigns" active={path.startsWith("/campaigns")}>Campañas</NavLink>
          <NavLink href="/#como-funciona" active={false}>Cómo funciona</NavLink>
          <NavLink href="/dashboard" active={path === "/dashboard"}>Productoras</NavLink>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/signin"
            className="px-3.5 py-2 rounded-md text-[12px] font-bold uppercase tracking-[0.06em] border text-[var(--color-txt)]"
            style={{ borderColor: "var(--color-border2)" }}
          >
            Ingresar
          </Link>
          <Link
            href="/campaigns"
            className="px-4 py-2 rounded-md text-[12px] font-bold uppercase tracking-[0.06em] text-white"
            style={{
              background: "var(--color-burg3)",
              boxShadow: "0 6px 18px rgba(196,38,78,0.32), inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
          >
            Empezar
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
      className="px-3.5 py-2 rounded-md text-[13px] font-medium transition-colors"
      style={{ color: active ? "var(--color-txt)" : "var(--color-txt2)" }}
    >
      {children}
    </Link>
  );
}
