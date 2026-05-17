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
            onSubmit={(e) => { e.preventDefault(); }}
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
      {glyph && <span className="text-[16px] font-extrabold">{glyph}</span>}
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
