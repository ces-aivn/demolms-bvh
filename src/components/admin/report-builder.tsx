"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DateRangePicker } from "@/components/shared/date-range-picker";

interface ReportBuilderProps {
  metric: string;
  onMetricChange: (v: string) => void;
  onPeriodChange: (label: string) => void;
}

const METRICS = [
  { value: "users", label: "Người dùng" },
  { value: "courses", label: "Khóa học" },
  { value: "completions", label: "Hoàn thành" },
  { value: "revenue", label: "Ngân sách" },
];

export function ReportBuilder({ metric, onMetricChange, onPeriodChange }: ReportBuilderProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <DateRangePicker
        onChange={(_range, preset) => {
          const labels: Record<string, string> = {
            "7d": "7 ngày qua",
            "30d": "30 ngày qua",
            "90d": "90 ngày qua",
            "custom": "Tùy chỉnh",
          };
          onPeriodChange(labels[preset] ?? preset);
        }}
      />

      <Select value={metric} onValueChange={onMetricChange}>
        <SelectTrigger className="h-9 w-44 text-sm">
          <SelectValue placeholder="Chỉ số" />
        </SelectTrigger>
        <SelectContent>
          {METRICS.map((m) => (
            <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
