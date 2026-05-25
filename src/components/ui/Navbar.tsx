"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { Users, Music2, Building2, UserCircle2 } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const INICIO_LINKS = [
  { label: "Cómo funciona", href: "/#como-funciona", desc: "El flujo en 3 pasos"      },
  { label: "Planes",        href: "/#planes",        desc: "Fan, Artista y Productora" },
  { label: "FAQ",           href: "/#faq",           desc: "Preguntas frecuentes"      },
];
const BRANCH_LINKS = [
  { label: "Fans",        href: "/fans"        },
  { label: "Artistas",    href: "/artistas"    },
  { label: "Productoras", href: "/productoras" },
];
const USER_MENU = [
  { label: "Mi perfil — Fan",           href: "/perfil",             Icon: Users     },
  { label: "Mi campaña — Artista",      href: "/artistas/dashboard", Icon: Music2    },
  { label: "Mi dashboard — Productora", href: "/dashboard",          Icon: Building2 },
];

const NAV_STYLE = {
  fontFamily: "var(--font-display)",
  fontSize: "15px",
  fontWeight: 700,
  letterSpacing: "0.05em",
  textTransform: "uppercase" as const,
};

// Rutas con sidebar propio — sin navbar superior
const SIDEBAR_ROUTES = ["/perfil", "/fan", "/artistas/dashboard", "/dashboard"];

export function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  // Ocultar navbar en rutas con sidebar propio
  const hasSidebar = SIDEBAR_ROUTES.some(r => path === r || path.startsWith(r + "/"));

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); setDropOpen(false); setUserOpen(false); }, [path]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
      if (userRef.current && !userRef.current.contains(e.target as Node)) setUserOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const isActive  = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return path === "/";
    return path === href || path.startsWith(href + "/");
  };

  if (hasSidebar) return null;

  return (
    <>
      <a href="#main-content" className="absolute top-[-40px] left-0 bg-[var(--color-burg)] text-white px-4 py-2 rounded-br-lg text-[13px] font-semibold z-[9999] focus:top-0 transition-all">
        Ir al contenido
      </a>

      <nav className="sticky top-0 z-[200] h-16 px-6 md:px-10 flex items-center gap-1 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8,8,13,0.96)" : "rgba(8,8,13,0.72)",
          backdropFilter: scrolled ? "blur(24px) saturate(200%)" : "blur(8px)",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(200%)" : "blur(8px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.09)" : "1px solid rgba(255,255,255,0.04)",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.5)" : "none",
        }}
        aria-label="Navegación principal">

        <Logo height={22} href="/" />

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-0.5 ml-6">
          {/* Inicio dropdown */}
          <div ref={dropRef} className="relative">
            <button onClick={() => setDropOpen(v => !v)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-md transition-colors hover:bg-white/5"
              style={{ ...NAV_STYLE, color: dropOpen ? "var(--color-txt)" : "var(--color-txt2)" }}>
              Inicio
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                style={{ transition: "transform 200ms", transform: dropOpen ? "rotate(180deg)" : "none" }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {dropOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 rounded-xl overflow-hidden"
                style={{ background: "rgba(14,14,20,0.99)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 48px rgba(0,0,0,0.7)" }}>
                {INICIO_LINKS.map(l => (
                  <Link key={l.href} href={l.href} onClick={() => setDropOpen(false)}
                    className="flex flex-col px-4 py-3 transition-colors hover:bg-white/5">
                    <span style={{ ...NAV_STYLE, fontSize: "13px", color: "var(--color-txt)" }}>{l.label}</span>
                    <span className="text-[11px] mt-0.5" style={{ color: "var(--color-txt3)" }}>{l.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="w-px h-4 mx-2" style={{ background: "rgba(255,255,255,0.12)" }} />

          {BRANCH_LINKS.map(l => (
            <NavLink key={l.href} href={l.href} active={isActive(l.href)}>{l.label}</NavLink>
          ))}
        </div>

        {/* CTAs desktop */}
        <div className="hidden md:flex ml-auto items-center gap-2.5">
          <div ref={userRef} className="relative">
            <button onClick={() => setUserOpen(v => !v)}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/5"
              style={{ border: "1px solid var(--color-border2)", background: userOpen ? "rgba(255,255,255,0.06)" : "transparent" }}>
              <UserCircle2 size={18} color="var(--color-txt2)" strokeWidth={1.75} />
            </button>
            {userOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 rounded-xl overflow-hidden z-50"
                style={{ background: "rgba(14,14,20,0.99)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 48px rgba(0,0,0,0.7)" }}>
                <p className="px-4 pt-3 pb-1 text-[10px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--color-txt3)" }}>Acceder como</p>
                {USER_MENU.map(({ label, href, Icon }) => (
                  <Link key={href} href={href} onClick={() => setUserOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(163,22,69,0.15)" }}>
                      <Icon size={13} color="#E43A66" strokeWidth={2} />
                    </div>
                    <span style={{ ...NAV_STYLE, fontSize: "12px", color: "var(--color-txt)" }}>{label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/signin"
            className="px-5 py-2 rounded-md text-white transition-transform hover:-translate-y-0.5"
            style={{ ...NAV_STYLE, fontSize: "13px", background: "var(--color-burg3)", boxShadow: "0 6px 18px rgba(196,38,78,0.35), inset 0 1px 0 rgba(255,255,255,0.18)" }}>
            Empezar
          </Link>
        </div>

        {/* Hamburguesa mobile */}
        <button type="button" onClick={() => setMenuOpen(v => !v)}
          className="ml-auto md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md"
          style={{ background: menuOpen ? "var(--color-surface2)" : "transparent" }}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>
          <span className="block w-5 h-[1.5px] rounded-full transition-all duration-300"
            style={{ background: "var(--color-txt)", transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none" }} />
          <span className="block w-5 h-[1.5px] rounded-full transition-all duration-300"
            style={{ background: "var(--color-txt)", opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-[1.5px] rounded-full transition-all duration-300"
            style={{ background: "var(--color-txt)", transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className="fixed inset-0 z-[199] md:hidden flex flex-col pt-16 transition-all duration-300"
        style={{ background: "rgba(8,8,13,0.98)", backdropFilter: "blur(20px)", opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "all" : "none", transform: menuOpen ? "translateY(0)" : "translateY(-8px)" }}
        aria-hidden={!menuOpen}>
        <div className="flex flex-col px-6 pt-4 gap-0">
          {[...BRANCH_LINKS, ...INICIO_LINKS].map((l, i) => (
            <Link key={l.href} href={l.href} onClick={closeMenu}
              className="py-4 border-b flex items-center justify-between"
              style={{ ...NAV_STYLE, fontSize: "20px", borderColor: "var(--color-border)", color: isActive(l.href) ? "var(--color-burg3)" : "var(--color-txt)", transitionDelay: menuOpen ? `${i * 35}ms` : "0ms" }}>
              {l.label}
              <span style={{ color: "var(--color-burg3)", fontFamily: "monospace", fontSize: "14px" }}>→</span>
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-8">
            <Link href="/signin" onClick={closeMenu}
              className="w-full py-3.5 text-center rounded-md text-white"
              style={{ ...NAV_STYLE, fontSize: "13px", background: "var(--color-burg3)", boxShadow: "0 6px 18px rgba(196,38,78,0.32)" }}>
              Empezar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link href={href} aria-current={active ? "page" : undefined}
      className="relative px-4 py-2 rounded-md transition-colors hover:bg-white/5"
      style={{ ...NAV_STYLE, fontSize: "15px", color: active ? "var(--color-txt)" : "var(--color-txt2)" }}>
      {children}
      <span className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full transition-all duration-300"
        style={{ background: "var(--color-burg3)", opacity: active ? 1 : 0, transform: active ? "scaleX(1)" : "scaleX(0)", transformOrigin: "center" }} />
    </Link>
  );
}
