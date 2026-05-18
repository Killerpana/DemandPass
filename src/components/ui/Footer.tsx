import Link from "next/link";

function DIcon() {
  return (
    <svg width={24} height={28} viewBox="0 0 85 100" fill="none" aria-hidden="true">
      <path d="M8 8 L8 92 L42 92 C68 92 78 76 78 50 C78 24 68 8 42 8 Z" fill="none" stroke="#8B0F35" strokeWidth="7" strokeLinejoin="round"/>
      <path d="M42 8 L65 8 L78 22" fill="none" stroke="#8B0F35" strokeWidth="7" strokeLinejoin="round"/>
      <rect x="22" y="68" width="8" height="16" rx="1.5" fill="#7A0F2E"/>
      <rect x="34" y="56" width="8" height="28" rx="1.5" fill="#9B1535"/>
      <rect x="46" y="44" width="8" height="40" rx="1.5" fill="#A31645"/>
      <line x1="18" y1="44" x2="60" y2="28" stroke="#08080D" strokeWidth="3.5"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[rgba(139,15,53,0.2)] bg-[var(--surface)] px-10 pt-10 pb-8 mt-auto">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <DIcon />
              <span className="font-[family-name:'Barlow_Condensed',sans-serif] text-[16px] font-black tracking-[1.5px] uppercase italic">
                <span className="text-[#F4F4F5]">DEMAND</span><span className="text-[#A31645]">PASS</span>
              </span>
            </Link>
            <p className="text-[11px] text-[var(--txt3)] font-[family-name:'Barlow_Condensed',sans-serif] tracking-[0.5px] uppercase mb-2">Verified Demand. Live Access.</p>
            <p className="text-[12px] text-[var(--txt3)] leading-[1.7]">No vendemos entradas.</p>
          </div>
          {[
            { title: "Plataforma", links: [{ label: "Campañas activas", href: "/campaigns" }, { label: "Cómo funciona", href: "/#como-funciona" }, { label: "Dashboard B2B", href: "/dashboard" }] },
            { title: "Legal", links: [{ label: "Términos de uso", href: "/terms" }, { label: "Privacidad", href: "/privacy" }, { label: "Condiciones de reserva", href: "/conditions" }] },
            { title: "Contacto", links: [{ label: "hola@demandpass.app", href: "mailto:hola@demandpass.app" }, { label: "partners@demandpass.app", href: "mailto:partners@demandpass.app" }] },
          ].map(({ title, links }) => (
            <div key={title}>
              <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[var(--txt3)] mb-3 font-[family-name:'Barlow_Condensed',sans-serif]">{title}</p>
              {links.map(({ label, href }) => (
                <Link key={label} href={href} className="block text-[13px] text-[var(--txt2)] mb-2 hover:text-[var(--txt)] transition-colors">{label}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-[var(--border)] pt-5 flex items-center justify-between flex-wrap gap-3">
          <p className="text-[12px] text-[var(--txt3)]">© 2026 DemandPass. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1.5 bg-[var(--surface2)] border border-[var(--border)] rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--amber2)] inline-block" />
            <span className="text-[11px] text-[var(--txt3)] font-medium">Demo — datos simulados</span>
          </div>
        </div>
        <p className="text-[11px] text-[var(--txt3)] mt-4 leading-[1.7] border-t border-[var(--border)] pt-4">
          DemandPass no es una ticketera ni vende entradas. Las reservas son condicionales y no garantizan la realización del evento. Si un show no se confirma, el monto nominal abonado es devuelto íntegramente.
        </p>
      </div>
    </footer>
  );
}
