// src/components/marketing/CampaignsBrowser.tsx
// Client component — filter state + responsive grid.
// Receives the full list of EnrichedCampaigns from the server.
"use client";

import { useMemo, useState } from "react";
import { CampaignCard } from "./CampaignCard";
import type { EnrichedCampaign, Genre } from "@/lib/marketing-data";

type TypeFilter = "all" | "official" | "fan" | "hot";
type SortKey = "popular" | "closing" | "recent" | "near-goal";

const TYPE_OPTIONS: Array<{ id: TypeFilter; label: string }> = [
  { id: "all",      label: "Todas" },
  { id: "official", label: "Oficiales" },
  { id: "fan",      label: "Fan demand" },
  { id: "hot",      label: "Alta demanda" },
];

const COUNTRIES = ["Todos", "Argentina", "México", "Colombia", "Chile", "Perú"] as const;
const GENRES: Array<"Todos" | Genre> = ["Todos", "Rock", "Pop", "Hip-Hop", "Electrónica", "Latin", "K-Pop", "Indie", "R&B"];
const SORT_OPTIONS: Array<{ id: SortKey; label: string }> = [
  { id: "popular",   label: "Más populares" },
  { id: "closing",   label: "Cierran antes" },
  { id: "recent",    label: "Recientes" },
  { id: "near-goal", label: "Cerca del objetivo" },
];

export function CampaignsBrowser({ campaigns }: { campaigns: EnrichedCampaign[] }) {
  const [type, setType]       = useState<TypeFilter>("all");
  const [country, setCountry] = useState<typeof COUNTRIES[number]>("Todos");
  const [genre, setGenre]     = useState<typeof GENRES[number]>("Todos");
  const [sort, setSort]       = useState<SortKey>("popular");
  const [search, setSearch]   = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let out = campaigns.filter((c) => {
      const pct = Math.round((c.current / c.goal) * 100);
      if (type === "official" && c.type !== "official") return false;
      if (type === "fan"      && c.type !== "fan")      return false;
      if (type === "hot"      && pct < 70)              return false;
      if (country !== "Todos" && c.country !== country) return false;
      if (genre   !== "Todos" && c.genre   !== genre)   return false;
      if (q) {
        const hay = `${c.artist} ${c.event} ${c.city} ${c.country}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    out = [...out].sort((a, b) => {
      switch (sort) {
        case "popular":   return b.current - a.current;
        case "closing":   return a.days - b.days;
        case "recent":    return b.id - a.id;
        case "near-goal": return (b.current / b.goal) - (a.current / a.goal);
      }
    });

    return out;
  }, [campaigns, type, country, genre, sort, search]);

  // Counts per type — for the type chips
  const counts = useMemo(() => {
    const all = campaigns.length;
    const official = campaigns.filter((c) => c.type === "official").length;
    const fan      = campaigns.filter((c) => c.type === "fan").length;
    const hot      = campaigns.filter((c) => (c.current / c.goal) >= 0.7).length;
    return { all, official, fan, hot } as Record<TypeFilter, number>;
  }, [campaigns]);

  return (
    <>
      {/* Filter bar */}
      <section className="px-5 md:px-12 py-5 border-b border-[var(--color-border)]" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-[1344px] mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-5">
            {/* Type chips */}
            <FilterGroup label="Tipo">
              <div className="flex gap-1.5 flex-wrap">
                {TYPE_OPTIONS.map(({ id, label }) => {
                  const active = type === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setType(id)}
                      className="px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.06em] rounded-full inline-flex items-center gap-1.5 transition-colors"
                      style={{
                        background: active ? "var(--color-burg3)" : "transparent",
                        color: active ? "#fff" : "var(--color-txt)",
                        border: `1px solid ${active ? "var(--color-burg3)" : "var(--color-border2)"}`,
                      }}
                    >
                      {label}
                      <span
                        className="text-[10px] tabular-nums"
                        style={{ opacity: 0.75, fontFamily: "var(--font-mono)" }}
                      >
                        {counts[id]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </FilterGroup>

            <FilterGroup label="País">
              <select value={country} onChange={(e) => setCountry(e.target.value as typeof COUNTRIES[number])}
                style={selectStyle}>
                {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </FilterGroup>

            <FilterGroup label="Género">
              <select value={genre} onChange={(e) => setGenre(e.target.value as typeof GENRES[number])}
                style={selectStyle}>
                {GENRES.map((g) => <option key={g}>{g}</option>)}
              </select>
            </FilterGroup>

            <FilterGroup label="Orden">
              <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}
                style={selectStyle}>
                {SORT_OPTIONS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
            </FilterGroup>
          </div>

          {/* Search */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-txt3)]">⌕</span>
            <input
              type="search"
              placeholder="Buscar artista, ciudad…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[280px] pl-9 pr-3 py-2 text-[13px] rounded-md outline-none"
              style={{
                background: "var(--color-surface2)",
                border: "1px solid var(--color-border2)",
                color: "var(--color-txt)",
                fontFamily: "var(--font-sans)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-5 md:px-12 py-8">
        <div className="max-w-[1344px] mx-auto">
          {/* Result count */}
          <div className="mb-6 flex items-baseline justify-between">
            <div className="text-[13px] text-[var(--color-txt2)]">
              Mostrando{" "}
              <span
                className="tabular-nums font-semibold text-[var(--color-txt)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {filtered.length}
              </span>{" "}
              de{" "}
              <span
                className="tabular-nums text-[var(--color-txt3)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {campaigns.length}
              </span>{" "}
              campañas
            </div>
            {filtered.length === 0 && (
              <button
                type="button"
                onClick={() => { setType("all"); setCountry("Todos"); setGenre("Todos"); setSearch(""); }}
                className="text-[12px] underline text-[var(--color-burg3)]"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div
              className="py-24 text-center rounded-xl"
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
            >
              <div className="text-[40px] mb-2">⌖</div>
              <div className="text-[15px] font-semibold mb-1">Sin resultados</div>
              <div className="text-[13px] text-[var(--color-txt2)]">
                Probá con otros filtros o buscá otro artista.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((c) => <CampaignCard key={c.id} c={c} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)]">{label}</span>
      {children}
    </div>
  );
}

const selectStyle: React.CSSProperties = {
  background: "var(--color-surface2)",
  border: "1px solid var(--color-border2)",
  color: "var(--color-txt)",
  fontFamily: "var(--font-sans)",
  padding: "6px 28px 6px 12px",
  borderRadius: 6,
  fontSize: 12,
  outline: "none",
  appearance: "none",
};
