"use client";
// src/components/ui/ScrollReveal.tsx
// Animaciones de entrada al hacer scroll — sin dependencias externas

import { useEffect, useRef, CSSProperties } from "react";

type Variant = "fade" | "slide-up" | "slide-left" | "slide-right" | "zoom" | "blur";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;        // ms
  duration?: number;     // ms
  variant?: Variant;
  threshold?: number;    // 0-1
  className?: string;
  once?: boolean;        // animar solo la primera vez
}

const VARIANTS: Record<Variant, { hidden: CSSProperties; visible: CSSProperties }> = {
  "fade": {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-up": {
    hidden:  { opacity: 0, transform: "translateY(32px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  "slide-left": {
    hidden:  { opacity: 0, transform: "translateX(40px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "slide-right": {
    hidden:  { opacity: 0, transform: "translateX(-40px)" },
    visible: { opacity: 1, transform: "translateX(0)" },
  },
  "zoom": {
    hidden:  { opacity: 0, transform: "scale(0.92)" },
    visible: { opacity: 1, transform: "scale(1)" },
  },
  "blur": {
    hidden:  { opacity: 0, filter: "blur(12px)", transform: "translateY(16px)" },
    visible: { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
  },
};

export function ScrollReveal({
  children,
  delay = 0,
  duration = 600,
  variant = "slide-up",
  threshold = 0.12,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const v = VARIANTS[variant];

    // Estado inicial
    Object.assign(el.style, v.hidden, {
      transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, filter ${duration}ms ease ${delay}ms`,
    });

    // Respetar prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      Object.assign(el.style, v.visible);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          Object.assign(el.style, v.visible);
          if (once) observer.unobserve(el);
        } else if (!once) {
          Object.assign(el.style, v.hidden);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration, variant, threshold, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Stagger — aplica delays incrementales a cada hijo
interface StaggerProps {
  children: React.ReactNode;
  staggerMs?: number;
  baseDelay?: number;
  variant?: Variant;
  duration?: number;
  className?: string;
}

export function StaggerReveal({
  children,
  staggerMs = 80,
  baseDelay = 0,
  variant = "slide-up",
  duration = 500,
  className = "",
}: StaggerProps) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <div className={className}>
      {items.map((child, i) => (
        <ScrollReveal
          key={i}
          delay={baseDelay + i * staggerMs}
          variant={variant}
          duration={duration}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}

export function ParallaxHero({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;
      if (window.innerWidth < 768) return;
      const y = window.scrollY * 0.3;
      ref.current.style.backgroundPositionY = `${y}px`;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <div ref={ref} className="hero-parallax">{children}</div>;
}
