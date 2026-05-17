import Link from "next/link";
import { notFound } from "next/navigation";
import { campaigns } from "@/lib/data";
import { CopyTokenButton, QRPlaceholder } from "@/components/ui/TokenActions";

// Early supporter = apoyó cuando el progreso era < 30%
function isEarlySupporter(campaignId: number): boolean {
  const c = campaigns[campaignId];
  if (!c) return false;
  return (c.current / c.goal) < 0.3;
}

export default async function TokenPage({
  params, searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ token?:string; level?:string; city?:string; price?:string; ticket?:string; benefits?:string; num?:string }>;
}) {
  const { id: idStr } = await params;
  const id = Number(idStr);
  const c = campaigns[id];
  if (!c) notFound();

  const sp = await searchParams;
  const token = sp.token || "DP-XX-BA-0000";
  const level = sp.level || "Bronce";
  const city = sp.city || "—";
  const price = sp.price || "—";
  const ticket = sp.ticket || "—";
  const benefits = sp.benefits ? sp.benefits.split(",").filter(Boolean) : [];
  const num = sp.num || "0000";

  const levelColors: Record<string,string> = { Bronce:"#d97706", Plata:"#94a3b8", Oro:"#f59e0b" };
  const levelColor = levelColors[level] || "var(--violet2)";

  const ventanaMap: Record<string,string> = {
    Bronce: c.type==="official" ? "Preventa estándar" : "Info anticipada",
    Plata:  c.type==="official" ? "Preventa 24 hs antes" : "Info anticipada + posición prioritaria",
    Oro:    c.type==="official" ? "Preventa 48 hs antes" : "Info anticipada + primera posición",
  };
  const ventana = ventanaMap[level] || "A confirmar";
  const earlySupporter = isEarlySupporter(id);

  return (
    <div style={{ minHeight:"calc(100vh - 56px)", display:"flex", alignItems:"center", justifyContent:"center", padding:24, background:"radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%)" }}>
      <style>{`
        @keyframes tokenCardIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmerIn {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        @keyframes holoBorder {
          0%,100% { background-position: 0% 50%; }
          50%     { background-position: 100% 50%; }
        }
        .token-card-animate {
          animation: tokenCardIn 0.4s ease-out both;
        }
        .token-holo-border {
          background: linear-gradient(90deg, #8B0F35, #A31645, #C4264E, #8B0F35);
          background-size: 300% 300%;
          animation: holoBorder 8s ease infinite;
          padding: 1.5px;
          border-radius: 14px;
        }
        .token-holo-inner {
          background: var(--surface2);
          border-radius: 12px;
          padding: 20px;
        }
      `}</style>

      <div className="token-card-animate" style={{ background:"var(--surface)", border:"1px solid var(--border2)", borderRadius:"var(--r24)", padding:32, maxWidth:520, width:"100%", position:"relative", overflow:"hidden" }}>
        {/* Shimmer sweep on load */}
        <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg, var(--violet), var(--blue), var(--violet))", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:0, left:0, width:"30%", height:"100%", background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)", animation:"shimmerIn 1s ease 0.4s both" }} />
        </div>

        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
          <span className="badge badge-emerald"><span className="dot-pulse" />Registrado con éxito</span>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <svg width={20} height={20} viewBox="0 0 40 40" fill="none">
              <path d="M6 4H18C28 4 34 10 34 20C34 30 28 36 18 36H6V4Z" fill="none" stroke="#8B0F35" strokeWidth="3.5" strokeLinejoin="round"/>
              <rect x="11" y="26" width="3.5" height="6" rx="1" fill="#8B0F35" opacity="0.7"/>
              <rect x="16" y="21" width="3.5" height="11" rx="1" fill="#A31645" opacity="0.9"/>
              <rect x="21" y="16" width="3.5" height="16" rx="1" fill="#A31645"/>
            </svg>
            <span style={{ fontSize:12, color:"var(--txt3)" }}>{c.artist} · {c.city}</span>
          </div>
        </div>

        <h1 style={{ fontSize:22, fontWeight:800, letterSpacing:"-0.5px", color:"var(--txt)", marginBottom:4 }}>
          Tu DemandPass está listo
        </h1>

        {earlySupporter && (
          <div style={{ background:"rgba(245,158,11,0.1)", border:"1.5px solid var(--gold)", borderRadius:"var(--r12)", padding:"10px 14px", marginBottom:12, display:"flex", alignItems:"center", gap:8 }}>
            <span style={{ fontSize:16 }}>🏆</span>
            <div>
              <div style={{ fontSize:13, fontWeight:700, color:"var(--amber2)" }}>Early Supporter</div>
              <div style={{ fontSize:12, color:"var(--txt3)" }}>Apoyaste cuando el objetivo estaba por debajo del 30%</div>
            </div>
          </div>
        )}
        <p style={{ fontSize:13, color:"var(--txt2)", marginBottom:20, lineHeight:1.6 }}>
          Guardá este código. Si el show se confirma, es tu acceso prioritario a la preventa oficial.
        </p>

        {/* Token box with holo border + QR */}
        <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:20 }}>
          <div className="token-holo-border" style={{ flex:1 }}>
            <div className="token-holo-inner" style={{ textAlign:"center" }}>
              <div style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:2, color:"var(--txt3)", marginBottom:10 }}>
                Claim Token — Demo
              </div>
              <div style={{ fontFamily:"'JetBrains Mono', monospace", fontSize:20, fontWeight:500, color:"var(--txt)", letterSpacing:3, wordBreak:"break-all" }}>
                {token}
              </div>
              <CopyTokenButton token={token} />
            </div>
          </div>
          <QRPlaceholder />
        </div>

        {/* Detail grid */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:16 }}>
          {([
            ["Campaña", c.artist],
            ["Ciudad", city],
            ["Nivel", <span key="l" style={{ color:levelColor, fontWeight:700 }}>{level}</span>],
            ["Estado", <span key="s" style={{ color:"var(--amber2)" }}>Pendiente de confirmación</span>],
            ["Posición", <span key="p" style={{ color:"var(--violet2)", fontWeight:700 }}>#{num} en lista</span>],
            ["Ventana", ventana],
          ] as [string, React.ReactNode][]).map(([k,v])=>(
            <div key={String(k)} style={{ background:"var(--surface2)", borderRadius:"var(--r8)", padding:12, border:"1px solid var(--border)" }}>
              <div style={{ fontSize:11, color:"var(--txt3)", marginBottom:3 }}>{k}</div>
              <div style={{ fontSize:13, fontWeight:600, color:"var(--txt)" }}>{v}</div>
            </div>
          ))}
        </div>

        {[price, ticket, ...benefits].filter(x=>x&&x!=="—").length>0 && (
          <div style={{ marginBottom:16 }}>
            <div style={{ fontSize:12, color:"var(--txt3)", marginBottom:8 }}>Preferencias registradas</div>
            <div>{[price, ticket, ...benefits].filter(x=>x&&x!=="—").map(item=>(
              <span key={item} className="tag tag-active">{item}</span>
            ))}</div>
          </div>
        )}

        {/* Legal */}
        <div style={{ background:"rgba(217,119,6,0.07)", border:"1px solid rgba(217,119,6,0.2)", borderRadius:"var(--r12)", padding:16, marginBottom:20 }}>
          <div style={{ fontSize:12, fontWeight:700, color:"var(--amber2)", marginBottom:8, textTransform:"uppercase", letterSpacing:"0.5px" }}>
            Importante — leé antes de guardar
          </div>
          <ul style={{ fontSize:12, color:"var(--txt2)", lineHeight:1.8, paddingLeft:16, margin:0 }}>
            <li>Este token <strong style={{ color:"var(--txt)" }}>no es una entrada</strong> ni garantiza el acceso al show.</li>
            <li>El evento <strong style={{ color:"var(--txt)" }}>no está confirmado</strong>. Esta es una reserva condicional de demo.</li>
            <li>Si el show no se confirma, el monto nominal se devuelve íntegro.</li>
            <li>La compra real del ticket ocurre en la <strong style={{ color:"var(--txt)" }}>ticketera oficial</strong>, no en DemandPass.</li>
          </ul>
        </div>

        <Link href="/campaigns" className="btn btn-violet btn-full">
          Explorar más campañas →
        </Link>
      </div>
    </div>
  );
}
