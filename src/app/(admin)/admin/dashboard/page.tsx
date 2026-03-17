import { PageHeader } from "@/components/shared/page-header";
import { PlatformKpis } from "@/components/admin/platform-kpis";
import { UserGrowthChart } from "@/components/admin/user-growth-chart";
import { CompletionChart } from "@/components/admin/completion-chart";
import { DomainDistribution } from "@/components/admin/domain-distribution";
import { SystemHealth } from "@/components/admin/system-health";
import { adminStats } from "@/lib/mock-data";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Tổng quan Quản trị"
        description="Hệ thống Học tập Trực tuyến BVHTTDL — cập nhật hôm nay"
      />

      <PlatformKpis stats={adminStats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserGrowthChart monthlyUsers={adminStats.monthlyUsers} />
        <CompletionChart monthlyCompletions={adminStats.monthlyCompletions} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DomainDistribution data={adminStats.domainDistribution} />
        <SystemHealth />
      </div>
    </div>

  );
}
