import { Award } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { CertificateCard } from "@/components/learner/certificate-card";
import { getCertsByUser, getCourseById, getUserById } from "@/lib/mock-data";

const DEMO_USER = "user-01";

export default function CertificatesPage() {
  const certs = getCertsByUser(DEMO_USER);
  const user = getUserById(DEMO_USER);

  return (
    <div>
      <PageHeader
        title="Chứng chỉ của tôi"
        description={`${certs.length} chứng chỉ đã đạt được`}
      />

      {certs.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <Award className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-muted-foreground font-medium">Bạn chưa có chứng chỉ nào.</p>
            <p className="text-sm text-muted-foreground mt-1">
              Hoàn thành khóa học để nhận chứng chỉ từ Bộ VHTTDL.
            </p>
          </CardContent>
        </Card>
      ) : (
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
      )}
    </div>
  );
}
