"use client";

import { useState } from "react";
import { BarChart2, LineChart as LineChartIcon, PieChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart } from "@/components/charts/bar-chart";
import { LineChart } from "@/components/charts/line-chart";
import { DonutChart } from "@/components/charts/donut-chart";

const MONTHS = ["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12"];

const CHART_DATA: Record<string, { label: string; value: number }[]> = {
  users: MONTHS.map((label, i) => ({ label, value: [85,92,110,125,138,156,170,185,198,210,230,250][i] })),
  courses: MONTHS.map((label, i) => ({ label, value: [1,0,2,1,1,2,1,1,0,2,1,1][i] })),
  completions: MONTHS.map((label, i) => ({ label, value: [42,55,48,62,70,75,68,82,90,78,95,91][i] })),
  revenue: MONTHS.map((label, i) => ({ label, value: [8,9,11,12,13,15,17,18,19,21,23,25][i] })),
};

const DONUT_DATA: Record<string, { label: string; value: number; color: string }[]> = {
  users: [
    { label: "Học viên", value: 38, color: "#1A237E" },
    { label: "Giảng viên", value: 6, color: "#7B1FA2" },
    { label: "Quản trị", value: 2, color: "#B71C1C" },
    { label: "Không hoạt động", value: 4, color: "#9E9E9E" },
  ],
  courses: [
    { label: "Văn hóa", value: 6, color: "#B71C1C" },
    { label: "Thể thao", value: 6, color: "#1B5E20" },
    { label: "Du lịch", value: 6, color: "#0D47A1" },
  ],
  completions: [
    { label: "Hoàn thành", value: 856, color: "#2E7D32" },
    { label: "Đang học", value: 312, color: "#1565C0" },
    { label: "Đã đăng ký", value: 82, color: "#9E9E9E" },
  ],
  revenue: [
    { label: "Đào tạo nội dung", value: 60, color: "#B71C1C" },
    { label: "Hạ tầng", value: 25, color: "#1A237E" },
    { label: "Vận hành", value: 15, color: "#FFC107" },
  ],
};

type ChartType = "bar" | "line" | "donut";

interface ReportChartsProps {
  metric: string;
}

export function ReportCharts({ metric }: ReportChartsProps) {
  const [chartType, setChartType] = useState<ChartType>("bar");
  const data = CHART_DATA[metric] ?? CHART_DATA.users;
  const donutData = DONUT_DATA[metric] ?? DONUT_DATA.users;

  const CHART_TYPES: { key: ChartType; icon: React.ElementType; label: string }[] = [
    { key: "bar", icon: BarChart2, label: "Cột" },
    { key: "line", icon: LineChartIcon, label: "Đường" },
    { key: "donut", icon: PieChart, label: "Tròn" },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <CardTitle className="text-base">Biểu đồ phân tích</CardTitle>
          <div className="flex items-center gap-1 rounded-lg border p-1">
            {CHART_TYPES.map(({ key, icon: Icon, label }) => (
              <Button
                key={key}
                variant={chartType === key ? "default" : "ghost"}
                size="sm"
                className="h-7 px-2.5 gap-1.5 text-xs"
                onClick={() => setChartType(key)}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {chartType === "bar" && <BarChart data={data} color="bg-primary" />}
        {chartType === "line" && <LineChart data={data} color="#B71C1C" />}
        {chartType === "donut" && <DonutChart data={donutData} />}
      </CardContent>
    </Card>
  );
}
