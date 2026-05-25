"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart2, Users, Bell, MessageSquare, Share2,
  PlusCircle, User, Settings, HelpCircle, Globe, LogOut, ChevronRight
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const NAV_MAIN = [
  { label: "Mi campaña",    href: "/artistas/dashboard",            Icon: BarChart2,     badge: null },
  { label: "Mis fans",      href: "/artistas/dashboard/fans",       Icon: Users,         badge: null },
  { label: "Actividad",     href: "/artistas/dashboard/actividad",  Icon: Bell,          badge: "5"  },
  { label: "Publicar",      href: "/artistas/dashboard/publicar",   Icon: MessageSquare, badge: null },
  { label: "Compartir",     href: "/artistas/dashboard/compartir",  Icon: Share2,        badge: null },
  { label: "Nueva campaña", href: "/artistas/dashboard/nueva",      Icon: PlusCircle,    badge: null },
];

const NAV_BOTTOM = [
  { label: "Mi perfil",     href: "/artistas/dashboard", Icon: User      },
  { label: "Configuración", href: "/artistas/dashboard", Icon: Settings  },
  { label: "Ayuda",         href: "/artistas/dashboard", Icon: HelpCircle},
  { label: "Ver sitio",     href: "/artistas",           Icon: Globe     },
];

export function ArtistShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  const isActive = (href: string) =>
    path === href || (href !== "/artistas/dashboard" && path.startsWith(href));

  return (
    <div className="flex min-h-screen" style={{ background: "var(--color-bg)" }}>
      <aside className="hidden md:flex w-[220px] shrink-0 flex-col border-r"
        style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}>

        {/* Logo + artista */}
        <div className="px-4 pt-5 pb-4 border-b" style={{ borderColor: "var(--color-border)" }}>
          <Logo height={20} href="/" />
          <div className="mt-3 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-black shrink-0"
              style={{ background: "rgba(139,92,246,0.2)", color: "#8b5cf6", fontFamily: "var(--font-display)" }}>
              LP
            </div>
            <div className="min-w-0">
              <p className="text-[12px] font-bold truncate">Los Planetas del Sur</p>
              <p className="text-[10px]" style={{ color: "var(--color-txt3)" }}>Plan Indie</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-0.5 px-2 py-3 flex-1">
          {NAV_MAIN.map(({ label, href, Icon, badge }) => {
            const active = isActive(href);
            return (
              <Link key={label} href={href}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-colors"
                style={{
                  background: active ? "rgba(139,92,246,0.1)" : "transparent",
                  color: active ? "var(--color-txt)" : "var(--color-txt3)",
                  borderLeft: active ? "2px solid #8b5cf6" : "2px solid transparent",
                }}>
                <Icon size={15} strokeWidth={active ? 2.2 : 1.8} />
                <span className="text-[13px] font-semibold flex-1">{label}</span>
                {badge && (
                  <span className="text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "#8b5cf6", color: "white" }}>{badge}</span>
                )}
                {active && <ChevronRight size={12} style={{ color: "#8b5cf6" }} />}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="px-2 py-3 border-t" style={{ borderColor: "var(--color-border)" }}>
          {NAV_BOTTOM.map(({ label, href, Icon }) => (
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

      <main className="flex-1 overflow-x-hidden">{children}</main>
    </div>
  );
}
