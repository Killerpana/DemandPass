export type CampaignType = "official" | "fan";
export type Level = "Bronce" | "Plata" | "Oro";

export interface Campaign {
  id: number;
  img: string;
  tourImg?: string;   // imagen oficial del tour (solo campañas oficiales)
  artist: string;
  event: string;
  city: string;
  country: string;
  type: CampaignType;
  days: number;
  goal: number;
  current: number;
  price: string;
  certainty: number;
  benefit: string;
  reserve: string | null;
  color: string;
  perks: string[];
  description: string;
}

export interface LevelConfig {
  name: Level;
  color: string;
  desc: string;
  popular?: boolean;
  perks: string[];
}

export const campaigns: Campaign[] = [
  {
    id: 0,
    img: "LK",
    tourImg: "/brand/tours/lenny.webp",
    artist: "Lenny Kravitz",
    event: "Raise Vibration Tour",
    city: "Buenos Aires",
    country: "Argentina",
    type: "official",
    days: 47,
    goal: 8000,
    current: 5420,
    price: "USD 80–120",
    certainty: 72,
    benefit: "Preventa 24 hs antes",
    reserve: "10%",
    color: "#7c3aed",
    perks: [
      "Acceso a preventa 24 hs antes del público general (si el show se confirma)",
      "Posición prioritaria en fila digital",
      "Acceso a estado de campaña en tiempo real",
      "Devolución del monto nominal en 72 hs si no se confirma",
    ],
    description:
      "Lenny Kravitz podría volver a Latinoamérica. Apoyá la campaña para registrar tu interés y obtener prioridad en la preventa si el show se confirma.",
  },
  {
    id: 1,
    img: "KP",
    artist: "K-Pop Night",
    event: "Argentina Tour",
    city: "Buenos Aires",
    country: "Argentina",
    type: "fan",
    days: 62,
    goal: 12000,
    current: 9850,
    price: "USD 40–70",
    certainty: 55,
    benefit: "Posible campaña oficial",
    reserve: null,
    color: "#2563eb",
    perks: [
      "Posibilidad de campaña oficial si se alcanza la demanda",
      "Info anticipada sobre artistas confirmados",
      "Alertas personalizadas de campaña",
      "Sin reserva inicial requerida",
    ],
    description:
      "La comunidad K-Pop argentina está creciendo. Si alcanzamos 12.000 apoyos, los promotores confirmaron que evalúan traer una noche K-Pop a Buenos Aires.",
  },
  {
    id: 2,
    img: "TI",
    tourImg: "/brand/tours/tini.webp",
    artist: "Tini",
    event: "Futttura Tour",
    city: "Buenos Aires",
    country: "Argentina",
    type: "official",
    days: 28,
    goal: 4000,
    current: 2900,
    price: "USD 60–90",
    certainty: 78,
    benefit: "Fila prioritaria + preventa",
    reserve: "15%",
    color: "#e879a8",
    perks: [
      "Posición en fila exclusiva el día del evento (si se confirma)",
      "Acceso a preventa 48 hs antes del público general",
      "Merch con reserva prioritaria (sujeto a disponibilidad)",
      "Devolución del monto nominal si el evento no se confirma",
    ],
    description:
      "Tini trae el Futttura Tour a Buenos Aires. Apoyá ahora para registrar tu interés y quedar en lista prioritaria para la preventa.",
  },
];

export const levels: LevelConfig[] = [
  {
    name: "Bronce",
    color: "#d97706",
    desc: "Para empezar",
    perks: [
      "Prioridad básica en lista de espera",
      "Alertas por email de campaña",
      "Estado de campaña en tiempo real",
    ],
  },
  {
    name: "Plata",
    color: "#94a3b8",
    desc: "El más elegido",
    popular: true,
    perks: [
      "Mejor posición en preventa",
      "Devolución acelerada",
      "Fila digital prioritaria",
      "Perks limitados de fanzone",
    ],
  },
  {
    name: "Oro",
    color: "#f59e0b",
    desc: "Máxima prioridad",
    perks: [
      "Prioridad superior en todos los accesos",
      "Acceso a Fanzone cuando el venue la incluya",
      "Fila exclusiva Oro",
      "Merch con reserva prioritaria (sujeto a stock)",
      "Soporte preferente",
    ],
  },
];

export const wizardSteps = [
  {
    title: "¿Dónde querés ver el show?",
    sub: "Tu ciudad preferida para el evento",
    type: "single" as const,
    key: "city" as const,
    options: ["Buenos Aires", "Córdoba", "Rosario", "Montevideo", "Santiago"],
  },
  {
    title: "¿Cuánto estás dispuesto a pagar?",
    sub: "Precio por entrada, en dólares",
    type: "single" as const,
    key: "price" as const,
    options: ["Hasta USD 40", "USD 40–70", "USD 70–120", "Más de USD 120"],
  },
  {
    title: "¿Qué tipo de entrada querés?",
    sub: "Elegí la zona que preferís en el venue",
    type: "single" as const,
    key: "ticket" as const,
    options: ["Campo", "Platea", "Campo delantero", "VIP", "No lo sé todavía"],
  },
  {
    title: "¿Qué beneficios te importan más?",
    sub: "Podés seleccionar todos los que quieras",
    type: "multi" as const,
    key: "benefits" as const,
    options: [
      "Preventa 24 hs antes",
      "Fila exclusiva",
      "Fanzone",
      "Merch reservado",
      "Info anticipada",
      "Soundcheck / meet & greet",
    ],
  },
  {
    title: "Elegí tu nivel DemandPass",
    sub: "Define tu posición en la fila y los beneficios que recibís",
    type: "level" as const,
  },
  {
    title: "Revisá y confirmá tu apoyo",
    sub: "Todo listo. Mirá el resumen antes de confirmar.",
    type: "confirm" as const,
  },
];

export const dashboardData = {
  kpis: {
    totalInterested: 12450,
    conditionalReserves: 4820,
    verifiedFans: 82,
    avgPrice: 74,
    forecastTickets: 7800,
    venueRecommendation: "8.000–12.000",
  },
  cities: [
    { name: "Buenos Aires", pct: 68, fans: 7854 },
    { name: "Córdoba", pct: 18, fans: 2090 },
    { name: "Rosario", pct: 8, fans: 930 },
    { name: "Montevideo", pct: 4, fans: 465 },
    { name: "Santiago", pct: 2, fans: 232 },
  ],
  prices: [
    { range: "Hasta USD 40", pct: 12 },
    { range: "USD 40–70", pct: 34 },
    { range: "USD 70–120", pct: 38 },
    { range: "Más de USD 120", pct: 16 },
  ],
  levels: [
    { name: "Bronce", count: 6820, pct: 55, color: "#d97706" },
    { name: "Plata", count: 4210, pct: 34, color: "#94a3b8" },
    { name: "Oro", count: 1420, pct: 11, color: "#f59e0b" },
  ],
  quality: [
    { label: "Demanda real", pct: 82, count: 9810, color: "#10b981" },
    { label: "Demanda media", pct: 13, count: 1555, color: "#f59e0b" },
    { label: "Sospechosa", pct: 5, count: 597, color: "#ef4444" },
  ],
  benefits: [
    { label: "Preventa 24 hs", pct: 78 },
    { label: "Info anticipada", pct: 62 },
    { label: "Fila exclusiva", pct: 54 },
    { label: "Fanzone", pct: 41 },
    { label: "Merch reservado", pct: 35 },
    { label: "Soundcheck", pct: 22 },
  ],
};
