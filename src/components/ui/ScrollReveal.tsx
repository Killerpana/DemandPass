"use client";

import { useEffect, useRef } from "react";

export function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="scroll-section">
      {children}
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

  return (
    <div ref={ref} className="hero-parallax">
      {children}
    </div>
  );
}
