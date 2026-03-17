import { BookOpen, Award, Star, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Milestone {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  current: number;
  target: number;
  color: string;
}

const MILESTONES: Milestone[] = [
  { id: "m1", icon: BookOpen, title: "Học viên chăm chỉ", description: "Hoàn thành 5 khóa học", current: 1, target: 5, color: "text-primary bg-primary-100" },
  { id: "m2", icon: Award, title: "Nhà sưu tầm chứng chỉ", description: "Đạt 3 chứng chỉ", current: 1, target: 3, color: "text-green-600 bg-green-100" },
  { id: "m3", icon: Star, title: "Xuất sắc toàn diện", description: "Điểm trung bình ≥ 90", current: 92, target: 90, color: "text-secondary bg-secondary/20" },
  { id: "m4", icon: Zap, title: "Học liên tục", description: "Đăng nhập 30 ngày liên tiếp", current: 7, target: 30, color: "text-purple-600 bg-purple-100" },
];

export function AchievementMilestones() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {MILESTONES.map((m) => {
        const Icon = m.icon;
        const pct = Math.min(100, Math.round((m.current / m.target) * 100));
        const done = m.current >= m.target;
        return (
          <Card key={m.id} className={done ? "border-green-300 bg-green-50/50" : ""}>
            <CardContent className="p-4 flex items-start gap-3">
              <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${m.color}`}>
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <p className="text-sm font-semibold truncate">{m.title}</p>
                  {done && <span className="text-[10px] text-green-600 font-medium shrink-0">Hoàn thành!</span>}
                </div>
                <p className="text-xs text-muted-foreground mb-2">{m.description}</p>
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${done ? "bg-green-500" : "bg-primary"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="text-[10px] text-muted-foreground mt-1">
                  {m.current}/{m.target} · {pct}%
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
