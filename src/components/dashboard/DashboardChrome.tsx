// src/components/dashboard/DashboardChrome.tsx
// Sidebar + sub-header for the producer dashboard.
// Sits BELOW the global Navbar (root layout) so it works without
// restructuring the app routes.
"use client";

import Link from "next/link";
import { useState } from "react";
import { orgInfo } from "@/lib/dashboard-data";

const NAV_ITEMS = [
  { id: "overview",     g: "◎", l: "Overview" },
  { id: "campaigns",    g: "◆", l: "Campañas",         n: 8 },
  { id: "demand",       g: "◢", l: "Demanda live" },
  { id: "fans",         g: "◌", l: "Fans verificados" },
  { id: "forecasts",    g: "◈", l: "Forecasts" },
  { id: "venues",       g: "◇", l: "Venues" },
  { id: "integrations", g: "◉", l: "Integraciones" },
];

export function DashboardSidebar({ active = "overview" }: { active?: string }) {
  return (
    <aside
      className="w-[232px] shrink-0 flex flex-col py-5 px-4"
      style={{
        background: "var(--color-surface)",
        borderRight: "1px solid var(--color-border)",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      {/* Org switcher */}
      <button
        type="button"
        className="flex items-center gap-2.5 px-3 py-2.5 rounded-md mb-5"
        style={{
          background: "var(--color-surface2)",
          border: "1px solid var(--color-border2)",
          color: "var(--color-txt)",
          fontFamily: "var(--font-sans)",
        }}
      >
        <div
          className="w-[26px] h-[26px] rounded shrink-0 flex items-center justify-center text-[12px] font-extrabold"
          style={{
            background: "var(--color-surface3)",
            border: "1px solid var(--color-border2)",
            fontFamily: "var(--font-display)",
            letterSpacing: "0.005em",
          }}
        >
          {orgInfo.shortCode}
        </div>
        <div className="flex-1 text-left min-w-0">
          <div className="text-[12px] font-bold truncate">{orgInfo.name}</div>
          <div className="text-[10px] text-[var(--color-txt3)]">{orgInfo.plan}</div>
        </div>
        <span className="text-[var(--color-txt3)] text-[12px]" aria-hidden>▾</span>
      </button>

      <div className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)] px-3 mb-2">
        Navegación
      </div>

      <nav className="flex flex-col gap-0.5">
        {NAV_ITEMS.map((it) => {
          const sel = active === it.id;
          return (
            <button
              key={it.id}
              type="button"
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-left transition-colors relative"
              style={{
                background: sel ? "rgba(196,38,78,0.10)" : "transparent",
                color: sel ? "var(--color-txt)" : "var(--color-txt)",
                fontSize: 13, fontFamily: "var(--font-sans)",
                fontWeight: 500,
              }}
            >
              {sel && (
                <span
                  className="absolute left-0 top-2 bottom-2 w-0.5 rounded"
                  style={{ background: "var(--color-burg3)" }}
                />
              )}
              <span
                className="text-[14px] w-3.5 inline-block"
                style={{ color: sel ? "var(--color-burg3)" : "var(--color-txt3)" }}
                aria-hidden
              >
                {it.g}
              </span>
              <span className="flex-1">{it.l}</span>
              {it.n != null && (
                <span
                  className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full tabular-nums"
                  style={{
                    background: "var(--color-surface3)",
                    color: "var(--color-txt2)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {it.n}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* System status */}
      <div className="mt-auto pt-4 border-t border-[var(--color-border)]">
        <div
          className="p-3 rounded-md"
          style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="dot-pulse" style={{ background: "var(--color-emerald2)" }} />
            <span
              className="text-[10px] uppercase tracking-[0.14em] font-semibold"
              style={{ color: "var(--color-emerald2)" }}
            >
              System nominal
            </span>
          </div>
          <div className="text-[11px] text-[var(--color-txt2)]">
            Última ingesta:{" "}
            <span className="text-[var(--color-txt)]" style={{ fontFamily: "var(--font-mono)" }}>
              4s atrás
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function DashboardSubHeader() {
  const [env, setEnv] = useState<"prod" | "sandbox">("prod");

  return (
    <header
      className="h-[60px] shrink-0 flex items-center gap-4 px-7 border-b"
      style={{
        background: "var(--color-bg)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Env switcher */}
      <div
        className="flex gap-0.5 p-0.5 rounded-md"
        style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}
      >
        {(["prod", "sandbox"] as const).map((e) => {
          const sel = env === e;
          return (
            <button
              key={e}
              type="button"
              onClick={() => setEnv(e)}
              className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] rounded-sm"
              style={{
                background: sel ? "var(--color-surface3)" : "transparent",
                color: sel ? "var(--color-txt)" : "var(--color-txt2)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {e === "prod" ? "Producción" : "Sandbox"}
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div
        className="flex-1 max-w-[420px] flex items-center gap-2.5 px-3.5 py-2 rounded-md"
        style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border2)" }}
      >
        <span className="text-[13px] text-[var(--color-txt3)]" aria-hidden>⌕</span>
        <input
          type="search"
          placeholder="Buscar campaña, artista, ciudad…"
          className="flex-1 bg-transparent outline-none text-[13px] text-[var(--color-txt)]"
          style={{ fontFamily: "var(--font-sans)" }}
        />
        <span
          className="text-[10px] px-1.5 py-0.5 rounded text-[var(--color-txt3)]"
          style={{
            background: "var(--color-surface3)",
            border: "1px solid var(--color-border)",
            fontFamily: "var(--font-mono)",
          }}
        >
          ⌘K
        </span>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <Link
          href="/campaigns"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-[12px] font-bold uppercase tracking-[0.06em] text-white"
          style={{
            background: "var(--color-burg3)",
            boxShadow: "0 6px 18px rgba(196,38,78,0.32), inset 0 1px 0 rgba(255,255,255,0.18)",
          }}
        >
          <span>+</span> Nueva campaña
        </Link>
        <div className="w-px h-6" style={{ background: "var(--color-border)" }} />
        <button
          type="button"
          className="w-9 h-9 rounded-md relative inline-flex items-center justify-center"
          style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)", color: "var(--color-txt)" }}
        >
          ◉
          <span
            className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--color-burg3)", border: "1.5px solid var(--color-surface2)" }}
          />
        </button>
      </div>
    </header>
  );
}

export function DashboardPageHeader({
  title,
  breadcrumbs,
  actions,
}: {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
  actions?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between mb-6 gap-4 flex-wrap">
      <div>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="text-[12px] text-[var(--color-txt3)] mb-1.5 flex gap-1.5 flex-wrap">
            {breadcrumbs.map((b, i) => (
              <span key={`${b.label}-${i}`}>
                {b.href ? <Link href={b.href}>{b.label}</Link> : b.label}
                {i < breadcrumbs.length - 1 && <span className="ml-1.5">›</span>}
              </span>
            ))}
          </div>
        )}
        <h1
          className="uppercase"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 36, lineHeight: 1,
            letterSpacing: "0.005em",
          }}
        >
          {title}
        </h1>
      </div>
      {actions && <div className="flex gap-2 flex-wrap">{actions}</div>}
    </div>
  );
}
