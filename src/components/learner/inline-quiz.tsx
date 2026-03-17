"use client";

import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

const DEMO_QUIZ: QuizQuestion = {
  question: "Theo Công ước UNESCO 2003, di sản văn hóa phi vật thể bao gồm những loại nào sau đây?",
  options: [
    "Truyền thống và biểu đạt truyền khẩu, nghệ thuật trình diễn, tập quán xã hội",
    "Chỉ bao gồm các công trình kiến trúc cổ đại",
    "Các tài liệu lịch sử và bản đồ cổ",
    "Tất cả các hiện vật trong bảo tàng quốc gia",
  ],
  correct: 0,
};

export function InlineQuiz() {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = selected === DEMO_QUIZ.correct;

  function handleSubmit() {
    if (selected === null) return;
    setSubmitted(true);
  }

  function handleReset() {
    setSelected(null);
    setSubmitted(false);
  }

  return (
    <div className="rounded-xl border bg-muted/30 p-5 space-y-4">
      <div className="flex items-start gap-2">
        <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
          <span className="text-white text-xs font-bold">?</span>
        </div>
        <p className="text-sm font-medium leading-snug">{DEMO_QUIZ.question}</p>
      </div>

      <div className="space-y-2">
        {DEMO_QUIZ.options.map((opt, i) => {
          const isSelected = selected === i;
          const isRight = i === DEMO_QUIZ.correct;

          return (
            <button
              key={i}
              disabled={submitted}
              onClick={() => setSelected(i)}
              className={cn(
                "w-full text-left text-sm px-4 py-3 rounded-lg border transition-all",
                !submitted && !isSelected && "bg-background hover:bg-muted/60 border-border",
                !submitted && isSelected && "bg-primary/10 border-primary text-primary font-medium",
                submitted && isRight && "bg-green-50 border-green-500 text-green-700 font-medium",
                submitted && isSelected && !isRight && "bg-red-50 border-red-400 text-red-700",
                submitted && !isSelected && !isRight && "opacity-50",
              )}
            >
              <div className="flex items-start gap-2">
                <span className="shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-xs mt-0.5">
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{opt}</span>
                {submitted && isRight && <CheckCircle className="h-4 w-4 text-green-500 shrink-0 ml-auto mt-0.5" />}
                {submitted && isSelected && !isRight && <XCircle className="h-4 w-4 text-red-500 shrink-0 ml-auto mt-0.5" />}
              </div>
            </button>
          );
        })}
      </div>

      {submitted ? (
        <div className={cn("rounded-lg p-3 text-sm", isCorrect ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700")}>
          {isCorrect ? "Chính xác! Bạn đã trả lời đúng." : "Chưa đúng. Đáp án đúng là: A. Truyền thống và biểu đạt truyền khẩu..."}
          <Button variant="ghost" size="sm" className="ml-2 h-6 text-xs" onClick={handleReset}>Làm lại</Button>
        </div>
      ) : (
        <Button
          size="sm"
          className="bg-primary hover:bg-primary-800"
          disabled={selected === null}
          onClick={handleSubmit}
        >
          Kiểm tra
        </Button>
      )}
    </div>
  );
}
