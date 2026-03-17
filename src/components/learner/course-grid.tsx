"use client";

import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/shared/course-card";
import type { Course } from "@/types";

interface CourseGridProps {
  courses: Course[];
  page: number;
  perPage?: number;
}

export function CourseGrid({ courses, page, perPage = 6 }: CourseGridProps) {
  const [view, setView] = useState<"grid" | "list">("grid");

  const start = (page - 1) * perPage;
  const paginated = courses.slice(start, start + perPage);

  if (paginated.length === 0) {
    return (
      <div className="rounded-xl border border-dashed py-16 text-center text-muted-foreground text-sm">
        Không tìm thấy khóa học phù hợp. Thử thay đổi bộ lọc.
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted-foreground">
          Hiển thị <span className="font-medium text-foreground">{paginated.length}</span> / {courses.length} khóa học
        </p>
        <div className="flex gap-1">
          <Button
            variant={view === "grid" ? "default" : "ghost"}
            size="icon"
            className="h-8 w-8"
            onClick={() => setView("grid")}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={view === "list" ? "default" : "ghost"}
            size="icon"
            className="h-8 w-8"
            onClick={() => setView("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginated.map((course) => (
            <CourseCard key={course.id} course={course} variant="grid" />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {paginated.map((course) => (
            <CourseCard key={course.id} course={course} variant="list" />
          ))}
        </div>
      )}
    </div>
  );
}
