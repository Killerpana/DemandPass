"use client";
// src/components/ui/BackgroundPaths.tsx
// Adaptado de kokonutd/background-paths (21st.dev) para DemandPass
// Líneas SVG animadas con framer-motion — fondo oscuro burgundy

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M${-380 - i * 5 * position} ${-189 + i * 14}C${-380 - i * 5 * position} ${-189 + i * 14} ${-312 - i * 5 * position} ${216 - i * 3} ${152 - i * 5 * position} ${343 - i * 2}C${616 - i * 5 * position} ${470 - i * 1} ${684 - i * 5 * position} ${875 + i * 1} ${684 - i * 5 * position} ${875 + i * 1}`,
    color: i % 7 === 0 ? "rgba(196,38,78,0.25)" : i % 5 === 0 ? "rgba(196,38,78,0.12)" : "rgba(255,255,255,0.04)",
    width: 0.3 + i * 0.035,
    duration: 18 + i * 1.2,
    delay: i * 0.15,
  }));

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 696 316"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {paths.map((p) => (
        <motion.path
          key={p.id}
          d={p.d}
          fill="none"
          stroke={p.color}
          strokeWidth={p.width}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1, pathOffset: [0, 1] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

export function BackgroundPaths({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 opacity-70">
        <FloatingPaths position={1} />
      </div>
      <div className="absolute inset-0 opacity-50" style={{ transform: "scaleX(-1)" }}>
        <FloatingPaths position={-1} />
      </div>
    </div>
  );
}
