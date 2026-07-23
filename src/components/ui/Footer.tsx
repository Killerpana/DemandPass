import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(139,15,53,0.2)] bg-[var(--surface)] px-5 md:px-10 pt-8 md:pt-10 pb-8 mt-auto">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <img
                src="/brand/lockup-horizontal-dark.svg"
                alt="DemandPass"
                style={{ height: 28, width: "auto" }}
              />
            </Link>
            <p className="text-[12px] text-[var(--txt3)] leading-[1.7] mt-2">No vendemos entradas.<br/>Convertimos demanda en datos.</p>
          </div>
          {[
            { title: "Plataforma", links: [
              { label: "Para fans", href: "/fans" },
              { label: "Para artistas", href: "/artistas" },
              { label: "Para productoras", href: "/productoras" },
              { label: "Campañas activas", href: "/fan/campaigns" },
              { label: "Cómo funciona", href: "/#como-funciona" },
            ]},
            { title: "Legal", links: [{ label: "Términos de uso", href: "/terms" }, { label: "Privacidad", href: "/privacy" }, { label: "Condiciones de reserva", href: "/conditions" }] },
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
