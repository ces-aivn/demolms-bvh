"use client";

import { useState } from "react";
import { CheckCircle, PlayCircle, FileText, HelpCircle, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SyllabusModule } from "@/types";

interface LessonSidebarProps {
  syllabus: SyllabusModule[];
  completedCount: number;
  activeLesson?: { moduleIndex: number; lessonIndex: number };
  onSelectLesson?: (moduleIndex: number, lessonIndex: number) => void;
}

const lessonIcon = {
  video: PlayCircle,
  document: FileText,
  quiz: HelpCircle,
};

export function LessonSidebar({ syllabus, completedCount, activeLesson, onSelectLesson }: LessonSidebarProps) {
  const [collapsed, setCollapsed] = useState<Record<number, boolean>>({});

  let globalIndex = 0;

  return (
    <div className="flex flex-col h-full bg-gray-50/80">
      <div className="px-4 py-3.5 border-b bg-white">
        <h3 className="font-semibold text-sm">Nội dung khóa học</h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          {completedCount} / {syllabus.reduce((s, m) => s + m.lessons.length, 0)} bài hoàn thành
        </p>
      </div>
      <div className="flex-1 overflow-y-auto">
        {syllabus.map((module, mi) => {
          const isCollapsed = collapsed[mi];
          return (
            <div key={mi} className="border-b last:border-0">
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/50 transition-colors"
                onClick={() => setCollapsed((prev) => ({ ...prev, [mi]: !prev[mi] }))}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-foreground leading-snug pr-2">
                    Phần {mi + 1}: {module.moduleTitle}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{module.lessons.length} bài</p>
                </div>
                {isCollapsed ? <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" /> : <ChevronDown className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />}
              </button>

              {!isCollapsed && (
                <div className="pb-1">
                  {module.lessons.map((lesson, li) => {
                    const idx = globalIndex++;
                    const done = idx < completedCount;
                    const isActive = activeLesson?.moduleIndex === mi && activeLesson?.lessonIndex === li;
                    const Icon = lessonIcon[lesson.type] ?? PlayCircle;
                    return (
                      <button
                        key={li}
                        className={cn(
                          "w-full flex items-start gap-2.5 px-4 py-2.5 text-left transition-colors text-xs",
                          isActive ? "bg-primary/10 border-r-2 border-primary" : "hover:bg-muted/50",
                        )}
                        onClick={() => onSelectLesson?.(mi, li)}
                      >
                        <div className="shrink-0 mt-0.5">
                          {done ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <Icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-muted-foreground")} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={cn("leading-snug", done && "line-through text-muted-foreground", isActive && "font-medium text-primary")}>
                            {lesson.title}
                          </p>
                          <p className="text-muted-foreground mt-0.5">{lesson.duration}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
