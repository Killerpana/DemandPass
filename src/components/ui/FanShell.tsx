"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Ticket, Search, Bell, Clock, User, Settings, LogOut, ChevronRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const NAV = [
  { label: "Campañas",         href: "/fan/campaigns",  Icon: Compass, badge: null },
  { label: "Mis DemandPasses", href: "/perfil",         Icon: Ticket,  badge: "3"  },
  { label: "Descubrir",        href: "/fan/descubrir",  Icon: Search,  badge: null },
  { label: "Alertas",          href: "/fan/alertas",    Icon: Bell,    badge: "2"  },
  { label: "Historial",        href: "/fan/historial",  Icon: Clock,   badge: null },
];

const BOTTOM = [
  { label: "Mi perfil",     href: "/perfil",  Icon: User     },
  { label: "Configuración", href: "/perfil",  Icon: Settings },
];

export function FanShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  const isActive = (href: string) =>
    path === href || path.startsWith(href + "/");

  return (
    <div className="flex min-h-screen" style={{ background: "var(--color-bg)" }}>

      {/* Sidebar */}
      <aside className="hidden md:flex w-[220px] shrink-0 flex-col border-r"
        style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}>

        {/* Logo + usuario */}
        <div className="px-4 pt-5 pb-4 border-b" style={{ borderColor: "var(--color-border)" }}>
          <Logo height={20} href="/" />
          <div className="mt-3 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-black shrink-0"
              style={{ background: "rgba(201,202,211,0.15)", color: "#C9CAD3", fontFamily: "var(--font-display)" }}>
              FB
            </div>
            <div className="min-w-0">
              <p className="text-[12px] font-bold truncate">Facundo Barile</p>
              <p className="text-[10px]" style={{ color: "var(--color-txt3)" }}>Fan Plata</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-0.5 px-2 py-3 flex-1">
          {NAV.map(({ label, href, Icon, badge }) => {
            const active = isActive(href);
            return (
              <Link key={label} href={href}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-colors"
                style={{
                  background: active ? "rgba(163,22,69,0.1)" : "transparent",
                  color: active ? "var(--color-txt)" : "var(--color-txt3)",
                  borderLeft: active ? "2px solid var(--color-burg3)" : "2px solid transparent",
                }}>
                <Icon size={15} strokeWidth={active ? 2.2 : 1.8} />
                <span className="text-[13px] font-semibold flex-1">{label}</span>
                {badge && (
                  <span className="text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "var(--color-burg3)", color: "white" }}>
                    {badge}
                  </span>
                )}
                {active && <ChevronRight size={12} style={{ color: "var(--color-burg3)" }} />}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="px-2 py-3 border-t" style={{ borderColor: "var(--color-border)" }}>
          {BOTTOM.map(({ label, href, Icon }) => (
            <Link key={label} href={href}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-colors"
              style={{ color: "var(--color-txt3)" }}>
              <Icon size={14} strokeWidth={1.8} />
              <span className="text-[12px] font-semibold">{label}</span>
            </Link>
          ))}
          <Link href="/"
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-colors mt-1"
            style={{ color: "var(--color-txt3)" }}>
            <LogOut size={14} strokeWidth={1.8} />
            <span className="text-[12px] font-semibold">Salir</span>
          </Link>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
