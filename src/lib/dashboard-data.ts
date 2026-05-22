// src/lib/dashboard-data.ts
// Mock data for the redesigned B2B dashboard.
// In production these come from your backend — kept structured the same way.

export const orgInfo = {
  shortCode: "DF",
  name: "DF Entertainment",
  plan: "PRO · AR",
};

export const dashboardKPIs = [
  { l: "Campañas activas",   v: "8",       d: "+2",    dd: "up" as const, sd: [4, 5, 5, 6, 6, 7, 7, 8] },
  { l: "Apoyos verificados", v: "34.2K",   d: "+12.3%", dd: "up" as const, sd: [12, 18, 22, 26, 28, 30, 32, 34] },
  { l: "Precio promedio",    v: "USD 78",  d: "+2.4",  dd: "up" as const, sd: [68, 70, 72, 73, 74, 76, 77, 78] },
  { l: "Forecast tickets",   v: "42.8K",   d: "+18%",  dd: "up" as const, sd: [22, 26, 30, 34, 36, 39, 41, 43] },
  { l: "Probabilidad show",  v: "78%",     d: "+4 pp", dd: "up" as const, color: "var(--color-emerald2)", sd: [60, 64, 68, 70, 73, 75, 77, 78] },
];

export type CampaignRow = {
  c: string; a: string; city: string; s: "oficial" | "fan";
  sup: number; tg: number; pct: number; price: number; days: number;
  trend: number[]; prob: number;
};

export const dashboardCampaigns: CampaignRow[] = [
  { c: "LK", a: "Lenny Kravitz",     city: "BUE", s: "oficial", sup: 5420,  tg: 8000,  pct: 68, price: 84,  days: 47, trend: [22, 28, 35, 42, 48, 56, 62, 65, 68],  prob: 91 },
  { c: "BL", a: "Billie Eilish",      city: "BUE", s: "oficial", sup: 11200, tg: 12000, pct: 93, price: 120, days: 7,  trend: [38, 45, 58, 64, 72, 78, 80, 82, 93],  prob: 96 },
  { c: "SZ", a: "SZA",               city: "BUE", s: "fan",     sup: 7280,  tg: 10000, pct: 73, price: 118, days: 22, trend: [20, 28, 38, 48, 55, 62, 68, 70, 73],  prob: 82 },
  { c: "TI", a: "Tini",              city: "BUE", s: "oficial", sup: 2900,  tg: 4000,  pct: 73, price: 70,  days: 28, trend: [22, 28, 38, 45, 52, 58, 64, 68, 73],  prob: 76 },
  { c: "TY", a: "Tyler the Creator", city: "BUE", s: "fan",     sup: 1240,  tg: 6000,  pct: 21, price: 92,  days: 62, trend: [4, 6, 8, 10, 12, 14, 17, 19, 21],     prob: 38 },
  { c: "BD", a: "Bad Bunny",         city: "MEX", s: "oficial", sup: 14200, tg: 15000, pct: 95, price: 96,  days: 4,  trend: [60, 68, 75, 82, 86, 88, 91, 93, 95],  prob: 99 },
  { c: "JB", a: "Justin Bieber",     city: "BUE", s: "oficial", sup: 4680,  tg: 9000,  pct: 52, price: 102, days: 34, trend: [12, 18, 24, 30, 36, 42, 46, 50, 52],  prob: 64 },
];

export const demandPulseEvents = [
  { t: "15:42:18", e: "NEW_SUPPORT", m: "Buenos Aires · USD 95 · platea",   c: "LK", tag: "ok" as const },
  { t: "15:42:11", e: "NEW_SUPPORT", m: "Córdoba · USD 60 · campo",          c: "GD", tag: "ok" as const },
  { t: "15:42:04", e: "THRESHOLD",   m: "KP alcanzó 80% del objetivo",       c: "KP", tag: "warn" as const },
  { t: "15:41:52", e: "NEW_SUPPORT", m: "Buenos Aires · USD 110 · vip",      c: "SZ", tag: "ok" as const },
  { t: "15:41:38", e: "NEW_SUPPORT", m: "México DF · USD 95 · platea",       c: "BD", tag: "ok" as const },
  { t: "15:41:14", e: "CONDITIONAL", m: "Reserva condicional USD 15",        c: "LK", tag: "info" as const },
  { t: "15:40:52", e: "NEW_SUPPORT", m: "Rosario · USD 85 · platea",         c: "LK", tag: "ok" as const },
  { t: "15:40:28", e: "PRICE_SIGNAL", m: "Sweet spot LK ↑ USD 82 → 84",      c: "LK", tag: "warn" as const },
  { t: "15:40:08", e: "NEW_SUPPORT", m: "Buenos Aires · USD 75 · campo",     c: "KP", tag: "ok" as const },
];

export const heatmapCities = [
  { c: "Buenos Aires",     n: 14200, p: 41 },
  { c: "Ciudad de México", n: 8600,  p: 25 },
  { c: "Córdoba",          n: 3400,  p: 10 },
  { c: "Santiago",         n: 2900,  p: 8 },
  { c: "Bogotá",           n: 2100,  p: 6 },
  { c: "Lima",             n: 1800,  p: 5 },
  { c: "Rosario",          n: 1200,  p: 4 },
];

export const recentFans = [
  { n: "Sofía M.",     u: "sofi_m",       c: "Buenos Aires", p: 95,  age: 24, tier: "gold" as const },
  { n: "Mateo A.",     u: "mateoa",       c: "Córdoba",      p: 80,  age: 21, tier: "silver" as const },
  { n: "Fernando G.",  u: "fer.gonzalez", c: "Rosario",      p: 100, age: 32, tier: "gold" as const },
  { n: "Jazmín R.",    u: "jaz.r",        c: "Buenos Aires", p: 85,  age: 27, tier: "silver" as const },
  { n: "Lautaro P.",   u: "lautaro",      c: "Buenos Aires", p: 110, age: 29, tier: "gold" as const },
];

export const priceCurveData = {
  sweetSpot: 84,
  bars: [
    { p: 30,  d: 12 }, { p: 40,  d: 24 }, { p: 50,  d: 38 }, { p: 60,  d: 56 },
    { p: 70,  d: 78 }, { p: 80,  d: 92 }, { p: 84,  d: 100 }, { p: 90, d: 88 },
    { p: 100, d: 64 }, { p: 110, d: 42 }, { p: 120, d: 24 }, { p: 130, d: 10 },
  ],
};
