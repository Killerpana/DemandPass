import { DashboardPageShell } from "@/components/dashboard/DashboardPageShell";
import { CheckCircle2, Clock, XCircle } from "lucide-react";

const INTEGRATIONS = [
  { name: "Ticketek",         type: "Ticketera",    status: "connected",  desc: "Export de lista blanca + tracking de conversión" },
  { name: "AllAccess",        type: "Ticketera",    status: "connected",  desc: "Integración API · tokens firmados" },
  { name: "Tu Entrada",       type: "Ticketera",    status: "pending",    desc: "En configuración — estimado: 2 semanas" },
  { name: "Salesforce CRM",   type: "CRM",          status: "connected",  desc: "Sync de leads verificados" },
  { name: "Mailchimp",        type: "Email",        status: "connected",  desc: "Listas segmentadas por nivel de fan" },
  { name: "Spotify for Artists", type: "Streaming", status: "pending",    desc: "Correlación demand vs streams · en beta" },
  { name: "Google Analytics", type: "Analytics",    status: "connected",  desc: "Tracking de conversión post-token" },
  { name: "Meta Ads",         type: "Marketing",    status: "unavailable", desc: "Disponible en Plan Enterprise" },
];

const statusConfig = {
  connected:   { Icon: CheckCircle2, color: "#10b981", label: "Conectado"     },
  pending:     { Icon: Clock,        color: "#f59e0b", label: "En proceso"    },
  unavailable: { Icon: XCircle,      color: "#6b7280", label: "No disponible" },
};

export default function IntegracionesPage() {
  return (
    <DashboardPageShell title="Integraciones" breadcrumb="Integraciones" active="integraciones">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {INTEGRATIONS.map(int => {
          const { Icon, color, label } = statusConfig[int.status as keyof typeof statusConfig];
          return (
            <div key={int.name} className="p-5 rounded-xl flex items-start gap-4"
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", opacity: int.status === "unavailable" ? 0.6 : 1 }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--color-border2)" }}>
                <span className="font-[family-name:var(--font-display)] text-[11px] font-black" style={{ color: "var(--color-txt2)" }}>
                  {int.name.slice(0,2).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="font-semibold text-[13px]">{int.name}</p>
                  <span className="text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-[0.06em]"
                    style={{ background: "rgba(255,255,255,0.07)", color: "var(--color-txt3)" }}>{int.type}</span>
                </div>
                <p className="text-[12px]" style={{ color: "var(--color-txt3)" }}>{int.desc}</p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Icon size={14} color={color} strokeWidth={2} />
                <span className="text-[11px] font-semibold" style={{ color }}>{label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardPageShell>
  );
}
