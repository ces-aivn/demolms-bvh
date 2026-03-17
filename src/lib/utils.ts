import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateVi(dateStr: string): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

export function formatNumberVi(num: number): string {
  return new Intl.NumberFormat("vi-VN").format(num);
}

export function formatCurrencyVi(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

export function getProgressPercent(completed: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

export function getDomainLabel(domain: string): string {
  const labels: Record<string, string> = {
    "van-hoa": "Văn hóa",
    "the-thao": "Thể thao",
    "du-lich": "Du lịch",
  };
  return labels[domain] ?? domain;
}

export function getLevelLabel(level: string): string {
  const labels: Record<string, string> = {
    "co-ban": "Cơ bản",
    "trung-cap": "Trung cấp",
    "nang-cao": "Nâng cao",
  };
  return labels[level] ?? level;
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    enrolled: "Đã đăng ký",
    "in-progress": "Đang học",
    completed: "Hoàn thành",
    draft: "Bản nháp",
    published: "Đã xuất bản",
    archived: "Lưu trữ",
  };
  return labels[status] ?? status;
}

export function getRoleLabel(role: string): string {
  const labels: Record<string, string> = {
    learner: "Học viên",
    instructor: "Giảng viên",
    admin: "Quản trị viên",
  };
  return labels[role] ?? role;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
}
