"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { users } from "@/lib/mock-data";

interface CourseFiltersProps {
  domain: string;
  status: string;
  instructorId: string;
  onDomainChange: (v: string) => void;
  onStatusChange: (v: string) => void;
  onInstructorChange: (v: string) => void;
}

export function CourseFilters({
  domain, status, instructorId,
  onDomainChange, onStatusChange, onInstructorChange,
}: CourseFiltersProps) {
  const instructors = users.filter((u) => u.role === "instructor");

  return (
    <div className="flex flex-wrap gap-3">
      <Select value={domain} onValueChange={onDomainChange}>
        <SelectTrigger className="h-9 w-40 text-sm">
          <SelectValue placeholder="Lĩnh vực" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tất cả lĩnh vực</SelectItem>
          <SelectItem value="van-hoa">Văn hóa</SelectItem>
          <SelectItem value="the-thao">Thể thao</SelectItem>
          <SelectItem value="du-lich">Du lịch</SelectItem>
        </SelectContent>
      </Select>

      <Select value={status} onValueChange={onStatusChange}>
        <SelectTrigger className="h-9 w-44 text-sm">
          <SelectValue placeholder="Trạng thái" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tất cả trạng thái</SelectItem>
          <SelectItem value="published">Đã duyệt</SelectItem>
          <SelectItem value="draft">Nháp</SelectItem>
          <SelectItem value="archived">Lưu trữ</SelectItem>
        </SelectContent>
      </Select>

      <Select value={instructorId} onValueChange={onInstructorChange}>
        <SelectTrigger className="h-9 w-52 text-sm">
          <SelectValue placeholder="Giảng viên" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tất cả giảng viên</SelectItem>
          {instructors.map((inst) => (
            <SelectItem key={inst.id} value={inst.id}>{inst.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
