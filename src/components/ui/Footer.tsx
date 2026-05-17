import Link from "next/link";

function DIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 40 40" fill="none">
      <path d="M6 4H18C28 4 34 10 34 20C34 30 28 36 18 36H6V4Z" fill="none" stroke="#8B0F35" strokeWidth="3.5" strokeLinejoin="round"/>
      <rect x="11" y="26" width="3.5" height="6" rx="1" fill="#8B0F35" opacity="0.7"/>
      <rect x="16" y="21" width="3.5" height="11" rx="1" fill="#A31645" opacity="0.9"/>
      <rect x="21" y="16" width="3.5" height="16" rx="1" fill="#A31645"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ borderTop:"1px solid rgba(139,15,53,0.2)", background:"var(--surface)", padding:"40px 24px 32px", marginTop:"auto" }}>
      <div className="wrap">
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))", gap:32, marginBottom:40 }}>
          <div>
            <Link href="/" style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
              <DIcon />
              <span style={{ fontFamily:"'Barlow Condensed', sans-serif", fontSize:15, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase" }}>
                <span style={{ color:"#F4F4F5" }}>DEMAND</span><span style={{ color:"#A31645" }}>PASS</span>
              </span>
            </Link>
            <p style={{ fontSize:11, color:"var(--txt3)", lineHeight:1.7, maxWidth:200, fontFamily:"'Barlow Condensed', sans-serif", letterSpacing:"0.5px", textTransform:"uppercase" }}>
              VERIFIED DEMAND. LIVE ACCESS.
            </p>
            <p style={{ fontSize:12, color:"var(--txt3)", lineHeight:1.7, maxWidth:200, marginTop:8 }}>
              No vendemos entradas.
            </p>
          </div>
          <div>
            <p style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"1.5px", color:"var(--txt3)", marginBottom:12, fontFamily:"'Barlow Condensed', sans-serif" }}>Plataforma</p>
            {[{label:"Campañas activas",href:"/campaigns"},{label:"Cómo funciona",href:"/#como-funciona"},{label:"Dashboard B2B",href:"/dashboard"}].map(({label,href})=>(
              <Link key={label} href={href} style={{ display:"block", fontSize:13, color:"var(--txt2)", marginBottom:8 }}>{label}</Link>
            ))}
          </div>
          <div>
            <p style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"1.5px", color:"var(--txt3)", marginBottom:12, fontFamily:"'Barlow Condensed', sans-serif" }}>Legal</p>
            {[{label:"Términos de uso",href:"/terms"},{label:"Política de privacidad",href:"/privacy"},{label:"Condiciones de reserva",href:"/conditions"}].map(({label,href})=>(
              <Link key={label} href={href} style={{ display:"block", fontSize:13, color:"var(--txt2)", marginBottom:8 }}>{label}</Link>
            ))}
          </div>
          <div>
            <p style={{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"1.5px", color:"var(--txt3)", marginBottom:12, fontFamily:"'Barlow Condensed', sans-serif" }}>Contacto</p>
            <p style={{ fontSize:13, color:"var(--txt2)", marginBottom:6 }}>hola@demandpass.app</p>
            <p style={{ fontSize:13, color:"var(--txt2)", marginBottom:6 }}>Partners:</p>
            <p style={{ fontSize:13, color:"var(--burg3)" }}>partners@demandpass.app</p>
          </div>
        </div>
        <div style={{ borderTop:"1px solid var(--border)", paddingTop:20, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <p style={{ fontSize:12, color:"var(--txt3)" }}>© 2025 DemandPass. Todos los derechos reservados.</p>
          <div style={{ display:"flex", alignItems:"center", gap:6, background:"var(--surface2)", border:"1px solid var(--border)", borderRadius:20, padding:"4px 12px" }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--amber2)", display:"inline-block" }} />
            <span style={{ fontSize:11, color:"var(--txt3)", fontWeight:500 }}>Demo — datos simulados</span>
          </div>
        </div>
        <p style={{ fontSize:11, color:"var(--txt3)", marginTop:16, lineHeight:1.7, borderTop:"1px solid var(--border)", paddingTop:16 }}>
          DemandPass no es una ticketera ni vende entradas. Las reservas son condicionales y no garantizan la realización del evento. Si un show no se confirma, el monto nominal abonado es devuelto íntegramente.
        </p>
      </div>
    </footer>
  );
}
