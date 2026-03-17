import { BookOpen, Users, TrendingUp, Star } from "lucide-react";
import { StatsWidget } from "@/components/shared/stats-widget";
import type { InstructorStats } from "@/types";

interface InstructorStatsProps {
  stats: InstructorStats;
}

export function InstructorStatsGrid({ stats }: InstructorStatsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsWidget
        icon={BookOpen}
        value={stats.totalCourses}
        label="Khóa học"
        trend={{ value: 1, direction: "up" }}
        iconClassName="bg-primary-50"
      />
      <StatsWidget
        icon={Users}
        value={stats.totalStudents}
        label="Học viên"
        trend={{ value: 12, direction: "up" }}
        iconClassName="bg-blue-50"
      />
      <StatsWidget
        icon={TrendingUp}
        value={`${stats.avgCompletion}%`}
        label="Tỷ lệ hoàn thành"
        trend={{ value: 5, direction: "up" }}
        iconClassName="bg-green-50"
      />
      <StatsWidget
        icon={Star}
        value={stats.avgRating}
        label="Đánh giá TB"
        iconClassName="bg-yellow-50"
      />
    </div>
  );
}
