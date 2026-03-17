"use client";

import { Eye, CheckCircle, XCircle, Star, EyeOff } from "lucide-react";
import { DataTable, type Column } from "@/components/shared/data-table";
import { ActionDropdown } from "@/components/shared/action-dropdown";
import { ApprovalBadge } from "@/components/admin/approval-badge";
import type { Course } from "@/types";

const domainLabel: Record<string, string> = {
  "van-hoa": "Văn hóa",
  "the-thao": "Thể thao",
  "du-lich": "Du lịch",
};

const domainClass: Record<string, string> = {
  "van-hoa": "bg-red-100 text-red-800 border-red-200",
  "the-thao": "bg-blue-100 text-blue-800 border-blue-200",
  "du-lich": "bg-green-100 text-green-800 border-green-200",
};

interface CourseTableProps {
  courses: Course[];
}

export function CourseTable({ courses }: CourseTableProps) {
  const columns: Column<Record<string, unknown>>[] = [
    {
      key: "title",
      label: "Tên khóa học",
      sortable: true,
      render: (val) => (
        <span className="font-medium text-sm max-w-xs block truncate">{String(val)}</span>
      ),
    },
    {
      key: "instructor",
      label: "Giảng viên",
      sortable: true,
      render: (val) => <span className="text-sm">{String(val)}</span>,
    },
    {
      key: "domain",
      label: "Lĩnh vực",
      sortable: true,
      render: (val) => {
        const key = String(val);
        return (
          <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${domainClass[key] ?? ""}`}>
            {domainLabel[key] ?? key}
          </span>
        );
      },
    },
    {
      key: "status",
      label: "Trạng thái",
      sortable: true,
      render: (val) => <ApprovalBadge status={String(val)} />,
    },
    {
      key: "enrolledCount",
      label: "Đã đăng ký",
      sortable: true,
      render: (val) => (
        <span className="text-sm font-medium">{Number(val).toLocaleString("vi-VN")}</span>
      ),
    },
    {
      key: "rating",
      label: "Đánh giá",
      sortable: true,
      render: (val) => (
        <span className="text-sm flex items-center gap-1">
          <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
          {Number(val).toFixed(1)}
        </span>
      ),
    },
    {
      key: "id",
      label: "Hành động",
      render: () => (
        <ActionDropdown
          actions={[
            { label: "Xem khóa học", icon: Eye },
            { label: "Duyệt", icon: CheckCircle },
            { label: "Từ chối", icon: XCircle, variant: "destructive" },
            { label: "Nổi bật", icon: Star },
            { label: "Ẩn khóa học", icon: EyeOff, variant: "destructive" },
          ]}
        />
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={courses as unknown as Record<string, unknown>[]}
      searchPlaceholder="Tìm kiếm khóa học..."
      searchKeys={["title", "instructor"]}
      pageSize={10}
    />
  );
}
