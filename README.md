# next-port v3 — Detalle de campaña + flujo de votar

Rediseño completo de:
- `/campaigns/[id]` — detalle de campaña (cover gigante + demand status card + actividad en vivo + perks + legal + sticky CTA)
- `/campaigns/[id]/support` — wizard de 6 pasos reskinado (mantiene la misma lógica + URL params, así el `/token` sigue funcionando intacto)

## 🗂️ Archivos (5 archivos · 2 reemplazos · 3 nuevos)

| Origen | Destino en tu repo | Acción |
|---|---|---|
| `next-port-v3/src/components/marketing/CampaignDetail.tsx`       | `src/components/marketing/CampaignDetail.tsx`       | ➕ Nuevo |
| `next-port-v3/src/components/marketing/LiveActivityFeed.tsx`     | `src/components/marketing/LiveActivityFeed.tsx`     | ➕ Nuevo |
| `next-port-v3/src/components/marketing/SupportWizardV2.tsx`      | `src/components/marketing/SupportWizardV2.tsx`      | ➕ Nuevo |
| `next-port-v3/src/app/campaigns/[id]/page.tsx`                   | `src/app/campaigns/[id]/page.tsx`                   | 🔁 Reemplaza |
| `next-port-v3/src/app/campaigns/[id]/support/page.tsx`           | `src/app/campaigns/[id]/support/page.tsx`           | 🔁 Reemplaza |

## ✨ Lo que cambia

**Página de detalle (`/campaigns/[id]`)**
- Cover hero con gradient del color de la campaña + watermark gigante del artista
- Demand status card destacada (apoyos / objetivo / % / progress + grid de meta: días / faltan / certeza / beneficio)
- Sección "Sobre el tour" con la descripción
- Lista de beneficios con check rojo carmesí
- Sticky CTA en la derecha con precio estimado + reserva condicional
- **Live Activity Feed**: feed simulado que tickea cada 5s mostrando @user · ciudad · precio
- Disclaimer legal con estilo amber

**Wizard de votar (`/campaigns/[id]/support`)**
- Stepper de 6 pasos en la cabecera, con line connectors animados
- Título grande tipo "PASO 1/6 → ¿DÓNDE QUERÉS VER EL SHOW?"
- Cards de opciones con radio buttons rediseñados
- Multi-select pills para beneficios
- Cards de niveles (Bronce/Plata/Oro) con borde superior del color
- Confirmación con header del artista + grid de preferencias + chips de beneficios
- Footer con "Atrás" + "Siguiente / Confirmar apoyo" + glow rojo en el CTA principal

**Compatibilidad preservada**
- La página `/campaigns/[id]/token` queda intacta — recibe los mismos URL params que antes
- El componente original `src/components/ui/SupportWizard.tsx` no se borra (queda como fallback si querés revertir)
- Funciona tanto con las 3 campañas originales como con las 9 extras del v2

## 🚀 Aplicarlo

```powershell
cd $HOME\Downloads\demandpass\mi-repo
git checkout main
git pull origin main
git checkout -b redesign/campaign-detail
Copy-Item -Path ..\next-port-v3\* -Destination . -Recurse -Force
git add .
git commit -m "feat(campaigns): redesigned detail + support wizard"
git push origin redesign/campaign-detail
```

Después abrís el link del PR que te tira el push → "Create pull request" → esperás Vercel build verde → "Merge pull request".

## 🧪 Cómo testear

Después de mergear y deployar, probá esta secuencia:
1. **`/campaigns`** → click en cualquier card "Apoyar"
2. **`/campaigns/X`** → ves el detalle con cover + live feed + sticky CTA
3. **Click "Apoyar esta campaña"** → entrás al wizard
4. Completá los 6 pasos
5. **Click "Confirmar apoyo"** → te lleva al `/token` con tu DemandPass digital

## ⏭️ Siguiente pantalla

**`/dashboard` (B2B)** — la pantalla más densa, con KPIs, tabla de campañas, demand pulse, heatmap LATAM, curva de precio, fans verificados.
