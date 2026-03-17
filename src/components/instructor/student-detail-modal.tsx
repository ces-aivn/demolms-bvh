"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, BookOpen } from "lucide-react";
import type { StudentProgress } from "@/types";

interface StudentDetailModalProps {
  student: StudentProgress | null;
  open: boolean;
  onClose: () => void;
}

const STATUS_MAP = {
  "in-progress": { label: "Đang học", className: "bg-blue-100 text-blue-700" },
  completed: { label: "Hoàn thành", className: "bg-green-100 text-green-700" },
  enrolled: { label: "Chưa bắt đầu", className: "bg-gray-100 text-gray-600" },
};

const MOCK_LESSONS = [
  "Khái niệm và phân loại di sản phi vật thể",
  "Công ước UNESCO 2003",
  "Hệ thống pháp luật Việt Nam về di sản",
  "Phương pháp nhận diện di sản phi vật thể",
  "Lập hồ sơ khoa học di sản",
  "Bảo tồn di sản sống",
  "Ứng dụng thực tiễn",
];

export function StudentDetailModal({ student, open, onClose }: StudentDetailModalProps) {
  if (!student) return null;

  const completedCount = Math.round((student.completion / 100) * MOCK_LESSONS.length);
  const status = STATUS_MAP[student.status];

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-base">Chi tiết học viên</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Profile */}
          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
            <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold text-lg">
                {student.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm">{student.name}</p>
              <p className="text-xs text-muted-foreground">{student.email}</p>
            </div>
            <Badge className={`text-xs shrink-0 ${status.className}`}>
              {status.label}
            </Badge>
          </div>

          {/* Course info */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Khóa học đang học
            </p>
            <div className="flex items-center gap-2 p-2 border rounded-lg">
              <BookOpen className="h-4 w-4 text-primary shrink-0" />
              <p className="text-sm font-medium line-clamp-1">{student.courseTitle}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <p className="text-2xl font-bold text-primary">{student.completion}%</p>
              <p className="text-xs text-muted-foreground mt-0.5">Tiến độ</p>
            </div>
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">
                {student.quizScore > 0 ? student.quizScore : "—"}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">Điểm TB</p>
            </div>
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <p className="text-2xl font-bold text-green-600">{completedCount}</p>
              <p className="text-xs text-muted-foreground mt-0.5">Bài hoàn thành</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Tiến độ tổng thể</span>
              <span className="font-medium text-primary">{student.completion}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${student.completion}%` }}
              />
            </div>
          </div>

          {/* Lesson completion list */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Danh sách bài học
            </p>
            <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
              {MOCK_LESSONS.map((lesson, i) => {
                const done = i < completedCount;
                return (
                  <div key={i} className="flex items-center gap-2">
                    {done ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground shrink-0" />
                    )}
                    <span className={`text-xs ${done ? "text-foreground" : "text-muted-foreground"}`}>
                      {lesson}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Hoạt động cuối:{" "}
            <span className="font-medium">
              {new Date(student.lastActive).toLocaleDateString("vi-VN")}
            </span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
