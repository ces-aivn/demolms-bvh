import { BookOpen, GraduationCap, Award, Star } from "lucide-react";
import { StatsWidget } from "@/components/shared/stats-widget";
import type { Progress } from "@/types";

interface ProgressOverviewProps {
  progressList: Progress[];
}

export function ProgressOverview({ progressList }: ProgressOverviewProps) {
  const enrolled = progressList.length;
  const inProgress = progressList.filter((p) => p.status === "in-progress").length;
  const completed = progressList.filter((p) => p.status === "completed").length;
  const scores = progressList.filter((p) => p.score > 0).map((p) => p.score);
  const avgScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatsWidget
        icon={BookOpen}
        value={enrolled}
        label="Đã đăng ký"
        trend={{ value: 2, direction: "up" }}
      />
      <StatsWidget
        icon={GraduationCap}
        value={inProgress}
        label="Đang học"
      />
      <StatsWidget
        icon={Award}
        value={completed}
        label="Hoàn thành"
        trend={{ value: 1, direction: "up" }}
      />
      <StatsWidget
        icon={Star}
        value={avgScore > 0 ? `${avgScore}đ` : "—"}
        label="Điểm trung bình"
      />
    </div>
  );
}
