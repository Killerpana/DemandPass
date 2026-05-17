// src/components/marketing/ArtistDetail.tsx
// Artist landing page — server component composing hero, momentum chart,
// active campaign card, setlist preview, demand by country, related artists.
import Link from "next/link";
import { Pill } from "@/components/ui/Pill";
import { Progress } from "@/components/ui/Progress";
import { Sparkline } from "@/components/ui/Sparkline";
import { ArtistMomentumChart } from "./ArtistMomentumChart";
import type { Artist } from "@/lib/artists-data";
import { campaignsForArtist, demandByCountry, relatedArtists } from "@/lib/artists-data";

export function ArtistDetail({ artist }: { artist: Artist }) {
  const list = campaignsForArtist(artist.name);
  const activeCampaign = list[0];
  const countries = demandByCountry(artist.name);
  const totalDemand = countries.reduce((acc, c) => acc + c.n, 0);
  const related = relatedArtists(artist.name);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-12 pt-16 pb-8" style={{ minHeight: 480 }}>
        <div
          className="absolute -top-[8%] -right-[2%] uppercase select-none pointer-events-none leading-[0.78]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 560,
            color: "rgba(196,38,78,0.045)",
            letterSpacing: "-0.04em",
          }}
        >
          {artist.initials}
        </div>
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-[1344px] mx-auto">
          <div className="text-[12px] text-[var(--color-txt3)] mb-6 flex gap-1.5">
            <Link href="/artists" className="hover:text-[var(--color-txt)]">Artistas</Link>
            <span>›</span>
            <span style={{ color: "var(--color-txt)" }}>{artist.name}</span>
          </div>

          <div className="grid items-end gap-8" style={{ gridTemplateColumns: "160px 1fr auto" }}>
            <div
              className="w-40 h-40 rounded-xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${artist.color}30, ${artist.color}90)`,
                border: "1px solid var(--color-border2)",
                fontFamily: "var(--font-display)",
                fontSize: 72,
                fontWeight: 800,
                letterSpacing: "0.005em",
                boxShadow: "0 8px 24px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {artist.initials}
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-3.5">
                {activeCampaign && (
                  <Pill variant={activeCampaign.type === "official" ? "live" : "info"} pulse>
                    {activeCampaign.type === "official" ? "Campaña activa" : "Fan demand"}
                  </Pill>
                )}
                <Pill variant="mute">{artist.genres.join(" · ")}</Pill>
              </div>
              <h1
                className="uppercase"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(56px, 8vw, 96px)",
                  lineHeight: 0.9,
                  letterSpacing: "0.005em",
                }}
              >
                {artist.name}
              </h1>
              {activeCampaign && (
                <div className="text-[16px] text-[var(--color-txt2)] mt-3">
                  {activeCampaign.event} · LATAM 2026
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2.5">
              <button
                type="button"
                className="px-4 py-3 rounded-md text-[13px] font-bold uppercase tracking-[0.06em]"
                style={{
                  background: "var(--color-surface2)",
                  border: "1px solid var(--color-border2)",
                  color: "var(--color-txt)",
                }}
              >
                ♥ Seguir
              </button>
              {activeCampaign && (
                <Link
                  href={`/campaigns/${activeCampaign.id}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-[13px] font-bold uppercase tracking-[0.06em] text-white"
                  style={{
                    background: "var(--color-burg3)",
                    boxShadow: "0 6px 18px rgba(196,38,78,0.32), inset 0 1px 0 rgba(255,255,255,0.18)",
                  }}
                >
                  Apoyar <span aria-hidden>→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="px-12 border-y border-[var(--color-border)]">
        <div className="max-w-[1344px] mx-auto grid grid-cols-2 md:grid-cols-5 py-6">
          {([
            { l: "Demanda LATAM",   v: totalDemand >= 1000 ? `${(totalDemand / 1000).toFixed(1)}K` : `${totalDemand}`, d: "+1.2K · 7d",     dir: "up" as const },
            { l: "Países activos",  v: String(countries.length),                                                       d: "+ 2 nuevos",      dir: "up" as const },
            { l: "Precio promedio", v: activeCampaign ? activeCampaign.price.split("–")[0].replace(/[^0-9]/g, "") ? `USD ${activeCampaign.price.match(/\d+/)?.[0] ?? "—"}` : activeCampaign.price : "—", d: "+ USD 4",  dir: "up" as const },
            { l: "Probabilidad",    v: activeCampaign ? `${activeCampaign.certainty}%` : "—",                          d: "+ 6 pp",          dir: "up" as const, color: "var(--color-emerald2)" },
            { l: "Última visita",   v: artist.lastVisit,                                                                d: artist.lastVisitDetail, dir: "mute" as const },
          ] as const).map((s, i) => (
            <div
              key={s.l}
              className="px-6"
              style={{ borderLeft: i > 0 ? "1px solid var(--color-border)" : "none" }}
            >
              <div className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)] mb-1.5">
                {s.l}
              </div>
              <div
                className="text-[36px] font-extrabold leading-none tabular-nums"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "color" in s ? s.color : "var(--color-txt)",
                  letterSpacing: "0.005em",
                }}
              >
                {s.v}
              </div>
              <div
                className="text-[11px] mt-1.5 tabular-nums"
                style={{
                  color: s.dir === "up" ? "var(--color-emerald2)" : "var(--color-txt3)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {s.dir === "up" && "↑ "}
                {s.d}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="px-12 py-12 max-w-[1344px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-7">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Momentum chart */}
            <div className="rounded-xl overflow-hidden" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
              <div className="px-6 py-4 border-b border-[var(--color-border)] flex justify-between items-center flex-wrap gap-2">
                <div>
                  <div className="text-[15px] font-bold">Momentum de demanda</div>
                  <div className="text-[11px] text-[var(--color-txt3)] mt-0.5">
                    Apoyos acumulados · últimos 90 días · LATAM
                  </div>
                </div>
                <div className="flex gap-1">
                  {(["30d", "90d", "6m", "1a"] as const).map((r, i) => (
                    <button
                      key={r}
                      type="button"
                      className="px-2.5 py-1 text-[11px] font-semibold rounded"
                      style={{
                        background: i === 1 ? "var(--color-surface3)" : "transparent",
                        border: `1px solid ${i === 1 ? "var(--color-border2)" : "var(--color-border)"}`,
                        color: i === 1 ? "var(--color-txt)" : "var(--color-txt2)",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <ArtistMomentumChart
                  target={activeCampaign?.current ?? 5420}
                />
              </div>
            </div>

            {/* About */}
            <div className="rounded-xl p-7" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
              <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)] mb-3">
                Sobre el tour
              </div>
              <p className="text-[15px] leading-[1.6] text-[var(--color-txt)]">{artist.bio}</p>
            </div>

            {/* Setlist */}
            <div className="rounded-xl overflow-hidden" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
              <div className="px-6 py-4 border-b border-[var(--color-border)] flex justify-between items-center flex-wrap gap-2">
                <div>
                  <div className="text-[15px] font-bold">Setlist probable</div>
                  <div className="text-[11px] text-[var(--color-txt3)] mt-0.5">
                    Basado en últimos 12 shows · {artist.setlist.length}+ canciones · ~2h
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-bold"
                  style={{ background: "#1ED760", color: "#000", fontFamily: "var(--font-sans)" }}
                >
                  ♪ Abrir en Spotify
                </button>
              </div>
              {artist.setlist.map((s) => (
                <div
                  key={s.title}
                  className="grid items-center gap-4 px-6 py-3 text-[13px] border-b border-[var(--color-border)]"
                  style={{ gridTemplateColumns: "32px 1fr auto auto" }}
                >
                  <span className="text-[var(--color-txt3)] tabular-nums" style={{ fontFamily: "var(--font-mono)" }}>
                    {s.n}
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span className="font-medium text-[var(--color-txt)]">{s.title}</span>
                    {s.hit && <Pill variant="hot" glyph="▲">Hit</Pill>}
                  </div>
                  <Sparkline data={s.demand} width={48} height={14} color="var(--color-txt3)" filled={false} showEnd={false} />
                  <span className="text-[var(--color-txt2)] tabular-nums" style={{ fontFamily: "var(--font-mono)" }}>
                    {s.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            {/* Active campaign card */}
            {activeCampaign && (
              <div className="rounded-xl overflow-hidden" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
                <div
                  className="h-[100px] flex items-center justify-between px-6 relative"
                  style={{ background: `linear-gradient(135deg, ${artist.color}40, ${artist.color}90)` }}
                >
                  <Pill variant={activeCampaign.type === "official" ? "live" : "info"} pulse>
                    {activeCampaign.type === "official" ? "Campaña activa" : "Fan demand"}
                  </Pill>
                  <span
                    className="uppercase leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 60,
                      color: "rgba(255,255,255,0.18)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {activeCampaign.city.slice(0, 3).toUpperCase()}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-[16px] font-bold mb-1">{activeCampaign.city} · {activeCampaign.country}</div>
                  <div className="text-[12px] text-[var(--color-txt2)] mb-5">
                    Cierra en {activeCampaign.days} días
                  </div>
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="text-[16px] font-bold tabular-nums" style={{ fontFamily: "var(--font-mono)" }}>
                      {activeCampaign.current.toLocaleString("es-AR")}
                      <span className="text-[13px] text-[var(--color-txt3)] font-normal">
                        {" / "}{activeCampaign.goal.toLocaleString("es-AR")}
                      </span>
                    </span>
                    <span
                      className="text-[16px] font-bold tabular-nums"
                      style={{ color: "var(--color-burg3)", fontFamily: "var(--font-mono)" }}
                    >
                      {Math.round((activeCampaign.current / activeCampaign.goal) * 100)}%
                    </span>
                  </div>
                  <Progress value={(activeCampaign.current / activeCampaign.goal) * 100} />
                  <Link
                    href={`/campaigns/${activeCampaign.id}`}
                    className="mt-5 flex items-center justify-center gap-2 w-full py-3 rounded-md text-[13px] font-bold uppercase tracking-[0.06em] text-white"
                    style={{
                      background: "var(--color-burg3)",
                      boxShadow: "0 6px 18px rgba(196,38,78,0.32), inset 0 1px 0 rgba(255,255,255,0.18)",
                    }}
                  >
                    Apoyar campaña <span aria-hidden>→</span>
                  </Link>
                  <div className="mt-2.5 text-[11px] text-center text-[var(--color-txt3)]">
                    Reserva condicional · 100% reembolsable
                  </div>
                </div>
              </div>
            )}

            {/* Demand by country */}
            <div className="rounded-xl overflow-hidden" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
              <div className="px-5 py-4 border-b border-[var(--color-border)]">
                <div className="text-[14px] font-bold">Demanda por país</div>
                <div className="text-[11px] text-[var(--color-txt3)] mt-0.5">
                  {totalDemand >= 1000 ? `${(totalDemand / 1000).toFixed(1)}K` : totalDemand} apoyos LATAM
                </div>
              </div>
              <div className="p-5">
                {countries.map((c) => (
                  <div
                    key={c.country}
                    className="grid items-center gap-2.5 py-1.5 text-[12px]"
                    style={{ gridTemplateColumns: "20px 80px 1fr 50px" }}
                  >
                    <span className="text-[14px]">{c.flag}</span>
                    <span className="text-[var(--color-txt)]">{c.country}</span>
                    <Progress value={c.p} height={4} />
                    <span className="text-right tabular-nums text-[var(--color-txt2)]" style={{ fontFamily: "var(--font-mono)" }}>
                      {c.n.toLocaleString("es-AR")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related */}
            <div className="rounded-xl overflow-hidden" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
              <div className="px-5 py-4 border-b border-[var(--color-border)]">
                <div className="text-[14px] font-bold">Si te gusta {artist.name}, mirá</div>
              </div>
              <div>
                {related.map((r, i) => (
                  <Link
                    key={r.name}
                    href={`/artists/${r.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-5 py-3 flex items-center gap-3"
                    style={{
                      borderBottom: i < related.length - 1 ? "1px solid var(--color-border)" : "none",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded flex items-center justify-center text-[12px] font-bold"
                      style={{
                        background: "var(--color-surface3)",
                        border: "1px solid var(--color-border2)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {r.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-semibold">{r.name}</div>
                      <div className="text-[11px] text-[var(--color-txt3)]">{r.genres} · {r.status}</div>
                    </div>
                    <span className="text-[var(--color-txt3)] text-[12px]" aria-hidden>→</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
