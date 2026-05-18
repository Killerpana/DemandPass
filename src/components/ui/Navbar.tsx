"use client";
// src/components/ui/Navbar.tsx — inspirado en Header1 de 21st.dev/efferd
// Mejoras: scroll blur dinámico, active indicator animado, mobile menu

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";

const NAV_LINKS = [
  { label: "Campañas",      href: "/campaigns" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Productoras",   href: "/dashboard" },
  { label: "Planes",        href: "/#planes" },
];

export function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [path]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return path === "/";
    return path.startsWith(href);
  };

  return (
    <>
      <a
        href="#main-content"
        className="absolute top-[-40px] left-0 bg-[var(--color-burg)] text-white px-4 py-2 rounded-br-lg text-[13px] font-semibold z-[9999] focus:top-0 transition-all"
      >
        Ir al contenido
      </a>

      <nav
        className="sticky top-0 z-[200] h-16 px-6 md:px-12 flex items-center gap-8 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8,8,13,0.95)" : "rgba(8,8,13,0.7)",
          backdropFilter: scrolled ? "blur(20px) saturate(200%)" : "blur(8px)",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(200%)" : "blur(8px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.04)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
        }}
        aria-label="Navegación principal"
      >
        <Logo height={36} href="/" />

        <div className="hidden md:flex gap-1 ml-4">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.href} href={l.href} active={isActive(l.href)}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex ml-auto items-center gap-3">
          <Link
            href="/signin"
            className="px-3.5 py-2 rounded-md text-[12px] font-bold uppercase tracking-[0.06em] border text-[var(--color-txt)] transition-colors hover:border-[var(--color-burg3)]"
            style={{ borderColor: "var(--color-border2)" }}
          >
            Ingresar
          </Link>
          <Link
            href="/campaigns"
            className="px-4 py-2 rounded-md text-[12px] font-bold uppercase tracking-[0.06em] text-white transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--color-burg3)",
              boxShadow: "0 6px 18px rgba(196,38,78,0.32), inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
          >
            Empezar
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="ml-auto md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md"
          style={{ background: menuOpen ? "var(--color-surface2)" : "transparent" }}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span className="block w-5 h-[1.5px] rounded-full transition-all duration-300" style={{ background: "var(--color-txt)", transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none" }} />
          <span className="block w-5 h-[1.5px] rounded-full transition-all duration-300" style={{ background: "var(--color-txt)", opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-[1.5px] rounded-full transition-all duration-300" style={{ background: "var(--color-txt)", transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none" }} />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[199] md:hidden flex flex-col pt-16" style={{ background: "rgba(8,8,13,0.98)", backdropFilter: "blur(20px)" }}>
          <div className="flex flex-col px-6 pt-6 gap-1">
            {NAV_LINKS.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-4 text-[22px] font-bold uppercase tracking-[0.04em] border-b flex items-center justify-between"
                style={{
                  fontFamily: "var(--font-display)",
                  borderColor: "var(--color-border)",
                  color: isActive(l.href) ? "var(--color-burg3)" : "var(--color-txt)",
                  animationDelay: `${i * 60}ms`,
                  animation: "dp-vt-fade-in 0.3s ease both",
                }}
              >
                {l.label}
                <span style={{ color: "var(--color-burg3)" }}>→</span>
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-8">
              <Link href="/signin" className="w-full py-3.5 text-center rounded-md text-[13px] font-bold uppercase tracking-[0.06em] border" style={{ borderColor: "var(--color-border2)", color: "var(--color-txt)" }}>Ingresar</Link>
              <Link href="/campaigns" className="w-full py-3.5 text-center rounded-md text-[13px] font-bold uppercase tracking-[0.06em] text-white" style={{ background: "var(--color-burg3)", boxShadow: "0 6px 18px rgba(196,38,78,0.32)" }}>Empezar ahora</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="relative px-3.5 py-2 rounded-md text-[13px] font-medium transition-colors group"
      style={{ color: active ? "var(--color-txt)" : "var(--color-txt2)" }}
    >
      {children}
      <span
        className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] rounded-full transition-all duration-300"
        style={{ background: "var(--color-burg3)", opacity: active ? 1 : 0, transform: active ? "scaleX(1)" : "scaleX(0)", transformOrigin: "center" }}
      />
    </Link>
  );
}
