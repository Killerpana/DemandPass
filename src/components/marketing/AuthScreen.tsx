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
      <div className="hidden lg:flex items-center justify-center relative overflow-hidden px-8"
        style={{ background: "linear-gradient(135deg, #0a0a11 0%, #130610 100%)", borderLeft: "1px solid var(--color-border)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(163,22,69,0.18) 0%, transparent 60%)" }} />

        <div className="relative z-10 w-full max-w-[400px]">
          {/* URL bar */}
          <div className="flex items-center gap-2.5 mb-5 px-3 py-2 rounded-lg"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
            <span className="text-[11px] font-mono flex-1 truncate" style={{ color: "rgba(255,255,255,0.4)" }}>
              demandpass.app/console/lenny-kravitz
            </span>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-[0.1em]"
              style={{ background: "rgba(163,22,69,0.25)", color: "#E43A66" }}>LIVE</span>
          </div>

          {/* Main card */}
          <div className="rounded-2xl overflow-hidden"
            style={{ background: "rgba(15,15,22,0.98)", border: "1px solid rgba(255,255,255,0.09)", boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(163,22,69,0.1)" }}>

            {/* Header */}
            <div className="px-5 pt-5 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[15px] font-black shrink-0"
                  style={{ background: "linear-gradient(135deg, #7a2a8a, #4a1a6a)", fontFamily: "var(--font-display)", color: "white", boxShadow: "0 4px 12px rgba(122,42,138,0.4)" }}>
                  LK
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--color-txt3)" }}>Artista</span>
                    <span className="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-[0.08em]"
                      style={{ background: "rgba(163,22,69,0.2)", color: "#E43A66" }}>Oficial</span>
                  </div>
                  <p className="font-[family-name:var(--font-display)] text-[17px] font-black uppercase leading-tight">Lenny Kravitz</p>
                  <p className="text-[11px] mt-0.5" style={{ color: "var(--color-txt3)" }}>Raise Vibration Tour · 2026</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[9px] uppercase tracking-[0.08em] font-bold mb-1" style={{ color: "var(--color-txt3)" }}>Apoyos</p>
                  <p className="font-[family-name:var(--font-display)] text-[26px] font-black leading-none" style={{ color: "#A31645" }}>5.423</p>
                  <p className="text-[10px] font-semibold mt-0.5" style={{ color: "#10b981" }}>↑ +148 hoy</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="flex justify-between text-[10px] mb-1.5" style={{ color: "var(--color-txt3)" }}>
                  <span>Progreso al objetivo</span>
                  <span style={{ color: "#f59e0b" }}>67% · 2.577 restantes</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                  <div className="h-full rounded-full" style={{ width: "67%", background: "linear-gradient(90deg, #A31645, #E43A66)" }} />
                </div>
              </div>
            </div>

            {/* Demand Score + Demand Map */}
            <div className="grid grid-cols-[auto_1fr] gap-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {/* Score */}
              <div className="px-5 py-4 flex flex-col items-center justify-center gap-1 border-r"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-center" style={{ color: "var(--color-txt3)" }}>Demand<br/>Score</p>
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg viewBox="0 0 56 56" className="absolute inset-0 w-full h-full" style={{ transform: "rotate(-90deg)" }}>
                    <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                    <circle cx="28" cy="28" r="22" fill="none" stroke="#f59e0b" strokeWidth="4"
                      strokeDasharray={`${2 * 3.14159 * 22 * 0.91} ${2 * 3.14159 * 22}`}
                      strokeLinecap="round" />
                  </svg>
                  <span className="font-[family-name:var(--font-display)] text-[18px] font-black" style={{ color: "#f59e0b" }}>91</span>
                </div>
                <p className="text-[9px] font-semibold" style={{ color: "#f59e0b" }}>Alto</p>
              </div>

              {/* Cities */}
              <div className="px-4 py-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.1em] mb-3" style={{ color: "var(--color-txt3)" }}>Demand Map</p>
                {[
                  { city: "Buenos Aires", n: "5.420", w: "100%", trend: "↑" },
                  { city: "Córdoba",      n: "1.860", w: "34%",  trend: "↑" },
                  { city: "Rosario",      n: "1.120", w: "21%",  trend: "→" },
                  { city: "Mendoza",      n: "740",   w: "14%",  trend: "↑" },
                ].map(r => (
                  <div key={r.city} className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] w-20 shrink-0 truncate">{r.city}</span>
                    <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                      <div className="h-full rounded-full" style={{ width: r.w, background: "#A31645" }} />
                    </div>
                    <span className="text-[10px] w-8 text-right font-mono" style={{ color: "var(--color-txt3)" }}>{r.n}</span>
                    <span className="text-[10px] w-3" style={{ color: r.trend === "↑" ? "#10b981" : "#6b7280" }}>{r.trend}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fan Signals */}
            <div className="px-5 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-[9px] font-bold uppercase tracking-[0.1em] mb-2.5" style={{ color: "var(--color-txt3)" }}>Fan Signals</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Prefieren campo",    value: "58%" },
                  { label: "USD 70–120",         value: "52%" },
                  { label: "Preventa 48hs",      value: "71%" },
                ].map(s => (
                  <div key={s.label} className="text-center p-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="font-[family-name:var(--font-display)] text-[16px] font-black" style={{ color: "#A31645" }}>{s.value}</p>
                    <p className="text-[9px] mt-0.5 leading-tight" style={{ color: "var(--color-txt3)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-3.5">
              <div className="grid grid-cols-3 gap-3 mb-3">
                {[
                  { label: "Precio aceptado", value: "USD 84",         color: "var(--color-txt)" },
                  { label: "Forecast venue",  value: "Movistar Arena", color: "var(--color-txt)", small: true },
                  { label: "Confianza",       value: "Alta · 91%",     color: "#10b981"          },
                ].map(f => (
                  <div key={f.label}>
                    <p className="text-[8px] uppercase tracking-[0.08em] font-bold mb-1" style={{ color: "var(--color-txt3)" }}>{f.label}</p>
                    <p className={(f as any).small ? "text-[10px] font-bold leading-tight" : "text-[12px] font-bold"} style={{ color: f.color }}>{f.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-1.5 opacity-80" />
                Actualizado hace 6 seg · 12 productoras observando
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
