"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QuestionTypeSelector } from "./question-type-selector";

type QuestionType = "mcq" | "true-false" | "matching";

interface QuestionFormProps {
  onAdd: (q: { type: QuestionType; text: string }) => void;
}

export function QuestionForm({ onAdd }: QuestionFormProps) {
  const [type, setType] = useState<QuestionType>("mcq");
  const [text, setText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctMcq, setCorrectMcq] = useState(0);
  const [correctTf, setCorrectTf] = useState<"true" | "false">("true");

  const updateOption = (i: number, val: string) => {
    const next = [...options];
    next[i] = val;
    setOptions(next);
  };

  const handleAdd = () => {
    if (!text.trim()) return;
    onAdd({ type, text });
    setText("");
    setOptions(["", "", "", ""]);
    setCorrectMcq(0);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Loại câu hỏi
        </label>
        <QuestionTypeSelector value={type} onChange={setType} />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="q-text" className="text-sm font-medium">
          Nội dung câu hỏi <span className="text-destructive">*</span>
        </label>
        <textarea
          id="q-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nhập nội dung câu hỏi..."
          className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {type === "mcq" && (
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Các lựa chọn <span className="text-xs text-muted-foreground">(chọn đáp án đúng)</span>
          </label>
          {options.map((opt, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="radio"
                name="correct-mcq"
                checked={correctMcq === i}
                onChange={() => setCorrectMcq(i)}
                className="accent-primary shrink-0"
              />
              <Input
                value={opt}
                onChange={(e) => updateOption(i, e.target.value)}
                placeholder={`Lựa chọn ${String.fromCharCode(65 + i)}`}
                className="h-8 text-sm"
              />
            </div>
          ))}
        </div>
      )}

      {type === "true-false" && (
        <div className="space-y-2">
          <label className="text-sm font-medium">Đáp án đúng</label>
          <div className="flex gap-4">
            {(["true", "false"] as const).map((v) => (
              <label key={v} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="correct-tf"
                  checked={correctTf === v}
                  onChange={() => setCorrectTf(v)}
                  className="accent-primary"
                />
                <span className="text-sm">{v === "true" ? "Đúng" : "Sai"}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {type === "matching" && (
        <div className="p-3 bg-muted/30 rounded-lg">
          <p className="text-xs text-muted-foreground">
            Câu hỏi nối cặp: nhập nội dung câu hỏi và thêm vào ngân hàng. Các cặp sẽ được cấu hình sau.
          </p>
        </div>
      )}

      <Button
        type="button"
        onClick={handleAdd}
        disabled={!text.trim()}
        variant="outline"
        className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
        size="sm"
      >
        <Plus className="h-4 w-4 mr-1.5" />
        Thêm câu hỏi
      </Button>
    </div>
  );
}
