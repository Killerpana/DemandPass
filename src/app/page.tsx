import type { Metadata } from "next";
import Link from "next/link";
import { campaigns } from "@/lib/data";
import { LiveToasts, AnimatedCounter } from "@/components/ui/LiveActivity";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "DemandPass — Demanda verificada para eventos en vivo",
  description: "Convertimos el apoyo de fans en datos reales antes de confirmar un show.",
};

export default function Home() {
  return (
    <>
      <LiveToasts />

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Backgrounds */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(139,15,53,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 80% 20%, rgba(139,15,53,0.06) 0%, transparent 50%)" }} />
        <div className="absolute top-0 bottom-0 right-[38%] w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(139,15,53,0.3), transparent)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <div className="animate-in inline-flex items-center gap-2 mb-8 px-4 py-2 rounded" style={{ background: "rgba(139,15,53,0.1)", border: "1px solid rgba(139,15,53,0.3)" }}>
                <span className="dot-pulse" />
                <span className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "var(--color-burg3)", fontFamily: "var(--font-condensed)" }}>
                  <AnimatedCounter start={12453} /> fans verificados
                </span>
              </div>

              <h1 className="animate-in animate-in-d1 uppercase leading-[0.92] mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(60px,7vw,96px)", letterSpacing: "3px", color: "var(--color-txt)" }}>
                DEMANDA<br />
                <span style={{ color: "var(--color-burg2)" }}>VERIFICADA</span><br />
                PARA EVENTOS<br />
                EN VIVO
              </h1>

              <p className="animate-in animate-in-d2 text-base leading-[1.7] max-w-[400px] mb-4 pl-4" style={{ color: "var(--color-txt2)", borderLeft: "2px solid var(--color-burg)" }}>
                DemandPass convierte el apoyo de fans en intención de compra verificable{" "}
                <strong style={{ color: "var(--color-txt)" }}>antes de confirmar un show.</strong>
              </p>
              <p className="animate-in animate-in-d2 text-[13px] max-w-[380px] mb-10 leading-[1.6]" style={{ color: "var(--color-txt3)" }}>
                Fans apoyan campañas. Productoras reciben datos reales para decidir artista, ciudad, precio y venue.
              </p>

              <div className="animate-in animate-in-d3 flex gap-3 flex-wrap mb-12">
                <Link href="/campaigns" className="inline-flex items-center gap-2 px-7 py-4 rounded font-extrabold uppercase italic min-h-[44px] transition-all hover:opacity-90 hover:-translate-y-0.5" style={{ background: "var(--color-burg)", color: "#fff", fontFamily: "var(--font-condensed)", fontSize: 14, letterSpacing: "1.5px" }}>
                  Explorar campañas →
                </Link>
                <Link href="/dashboard" className="inline-flex items-center px-7 py-4 rounded font-semibold min-h-[44px] transition-all" style={{ background: "transparent", color: "var(--color-txt2)", border: "1px solid rgba(255,255,255,0.12)", fontSize: 14 }}>
                  Ver dashboard B2B
                </Link>
              </div>

              <div className="animate-in animate-in-d4 flex gap-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                {[{ val: "12.4K", label: "Fans registrados" }, { val: "82%", label: "Demanda verificada" }, { val: "3", label: "Campañas activas" }].map(({ val, label }) => (
                  <div key={label}>
                    <div className="leading-none tabular-nums" style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--color-burg2)", letterSpacing: "1px" }}>{val}</div>
                    <div className="mt-1 uppercase tracking-[1px] text-[11px] font-medium" style={{ color: "var(--color-txt3)" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — card */}
            <div className="relative">
              <div className="relative rounded-2xl p-7 overflow-hidden" style={{ background: "var(--color-surface2)", border: "1px solid rgba(139,15,53,0.25)" }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-burg2), transparent)" }} />
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-[2px]" style={{ color: "var(--color-txt3)", fontFamily: "var(--font-condensed)" }}>Campaña activa</span>
                  <span className="px-2.5 py-1 rounded text-[10px] font-bold tracking-[1px] uppercase" style={{ background: "rgba(139,15,53,0.12)", color: "var(--color-burg3)", border: "1px solid rgba(139,15,53,0.25)", fontFamily: "var(--font-condensed)" }}>Oficial</span>
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: "rgba(139,15,53,0.15)", border: "1px solid rgba(139,15,53,0.3)", fontFamily: "var(--font-display)", color: "var(--color-burg2)", letterSpacing: "1px" }}>LK</div>
                  <div>
                    <div className="font-extrabold tracking-[0.5px]" style={{ fontFamily: "var(--font-condensed)", fontSize: 20, color: "var(--color-txt)" }}>Lenny Kravitz</div>
                    <div className="text-xs" style={{ color: "var(--color-txt3)" }}>Raise Vibration Tour · Buenos Aires</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-semibold tabular-nums" style={{ color: "var(--color-txt2)" }}>5.420 apoyos</span>
                    <span className="text-xs font-bold" style={{ color: "var(--color-burg3)" }}>68%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-surface3)" }}>
                    <div className="h-full w-[68%] rounded-full" style={{ background: "linear-gradient(90deg, var(--color-burg), var(--color-burg2))" }} />
                  </div>
                  <div className="text-[11px] mt-1.5" style={{ color: "var(--color-txt3)" }}>Objetivo: 8.000 apoyos</div>
                </div>
                <div className="grid grid-cols-2 gap-2.5 mb-4">
                  {[{ label: "Precio est.", val: "USD 80–120" }, { label: "Quedan", val: "47 días" }].map(({ label, val }) => (
                    <div key={label} className="p-3 rounded-lg" style={{ background: "var(--color-surface3)" }}>
                      <div className="text-[10px] uppercase tracking-[1px] mb-1" style={{ color: "var(--color-txt3)" }}>{label}</div>
                      <div className="text-sm font-bold tabular-nums" style={{ color: "var(--color-txt)" }}>{val}</div>
                    </div>
                  ))}
                </div>
                <Link href="/campaigns/0" className="flex items-center justify-center py-3 rounded-lg font-extrabold uppercase italic tracking-[1px]" style={{ background: "var(--color-burg)", color: "#fff", fontFamily: "var(--font-condensed)", fontSize: 13 }}>
                  Ver campaña y apoyar →
                </Link>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-6 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl" style={{ background: "var(--color-surface)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base" style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.2)" }}>🔥</div>
                <div>
                  <div className="text-sm font-bold" style={{ color: "var(--color-txt)" }}>Alta demanda</div>
                  <div className="text-[11px]" style={{ color: "var(--color-txt3)" }}>+234 apoyos esta semana</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <ScrollReveal>
        <section className="py-20 relative overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "var(--color-surface)" }}>
          <div className="absolute right-[-20px] top-[-20px] select-none pointer-events-none leading-none" style={{ fontFamily: "var(--font-display)", fontSize: 300, color: "rgba(139,15,53,0.04)" }}>DP</div>
          <div className="relative z-10 max-w-[1100px] mx-auto px-10">
            <div className="mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[3px] mb-2" style={{ color: "var(--color-burg2)", fontFamily: "var(--font-condensed)" }}>Cómo funciona</p>
              <h2 className="uppercase leading-none" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", letterSpacing: "2px", color: "var(--color-txt)" }}>
                Tres pasos.<br /><span style={{ color: "var(--color-burg2)" }}>Datos reales.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.07)" }}>
              {[
                { n: "01", title: "Fans apoyan", desc: "Indican ciudad, rango de precio y tipo de entrada. Las campañas oficiales incluyen reserva condicional." },
                { n: "02", title: "Se mide la demanda", desc: "Datos verificados por ciudad, precio aceptado y perfil del fan. Sin bots ni datos falsos." },
                { n: "03", title: "Productoras deciden", desc: "Dashboard con forecast, venue recomendado y lista de fans verificados con acceso prioritario si el show avanza." },
              ].map(({ n, title, desc }) => (
                <div key={n} className="p-8 relative overflow-hidden" style={{ background: "var(--color-surface)" }}>
                  <div className="absolute top-[-10px] right-4 select-none leading-none" style={{ fontFamily: "var(--font-display)", fontSize: 80, color: "rgba(139,15,53,0.06)" }}>{n}</div>
                  <div className="w-9 h-9 rounded flex items-center justify-center mb-4 text-white" style={{ background: "var(--color-burg)", fontFamily: "var(--font-display)", fontSize: 16, letterSpacing: "1px" }}>{n}</div>
                  <h3 className="font-extrabold uppercase mb-2.5" style={{ fontFamily: "var(--font-condensed)", fontSize: 20, color: "var(--color-txt)", letterSpacing: "0.5px" }}>{title}</h3>
                  <p className="text-sm leading-[1.7]" style={{ color: "var(--color-txt2)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── DISCLAIMER ── */}
      <section className="py-4" style={{ background: "rgba(139,15,53,0.05)", borderTop: "1px solid rgba(139,15,53,0.15)", borderBottom: "1px solid rgba(139,15,53,0.15)" }}>
        <div className="max-w-[1100px] mx-auto px-10 flex items-center gap-6 flex-wrap justify-center">
          {["No es una entrada. Es un registro de interés verificado.", "El show no está confirmado. La reserva es condicional.", "La venta final ocurre en la ticketera oficial."].map(text => (
            <div key={text} className="flex items-center gap-2 text-xs" style={{ color: "var(--color-txt3)" }}>
              <span className="w-1 h-1 rounded-full shrink-0 inline-block" style={{ background: "var(--color-burg2)" }} />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* ── CAMPAÑAS ── */}
      <ScrollReveal delay={100}>
        <section className="py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="max-w-[1100px] mx-auto px-10">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[3px] mb-2" style={{ color: "var(--color-burg2)", fontFamily: "var(--font-condensed)" }}>Campañas destacadas</p>
                <h2 className="uppercase leading-none" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,4vw,52px)", letterSpacing: "2px", color: "var(--color-txt)" }}>
                  Apoyá antes que<br /><span style={{ color: "var(--color-burg2)" }}>se confirme</span>
                </h2>
              </div>
              <Link href="/campaigns" className="px-5 py-2.5 rounded text-sm font-semibold transition-all" style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--color-txt2)" }}>Ver todas →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {campaigns.map((c) => {
                const pct = Math.min(100, Math.round((c.current / c.goal) * 100));
                return (
                  <Link key={c.id} href={`/campaigns/${c.id}`} className="campaign-card hover:border-[rgba(139,15,53,0.4)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(139,15,53,0.12)]">
                    {pct >= 70 && (
                      <div className="absolute top-3 right-3 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-[0.5px]" style={{ background: "rgba(217,119,6,0.12)", border: "1px solid rgba(217,119,6,0.3)", color: "var(--color-amber2)", fontFamily: "var(--font-condensed)" }}>🔥 Alta demanda</div>
                    )}
                    <div className="flex items-center gap-2.5 mb-3.5">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-sm shrink-0" style={{ background: `${c.color}15`, border: `1px solid ${c.color}30`, color: c.color, fontFamily: "var(--font-display)", letterSpacing: "1px" }}>{c.img}</div>
                      <div className="min-w-0">
                        <div className="font-extrabold truncate" style={{ fontFamily: "var(--font-condensed)", fontSize: 16, color: "var(--color-txt)" }}>{c.artist}</div>
                        <div className="text-xs" style={{ color: "var(--color-txt3)" }}>{c.city}</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold tracking-[1px] uppercase mb-3" style={{ background: c.type === "official" ? "rgba(139,15,53,0.1)" : "rgba(163,22,69,0.08)", color: c.type === "official" ? "var(--color-burg3)" : "#e8a0b0", border: `1px solid ${c.type === "official" ? "rgba(139,15,53,0.25)" : "rgba(163,22,69,0.2)"}`, fontFamily: "var(--font-condensed)" }}>
                      {c.type === "official" ? "Oficial" : "Fan demand"}
                    </span>
                    <div className="h-1 rounded-full overflow-hidden mb-2" style={{ background: "var(--color-surface3)" }}>
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "linear-gradient(90deg, var(--color-burg), var(--color-burg2))" }} />
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold tabular-nums" style={{ color: "var(--color-txt2)" }}>{c.current.toLocaleString("es-AR")} apoyos</span>
                      <span className="font-bold" style={{ color: "var(--color-burg3)" }}>{pct}%</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── B2B ── */}
      <ScrollReveal delay={150}>
        <section className="pb-20" style={{ background: "var(--color-surface)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="max-w-[1100px] mx-auto px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden" style={{ background: "var(--color-surface2)", border: "1px solid rgba(139,15,53,0.2)" }}>
              <div className="p-12" style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-[10px] font-bold uppercase tracking-[3px] mb-4" style={{ color: "var(--color-burg2)", fontFamily: "var(--font-condensed)" }}>Para productoras y promotores</p>
                <h2 className="uppercase leading-none mb-4" style={{ fontFamily: "var(--font-display)", fontSize: 48, letterSpacing: "2px", color: "var(--color-txt)" }}>
                  Tomá decisiones<br /><span style={{ color: "var(--color-burg2)" }}>con datos reales</span>
                </h2>
                <p className="text-sm leading-[1.7] mb-7" style={{ color: "var(--color-txt2)" }}>Dashboard con demanda verificada por ciudad, rango de precio aceptado, forecast de venta y recomendación automática de venue.</p>
                <Link href="/dashboard" className="inline-flex items-center px-6 py-3 rounded font-extrabold uppercase italic tracking-[1.5px] hover:opacity-90 transition-opacity" style={{ background: "var(--color-burg)", color: "#fff", fontFamily: "var(--font-condensed)", fontSize: 13 }}>
                  Ver dashboard B2B →
                </Link>
              </div>
              <div className="p-12" style={{ background: "rgba(139,15,53,0.03)" }}>
                {[{ val: "82%", label: "Fans verificados", color: "var(--color-burg2)" }, { val: "USD 74", label: "Precio promedio aceptado", color: "var(--color-txt)" }, { val: "7.800", label: "Forecast de tickets 48hs", color: "var(--color-emerald2)" }].map(({ val, label, color }, i, arr) => (
                  <div key={label} className={i < arr.length - 1 ? "pb-6 mb-6" : ""} style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                    <div className="leading-none tabular-nums" style={{ fontFamily: "var(--font-display)", fontSize: 48, color, letterSpacing: "1px" }}>{val}</div>
                    <div className="text-xs mt-1 uppercase tracking-[1px] font-semibold" style={{ color: "var(--color-txt3)", fontFamily: "var(--font-condensed)" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── FAQ ── */}
      <ScrollReveal delay={200}>
        <section className="py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="max-w-[700px] mx-auto px-10">
            <div className="mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[3px] mb-2" style={{ color: "var(--color-burg2)", fontFamily: "var(--font-condensed)" }}>Preguntas frecuentes</p>
              <h2 className="uppercase leading-none" style={{ fontFamily: "var(--font-display)", fontSize: 48, letterSpacing: "2px", color: "var(--color-txt)" }}>Lo que necesitás saber</h2>
            </div>
            {[
              { q: "¿DemandPass me garantiza una entrada?", a: "No. DemandPass registra tu interés y te da prioridad de acceso si el show se confirma. La compra de la entrada ocurre en la ticketera oficial." },
              { q: "¿Qué pasa si el show no se confirma?", a: "Si hiciste una reserva condicional y el show no se confirma, el monto nominal abonado se devuelve íntegramente. Sin descuentos ni penalidades." },
              { q: "¿Qué diferencia hay entre Campaña oficial y Fan demand?", a: "Las campañas oficiales son impulsadas por la productora e incluyen reserva condicional. Las Fan demand son iniciadas por fans — si se alcanza el objetivo, la productora evalúa confirmarlo." },
              { q: "¿Para qué sirve el DemandPass token?", a: "El token es tu registro de prioridad. Si el show se confirma, te permite acceder a la preventa antes que el público general, según el nivel elegido." },
            ].map(({ q, a }, i, arr) => (
              <div key={q} className="py-6" style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <h3 className="font-extrabold uppercase mb-2.5" style={{ fontFamily: "var(--font-condensed)", fontSize: 18, color: "var(--color-txt)", letterSpacing: "0.3px" }}>{q}</h3>
                <p className="text-sm leading-[1.7]" style={{ color: "var(--color-txt2)" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
