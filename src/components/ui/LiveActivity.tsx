"use client";

import { useEffect, useState } from "react";

const TOASTS = [
  { city: "Córdoba", msg: "apoyó la campaña de Lenny Kravitz", level: "Plata" },
  { city: "Buenos Aires", msg: "nuevo apoyo Nivel Oro", level: "Oro" },
  { city: "Rosario", msg: "se unió a K-Pop Night Argentina", level: "Bronce" },
  { city: "Buenos Aires", msg: "3 personas apoyaron en los últimos 5 min", level: null },
  { city: "Córdoba", msg: "apoyó Electronic Night", level: "Plata" },
  { city: "Montevideo", msg: "nuevo apoyo Nivel Oro desde el exterior", level: "Oro" },
  { city: "Buenos Aires", msg: "acaba de unirse a la lista prioritaria", level: "Bronce" },
  { city: "Rosario", msg: "5 apoyos nuevos en la última hora", level: null },
];

const LEVEL_COLORS: Record<string, string> = {
  Oro: "#f59e0b",
  Plata: "#94a3b8",
  Bronce: "#d97706",
};

function randBetween(a: number, b: number) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

interface Toast {
  id: number;
  city: string;
  msg: string;
  level: string | null;
  exiting: boolean;
}

export function LiveToasts() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function showNext() {
      const entry = TOASTS[idx % TOASTS.length];
      const id = Date.now();
      const toast: Toast = { ...entry, id, exiting: false };

      setToasts((prev) => [...prev.slice(-2), toast]);
      setIdx((i) => i + 1);

      // Start exit animation after 3.5s
      setTimeout(() => {
        setToasts((prev) =>
          prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
        );
      }, 3500);

      // Remove after exit animation
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4200);

      timer = setTimeout(showNext, randBetween(6000, 10000));
    }

    timer = setTimeout(showNext, 3000);
    return () => clearTimeout(timer);
  }, [idx]);

  if (toasts.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        left: 24,
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        pointerEvents: "none",
      }}
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border2)",
            borderRadius: "var(--r12)",
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            maxWidth: 280,
            animation: t.exiting
              ? "fadeOut 0.6s ease forwards"
              : "slideInLeft 0.35s ease forwards",
            boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: t.level ? LEVEL_COLORS[t.level] : "var(--emerald2)",
              flexShrink: 0,
              boxShadow: `0 0 6px ${t.level ? LEVEL_COLORS[t.level] : "var(--emerald2)"}`,
            }}
          />
          <div>
            <span style={{ fontSize: 12, color: "var(--txt2)", fontWeight: 500 }}>
              <strong style={{ color: "var(--txt)" }}>{t.city}</strong> — {t.msg}
            </span>
            {t.level && (
              <span
                style={{
                  display: "block",
                  fontSize: 10,
                  color: LEVEL_COLORS[t.level],
                  marginTop: 2,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Nivel {t.level}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function AnimatedCounter({ start }: { start: number }) {
  const [count, setCount] = useState(start);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      setAnimating(true);
      setTimeout(() => {
        setCount((c) => c + 1);
        setAnimating(false);
      }, 150);
      timer = setTimeout(tick, randBetween(3000, 8000));
    }

    timer = setTimeout(tick, randBetween(3000, 8000));
    return () => clearTimeout(timer);
  }, []);

  return (
    <span
      style={{
        display: "inline-block",
        animation: animating ? "countUp 0.2s ease" : "none",
      }}
    >
      {count.toLocaleString("es-AR")}
    </span>
  );
}
