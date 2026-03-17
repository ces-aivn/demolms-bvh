"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type MediaType = "all" | "video" | "document" | "image";

const TABS: { value: MediaType; label: string }[] = [
  { value: "all", label: "Tất cả" },
  { value: "video", label: "Video" },
  { value: "document", label: "Tài liệu" },
  { value: "image", label: "Hình ảnh" },
];

interface ContentFiltersProps {
  type: MediaType;
  onTypeChange: (t: MediaType) => void;
  search: string;
  onSearchChange: (s: string) => void;
}

export function ContentFilters({
  type,
  onTypeChange,
  search,
  onSearchChange,
}: ContentFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <div className="flex gap-1 p-1 bg-muted rounded-lg">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => onTypeChange(tab.value)}
            className={cn(
              "px-3 py-1.5 rounded-md text-sm font-medium transition-all",
              type === tab.value
                ? "bg-white text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative flex-1 w-full sm:w-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Tìm kiếm tệp..."
          className="pl-9 h-9"
        />
      </div>
    </div>
  );
}
