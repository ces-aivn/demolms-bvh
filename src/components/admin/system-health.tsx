import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, HardDrive, Activity } from "lucide-react";

interface HealthItem {
  label: string;
  value: string;
  detail: string;
  icon: React.ElementType;
  color: string;
  bg: string;
}

const HEALTH_ITEMS: HealthItem[] = [
  {
    label: "Máy chủ",
    value: "Hoạt động",
    detail: "Tất cả dịch vụ bình thường",
    icon: Activity,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    label: "Lưu trữ",
    value: "75% / 100GB",
    detail: "Còn 25GB trống",
    icon: HardDrive,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    label: "Uptime",
    value: "99.9%",
    detail: "30 ngày qua",
    icon: CheckCircle,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

export function SystemHealth() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Tình trạng hệ thống</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {HEALTH_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center gap-3 rounded-lg border p-3">
              <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.bg} shrink-0`}>
                <Icon className={`h-5 w-5 ${item.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.detail}</p>
              </div>
              <span className={`text-sm font-semibold ${item.color} shrink-0`}>{item.value}</span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
