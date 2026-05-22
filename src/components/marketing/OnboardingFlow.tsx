"use client";
// src/components/marketing/OnboardingFlow.tsx
// Onboarding post-registro: Ciudad → Artistas favoritos → Precio

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Check, ChevronRight, MapPin, Music, DollarSign } from "lucide-react";

// ── Datos ────────────────────────────────────────────────────────────────────

const CIUDADES = [
  "Buenos Aires", "Córdoba", "Rosario", "Mendoza", "Salta",
  "Ciudad de México", "Monterrey", "Guadalajara",
  "Santiago", "Bogotá", "Lima", "Montevideo", "Otra ciudad",
];

const ARTISTAS = [
  { id: "bad-bunny",    name: "Bad Bunny",       genre: "Reggaeton" },
  { id: "billie",       name: "Billie Eilish",   genre: "Pop" },
  { id: "lenny",        name: "Lenny Kravitz",   genre: "Rock" },
  { id: "tini",         name: "Tini",            genre: "Pop Latino" },
  { id: "sza",          name: "SZA",             genre: "R&B" },
  { id: "arctic",       name: "Arctic Monkeys",  genre: "Rock" },
  { id: "tame",         name: "Tame Impala",     genre: "Indie" },
  { id: "tyler",        name: "Tyler the Creator", genre: "Hip-hop" },
  { id: "oasis",        name: "Oasis",           genre: "Rock" },
  { id: "pharrell",     name: "Pharrell",        genre: "Hip-hop" },
  { id: "justin",       name: "Justin Bieber",   genre: "Pop" },
  { id: "duki",         name: "Duki",            genre: "Trap" },
];

const PRECIOS = [
  { id: "low",    label: "Hasta USD 50",      desc: "Shows accesibles", icon: "🎟" },
  { id: "mid",    label: "USD 50 – 120",      desc: "La mayoría de shows", icon: "⭐" },
  { id: "high",   label: "USD 120 – 250",     desc: "Shows premium", icon: "🔥" },
  { id: "vip",    label: "Más de USD 250",    desc: "VIP y experiencias", icon: "💎" },
];

const STEPS = [
  { n: 1, icon: MapPin,    label: "Tu ciudad" },
  { n: 2, icon: Music,     label: "Artistas" },
  { n: 3, icon: DollarSign, label: "Presupuesto" },
];

// ── Componente ────────────────────────────────────────────────────────────────

export function OnboardingFlow() {
  const [step, setStep]           = useState(1);
  const [ciudad, setCiudad]       = useState("");
  const [artistas, setArtistas]   = useState<string[]>([]);
  const [precio, setPrecio]       = useState("");
  const [done, setDone]           = useState(false);

  function toggleArtista(id: string) {
    setArtistas((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  }

  function next() {
    if (step < 3) setStep((s) => s + 1);
    else setDone(true);
  }

  function canNext() {
    if (step === 1) return ciudad !== "";
    if (step === 2) return artistas.length >= 1;
    if (step === 3) return precio !== "";
    return false;
  }

  if (done) return <DoneScreen artistas={artistas} ciudad={ciudad} />;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--color-bg)" }}>
      {/* Header */}
      <header className="px-8 py-5 flex items-center justify-between border-b border-[var(--color-border)]">
        <Logo height={28} />
        <Link href="/perfil" className="text-[12px]" style={{ color: "var(--color-txt3)" }}>
          Completar después →
        </Link>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-[520px]">

          {/* Progress steps */}
          <div className="flex items-center gap-0 mb-10">
            {STEPS.map((s, i) => {
              const done = step > s.n;
              const active = step === s.n;
              const Icon = s.icon;
              return (
                <div key={s.n} className="flex items-center flex-1">
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: done ? "var(--color-emerald2)" : active ? "var(--color-burg3)" : "var(--color-surface2)",
                        border: `2px solid ${done ? "var(--color-emerald2)" : active ? "var(--color-burg3)" : "var(--color-border)"}`,
                        boxShadow: active ? "0 0 16px rgba(196,38,78,0.35)" : "none",
                      }}
                    >
                      {done
                        ? <Check size={14} color="#fff" />
                        : <Icon size={14} color={active ? "#fff" : "var(--color-txt3)"} />
                      }
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.08em] font-semibold" style={{ color: active ? "var(--color-txt)" : "var(--color-txt3)" }}>
                      {s.label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      className="flex-1 h-px mx-3 mb-5"
                      style={{ background: step > s.n ? "var(--color-emerald2)" : "var(--color-border)" }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Card */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", boxShadow: "0 16px 48px rgba(0,0,0,0.4)" }}
          >
            {/* Step 1 — Ciudad */}
            {step === 1 && (
              <>
                <h2 className="uppercase mb-1" style={{ fontFamily: "var(--font-display)", fontSize: 28 }}>
                  ¿Desde dónde <span style={{ color: "var(--color-burg3)" }}>ves shows?</span>
                </h2>
                <p className="text-[13px] mb-6" style={{ color: "var(--color-txt3)" }}>
                  Te mostramos las campañas más relevantes para tu ciudad.
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {CIUDADES.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCiudad(c)}
                      className="px-4 py-2.5 rounded-lg text-[13px] font-medium text-left transition-all"
                      style={{
                        background: ciudad === c ? "rgba(196,38,78,0.12)" : "var(--color-surface2)",
                        border: `1px solid ${ciudad === c ? "var(--color-burg3)" : "var(--color-border)"}`,
                        color: ciudad === c ? "var(--color-txt)" : "var(--color-txt2)",
                      }}
                    >
                      {ciudad === c && <Check size={12} className="inline mr-1.5" style={{ color: "var(--color-burg3)" }} />}
                      {c}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step 2 — Artistas */}
            {step === 2 && (
              <>
                <h2 className="uppercase mb-1" style={{ fontFamily: "var(--font-display)", fontSize: 28 }}>
                  ¿A quién querés <span style={{ color: "var(--color-burg3)" }}>ver en vivo?</span>
                </h2>
                <p className="text-[13px] mb-6" style={{ color: "var(--color-txt3)" }}>
                  Elegí al menos uno. Podés cambiar esto después.
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {ARTISTAS.map((a) => {
                    const sel = artistas.includes(a.id);
                    return (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => toggleArtista(a.id)}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all"
                        style={{
                          background: sel ? "rgba(196,38,78,0.12)" : "var(--color-surface2)",
                          border: `1px solid ${sel ? "var(--color-burg3)" : "var(--color-border)"}`,
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-[11px] font-extrabold"
                          style={{
                            background: sel ? "var(--color-burg3)" : "var(--color-surface)",
                            color: sel ? "#fff" : "var(--color-txt3)",
                            fontFamily: "var(--font-display)",
                          }}
                        >
                          {sel ? <Check size={13} /> : a.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="text-[12px] font-semibold" style={{ color: sel ? "var(--color-txt)" : "var(--color-txt2)" }}>{a.name}</div>
                          <div className="text-[10px]" style={{ color: "var(--color-txt3)" }}>{a.genre}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {artistas.length > 0 && (
                  <p className="text-[11px] mt-3 text-center" style={{ color: "var(--color-burg3)" }}>
                    {artistas.length} artista{artistas.length > 1 ? "s" : ""} seleccionado{artistas.length > 1 ? "s" : ""}
                  </p>
                )}
              </>
            )}

            {/* Step 3 — Precio */}
            {step === 3 && (
              <>
                <h2 className="uppercase mb-1" style={{ fontFamily: "var(--font-display)", fontSize: 28 }}>
                  ¿Cuánto gastás <span style={{ color: "var(--color-burg3)" }}>en una entrada?</span>
                </h2>
                <p className="text-[13px] mb-6" style={{ color: "var(--color-txt3)" }}>
                  Filtramos campañas según tu rango habitual.
                </p>
                <div className="flex flex-col gap-3">
                  {PRECIOS.map((p) => {
                    const sel = precio === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPrecio(p.id)}
                        className="flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all"
                        style={{
                          background: sel ? "rgba(196,38,78,0.12)" : "var(--color-surface2)",
                          border: `1px solid ${sel ? "var(--color-burg3)" : "var(--color-border)"}`,
                          boxShadow: sel ? "0 0 0 1px var(--color-burg3)" : "none",
                        }}
                      >
                        <span className="text-[24px]">{p.icon}</span>
                        <div className="flex-1">
                          <div className="text-[14px] font-bold" style={{ color: sel ? "var(--color-txt)" : "var(--color-txt2)" }}>{p.label}</div>
                          <div className="text-[11px] mt-0.5" style={{ color: "var(--color-txt3)" }}>{p.desc}</div>
                        </div>
                        {sel && <Check size={16} style={{ color: "var(--color-burg3)" }} />}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={next}
            disabled={!canNext()}
            className="w-full mt-5 py-4 rounded-xl text-[14px] font-bold uppercase tracking-[0.06em] flex items-center justify-center gap-2 transition-all"
            style={{
              background: canNext() ? "var(--color-burg3)" : "var(--color-surface2)",
              color: canNext() ? "#fff" : "var(--color-txt3)",
              boxShadow: canNext() ? "0 6px 24px rgba(196,38,78,0.35)" : "none",
              cursor: canNext() ? "pointer" : "not-allowed",
            }}
          >
            {step < 3 ? "Continuar" : "Finalizar"}
            <ChevronRight size={16} />
          </button>

          <p className="text-center text-[11px] mt-3" style={{ color: "var(--color-txt3)" }}>
            Paso {step} de 3
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Pantalla final ────────────────────────────────────────────────────────────

function DoneScreen({ artistas, ciudad }: { artistas: string[]; ciudad: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ background: "var(--color-bg)" }}>
      <div className="w-full max-w-[440px] text-center">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "rgba(196,38,78,0.12)", border: "2px solid var(--color-burg3)" }}
        >
          <Check size={36} style={{ color: "var(--color-burg3)" }} />
        </div>

        <h2
          className="uppercase mb-3"
          style={{ fontFamily: "var(--font-display)", fontSize: 36, lineHeight: 0.95 }}
        >
          ¡Todo listo,<br />
          <span style={{ color: "var(--color-burg3)" }}>tu perfil está activo!</span>
        </h2>

        <p className="text-[14px] mb-2" style={{ color: "var(--color-txt2)" }}>
          Seguimos {artistas.length} artista{artistas.length > 1 ? "s" : ""} desde <strong>{ciudad}</strong>.
        </p>
        <p className="text-[13px] mb-8" style={{ color: "var(--color-txt3)" }}>
          Cuando haya una campaña nueva que coincida con tus gustos, te avisamos.
        </p>

        <Link
          href="/campaigns"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[14px] font-bold uppercase tracking-[0.06em] text-white"
          style={{ background: "var(--color-burg3)", boxShadow: "0 8px 24px rgba(196,38,78,0.4)" }}
        >
          Ver campañas activas →
        </Link>

        <div className="mt-4">
          <Link href="/perfil" className="text-[12px]" style={{ color: "var(--color-txt3)" }}>
            Ir a mi perfil
          </Link>
        </div>
      </div>
    </div>
  );
}
