"use client";

import { useState, useMemo } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { CourseFilters } from "@/components/learner/course-filters";
import { CourseGrid } from "@/components/learner/course-grid";
import { CoursePagination } from "@/components/learner/course-pagination";
import { courses, organizations } from "@/lib/mock-data";
import type { FilterState } from "@/components/learner/course-filters";

const PER_PAGE = 6;

export default function CourseCatalogPage() {
  const [filters, setFilters] = useState<FilterState>({ domain: "", level: "", orgId: "", query: "" });
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = courses.filter((c) => c.status === "published");
    if (filters.domain) result = result.filter((c) => c.domain === filters.domain);
    if (filters.level) result = result.filter((c) => c.level === filters.level);
    if (filters.orgId) result = result.filter((c) => c.organizationId === filters.orgId);
    if (filters.query) {
      const q = filters.query.toLowerCase();
      result = result.filter(
        (c) => c.title.toLowerCase().includes(q) || c.instructor.toLowerCase().includes(q)
      );
    }
    return result;
  }, [filters]);

  function handleFiltersChange(f: FilterState) {
    setFilters(f);
    setPage(1);
  }

  return (
    <div>
      <PageHeader
        title="Danh mục Khóa học"
        description="Khám phá các khóa học chuyên môn nghiệp vụ ngành Văn hóa, Thể thao và Du lịch"
      />
      <CourseFilters organizations={organizations} onChange={handleFiltersChange} />
      <CourseGrid courses={filtered} page={page} perPage={PER_PAGE} />
      <CoursePagination
        total={filtered.length}
        perPage={PER_PAGE}
        page={page}
        onPageChange={setPage}
      />
    </div>
  );
}
