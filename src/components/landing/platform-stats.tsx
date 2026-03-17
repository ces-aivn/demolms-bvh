import { Users, BookOpen, Building2, CheckCircle } from "lucide-react";
import { StatsWidget } from "@/components/shared/stats-widget";

const STATS = [
  {
    icon: Users,
    value: "1,000+",
    label: "Học viên",
    iconClassName: "bg-primary-50",
  },
  {
    icon: BookOpen,
    value: "18",
    label: "Khóa học",
    iconClassName: "bg-blue-50",
  },
  {
    icon: Building2,
    value: "5",
    label: "Đơn vị",
    iconClassName: "bg-green-50",
  },
  {
    icon: CheckCircle,
    value: "95%",
    label: "Hoàn thành",
    iconClassName: "bg-secondary/10",
  },
];

export function PlatformStats() {
  return (
    <section className="py-12 px-4 bg-white border-b">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <StatsWidget
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              iconClassName={stat.iconClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
