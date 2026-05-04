# DemandPass — Demo navegable

Plataforma B2B2C de demanda verificada para conciertos y eventos en vivo.

## Correr localmente

### Requisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# 1. Instalá las dependencias
npm install

# 2. Corré el servidor de desarrollo
npm run dev

# 3. Abrí en el browser
# http://localhost:3000
```

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz con Navbar
│   ├── globals.css         # Design tokens y estilos globales
│   ├── page.tsx            # Landing page
│   ├── campaigns/
│   │   ├── page.tsx        # Listado de campañas
│   │   └── [id]/
│   │       ├── page.tsx    # Detalle de campaña
│   │       ├── support/
│   │       │   └── page.tsx  # Wizard de apoyo (6 pasos)
│   │       └── token/
│   │           └── page.tsx  # Claim Token generado
│   └── dashboard/
│       └── page.tsx        # Dashboard productora (B2B)
├── components/
│   └── ui/
│       ├── Navbar.tsx      # Navegación global
│       └── SupportWizard.tsx  # Wizard interactivo (client component)
└── lib/
    └── data.ts             # Datos mock de campañas, niveles, dashboard
```

## Flujo completo de la demo

1. **Landing** → `/` — Hero, estadísticas, cómo funciona, campañas destacadas
2. **Campañas** → `/campaigns` — Listado con métricas y progreso
3. **Detalle** → `/campaigns/0` — Info completa, beneficios, legales
4. **Wizard** → `/campaigns/0/support` — 6 pasos: ciudad, precio, entrada, beneficios, nivel, confirmación
5. **Token** → `/campaigns/0/token?...` — Claim Token con prioridad simulada
6. **Dashboard** → `/dashboard` — Vista productora con KPIs, gráficos y recomendación automática

## Deploy en Vercel

```bash
# Opción 1: CLI
npm install -g vercel
vercel

# Opción 2: GitHub
# 1. Subí el proyecto a un repo de GitHub
# 2. Entrá a vercel.com → New Project → importá el repo
# 3. Vercel detecta Next.js automáticamente → Deploy
```

## Datos mock

Todo el contenido vive en `src/lib/data.ts`. Para modificar campañas, precios, beneficios o datos del dashboard, editá ese archivo directamente.

## Notas de diseño

- Dark mode nativo (sin toggle, es la estética definitiva del producto)
- Tipografía: Outfit (display) + JetBrains Mono (token codes)
- Paleta: violeta `#7c3aed` + azul eléctrico `#2563eb` + blanco `#f0f0ff`
- Mobile-first: todos los grids usan `auto-fit` con `minmax`
- Sin dependencias de UI externas (cero shadcn, cero chakra) — todo custom

## Próximos pasos sugeridos

- [ ] Agregar filtros por ciudad/tipo en el listado de campañas  
- [ ] Pantalla "Mis DemandPasses" con historial de tokens  
- [ ] Integración real con Stripe para reservas condicionales  
- [ ] Sistema de notificaciones cuando una campaña se confirma  
- [ ] Auth con email magic link (sin contraseña)  
- [ ] API routes para conectar con base de datos real
