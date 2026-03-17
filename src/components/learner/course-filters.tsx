"use client";

import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchBar } from "@/components/shared/search-bar";
import type { Organization } from "@/types";

export interface FilterState {
  domain: string;
  level: string;
  orgId: string;
  query: string;
}

interface CourseFiltersProps {
  organizations: Organization[];
  onChange: (filters: FilterState) => void;
}

const EMPTY: FilterState = { domain: "", level: "", orgId: "", query: "" };

export function CourseFilters({ organizations, onChange }: CourseFiltersProps) {
  const [filters, setFilters] = useState<FilterState>(EMPTY);

  function update(patch: Partial<FilterState>) {
    const next = { ...filters, ...patch };
    setFilters(next);
    onChange(next);
  }

  function reset() {
    setFilters(EMPTY);
    onChange(EMPTY);
  }

  const hasActive = Object.values(filters).some(Boolean);

  return (
    <div className="flex flex-wrap gap-3 items-end mb-6 p-4 bg-white/80 rounded-xl border shadow-sm">
      <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground shrink-0">
        <SlidersHorizontal className="h-4 w-4" />
        Lọc:
      </div>

      <Select value={filters.domain || "all"} onValueChange={(v) => update({ domain: v === "all" ? "" : v })}>
        <SelectTrigger className="h-9 w-40 bg-background">
          <SelectValue placeholder="Lĩnh vực" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tất cả lĩnh vực</SelectItem>
          <SelectItem value="van-hoa">Văn hóa</SelectItem>
          <SelectItem value="the-thao">Thể thao</SelectItem>
          <SelectItem value="du-lich">Du lịch</SelectItem>
        </SelectContent>
      </Select>

      <Select value={filters.level || "all"} onValueChange={(v) => update({ level: v === "all" ? "" : v })}>
        <SelectTrigger className="h-9 w-36 bg-background">
          <SelectValue placeholder="Trình độ" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tất cả trình độ</SelectItem>
          <SelectItem value="co-ban">Cơ bản</SelectItem>
          <SelectItem value="trung-cap">Trung cấp</SelectItem>
          <SelectItem value="nang-cao">Nâng cao</SelectItem>
        </SelectContent>
      </Select>

      <Select value={filters.orgId || "all"} onValueChange={(v) => update({ orgId: v === "all" ? "" : v })}>
        <SelectTrigger className="h-9 w-44 bg-background">
          <SelectValue placeholder="Đơn vị" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tất cả đơn vị</SelectItem>
          {organizations.map((org) => (
            <SelectItem key={org.id} value={org.id}>{org.shortName}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <SearchBar
        placeholder="Tìm kiếm khóa học..."
        onSearch={(q) => update({ query: q })}
        defaultValue={filters.query}
        className="flex-1 min-w-48"
        size="sm"
      />

      {hasActive && (
        <Button variant="ghost" size="sm" className="h-9 gap-1 text-muted-foreground" onClick={reset}>
          <X className="h-3.5 w-3.5" />
          Xóa bộ lọc
        </Button>
      )}
    </div>
  );
}
