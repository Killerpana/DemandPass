import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacidad" };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-txt3 mb-4">Legal · Versión demo</p>
      <h1 className="font-condensed text-5xl font-extrabold uppercase leading-none mb-8">Política de privacidad</h1>
      <div className="space-y-5 text-[15px] leading-relaxed text-txt2">
        <p>DemandPass no vende datos personales. La información que los fans comparten (ciudad, rango de precio, preferencias) se utiliza de forma agregada para generar inteligencia de demanda.</p>
        <p>Los datos personales se tratan con consentimiento, con fines limitados a la operación de la plataforma, y con derecho de acceso, rectificación y supresión conforme a la legislación aplicable en cada país donde opere la plataforma.</p>
        <p>Las productoras y organizadores acceden únicamente a información agregada y anonimizada según su plan. Nunca reciben la base de datos personal de los fans.</p>
        <p>En esta versión de demostración no se recolectan ni almacenan datos personales: los formularios son ilustrativos y no envían información a ningún servidor.</p>
        <p className="pt-6 border-t border-white/10 text-txt3 text-sm">
          Este documento corresponde a la versión de demostración de DemandPass. La plataforma opera con datos
          simulados, no procesa pagos reales y no vende entradas. Las versiones legales definitivas serán
          publicadas antes del lanzamiento comercial.
        </p>
      </div>
    </main>
  );
}
