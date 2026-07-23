import type { Metadata } from "next";

export const metadata: Metadata = { title: "Condiciones de reserva" };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-txt3 mb-4">Legal · Versión demo</p>
      <h1 className="font-condensed text-5xl font-extrabold uppercase leading-none mb-8">Condiciones de reserva</h1>
      <div className="space-y-5 text-[15px] leading-relaxed text-txt2">
        <p>La reserva condicional es una expresión de intención de compra respaldada económicamente, disponible únicamente en campañas oficiales que la habiliten.</p>
        <p>El monto de la reserva se calcula como un porcentaje del ticket promedio estimado de la campaña. Si el show se confirma, quien reservó obtiene la máxima prioridad de acceso a la preventa oficial.</p>
        <p>Si el show no se confirma dentro de la ventana de campaña, el monto nominal abonado se devuelve íntegramente. La reserva no genera intereses, actualización monetaria ni rendimiento de ningún tipo.</p>
        <p>La reserva condicional no es una entrada, no garantiza la realización del evento y no es transferible. Los fondos son procesados por proveedores de pago externos regulados; DemandPass no retiene fondos directamente.</p>
        <p className="pt-6 border-t border-white/10 text-txt3 text-sm">
          Este documento corresponde a la versión de demostración de DemandPass. La plataforma opera con datos
          simulados, no procesa pagos reales y no vende entradas. Las versiones legales definitivas serán
          publicadas antes del lanzamiento comercial.
        </p>
      </div>
    </main>
  );
}
