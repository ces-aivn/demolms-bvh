import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/shared/course-card";
import { courses } from "@/lib/mock-data";

export function FeaturedCourses() {
  const featured = courses.filter((c) => c.status === "published").slice(0, 6);

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-navy-950/20 border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Khóa học Nổi bật</h2>
            <p className="text-muted-foreground">
              Các khóa học được học viên đánh giá cao nhất
            </p>
          </div>
          <Button variant="outline" size="sm" asChild className="hidden sm:flex">
            <Link href="/courses">
              Xem tất cả <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="relative">
          <div
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth
                        md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
            style={{ scrollbarWidth: "none" }}
          >
            {featured.map((course) => (
              <div
                key={course.id}
                className="min-w-[280px] snap-start md:min-w-0"
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Button variant="outline" size="sm" asChild>
            <Link href="/courses">
              Xem tất cả khóa học <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
