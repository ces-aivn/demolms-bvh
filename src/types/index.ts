export interface SyllabusLesson {
  title: string;
  type: "video" | "document" | "quiz";
  duration: string;
}

export interface SyllabusModule {
  moduleTitle: string;
  lessons: SyllabusLesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  domain: "van-hoa" | "the-thao" | "du-lich";
  level: "co-ban" | "trung-cap" | "nang-cao";
  duration: string;
  lessons: number;
  instructor: string;
  instructorId: string;
  organizationId: string;
  rating: number;
  enrolledCount: number;
  status: "draft" | "published" | "archived";
  syllabus: SyllabusModule[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "learner" | "instructor" | "admin";
  organizationId: string;
  joinedDate: string;
  status?: "active" | "inactive";
}

export interface AdminStats {
  totalUsers: number;
  totalCourses: number;
  totalCompletions: number;
  activeToday: number;
  totalOrgs: number;
  avgRating: number;
  monthlyUsers: number[];
  monthlyCompletions: number[];
  domainDistribution: { label: string; value: number; color: string }[];
}

export interface ActivityLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  target: string;
  timestamp: string;
}

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  description: string;
  lastUpdated: string;
}

export interface PlatformSettings {
  platformName: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  logoUrl: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export interface Organization {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  description: string;
  courseCount: number;
  memberCount: number;
}

export interface Progress {
  userId: string;
  courseId: string;
  completedLessons: number;
  totalLessons: number;
  score: number;
  startDate: string;
  lastAccessed: string;
  status: "enrolled" | "in-progress" | "completed";
}

export interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  issuedDate: string;
  verificationCode: string;
}

export interface Category {
  id: string;
  name: string;
  slug: "van-hoa" | "the-thao" | "du-lich";
  description: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  courseCount: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  badge?: number;
}

export interface Review {
  id: string;
  courseId: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate: string | null;
}

export interface LeaderboardEntry {
  id: string;
  userId: string;
  name: string;
  avatar: string;
  organizationId: string;
  points: number;
  badgesEarned: number;
  coursesCompleted: number;
  rank: number;
}

export interface InstructorStats {
  totalCourses: number;
  totalStudents: number;
  avgCompletion: number;
  avgRating: number;
  monthlyEnrollments: number[];
  topCourses: {
    title: string;
    enrolled: number;
    completion: number;
  }[];
}

export interface StudentProgress {
  id: string;
  name: string;
  email: string;
  courseId: string;
  courseTitle: string;
  completion: number;
  quizScore: number;
  lastActive: string;
  status: "enrolled" | "in-progress" | "completed";
}

export interface QuestionPair {
  left: string;
  right: string;
}

export interface Question {
  id: string;
  type: "mcq" | "true-false" | "matching";
  text: string;
  options?: string[];
  correctAnswer?: number | boolean;
  pairs?: QuestionPair[];
  courseId: string;
}

export interface MediaItem {
  id: string;
  filename: string;
  type: "video" | "document" | "image";
  size: string;
  uploadDate: string;
  thumbnail: string | null;
  duration: string | null;
  courseId: string;
}
