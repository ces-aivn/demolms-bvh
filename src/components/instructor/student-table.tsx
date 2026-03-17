"use client";

import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { StudentProgress } from "@/types";

interface StudentTableProps {
  students: StudentProgress[];
  onRowClick: (student: StudentProgress) => void;
}

type SortField = "name" | "completion" | "quizScore" | "lastActive";

const STATUS_MAP = {
  "in-progress": { label: "Đang học", className: "bg-blue-100 text-blue-700" },
  completed: { label: "Hoàn thành", className: "bg-green-100 text-green-700" },
  enrolled: { label: "Chưa bắt đầu", className: "bg-gray-100 text-gray-600" },
};

export function StudentTable({ students, onRowClick }: StudentTableProps) {
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc((p) => !p);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const sorted = [...students].sort((a, b) => {
    let cmp = 0;
    if (sortField === "name") cmp = a.name.localeCompare(b.name, "vi");
    else if (sortField === "completion") cmp = a.completion - b.completion;
    else if (sortField === "quizScore") cmp = a.quizScore - b.quizScore;
    else if (sortField === "lastActive")
      cmp = new Date(a.lastActive).getTime() - new Date(b.lastActive).getTime();
    return sortAsc ? cmp : -cmp;
  });

  const SortHeader = ({
    field,
    children,
  }: {
    field: SortField;
    children: React.ReactNode;
  }) => (
    <TableHead
      className="cursor-pointer select-none hover:bg-muted/50 transition-colors"
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center gap-1">
        {children}
        <ArrowUpDown className="h-3.5 w-3.5 text-muted-foreground" />
      </div>
    </TableHead>
  );

  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">STT</TableHead>
            <SortHeader field="name">Họ tên</SortHeader>
            <TableHead className="hidden md:table-cell">Email</TableHead>
            <SortHeader field="completion">Tiến độ</SortHeader>
            <SortHeader field="quizScore">Điểm TB</SortHeader>
            <SortHeader field="lastActive">
              <span className="hidden sm:inline">Hoạt động cuối</span>
              <span className="sm:hidden">Cuối</span>
            </SortHeader>
            <TableHead>Trạng thái</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-muted-foreground py-8 text-sm">
                Không tìm thấy học viên phù hợp.
              </TableCell>
            </TableRow>
          )}
          {sorted.map((s, idx) => {
            const status = STATUS_MAP[s.status];
            return (
              <TableRow
                key={s.id}
                className="cursor-pointer hover:bg-muted/30 transition-colors"
                onClick={() => onRowClick(s)}
              >
                <TableCell className="text-muted-foreground text-xs font-mono">
                  {idx + 1}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                      <span className="text-primary text-xs font-bold">
                        {s.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium">{s.name}</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell text-xs text-muted-foreground">
                  {s.email}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 min-w-[80px]">
                    <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${s.completion}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium w-9 text-right">
                      {s.completion}%
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-sm font-medium">
                  {s.quizScore > 0 ? s.quizScore : "—"}
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">
                  {new Date(s.lastActive).toLocaleDateString("vi-VN")}
                </TableCell>
                <TableCell>
                  <Badge className={`text-[10px] ${status.className}`}>
                    {status.label}
                  </Badge>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
