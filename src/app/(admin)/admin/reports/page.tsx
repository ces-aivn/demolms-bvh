"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { ReportBuilder } from "@/components/admin/report-builder";
import { ReportCharts } from "@/components/admin/report-charts";
import { ReportSummary } from "@/components/admin/report-summary";
import { ExportOptions } from "@/components/admin/export-options";

export default function AdminReportsPage() {
  const [metric, setMetric] = useState("users");
  const [period, setPeriod] = useState("30 ngày qua");

  return (
    <div className="space-y-5">
      <PageHeader
        title="Báo cáo & Thống kê"
        description="Phân tích dữ liệu hệ thống học tập trực tuyến"
        actions={<ExportOptions />}
      />

      <ReportBuilder
        metric={metric}
        onMetricChange={setMetric}
        onPeriodChange={setPeriod}
      />

      <ReportSummary metric={metric} period={period} />

      <ReportCharts metric={metric} />
    </div>
  );
}
