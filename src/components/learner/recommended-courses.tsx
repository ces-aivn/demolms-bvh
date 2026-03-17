import Link from "next/link";
import { CourseCard } from "@/components/shared/course-card";
import { Button } from "@/components/ui/button";
import type { Course } from "@/types";

interface RecommendedCoursesProps {
  courses: Course[];
}

export function RecommendedCourses({ courses }: RecommendedCoursesProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">Khóa học đề xuất</h2>
        <Button variant="ghost" size="sm" className="text-primary text-xs" asChild>
          <Link href="/courses">Xem tất cả</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
