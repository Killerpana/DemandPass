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
        {/* Gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_20%_50%,rgba(139,15,53,0.15)_0%,transparent_60%),radial-gradient(ellipse_50%_60%_at_80%_20%,rgba(139,15,53,0.06)_0%,transparent_50%)]" />
        {/* Vertical lines */}
        <div className="absolute top-0 bottom-0 right-[38%] w-px bg-gradient-to-b from-transparent via-[rgba(139,15,53,0.3)] to-transparent" />
        <div className="absolute top-0 bottom-0 left-[25%] w-px bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.04)] to-transparent" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="max-w-[1100px] mx-auto px-10 py-20 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT — content */}
            <div>
              {/* Badge */}
              <div className="animate-in inline-flex items-center gap-2 bg-[rgba(139,15,53,0.1)] border border-[rgba(139,15,53,0.3)] rounded px-4 py-2 mb-8">
                <span className="dot-pulse" />
                <span className="text-[11px] font-bold text-[var(--burg3)] tracking-[2px] uppercase font-[family-name:var(--font-condensed,_'Barlow_Condensed')]">
                  <AnimatedCounter start={12453} /> fans verificados
                </span>
              </div>

              {/* Headline */}
              <h1 className="animate-in animate-in-d1 font-[family-name:'Bebas_Neue',_'Barlow_Condensed',_sans-serif] text-[clamp(60px,7vw,96px)] font-normal tracking-[3px] leading-[0.92] text-[var(--txt)] uppercase mb-6">
                DEMANDA<br />
                <span className="text-[var(--burg2)]">VERIFICADA</span><br />
                PARA EVENTOS<br />
                EN VIVO
              </h1>

              <p className="animate-in animate-in-d2 text-[16px] text-[var(--txt2)] leading-[1.7] max-w-[400px] mb-4 border-l-2 border-[var(--burg)] pl-4">
                DemandPass convierte el apoyo de fans en intención de compra verificable{" "}
                <strong className="text-[var(--txt)]">antes de confirmar un show.</strong>
              </p>
              <p className="animate-in animate-in-d2 text-[13px] text-[var(--txt3)] max-w-[380px] mb-10 leading-[1.6]">
                Fans apoyan campañas. Productoras reciben datos reales para decidir artista, ciudad, precio y venue.
              </p>

              {/* CTAs */}
              <div className="animate-in animate-in-d3 flex gap-3 flex-wrap mb-12">
                <Link href="/campaigns" className="inline-flex items-center gap-2 px-7 py-4 rounded bg-[var(--burg)] text-white text-[14px] font-extrabold uppercase tracking-[1.5px] italic font-[family-name:'Barlow_Condensed',sans-serif] hover:opacity-90 hover:-translate-y-0.5 transition-all min-h-[44px]">
                  Explorar campañas →
                </Link>
                <Link href="/dashboard" className="inline-flex items-center px-7 py-4 rounded bg-transparent text-[var(--txt2)] border border-[var(--border2)] text-[14px] font-semibold hover:border-[var(--border3)] hover:text-[var(--txt)] transition-all min-h-[44px]">
                  Ver dashboard B2B
                </Link>
              </div>

              {/* Stats */}
              <div className="animate-in animate-in-d4 flex gap-8 border-t border-[var(--border)] pt-6">
                {[
                  { val: "12.4K", label: "Fans registrados" },
                  { val: "82%", label: "Demanda verificada" },
                  { val: "3", label: "Campañas activas" },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div className="font-[family-name:'Bebas_Neue',sans-serif] text-[32px] text-[var(--burg2)] tracking-[1px] leading-none tabular-nums">{val}</div>
                    <div className="text-[11px] text-[var(--txt3)] mt-1 font-medium uppercase tracking-[1px]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — campaign card */}
            <div className="relative">
              <div className="relative bg-[var(--surface2)] border border-[rgba(139,15,53,0.25)] rounded-2xl p-7 overflow-hidden">
                {/* Top glow line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--burg2)] to-transparent" />

                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--txt3)] font-[family-name:'Barlow_Condensed',sans-serif]">Campaña activa</span>
                  <span className="bg-[rgba(139,15,53,0.12)] text-[var(--burg3)] border border-[rgba(139,15,53,0.25)] rounded px-2.5 py-1 text-[10px] font-bold tracking-[1px] uppercase font-[family-name:'Barlow_Condensed',sans-serif]">Oficial</span>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-[rgba(139,15,53,0.15)] border border-[rgba(139,15,53,0.3)] flex items-center justify-center font-[family-name:'Bebas_Neue',sans-serif] text-[18px] text-[var(--burg2)] tracking-[1px] shrink-0">LK</div>
                  <div>
                    <div className="font-[family-name:'Barlow_Condensed',sans-serif] text-[20px] font-extrabold text-[var(--txt)] tracking-[0.5px]">Lenny Kravitz</div>
                    <div className="text-[12px] text-[var(--txt3)]">Raise Vibration Tour · Buenos Aires</div>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-[12px] text-[var(--txt2)] font-semibold tabular-nums">5.420 apoyos</span>
                    <span className="text-[12px] text-[var(--burg3)] font-bold">68%</span>
                  </div>
                  <div className="h-1.5 bg-[var(--surface3)] rounded-full overflow-hidden">
                    <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[var(--burg)] to-[var(--burg2)]" />
                  </div>
                  <div className="text-[11px] text-[var(--txt3)] mt-1.5">Objetivo: 8.000 apoyos</div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 mb-4">
                  {[{ label: "Precio est.", val: "USD 80–120" }, { label: "Quedan", val: "47 días" }].map(({ label, val }) => (
                    <div key={label} className="bg-[var(--surface3)] rounded-lg p-3">
                      <div className="text-[10px] text-[var(--txt3)] uppercase tracking-[1px] mb-1">{label}</div>
                      <div className="text-[14px] font-bold text-[var(--txt)] tabular-nums">{val}</div>
                    </div>
                  ))}
                </div>

                <Link href="/campaigns/0" className="flex items-center justify-center py-3 rounded-lg bg-[var(--burg)] text-white text-[13px] font-extrabold uppercase tracking-[1px] italic font-[family-name:'Barlow_Condensed',sans-serif] hover:opacity-90 transition-opacity">
                  Ver campaña y apoyar →
                </Link>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-6 bg-[var(--surface)] border border-[var(--border2)] rounded-xl px-4 py-3 flex items-center gap-3 shadow-2xl">
                <div className="w-9 h-9 rounded-lg bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.2)] flex items-center justify-center text-base">🔥</div>
                <div>
                  <div className="text-[13px] font-bold text-[var(--txt)]">Alta demanda</div>
                  <div className="text-[11px] text-[var(--txt3)]">+234 apoyos esta semana</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <ScrollReveal>
        <section className="py-20 border-t border-[var(--border)] bg-[var(--surface)] relative overflow-hidden">
          <div className="absolute right-[-20px] top-[-20px] font-[family-name:'Bebas_Neue',sans-serif] text-[300px] text-[rgba(139,15,53,0.04)] leading-none select-none pointer-events-none">DP</div>
          <div className="max-w-[1100px] mx-auto px-10 relative z-10">
            <div className="mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--burg2)] mb-2 font-[family-name:'Barlow_Condensed',sans-serif]">Cómo funciona</p>
              <h2 className="font-[family-name:'Bebas_Neue',sans-serif] text-[clamp(40px,5vw,64px)] tracking-[2px] text-[var(--txt)] uppercase leading-none">
                Tres pasos.<br /><span className="text-[var(--burg2)]">Datos reales.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)]">
              {[
                { n: "01", title: "Fans apoyan", desc: "Indican ciudad, rango de precio y tipo de entrada. Las campañas oficiales incluyen reserva condicional." },
                { n: "02", title: "Se mide la demanda", desc: "Datos verificados por ciudad, precio aceptado y perfil del fan. Sin bots ni datos falsos." },
                { n: "03", title: "Productoras deciden", desc: "Dashboard con forecast, venue recomendado y lista de fans verificados con acceso prioritario si el show avanza." },
              ].map(({ n, title, desc }) => (
                <div key={n} className="bg-[var(--surface)] p-8 relative overflow-hidden">
                  <div className="absolute top-[-10px] right-4 font-[family-name:'Bebas_Neue',sans-serif] text-[80px] text-[rgba(139,15,53,0.06)] leading-none select-none">{n}</div>
                  <div className="w-9 h-9 rounded bg-[var(--burg)] flex items-center justify-center font-[family-name:'Bebas_Neue',sans-serif] text-[16px] text-white tracking-[1px] mb-4">{n}</div>
                  <h3 className="font-[family-name:'Barlow_Condensed',sans-serif] text-[20px] font-extrabold text-[var(--txt)] uppercase tracking-[0.5px] mb-2.5">{title}</h3>
                  <p className="text-[13px] text-[var(--txt2)] leading-[1.7]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── DISCLAIMER ── */}
      <section className="py-4 px-10 bg-[rgba(139,15,53,0.05)] border-y border-[rgba(139,15,53,0.15)]">
        <div className="max-w-[1100px] mx-auto flex items-center gap-6 flex-wrap justify-center">
          {["No es una entrada. Es un registro de interés verificado.", "El show no está confirmado. La reserva es condicional.", "La venta final ocurre en la ticketera oficial."].map(text => (
            <div key={text} className="flex items-center gap-2 text-[12px] text-[var(--txt3)]">
              <span className="w-1 h-1 rounded-full bg-[var(--burg2)] shrink-0 inline-block" />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* ── CAMPAÑAS ── */}
      <ScrollReveal delay={100}>
        <section className="py-20 px-10 border-t border-[var(--border)]">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--burg2)] mb-2 font-[family-name:'Barlow_Condensed',sans-serif]">Campañas destacadas</p>
                <h2 className="font-[family-name:'Bebas_Neue',sans-serif] text-[clamp(36px,4vw,52px)] tracking-[2px] text-[var(--txt)] uppercase leading-none">
                  Apoyá antes que<br /><span className="text-[var(--burg2)]">se confirme</span>
                </h2>
              </div>
              <Link href="/campaigns" className="px-5 py-2.5 rounded border border-[var(--border2)] text-[var(--txt2)] text-[13px] font-semibold hover:border-[var(--border3)] hover:text-[var(--txt)] transition-all">
                Ver todas →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {campaigns.map((c) => {
                const pct = Math.min(100, Math.round((c.current / c.goal) * 100));
                const isTrending = pct >= 70;
                return (
                  <Link key={c.id} href={`/campaigns/${c.id}`} className="campaign-card bg-[var(--surface2)] border border-[var(--border)] rounded-xl p-5">
                    {isTrending && (
                      <div className="absolute top-3 right-3 bg-[rgba(217,119,6,0.12)] border border-[rgba(217,119,6,0.3)] rounded px-2 py-1 text-[10px] font-bold text-[var(--amber2)] uppercase tracking-[0.5px] font-[family-name:'Barlow_Condensed',sans-serif]">
                        🔥 Alta demanda
                      </div>
                    )}
                    <div className="flex items-center gap-2.5 mb-3.5">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center font-[family-name:'Bebas_Neue',sans-serif] text-[14px] tracking-[1px] shrink-0" style={{ background: `${c.color}15`, border: `1px solid ${c.color}30`, color: c.color }}>{c.img}</div>
                      <div className="min-w-0">
                        <div className="font-[family-name:'Barlow_Condensed',sans-serif] text-[16px] font-extrabold text-[var(--txt)] truncate">{c.artist}</div>
                        <div className="text-[12px] text-[var(--txt3)]">{c.city}</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded px-2 py-0.5 text-[10px] font-bold tracking-[1px] uppercase font-[family-name:'Barlow_Condensed',sans-serif] mb-3" style={{ background: c.type === "official" ? "rgba(139,15,53,0.1)" : "rgba(163,22,69,0.08)", color: c.type === "official" ? "var(--burg3)" : "#e8a0b0", border: `1px solid ${c.type === "official" ? "rgba(139,15,53,0.25)" : "rgba(163,22,69,0.2)"}` }}>
                      {c.type === "official" ? "Oficial" : "Fan demand"}
                    </span>
                    <div className="h-1 bg-[var(--surface3)] rounded-full overflow-hidden mb-2">
                      <div className="h-full rounded-full bg-gradient-to-r from-[var(--burg)] to-[var(--burg2)]" style={{ width: `${pct}%` }} />
                    </div>
                    <div className="flex justify-between text-[12px]">
                      <span className="text-[var(--txt2)] font-semibold tabular-nums">{c.current.toLocaleString("es-AR")} apoyos</span>
                      <span className="text-[var(--burg3)] font-bold">{pct}%</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── B2B BANNER ── */}
      <ScrollReveal delay={150}>
        <section className="px-10 pb-20 bg-[var(--surface)] border-t border-[var(--border)]">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-[var(--surface2)] border border-[rgba(139,15,53,0.2)] rounded-xl overflow-hidden">
              <div className="p-12 border-r border-[var(--border)]">
                <p className="text-[10px] font-bold uppercase tracking-[3px] text-[var(--burg2)] mb-4 font-[family-name:'Barlow_Condensed',sans-serif]">Para productoras y promotores</p>
                <h2 className="font-[family-name:'Bebas_Neue',sans-serif] text-[48px] tracking-[2px] text-[var(--txt)] uppercase leading-none mb-4">
                  Tomá decisiones<br /><span className="text-[var(--burg2)]">con datos reales</span>
                </h2>
                <p className="text-[14px] text-[var(--txt2)] leading-[1.7] mb-7">Dashboard con demanda verificada por ciudad, rango de precio aceptado, forecast de venta y recomendación automática de venue.</p>
                <Link href="/dashboard" className="inline-flex items-center px-6 py-3 rounded bg-[var(--burg)] text-white text-[13px] font-extrabold uppercase tracking-[1.5px] italic font-[family-name:'Barlow_Condensed',sans-serif] hover:opacity-90 transition-opacity">
                  Ver dashboard B2B →
                </Link>
              </div>
              <div className="p-12 bg-[rgba(139,15,53,0.03)]">
                {[
                  { val: "82%", label: "Fans verificados", color: "var(--burg2)" },
                  { val: "USD 74", label: "Precio promedio aceptado", color: "var(--txt)" },
                  { val: "7.800", label: "Forecast de tickets 48hs", color: "var(--emerald2)" },
                ].map(({ val, label, color }, i, arr) => (
                  <div key={label} className={i < arr.length - 1 ? "pb-6 mb-6 border-b border-[var(--border)]" : ""}>
                    <div className="font-[family-name:'Bebas_Neue',sans-serif] text-[48px] tracking-[1px] leading-none tabular-nums" style={{ color }}>{val}</div>
                    <div className="text-[12px] text-[var(--txt3)] mt-1 uppercase tracking-[1px] font-[family-name:'Barlow_Condensed',sans-serif] font-semibold">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── FAQ ── */}
      <ScrollReveal delay={200}>
        <section className="py-20 px-10 border-t border-[var(--border)]">
          <div className="max-w-[700px] mx-auto">
            <div className="mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[var(--burg2)] mb-2 font-[family-name:'Barlow_Condensed',sans-serif]">Preguntas frecuentes</p>
              <h2 className="font-[family-name:'Bebas_Neue',sans-serif] text-[48px] tracking-[2px] text-[var(--txt)] uppercase leading-none">Lo que necesitás saber</h2>
            </div>
            {[
              { q: "¿DemandPass me garantiza una entrada?", a: "No. DemandPass registra tu interés y te da prioridad de acceso si el show se confirma. La compra de la entrada ocurre en la ticketera oficial, no en esta plataforma." },
              { q: "¿Qué pasa si el show no se confirma?", a: "Si hiciste una reserva condicional y el show no se confirma, el monto nominal abonado se devuelve íntegramente. Sin descuentos ni penalidades." },
              { q: "¿Qué diferencia hay entre Campaña oficial y Fan demand?", a: "Las campañas oficiales son impulsadas por la productora e incluyen reserva condicional. Las Fan demand son iniciadas por fans — si se alcanza el objetivo, la productora evalúa confirmarlo." },
              { q: "¿Para qué sirve el DemandPass token?", a: "El token es tu registro de prioridad. Si el show se confirma, te permite acceder a la preventa antes que el público general, según el nivel elegido." },
            ].map(({ q, a }, i, arr) => (
              <div key={q} className={`py-6 ${i < arr.length - 1 ? "border-b border-[var(--border)]" : ""}`}>
                <h3 className="font-[family-name:'Barlow_Condensed',sans-serif] text-[18px] font-extrabold text-[var(--txt)] uppercase tracking-[0.3px] mb-2.5">{q}</h3>
                <p className="text-[14px] text-[var(--txt2)] leading-[1.7]">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
