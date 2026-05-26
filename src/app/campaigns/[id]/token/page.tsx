// src/app/campaigns/[id]/token/page.tsx — v3.1 fix
// Resolve campaign from the full list (original + extras) instead of the
// 3-element array — otherwise supporting campaigns with id 100+ ended in a
// 404 on the success page.
import Link from "next/link";
import { notFound } from "next/navigation";
import { campaigns } from "@/lib/data";
import { extraCampaigns } from "@/lib/marketing-data";
import { CopyTokenButton, QRPlaceholder } from "@/components/ui/TokenActions";

const allCampaigns = [...campaigns, ...extraCampaigns];

function isEarlySupporter(c: { current: number; goal: number }): boolean {
  return c.current / c.goal < 0.3;
}

export default async function TokenPage({
  params, searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    token?: string; level?: string; city?: string; price?: string;
    ticket?: string; benefits?: string; num?: string;
  }>;
}) {
  const { id: idStr } = await params;
  const id = Number(idStr);
  const c = allCampaigns.find((x) => x.id === id) ?? null;
  if (!c) notFound();

  const sp = await searchParams;
  const token = sp.token || "DP-XX-BA-0000";
  const level = sp.level || "Bronce";
  const city = sp.city || "—";
  const price = sp.price || "—";
  const ticket = sp.ticket || "—";
  const benefits = sp.benefits ? sp.benefits.split(",").filter(Boolean) : [];
  const num = sp.num || "0000";

  const levelColors: Record<string, string> = {
    Bronce: "#d97706",
    Plata: "#94a3b8",
    Oro: "#f59e0b",
  };
  const levelColor = levelColors[level] || "var(--color-burg3)";

  const ventanaMap: Record<string, string> = {
    Bronce: c.type === "official" ? "Preventa estándar" : "Info anticipada",
    Plata: c.type === "official" ? "Preventa 24 hs antes" : "Info anticipada + posición prioritaria",
    Oro: c.type === "official" ? "Preventa 48 hs antes" : "Info anticipada + primera posición",
  };
  const ventana = ventanaMap[level] || "A confirmar";
  const earlySupporter = isEarlySupporter(c);

  return (
    <div
      className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-10"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(196,38,78,0.08) 0%, transparent 70%)",
      }}
    >
      <style>{`
        @keyframes tokenCardIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes shimmerIn { 0% { transform: translateX(-100%); } 100% { transform: translateX(400%); } }
        @keyframes holoBorder { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
      `}</style>

      <div
        className="rounded-2xl p-8 max-w-[520px] w-full relative overflow-hidden"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border2)",
          animation: "tokenCardIn 0.4s ease-out both",
        }}
      >
        {/* Shimmer sweep */}
        <div
          className="absolute inset-x-0 top-0 h-0.5 overflow-hidden"
          style={{
            background: "linear-gradient(90deg, var(--color-burg), var(--color-burg2), var(--color-burg3))",
          }}
        >
          <div
            className="absolute top-0 left-0 w-[30%] h-full"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
              animation: "shimmerIn 1s ease 0.4s both",
            }}
          />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[1.5px]"
            style={{
              background: "rgba(16,185,129,0.12)",
              color: "var(--color-emerald2)",
              fontFamily: "var(--font-condensed)",
            }}
          >
            <span className="dot-pulse" style={{ background: "var(--color-emerald2)" }} />
            Registrado con éxito
          </span>
          <div
            className="w-9 h-9 rounded-md flex items-center justify-center text-[12px] font-extrabold"
            style={{
              background: `linear-gradient(135deg, ${c.color}30, ${c.color}90)`,
              border: "1px solid var(--color-border2)",
              color: "#fff",
              fontFamily: "var(--font-display)",
              letterSpacing: "1px",
            }}
          >
            {c.img}
          </div>
        </div>

        <h1
          className="uppercase mb-2"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 28, lineHeight: 1, letterSpacing: "0.005em",
          }}
        >
          Tu Priority Pass está listo
        </h1>
        <p className="text-[12px] text-[var(--color-txt3)] mb-4">
          {c.artist} · {c.city}
        </p>

        {earlySupporter && (
          <div
            className="rounded-md px-3.5 py-2.5 mb-3 flex items-center gap-2"
            style={{
              background: "rgba(245,158,11,0.10)",
              border: "1.5px solid var(--color-amber2)",
            }}
          >
            <span className="text-[16px]" aria-hidden>🏆</span>
            <div>
              <div className="text-[13px] font-bold" style={{ color: "var(--color-amber2)" }}>
                Early Supporter
              </div>
              <div className="text-[11px] text-[var(--color-txt3)]">
                Apoyaste cuando el objetivo estaba por debajo del 30%
              </div>
            </div>
          </div>
        )}
        <p className="text-[13px] text-[var(--color-txt2)] mb-5 leading-[1.6]">
          Guardá este código. Si el show se confirma, es tu acceso prioritario a la preventa oficial.
        </p>

        {/* Token + QR */}
        <div className="flex items-center gap-4 mb-5">
          <div
            className="flex-1 rounded-[14px] p-[1.5px]"
            style={{
              background: "linear-gradient(90deg, var(--color-burg), var(--color-burg2), var(--color-burg3), var(--color-burg))",
              backgroundSize: "300% 300%",
              animation: "holoBorder 8s ease infinite",
            }}
          >
            <div
              className="rounded-[12px] p-5 text-center"
              style={{ background: "var(--color-surface2)" }}
            >
              <div
                className="text-[11px] uppercase tracking-[2px] font-bold text-[var(--color-txt3)] mb-2.5"
                style={{ fontFamily: "var(--font-condensed)" }}
              >
                Priority Pass — Demo
              </div>
              <div
                className="text-[20px] font-medium tracking-[3px] break-all"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {token}
              </div>
              <CopyTokenButton token={token} />
            </div>
          </div>
          <QRPlaceholder />
        </div>

        {/* Detail grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          {([
            ["Campaña", c.artist],
            ["Ciudad", city],
            ["Nivel", <span key="l" style={{ color: levelColor, fontWeight: 700 }}>{level}</span>],
            ["Estado", <span key="s" style={{ color: "var(--color-amber2)" }}>Pendiente de confirmación</span>],
            ["Posición", <span key="p" style={{ color: "var(--color-burg3)", fontWeight: 700 }}>#{num} en lista</span>],
            ["Ventana", ventana],
          ] as [string, React.ReactNode][]).map(([k, v]) => (
            <div
              key={String(k)}
              className="rounded-md p-3"
              style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)" }}
            >
              <div className="text-[11px] text-[var(--color-txt3)] mb-0.5">{k}</div>
              <div className="text-[13px] font-semibold">{v}</div>
            </div>
          ))}
        </div>

        {[price, ticket, ...benefits].filter((x) => x && x !== "—").length > 0 && (
          <div className="mb-4">
            <div className="text-[12px] text-[var(--color-txt3)] mb-2">Preferencias registradas</div>
            <div className="flex flex-wrap gap-1.5">
              {[price, ticket, ...benefits]
                .filter((x) => x && x !== "—")
                .map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold"
                    style={{
                      background: "rgba(196,38,78,0.12)",
                      color: "#E43A66",
                      border: "1px solid rgba(196,38,78,0.3)",
                    }}
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        )}

        {/* Legal */}
        <div
          className="rounded-md p-4 mb-5"
          style={{
            background: "rgba(245,158,11,0.07)",
            border: "1px solid rgba(245,158,11,0.22)",
          }}
        >
          <div
            className="text-[12px] uppercase tracking-[0.06em] font-bold mb-2"
            style={{ color: "var(--color-amber2)" }}
          >
            Importante — leé antes de guardar
          </div>
          <ul className="list-none pl-0 m-0 flex flex-col gap-1.5 text-[12px] text-[var(--color-txt2)] leading-[1.7]">
            <li>· Este Priority Pass <strong className="text-[var(--color-txt)]">no es una entrada</strong>. Otorga prioridad de acceso si el show se confirma.</li>
            <li>· El evento <strong className="text-[var(--color-txt)]">no está confirmado</strong>. Esta es una reserva condicional de demo.</li>
            <li>· Si el show no se confirma, el monto nominal se devuelve íntegro.</li>
            <li>· La compra real ocurre en la <strong className="text-[var(--color-txt)]">ticketera oficial</strong>, no en DemandPass.</li>
          </ul>
        </div>

        <Link
          href="/campaigns"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-md text-[14px] font-bold uppercase tracking-[0.06em] text-white"
          style={{
            background: "var(--color-burg3)",
            boxShadow: "0 6px 18px rgba(196,38,78,0.32), inset 0 1px 0 rgba(255,255,255,0.18)",
          }}
        >
          Explorar más campañas <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
