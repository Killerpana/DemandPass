// src/components/marketing/Hero.tsx — top section of the redesigned landing.
// Server component; the live counter is handled inside DemandConsole (client).
import Link from "next/link";
import { Pill } from "@/components/ui/Pill";
import { DemandConsole } from "./DemandConsole";
import { BackgroundPaths } from "@/components/ui/BackgroundPaths";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { trustStats } from "@/lib/marketing-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Paths animadas */}
      <BackgroundPaths />

      {/* Grid + glow backgrounds */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute top-[-120px] right-[-120px] w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,38,78,0.18), transparent 65%)" }}
      />

      <div className="relative max-w-[1344px] mx-auto px-5 md:px-12 pt-10 md:pt-16 pb-8 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-16 items-start pt-4 md:pt-8">
          {/* Left — copy */}
          <div>
            <Pill variant="live" pulse>Plataforma activa · LATAM</Pill>

            <h1
              className="uppercase mt-6 mb-7"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(38px, 9vw, 96px)",
                lineHeight: 0.92,
                letterSpacing: "0.005em",
              }}
            >
              DEMANDA<br />
              <span style={{ color: "var(--color-burg3)" }}>VERIFICADA</span><br />
              PARA EVENTOS<br />
              EN VIVO.
            </h1>

            <p className="text-lg max-w-[540px] mb-9 leading-[1.55] text-[var(--color-txt2)]">
              Los <strong className="text-[var(--color-txt)]">fans</strong> expresan demanda real.
              Los <strong className="text-[var(--color-txt)]">artistas</strong> entienden su mercado.
              Las <strong className="text-[var(--color-txt)]">productoras</strong> deciden con datos —{" "}
              <strong className="text-[var(--color-txt)]">cuando la decisión todavía es tuya</strong>.
            </p>

            {/* CTA principal */}
            <div className="flex flex-col gap-5 mb-14">
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href="/fan/campaigns"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-md text-[15px] font-bold uppercase tracking-[0.06em] text-white transition-transform hover:-translate-y-0.5"
                  style={{
                    background: "var(--color-burg3)",
                    boxShadow: "0 8px 24px rgba(196,38,78,0.38), inset 0 1px 0 rgba(255,255,255,0.18)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Ver campañas activas <span aria-hidden>→</span>
                </Link>
                <Link href="/signin"
                  className="inline-flex items-center px-7 py-4 rounded-md text-[15px] font-bold uppercase tracking-[0.06em] transition-colors hover:bg-white/5"
                  style={{ border: "1px solid var(--color-border2)", color: "var(--color-txt)", fontFamily: "var(--font-display)" }}>
                  Empezar gratis
                </Link>
              </div>

            </div>

            {/* Trust strip */}
            <div className="grid grid-cols-3 gap-0 pt-6 md:pt-8 border-t border-[var(--color-border2)]">
              {trustStats.map((s, i) => (
                <div
                  key={s.l}
                  className={`px-2 md:px-6 ${i > 0 ? "border-l border-[var(--color-border2)]" : ""}`}
                >
                  <div
                    className="uppercase tabular-nums leading-none"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 5vw, 36px)", letterSpacing: "1px" }}
                  >
                    <AnimatedCounter
                      value={s.n}
                      suffix={s.suffix}
                      decimals={s.suffix === "M" ? 1 : 0}
                      duration={1600}
                    />
                  </div>
                  <div className="text-[12px] mt-1 font-semibold text-[var(--color-txt)]">{s.l}</div>
                  <div className="text-[11px] mt-0.5 text-[var(--color-txt3)]">{s.d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — live demand console */}
          <DemandConsole />
        </div>
      </div>
    </section>
  );
}
