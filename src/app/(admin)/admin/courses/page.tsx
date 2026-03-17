"use client";

import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { CourseTable } from "@/components/admin/course-table";
import { CourseFilters } from "@/components/admin/course-filters";
import { courses } from "@/lib/mock-data";

export default function AdminCoursesPage() {
  const [domain, setDomain] = useState("all");
  const [status, setStatus] = useState("all");
  const [instructorId, setInstructorId] = useState("all");

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      if (domain !== "all" && c.domain !== domain) return false;
      if (status !== "all" && c.status !== status) return false;
      if (instructorId !== "all" && c.instructorId !== instructorId) return false;
      return true;
    });
  }, [domain, status, instructorId]);

  const published = courses.filter((c) => c.status === "published").length;
  const draft = courses.filter((c) => c.status === "draft").length;

  return (
    <div className="space-y-5">
      <PageHeader
        title="Quản lý Khóa học"
        description={`${courses.length} khóa học — ${published} đã duyệt, ${draft} nháp`}
        actions={
          <Button size="sm" className="gap-1.5">
            <Plus className="h-4 w-4" />
            Thêm khóa học
          </Button>
        }
      />

      <CourseFilters
        domain={domain}
        status={status}
        instructorId={instructorId}
        onDomainChange={setDomain}
        onStatusChange={setStatus}
        onInstructorChange={setInstructorId}
      />

      <CourseTable courses={filtered} />
    </div>
  );
}
