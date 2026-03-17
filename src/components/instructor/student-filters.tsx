"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StudentFiltersProps {
  search: string;
  onSearchChange: (v: string) => void;
  courseFilter: string;
  onCourseChange: (v: string) => void;
  statusFilter: string;
  onStatusChange: (v: string) => void;
}

const COURSES = [
  { value: "all", label: "Tất cả khóa học" },
  { value: "course-01", label: "Quản lý Di sản Văn hóa Phi vật thể" },
  { value: "course-02", label: "Luật Di sản Văn hóa" },
  { value: "course-03", label: "Bảo tồn Kiến trúc Cổ" },
];

const STATUSES = [
  { value: "all", label: "Tất cả trạng thái" },
  { value: "in-progress", label: "Đang học" },
  { value: "completed", label: "Hoàn thành" },
  { value: "enrolled", label: "Chưa bắt đầu" },
];

export function StudentFilters({
  search,
  onSearchChange,
  courseFilter,
  onCourseChange,
  statusFilter,
  onStatusChange,
}: StudentFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Tìm kiếm học viên..."
          className="pl-9 h-9"
        />
      </div>

      <Select value={courseFilter} onValueChange={onCourseChange}>
        <SelectTrigger className="h-9 w-full sm:w-64">
          <SelectValue placeholder="Khóa học" />
        </SelectTrigger>
        <SelectContent>
          {COURSES.map((c) => (
            <SelectItem key={c.value} value={c.value}>
              {c.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={statusFilter} onValueChange={onStatusChange}>
        <SelectTrigger className="h-9 w-full sm:w-44">
          <SelectValue placeholder="Trạng thái" />
        </SelectTrigger>
        <SelectContent>
          {STATUSES.map((s) => (
            <SelectItem key={s.value} value={s.value}>
              {s.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
