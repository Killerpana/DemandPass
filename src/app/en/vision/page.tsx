import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vision",
  description: "DemandPass is the intelligence layer before ticketing: verified demand before a show is confirmed.",
};

const HORIZONS = [
  {
    n: "H1",
    t: "The tool",
    d: "Demand-validation campaigns as a service for promoters. The promoter and the artist bring their audience; DemandPass measures city, accepted price and real purchase intent, and delivers an actionable report before venue or talent is signed.",
  },
  {
    n: "H2",
    t: "The data layer",
    d: "With campaigns accumulated, DemandPass stops selling one-off campaigns and starts selling market knowledge: city and genre benchmarks, regional price elasticity and Tour Expansion Intelligence by subscription. The dataset nobody has in LATAM today: willingness to pay, by city.",
  },
  {
    n: "H3",
    t: "The rail",
    d: "The conditional reservation and the Priority Pass as the regional standard for launching shows under uncertainty. DemandPass becomes the infrastructure purchase intent flows through before ticketing — in LATAM and in any market with the same capital-vs-interior asymmetry.",
  },
] as const;

const WHY_NOW = [
  { t: "The industry decides blind", d: "Booking runs on streams and social media: they measure attention, not purchase intent. The gap between listening and paying still has no owner." },
  { t: "Secondary cities are underserved", d: "Shows concentrate in capital cities. Every date not opened in Córdoba, Rosario or Montevideo is revenue the industry leaves on the table." },
  { t: "Costly signals predict", d: "A conditional reservation backed with money is the only demand signal that behaves like a purchase. That is what DemandPass measures." },
] as const;

export default function VisionPageEN() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <div className="flex items-center justify-between mb-3">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-txt3">The vision</p>
        <Link href="/vision" className="font-mono text-xs uppercase tracking-[0.2em] text-txt3 hover:text-txt transition-colors">ES →</Link>
      </div>
      <h1 className="font-condensed text-5xl md:text-7xl font-extrabold uppercase leading-[0.95] mb-8">
        The intelligence layer<br />before ticketing.
      </h1>

      <div className="space-y-5 text-[16px] leading-relaxed text-txt2 mb-16">
        <p>
          In live music, the most expensive decisions are made with the poorest signals. A promoter commits
          talent fee, venue and production before selling a single ticket — with streams, followers and
          intuition as the only evidence.
        </p>
        <p>
          <strong className="text-txt">DemandPass turns purchase intent into a measurable data point before the show exists.</strong>{" "}
          Fans express real demand by city, price and ticket type — and can back it with a refundable
          conditional reservation. Promoters decide on that signal, and the final sale always happens at the
          official ticketing company.
        </p>
      </div>

      <p className="font-mono text-xs uppercase tracking-[0.2em] text-txt3 mb-6">Why now</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
        {WHY_NOW.map((w) => (
          <div key={w.t} className="rounded-lg p-5" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "var(--color-surface)" }}>
            <div className="font-condensed text-lg font-extrabold uppercase mb-2">{w.t}</div>
            <p className="text-[13px] leading-relaxed text-txt2">{w.d}</p>
          </div>
        ))}
      </div>

      <p className="font-mono text-xs uppercase tracking-[0.2em] text-txt3 mb-6">How it grows</p>
      <div className="flex flex-col gap-5 mb-16">
        {HORIZONS.map((h) => (
          <div key={h.n} className="rounded-lg p-6 flex gap-6 items-start" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "var(--color-surface)" }}>
            <div className="font-condensed text-3xl font-extrabold shrink-0" style={{ color: "var(--color-burg3)" }}>{h.n}</div>
            <div>
              <div className="font-condensed text-2xl font-extrabold uppercase mb-2">{h.t}</div>
              <p className="text-[14px] leading-relaxed text-txt2">{h.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg p-8 text-center" style={{ border: "1px solid rgba(255,255,255,0.10)", background: "var(--color-surface)" }}>
        <div className="font-condensed text-3xl font-extrabold uppercase mb-3">See it in action</div>
        <p className="text-[14px] text-txt2 mb-6">
          This demo walks the full flow with simulated data: from a fan backing a campaign to the dashboard a
          promoter decides with. The product UI is currently in Spanish.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/campaigns"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[14px] font-bold uppercase tracking-[0.06em] text-white"
            style={{ background: "var(--color-burg3)", boxShadow: "0 6px 18px rgba(196,38,78,0.32)" }}
          >
            Start as a fan <span aria-hidden>→</span>
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[14px] font-bold uppercase tracking-[0.06em] text-txt"
            style={{ border: "1px solid rgba(255,255,255,0.18)" }}
          >
            See the B2B dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
