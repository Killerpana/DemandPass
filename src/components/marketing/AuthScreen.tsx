"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Users, Music2, Building2 } from "lucide-react";

type Role = "fan" | "artista" | "productora";

const ROLES: { id: Role; label: string; desc: string; dest: string; Icon: React.ElementType }[] = [
  { id: "fan",        label: "Soy fan",        desc: "Quiero apoyar artistas",   dest: "/perfil",    Icon: Users     },
  { id: "artista",    label: "Soy artista",     desc: "Quiero medir mi demanda",  dest: "/artistas/dashboard",  Icon: Music2    },
  { id: "productora", label: "Soy productora",  desc: "Quiero datos de booking",  dest: "/dashboard", Icon: Building2 },
];

const DEMO = { email: "demo@demandpass.app", pass: "demo1234" };

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "11px 13px", borderRadius: 8,
  background: "var(--color-surface2)", border: "1px solid var(--color-border2)",
  color: "var(--color-txt)", fontSize: 14, outline: "none",
};

export function AuthScreen() {
  const router  = useRouter();
  const [role, setRole]   = useState<Role>("fan");
  const [email, setEmail] = useState("");
  const [pass, setPass]   = useState("");

  const dest = ROLES.find(r => r.id === role)!.dest;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(dest);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]"
      style={{ background: "var(--color-bg)", minHeight: "calc(100vh - 64px)" }}>

      <div className="flex items-center justify-center px-8 sm:px-14 py-14">
        <div className="w-full max-w-[400px]">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(38px,5vw,54px)] font-black uppercase leading-[0.93] mb-8"
            style={{ letterSpacing: "0.005em" }}>
            EMPEZÁ<br />
            <span style={{ color: "var(--color-burg3)" }}>HOY MISMO.</span>
          </h1>

          <p className="text-[11px] font-bold uppercase tracking-[0.1em] mb-2.5" style={{ color: "var(--color-txt3)" }}>
            ¿Quién sos?
          </p>
          <div className="flex flex-col gap-2 mb-6">
            {ROLES.map(({ id, label, desc, dest: d, Icon }) => {
              const active = role === id;
              return (
                <button key={id} type="button" onClick={() => setRole(id)}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all"
                  style={{
                    background: active ? "rgba(163,22,69,0.1)" : "var(--color-surface)",
                    border: active ? "1px solid rgba(163,22,69,0.5)" : "1px solid var(--color-border)",
                  }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: active ? "var(--color-burg3)" : "var(--color-surface2)" }}>
                    <Icon size={16} color={active ? "white" : "var(--color-txt3)"} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <p className="font-[family-name:var(--font-display)] text-[14px] font-bold uppercase tracking-[0.04em]"
                      style={{ color: active ? "var(--color-txt)" : "var(--color-txt2)" }}>{label}</p>
                    <p className="text-[11px]" style={{ color: "var(--color-txt3)" }}>{desc}</p>
                  </div>
                  {active && <span className="text-[11px] font-bold font-mono" style={{ color: "var(--color-burg3)" }}>→ {d}</span>}
                </button>
              );
            })}
          </div>

          <button type="button" onClick={() => { setEmail(DEMO.email); setPass(DEMO.pass); }}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl mb-5 transition-all hover:brightness-110"
            style={{ background: "rgba(163,22,69,0.08)", border: "1px dashed rgba(163,22,69,0.4)" }}>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] mb-0.5" style={{ color: "var(--color-burg3)" }}>
                Acceso demo
              </p>
              <p className="text-[12px]" style={{ color: "var(--color-txt2)" }}>{DEMO.email} · {DEMO.pass}</p>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.06em] px-3 py-1.5 rounded-lg shrink-0"
              style={{ background: "var(--color-burg3)", color: "white" }}>Usar</span>
          </button>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.08em] mb-1.5" style={{ color: "var(--color-txt2)" }}>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="hola@ejemplo.com" style={inputStyle} />
            </div>
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.08em] mb-1.5" style={{ color: "var(--color-txt2)" }}>Contraseña</label>
              <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="••••••••" style={inputStyle} />
            </div>
            <button type="submit"
              className="mt-1 w-full py-3.5 rounded-md font-[family-name:var(--font-display)] text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-burg3)", boxShadow: "0 6px 18px rgba(196,38,78,0.35), inset 0 1px 0 rgba(255,255,255,0.18)" }}>
              Empezar →
            </button>
          </form>
        </div>
      </div>

      {/* Right — campaign preview */}
      <div className="hidden lg:flex items-center justify-center relative overflow-hidden px-10"
        style={{ background: "linear-gradient(135deg, #0d0d14 0%, #14080e 100%)", borderLeft: "1px solid var(--color-border)" }}>
        <div className="absolute inset-0 opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 60% 40%, #A31645 0%, transparent 65%)" }} />
        <div className="relative z-10 w-full max-w-[380px]">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--color-txt3)" }}>
              demandpass.app/console/lenny-kravitz · LIVE
            </span>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(17,17,24,0.95)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 32px 64px rgba(0,0,0,0.6)" }}>
            <div className="px-5 py-4 flex items-center gap-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[13px] font-black shrink-0"
                style={{ background: "#7a2a8a", fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.9)" }}>LK</div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] uppercase tracking-[0.1em] font-semibold" style={{ color: "var(--color-txt3)" }}>Artista</p>
                <p className="font-[family-name:var(--font-display)] text-[15px] font-black uppercase">Lenny Kravitz</p>
                <p className="text-[11px]" style={{ color: "var(--color-txt3)" }}>Raise Vibration Tour · 2026</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[9px] uppercase tracking-[0.08em] font-semibold mb-0.5" style={{ color: "var(--color-txt3)" }}>Apoyos</p>
                <p className="font-[family-name:var(--font-display)] text-[22px] font-black" style={{ color: "#A31645" }}>5.420</p>
              </div>
            </div>
            <div className="px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[9px] uppercase tracking-[0.1em] font-semibold" style={{ color: "var(--color-txt3)" }}>Demanda por ciudad</p>
                <p className="text-[10px] font-semibold" style={{ color: "#10b981" }}>↑ +148 hoy</p>
              </div>
              {[
                { city: "Buenos Aires", n: "5.420", w: "100%" },
                { city: "Córdoba",      n: "1.860", w: "34%"  },
                { city: "Rosario",      n: "1.120", w: "21%"  },
                { city: "Mendoza",      n: "740",   w: "14%"  },
              ].map(r => (
                <div key={r.city} className="flex items-center gap-3 mb-2">
                  <span className="text-[12px] w-24 shrink-0">{r.city}</span>
                  <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                    <div className="h-full rounded-full" style={{ width: r.w, background: "#A31645" }} />
                  </div>
                  <span className="text-[11px] w-9 text-right font-mono" style={{ color: "var(--color-txt3)" }}>{r.n}</span>
                </div>
              ))}
            </div>
            <div className="px-5 py-4 grid grid-cols-3 gap-3">
              {[
                { label: "Precio aceptado", value: "USD 84",         color: "var(--color-txt)" },
                { label: "Forecast venue",  value: "Movistar Arena", color: "var(--color-txt)" },
                { label: "Confianza",       value: "Alta · 91%",     color: "#10b981"          },
              ].map(f => (
                <div key={f.label}>
                  <p className="text-[9px] uppercase tracking-[0.07em] font-semibold mb-1" style={{ color: "var(--color-txt3)" }}>{f.label}</p>
                  <p className="text-[12px] font-bold" style={{ color: f.color }}>{f.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold"
              style={{ background: "rgba(163,22,69,0.12)", border: "1px solid rgba(163,22,69,0.25)", color: "#E43A66" }}>
              Demand Score <span className="font-black ml-1">91</span>/100
            </div>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
