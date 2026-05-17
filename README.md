# next-port v3.1 — Bugfix wizard + token

Patch chico que arregla **2 bugs reales** detectados en el flujo de apoyar.

## 🐛 Bugs arreglados

### 1. Wizard mostraba siempre "Lenny Kravitz" (cualquier campaña)

**Síntoma:** apoyabas a Bad Bunny, completabas el wizard, y en el paso 6 (confirmación) la card mostraba "Lenny Kravitz · Raise Vibration Tour · Buenos Aires".

**Causa:** la wizard buscaba la campaña por **índice de array** (`campaigns[campaignId]`). Las 9 campañas extras del v2 tienen id 100+ pero NO están en `src/lib/data.ts` (están en `marketing-data.ts`), así que la búsqueda fallaba y caía a Lenny (índice 0).

**Fix:** la wizard ahora recibe el `Campaign` completo como prop, en vez de buscarlo internamente.

### 2. Token page tiraba 404 para campañas extras

**Síntoma:** si confirmabas el apoyo en una campaña con id 100+ (ej: Bad Bunny), te tiraba a una página de error.

**Causa:** misma raíz — `campaigns[Number(id)]` con id=101 retorna `undefined`.

**Fix:** el token page ahora usa `allCampaigns.find(c => c.id === id)` igual que las otras páginas.

## 🗂️ Archivos (3 reemplazos)

| Origen | Destino en tu repo |
|---|---|
| `next-port-v3-1/src/components/marketing/SupportWizardV2.tsx` | `src/components/marketing/SupportWizardV2.tsx` |
| `next-port-v3-1/src/app/campaigns/[id]/support/page.tsx` | `src/app/campaigns/[id]/support/page.tsx` |
| `next-port-v3-1/src/app/campaigns/[id]/token/page.tsx` | `src/app/campaigns/[id]/token/page.tsx` |

## ✨ Mejoras menores incluidas

- En el paso de beneficios: copy clarificado → "Esto nos ayuda a entender qué experiencia querés que la productora priorice"
- En el paso de niveles: agregué disclaimer → "ⓘ Los beneficios exactos varían según el show y la productora. Estos son lineamientos."
- En la confirmación: "Beneficios elegidos" → "Beneficios que querés que se prioricen" (más honesto sobre qué significa)
- El token page completamente reskinado a la estética nueva (estaba en el estilo viejo)

## 🚀 Aplicarlo

```powershell
cd $HOME\Downloads\demandpass\mi-repo
git checkout main
git pull origin main
git checkout -b fix/wizard-campaign-lookup
Copy-Item -Path ..\next-port-v3-1\* -Destination . -Recurse -Force
git add .
git commit -m "fix(wizard): resolve campaign by id instead of array index"
git push origin fix/wizard-campaign-lookup
```

Después: PR → Vercel ✅ → Merge.

## 🧪 Cómo verificar el fix

1. Andá a **`/campaigns`** → click "Apoyar" en **Bad Bunny** (no Lenny)
2. Completá los 6 pasos
3. En el paso 6 → la card del artista debe decir **"Bad Bunny · Más Tarde Tour · Ciudad de México"** ✅
4. "Confirmar apoyo" → te lleva al `/token` → debe mostrar Bad Bunny también, no 404 ✅

## ⏭️ Después de mergear

Volvemos al plan: **`/dashboard` (B2B)** es la próxima pantalla. Avisame cuando deployes el fix.
