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

      {/* ── HERO — asimétrico, editorial ── */}
      <section style={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 0 0 0",
      }}>
        {/* Fondo con textura noise + gradiente */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 70% 80% at 20% 50%, rgba(139,15,53,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 80% 20%, rgba(139,15,53,0.06) 0%, transparent 50%)",
          zIndex: 0,
        }} />
        {/* Líneas decorativas verticales */}
        <div style={{
          position: "absolute", top: 0, right: "38%", bottom: 0,
          width: 1, background: "linear-gradient(to bottom, transparent, rgba(139,15,53,0.3), transparent)",
          zIndex: 0,
        }} />
        <div style={{
          position: "absolute", top: 0, right: "62%", bottom: 0,
          width: 1, background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.04), transparent)",
          zIndex: 0,
        }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

            {/* COLUMNA IZQUIERDA — contenido */}
            <div>
              {/* Eyebrow badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(139,15,53,0.1)",
                border: "1px solid rgba(139,15,53,0.3)",
                borderRadius: 4, padding: "6px 14px",
                marginBottom: 32,
              }}>
                <span className="dot-pulse" />
                <span style={{ fontSize: 11, fontWeight: 700, color: "var(--burg3)", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "'Barlow Condensed', sans-serif" }}>
                  <AnimatedCounter start={12453} /> fans verificados
                </span>
              </div>

              {/* Headline — Bebas Neue estilo del logo */}
              <h1 style={{
                fontFamily: "'Bebas Neue', 'Barlow Condensed', sans-serif",
                fontSize: "clamp(56px, 7vw, 88px)",
                fontWeight: 400,
                letterSpacing: "2px",
                lineHeight: 0.95,
                color: "var(--txt)",
                marginBottom: 24,
                textTransform: "uppercase",
              }}>
                DEMANDA<br />
                <span style={{ color: "var(--burg2)" }}>VERIFICADA</span><br />
                PARA EVENTOS<br />
                EN VIVO
              </h1>

              <p style={{
                fontSize: 16, color: "var(--txt2)", lineHeight: 1.7,
                maxWidth: 400, marginBottom: 16,
                borderLeft: "2px solid var(--burg)",
                paddingLeft: 16,
              }}>
                DemandPass convierte el apoyo de fans en intención de compra verificable{" "}
                <strong style={{ color: "var(--txt)" }}>antes de confirmar un show.</strong>
              </p>
              <p style={{ fontSize: 13, color: "var(--txt3)", maxWidth: 380, marginBottom: 40, lineHeight: 1.6 }}>
                Fans apoyan campañas. Productoras reciben datos reales para decidir artista, ciudad, precio y venue.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
                <Link href="/campaigns" className="btn-burg">
                  Explorar campañas →
                </Link>
                <Link href="/dashboard" className="btn-ghost-link">
                  Ver dashboard B2B
                </Link>
              </div>

              {/* Stats en línea */}
              <div style={{ display: "flex", gap: 32, borderTop: "1px solid var(--border)", paddingTop: 24 }}>
                {[
                  { val: "12.4K", label: "Fans registrados" },
                  { val: "82%", label: "Demanda verificada" },
                  { val: "3", label: "Campañas activas" },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 32, color: "var(--burg2)",
                      letterSpacing: "1px", lineHeight: 1,
                      fontVariantNumeric: "tabular-nums",
                    }}>{val}</div>
                    <div style={{ fontSize: 11, color: "var(--txt3)", marginTop: 4, fontWeight: 500, textTransform: "uppercase", letterSpacing: "1px" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMNA DERECHA — visual */}
            <div style={{ position: "relative" }}>
              {/* Card principal — campaña destacada */}
              <div style={{
                background: "var(--surface2)",
                border: "1px solid rgba(139,15,53,0.25)",
                borderRadius: 16,
                padding: 28,
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Glow top */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: "linear-gradient(90deg, transparent, var(--burg2), transparent)",
                }} />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "var(--txt3)", fontFamily: "'Barlow Condensed', sans-serif" }}>
                    Campaña activa
                  </span>
                  <span style={{
                    background: "rgba(139,15,53,0.12)", color: "var(--burg3)",
                    border: "1px solid rgba(139,15,53,0.25)",
                    borderRadius: 4, padding: "3px 10px",
                    fontSize: 10, fontWeight: 700, letterSpacing: "1px",
                    textTransform: "uppercase", fontFamily: "'Barlow Condensed', sans-serif",
                  }}>Oficial</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 12,
                    background: "rgba(139,15,53,0.15)",
                    border: "1px solid rgba(139,15,53,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 18, color: "var(--burg2)", letterSpacing: "1px",
                  }}>LK</div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, color: "var(--txt)", letterSpacing: "0.5px" }}>
                      Lenny Kravitz
                    </div>
                    <div style={{ fontSize: 12, color: "var(--txt3)" }}>Raise Vibration Tour · Buenos Aires</div>
                  </div>
                </div>

                {/* Barra de progreso */}
                <div style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 12, color: "var(--txt2)", fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>5.420 apoyos</span>
                    <span style={{ fontSize: 12, color: "var(--burg3)", fontWeight: 700 }}>68%</span>
                  </div>
                  <div style={{ height: 6, background: "var(--surface3)", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{
                      height: "100%", width: "68%", borderRadius: 3,
                      background: "linear-gradient(90deg, var(--burg), var(--burg2))",
                    }} />
                  </div>
                  <div style={{ fontSize: 11, color: "var(--txt3)", marginTop: 6 }}>Objetivo: 8.000 apoyos</div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
                  {[
                    { label: "Precio est.", val: "USD 80–120" },
                    { label: "Quedan", val: "47 días" },
                  ].map(({ label, val }) => (
                    <div key={label} style={{ background: "var(--surface3)", borderRadius: 8, padding: "10px 12px" }}>
                      <div style={{ fontSize: 10, color: "var(--txt3)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 4 }}>{label}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "var(--txt)", fontVariantNumeric: "tabular-nums" }}>{val}</div>
                    </div>
                  ))}
                </div>

                <Link href="/campaigns/0" style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "11px", borderRadius: 8,
                  background: "var(--burg)", color: "#fff",
                  fontSize: 13, fontWeight: 800,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontStyle: "italic", letterSpacing: "1px", textTransform: "uppercase",
                }}>
                  Ver campaña y apoyar →
                </Link>
              </div>

              {/* Card flotante — stats */}
              <div style={{
                position: "absolute", bottom: -20, left: -24,
                background: "var(--surface)",
                border: "1px solid var(--border2)",
                borderRadius: 12, padding: "14px 18px",
                display: "flex", alignItems: "center", gap: 12,
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16,
                }}>🔥</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--txt)" }}>Alta demanda</div>
                  <div style={{ fontSize: 11, color: "var(--txt3)" }}>+234 apoyos esta semana</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA — full width con números grandes ── */}
      <ScrollReveal>
        <section style={{
          padding: "80px 40px",
          borderTop: "1px solid var(--border)",
          background: "var(--surface)",
          position: "relative", overflow: "hidden",
        }}>
          {/* Número decorativo de fondo */}
          <div style={{
            position: "absolute", right: -20, top: -20,
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 300, color: "rgba(139,15,53,0.04)",
            lineHeight: 1, userSelect: "none", pointerEvents: "none",
          }}>DP</div>

          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ marginBottom: 48 }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "3px", color: "var(--burg2)", marginBottom: 8, fontFamily: "'Barlow Condensed', sans-serif" }}>
                Cómo funciona
              </p>
              <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(40px, 5vw, 64px)",
                letterSpacing: "2px", color: "var(--txt)",
                textTransform: "uppercase", lineHeight: 1,
              }}>
                Tres pasos.<br />
                <span style={{ color: "var(--burg2)" }}>Datos reales.</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)" }}>
              {[
                { n: "01", title: "Fans apoyan", desc: "Indican ciudad, rango de precio y tipo de entrada. Las campañas oficiales incluyen reserva condicional." },
                { n: "02", title: "Se mide la demanda", desc: "Datos verificados por ciudad, precio aceptado y perfil del fan. Sin bots ni datos falsos." },
                { n: "03", title: "Productoras deciden", desc: "Dashboard con forecast, venue recomendado y lista de fans verificados con acceso prioritario si el show avanza." },
              ].map(({ n, title, desc }) => (
                <div key={n} style={{
                  background: "var(--surface)", padding: "32px 28px",
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 80, color: "rgba(139,15,53,0.08)",
                    position: "absolute", top: -10, right: 16,
                    lineHeight: 1, userSelect: "none",
                  }}>{n}</div>
                  <div style={{
                    width: 36, height: 36, borderRadius: 4,
                    background: "var(--burg)", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 16, color: "#fff", letterSpacing: "1px",
                    marginBottom: 16,
                  }}>{n}</div>
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 20, fontWeight: 800, color: "var(--txt)",
                    marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.5px",
                  }}>{title}</h3>
                  <p style={{ fontSize: 13, color: "var(--txt2)", lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── DISCLAIMER ── */}
      <section style={{ padding: "16px 40px", background: "rgba(139,15,53,0.05)", borderTop: "1px solid rgba(139,15,53,0.15)", borderBottom: "1px solid rgba(139,15,53,0.15)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          {["No es una entrada. Es un registro de interés verificado.", "El show no está confirmado. La reserva es condicional.", "La venta final ocurre en la ticketera oficial."].map(text => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--txt3)" }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--burg2)", display: "inline-block", flexShrink: 0 }} />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* ── CAMPAÑAS DESTACADAS ── */}
      <ScrollReveal delay={100}>
        <section style={{ padding: "80px 40px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "3px", color: "var(--burg2)", marginBottom: 8, fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Campañas destacadas
                </p>
                <h2 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(36px, 4vw, 52px)",
                  letterSpacing: "2px", color: "var(--txt)",
                  textTransform: "uppercase", lineHeight: 1,
                }}>
                  Apoyá antes que<br />
                  <span style={{ color: "var(--burg2)" }}>se confirme</span>
                </h2>
              </div>
              <Link href="/campaigns" style={{
                padding: "10px 20px", borderRadius: 4,
                border: "1px solid var(--border2)",
                background: "transparent", color: "var(--txt2)",
                fontSize: 13, fontWeight: 600, fontFamily: "'Barlow', sans-serif",
              }}>
                Ver todas →
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {campaigns.map((c) => {
                const pct = Math.min(100, Math.round((c.current / c.goal) * 100));
                const isTrending = pct >= 70;
                return (
                  <Link key={c.id} href={`/campaigns/${c.id}`} className="campaign-card">
                    {isTrending && (
                      <div style={{
                        position: "absolute", top: 12, right: 12,
                        background: "rgba(217,119,6,0.12)",
                        border: "1px solid rgba(217,119,6,0.3)",
                        borderRadius: 4, padding: "3px 8px",
                        fontSize: 10, fontWeight: 700, color: "var(--amber2)",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        letterSpacing: "0.5px", textTransform: "uppercase",
                      }}>🔥 Alta demanda</div>
                    )}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: 10,
                        background: `${c.color}15`,
                        border: `1px solid ${c.color}30`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: 14, color: c.color, letterSpacing: "1px", flexShrink: 0,
                      }}>{c.img}</div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 800, color: "var(--txt)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.artist}</div>
                        <div style={{ fontSize: 12, color: "var(--txt3)" }}>{c.city}</div>
                      </div>
                    </div>
                    <span style={{
                      display: "inline-flex", alignItems: "center",
                      background: c.type === "official" ? "rgba(139,15,53,0.1)" : "rgba(163,22,69,0.08)",
                      color: c.type === "official" ? "var(--burg3)" : "#e8a0b0",
                      border: `1px solid ${c.type === "official" ? "rgba(139,15,53,0.25)" : "rgba(163,22,69,0.2)"}`,
                      borderRadius: 4, padding: "2px 8px",
                      fontSize: 10, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      marginBottom: 12,
                    }}>
                      {c.type === "official" ? "Oficial" : "Fan demand"}
                    </span>
                    <div style={{ height: 4, background: "var(--surface3)", borderRadius: 2, overflow: "hidden", marginBottom: 8 }}>
                      <div style={{ height: "100%", width: `${pct}%`, borderRadius: 2, background: "linear-gradient(90deg, var(--burg), var(--burg2))" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                      <span style={{ color: "var(--txt2)", fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{c.current.toLocaleString("es-AR")} apoyos</span>
                      <span style={{ color: "var(--burg3)", fontWeight: 700 }}>{pct}%</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── B2B BANNER — asimétrico ── */}
      <ScrollReveal delay={150}>
        <section style={{
          padding: "0 40px 80px",
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
        }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              background: "var(--surface2)",
              border: "1px solid rgba(139,15,53,0.2)",
              borderRadius: 12, overflow: "hidden",
            }}>
              {/* Izquierda — contenido */}
              <div style={{ padding: "48px 40px", borderRight: "1px solid var(--border)" }}>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "3px", color: "var(--burg2)", marginBottom: 16, fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Para productoras y promotores
                </p>
                <h2 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 48, letterSpacing: "2px", color: "var(--txt)",
                  textTransform: "uppercase", lineHeight: 1, marginBottom: 16,
                }}>
                  Tomá decisiones<br />
                  <span style={{ color: "var(--burg2)" }}>con datos reales</span>
                </h2>
                <p style={{ fontSize: 14, color: "var(--txt2)", lineHeight: 1.7, marginBottom: 28 }}>
                  Dashboard con demanda verificada por ciudad, rango de precio aceptado, forecast de venta y recomendación automática de venue.
                </p>
                <Link href="/dashboard" style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "12px 24px", borderRadius: 4,
                  background: "var(--burg)", color: "#fff",
                  fontSize: 13, fontWeight: 800,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontStyle: "italic", letterSpacing: "1.5px", textTransform: "uppercase",
                }}>
                  Ver dashboard B2B →
                </Link>
              </div>

              {/* Derecha — métricas */}
              <div style={{ padding: "48px 40px", background: "rgba(139,15,53,0.03)" }}>
                {[
                  { val: "82%", label: "Fans verificados", color: "var(--burg2)" },
                  { val: "USD 74", label: "Precio promedio aceptado", color: "var(--txt)" },
                  { val: "7.800", label: "Forecast de tickets 48hs", color: "var(--emerald2)" },
                ].map(({ val, label, color }, i) => (
                  <div key={label} style={{
                    paddingBottom: i < 2 ? 24 : 0,
                    marginBottom: i < 2 ? 24 : 0,
                    borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                  }}>
                    <div style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 48, color, letterSpacing: "1px", lineHeight: 1,
                      fontVariantNumeric: "tabular-nums",
                    }}>{val}</div>
                    <div style={{ fontSize: 12, color: "var(--txt3)", marginTop: 4, textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── FAQ ── */}
      <ScrollReveal delay={200}>
        <section style={{ padding: "80px 40px", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ marginBottom: 48 }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "3px", color: "var(--burg2)", marginBottom: 8, fontFamily: "'Barlow Condensed', sans-serif" }}>Preguntas frecuentes</p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, letterSpacing: "2px", color: "var(--txt)", textTransform: "uppercase", lineHeight: 1 }}>
                Lo que necesitás saber
              </h2>
            </div>
            {[
              { q: "¿DemandPass me garantiza una entrada?", a: "No. DemandPass registra tu interés y te da prioridad de acceso si el show se confirma. La compra de la entrada ocurre en la ticketera oficial, no en esta plataforma." },
              { q: "¿Qué pasa si el show no se confirma?", a: "Si hiciste una reserva condicional y el show no se confirma, el monto nominal abonado se devuelve íntegramente. Sin descuentos ni penalidades." },
              { q: "¿Qué diferencia hay entre Campaña oficial y Fan demand?", a: "Las campañas oficiales son impulsadas por la productora e incluyen reserva condicional. Las Fan demand son iniciadas por fans — si se alcanza el objetivo, la productora evalúa confirmarlo." },
              { q: "¿Para qué sirve el DemandPass token?", a: "El token es tu registro de prioridad. Si el show se confirma, te permite acceder a la preventa antes que el público general, según el nivel elegido." },
            ].map(({ q, a }, i, arr) => (
              <div key={q} style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none", padding: "24px 0" }}>
                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 18, fontWeight: 800, color: "var(--txt)",
                  marginBottom: 10, letterSpacing: "0.3px", textTransform: "uppercase",
                }}>{q}</h3>
                <p style={{ fontSize: 14, color: "var(--txt2)", lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
