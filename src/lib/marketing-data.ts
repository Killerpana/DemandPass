// src/lib/marketing-data.ts
// Marketing-only mock data (cities for the demand console, testimonials, etc.)
// Production data should be loaded from your backend.

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
  { v: "127",  l: "Shows medidos",       d: "desde 2024" },
  { v: "4.2M", l: "Apoyos verificados",  d: "sin bots" },
  { v: "83%",  l: "Forecast accuracy",   d: "vs venta real" },
] as const;

export const howItWorksSteps = [
  {
    n: "01",
    t: "Los fans apoyan",
    d: "Indican ciudad, rango de precio y tipo de entrada. Cada apoyo se verifica por identidad y geolocalización — sin bots, sin duplicados.",
    points: ["Verificación por email + país", "Reserva condicional opcional", "Acceso prioritario garantizado"],
  },
  {
    n: "02",
    t: "Se mide la demanda",
    d: "Datos en tiempo real por ciudad, precio aceptado y perfil del fan. La señal se cruza con históricos de eventos comparables.",
    points: ["Mapa de calor por país", "Curva de precio óptima", "Forecast a 48 hs"],
  },
  {
    n: "03",
    t: "Las productoras deciden",
    d: "Dashboard con forecast, venue recomendado y lista de fans verificados. La productora confirma el show — o no — con datos, no intuición.",
    points: ["Venue auto-recomendado", "Lista de fans con prioridad", "Reservas condicionales devueltas"],
  },
] as const;

export const trustPoints = [
  { a: "No es una entrada.",                          b: "Es un registro de interés verificado." },
  { a: "El show no está confirmado.",                 b: "La reserva es condicional y reembolsable." },
  { a: "La venta final ocurre en la ticketera oficial.", b: "Integración con Ticketek, AllAccess, Tu Entrada." },
] as const;

export const b2bFeatures = [
  { t: "Forecast de tickets a 48 hs", d: "83% accuracy vs venta real" },
  { t: "Curva de precio óptima",      d: "Maximizá ingreso y sell-through" },
  { t: "Lista de fans verificados",   d: "Acceso prioritario gestionado" },
  { t: "Integración con ticketeras",  d: "Ticketek, AllAccess, Tu Entrada" },
] as const;

export const testimonials = [
  {
    logo: "DF", co: "DF Entertainment", name: "Romina B.", role: "Booking & Marketing",
    q: "Cambió cómo decidimos qué shows producir. Antes era olfato y un Excel con números de Spotify. Ahora vemos demanda real por ciudad y por precio, en vivo.",
    kpi: "+23% sell-through", kpiL: "6 shows medidos · 2025",
  },
  {
    logo: "MC", co: "Move Concerts", name: "Esteban G.", role: "Country Manager AR",
    q: "Para un artista internacional, justificar una segunda fecha en interior dejó de ser una conversación de fe. Tiramos data en la mesa y el promotor local accede.",
    kpi: "+2 fechas interior", kpiL: "Q4 2025",
  },
  {
    logo: "IN", co: "Industry 360", name: "Luciana A.", role: "Head of Strategy",
    q: "La lista de fans verificados es oro. Esa preventa convierte 4x mejor que cualquier base de mail genérica. Y los fans se acuerdan que apostaron por el artista.",
    kpi: "4× conversión preventa", kpiL: "vs base general",
  },
] as const;

export const faqItems = [
  { q: "¿DemandPass me garantiza una entrada?", a: "No. DemandPass registra tu interés y te da prioridad de acceso si el show se confirma. La compra de la entrada ocurre siempre en la ticketera oficial." },
  { q: "¿Qué pasa si el show no se confirma?", a: "Si hiciste una reserva condicional y el show no se confirma, el monto nominal abonado se devuelve íntegramente. Sin descuentos, sin penalidades." },
  { q: "¿Qué diferencia hay entre Campaña Oficial y Fan Demand?", a: "Las oficiales son impulsadas por la productora e incluyen reserva condicional. Las Fan Demand son iniciadas por fans — si se alcanza el objetivo, la productora evalúa confirmarlo." },
  { q: "¿Para qué sirve el DemandPass token?", a: "El token es tu registro de prioridad. Si el show se confirma, te permite acceder a la preventa antes que el público general, según el nivel elegido." },
  { q: "¿En qué países opera la plataforma?", a: "Argentina, México, Colombia, Chile y Perú al lanzamiento. Próximamente Uruguay, Brasil y España." },
  { q: "¿Cómo se verifica que la demanda es real?", a: "Cada apoyo se verifica por identidad (email + país), geolocalización y heurísticas anti-bot. Las reservas condicionales requieren método de pago válido." },
] as const;
