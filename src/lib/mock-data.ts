import type { Course, User, Organization, Progress, Certificate, Category, Review, Badge, LeaderboardEntry, InstructorStats, StudentProgress, Question, MediaItem, AdminStats, ActivityLog, EmailTemplate, PlatformSettings } from "@/types";
import coursesRaw from "@/data/courses.json";
import usersRaw from "@/data/users.json";
import orgsRaw from "@/data/organizations.json";
import progressRaw from "@/data/mock-progress.json";
import certsRaw from "@/data/certificates.json";
import categoriesRaw from "@/data/categories.json";
import reviewsRaw from "@/data/reviews.json";
import badgesRaw from "@/data/badges.json";
import leaderboardRaw from "@/data/leaderboard.json";
import instructorStatsRaw from "@/data/instructor-stats.json";
import studentProgressRaw from "@/data/student-progress.json";
import questionsRaw from "@/data/questions.json";
import contentLibraryRaw from "@/data/content-library.json";
import adminStatsRaw from "@/data/admin-stats.json";
import activityLogsRaw from "@/data/activity-logs.json";
import emailTemplatesRaw from "@/data/email-templates.json";
import settingsRaw from "@/data/settings.json";

export const courses = coursesRaw as Course[];
export const users = usersRaw as User[];
export const organizations = orgsRaw as Organization[];
export const progressRecords = progressRaw as Progress[];
export const certificates = certsRaw as Certificate[];
export const categories = categoriesRaw as Category[];
export const reviews = reviewsRaw as Review[];
export const badges = badgesRaw as Badge[];
export const leaderboard = leaderboardRaw as LeaderboardEntry[];
export const instructorStats = instructorStatsRaw as InstructorStats;
export const studentProgressList = studentProgressRaw as StudentProgress[];
export const questions = questionsRaw as Question[];
export const mediaItems = contentLibraryRaw as MediaItem[];
export const adminStats = adminStatsRaw as AdminStats;
export const activityLogs = activityLogsRaw as ActivityLog[];
export const emailTemplates = emailTemplatesRaw as EmailTemplate[];
export const platformSettings = settingsRaw as PlatformSettings;

// Course helpers
export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getCoursesByDomain(domain: Course["domain"]): Course[] {
  return courses.filter((c) => c.domain === domain);
}

export function getCoursesByOrg(orgId: string): Course[] {
  return courses.filter((c) => c.organizationId === orgId);
}

export function searchCourses(query: string): Course[] {
  const q = query.toLowerCase().trim();
  if (!q) return courses;
  return courses.filter(
    (c) =>
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.instructor.toLowerCase().includes(q)
  );
}

export function filterCourses(opts: {
  domain?: string;
  level?: string;
  query?: string;
}): Course[] {
  let result = courses;
  if (opts.domain) result = result.filter((c) => c.domain === opts.domain);
  if (opts.level) result = result.filter((c) => c.level === opts.level);
  if (opts.query) {
    const q = opts.query.toLowerCase();
    result = result.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    );
  }
  return result;
}

// User helpers
export function getUserById(id: string): User | undefined {
  return users.find((u) => u.id === id);
}

export function getUsersByRole(role: User["role"]): User[] {
  return users.filter((u) => u.role === role);
}

// Organization helpers
export function getOrgById(id: string): Organization | undefined {
  return organizations.find((o) => o.id === id);
}

// Progress helpers
export function getProgressByUser(userId: string): Progress[] {
  return progressRecords.filter((p) => p.userId === userId);
}

export function getProgressByCourse(courseId: string): Progress[] {
  return progressRecords.filter((p) => p.courseId === courseId);
}

export function getUserCourseProgress(
  userId: string,
  courseId: string
): Progress | undefined {
  return progressRecords.find(
    (p) => p.userId === userId && p.courseId === courseId
  );
}

export function getEnrolledCourses(userId: string): Course[] {
  const enrolled = progressRecords
    .filter((p) => p.userId === userId)
    .map((p) => p.courseId);
  return courses.filter((c) => enrolled.includes(c.id));
}

// Certificate helpers
export function getCertsByUser(userId: string): Certificate[] {
  return certificates.filter((c) => c.userId === userId);
}

export function getCertByVerificationCode(code: string): Certificate | undefined {
  return certificates.find((c) => c.verificationCode === code);
}

// Review helpers
export function getReviewsByCourse(courseId: string): Review[] {
  return reviews.filter((r) => r.courseId === courseId);
}

export function getReviewsByUser(userId: string): Review[] {
  return reviews.filter((r) => r.userId === userId);
}

// Badge helpers
export function getEarnedBadges(): Badge[] {
  return badges.filter((b) => b.earned);
}

// Leaderboard helpers
export function getLeaderboardTop(n: number): LeaderboardEntry[] {
  return leaderboard.slice(0, n);
}

// Stats helpers
export function getPlatformStats() {
  return {
    totalCourses: courses.length,
    totalUsers: users.filter((u) => u.role === "learner").length,
    totalInstructors: users.filter((u) => u.role === "instructor").length,
    totalOrgs: organizations.length,
    totalCertificates: certificates.length,
    completedEnrollments: progressRecords.filter(
      (p) => p.status === "completed"
    ).length,
  };
}
