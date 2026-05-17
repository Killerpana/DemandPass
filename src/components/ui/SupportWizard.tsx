"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { campaigns, levels, wizardSteps } from "@/lib/data";

interface WizardData {
  city: string | null;
  price: string | null;
  ticket: string | null;
  benefits: string[];
  level: string | null;
}

export function SupportWizard({ campaignId }: { campaignId: number }) {
  const router = useRouter();
  const campaign = campaigns[campaignId];
  const [step, setStep] = useState(0);
  const [data, setData] = useState<WizardData>({
    city: null,
    price: null,
    ticket: null,
    benefits: [],
    level: null,
  });

  const cfg = wizardSteps[step];
  const total = wizardSteps.length;

  function selectSingle(key: keyof WizardData, val: string) {
    setData((d) => ({ ...d, [key]: val }));
  }

  function toggleBenefit(b: string) {
    setData((d) => ({
      ...d,
      benefits: d.benefits.includes(b)
        ? d.benefits.filter((x) => x !== b)
        : [...d.benefits, b],
    }));
  }

  function canAdvance(): boolean {
    const cfg = wizardSteps[step];
    if (cfg.type === "single" && "key" in cfg) return data[cfg.key as keyof WizardData] !== null;
    if (cfg.type === "level") return data.level !== null;
    return true;
  }

  function next() {
    if (!canAdvance()) return;
    if (step === total - 1) {
      const num = String(Math.floor(Math.random() * 8900 + 100)).padStart(4, "0");
      const city = (data.city || "BA").slice(0, 2).toUpperCase();
      const token = `DP-${campaign.img}-${city}-${num}`;
      const params = new URLSearchParams({
        token,
        level: data.level || "Bronce",
        city: data.city || "",
        price: data.price || "",
        ticket: data.ticket || "",
        benefits: data.benefits.join(","),
        num,
      });
      router.push(`/campaigns/${campaignId}/token?${params.toString()}`);
      return;
    }
    setStep((s) => s + 1);
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  return (
    <div>
      {/* Step indicator */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 28,
          gap: 0,
        }}
      >
        {wizardSteps.map((_, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flex: i < total - 1 ? 1 : undefined }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 700,
                flexShrink: 0,
                transition: "all .3s",
                background:
                  i < step
                    ? "var(--violet)"
                    : i === step
                    ? "linear-gradient(135deg, var(--violet), var(--blue))"
                    : "var(--surface3)",
                color: i <= step ? "#fff" : "var(--txt3)",
                boxShadow: i === step ? "0 0 0 3px rgba(124,58,237,0.2)" : "none",
              }}
            >
              {i < step ? "✓" : i + 1}
            </div>
            {i < total - 1 && (
              <div
                style={{
                  flex: 1,
                  height: 2,
                  background: i < step ? "var(--violet)" : "var(--surface3)",
                  transition: "background .3s",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Title */}
      <div style={{ marginBottom: 24 }}>
        <h2
          style={{
            fontSize: 21,
            fontWeight: 800,
            letterSpacing: "-0.3px",
            color: "var(--txt)",
            marginBottom: 6,
          }}
        >
          {cfg.title}
        </h2>
        <p style={{ fontSize: 14, color: "var(--txt2)" }}>{cfg.sub}</p>
      </div>

      {/* Step body */}
      <div key={step} className="step-content" style={{ marginBottom: 8 }}>
        {cfg.type === "single" && "options" in cfg && (
          <div>
            {cfg.options!.map((opt) => (
              <button
                key={opt}
                onClick={() => selectSingle(cfg.key as keyof WizardData, opt)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background:
                    data[cfg.key as keyof WizardData] === opt
                      ? "rgba(124,58,237,0.1)"
                      : "var(--surface2)",
                  border: `1.5px solid ${
                    data[cfg.key as keyof WizardData] === opt
                      ? "var(--violet2)"
                      : "var(--border)"
                  }`,
                  color:
                    data[cfg.key as keyof WizardData] === opt
                      ? "var(--violet3)"
                      : "var(--txt)",
                  padding: "13px 16px",
                  borderRadius: "var(--r12)",
                  cursor: "pointer",
                  fontSize: 14,
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 500,
                  transition: "all .15s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <span>{opt}</span>
                <span
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border: `2px solid ${
                      data[cfg.key as keyof WizardData] === opt
                        ? "var(--violet)"
                        : "var(--border3)"
                    }`,
                    background:
                      data[cfg.key as keyof WizardData] === opt
                        ? "var(--violet)"
                        : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {data[cfg.key as keyof WizardData] === opt ? "✓" : ""}
                </span>
              </button>
            ))}
          </div>
        )}

        {cfg.type === "multi" && "options" in cfg && (
          <div>
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}
            >
              {cfg.options!.map((opt) => (
                <button
                  key={opt}
                  onClick={() => toggleBenefit(opt)}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "var(--r12)",
                    border: `1.5px solid ${
                      data.benefits.includes(opt) ? "var(--blue2)" : "var(--border)"
                    }`,
                    background: data.benefits.includes(opt)
                      ? "rgba(37,99,235,0.12)"
                      : "var(--surface2)",
                    color: data.benefits.includes(opt) ? "var(--blue3)" : "var(--txt2)",
                    fontSize: 14,
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all .15s",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {data.benefits.includes(opt) && (
                    <span style={{ fontSize: 11 }}>✓</span>
                  )}
                  {opt}
                </button>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "var(--txt3)" }}>
              Podés seleccionar más de uno · {data.benefits.length} seleccionado
              {data.benefits.length !== 1 ? "s" : ""}
            </p>
          </div>
        )}

        {cfg.type === "level" && (
          <div className="grid-3">
            {levels.map((lvl) => (
              <div
                key={lvl.name}
                onClick={() => setData((d) => ({ ...d, level: lvl.name }))}
                style={{
                  background: data.level === lvl.name ? "rgba(124,58,237,0.08)" : "var(--surface2)",
                  border: `1.5px solid ${
                    data.level === lvl.name ? "var(--violet2)" : "var(--border)"
                  }`,
                  borderTop: `3px solid ${lvl.color}`,
                  borderRadius: "var(--r16)",
                  padding: "20px 16px",
                  cursor: "pointer",
                  transition: "all .2s",
                  position: "relative",
                }}
              >
                {lvl.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background:
                        "linear-gradient(90deg, var(--violet), var(--blue))",
                      color: "#fff",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "3px 12px",
                      borderRadius: 20,
                      whiteSpace: "nowrap",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Más elegido
                  </div>
                )}
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 800,
                    color: lvl.color,
                    marginBottom: 3,
                  }}
                >
                  {lvl.name}
                </div>
                <div
                  style={{ fontSize: 12, color: "var(--txt3)", marginBottom: 14 }}
                >
                  {lvl.desc}
                </div>
                {lvl.perks.map((p) => (
                  <div
                    key={p}
                    style={{
                      fontSize: 12,
                      color: "var(--txt2)",
                      padding: "5px 0",
                      borderBottom: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: lvl.color,
                        flexShrink: 0,
                      }}
                    />
                    {p}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {cfg.type === "confirm" && (
          <div className="card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: `${campaign.color}22`,
                  border: `1px solid ${campaign.color}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 800,
                  color: campaign.color,
                }}
              >
                {campaign.img}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "var(--txt)" }}>
                  {campaign.artist}
                </div>
                <div style={{ fontSize: 12, color: "var(--txt3)" }}>
                  {campaign.event} · {campaign.city}
                </div>
              </div>
            </div>

            <div className="divider" />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                margin: "16px 0",
              }}
            >
              {[
                ["Ciudad preferida", data.city || "—"],
                ["Rango de precio", data.price || "—"],
                ["Tipo de entrada", data.ticket || "—"],
                ["Nivel elegido", data.level || "—"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    background: "var(--surface2)",
                    borderRadius: "var(--r8)",
                    padding: 12,
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{ fontSize: 11, color: "var(--txt3)", marginBottom: 3 }}
                  >
                    {k}
                  </div>
                  <div
                    style={{ fontSize: 14, fontWeight: 700, color: "var(--txt)" }}
                  >
                    {v}
                  </div>
                </div>
              ))}
            </div>

            {data.benefits.length > 0 && (
              <div style={{ marginBottom: 14 }}>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--txt3)",
                    marginBottom: 8,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Beneficios seleccionados
                </div>
                <div>
                  {data.benefits.map((b) => (
                    <span key={b} className="tag tag-active">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div
              style={{
                background: "var(--surface2)",
                borderRadius: "var(--r12)",
                padding: 14,
                fontSize: 13,
                color: "var(--txt2)",
                lineHeight: 1.7,
                border: "1px solid var(--border)",
              }}
            >
              Estás apoyando esta campaña con una reserva condicional simulada. Si el show se
              confirma, recibís acceso prioritario a la compra oficial en la ticketera. Si no se
              confirma, el monto nominal es devuelto íntegramente.
            </div>
          </div>
        )}
      </div>

      {/* Nav footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 24,
          paddingTop: 20,
          borderTop: "1px solid var(--border)",
        }}
      >
        {step > 0 ? (
          <button onClick={back} className="btn btn-ghost">
            ← Atrás
          </button>
        ) : (
          <div />
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {!canAdvance() && step < total - 1 && (
            <span style={{ fontSize: 12, color: "var(--txt3)" }}>
              Elegí una opción para continuar
            </span>
          )}
          {canAdvance() && (
            <span style={{ fontSize: 13, color: "var(--txt3)" }}>
              Paso {step + 1} de {total}
            </span>
          )}
          <button
            onClick={next}
            disabled={!canAdvance()}
            className={`btn ${step === total - 1 ? "btn-success btn-pulse" : "btn-violet"}`}
            style={{
              opacity: canAdvance() ? 1 : 0.4,
              cursor: canAdvance() ? "pointer" : "not-allowed",
            }}
          >
            {step === total - 1 ? "Confirmar apoyo ✓" : "Siguiente →"}
          </button>
        </div>
      </div>
    </div>
  );
}
