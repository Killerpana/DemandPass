"use client";
// src/components/dashboard/DashboardChrome.tsx — íconos Lucide profesionales
import Link from "next/link";
import { useState } from "react";
import { orgInfo } from "@/lib/dashboard-data";
import {
  LayoutDashboard, Mic2, TrendingUp, Ticket, Zap,
  Building2, Plug, Search, Plus, Circle
} from "lucide-react";

const NAV_ITEMS = [
  { id: "overview",     icon: LayoutDashboard, l: "Overview" },
  { id: "campaigns",    icon: Mic2,            l: "Campañas",         n: 8 },
  { id: "demand",       icon: TrendingUp,      l: "Demanda live" },
  { id: "fans",         icon: Ticket,          l: "Fans verificados" },
  { id: "forecasts",    icon: Zap,             l: "Forecasts" },
  { id: "venues",       icon: Building2,       l: "Venues" },
  { id: "integrations", icon: Plug,            l: "Integraciones" },
];

export function DashboardSidebar({ active = "overview" }: { active?: string }) {
  return (
    <aside
      className="w-[220px] shrink-0 flex flex-col py-5 px-3"
      style={{
        background: "var(--color-surface)",
        borderRight: "1px solid var(--color-border)",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      {/* Org */}
      <div
        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl mb-6"
        style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}
      >
        <div
          className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-[13px] font-extrabold"
          style={{ background: "var(--color-burg3)", color: "#fff", fontFamily: "var(--font-display)" }}
        >
          {orgInfo.shortCode}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[12px] font-bold truncate">{orgInfo.name}</div>
          <div className="text-[10px]" style={{ color: "var(--color-burg3)" }}>{orgInfo.plan}</div>
        </div>
      </div>

      <nav className="flex flex-col gap-0.5">
        {NAV_ITEMS.map((it) => {
          const sel = active === it.id;
          const Icon = it.icon;
          return (
            <button
              key={it.id}
              type="button"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all"
              style={{
                background: sel ? "rgba(196,38,78,0.12)" : "transparent",
                color: sel ? "var(--color-txt)" : "var(--color-txt2)",
                fontSize: 13,
                fontWeight: sel ? 600 : 400,
                borderLeft: sel ? "2px solid var(--color-burg3)" : "2px solid transparent",
              }}
            >
              <Icon size={15} style={{ color: sel ? "var(--color-burg3)" : "var(--color-txt3)" }} />
              <span className="flex-1">{it.l}</span>
              {it.n && (
                <span
                  className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{ background: "var(--color-burg3)", color: "#fff" }}
                >
                  {it.n}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer status */}
      <div className="mt-auto pt-4 border-t border-[var(--color-border)]">
        <div className="flex items-center gap-2 px-3 py-2">
          <Circle size={8} fill="var(--color-emerald2)" style={{ color: "var(--color-emerald2)" }} />
          <div>
            <div className="text-[11px] font-semibold" style={{ color: "var(--color-emerald2)" }}>Sistema operativo</div>
            <div className="text-[10px]" style={{ color: "var(--color-txt3)" }}>34.2K apoyos en vivo</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function DashboardSubHeader() {
  const [env, setEnv] = useState<"prod" | "sand">("prod");
  return (
    <div
      className="h-12 px-6 flex items-center gap-4 border-b"
      style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
    >
      <div className="flex gap-1 p-0.5 rounded-lg" style={{ background: "var(--color-surface2)" }}>
        {(["prod", "sand"] as const).map((e) => (
          <button
            key={e}
            type="button"
            onClick={() => setEnv(e)}
            className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-[0.06em] transition-all"
            style={{
              background: env === e ? "var(--color-burg3)" : "transparent",
              color: env === e ? "#fff" : "var(--color-txt3)",
            }}
          >
            {e === "prod" ? "Producción" : "Sandbox"}
          </button>
        ))}
      </div>

      <div
        className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg max-w-sm"
        style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}
      >
        <Search size={13} style={{ color: "var(--color-txt3)" }} />
        <span className="text-[12px]" style={{ color: "var(--color-txt3)" }}>Buscar campaña, artista, ciudad...</span>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          className="px-4 py-1.5 rounded-lg text-[12px] font-bold uppercase tracking-[0.06em] flex items-center gap-1.5 text-white transition-transform hover:-translate-y-0.5"
          style={{ background: "var(--color-burg3)", boxShadow: "0 4px 12px rgba(196,38,78,0.3)" }}
        >
          <Plus size={13} />
          Nueva campaña
        </button>
      </div>
    </div>
  );
}

export function DashboardPageHeader({
  title,
  breadcrumbs,
  actions,
}: {
  title: string;
  breadcrumbs?: { label: string }[];
  actions?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        {breadcrumbs && (
          <div className="flex items-center gap-1.5 text-[11px] mb-2" style={{ color: "var(--color-txt3)" }}>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <span>›</span>}
                {b.label}
              </span>
            ))}
          </div>
        )}
        <h1
          className="uppercase leading-none"
          style={{ fontFamily: "var(--font-display)", fontSize: 32, letterSpacing: "0.005em" }}
        >
          {title}
        </h1>
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}
