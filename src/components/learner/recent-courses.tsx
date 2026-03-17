import Link from "next/link";
import { BookOpen, PlayCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressRing } from "@/components/shared/progress-ring";
import { DomainBadge } from "@/components/shared/domain-badge";
import { getProgressPercent } from "@/lib/utils";
import type { Course, Progress } from "@/types";

interface RecentCoursesProps {
  items: Array<{ course: Course; progress: Progress }>;
}

const DOMAIN_BG: Record<string, string> = {
  "van-hoa": "from-red-100 to-red-200",
  "the-thao": "from-blue-100 to-blue-200",
  "du-lich": "from-green-100 to-green-200",
};

export function RecentCourses({ items }: RecentCoursesProps) {
  if (items.length === 0) {
    return (
      <Card>
        <CardContent className="py-10 text-center text-muted-foreground text-sm">
          Chưa có khóa học nào.{" "}
          <Link href="/courses" className="text-primary hover:underline">
            Khám phá ngay
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {items.map(({ course, progress }) => {
        const percent = getProgressPercent(progress.completedLessons, progress.totalLessons);
        return (
          <Card key={course.id} className="overflow-hidden hover:shadow-md transition-all duration-300 group">
            <div className="flex">
              <div
                className={`relative w-28 shrink-0 bg-gradient-to-br flex items-center justify-center ${DOMAIN_BG[course.domain] ?? "from-primary-100 to-primary-200"}`}
              >
                <BookOpen className="h-7 w-7 text-primary/25 group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-3.5 flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <DomainBadge domain={course.domain} className="mb-1" />
                    <h3 className="font-semibold text-sm leading-snug line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {progress.completedLessons}/{progress.totalLessons} bài · Truy cập {progress.lastAccessed}
                    </p>
                  </div>
                  <ProgressRing percentage={percent} size={52} strokeWidth={5} />
                </div>
                <div className="mt-2">
                  <Button
                    size="sm"
                    className="h-7 text-xs bg-primary hover:bg-primary-800"
                    asChild
                  >
                    <Link href={`/learn/${course.id}`}>
                      <PlayCircle className="h-3 w-3 mr-1" />
                      Tiếp tục
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
