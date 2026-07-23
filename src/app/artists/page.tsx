import type { Metadata } from "next";
import Link from "next/link";
import { ARTISTS } from "@/lib/artists-data";

export const metadata: Metadata = { title: "Artistas" };

export default function ArtistsIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-txt3 mb-3">Artistas en campaña</p>
      <h1 className="font-condensed text-5xl md:text-7xl font-extrabold uppercase leading-none mb-12">
        ¿Dónde están<br />sus fans?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {ARTISTS.map((a) => (
          <Link
            key={a.slug}
            href={`/artists/${a.slug}`}
            className="group rounded-lg p-6 transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.08)", background: "var(--color-surface)" }}
          >
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full font-condensed text-xl font-extrabold mb-5"
              style={{ background: `${a.color}22`, color: a.color, border: `1px solid ${a.color}55` }}
            >
              {a.initials}
            </div>
            <div className="font-condensed text-2xl font-extrabold uppercase leading-none mb-2">{a.name}</div>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-txt3 mb-4">
              {a.genres.join(" · ")}
            </div>
            <span className="inline-flex items-center gap-1.5 text-[13px] text-txt2 group-hover:text-txt transition-colors">
              Ver demanda <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
