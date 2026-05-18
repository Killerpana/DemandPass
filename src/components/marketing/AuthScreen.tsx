// src/components/marketing/AuthScreen.tsx — split-screen login/signup
"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Pill } from "@/components/ui/Pill";

type Audience = "fan" | "producer";
type Mode = "signup" | "signin";

export function AuthScreen({ initialMode = "signup" }: { initialMode?: Mode }) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [audience, setAudience] = useState<Audience>("fan");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr]"
      style={{ background: "var(--color-bg)", minHeight: "calc(100vh - 64px)" }}
    >
      {/* Left — form */}
      <div className="px-8 sm:px-16 py-10 flex flex-col">
        <Logo height={28} href="/" />

        <div className="flex-1 flex flex-col justify-center max-w-[440px] w-full mt-10">
          <div
            className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-3.5"
            style={{ color: "var(--color-burg3)" }}
          >
            {mode === "signup" ? "Crear cuenta" : "Ingresar"}
          </div>
          <h1
            className="uppercase mb-3"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5vw, 56px)",
              lineHeight: 0.95,
              letterSpacing: "0.005em",
            }}
          >
            {mode === "signup" ? (
              audience === "fan" ? (
                <>Apoyá a tu<br />próximo show.</>
              ) : (
                <>Medí la demanda<br />real.</>
              )
            ) : (
              <>Volvé a tu<br />panel.</>
            )}
          </h1>
          <p className="text-[15px] text-[var(--color-txt2)] mb-7 leading-[1.55]">
            {audience === "fan"
              ? "Tu apoyo cuenta. Indicá qué artistas querés ver y obtené acceso prioritario cuando se confirmen."
              : "Decisiones de booking con datos reales — antes de firmar contrato con el artista."}
          </p>

          {/* Audience toggle */}
          <div
            className="flex gap-0.5 p-0.5 rounded-md mb-6"
            style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}
          >
            {([
              { id: "fan",      l: "Soy fan",        s: "Quiero ver shows" },
              { id: "producer", l: "Soy productora", s: "Quiero medir demanda" },
            ] as const).map((a) => {
              const sel = audience === a.id;
              return (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setAudience(a.id)}
                  className="flex-1 px-3.5 py-3 rounded text-left"
                  style={{
                    background: sel ? "var(--color-surface3)" : "transparent",
                    color: sel ? "var(--color-txt)" : "var(--color-txt2)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  <div className="text-[13px] font-bold">{a.l}</div>
                  <div className="text-[11px] text-[var(--color-txt3)] mt-0.5">{a.s}</div>
                </button>
              );
            })}
          </div>

          {/* OAuth */}
          <div className="grid grid-cols-2 gap-2.5 mb-3">
            <OAuthBtn glyph="G">Continuar con Google</OAuthBtn>
            <OAuthBtn glyph="">Continuar con Apple</OAuthBtn>
          </div>
          {audience === "fan" && (
            <button
              type="button"
              className="flex items-center gap-3 px-4 py-3 mb-5 rounded-md text-[13px] font-semibold"
              style={{ background: "#1ED760", border: "1px solid #1ED760", color: "#000", fontFamily: "var(--font-sans)" }}
            >
              <span className="text-[14px] font-extrabold">♪</span>
              Continuar con Spotify
              <span
                className="ml-auto text-[10px] font-bold uppercase tracking-[0.06em] px-1.5 py-0.5 rounded"
                style={{ background: "rgba(0,0,0,0.18)", color: "#000" }}
              >
                Recomendado
              </span>
            </button>
          )}

          <div className="flex items-center gap-3.5 mb-5 text-[11px] text-[var(--color-txt3)]">
            <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
            o con email
            <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="flex flex-col gap-3.5"
          >
            {audience === "producer" && mode === "signup" && (
              <div className="grid grid-cols-2 gap-2.5">
                <Field label="Productora">
                  <input type="text" placeholder="DF Entertainment" style={inputStyle} />
                </Field>
                <Field label="País">
                  <select style={inputStyle as React.CSSProperties} defaultValue="Argentina">
                    {["Argentina", "México", "Colombia", "Chile", "Perú"].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>
              </div>
            )}
            <Field label="Email">
              <input type="email" placeholder="hola@ejemplo.com" style={inputStyle} required />
            </Field>
            <Field label="Contraseña">
              <input type="password" placeholder="Mínimo 8 caracteres" style={inputStyle} required minLength={8} />
            </Field>

            {mode === "signup" && (
              <label className="flex items-start gap-2.5 text-[12px] text-[var(--color-txt2)] mt-1 cursor-pointer">
                <input type="checkbox" defaultChecked className="mt-0.5" style={{ accentColor: "var(--color-burg3)" }} />
                <span>
                  Acepto los <Link href="/terms" className="text-[var(--color-txt)] underline">Términos</Link>{" "}
                  y la <Link href="/privacy" className="text-[var(--color-txt)] underline">Privacidad</Link>.{" "}
                  {audience === "fan" && "Quiero recibir alertas de shows."}
                </span>
              </label>
            )}

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 w-full py-4 rounded-md text-[14px] font-bold uppercase tracking-[0.06em] text-white"
              style={{
                background: "var(--color-burg3)",
                boxShadow: "0 6px 18px rgba(196,38,78,0.32), inset 0 1px 0 rgba(255,255,255,0.18)",
              }}
            >
              {mode === "signup" ? "Crear cuenta" : "Ingresar"} <span aria-hidden>→</span>
            </button>
            {submitted && (
              <div className="mt-3 rounded-md px-4 py-3 text-[13px] font-medium text-center" style={{ background: "rgba(196,38,78,0.12)", color: "var(--color-burg3)", border: "1px solid rgba(196,38,78,0.25)" }}>
                {mode === "signup" ? "✓ ¡Cuenta creada! Revisá tu email para confirmar." : "✓ ¡Bienvenido de vuelta!"}
              </div>
            )}
          </form>

          <div className="mt-5 text-center text-[13px] text-[var(--color-txt2)]">
            {mode === "signup" ? (
              <>
                ¿Ya tenés cuenta?{" "}
                <button
                  type="button"
                  onClick={() => setMode("signin")}
                  className="font-semibold"
                  style={{ color: "var(--color-burg3)" }}
                >
                  Ingresar
                </button>
              </>
            ) : (
              <>
                ¿Sos nuevo?{" "}
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className="font-semibold"
                  style={{ color: "var(--color-burg3)" }}
                >
                  Crear cuenta
                </button>
              </>
            )}
          </div>
        </div>

        <div className="flex gap-4 text-[11px] text-[var(--color-txt3)] mt-8">
          <span>© 2026 DemandPass</span>
          <Link href="/terms">Términos</Link>
          <Link href="/privacy">Privacidad</Link>
        </div>
      </div>

      {/* Right — visual */}
      <div
        className="relative overflow-hidden hidden lg:flex flex-col justify-center p-12"
        style={{ background: "linear-gradient(135deg, #1a0a14 0%, #3a0d22 50%, var(--color-bg) 100%)" }}
      >
        {/* DP watermark */}
        <div
          className="absolute -top-[2%] -right-[8%] uppercase select-none pointer-events-none leading-[0.78]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 480,
            color: "rgba(255,255,255,0.025)",
            letterSpacing: "-0.04em",
          }}
        >
          DP
        </div>
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-[480px] mb-8 z-10">
          <Pill variant="live" pulse>Anoche · 23:42</Pill>
          <h2
            className="uppercase mt-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 4.5vw, 56px)",
              lineHeight: 0.95,
              letterSpacing: "0.005em",
            }}
          >
            Lenny Kravitz<br />
            <span style={{ color: "var(--color-burg3)" }}>fue confirmado.</span>
          </h2>
          <p className="text-[15px] text-[var(--color-txt)] mt-3.5 leading-[1.5]">
            8.245 fans con DemandPass tuvieron acceso a la preventa antes que el resto. 92% compró entrada.
          </p>
        </div>

        <div className="relative z-10 flex flex-col gap-3 max-w-[420px]">
          {[
            { c: "LK", a: "Lenny Kravitz", stat: "CONFIRMADO",    val: "8.245 fans con acceso",       col: "var(--color-emerald2)" },
            { c: "KP", a: "K-Pop Night",   stat: "EN CAMPAÑA",    val: "9.850 / 12.000 apoyos",       col: "var(--color-burg3)" },
            { c: "SZ", a: "SZA",           stat: "ALTA DEMANDA",  val: "+580 esta semana",            col: "var(--color-amber2)" },
          ].map((c) => (
            <div
              key={c.a}
              className="flex items-center gap-3.5 p-3.5 rounded-md"
              style={{
                background: "rgba(15,15,22,0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--color-border2)",
              }}
            >
              <div
                className="w-11 h-11 rounded shrink-0 flex items-center justify-center text-[16px] font-extrabold"
                style={{
                  background: "linear-gradient(135deg, #2a1a1a, #6b1b30)",
                  border: "1px solid var(--color-border2)",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.005em",
                }}
              >
                {c.c}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] font-bold">{c.a}</div>
                <div className="text-[11px] text-[var(--color-txt3)]" style={{ fontFamily: "var(--font-mono)" }}>
                  {c.val}
                </div>
              </div>
              <span className="text-[9px] font-bold tracking-[0.08em]" style={{ color: c.col }}>
                {c.stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OAuthBtn({ glyph, children }: { glyph: string; children: React.ReactNode }) {
  const icons: Record<string, React.ReactNode> = {
    G: (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
    "": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  };
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-md text-[13px] font-semibold"
      style={{
        background: "var(--color-surface2)",
        border: "1px solid var(--color-border2)",
        color: "var(--color-txt)",
        fontFamily: "var(--font-sans)",
      }}
    >
      {icons[glyph] ?? null}
      {children}
    </button>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.08em] font-semibold text-[var(--color-txt2)] mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  background: "var(--color-surface2)",
  border: "1px solid var(--color-border2)",
  borderRadius: 6,
  color: "var(--color-txt)",
  fontSize: 14,
  fontFamily: "var(--font-sans)",
  outline: "none",
};
