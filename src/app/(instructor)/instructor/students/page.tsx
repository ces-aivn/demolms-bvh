"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { StudentTable } from "@/components/instructor/student-table";
import { StudentFilters } from "@/components/instructor/student-filters";
import { StudentDetailModal } from "@/components/instructor/student-detail-modal";
import { ExportButton } from "@/components/instructor/export-button";
import { studentProgressList } from "@/lib/mock-data";
import type { StudentProgress } from "@/types";

export default function StudentsPage() {
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selected, setSelected] = useState<StudentProgress | null>(null);

  const filtered = studentProgressList.filter((s) => {
    const matchSearch =
      !search ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase());
    const matchCourse = courseFilter === "all" || s.courseId === courseFilter;
    const matchStatus = statusFilter === "all" || s.status === statusFilter;
    return matchSearch && matchCourse && matchStatus;
  });

  const completedCount = studentProgressList.filter((s) => s.status === "completed").length;
  const inProgressCount = studentProgressList.filter((s) => s.status === "in-progress").length;

  return (
    <div className="space-y-5">
      <PageHeader
        title="Quản lý học viên"
        description={`${studentProgressList.length} học viên · ${completedCount} hoàn thành · ${inProgressCount} đang học`}
        actions={<ExportButton />}
      />

      <Card>
        <div className="p-4 border-b">
          <StudentFilters
            search={search}
            onSearchChange={setSearch}
            courseFilter={courseFilter}
            onCourseChange={setCourseFilter}
            statusFilter={statusFilter}
            onStatusChange={setStatusFilter}
          />
        </div>
        <CardContent className="p-0">
          <StudentTable students={filtered} onRowClick={setSelected} />
        </CardContent>
      </Card>

      <StudentDetailModal
        student={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
