import Link from "next/link";
import Image from "next/image";
import { Users, Clock, BookOpen } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn, getLevelLabel, getProgressPercent } from "@/lib/utils";
import { LEVEL_COLORS } from "@/lib/constants";
import { DomainBadge } from "@/components/shared/domain-badge";
import { RatingStars } from "@/components/shared/rating-stars";
import type { Course, Progress } from "@/types";

interface CourseCardProps {
  course: Course;
  variant?: "grid" | "list";
  progress?: Progress;
  showProgress?: boolean;
  className?: string;
}

function CourseThumbnail({ course, className }: { course: Course; className?: string }) {
  const bgClass = DOMAIN_BG[course.domain] ?? "from-primary-100 to-primary-200";
  return (
    <div className={cn("relative bg-gradient-to-br overflow-hidden", bgClass, className)}>
      {course.thumbnail && (
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover"
        />
      )}
      {/* Fallback icon shown behind the image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <BookOpen className="h-12 w-12 text-primary/30" />
      </div>
    </div>
  );
}

const DOMAIN_BG: Record<string, string> = {
  "van-hoa": "from-red-100 to-red-200",
  "the-thao": "from-blue-100 to-blue-200",
  "du-lich": "from-green-100 to-green-200",
};

export function CourseCard({
  course,
  variant = "grid",
  progress,
  showProgress = false,
  className,
}: CourseCardProps) {
  const percent = progress
    ? getProgressPercent(progress.completedLessons, progress.totalLessons)
    : 0;

  if (variant === "list") {
    return (
      <Link href={`/courses/${course.id}`}>
        <Card
          className={cn(
            "group overflow-hidden hover:shadow-md transition-all hover:scale-[1.01] cursor-pointer",
            className
          )}
        >
          <div className="flex">
            <CourseThumbnail course={course} className="w-36 shrink-0" />
            <CardContent className="p-4 flex-1 min-w-0">
              <div className="flex gap-1.5 mb-1.5">
                <DomainBadge domain={course.domain} />
                <Badge className={cn("text-xs font-medium", LEVEL_COLORS[course.level])}>
                  {getLevelLabel(course.level)}
                </Badge>
              </div>
              <h3 className="font-semibold text-sm leading-snug line-clamp-1 group-hover:text-primary transition-colors mb-1">
                {course.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{course.instructor}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <RatingStars rating={course.rating} showValue />
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {course.enrolledCount.toLocaleString("vi-VN")}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {course.duration}
                </span>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/courses/${course.id}`}>
      <Card
        className={cn(
          "group h-full overflow-hidden hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer",
          className
        )}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <CourseThumbnail course={course} className="absolute inset-0 w-full h-full" />
          <div className="absolute top-2 left-2 flex gap-1.5 z-10">
            <DomainBadge domain={course.domain} />
            <Badge className={cn("text-xs font-medium", LEVEL_COLORS[course.level])}>
              {getLevelLabel(course.level)}
            </Badge>
          </div>
        </div>

        <CardContent className="p-4 pb-2">
          <h3 className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors mb-2">
            {course.title}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
            {course.description}
          </p>
          <p className="text-xs text-muted-foreground font-medium">{course.instructor}</p>
        </CardContent>

        <CardFooter className="px-4 pb-4 pt-2 flex flex-col gap-2">
          <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
            <RatingStars rating={course.rating} showValue />
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {course.enrolledCount.toLocaleString("vi-VN")}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5" />
              {course.lessons} bài
            </span>
          </div>

          {showProgress && progress && (
            <div className="w-full">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Tiến độ</span>
                <span className="font-medium text-primary">{percent}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
