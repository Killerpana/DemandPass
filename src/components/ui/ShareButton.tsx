"use client";

import { useState } from "react";

export function ShareButton({ artist, city, campaignId }: { artist: string; city: string; campaignId: number }) {
  const [shared, setShared] = useState(false);

  async function handleShare() {
    const url = `${window.location.origin}/campaigns/${campaignId}?ref=share`;
    const text = `Apoyá la campaña de ${artist} en ${city} antes de que se confirme el show`;

    if (navigator.share) {
      try {
        await navigator.share({ title: `DemandPass — ${artist}`, text, url });
        setShared(true);
        setTimeout(() => setShared(false), 3000);
      } catch {}
    } else {
      navigator.clipboard.writeText(url).catch(() => {});
      setShared(true);
      setTimeout(() => setShared(false), 3000);
    }
  }

  return (
    <button
      onClick={handleShare}
      className="btn btn-ghost btn-sm"
      style={{ fontSize: 13, gap: 6 }}
    >
      {shared ? "✓ Link copiado" : "↗ Compartir campaña"}
    </button>
  );
}

export function ReferralBadge() {
  if (typeof window === "undefined") return null;
  const hasRef = new URLSearchParams(window.location.search).has("ref");
  if (!hasRef) return null;

  return (
    <div
      style={{
        background: "rgba(16,185,129,0.08)",
        border: "1px solid rgba(16,185,129,0.2)",
        borderRadius: "var(--r12)",
        padding: "10px 14px",
        fontSize: 13,
        color: "var(--emerald3)",
        marginBottom: 16,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      🤝 Llegaste por recomendación de un amigo
    </div>
  );
}
