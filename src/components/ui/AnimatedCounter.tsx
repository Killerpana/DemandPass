"use client";
// src/components/ui/AnimatedCounter.tsx
// Cuenta desde 0 al valor objetivo cuando entra en pantalla
// Sin dependencias externas — solo Intersection Observer + requestAnimationFrame

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;      // ms
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export function AnimatedCounter({
  value,
  duration = 1800,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  // SSR y no-JS muestran el valor final — la animación arranca al entrar en viewport
  const [display, setDisplay] = useState(() =>
    decimals > 0 ? value.toFixed(decimals) : value.toLocaleString("es-AR")
  );
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let raf: number;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const current = eased * value;
      setDisplay(
        decimals > 0
          ? current.toFixed(decimals)
          : Math.round(current).toLocaleString("es-AR")
      );
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setDisplay(
          decimals > 0
            ? value.toFixed(decimals)
            : value.toLocaleString("es-AR")
        );
      }
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, value, duration, decimals]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}{display}{suffix}
    </span>
  );
}
