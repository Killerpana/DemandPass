"use client";
import { DashboardSidebar, DashboardSubHeader, DashboardPageHeader } from "@/components/dashboard/DashboardChrome";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  breadcrumb: string;
  active: string;
  children: React.ReactNode;
};

export function DashboardPageShell({ title, breadcrumb, active, children }: Props) {
  const path = usePathname();
  return (
    <div className="flex" style={{ background: "var(--color-bg)", minHeight: "calc(100vh - 64px)" }}>
      <DashboardSidebar active={active} />
      <div className="flex-1 min-w-0 flex flex-col">
        <DashboardSubHeader />
        <main className="flex-1 p-4 md:p-7 overflow-x-hidden">
        <div key={path} className="animate-fadein">
          <DashboardPageHeader
            title={title}
            breadcrumbs={[{ label: "DF Entertainment" }, { label: breadcrumb }]}
          />
          {children}
        </div>
        </main>
      </div>
    </div>
  );
}
