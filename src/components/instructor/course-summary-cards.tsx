import { Users, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DomainBadge } from "@/components/shared/domain-badge";
import type { Course } from "@/types";

interface CourseSummaryCardsProps {
  courses: Course[];
}

const STATUS_MAP: Record<string, { label: string; className: string }> = {
  published: { label: "Đã xuất bản", className: "bg-green-100 text-green-700" },
  draft: { label: "Nháp", className: "bg-yellow-100 text-yellow-700" },
  archived: { label: "Lưu trữ", className: "bg-gray-100 text-gray-500" },
};

const COMPLETION_BY_COURSE: Record<string, number> = {
  "course-01": 82,
  "course-02": 75,
  "course-03": 88,
  "course-04": 71,
  "course-05": 65,
  "course-06": 79,
};

export function CourseSummaryCards({ courses }: CourseSummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {courses.map((course) => {
        const completion = COMPLETION_BY_COURSE[course.id] ?? 70;
        const status = STATUS_MAP[course.status] ?? STATUS_MAP.draft;
        return (
          <Card key={course.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="h-10 w-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <Badge className={`text-[10px] shrink-0 ${status.className}`}>
                  {status.label}
                </Badge>
              </div>

              <h3 className="text-sm font-semibold line-clamp-2 mb-2 leading-snug">
                {course.title}
              </h3>

              <div className="flex items-center gap-1.5 mb-3">
                <DomainBadge domain={course.domain} />
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  {course.enrolledCount} học viên
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="h-3.5 w-3.5" />
                  {completion}% hoàn thành
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-muted-foreground">Tiến độ học viên</span>
                  <span className="font-medium text-primary">{completion}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${completion}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
