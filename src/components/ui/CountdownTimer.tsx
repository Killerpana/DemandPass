"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(days: number): TimeLeft {
  const total = days * 24 * 60 * 60 * 1000;
  const now = Date.now();
  // Use days as offset from a fixed start so it's consistent
  const end = now + total;
  const diff = end - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function CountdownTimer({ days }: { days: number }) {
  const [time, setTime] = useState<TimeLeft>({ days, hours: 0, minutes: 0, seconds: 0 });
  const isUrgent = days < 1;
  const isWarning = days <= 7;

  useEffect(() => {
    setTime(getTimeLeft(days));
    const interval = setInterval(() => {
      setTime(getTimeLeft(days));
    }, 1000);
    return () => clearInterval(interval);
  }, [days]);

  if (!isWarning) return null;

  return (
    <div
      className={isUrgent ? "countdown-urgent" : ""}
      style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 8 }}
    >
      <span style={{ fontSize: 11, color: isUrgent ? "var(--red2)" : "var(--amber2)", marginRight: 4, fontWeight: 600 }}>
        {isUrgent ? "⚠️ Cierra pronto" : "⏱ Cierra en"}
      </span>
      {[
        { val: time.days, lbl: "días" },
        { val: time.hours, lbl: "hrs" },
        { val: time.minutes, lbl: "min" },
        { val: time.seconds, lbl: "seg" },
      ].map(({ val, lbl }) => (
        <div key={lbl} className="countdown-block">
          <span className="num">{pad(val)}</span>
          <span className="lbl">{lbl}</span>
        </div>
      ))}
    </div>
  );
}

export function UrgencyBanner({ campaigns }: { campaigns: { days: number; artist: string }[] }) {
  const urgent = campaigns.filter((c) => c.days <= 2);
  if (urgent.length === 0) return null;

  return (
    <div
      className="urgency-banner"
      style={{
        background: "linear-gradient(135deg, rgba(220,38,38,0.15), rgba(217,119,6,0.15))",
        border: "1px solid rgba(239,68,68,0.3)",
        borderRadius: "var(--r12)",
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 20,
      }}
    >
      <span style={{ fontSize: 16 }}>🚨</span>
      <div>
        <span style={{ fontSize: 13, fontWeight: 700, color: "var(--red2)" }}>Última oportunidad — </span>
        <span style={{ fontSize: 13, color: "var(--txt2)" }}>
          {urgent.map((c) => c.artist).join(", ")} cierra en menos de 48 horas
        </span>
      </div>
    </div>
  );
}
