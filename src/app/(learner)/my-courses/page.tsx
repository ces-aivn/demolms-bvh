import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EnrolledCourseCard } from "@/components/learner/enrolled-course-card";
import { getProgressByUser, getCourseById, getCertsByUser } from "@/lib/mock-data";

const DEMO_USER = "user-01";

function EmptyState({ label }: { label: string }) {
  return (
    <Card>
      <CardContent className="py-12 text-center">
        <p className="text-muted-foreground text-sm mb-3">{label}</p>
        <Button variant="outline" size="sm" asChild>
          <Link href="/courses">Khám phá khóa học</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function MyCoursesPage() {
  const progressList = getProgressByUser(DEMO_USER);
  const certs = getCertsByUser(DEMO_USER);
  const certCourseIds = new Set(certs.map((c) => c.courseId));

  const inProgress = progressList.filter((p) => p.status === "in-progress");
  const enrolled = progressList.filter((p) => p.status === "enrolled");
  const completed = progressList.filter((p) => p.status === "completed");

  function CourseList({ list }: { list: typeof progressList }) {
    if (list.length === 0) return null;
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((prog) => {
          const course = getCourseById(prog.courseId);
          if (!course) return null;
          return (
            <EnrolledCourseCard
              key={prog.courseId}
              course={course}
              progress={prog}
              hasCertificate={certCourseIds.has(prog.courseId)}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Khóa học của tôi"
        description={`${progressList.length} khóa học đã đăng ký`}
        actions={
          <Button asChild className="bg-primary hover:bg-primary-800">
            <Link href="/courses">Tìm khóa học mới</Link>
          </Button>
        }
      />

      <Tabs defaultValue="in-progress">
        <TabsList className="mb-6">
          <TabsTrigger value="in-progress">
            Đang học ({inProgress.length})
          </TabsTrigger>
          <TabsTrigger value="enrolled">
            Đã đăng ký ({enrolled.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Hoàn thành ({completed.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="in-progress">
          {inProgress.length === 0
            ? <EmptyState label="Bạn chưa có khóa học nào đang học." />
            : <CourseList list={inProgress} />}
        </TabsContent>
        <TabsContent value="enrolled">
          {enrolled.length === 0
            ? <EmptyState label="Bạn chưa đăng ký khóa học nào." />
            : <CourseList list={enrolled} />}
        </TabsContent>
        <TabsContent value="completed">
          {completed.length === 0
            ? <EmptyState label="Bạn chưa hoàn thành khóa học nào." />
            : <CourseList list={completed} />}
        </TabsContent>
      </Tabs>
    </div>
  );
}
