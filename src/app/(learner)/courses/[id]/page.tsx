import { notFound } from "next/navigation";
import { Award, Clock, BookOpen, Users, Globe, Share2, PlayCircle, FileText, HelpCircle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DomainBadge } from "@/components/shared/domain-badge";
import { RatingStars } from "@/components/shared/rating-stars";
import { CourseCard } from "@/components/shared/course-card";
import { InstructorCard } from "@/components/learner/instructor-card";
import { CourseReviews } from "@/components/learner/course-reviews";
import { getCourseById, getOrgById, getUserById, getReviewsByCourse, courses } from "@/lib/mock-data";
import { getDomainLabel, getLevelLabel } from "@/lib/utils";
import { LEVEL_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props { params: { id: string } }

const lessonTypeIcon = {
  video: PlayCircle,
  document: FileText,
  quiz: HelpCircle,
};

const DOMAIN_BG: Record<string, string> = {
  "van-hoa": "from-red-700 to-primary",
  "the-thao": "from-blue-700 to-blue-500",
  "du-lich": "from-green-700 to-green-500",
};

export default function CourseDetailPage({ params }: Props) {
  const course = getCourseById(params.id);
  if (!course) notFound();

  const org = getOrgById(course.organizationId);
  const instructor = getUserById(course.instructorId);
  const courseReviews = getReviewsByCourse(course.id);
  const totalLessons = course.syllabus.reduce((s, m) => s + m.lessons.length, 0);

  // Build reviewer names map
  const reviewerNames: Record<string, string> = {};
  courseReviews.forEach((r) => {
    const u = getUserById(r.userId);
    if (u) reviewerNames[r.userId] = u.name;
  });

  // Related courses: same domain, different id, max 3
  const related = courses
    .filter((c) => c.domain === course.domain && c.id !== course.id && c.status === "published")
    .slice(0, 3);

  return (
    <div>
      <Breadcrumb
        items={[{ label: "Danh mục khóa học", href: "/courses" }, { label: course.title }]}
        className="mb-4"
      />

      {/* Banner */}
      <div className={cn("rounded-xl bg-gradient-to-r p-6 text-white mb-6", DOMAIN_BG[course.domain] ?? "from-primary to-primary-700")}>
        <div className="flex flex-wrap gap-2 mb-3">
          <DomainBadge domain={course.domain} className="bg-white/20 text-white border-white/30" />
          <Badge className={cn("text-xs", LEVEL_COLORS[course.level])}>{getLevelLabel(course.level)}</Badge>
        </div>
        <h1 className="text-2xl font-bold leading-tight mb-3 max-w-2xl">{course.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
          <RatingStars rating={course.rating} showValue className="text-white/80" />
          <span className="flex items-center gap-1"><Users className="h-4 w-4" />{course.enrolledCount.toLocaleString("vi-VN")} học viên</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{course.duration}</span>
          <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" />{totalLessons} bài học</span>
        </div>
        <p className="text-sm text-white/70 mt-2">Giảng viên: {course.instructor} · {org?.shortName}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <div>
            <h2 className="font-semibold text-lg mb-2">Giới thiệu khóa học</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{course.description}</p>
          </div>

          <Separator />

          {/* Syllabus */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Nội dung khóa học</h2>
            <div className="space-y-3">
              {course.syllabus.map((module, mi) => (
                <Card key={mi}>
                  <CardHeader className="py-3 px-4">
                    <CardTitle className="text-sm font-semibold flex items-center justify-between">
                      <span>{module.moduleTitle}</span>
                      <span className="text-xs text-muted-foreground font-normal">{module.lessons.length} bài</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-4 pb-3 space-y-2">
                    {module.lessons.map((lesson, li) => {
                      const Icon = lessonTypeIcon[lesson.type] ?? PlayCircle;
                      return (
                        <div key={li} className="flex items-center justify-between text-sm py-0.5">
                          <div className="flex items-center gap-2 min-w-0">
                            <Icon className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                            <span className="truncate text-sm">{lesson.title}</span>
                            <Badge variant="outline" className="text-[10px] shrink-0">
                              {lesson.type === "video" ? "Video" : lesson.type === "quiz" ? "Kiểm tra" : "Tài liệu"}
                            </Badge>
                          </div>
                          <span className="text-xs text-muted-foreground shrink-0 ml-2">{lesson.duration}</span>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator />

          {/* Instructor */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Giảng viên</h2>
            <InstructorCard
              name={course.instructor}
              orgName={org?.name ?? ""}
              courseCount={courses.filter((c) => c.instructorId === course.instructorId).length}
              bio={instructor ? `Chuyên gia trong lĩnh vực ${getDomainLabel(course.domain)}. Có nhiều năm kinh nghiệm nghiên cứu và giảng dạy tại ${org?.shortName ?? "Bộ VHTTDL"}.` : undefined}
            />
          </div>

          <Separator />

          {/* Reviews */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Đánh giá từ học viên</h2>
            <CourseReviews reviews={courseReviews} reviewerNames={reviewerNames} />
          </div>

          {/* Related */}
          {related.length > 0 && (
            <>
              <Separator />
              <div>
                <h2 className="font-semibold text-lg mb-4">Khóa học liên quan</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((c) => <CourseCard key={c.id} course={c} />)}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Sticky sidebar CTA */}
        <div>
          <Card className="sticky top-20">
            <CardContent className="p-5 space-y-4">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-primary/30" />
              </div>

              <Button className="w-full bg-primary hover:bg-primary-800" size="lg" asChild>
                <Link href={`/learn/${course.id}`}>
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Bắt đầu học
                </Link>
              </Button>
              <Button variant="outline" className="w-full" size="lg">Đăng ký khóa học</Button>

              <Separator />

              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />Thời lượng</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" />Số bài học</span>
                  <span className="font-medium">{totalLessons} bài</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />Trình độ</span>
                  <span className="font-medium">{getLevelLabel(course.level)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-1.5"><Globe className="h-3.5 w-3.5" />Ngôn ngữ</span>
                  <span className="font-medium">Tiếng Việt</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-1.5"><Award className="h-3.5 w-3.5" />Chứng chỉ</span>
                  <span className="font-medium text-green-600">Có</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-center gap-3">
                <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
                  <Share2 className="h-4 w-4" />
                  Chia sẻ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
