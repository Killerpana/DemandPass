// src/lib/marketing-data.ts (v2 — adds extraCampaigns + enrichment for filtering)
// Original marketing-data values are preserved at the top.
import type { Campaign } from "./data";

// ─── Hero / How it works / FAQ (unchanged from v1) ────────────────────
export const heroCities = [
  { name: "Buenos Aires", votes: 5420, pct: 68, trend: [4, 8, 6, 12, 10, 18, 22, 24] },
  { name: "Córdoba",      votes: 1860, pct: 32, trend: [2, 4, 3, 6, 8, 7, 11, 12] },
  { name: "Rosario",      votes: 1120, pct: 24, trend: [1, 2, 3, 4, 5, 6, 7, 8] },
  { name: "Mendoza",      votes: 740,  pct: 18, trend: [1, 1, 2, 2, 3, 4, 5, 6] },
] as const;

export const marqueeItems = [
  "127 SHOWS MEDIDOS",
  "4.2M APOYOS VERIFICADOS",
  "DF ENTERTAINMENT",
  "MOVE CONCERTS",
  "PEP ROSSO",
  "INDUSTRY 360",
  "TICKETEK INTEGRADO",
  "ALL ACCESS",
  "POPART MÚSICA",
  "83% FORECAST ACCURACY",
] as const;

export const trustStats = [
  { v: "127",  n: 127,      suffix: "",  l: "Shows medidos",       d: "desde 2024" },
  { v: "4.2M", n: 4.2,      suffix: "M", l: "Apoyos verificados",  d: "sin bots" },
  { v: "83%",  n: 83,       suffix: "%", l: "Forecast accuracy",   d: "vs venta real" },
] as const;

export const howItWorksSteps = [
  { n: "01", t: "Los fans apoyan",         d: "Indican ciudad, rango de precio y tipo de entrada. Cada apoyo se verifica por identidad y geolocalización con controles anti-fraude.", points: ["Verificación por email + país", "Reserva condicional opcional", "Priority Pass si el show se confirma"] },
  { n: "02", t: "Se mide la demanda",      d: "Datos en tiempo real por ciudad, precio aceptado y perfil del fan. La señal se cruza con históricos de eventos comparables.",            points: ["Mapa de calor por país", "Curva de precio óptima", "Forecast a 48 hs"] },
  { n: "03", t: "Las productoras deciden", d: "Dashboard con forecast, venue recomendado y lista de fans verificados. La productora confirma el show — o no — con datos, no intuición.", points: ["Venue auto-recomendado", "Lista de fans con prioridad", "Reservas condicionales devueltas"] },
] as const;

export const trustPoints = [
  { a: "No es una entrada.",                             b: "Es un registro de interés verificado." },
  { a: "El show no está confirmado.",                    b: "La reserva es condicional y reembolsable." },
  { a: "La venta final ocurre en la ticketera oficial.", b: "Integración con Ticketek, AllAccess, Tu Entrada." },
] as const;

export const b2bFeatures = [
  { t: "Forecast de tickets a 48 hs", d: "83% accuracy vs venta real" },
  { t: "Curva de precio óptima",      d: "Maximizá ingreso y sell-through" },
  { t: "Lista de fans verificados",   d: "Acceso prioritario gestionado" },
  { t: "Integración con ticketeras",  d: "Ticketek, AllAccess, Tu Entrada" },
] as const;

export const testimonials = [
  { logo: "DF", co: "DF Entertainment",    name: "Romina B.",  role: "Booking & Marketing",     q: "Cambió cómo decidimos qué shows producir. Antes era olfato y un Excel con números de Spotify. Ahora vemos demanda real por ciudad y por precio, en vivo.",                                                                         kpi: "+23% sell-through",        kpiL: "6 shows medidos · 2025"  },
  { logo: "MC", co: "Move Concerts",       name: "Esteban G.", role: "Country Manager AR",       q: "Para un artista internacional, justificar una segunda fecha en interior dejó de ser una conversación de fe. Tiramos data en la mesa y el promotor local accede.",                                                                     kpi: "+2 fechas interior",       kpiL: "Q4 2025"                 },
  { logo: "IN", co: "Industry 360",        name: "Luciana A.", role: "Head of Strategy",         q: "La lista de fans verificados es oro. Esa preventa convierte 4x mejor que cualquier base de mail genérica. Y los fans se acuerdan que apostaron por el artista.",                                                                      kpi: "4× conversión preventa",   kpiL: "vs base general"         },
  { logo: "VS", co: "Los Planetas del Sur", name: "Valentín S.", role: "Artista independiente",  q: "Siempre supe que tenía fans en Córdoba, pero no podía probarlo. Con DemandPass armé mi primera campaña exploratoria, llegué al umbral en 3 semanas y confirmé la fecha. El show se agotó en 48 horas.",                              kpi: "100% sold out",            kpiL: "1ra fecha confirmada"    },
  { logo: "ML", co: "Martina L.",          name: "Martina L.", role: "Fan Oro · Buenos Aires",   q: "Apoyé la campaña de mi artista favorito cuatro meses antes del anuncio. Cuando confirmaron el show, recibí mi Priority Pass y tuve acceso a preventa 48 horas antes. Nunca estuve tan adelante en una fila.",                               kpi: "48 hs antes",              kpiL: "que venta general"       },
  { logo: "IN", co: "Industry 360",     name: "Luciana A.", role: "Head of Strategy",    q: "La lista de fans verificados es oro. Esa preventa convierte 4x mejor que cualquier base de mail genérica. Y los fans se acuerdan que apostaron por el artista.",        kpi: "4× conversión preventa",  kpiL: "vs base general" },
] as const;

export const faqItems = [
  { q: "¿DemandPass me garantiza una entrada?",                       a: "No. DemandPass registra tu interés y te da prioridad de acceso si el show se confirma. La compra de la entrada ocurre siempre en la ticketera oficial." },
  { q: "¿Qué pasa si el show no se confirma?",                        a: "Si hiciste una reserva condicional y el show no se confirma, el monto nominal abonado se devuelve íntegramente. Sin descuentos, sin penalidades." },
  { q: "¿Qué diferencia hay entre Campaña Oficial y Fan Demand?",     a: "Las oficiales son impulsadas por la productora e incluyen reserva condicional. Las Fan Demand son iniciadas por fans — si se alcanza el objetivo, la productora evalúa confirmarlo." },
  { q: "¿Para qué sirve el DemandPass Priority Pass?",               a: "El Priority Pass es tu registro de prioridad. Si el show se confirma, te permite acceder a la preventa antes que el público general, según campaña, membresía y disponibilidad." },
  { q: "¿En qué países opera la plataforma?",                         a: "Argentina, México, Colombia, Chile y Perú al lanzamiento. Próximamente Uruguay, Brasil y España." },
  { q: "¿Cómo se verifica que la demanda es real?",                   a: "Cada apoyo se verifica por identidad (email + país), geolocalización y heurísticas anti-bot. Las reservas condicionales requieren método de pago válido." },
] as const;

// ─── Campaign enrichment + extras ─────────────────────────────────────
export type Genre = "Rock" | "Pop" | "Hip-Hop" | "Electrónica" | "Latin" | "K-Pop" | "Indie" | "R&B" | "Otro";
export type EnrichedCampaign = Campaign & { genre: Genre };

const GENRE_OVERRIDES: Record<string, Genre> = {
  "Lenny Kravitz":      "Rock",
  "K-Pop Night":        "K-Pop",
  "Global DJ":          "Electrónica",
  "SZA":                "R&B",
  "Bad Bunny":          "Latin",
  "Tyler the Creator":  "Hip-Hop",
  "Justin Bieber":      "Pop",
  "Arctic Monkeys":     "Rock",
  "Pharrell":           "Hip-Hop",
  "Billie Eilish":      "Pop",
  "Tame Impala":        "Indie",
  "Oasis Reunion":      "Rock",
};

export function genreFor(artist: string): Genre {
  return GENRE_OVERRIDES[artist] ?? "Otro";
}

export function enrichCampaign(c: Campaign): EnrichedCampaign {
  return { ...c, genre: genreFor(c.artist) };
}

// 9 additional campaigns so the listing has substance.
// Same shape as Campaign (from src/lib/data.ts).
export const extraCampaigns: EnrichedCampaign[] = [
  {
    id: 100, img: "SZ", artist: "SZA", event: "SOS Tour · LATAM",
    city: "Buenos Aires", country: "Argentina", type: "fan",
    days: 22, goal: 10000, current: 7280, price: "USD 90–140",
    certainty: 73, benefit: "Preventa + Fanzone", reserve: null,
    color: "#7a1b5e",
    perks: ["Acceso a preventa 48 hs antes", "Posibilidad de Fanzone si el venue lo incluye", "Lista de prioridad gestionada"],
    description: "SZA podría incluir Buenos Aires en el SOS Tour LATAM. La demanda viene creciendo +580 apoyos por semana.",
    genre: "R&B",
  },
  {
    id: 101, img: "BD", tourImg: "/brand/tours/bad-bunny.jpg", artist: "Bad Bunny", event: "Más Tarde Tour",
    city: "Ciudad de México", country: "México", type: "official",
    days: 4, goal: 15000, current: 14200, price: "USD 70–130",
    certainty: 99, benefit: "Confirmación inminente",
    reserve: "10%", color: "#1b5a70",
    perks: ["Preventa 48 hs antes del público general", "Acceso prioritario en fila digital", "Reserva condicional reembolsable"],
    description: "La campaña está al 95% del objetivo. Confirmación de fecha esperada en los próximos 7 días.",
    genre: "Latin",
  },
  {
    id: 102, img: "TY", artist: "Tyler the Creator", event: "Chromakopia World Tour",
    city: "Buenos Aires", country: "Argentina", type: "fan",
    days: 62, goal: 6000, current: 1240, price: "USD 80–110",
    certainty: 38, benefit: "Posible campaña oficial", reserve: null,
    color: "#4b2570",
    perks: ["Posibilidad de campaña oficial si se alcanza el objetivo", "Alertas tempranas si el promotor evalúa el show"],
    description: "Fans de hip-hop pidiendo Buenos Aires en el Chromakopia World Tour. Si llegamos a 6.000 apoyos, los promotores evalúan traerlo.",
    genre: "Hip-Hop",
  },
  {
    id: 103, img: "JB", artist: "Justin Bieber", event: "Justice World Tour 2026",
    city: "Buenos Aires", country: "Argentina", type: "official",
    days: 34, goal: 9000, current: 4680, price: "USD 95–140",
    certainty: 64, benefit: "Preventa 24hs + Fila exclusiva",
    reserve: "15%", color: "#7c3aed",
    perks: ["Acceso a preventa 24 hs antes", "Fila exclusiva", "Merch reservado", "Devolución íntegra si no se confirma"],
    description: "Justin Bieber suma fechas para LATAM 2026. Buenos Aires es uno de los mercados en evaluación.",
    genre: "Pop",
  },
  {
    id: 104, img: "AR", artist: "Arctic Monkeys", event: "The Car Tour",
    city: "Buenos Aires", country: "Argentina", type: "fan",
    days: 18, goal: 10000, current: 8400, price: "USD 75–115",
    certainty: 84, benefit: "Posible campaña oficial pronto", reserve: null,
    color: "#1a2a2a",
    perks: ["Posibilidad de campaña oficial", "Info anticipada", "Alertas personalizadas"],
    description: "84% del objetivo, +1.2K apoyos esta semana. Productoras observando activamente.",
    genre: "Rock",
  },
  {
    id: 105, img: "PH", artist: "Pharrell", event: "Joyride Tour",
    city: "Ciudad de México", country: "México", type: "fan",
    days: 41, goal: 8000, current: 3200, price: "USD 80–120",
    certainty: 42, benefit: "Posible campaña oficial", reserve: null,
    color: "#9d6ef8",
    perks: ["Posibilidad de campaña oficial", "Alertas si avanza la negociación"],
    description: "Una primera evaluación para sumar México al Joyride Tour. El sweet spot de precio está en USD 95.",
    genre: "Hip-Hop",
  },
  {
    id: 106, img: "BL", tourImg: "/brand/tours/billie.jpg", artist: "Billie Eilish", event: "Hit Me Hard and Soft Tour",
    city: "Buenos Aires", country: "Argentina", type: "official",
    days: 7, goal: 12000, current: 11200, price: "USD 95–160",
    certainty: 96, benefit: "Preventa + Soundcheck",
    reserve: "10%", color: "#10b981",
    perks: ["Preventa 48 hs antes", "Acceso a Soundcheck para nivel Oro", "Fila digital exclusiva", "Reserva condicional 100% reembolsable"],
    description: "Confirmación en cuenta regresiva. 93% del objetivo, cierra en 7 días.",
    genre: "Pop",
  },
  {
    id: 107, img: "TM", artist: "Tame Impala", event: "Currents Tour 2026",
    city: "Buenos Aires", country: "Argentina", type: "fan",
    days: 26, goal: 9000, current: 6420, price: "USD 70–110",
    certainty: 71, benefit: "Posible campaña oficial", reserve: null,
    color: "#a78bfa",
    perks: ["Posibilidad de campaña oficial", "Alertas tempranas", "Lista de prioridad gestionada"],
    description: "Kevin Parker reactivó la banda para LATAM. Apoyos creciendo en mercados secundarios.",
    genre: "Indie",
  },
  {
    id: 108, img: "OB", artist: "Oasis Reunion", event: "Live '26",
    city: "Buenos Aires", country: "Argentina", type: "fan",
    days: 52, goal: 18000, current: 12400, price: "USD 110–180",
    certainty: 69, benefit: "Posible campaña oficial", reserve: null,
    color: "#fbbf24",
    perks: ["Posibilidad de campaña oficial", "Lista de espera prioritaria", "Info anticipada de fechas"],
    description: "La reunión más esperada del rock. 12.400 apoyos verificados — la productora está evaluando la fecha.",
    genre: "Rock",
  },
];
