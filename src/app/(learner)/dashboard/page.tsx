import { getProgressByUser, getCourseById, courses } from "@/lib/mock-data";
import { WelcomeBanner } from "@/components/learner/welcome-banner";
import { ProgressOverview } from "@/components/learner/progress-overview";
import { RecentCourses } from "@/components/learner/recent-courses";
import { RecommendedCourses } from "@/components/learner/recommended-courses";
import { UpcomingDeadlines } from "@/components/learner/upcoming-deadlines";
import { ActivityFeed } from "@/components/learner/activity-feed";

const DEMO_USER = "user-01";

export default function LearnerDashboardPage() {
  const progressList = getProgressByUser(DEMO_USER);

  // Recent: in-progress first, then enrolled, sorted by lastAccessed
  const recentItems = progressList
    .filter((p) => p.status === "in-progress" || p.status === "enrolled")
    .sort((a, b) => b.lastAccessed.localeCompare(a.lastAccessed))
    .slice(0, 3)
    .flatMap((prog) => {
      const course = getCourseById(prog.courseId);
      return course ? [{ course, progress: prog }] : [];
    });

  // Recommended: courses not enrolled, one from each domain
  const enrolledIds = new Set(progressList.map((p) => p.courseId));
  const recommended = ["van-hoa", "the-thao", "du-lich", "van-hoa"]
    .map((domain) =>
      courses.find((c) => c.domain === domain && !enrolledIds.has(c.id) && c.status === "published")
    )
    .filter(Boolean)
    .slice(0, 4) as typeof courses;

  return (
    <div>
      <WelcomeBanner name="Nguyễn Thị Minh Châu" streak={7} />
      <ProgressOverview progressList={progressList} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Left: recent courses */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-semibold text-lg">Tiếp tục học</h2>
          <RecentCourses items={recentItems} />
        </div>

        {/* Right: sidebar widgets */}
        <div className="space-y-4">
          <UpcomingDeadlines />
        </div>
      </div>

      {/* Activity feed full-width on small, right col on large */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <RecommendedCourses courses={recommended} />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}
