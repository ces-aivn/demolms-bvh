"use client";

import { useState } from "react";
import { ChevronLeft, BookOpen } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { VideoPlayer } from "@/components/learner/video-player";
import { LessonSidebar } from "@/components/learner/lesson-sidebar";
import { NotesPanel } from "@/components/learner/notes-panel";
import { InlineQuiz } from "@/components/learner/inline-quiz";
import { ProgressRing } from "@/components/shared/progress-ring";
import { getProgressPercent } from "@/lib/utils";
import Link from "next/link";
import type { Course, Progress } from "@/types";

interface Props {
  course: Course;
  progress: Progress | null;
}

export function LearnPageClient({ course, progress }: Props) {
  const completedCount = progress?.completedLessons ?? 0;
  const totalLessons = course.syllabus.reduce((s, m) => s + m.lessons.length, 0);
  const percent = getProgressPercent(completedCount, totalLessons);

  const [activeLesson, setActiveLesson] = useState({ moduleIndex: 0, lessonIndex: 0 });

  const currentModule = course.syllabus[activeLesson.moduleIndex];
  const currentLesson = currentModule?.lessons[activeLesson.lessonIndex];

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b bg-white/95 backdrop-blur-sm shrink-0 shadow-sm">
        <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground" asChild>
          <Link href={`/courses/${course.id}`}>
            <ChevronLeft className="h-4 w-4" />
            Quay lại
          </Link>
        </Button>
        <div className="h-4 w-px bg-border" />
        <BookOpen className="h-4 w-4 text-primary shrink-0" />
        <h1 className="text-sm font-semibold truncate flex-1">{course.title}</h1>
        <div className="flex items-center gap-2 shrink-0">
          <ProgressRing percentage={percent} size={36} strokeWidth={4} />
          <span className="text-xs text-muted-foreground hidden sm:block">
            {completedCount}/{totalLessons} bài
          </span>
        </div>
      </div>

      {/* Main area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Content area — left ~70% */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="p-4 pb-0">
            <VideoPlayer
              title={currentLesson?.title ?? "Chọn bài học để bắt đầu"}
              duration={currentLesson?.duration}
            />
          </div>

          <div className="px-4 pt-4 pb-2">
            <h2 className="font-bold text-lg leading-snug mb-1">
              {currentLesson?.title ?? "—"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {currentModule?.moduleTitle} · {currentLesson?.duration}
            </p>
            <div className="flex gap-2 mt-3">
              <Button size="sm" className="bg-primary hover:bg-primary-800">
                Đánh dấu hoàn thành
              </Button>
              <Button size="sm" variant="outline">Bài tiếp theo</Button>
            </div>
          </div>

          <div className="px-4 pb-6 flex-1">
            <Tabs defaultValue="content" className="mt-3">
              <TabsList>
                <TabsTrigger value="content">Nội dung</TabsTrigger>
                <TabsTrigger value="notes">Ghi chú</TabsTrigger>
                <TabsTrigger value="quiz">Bài tập</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="mt-4">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Trong bài học này, chúng ta sẽ tìm hiểu về{" "}
                    <strong className="text-foreground">{currentLesson?.title}</strong>.
                  </p>
                  <p>
                    Nội dung bài giảng bao gồm các khái niệm cơ bản, ví dụ thực tiễn từ công tác quản lý nhà nước
                    trong lĩnh vực văn hóa, thể thao và du lịch tại Việt Nam.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Tổng quan và phân loại theo quy định pháp luật hiện hành</li>
                    <li>Các nguyên tắc và tiêu chí đánh giá theo chuẩn quốc tế</li>
                    <li>Ứng dụng thực tiễn trong công tác quản lý tại địa phương</li>
                    <li>Bài tập tình huống và thảo luận nhóm</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="notes" className="mt-4">
                <NotesPanel />
              </TabsContent>

              <TabsContent value="quiz" className="mt-4">
                <InlineQuiz />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Lesson sidebar — right ~30% */}
        <div className="hidden lg:flex w-80 xl:w-96 shrink-0 flex-col border-l overflow-hidden">
          <LessonSidebar
            syllabus={course.syllabus}
            completedCount={completedCount}
            activeLesson={activeLesson}
            onSelectLesson={(mi, li) => setActiveLesson({ moduleIndex: mi, lessonIndex: li })}
          />
        </div>
      </div>
    </div>
  );
}
