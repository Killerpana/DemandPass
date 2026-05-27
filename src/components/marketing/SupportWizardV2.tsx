// src/components/marketing/SupportWizardV2.tsx — v3.1
// Bugfix: receive the Campaign directly instead of looking it up by array index.
// The original v3 version did `campaigns[campaignId]` which only resolves the
// 3 campaigns in src/lib/data.ts — it broke for the 9 extra campaigns from
// marketing-data.ts (always fell back to Lenny Kravitz). This version is fed
// the full Campaign object by the page.
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { levels, wizardSteps } from "@/lib/data";
import type { Campaign } from "@/lib/data";
import { Pill } from "@/components/ui/Pill";

type Key = "city" | "price" | "ticket" | "benefits" | "level";
interface WizardData {
  city: string | null;
  price: string | null;
  ticket: string | null;
  benefits: string[];
  level: string | null;
}

export function SupportWizardV2({ campaign }: { campaign: Campaign }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<WizardData>({
    city: null, price: null, ticket: null, benefits: [], level: null,
  });

  const cfg = wizardSteps[step];
  const total = wizardSteps.length;

  function selectSingle(key: Key, val: string) {
    setData((d) => ({ ...d, [key]: val }));
  }

  function toggleBenefit(b: string) {
    setData((d) => ({
      ...d,
      benefits: d.benefits.includes(b) ? d.benefits.filter((x) => x !== b) : [...d.benefits, b],
    }));
  }

  function canAdvance(): boolean {
    const c = wizardSteps[step];
    if (c.type === "single" && "key" in c) return data[c.key as Key] !== null;
    if (c.type === "level") return data.level !== null;
    return true;
  }

  function next() {
    if (!canAdvance()) return;
    if (step === total - 1) {
      const num = String(Math.floor(Math.random() * 8900 + 100)).padStart(4, "0");
      const city = (data.city || "BA").slice(0, 2).toUpperCase();
      const token = `DP-${campaign.img}-${city}-${num}`;
      const params = new URLSearchParams({
        token,
        level: data.level || "Bronce",
        city: data.city || "",
        price: data.price || "",
        ticket: data.ticket || "",
        benefits: data.benefits.join(","),
        num,
      });
      router.push(`/campaigns/${campaign.id}/token?${params.toString()}`);
      return;
    }
    setStep((s) => s + 1);
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  return (
    <div
      className="rounded-xl"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border2)",
        boxShadow: "0 16px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      {/* Stepper */}
      <div className="px-7 pt-7 pb-5 border-b border-[var(--color-border)]">
        <div className="flex items-center">
          {wizardSteps.map((_, i) => {
            const state = i < step ? "done" : i === step ? "current" : "pending";
            return (
              <div
                key={i}
                className="flex items-center"
                style={{ flex: i < total - 1 ? 1 : "0 0 auto" }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 tabular-nums"
                  style={{
                    background: state === "current" ? "var(--color-burg3)" : state === "done" ? "rgba(196,38,78,0.12)" : "var(--color-surface3)",
                    border: `1px solid ${state === "pending" ? "var(--color-border2)" : "var(--color-burg3)"}`,
                    color: state === "current" ? "#fff" : state === "done" ? "#E43A66" : "var(--color-txt3)",
                    fontFamily: "var(--font-mono)",
                    boxShadow: state === "current" ? "0 0 0 4px rgba(196,38,78,0.18)" : "none",
                  }}
                >
                  {state === "done" ? "✓" : i + 1}
                </div>
                {i < total - 1 && (
                  <div
                    className="flex-1 h-px mx-2"
                    style={{ background: state === "done" ? "var(--color-burg3)" : "var(--color-border2)" }}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-5">
          <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)]" style={{ fontFamily: "var(--font-mono)" }}>
            PASO {step + 1}/{total}
          </div>
          <h2
            className="uppercase mt-2"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 32, lineHeight: 1, letterSpacing: "0.005em",
            }}
          >
            {cfg.title}
          </h2>
          <p className="text-[14px] text-[var(--color-txt2)] mt-2">{cfg.sub}</p>
        </div>
      </div>

      {/* Body */}
      <div key={step} className="p-7" style={{ animation: "wiz-fade .25s ease-out" }}>
        {/* Single-choice */}
        {cfg.type === "single" && "options" in cfg && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cfg.options!.map((opt) => {
              const sel = data[cfg.key as Key] === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => selectSingle(cfg.key as Key, opt)}
                  className="text-left p-4 rounded-lg flex items-center gap-3 transition-all"
                  style={{
                    background: sel ? "rgba(196,38,78,0.10)" : "var(--color-surface2)",
                    border: `1.5px solid ${sel ? "var(--color-burg3)" : "var(--color-border2)"}`,
                    boxShadow: sel ? "0 0 0 3px rgba(196,38,78,0.14)" : "none",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ border: `2px solid ${sel ? "var(--color-burg3)" : "var(--color-border2)"}` }}
                    aria-hidden
                  >
                    {sel && <div className="w-2 h-2 rounded-full" style={{ background: "var(--color-burg3)" }} />}
                  </div>
                  <span className="text-[15px] font-semibold text-[var(--color-txt)]">{opt}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Multi-choice */}
        {cfg.type === "multi" && "options" in cfg && (
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {cfg.options!.map((opt) => {
                const sel = data.benefits.includes(opt);
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggleBenefit(opt)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[13px] font-semibold transition-colors"
                    style={{
                      background: sel ? "rgba(196,38,78,0.12)" : "var(--color-surface2)",
                      border: `1.5px solid ${sel ? "var(--color-burg3)" : "var(--color-border2)"}`,
                      color: sel ? "var(--color-txt)" : "var(--color-txt2)",
                    }}
                  >
                    {sel && <span style={{ color: "var(--color-burg3)", fontSize: 11 }}>✓</span>}
                    {opt}
                  </button>
                );
              })}
            </div>
            <p className="text-[12px] text-[var(--color-txt3)]">
              Esto nos ayuda a entender qué experiencia querés que la productora priorice. Podés seleccionar más de uno · <span className="tabular-nums" style={{ fontFamily: "var(--font-mono)" }}>{data.benefits.length}</span> seleccionado{data.benefits.length !== 1 ? "s" : ""}
            </p>
          </div>
        )}

        {/* Level cards */}
        {cfg.type === "level" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {levels.map((lvl) => {
                const sel = data.level === lvl.name;
                return (
                  <button
                    key={lvl.name}
                    type="button"
                    onClick={() => setData((d) => ({ ...d, level: lvl.name }))}
                    className="text-left p-5 rounded-xl relative transition-all"
                    style={{
                      background: sel ? "rgba(196,38,78,0.10)" : "var(--color-surface2)",
                      border: `1.5px solid ${sel ? "var(--color-burg3)" : "var(--color-border2)"}`,
                      borderTop: `4px solid ${lvl.color}`,
                      boxShadow: sel ? "0 0 0 3px rgba(196,38,78,0.14)" : "none",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {lvl.popular && (
                      <span
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.08em]"
                        style={{
                          background: "linear-gradient(90deg, var(--color-burg), var(--color-burg3))",
                          color: "#fff",
                        }}
                      >
                        Más elegido
                      </span>
                    )}
                    <div
                      className="text-[18px] uppercase font-bold mb-1"
                      style={{ color: lvl.color, fontFamily: "var(--font-display)", letterSpacing: "0.005em" }}
                    >
                      {lvl.name}
                    </div>
                    <div className="text-[12px] text-[var(--color-txt3)] mb-4">{lvl.desc}</div>
                    <ul className="list-none m-0 flex flex-col gap-2">
                      {lvl.perks.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-[12px] text-[var(--color-txt2)]">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: lvl.color }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>
            <p
              className="mt-4 text-[12px] text-[var(--color-txt3)] leading-[1.55]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              ⓘ Los beneficios exactos varían según el show y la productora. Estos son lineamientos — la productora confirma el detalle si el evento se aprueba.
            </p>
          </>
        )}

        {/* Confirm */}
        {cfg.type === "confirm" && (
          <div className="rounded-lg" style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}>
            <div className="flex items-center gap-3 p-5 border-b border-[var(--color-border)]">
              <div
                className="w-12 h-12 rounded-md flex items-center justify-center font-extrabold text-[16px]"
                style={{
                  background: `linear-gradient(135deg, ${campaign.color}30, ${campaign.color}90)`,
                  border: "1px solid var(--color-border2)",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "1px",
                }}
              >
                {campaign.img}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[16px] font-bold" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.005em" }}>
                  {campaign.artist}
                </div>
                <div className="text-[12px] text-[var(--color-txt3)]">
                  {campaign.event} · {campaign.city}
                </div>
              </div>
              <Pill variant={campaign.type === "official" ? "live" : "info"}>
                {campaign.type === "official" ? "Oficial" : "Fan"}
              </Pill>
            </div>

            <div className="p-5 grid grid-cols-2 gap-3">
              {([
                ["Ciudad",          data.city  || "—"],
                ["Rango de precio", data.price || "—"],
                ["Tipo de entrada", data.ticket || "—"],
                ["Nivel",           data.level  || "—"],
              ] as const).map(([k, v]) => (
                <div
                  key={k}
                  className="p-3 rounded-md"
                  style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}
                >
                  <div className="text-[10px] uppercase tracking-[0.08em] font-semibold text-[var(--color-txt3)] mb-1">{k}</div>
                  <div className="text-[14px] font-semibold">{v}</div>
                </div>
              ))}
            </div>

            {data.benefits.length > 0 && (
              <div className="px-5 pb-5">
                <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[var(--color-txt2)] mb-2">
                  Beneficios que querés que se prioricen
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {data.benefits.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold"
                      style={{
                        background: "rgba(196,38,78,0.12)",
                        color: "#E43A66",
                        border: "1px solid rgba(196,38,78,0.3)",
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div
              className="m-5 mt-0 rounded-md p-4 text-[12px] leading-[1.6] text-[var(--color-txt2)]"
              style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.22)" }}
            >
              Estás registrando una <strong className="text-[var(--color-txt)]">reserva condicional simulada</strong>. Si el show se confirma, recibís tu Priority Pass para acceder a la preventa antes que el público general. Si no se confirma, el monto se devuelve íntegro.
            </div>
          </div>
        )}
      </div>

      {/* Footer nav */}
      <div className="px-7 py-5 flex items-center justify-between border-t border-[var(--color-border)] gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={back}
            className="inline-flex items-center px-4 py-2.5 text-[13px] font-bold uppercase tracking-[0.06em] rounded-md"
            style={{ background: "transparent", border: "1px solid var(--color-border2)", color: "var(--color-txt)" }}
          >
            ← Atrás
          </button>
        ) : (
          <div />
        )}

        <div className="flex items-center gap-3">
          {!canAdvance() && step < total - 1 && (
            <span className="text-[11px] text-[var(--color-txt3)]">Elegí una opción para continuar</span>
          )}
          <button
            type="button"
            onClick={next}
            disabled={!canAdvance()}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.06em] rounded-md text-white"
            style={{
              background: canAdvance() ? "var(--color-burg3)" : "var(--color-surface3)",
              boxShadow: canAdvance()
                ? "0 6px 18px rgba(196,38,78,0.32), inset 0 1px 0 rgba(255,255,255,0.18)"
                : "none",
              opacity: canAdvance() ? 1 : 0.45,
              cursor: canAdvance() ? "pointer" : "not-allowed",
            }}
          >
            {step === total - 1 ? "Confirmar apoyo" : "Siguiente"}{" "}
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes wiz-fade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
