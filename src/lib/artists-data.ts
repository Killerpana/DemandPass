// src/lib/artists-data.ts
// Artist metadata + helpers. Maps from existing campaigns so the artist page
// can show which campaigns the artist has open.
import type { Campaign } from "./data";
import { campaigns } from "./data";
import { extraCampaigns } from "./marketing-data";

export type Artist = {
  slug: string;
  name: string;
  initials: string;
  color: string;
  genres: string[];
  lastVisit: string;
  lastVisitDetail: string;
  bio: string;
  setlist: { n: string; title: string; duration: string; demand: number[]; hit?: boolean }[];
};

const ALL_CAMPAIGNS: Campaign[] = [...campaigns, ...extraCampaigns];

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Artists with full info — for the ones we know
export const ARTISTS_RAW: Omit<Artist, "slug">[] = [
  {
    name: "Lenny Kravitz",
    initials: "LK",
    color: "#7c3aed",
    genres: ["Rock", "Funk", "Soul"],
    lastVisit: "2019",
    lastVisitDetail: "Argentina",
    bio: "Tras 5 años desde su última visita a Sudamérica, Lenny Kravitz vuelve a la región con el Raise Vibration Tour — 2h15 de show con banda completa, 4 cambios de vestuario y el repertorio que incluye material nuevo + clásicos. Producción confirmada en Brasil (3 fechas: São Paulo, Rio, Curitiba). La gira en Argentina depende del nivel de apoyo que alcance la campaña.",
    setlist: [
      { n: "01", title: "Fly Away",                       duration: "3:42", demand: [1, 2, 1, 3, 2, 4, 3, 5, 4, 5], hit: true },
      { n: "02", title: "Are You Gonna Go My Way",        duration: "3:35", demand: [2, 3, 4, 4, 5, 5, 4, 5, 5, 5], hit: true },
      { n: "03", title: "Where Are We Runnin'?",          duration: "2:56", demand: [1, 1, 2, 2, 2, 3, 3, 3, 4, 4] },
      { n: "04", title: "American Woman",                 duration: "5:31", demand: [2, 3, 3, 4, 4, 4, 5, 5, 5, 5], hit: true },
      { n: "05", title: "Always on the Run",              duration: "3:50", demand: [1, 2, 3, 3, 4, 4, 4, 5, 5, 5], hit: true },
      { n: "06", title: "It Ain't Over 'Til It's Over",   duration: "3:55", demand: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4] },
    ],
  },
  {
    name: "SZA",
    initials: "SZ",
    color: "#7a1b5e",
    genres: ["R&B", "Soul", "Pop"],
    lastVisit: "Nunca",
    lastVisitDetail: "Sería primera vez",
    bio: "SZA evaluó incluir Buenos Aires en su SOS Tour LATAM. La demanda viene creciendo +580 apoyos por semana. Show de 1h45 con banda completa y visuales del SOS Deluxe.",
    setlist: [
      { n: "01", title: "Kill Bill",        duration: "2:33", demand: [3, 4, 5, 5, 5, 5, 5, 5, 5, 5], hit: true },
      { n: "02", title: "Snooze",           duration: "3:21", demand: [3, 4, 4, 5, 5, 5, 5, 5, 5, 5], hit: true },
      { n: "03", title: "Good Days",        duration: "4:39", demand: [2, 3, 4, 4, 4, 5, 5, 5, 5, 5], hit: true },
      { n: "04", title: "Saturn",           duration: "3:30", demand: [1, 2, 2, 3, 3, 4, 4, 5, 5, 5] },
      { n: "05", title: "Nobody Gets Me",   duration: "3:00", demand: [2, 2, 3, 3, 4, 4, 4, 5, 5, 5] },
    ],
  },
  {
    name: "Bad Bunny",
    initials: "BD",
    color: "#1b5a70",
    genres: ["Latin", "Reggaeton", "Pop"],
    lastVisit: "2022",
    lastVisitDetail: "World's Hottest Tour",
    bio: "Show del Más Tarde Tour — 2 horas, banda completa, sección de cumbia. Producción confirmada en México con 3 fechas en CDMX. La campaña está al 95% del objetivo — confirmación esperada en los próximos 7 días.",
    setlist: [
      { n: "01", title: "Tití Me Preguntó",  duration: "4:03", demand: [4, 5, 5, 5, 5, 5, 5, 5, 5, 5], hit: true },
      { n: "02", title: "Me Porto Bonito",   duration: "2:58", demand: [3, 4, 5, 5, 5, 5, 5, 5, 5, 5], hit: true },
      { n: "03", title: "Monaco",            duration: "3:43", demand: [3, 4, 4, 5, 5, 5, 5, 5, 5, 5], hit: true },
      { n: "04", title: "Yo Perreo Sola",    duration: "3:11", demand: [3, 3, 4, 4, 5, 5, 5, 5, 5, 5], hit: true },
    ],
  },
];

export const ARTISTS: Artist[] = ARTISTS_RAW.map((a) => ({ ...a, slug: slugify(a.name) }));

export function findArtist(slug: string): Artist | null {
  return ARTISTS.find((a) => a.slug === slug) ?? null;
}

export function campaignsForArtist(artistName: string): Campaign[] {
  return ALL_CAMPAIGNS.filter((c) => c.artist === artistName);
}

// Demand by country — aggregated from campaigns; if there's only one country,
// we synthesize a plausible split for the visualization.
export function demandByCountry(artistName: string): { country: string; flag: string; n: number; p: number }[] {
  const list = campaignsForArtist(artistName);
  const total = list.reduce((acc, c) => acc + c.current, 0) || 1;

  const flags: Record<string, string> = {
    Argentina: "🇦🇷", México: "🇲🇽", Chile: "🇨🇱", Colombia: "🇨🇴",
    Perú: "🇵🇪", Brasil: "🇧🇷", Uruguay: "🇺🇾",
  };

  const grouped: Record<string, number> = {};
  list.forEach((c) => {
    grouped[c.country] = (grouped[c.country] || 0) + c.current;
  });

  // If only one country, add some fictional secondary markets for visualization
  if (Object.keys(grouped).length <= 1) {
    const primary = list[0]?.country ?? "Argentina";
    const base = grouped[primary] ?? 1000;
    return [
      { country: primary,    flag: flags[primary] ?? "🌎", n: base,                  p: 100 },
      { country: "México",    flag: "🇲🇽", n: Math.round(base * 0.43), p: 43 },
      { country: "Chile",     flag: "🇨🇱", n: Math.round(base * 0.19), p: 19 },
      { country: "Colombia",  flag: "🇨🇴", n: Math.round(base * 0.12), p: 12 },
      { country: "Perú",      flag: "🇵🇪", n: Math.round(base * 0.06), p: 6 },
    ].filter((x) => x.country !== primary || true);
  }

  const max = Math.max(...Object.values(grouped));
  return Object.entries(grouped)
    .sort((a, b) => b[1] - a[1])
    .map(([country, n]) => ({
      country,
      flag: flags[country] ?? "🌎",
      n,
      p: Math.round((n / max) * 100),
    }));
}

export function relatedArtists(current: string): { initials: string; name: string; genres: string; status: string }[] {
  // Simple rule-based: artists with shared genres or scene tier
  const all = [
    { initials: "HG", name: "Hozier",            genres: "Indie · Soul",      status: "Fan demand · 3.2K" },
    { initials: "MJ", name: "Michael Kiwanuka",  genres: "Soul",              status: "Sin campaña" },
    { initials: "JT", name: "Jamiroquai",        genres: "Funk · Acid Jazz",  status: "Campaña activa · 78%" },
    { initials: "BR", name: "Bruno Mars",        genres: "Pop · Soul",        status: "Confirmado · 2026" },
    { initials: "BL", name: "Billie Eilish",     genres: "Pop · Alt",         status: "Campaña activa · 93%" },
    { initials: "FR", name: "Frank Ocean",       genres: "R&B · Soul",        status: "Fan demand · 4.1K" },
    { initials: "DC", name: "Doja Cat",          genres: "Pop · Hip-Hop",     status: "Sin campaña" },
    { initials: "PH", name: "Pharrell",          genres: "Hip-Hop · Pop",     status: "Campaña activa · 40%" },
  ];
  return all.filter((a) => a.name !== current).slice(0, 4);
}
