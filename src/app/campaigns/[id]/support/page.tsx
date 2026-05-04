import Link from "next/link";
import { notFound } from "next/navigation";
import { campaigns } from "@/lib/data";
import { SupportWizard } from "@/components/ui/SupportWizard";

export default function SupportPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const c = campaigns[id];
  if (!c) notFound();

  return (
    <div style={{ padding: "24px 0 60px" }}>
      <div className="wrap" style={{ maxWidth: 680 }}>
        <Link
          href={`/campaigns/${id}`}
          className="btn btn-ghost btn-sm"
          style={{ marginBottom: 20, display: "inline-flex" }}
        >
          ← Volver a campaña
        </Link>

        {/* Campaign context bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "var(--surface2)",
            border: "1px solid var(--border)",
            borderRadius: "var(--r12)",
            padding: "12px 16px",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: `${c.color}22`,
              border: `1px solid ${c.color}44`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 800,
              color: c.color,
              flexShrink: 0,
            }}
          >
            {c.img}
          </div>
          <div>
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--txt)" }}>
              {c.artist}
            </span>
            <span style={{ fontSize: 13, color: "var(--txt3)", marginLeft: 8 }}>
              {c.city} · {c.price}
            </span>
          </div>
          <span
            className={`badge ${c.type === "official" ? "badge-violet" : "badge-blue"}`}
            style={{ marginLeft: "auto" }}
          >
            {c.type === "official" ? "Oficial" : "Fan demand"}
          </span>
        </div>

        <SupportWizard campaignId={id} />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return campaigns.map((c) => ({ id: String(c.id) }));
}
