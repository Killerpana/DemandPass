"use client";
// src/components/ui/ViewTransition.tsx
// Activa la View Transitions API nativa del browser en navegaciones de Next.js.
// Envuelve los links con transición suave entre páginas.

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Hook que intercepta navegaciones y las envuelve en document.startViewTransition()
 * cuando el browser lo soporta. Si no lo soporta, navega normalmente.
 */
export function useViewTransition() {
  const router = useRouter();

  useEffect(() => {
    // Patchear el router para usar View Transitions si está disponible
    const originalPush = router.push.bind(router);

    // Sobrescribimos temporalmente el click en links <a>
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Solo links internos (empiezan con /)
      if (!href.startsWith("/")) return;

      // No interceptar links con modificadores
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      // No interceptar si tiene target="_blank"
      if (anchor.target === "_blank") return;

      // Si el browser soporta View Transitions
      if (!("startViewTransition" in document)) return;

      e.preventDefault();

      (document as Document & { startViewTransition: (cb: () => void) => void })
        .startViewTransition(() => {
          originalPush(href);
        });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [router]);
}

/**
 * Componente que activa las View Transitions globalmente.
 * Colocarlo en el layout principal una sola vez.
 */
export function ViewTransitionProvider() {
  useViewTransition();
  return null;
}
