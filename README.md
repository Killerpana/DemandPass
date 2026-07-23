# DemandPass

**Real Fans · Real Demand** — la capa de inteligencia previa al ticketing.

DemandPass permite a los fans expresar demanda verificada por conciertos (ciudad, precio, tipo de entrada, reserva condicional) y a las productoras decidir shows con datos antes de comprometer capital. No vende entradas: la venta final ocurre siempre en la ticketera oficial.

> **Estado: demo de inversión (Fase 0).** Todos los datos son simulados. Sin backend, sin pagos reales, sin login real. Las empresas y testimonios que aparecen son ficticios.

## Demo

**https://demand-pass.vercel.app** · Visión: [/vision](https://demand-pass.vercel.app/vision) ([EN](https://demand-pass.vercel.app/en/vision))

Recorrido sugerido: home → campaña → apoyar → Priority Pass → "Ver lo que ve la productora" → dashboard B2B.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 (CSS-first, `@theme` en `globals.css`) · framer-motion · Lucide. Deploy automático en Vercel al pushear a `main`.

## Estructura

- `src/app/` — rutas: landing pública, `/campaigns`, `/fan/*` (app del fan), `/dashboard/*` (productora), `/artistas/*` (artista), `/artists` (perfiles), `/vision`, legales
- `src/components/` — `marketing/` (landing + pantallas), `dashboard/` (B2B), `ui/` (primitivas)
- `src/lib/` — datos simulados y tipos
- `public/brand/` — Brand Kit v1.0 (Saira Condensed · Inter · JetBrains Mono, Deep Ink `#08080D`, burgundy `#A31645`)

## Desarrollo

```bash
npm install
npm run dev
```

Antes de pushear: `npx tsc --noEmit && npm run build`. Todo push a `main` deploya a producción.
