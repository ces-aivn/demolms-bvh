import { Users, BookOpen, CheckCircle, Activity, Building2, Star } from "lucide-react";
import { StatsWidget } from "@/components/shared/stats-widget";
import type { AdminStats } from "@/types";

interface PlatformKpisProps {
  stats: AdminStats;
}

export function PlatformKpis({ stats }: PlatformKpisProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <StatsWidget
        icon={Users}
        value={stats.totalUsers.toLocaleString("vi-VN")}
        label="Tổng người dùng"
        trend={{ value: 8, direction: "up" }}
        iconClassName="bg-blue-50"
      />
      <StatsWidget
        icon={BookOpen}
        value={stats.totalCourses}
        label="Tổng khóa học"
        trend={{ value: 3, direction: "up" }}
        iconClassName="bg-primary-50"
      />
      <StatsWidget
        icon={CheckCircle}
        value={stats.totalCompletions.toLocaleString("vi-VN")}
        label="Lượt hoàn thành"
        trend={{ value: 12, direction: "up" }}
        iconClassName="bg-green-50"
      />
      <StatsWidget
        icon={Activity}
        value={stats.activeToday}
        label="Đang hoạt động hôm nay"
        trend={{ value: 5, direction: "up" }}
        iconClassName="bg-orange-50"
      />
      <StatsWidget
        icon={Building2}
        value={stats.totalOrgs}
        label="Đơn vị đối tác"
        iconClassName="bg-purple-50"
      />
      <StatsWidget
        icon={Star}
        value={stats.avgRating.toFixed(1)}
        label="Đánh giá trung bình"
        trend={{ value: 2, direction: "up" }}
        iconClassName="bg-yellow-50"
      />
    </div>
  );
}
