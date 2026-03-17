import { Mail, Building2, Calendar, Award, BookOpen, Edit } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LearningHistory } from "@/components/learner/learning-history";
import { NotificationSettings } from "@/components/learner/notification-settings";
import { getUserById, getOrgById, getProgressByUser, getCertsByUser, getCourseById } from "@/lib/mock-data";
import { formatDateVi, getRoleLabel, getProgressPercent } from "@/lib/utils";
import { ProgressRing } from "@/components/shared/progress-ring";

const DEMO_USER = "user-01";

export default function ProfilePage() {
  const user = getUserById(DEMO_USER);
  if (!user) return null;

  const org = getOrgById(user.organizationId);
  const progressList = getProgressByUser(DEMO_USER);
  const certs = getCertsByUser(DEMO_USER);
  const completed = progressList.filter((p) => p.status === "completed");

  const historyItems = progressList
    .sort((a, b) => b.lastAccessed.localeCompare(a.lastAccessed))
    .flatMap((prog) => {
      const course = getCourseById(prog.courseId);
      return course ? [{ progress: prog, course }] : [];
    });

  const overallPercent = getProgressPercent(completed.length, progressList.length);

  return (
    <div>
      <PageHeader
        title="Hồ sơ cá nhân"
        description="Quản lý thông tin tài khoản và cài đặt của bạn"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="space-y-4">
          {/* Avatar + info */}
          <Card>
            <CardContent className="p-5 text-center">
              <Avatar className="h-20 w-20 mx-auto mb-3">
                <AvatarFallback className="bg-primary text-white text-2xl font-bold">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <h2 className="font-bold text-lg">{user.name}</h2>
              <Badge className="mt-1 bg-primary-100 text-primary-800">
                {getRoleLabel(user.role)}
              </Badge>
              <Separator className="my-3" />
              <div className="space-y-2 text-sm text-left">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="truncate text-xs">{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="h-4 w-4 shrink-0" />
                  <span className="text-xs">{org?.shortName}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 shrink-0" />
                  <span className="text-xs">Tham gia {formatDateVi(user.joinedDate)}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-3 gap-1.5">
                <Edit className="h-3.5 w-3.5" />
                Chỉnh sửa hồ sơ
              </Button>
            </CardContent>
          </Card>

          {/* Stats */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold">Tiến độ học tập</p>
                <ProgressRing percentage={overallPercent} size={48} strokeWidth={5} />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-primary-50 rounded-lg p-3 text-center">
                  <BookOpen className="h-4 w-4 text-primary mx-auto mb-1" />
                  <p className="text-xl font-bold">{progressList.length}</p>
                  <p className="text-[10px] text-muted-foreground">Khóa học</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <Award className="h-4 w-4 text-green-600 mx-auto mb-1" />
                  <p className="text-xl font-bold">{certs.length}</p>
                  <p className="text-[10px] text-muted-foreground">Chứng chỉ</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="lg:col-span-2 space-y-4">
          {/* Personal info display */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Thông tin cá nhân</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Họ và tên", value: user.name },
                { label: "Email", value: user.email },
                { label: "Đơn vị công tác", value: org?.name ?? "—" },
                { label: "Chức vụ", value: "Chuyên viên" },
                { label: "Số điện thoại", value: "0912 345 678" },
                { label: "Mã cán bộ", value: "BVHTTDL-001" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Learning history */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Lịch sử học tập</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <LearningHistory items={historyItems} />
            </CardContent>
          </Card>

          {/* Notification settings */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Cài đặt thông báo</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <NotificationSettings />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
