"use client";

import { useState } from "react";
import { Save, BookCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";
import { QuestionTypeSelector } from "@/components/instructor/question-type-selector";
import { QuestionForm } from "@/components/instructor/question-form";
import { QuestionBank } from "@/components/instructor/question-bank";
import { QuizSettings } from "@/components/instructor/quiz-settings";
import { questions as seedQuestions } from "@/lib/mock-data";

type QuestionType = "mcq" | "true-false" | "matching";

interface NewQuestion {
  type: string;
  text: string;
}

export default function QuizBuilderPage() {
  const [qType, setQType] = useState<QuestionType>("mcq");
  const [newQuestions, setNewQuestions] = useState<NewQuestion[]>([]);

  const handleAdd = (q: { type: QuestionType; text: string }) => {
    setNewQuestions((prev) => [...prev, q]);
  };

  const totalCount = seedQuestions.length + newQuestions.length;

  return (
    <div className="space-y-5">
      <PageHeader
        title="Tạo bài kiểm tra"
        description="Xây dựng ngân hàng câu hỏi và cấu hình bài kiểm tra"
        actions={
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Save className="h-4 w-4 mr-1.5" />
              Lưu nháp
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-800">
              <BookCheck className="h-4 w-4 mr-1.5" />
              Lưu bài kiểm tra
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left — question editor */}
        <div className="lg:col-span-3 space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold">Soạn câu hỏi</CardTitle>
                <span className="text-xs text-muted-foreground">
                  {totalCount} câu hỏi trong ngân hàng
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Loại câu hỏi đang soạn
                </p>
                <QuestionTypeSelector value={qType} onChange={setQType} />
              </div>
              <QuestionForm onAdd={handleAdd} />
            </CardContent>
          </Card>

          <QuizSettings />
        </div>

        {/* Right — question bank */}
        <div className="lg:col-span-2">
          <Card className="sticky top-4">
            <CardContent className="pt-4">
              <QuestionBank
                questions={seedQuestions}
                newQuestions={newQuestions}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
