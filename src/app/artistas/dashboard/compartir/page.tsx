"use client";
import { useState } from "react";
import { Copy, CheckCircle2, Share2, MessageCircle, ExternalLink } from "lucide-react";

const CAMPAIGN_URL = "https://demandpass.app/campaigns/los-planetas-gira-2026";

export default function ArtistCompartirPage() {
  const [copied, setCopied] = useState(false);

  function copy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="p-5 md:p-7 max-w-[600px]">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: "#8b5cf6" }}>Compartir</p>
      <h1 className="font-[family-name:var(--font-display)] text-[26px] font-black uppercase mb-2">DIFUNDÍ TU CAMPAÑA</h1>
      <p className="text-[13px] mb-7" style={{ color: "var(--color-txt3)" }}>
        Mientras más fans apoyen, más fuerte es tu Demand Score y más chances de confirmar la fecha.
      </p>

      <div className="flex flex-col gap-4">
        {/* Link */}
        <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] mb-3" style={{ color: "var(--color-txt3)" }}>Link de la campaña</p>
          <div className="flex items-center gap-3">
            <div className="flex-1 px-3 py-2.5 rounded-lg text-[12px] font-mono truncate"
              style={{ background: "var(--color-bg)", border: "1px solid var(--color-border2)", color: "var(--color-txt2)" }}>
              {CAMPAIGN_URL}
            </div>
            <button onClick={copy}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-[family-name:var(--font-display)] text-[12px] font-bold uppercase tracking-[0.06em] transition-all shrink-0"
              style={{ background: copied ? "rgba(16,185,129,0.15)" : "#8b5cf6", color: copied ? "#10b981" : "white" }}>
              {copied ? <><CheckCircle2 size={13} /> Copiado</> : <><Copy size={13} /> Copiar</>}
            </button>
          </div>
        </div>

        {/* Redes */}
        <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] mb-3" style={{ color: "var(--color-txt3)" }}>Compartir en redes</p>
          <div className="flex gap-3">
            {[
              { Icon: ExternalLink,    label: "Twitter / X",  color: "#1d9bf0" },
              { Icon: MessageCircle,   label: "WhatsApp",     color: "#25d366" },
              { Icon: Share2,          label: "Más opciones", color: "#8b5cf6" },
            ].map(({ Icon, label, color }) => (
              <button key={label}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[12px] font-semibold transition-all hover:-translate-y-0.5"
                style={{ background: color + "18", border: `1px solid ${color}30`, color }}>
                <Icon size={14} /> {label}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.1em] mb-3" style={{ color: "var(--color-txt3)" }}>Estadísticas del link</p>
          <div className="grid grid-cols-3 gap-4">
            {[["342", "Clicks"], ["18%", "Conversión"], ["67", "Compartidos"]].map(([v, l]) => (
              <div key={l} className="text-center">
                <p className="font-[family-name:var(--font-display)] text-[24px] font-black" style={{ color: "#8b5cf6" }}>{v}</p>
                <p className="text-[11px]" style={{ color: "var(--color-txt3)" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
