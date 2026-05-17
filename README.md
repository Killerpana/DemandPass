# next-port v2 — Listado de campañas (`/campaigns`)

Rediseño completo de la página `/campaigns` con grid 4-columnas, filtros, búsqueda y dataset extendido (12 campañas en vez de 3).

## 🗂️ Archivos (4 archivos, 1 reemplazo, 3 nuevos)

| Origen | Destino en tu repo | Acción |
|---|---|---|
| `next-port-v2/src/lib/marketing-data.ts` | `src/lib/marketing-data.ts` | **🔁 Reemplaza** (extiende el v1 con extras + helper de género) |
| `next-port-v2/src/components/marketing/CampaignsHero.tsx` | `src/components/marketing/CampaignsHero.tsx` | ➕ Nuevo |
| `next-port-v2/src/components/marketing/CampaignsBrowser.tsx` | `src/components/marketing/CampaignsBrowser.tsx` | ➕ Nuevo |
| `next-port-v2/src/app/campaigns/page.tsx` | `src/app/campaigns/page.tsx` | **🔁 Reemplaza** |

## ✨ Lo que cambia

- **12 campañas** (vs 3 actuales) con `genre` clasificado para filtrado
- **Filtros funcionales** (cliente):
  - Tipo: Todas / Oficiales / Fan demand / Alta demanda
  - País: 5 países LATAM
  - Género: 8 géneros
  - Orden: Más populares / Cierran antes / Recientes / Cerca del objetivo
  - Búsqueda: artista, ciudad, evento, país
- **Estado vacío** cuando los filtros no matchean nada → botón "Limpiar filtros"
- **Hero con stats reales** (total apoyos, países activos, # campañas)
- Las cards reutilizan el `CampaignCard` del v1 — mismo look del landing

## ⚙️ Compatibilidad

- Sigue compatible con `/campaigns/[id]` actual — los `id` 0/1/2 originales no cambian, los nuevos arrancan en 100+
- No toca tu `src/lib/data.ts` original (las 3 campañas originales siguen igual)
- No toca el detalle de campaña ni el wizard de votar — siguen funcionando

## 🚀 Cómo aplicarlo (mismo flujo que la primera vez)

```powershell
cd $HOME\Downloads\demandpass\mi-repo
git checkout main
git pull origin main
git checkout -b redesign/campaigns-list
Copy-Item -Path ..\next-port-v2\* -Destination . -Recurse -Force
git add .
git commit -m "feat(campaigns): redesigned listing with filters + extended dataset"
git push origin redesign/campaigns-list
```

Después abrís el link del PR que te tira el `git push`, esperás que Vercel buildee ✅, y mergeás.

## ⏭️ Siguiente pantalla sugerida

**`/campaigns/[id]` — detalle + flujo de votar.** Es la que sigue al click "Apoyar" de cada card.
