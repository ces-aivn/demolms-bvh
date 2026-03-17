import { Users, BookOpen, CheckCircle, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ReportSummaryProps {
  metric: string;
  period: string;
}

const metricSummaries: Record<string, {
  items: { label: string; value: string; icon: React.ElementType; color: string; bg: string }[];
}> = {
  users: {
    items: [
      { label: "Người dùng mới", value: "248", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
      { label: "Đang hoạt động", value: "142", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
      { label: "Không hoạt động", value: "26", icon: Users, color: "text-gray-500", bg: "bg-gray-50" },
      { label: "Tổng tích lũy", value: "1.250", icon: Users, color: "text-primary", bg: "bg-primary-50" },
    ],
  },
  courses: {
    items: [
      { label: "Khóa học mới", value: "3", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50" },
      { label: "Đang xuất bản", value: "15", icon: BookOpen, color: "text-green-600", bg: "bg-green-50" },
      { label: "Chờ duyệt", value: "2", icon: BookOpen, color: "text-yellow-600", bg: "bg-yellow-50" },
      { label: "Tổng khóa học", value: "18", icon: BookOpen, color: "text-primary", bg: "bg-primary-50" },
    ],
  },
  completions: {
    items: [
      { label: "Lượt hoàn thành", value: "91", icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
      { label: "Tỷ lệ hoàn thành", value: "68%", icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50" },
      { label: "Điểm TB", value: "82.4", icon: CheckCircle, color: "text-purple-600", bg: "bg-purple-50" },
      { label: "Chứng chỉ cấp", value: "85", icon: CheckCircle, color: "text-primary", bg: "bg-primary-50" },
    ],
  },
  revenue: {
    items: [
      { label: "Ngân sách sử dụng", value: "75%", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
      { label: "Chi phí đào tạo", value: "120M", icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50" },
      { label: "Tiết kiệm ước tính", value: "45M", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
      { label: "ROI đào tạo", value: "37%", icon: TrendingUp, color: "text-primary", bg: "bg-primary-50" },
    ],
  },
};

export function ReportSummary({ metric, period }: ReportSummaryProps) {
  const config = metricSummaries[metric] ?? metricSummaries.users;

  return (
    <div>
      <p className="text-xs text-muted-foreground mb-3">Tóm tắt — {period}</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {config.items.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label}>
              <CardContent className="p-4 flex items-center gap-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.bg} shrink-0`}>
                  <Icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-bold">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
