import Link from "next/link";
import { BookOpen, PlayCircle, Award, Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DomainBadge } from "@/components/shared/domain-badge";
import { getProgressPercent, formatDateVi } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Course, Progress } from "@/types";

interface EnrolledCourseCardProps {
  course: Course;
  progress: Progress;
  hasCertificate?: boolean;
}

const DOMAIN_BG: Record<string, string> = {
  "van-hoa": "from-red-100 to-red-200",
  "the-thao": "from-blue-100 to-blue-200",
  "du-lich": "from-green-100 to-green-200",
};

export function EnrolledCourseCard({ course, progress, hasCertificate }: EnrolledCourseCardProps) {
  const percent = getProgressPercent(progress.completedLessons, progress.totalLessons);
  const isCompleted = progress.status === "completed";

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
      {/* Thumbnail */}
      <div className={cn("relative h-32 bg-gradient-to-br flex items-center justify-center", DOMAIN_BG[course.domain] ?? "from-primary-100 to-primary-200")}>
        <BookOpen className="h-10 w-10 text-primary/25 group-hover:scale-110 transition-transform" />
        <div className="absolute top-2 left-2">
          <DomainBadge domain={course.domain} />
        </div>
        {isCompleted && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
            Hoàn thành
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-sm leading-snug line-clamp-2 mb-1">{course.title}</h3>
          <p className="text-xs text-muted-foreground">{course.instructor}</p>
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-muted-foreground">Tiến độ</span>
            <span className="font-medium text-primary">{percent}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
            <div
              className={cn("h-full rounded-full transition-all", isCompleted ? "bg-green-500" : "bg-primary")}
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className="text-[10px] text-muted-foreground mt-1">
            {progress.completedLessons}/{progress.totalLessons} bài học
          </p>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDateVi(progress.lastAccessed)}
          </span>
          {progress.score > 0 && (
            <Badge variant="outline" className="text-[10px] h-4 px-1.5">
              {progress.score}đ
            </Badge>
          )}
        </div>

        {/* Action button */}
        {isCompleted && hasCertificate ? (
          <Button size="sm" variant="outline" className="w-full gap-1.5 border-green-400 text-green-600 hover:bg-green-50" asChild>
            <Link href="/certificates">
              <Award className="h-3.5 w-3.5" />
              Xem chứng chỉ
            </Link>
          </Button>
        ) : (
          <Button size="sm" className="w-full gap-1.5 bg-primary hover:bg-primary-800" asChild>
            <Link href={`/learn/${course.id}`}>
              <PlayCircle className="h-3.5 w-3.5" />
              {progress.status === "enrolled" ? "Bắt đầu học" : "Tiếp tục học"}
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
