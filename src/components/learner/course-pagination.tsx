"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CoursePaginationProps {
  total: number;
  perPage: number;
  page: number;
  onPageChange: (p: number) => void;
}

export function CoursePagination({ total, perPage, page, onPageChange }: CoursePaginationProps) {
  const totalPages = Math.ceil(total / perPage);
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-1 mt-8">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {pages.map((p) => (
        <Button
          key={p}
          variant={p === page ? "default" : "ghost"}
          size="icon"
          className={cn("h-8 w-8 text-sm", p === page && "bg-primary hover:bg-primary-800")}
          onClick={() => onPageChange(p)}
        >
          {p}
        </Button>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
