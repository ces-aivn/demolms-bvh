"use client";

import { Play, FileText, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const TYPES = [
  { value: "video", label: "Video", icon: Play },
  { value: "document", label: "Tài liệu", icon: FileText },
  { value: "quiz", label: "Bài kiểm tra", icon: HelpCircle },
] as const;

type ContentType = "video" | "document" | "quiz";

interface ContentTypeSelectorProps {
  value: ContentType;
  onChange: (value: ContentType) => void;
}

export function ContentTypeSelector({ value, onChange }: ContentTypeSelectorProps) {
  return (
    <div className="flex gap-2">
      {TYPES.map((t) => {
        const Icon = t.icon;
        const active = value === t.value;
        return (
          <button
            key={t.value}
            type="button"
            onClick={() => onChange(t.value)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-all",
              active
                ? "border-primary bg-primary text-white shadow-sm"
                : "border-border bg-white text-muted-foreground hover:border-primary hover:text-primary"
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
