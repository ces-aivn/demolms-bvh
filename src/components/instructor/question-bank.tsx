"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import type { Question } from "@/types";

interface QuestionBankProps {
  questions: Question[];
  newQuestions: { type: string; text: string }[];
}

const TYPE_MAP: Record<string, { label: string; className: string }> = {
  mcq: { label: "Trắc nghiệm", className: "bg-blue-100 text-blue-700" },
  "true-false": { label: "Đúng/Sai", className: "bg-green-100 text-green-700" },
  matching: { label: "Nối cặp", className: "bg-purple-100 text-purple-700" },
};

export function QuestionBank({ questions, newQuestions }: QuestionBankProps) {
  const [search, setSearch] = useState("");
  const [deleted, setDeleted] = useState<Set<string>>(new Set());

  const allQ = [
    ...questions.map((q) => ({ id: q.id, type: q.type, text: q.text })),
    ...newQuestions.map((q, i) => ({ id: `new-${i}`, type: q.type, text: q.text })),
  ].filter((q) => !deleted.has(q.id));

  const filtered = allQ.filter(
    (q) => !search || q.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">
          Ngân hàng câu hỏi
          <span className="ml-1.5 text-xs font-normal text-muted-foreground">
            ({allQ.length})
          </span>
        </h3>
      </div>

      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Tìm câu hỏi..."
        className="h-8 text-sm"
      />

      <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1">
        {filtered.length === 0 && (
          <p className="text-xs text-muted-foreground text-center py-6">
            Chưa có câu hỏi nào.
          </p>
        )}
        {filtered.map((q, idx) => {
          const badge = TYPE_MAP[q.type] ?? TYPE_MAP.mcq;
          return (
            <div
              key={q.id}
              className="border rounded-lg p-3 hover:bg-muted/20 transition-colors group"
            >
              <div className="flex items-start gap-2">
                <span className="text-xs text-muted-foreground font-mono w-5 shrink-0 mt-0.5">
                  {idx + 1}.
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs leading-snug line-clamp-2">{q.text}</p>
                  <Badge className={`mt-1.5 text-[10px] ${badge.className}`}>
                    {badge.label}
                  </Badge>
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  <button
                    type="button"
                    className="p-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeleted((p) => new Set(Array.from(p).concat(q.id)))}
                    className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
