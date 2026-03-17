import type { NavItem } from "@/types";

export const PLATFORM_NAME = "Hệ thống Học tập Trực tuyến";
export const PLATFORM_SHORT = "BVHTTDL E-Learning";
export const MINISTRY_NAME = "Bộ Văn hóa, Thể thao và Du lịch";
export const MINISTRY_SHORT = "BVHTTDL";
export const COPYRIGHT_YEAR = 2024;

export const ROUTES = {
  home: "/",
  login: "/login",
  register: "/register",
  // Learner (no prefix — route group (learner) is transparent)
  learnerDashboard: "/dashboard",
  courses: "/courses",
  courseDetail: (id: string) => `/courses/${id}`,
  learn: (id: string) => `/learn/${id}`,
  myCourses: "/my-courses",
  certificates: "/certificates",
  profile: "/profile",
  leaderboard: "/leaderboard",
  // Instructor (prefixed with /instructor)
  instructorDashboard: "/instructor/dashboard",
  courseBuilder: "/instructor/course-builder",
  students: "/instructor/students",
  quizBuilder: "/instructor/quiz-builder",
  contentLibrary: "/instructor/content-library",
  // Admin (prefixed with /admin)
  adminDashboard: "/admin/dashboard",
  adminUsers: "/admin/users",
  adminCourses: "/admin/courses",
  adminOrganizations: "/admin/organizations",
  adminReports: "/admin/reports",
  adminSettings: "/admin/settings",
} as const;

export const LEARNER_NAV: NavItem[] = [
  { label: "Tổng quan", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "Danh mục khóa học", href: "/courses", icon: "BookOpen" },
  { label: "Khóa học của tôi", href: "/my-courses", icon: "GraduationCap" },
  { label: "Chứng chỉ", href: "/certificates", icon: "Award" },
  { label: "Bảng xếp hạng", href: "/leaderboard", icon: "Trophy" },
  { label: "Hồ sơ cá nhân", href: "/profile", icon: "User" },
];

export const INSTRUCTOR_NAV: NavItem[] = [
  { label: "Tổng quan", href: "/instructor/dashboard", icon: "LayoutDashboard" },
  { label: "Tạo khóa học", href: "/instructor/course-builder", icon: "PlusCircle" },
  { label: "Quản lý học viên", href: "/instructor/students", icon: "Users" },
  { label: "Tạo bài kiểm tra", href: "/instructor/quiz-builder", icon: "ClipboardList" },
  { label: "Thư viện nội dung", href: "/instructor/content-library", icon: "FolderOpen" },
];

export const ADMIN_NAV: NavItem[] = [
  { label: "Tổng quan", href: "/admin/dashboard", icon: "LayoutDashboard" },
  { label: "Quản lý người dùng", href: "/admin/users", icon: "Users" },
  { label: "Quản lý khóa học", href: "/admin/courses", icon: "BookOpen" },
  { label: "Quản lý đơn vị", href: "/admin/organizations", icon: "Building2" },
  { label: "Báo cáo & Thống kê", href: "/admin/reports", icon: "BarChart2" },
  { label: "Cài đặt hệ thống", href: "/admin/settings", icon: "Settings" },
];

export const PUBLIC_NAV = [
  { label: "Trang chủ", href: "/" },
  { label: "Khóa học", href: "/courses" },
  { label: "Về chúng tôi", href: "#about" },
  { label: "Liên hệ", href: "#contact" },
];

export const DOMAIN_COLORS: Record<string, string> = {
  "van-hoa": "bg-primary-100 text-primary-800",
  "the-thao": "bg-blue-100 text-blue-800",
  "du-lich": "bg-green-100 text-green-800",
};

export const LEVEL_COLORS: Record<string, string> = {
  "co-ban": "bg-secondary-100 text-secondary-800",
  "trung-cap": "bg-orange-100 text-orange-800",
  "nang-cao": "bg-red-100 text-red-800",
};

export const STATUS_COLORS: Record<string, string> = {
  enrolled: "bg-gray-100 text-gray-700",
  "in-progress": "bg-blue-100 text-blue-700",
  completed: "bg-green-100 text-green-700",
  draft: "bg-yellow-100 text-yellow-700",
  published: "bg-green-100 text-green-700",
  archived: "bg-gray-100 text-gray-500",
};
