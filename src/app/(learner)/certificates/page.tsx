import { Award, FileCheck, Trophy } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CertificateCard } from "@/components/learner/certificate-card";
import { getCertsByUser, getCourseById, getUserById, getProgressByUser } from "@/lib/mock-data";

const DEMO_USER = "user-01";

export default function CertificatesPage() {
  const certs = getCertsByUser(DEMO_USER);
  const user = getUserById(DEMO_USER);
  const progressList = getProgressByUser(DEMO_USER);
  const completedCourses = progressList.filter((p) => p.status === "completed").length;
  const inProgressCourses = progressList.filter((p) => p.status === "in-progress").length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Chứng chỉ của tôi"
        description={`${certs.length} chứng chỉ đã đạt được`}
      />

      {/* Summary stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-white border-green-200/50">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
              <FileCheck className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-green-700">{certs.length}</p>
              <p className="text-xs text-green-600/70">Chứng chỉ đạt được</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200/50">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
              <Trophy className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-700">{completedCourses}</p>
              <p className="text-xs text-blue-600/70">Khóa học hoàn thành</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-amber-50 to-white border-amber-200/50">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
              <Award className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-700">{inProgressCourses}</p>
              <p className="text-xs text-amber-600/70">Đang học dở</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {certs.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <Award className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-muted-foreground font-medium">Bạn chưa có chứng chỉ nào.</p>
            <p className="text-sm text-muted-foreground mt-1">
              Hoàn thành khóa học để nhận chứng chỉ từ Bộ VHTTDL.
            </p>
            <Button className="mt-4 bg-primary hover:bg-primary-800" asChild>
              <Link href="/courses">Khám phá khóa học</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {certs.map((cert) => {
              const course = getCourseById(cert.courseId);
              if (!course) return null;
              return (
                <CertificateCard
                  key={cert.id}
                  cert={cert}
                  course={course}
                  userName={user?.name ?? "Học viên"}
                />
              );
            })}
          </div>

          {/* CTA for more courses */}
          <Card className="border-dashed border-2 border-primary/20 bg-primary/5">
            <CardContent className="py-8 text-center">
              <Award className="h-10 w-10 text-primary/40 mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground mb-1">
                Tiếp tục học để nhận thêm chứng chỉ
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                Hoàn thành các khóa học để mở rộng bộ sưu tập chứng chỉ nghiệp vụ
              </p>
              <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10" asChild>
                <Link href="/courses">Khám phá khóa học mới</Link>
              </Button>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
