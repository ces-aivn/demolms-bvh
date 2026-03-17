import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { InstructorStatsGrid } from "@/components/instructor/instructor-stats";
import { TopCoursesChart } from "@/components/instructor/top-courses-chart";
import { RecentActivity } from "@/components/instructor/recent-activity";
import { CourseSummaryCards } from "@/components/instructor/course-summary-cards";
import { LineChart } from "@/components/charts/line-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { instructorStats, courses } from "@/lib/mock-data";
import Link from "next/link";

const MONTHS = ["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12"];

const myCourses = courses.filter((c) => c.instructorId === "user-06");

export default function InstructorDashboardPage() {
  const enrollmentData = instructorStats.monthlyEnrollments.map((value, i) => ({
    label: MONTHS[i],
    value,
  }));

  return (
    <div className="space-y-6">
      <PageHeader
        title="Tổng quan Giảng viên"
        description="Chào mừng, PGS.TS Nguyễn Văn An!"
        actions={
          <Button className="bg-primary hover:bg-primary-800" asChild>
            <Link href="/instructor/course-builder">Tạo khóa học mới</Link>
          </Button>
        }
      />

      <InstructorStatsGrid stats={instructorStats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopCoursesChart stats={instructorStats} />

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Đăng ký theo tháng (2024)</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart data={enrollmentData} color="#B71C1C" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-base font-semibold mb-3">Khóa học của tôi</h2>
          <CourseSummaryCards courses={myCourses} />
        </div>
        <RecentActivity />
      </div>
    </div>
  );
}
