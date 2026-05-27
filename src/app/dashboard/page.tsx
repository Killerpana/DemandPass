// src/app/dashboard/page.tsx — redesigned producer dashboard
import { DashboardSidebar, DashboardSubHeader, DashboardPageHeader } from "@/components/dashboard/DashboardChrome";
import { KPIStrip } from "@/components/dashboard/KPIStrip";
import { CampaignsTable } from "@/components/dashboard/CampaignsTable";
import { DemandPulse } from "@/components/dashboard/DemandPulse";
import { HeatmapPanel } from "@/components/dashboard/HeatmapPanel";
import { PriceCurvePanel } from "@/components/dashboard/PriceCurvePanel";
import { RecentFans } from "@/components/dashboard/RecentFans";

export default function DashboardPage() {
  return (
    <div
      className="flex flex-col md:flex-row"
      style={{ background: "var(--color-bg)", minHeight: "calc(100vh - 64px)" }}
    >
      <DashboardSidebar active="campaigns" />

      <div className="flex-1 min-w-0 flex flex-col">
        <DashboardSubHeader />

        <main className="flex-1 p-4 md:p-7 overflow-x-hidden">
          <DashboardPageHeader
            title="Campañas activas"
            breadcrumbs={[
              { label: "DF Entertainment" },
              { label: "Campañas" },
            ]}
            actions={
              <>
                <button
                  type="button"
                  className="px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.06em] rounded-md"
                  style={{
                    background: "transparent",
                    border: "1px solid var(--color-border2)",
                    color: "var(--color-txt)",
                  }}
                >
                  Exportar CSV
                </button>
                <button
                  type="button"
                  className="px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.06em] rounded-md"
                  style={{
                    background: "var(--color-surface2)",
                    border: "1px solid var(--color-border2)",
                    color: "var(--color-txt)",
                  }}
                >
                  Filtros
                </button>
              </>
            }
          />

          <div className="mb-6">
            <KPIStrip />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-5 mb-5">
            <CampaignsTable />
            <DemandPulse />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-5">
            <HeatmapPanel />
            <PriceCurvePanel />
            <RecentFans />
          </div>
        </main>
      </div>
    </div>
  );
}
