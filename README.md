# next-port v4 — Dashboard B2B (Productora)

Rediseño completo de `/dashboard`. La pantalla más grande y densa del producto.

## ✨ Lo que cambia

**Antes** (dashboard actual): vista demo de UNA campaña (Lenny Kravitz) con KPIs, charts de city/price y export modal.

**Después** (rediseñado): **operations dashboard** estilo mission-control con visión multi-campaña:
- **Sidebar** con org switcher (DF Entertainment · PRO) + 7 items de navegación (Overview, Campañas con badge "8", Demanda live, Fans, Forecasts, Venues, Integraciones) + indicador "System nominal"
- **Sub-header** con switch Producción / Sandbox + buscador global con ⌘K + "Nueva campaña" CTA + notificaciones
- **5 KPI cards** con sparklines: campañas activas, apoyos verificados, precio promedio, forecast tickets, probabilidad show
- **Tabla de 7 campañas** con artist · ciudad · tipo · progress · precio · días · trend (sparkline inline) · probabilidad colorizada
- **Demand pulse**: log estilo terminal mostrando eventos en tiempo real (NEW_SUPPORT, THRESHOLD, PRICE_SIGNAL, CONDITIONAL)
- **Heatmap LATAM** con burbujas pulsantes + city ranking (Buenos Aires 14.2K, México 8.6K, Córdoba 3.4K…)
- **Curva de precio** con sweet spot marcado (USD 84) + revenue estimado
- **Lista de fans verificados** con tier Gold/Silver

## 🗂️ Archivos (10 archivos · 1 reemplazo · 9 nuevos)

| Origen | Destino | Acción |
|---|---|---|
| `next-port-v4/src/lib/dashboard-data.ts` | `src/lib/dashboard-data.ts` | ➕ Nuevo |
| `next-port-v4/src/components/dashboard/DashboardChrome.tsx` | `src/components/dashboard/DashboardChrome.tsx` | ➕ Nuevo |
| `next-port-v4/src/components/dashboard/KPIStrip.tsx` | `src/components/dashboard/KPIStrip.tsx` | ➕ Nuevo |
| `next-port-v4/src/components/dashboard/CampaignsTable.tsx` | `src/components/dashboard/CampaignsTable.tsx` | ➕ Nuevo |
| `next-port-v4/src/components/dashboard/DemandPulse.tsx` | `src/components/dashboard/DemandPulse.tsx` | ➕ Nuevo |
| `next-port-v4/src/components/dashboard/HeatmapPanel.tsx` | `src/components/dashboard/HeatmapPanel.tsx` | ➕ Nuevo |
| `next-port-v4/src/components/dashboard/PriceCurvePanel.tsx` | `src/components/dashboard/PriceCurvePanel.tsx` | ➕ Nuevo |
| `next-port-v4/src/components/dashboard/RecentFans.tsx` | `src/components/dashboard/RecentFans.tsx` | ➕ Nuevo |
| `next-port-v4/src/app/dashboard/page.tsx` | `src/app/dashboard/page.tsx` | 🔁 Reemplaza |

## ⚙️ Compatibilidad

- La global Navbar y Footer del layout root siguen ahí — el dashboard se renderiza debajo de la Navbar con sidebar+contenido
- Tu `src/lib/data.ts` original NO se toca — `dashboardData` sigue ahí, simplemente queda sin uso (lo podés borrar después)
- Nuevo data file `dashboard-data.ts` reemplaza esa info con un modelo más rico (multi-campaña + pulse events + recent fans)

## 🚀 Aplicarlo

```powershell
cd $HOME\Downloads\demandpass\mi-repo
git checkout main
git pull origin main
git checkout -b redesign/dashboard
Copy-Item -Path ..\next-port-v4\* -Destination . -Recurse -Force
git add .
git commit -m "feat(dashboard): redesigned B2B producer dashboard"
git push origin redesign/dashboard
```

PR → Vercel ✅ → Merge.

## ⏭️ Siguiente

Quedan 2 pantallas del mockup:
1. **`/signin`** (login/signup, fan + productora) — nueva ruta
2. **`/artists/[slug]`** (página de artista con momentum) — nueva ruta

Decime cuál arrancamos cuando tengas el dashboard en producción.
