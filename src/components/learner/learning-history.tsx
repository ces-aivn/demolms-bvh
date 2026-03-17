import { CheckCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDateVi } from "@/lib/utils";
import type { Progress, Course } from "@/types";

interface LearningHistoryProps {
  items: Array<{ progress: Progress; course: Course }>;
}

export function LearningHistory({ items }: LearningHistoryProps) {
  if (items.length === 0) {
    return <p className="text-sm text-muted-foreground py-4">Chưa có lịch sử học tập.</p>;
  }

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
      <div className="space-y-4">
        {items.map(({ progress, course }) => (
          <div key={course.id} className="flex items-start gap-3 pl-2">
            <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full z-10 mt-0.5 ${progress.status === "completed" ? "bg-green-100" : "bg-blue-100"}`}>
              {progress.status === "completed"
                ? <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                : <Clock className="h-3.5 w-3.5 text-blue-600" />}
            </div>
            <div className="flex-1 min-w-0 pb-1">
              <p className="text-sm font-medium leading-snug truncate">{course.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground">
                  {progress.status === "completed"
                    ? `Hoàn thành ${formatDateVi(progress.lastAccessed)}`
                    : `Cập nhật ${formatDateVi(progress.lastAccessed)}`}
                </span>
                {progress.score > 0 && (
                  <Badge variant="outline" className="text-[10px] px-1.5 h-4">
                    {progress.score}đ
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
