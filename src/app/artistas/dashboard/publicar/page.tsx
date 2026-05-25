"use client";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ArtistPublicarPage() {
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);

  function send() {
    if (!text.trim()) return;
    setSent(true);
    setTimeout(() => { setSent(false); setText(""); }, 3000);
  }

  return (
    <div className="p-5 md:p-7 max-w-[600px]">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: "#8b5cf6" }}>Publicar</p>
      <h1 className="font-[family-name:var(--font-display)] text-[26px] font-black uppercase mb-2">ACTUALIZACIÓN A FANS</h1>
      <p className="text-[13px] mb-7" style={{ color: "var(--color-txt3)" }}>
        Enviá un mensaje a los <strong style={{ color: "var(--color-txt)" }}>1.847 fans</strong> que apoyaron tu campaña.
      </p>

      {sent ? (
        <div className="flex items-center gap-3 p-5 rounded-xl" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)" }}>
          <CheckCircle2 size={20} color="#10b981" />
          <div>
            <p className="font-semibold" style={{ color: "#10b981" }}>¡Actualización enviada!</p>
            <p className="text-[12px]" style={{ color: "var(--color-txt3)" }}>1.847 fans fueron notificados.</p>
          </div>
        </div>
      ) : (
        <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <textarea value={text} onChange={e => setText(e.target.value)}
            placeholder="Contales algo a tus fans — una fecha posible, una novedad del show, un agradecimiento..."
            rows={5} className="w-full rounded-xl p-4 text-[14px] resize-none mb-4"
            style={{ background: "var(--color-bg)", border: "1px solid var(--color-border2)", color: "var(--color-txt)", outline: "none" }} />
          <div className="flex items-center justify-between">
            <p className="text-[11px]" style={{ color: "var(--color-txt3)" }}>{text.length}/280 caracteres</p>
            <button onClick={send}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] transition-all"
              style={{ background: text.trim() ? "#8b5cf6" : "var(--color-surface2)", color: text.trim() ? "white" : "var(--color-txt3)", boxShadow: text.trim() ? "0 6px 18px rgba(139,92,246,0.3)" : "none" }}>
              <Send size={14} /> Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
