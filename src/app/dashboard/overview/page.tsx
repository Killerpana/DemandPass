import { DashboardPageShell } from "@/components/dashboard/DashboardPageShell";
import { TrendingUp, Users, DollarSign, Zap, MapPin, CheckCircle2, Clock, AlertCircle } from "lucide-react";

const KPI_TOP = [
  { label: "Revenue proyectado",     value: "USD 2.4M",  delta: "+18% MoM",  color: "#10b981", Icon: DollarSign },
  { label: "Fans verificados total", value: "34.200",    delta: "+12% MoM",  color: "#3b82f6", Icon: Users },
  { label: "Tasa de confirmación",   value: "78%",       delta: "+4pp",       color: "#f59e0b", Icon: Zap },
  { label: "Conversión preventa",    value: "4.2x",      delta: "vs base gen",color: "#8b5cf6", Icon: TrendingUp },
];

const FUNNEL = [
  { stage: "Fans que vieron campaña",  n: 142000, pct: 100, color: "#374151" },
  { stage: "Fans que apoyaron",        n: 34200,  pct: 24,  color: "#3b82f6" },
  { stage: "Fans que reservaron",      n: 8100,   pct: 6,   color: "#A31645" },
  { stage: "Compraron entrada",        n: 6800,   pct: 5,   color: "#10b981" },
];

const LATAM = [
  { country: "Argentina",  campaigns: 8,  fans: "21.4K", score: 94 },
  { country: "México",     campaigns: 3,  fans: "7.2K",  score: 78 },
  { country: "Chile",      campaigns: 1,  fans: "2.8K",  score: 61 },
  { country: "Colombia",   campaigns: 1,  fans: "1.9K",  score: 54 },
  { country: "Uruguay",    campaigns: 1,  fans: "0.9K",  score: 48 },
];

const ALERTS = [
  { type: "warning", Icon: AlertCircle, color: "#f59e0b", text: "Tyler the Creator: solo 38% — requiere atención" },
  { type: "ok",      Icon: CheckCircle2, color: "#10b981", text: "Billie Eilish: 96% — lista para confirmar" },
  { type: "ok",      Icon: CheckCircle2, color: "#10b981", text: "Lenny Kravitz: 91% confianza — venue disponible" },
  { type: "info",    Icon: Clock,        color: "#3b82f6", text: "Godsmack cierra en 5 días — revisar decisión" },
];

const MILESTONES = [
  { label: "Campañas activas",  current: 8,   goal: 10,  pct: 80  },
  { label: "Fans verificados",  current: 34.2, goal: 50, pct: 68, suffix: "K" },
  { label: "Revenue proyectado",current: 2.4,  goal: 5,  pct: 48, prefix: "USD ", suffix: "M" },
];

export default function OverviewPage() {
  return (
    <DashboardPageShell title="Overview" breadcrumb="Overview" active="overview">
      {/* KPIs ejecutivos */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {KPI_TOP.map(({ label, value, delta, color, Icon }) => (
          <div key={label} className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--color-txt3)" }}>{label}</span>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: color + "18" }}>
                <Icon size={14} color={color} strokeWidth={2} />
              </div>
            </div>
            <p className="font-[family-name:var(--font-display)] text-[26px] font-black leading-none mb-1" style={{ color }}>{value}</p>
            <p className="text-[11px] font-semibold" style={{ color: "#10b981" }}>{delta}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-5 mb-5">
        {/* Funnel de conversión */}
        <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <h2 className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] mb-5">
            Funnel de conversión
          </h2>
          {FUNNEL.map((f, i) => (
            <div key={f.stage} className="mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[12px]" style={{ color: "var(--color-txt2)" }}>{f.stage}</span>
                <div className="flex gap-3 text-[12px]">
                  <span style={{ color: "var(--color-txt)" }}>{f.n.toLocaleString()}</span>
                  <span style={{ color: "var(--color-txt3)" }}>{f.pct}%</span>
                </div>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="h-full rounded-full transition-all"
                  style={{ width: `${f.pct}%`, background: i === 0 ? "rgba(55,65,81,0.8)" : i === 1 ? "#3b82f6" : i === 2 ? "#A31645" : "#10b981" }} />
              </div>
            </div>
          ))}
          <p className="text-[11px] mt-2" style={{ color: "var(--color-txt3)" }}>
            Conversión fan → ticket: <strong style={{ color: "#10b981" }}>4.2x</strong> vs base general del mercado
          </p>
        </div>

        {/* Alertas y estado */}
        <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <h2 className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] mb-4">
            Estado de campañas
          </h2>
          <div className="flex flex-col gap-3">
            {ALERTS.map((a, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg"
                style={{ background: a.color + "0e", border: `1px solid ${a.color}22` }}>
                <a.Icon size={15} color={a.color} strokeWidth={2} className="shrink-0 mt-0.5" />
                <p className="text-[12px] leading-[1.5]">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-5">
        {/* Objetivos del período */}
        <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <h2 className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] mb-5">
            Objetivos Q3 2026
          </h2>
          {MILESTONES.map(m => (
            <div key={m.label} className="mb-5">
              <div className="flex justify-between text-[12px] mb-1.5">
                <span style={{ color: "var(--color-txt2)" }}>{m.label}</span>
                <span style={{ color: "var(--color-txt)" }}>
                  {m.prefix}{m.current}{m.suffix} / {m.prefix}{m.goal}{m.suffix}
                </span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="h-full rounded-full" style={{ width: `${m.pct}%`, background: m.pct >= 75 ? "#10b981" : m.pct >= 50 ? "#f59e0b" : "#A31645" }} />
              </div>
              <p className="text-[10px] mt-1" style={{ color: "var(--color-txt3)" }}>{m.pct}% del objetivo</p>
            </div>
          ))}
        </div>

        {/* Cobertura LATAM */}
        <div className="p-5 rounded-xl" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <h2 className="font-[family-name:var(--font-display)] text-[13px] font-bold uppercase tracking-[0.06em] mb-4">
            Expansión LATAM
          </h2>
          <div className="flex flex-col gap-3">
            {LATAM.map(l => (
              <div key={l.country} className="flex items-center gap-4">
                <div className="flex items-center gap-2 w-24 shrink-0">
                  <MapPin size={12} color="#A31645" strokeWidth={2} />
                  <span className="text-[13px] font-medium">{l.country}</span>
                </div>
                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full" style={{ width: `${l.score}%`, background: "var(--color-burg3)" }} />
                </div>
                <div className="flex gap-3 text-[11px] shrink-0" style={{ color: "var(--color-txt3)" }}>
                  <span>{l.fans}</span>
                  <span>{l.campaigns} camp.</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] mt-4 pt-4" style={{ color: "var(--color-txt3)", borderTop: "1px solid var(--color-border)" }}>
            Próxima expansión: <strong style={{ color: "var(--color-txt)" }}>Perú y Brasil</strong> — Q4 2026
          </p>
        </div>
      </div>
    </DashboardPageShell>
  );
}
