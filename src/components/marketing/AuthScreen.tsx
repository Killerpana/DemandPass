"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Role   = "fan" | "artista" | "productora";
type Mode   = "signup" | "signin";

const ROLES: { id: Role; label: string; desc: string; dest: string }[] = [
  { id: "fan",        label: "Soy fan",        desc: "Quiero apoyar artistas",      dest: "/perfil"    },
  { id: "artista",    label: "Soy artista",     desc: "Quiero medir mi demanda",     dest: "/artistas"  },
  { id: "productora", label: "Soy productora",  desc: "Quiero datos de booking",     dest: "/dashboard" },
];

const DEMO = { email: "demo@demandpass.app", pass: "demo1234" };

const HEADLINES: Record<Mode, Record<Role, string>> = {
  signup: {
    fan:        "Apoyá a tu\npróximo show.",
    artista:    "Medí dónde\nestán tus fans.",
    productora: "Decidí con datos,\nno con intuición.",
  },
  signin: {
    fan:        "Bienvenido\nde vuelta.",
    artista:    "Bienvenido\nde vuelta.",
    productora: "Bienvenido\nde vuelta.",
  },
};

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 12px", borderRadius: 8,
  background: "var(--color-surface2)", border: "1px solid var(--color-border2)",
  color: "var(--color-txt)", fontSize: 14, outline: "none",
};

export function AuthScreen({ initialMode = "signup" }: { initialMode?: Mode }) {
  const router = useRouter();
  const [mode, setMode]   = useState<Mode>(initialMode);
  const [role, setRole]   = useState<Role>("fan");
  const [email, setEmail] = useState("");
  const [pass, setPass]   = useState("");

  const dest = ROLES.find(r => r.id === role)!.dest;

  function fillDemo() {
    setEmail(DEMO.email);
    setPass(DEMO.pass);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(dest);
  }

  const headline = HEADLINES[mode][role].split("\n");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr]"
      style={{ background: "var(--color-bg)", minHeight: "calc(100vh - 64px)" }}>

      {/* Left — form */}
      <div className="px-8 sm:px-14 py-12 flex flex-col justify-center">
        <div className="max-w-[420px] w-full mx-auto">

          {/* Eyebrow */}
          <p className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-4"
            style={{ color: "var(--color-burg3)" }}>
            {mode === "signup" ? "Crear cuenta" : "Ingresar"}
          </p>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-display)] uppercase mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 0.95, letterSpacing: "0.005em" }}>
            {headline[0]}<br />{headline[1]}
          </h1>

          {/* Rol selector */}
          <div className="flex gap-1 p-1 rounded-xl mb-6"
            style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}>
            {ROLES.map(r => (
              <button key={r.id} type="button" onClick={() => setRole(r.id)}
                className="flex-1 py-2 px-2 rounded-lg text-center transition-all"
                style={{
                  background: role === r.id ? "var(--color-burg3)" : "transparent",
                  color: role === r.id ? "white" : "var(--color-txt2)",
                  fontFamily: "var(--font-display)",
                  fontSize: "12px", fontWeight: 700,
                  letterSpacing: "0.04em", textTransform: "uppercase",
                  boxShadow: role === r.id ? "0 4px 12px rgba(196,38,78,0.35)" : "none",
                }}>
                {r.label}
              </button>
            ))}
          </div>

          {/* Demo banner */}
          <button type="button" onClick={fillDemo}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl mb-6 text-left transition-all hover:brightness-110"
            style={{ background: "rgba(163,22,69,0.1)", border: "1px dashed rgba(163,22,69,0.4)" }}>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] mb-1" style={{ color: "var(--color-burg3)" }}>
                ◆ Acceso demo — click para pre-cargar
              </p>
              <p className="text-[12px]" style={{ color: "var(--color-txt2)" }}>
                {DEMO.email} · {DEMO.pass}
              </p>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.06em] px-3 py-1.5 rounded-lg"
              style={{ background: "var(--color-burg3)", color: "white" }}>
              Usar
            </span>
          </button>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            {role === "productora" && mode === "signup" && (
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.08em] mb-1.5"
                  style={{ color: "var(--color-txt2)" }}>Productora</label>
                <input type="text" placeholder="DF Entertainment" style={inputStyle} />
              </div>
            )}
            {role === "artista" && mode === "signup" && (
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.08em] mb-1.5"
                  style={{ color: "var(--color-txt2)" }}>Nombre artístico</label>
                <input type="text" placeholder="Tu nombre o banda" style={inputStyle} />
              </div>
            )}

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.08em] mb-1.5"
                style={{ color: "var(--color-txt2)" }}>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="hola@ejemplo.com" style={inputStyle} required />
            </div>
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.08em] mb-1.5"
                style={{ color: "var(--color-txt2)" }}>Contraseña</label>
              <input type="password" value={pass} onChange={e => setPass(e.target.value)}
                placeholder="Mínimo 8 caracteres" style={inputStyle} required minLength={8} />
            </div>

            <button type="submit"
              className="mt-2 w-full py-3.5 rounded-md font-[family-name:var(--font-display)] text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-burg3)", boxShadow: "0 6px 18px rgba(196,38,78,0.35), inset 0 1px 0 rgba(255,255,255,0.18)" }}>
              {mode === "signup" ? "Crear cuenta" : "Ingresar"} →
            </button>
          </form>

          <p className="mt-5 text-center text-[13px]" style={{ color: "var(--color-txt2)" }}>
            {mode === "signup" ? (
              <>¿Ya tenés cuenta?{" "}
                <button type="button" onClick={() => setMode("signin")}
                  className="font-semibold" style={{ color: "var(--color-burg3)" }}>Ingresar</button>
              </>
            ) : (
              <>¿Sos nuevo?{" "}
                <button type="button" onClick={() => setMode("signup")}
                  className="font-semibold" style={{ color: "var(--color-burg3)" }}>Crear cuenta</button>
              </>
            )}
          </p>

          <p className="text-[11px] mt-4 text-center" style={{ color: "var(--color-txt3)" }}>
            Te redirigimos a:{" "}
            <span style={{ color: "var(--color-burg3)" }}>{dest}</span>
          </p>
        </div>
      </div>

      {/* Right — visual */}
      <div className="hidden lg:flex flex-col items-center justify-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d0d14 0%, #1a0812 100%)" }}>
        <div className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(ellipse at 50% 50%, #A31645 0%, transparent 65%)" }} />
        <div className="relative z-10 text-center px-12">
          <div className="font-[family-name:var(--font-display)] text-[72px] font-black uppercase leading-none mb-4"
            style={{ color: "rgba(163,22,69,0.15)", letterSpacing: "-0.02em" }}>
            DEMAND<br />PASS
          </div>
          <div className="space-y-4 mt-8">
            {[
              { role: "Fan",        dest: "/perfil",    desc: "Campañas y tokens" },
              { role: "Artista",    dest: "/artistas",  desc: "Dashboard propio" },
              { role: "Productora", dest: "/dashboard", desc: "Datos e inteligencia" },
            ].map(r => (
              <div key={r.role} className="flex items-center gap-4 px-5 py-3 rounded-xl text-left"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold"
                  style={{ background: "rgba(163,22,69,0.25)", color: "var(--color-burg3)" }}>
                  {r.role[0]}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.04em]">{r.role}</p>
                  <p className="text-[11px]" style={{ color: "var(--color-txt3)" }}>{r.desc} → <span style={{ color: "var(--color-burg3)" }}>{r.dest}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
