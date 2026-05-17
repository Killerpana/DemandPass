"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DemandPassLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size * 0.85} height={size} viewBox="0 0 85 100" fill="none" aria-hidden="true">
      <path d="M8 8 L8 92 L42 92 C68 92 78 76 78 50 C78 24 68 8 42 8 Z" fill="none" stroke="#8B0F35" strokeWidth="7" strokeLinejoin="round"/>
      <path d="M42 8 L65 8 L78 22" fill="none" stroke="#8B0F35" strokeWidth="7" strokeLinejoin="round"/>
      <rect x="22" y="68" width="8" height="16" rx="1.5" fill="#7A0F2E"/>
      <rect x="34" y="56" width="8" height="28" rx="1.5" fill="#9B1535"/>
      <rect x="46" y="44" width="8" height="40" rx="1.5" fill="#A31645"/>
      <line x1="18" y1="44" x2="60" y2="28" stroke="#08080D" strokeWidth="3.5"/>
    </svg>
  );
}

export function Navbar() {
  const path = usePathname();
  return (
    <>
      <a href="#main-content" className="absolute top-[-40px] left-0 bg-[var(--burg)] text-white px-4 py-2 rounded-br-lg text-[13px] font-semibold z-[9999] focus:top-0 transition-all">
        Ir al contenido
      </a>
      <nav className="navbar-glass sticky top-0 z-[200] flex items-center justify-between px-7 h-[60px] border-b border-[rgba(139,15,53,0.25)]" aria-label="Navegación principal">
        <Link href="/" aria-label="DemandPass — Inicio" className="flex items-center gap-3">
          <DemandPassLogo size={40} />
          <span className="font-[family-name:'Barlow_Condensed',sans-serif] text-[20px] font-black tracking-[1.5px] uppercase italic">
            <span className="text-[#F4F4F5]">DEMAND</span>
            <span className="text-[#A31645]">PASS</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <NavLink href="/campaigns" active={path.startsWith("/campaigns")}>Campañas</NavLink>
          <NavLink href="/dashboard" active={path === "/dashboard"}>Dashboard B2B</NavLink>
          <Link href="/campaigns" className="px-4 py-2 rounded bg-[var(--burg)] text-white text-[13px] font-black uppercase tracking-[1.5px] italic font-[family-name:'Barlow_Condensed',sans-serif] min-h-[36px] flex items-center hover:opacity-90 transition-opacity">
            Comenzar
          </Link>
        </div>
      </nav>
    </>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link href={href} aria-current={active ? "page" : undefined} className={`px-4 py-2 rounded text-[13px] font-semibold border min-h-[36px] flex items-center transition-all ${active ? "border-[var(--burg)] bg-[rgba(139,15,53,0.12)] text-[var(--burg3)]" : "border-[var(--border2)] bg-transparent text-[var(--txt2)] hover:border-[var(--border3)] hover:text-[var(--txt)]"}`}>
      {children}
    </Link>
  );
}
