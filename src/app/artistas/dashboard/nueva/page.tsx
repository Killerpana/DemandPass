"use client";
import { useState } from "react";

export default function ArtistNuevaCampanaPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="p-5 md:p-7 max-w-[580px]">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: "#8b5cf6" }}>Nueva campaña</p>
      <h1 className="font-[family-name:var(--font-display)] text-[26px] font-black uppercase mb-7">CREÁ TU CAMPAÑA</h1>

      {/* Steps */}
      <div className="flex items-center gap-2 mb-8">
        {[1,2,3].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold"
              style={{ background: s <= step ? "#8b5cf6" : "var(--color-surface2)", color: s <= step ? "white" : "var(--color-txt3)", border: s <= step ? "none" : "1px solid var(--color-border2)" }}>
              {s}
            </div>
            {s < 3 && <div className="flex-1 h-px w-12" style={{ background: s < step ? "#8b5cf6" : "var(--color-border)" }} />}
          </div>
        ))}
        <span className="text-[12px] ml-2" style={{ color: "var(--color-txt3)" }}>
          {["Info básica", "Ciudades y precio", "Beneficios"][step-1]}
        </span>
      </div>

      <div className="p-6 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] mb-1.5" style={{ color: "var(--color-txt2)" }}>Nombre del show</label>
              <input type="text" placeholder="Ej: Gira Nacional 2026"
                className="w-full px-3 py-2.5 rounded-lg text-[14px]"
                style={{ background: "var(--color-bg)", border: "1px solid var(--color-border2)", color: "var(--color-txt)", outline: "none" }} />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] mb-1.5" style={{ color: "var(--color-txt2)" }}>Descripción</label>
              <textarea rows={3} placeholder="Contá de qué se trata..."
                className="w-full px-3 py-2.5 rounded-lg text-[14px] resize-none"
                style={{ background: "var(--color-bg)", border: "1px solid var(--color-border2)", color: "var(--color-txt)", outline: "none" }} />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] mb-1.5" style={{ color: "var(--color-txt2)" }}>Objetivo de apoyos</label>
              <input type="number" placeholder="Ej: 2000"
                className="w-full px-3 py-2.5 rounded-lg text-[14px]"
                style={{ background: "var(--color-bg)", border: "1px solid var(--color-border2)", color: "var(--color-txt)", outline: "none" }} />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] mb-2" style={{ color: "var(--color-txt2)" }}>Ciudades objetivo</label>
              {["Buenos Aires", "Córdoba", "Rosario", "Mendoza"].map(c => (
                <label key={c} className="flex items-center gap-2.5 py-2 cursor-pointer">
                  <input type="checkbox" defaultChecked={c === "Buenos Aires"} className="rounded" />
                  <span className="text-[13px]">{c}</span>
                </label>
              ))}
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.08em] mb-1.5" style={{ color: "var(--color-txt2)" }}>Rango de precio esperado</label>
              <div className="flex gap-3">
                <input type="text" placeholder="USD mín" className="flex-1 px-3 py-2.5 rounded-lg text-[13px]"
                  style={{ background: "var(--color-bg)", border: "1px solid var(--color-border2)", color: "var(--color-txt)", outline: "none" }} />
                <input type="text" placeholder="USD máx" className="flex-1 px-3 py-2.5 rounded-lg text-[13px]"
                  style={{ background: "var(--color-bg)", border: "1px solid var(--color-border2)", color: "var(--color-txt)", outline: "none" }} />
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col gap-3">
            <p className="text-[12px]" style={{ color: "var(--color-txt3)" }}>Seleccioná los beneficios que ofrecés a tus fans</p>
            {["Meet & greet", "Acceso a soundcheck", "Merch exclusivo", "Charla virtual", "Foto con el artista", "Acceso backstage"].map(b => (
              <label key={b} className="flex items-center gap-2.5 py-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-[13px]">{b}</span>
              </label>
            ))}
          </div>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <button onClick={() => setStep(s => s-1)}
              className="px-4 py-2 rounded-lg text-[13px] font-semibold"
              style={{ border: "1px solid var(--color-border2)", color: "var(--color-txt2)" }}>← Atrás</button>
          ) : <div />}
          <button onClick={() => step < 3 ? setStep(s => s+1) : undefined}
            className="px-5 py-2 rounded-lg font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] text-white"
            style={{ background: "#8b5cf6", boxShadow: "0 6px 18px rgba(139,92,246,0.3)" }}>
            {step < 3 ? "Siguiente →" : "Lanzar campaña"}
          </button>
        </div>
      </div>
    </div>
  );
}
