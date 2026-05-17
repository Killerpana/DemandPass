# next-port v5 — Auth (`/signin`) + Página de artista (`/artists/[slug]`)

Las 2 pantallas que faltaban del mockup. Cierran el set completo.

## 📦 Lo que incluye

### `/signin` — auth split-screen
- Toggle **Fan / Productora** con descripción de cada uno
- OAuth: **Google + Apple + Spotify** (Spotify solo para fans, marcado "Recomendado")
- Email + password form, con campos extras para productora (nombre + país)
- Toggle entre **"Crear cuenta"** y **"Ingresar"**
- Panel visual a la derecha con caso de éxito (Lenny confirmado) + cards flotantes de campañas
- Watermark gigante "DP" + grid background

### `/artists/[slug]` — página de artista
Rutas generadas estáticamente: `/artists/lenny-kravitz`, `/artists/sza`, `/artists/bad-bunny`.

- **Hero** con avatar 160×160 + initials, breadcrumb, nombre HUGE, géneros, CTAs (Seguir + Apoyar)
- **Stat strip** (5 KPIs): Demanda LATAM, Países activos, Precio promedio, Probabilidad, Última visita
- **Momentum chart** de 90 días con eventos anotados (Anuncio campaña, Spotify featured, Press release)
- **"Sobre el tour"** — bio del artista
- **Setlist probable** — 6 canciones con sparkline de frecuencia + Hit badge + duración + botón "Abrir en Spotify"
- **Active campaign card** (sticky en la derecha) — link al detalle de la campaña
- **Demand by country** — flags + cities + progress bars
- **Related artists** — 4 artistas similares con género + estado

## 🗂️ Archivos (6 nuevos)

| Origen | Destino |
|---|---|
| `next-port-v5/src/lib/artists-data.ts` | `src/lib/artists-data.ts` |
| `next-port-v5/src/components/marketing/AuthScreen.tsx` | `src/components/marketing/AuthScreen.tsx` |
| `next-port-v5/src/app/signin/page.tsx` | `src/app/signin/page.tsx` |
| `next-port-v5/src/components/marketing/ArtistDetail.tsx` | `src/components/marketing/ArtistDetail.tsx` |
| `next-port-v5/src/components/marketing/ArtistMomentumChart.tsx` | `src/components/marketing/ArtistMomentumChart.tsx` |
| `next-port-v5/src/app/artists/[slug]/page.tsx` | `src/app/artists/[slug]/page.tsx` |

## ⚙️ Compatibilidad

- **`/signin` es nueva ruta** — la navbar ya linkea a `/signin` desde la primera vez (v1 landing)
- **`/artists/[slug]` es nueva ruta** — todavía no hay link directo desde el resto de la app. Probala manualmente con `/artists/lenny-kravitz`. Después podemos:
  - Linkear el nombre del artista en cada card de campaña → su página
  - Agregar una página índice `/artists` con grid de todos
- Los formularios todavía no autentican de verdad — son visuales por ahora. Cuando definas el backend (Supabase, Clerk, NextAuth, etc) los conectamos.

## 🚀 Aplicarlo

```powershell
cd $HOME\Downloads\demandpass\mi-repo
git checkout main
git pull origin main
git checkout -b redesign/auth-artists
Copy-Item -Path ..\next-port-v5\* -Destination . -Recurse -Force
git add .
git commit -m "feat(auth+artists): signin page + artist detail pages"
git push origin redesign/auth-artists
```

PR → Vercel ✅ → Merge.

## 🧪 Cómo testear

Después del deploy:
1. **`/signin`** → toggle Fan/Productora, vas viendo cómo cambia el copy del título y los campos
2. **`/artists/lenny-kravitz`** → ves toda la página con momentum chart, setlist con sparklines, campaign card sticky, related artists
3. **`/artists/sza`** y **`/artists/bad-bunny`** también funcionan
4. Click "Apoyar" desde el artist page → te lleva a la campaña activa de ese artista

## ⏭️ Próximos pasos (cuando estén las 6 pantallas en producción)

Ahí pasamos a la fase de **iteración + features**:
1. Conectar auth real (Supabase / NextAuth)
2. Agregar **listado de artistas `/artists`** (índice grid)
3. Hacer que cada artist name en campañas linkee a su página
4. Mejoras según feedback de productoras / fans reales
5. Mobile polish del dashboard
