"use client";

import { cn } from "@/lib/utils";

const TYPES = [
  { value: "mcq", label: "Trắc nghiệm" },
  { value: "true-false", label: "Đúng / Sai" },
  { value: "matching", label: "Nối cặp" },
] as const;

type QuestionType = "mcq" | "true-false" | "matching";

interface QuestionTypeSelectorProps {
  value: QuestionType;
  onChange: (v: QuestionType) => void;
}

export function QuestionTypeSelector({ value, onChange }: QuestionTypeSelectorProps) {
  return (
    <div className="flex gap-1 p-1 bg-muted rounded-lg w-fit">
      {TYPES.map((t) => (
        <button
          key={t.value}
          type="button"
          onClick={() => onChange(t.value)}
          className={cn(
            "px-4 py-1.5 rounded-md text-sm font-medium transition-all",
            value === t.value
              ? "bg-white text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
