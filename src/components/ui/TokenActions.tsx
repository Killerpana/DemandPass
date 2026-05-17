"use client";

import { useState } from "react";

export function CopyTokenButton({ token }: { token: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(token).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      style={{
        marginTop: 12,
        padding: "7px 16px",
        borderRadius: "var(--r8)",
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer",
        border: "1px solid var(--border2)",
        background: copied ? "rgba(16,185,129,0.15)" : "var(--surface3)",
        color: copied ? "var(--emerald2)" : "var(--txt2)",
        transition: "all 0.2s",
        fontFamily: "Outfit, sans-serif",
      }}
    >
      {copied ? "✓ Copiado" : "Copiar token"}
    </button>
  );
}

export function QRPlaceholder() {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 8,
          border: "1px solid var(--border2)",
          background: "var(--surface3)",
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gap: 1,
          padding: 6,
          overflow: "hidden",
        }}
      >
        {Array.from({ length: 64 }).map((_, i) => {
          // Deterministic "QR-like" pattern
          const row = Math.floor(i / 8);
          const col = i % 8;
          const isCorner =
            (row < 3 && col < 3) ||
            (row < 3 && col > 4) ||
            (row > 4 && col < 3);
          const isFilled =
            isCorner ||
            ((row + col) % 3 === 0) ||
            ((row * col) % 5 === 1);
          return (
            <div
              key={i}
              style={{
                borderRadius: 1,
                background: isFilled ? "var(--txt2)" : "transparent",
              }}
            />
          );
        })}
      </div>
      <p style={{ fontSize: 10, color: "var(--txt3)", marginTop: 6, lineHeight: 1.4 }}>
        Escaneá<br />en el venue
      </p>
    </div>
  );
}
