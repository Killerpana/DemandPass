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

      <div className="hidden lg:flex items-center justify-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d0d14 0%, #1a0812 100%)", borderLeft: "1px solid var(--color-border)" }}>
        <div className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(ellipse at 50% 50%, #A31645 0%, transparent 65%)" }} />
        <div className="relative z-10 px-14 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-6" style={{ color: "var(--color-burg3)" }}>
            DemandPass — Demo
          </p>
          <div className="space-y-3">
            {ROLES.map(({ id, label, desc, dest: d, Icon }) => (
              <div key={id} className="flex items-center gap-4 px-5 py-4 rounded-xl text-left"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(163,22,69,0.2)" }}>
                  <Icon size={16} color="#E43A66" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <p className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.04em]">{label}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: "var(--color-txt3)" }}>{desc}</p>
                </div>
                <span className="text-[11px] font-bold font-mono" style={{ color: "rgba(163,22,69,0.6)" }}>{d}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] mt-8 leading-[1.7]" style={{ color: "var(--color-txt3)" }}>
            Seleccioná tu rol y usá las<br />credenciales demo para explorar.
          </p>
        </div>
      </div>
    </div>
  );
}
