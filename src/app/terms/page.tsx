import type { Metadata } from "next";

export const metadata: Metadata = { title: "Términos de uso" };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-txt3 mb-4">Legal · Versión demo</p>
      <h1 className="font-condensed text-5xl font-extrabold uppercase leading-none mb-8">Términos de uso</h1>
      <div className="space-y-5 text-[15px] leading-relaxed text-txt2">
        <p>DemandPass es una plataforma de inteligencia de demanda para eventos en vivo. No es una ticketera: la compra de entradas ocurre siempre en la ticketera oficial de cada evento.</p>
        <p>El registro de interés en una campaña no constituye una compra ni garantiza la realización del evento. El Priority Pass es un beneficio condicional de acceso prioritario a preventa, sujeto a la confirmación oficial del show, a las reglas de cada campaña y a la disponibilidad definida por el organizador.</p>
        <p>Las campañas identificadas como Fan Demand son iniciadas por fans y no implican autorización, afiliación ni confirmación por parte del artista, su management o productora alguna.</p>
        <p>DemandPass podrá moderar, suspender o dar de baja campañas o cuentas que incumplan estas reglas o hagan uso indebido de nombres, marcas o imágenes de terceros.</p>
        <p className="pt-6 border-t border-white/10 text-txt3 text-sm">
          Este documento corresponde a la versión de demostración de DemandPass. La plataforma opera con datos
          simulados, no procesa pagos reales y no vende entradas. Las versiones legales definitivas serán
          publicadas antes del lanzamiento comercial.
        </p>
      </div>
    </main>
  );
}
