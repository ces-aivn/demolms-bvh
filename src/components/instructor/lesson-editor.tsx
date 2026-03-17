"use client";

import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ContentTypeSelector } from "./content-type-selector";

interface Lesson {
  id: string;
  title: string;
  type: "video" | "document" | "quiz";
  duration: string;
}

interface LessonEditorProps {
  lessons: Lesson[];
  onChange: (lessons: Lesson[]) => void;
}

export function LessonEditor({ lessons, onChange }: LessonEditorProps) {
  const addLesson = () => {
    onChange([
      ...lessons,
      { id: `l-${Date.now()}`, title: "", type: "video", duration: "30 phút" },
    ]);
  };

  const remove = (id: string) => onChange(lessons.filter((l) => l.id !== id));

  const update = (id: string, field: keyof Lesson, value: string) => {
    onChange(lessons.map((l) => (l.id === id ? { ...l, [field]: value } : l)));
  };

  return (
    <div className="pl-4 border-l-2 border-muted space-y-2 mt-2">
      {lessons.map((lesson, idx) => (
        <div key={lesson.id} className="bg-muted/30 rounded-lg p-3 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-5 shrink-0">{idx + 1}.</span>
            <Input
              value={lesson.title}
              onChange={(e) => update(lesson.id, "title", e.target.value)}
              placeholder="Tên bài học..."
              className="h-7 text-sm flex-1"
            />
            <Input
              value={lesson.duration}
              onChange={(e) => update(lesson.id, "duration", e.target.value)}
              placeholder="30 phút"
              className="h-7 text-sm w-24 shrink-0"
            />
            <button
              type="button"
              onClick={() => remove(lesson.id)}
              className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
          <ContentTypeSelector
            value={lesson.type}
            onChange={(t) => update(lesson.id, "type", t)}
          />
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={addLesson}
        className="w-full text-xs h-8 border-dashed"
      >
        <Plus className="h-3.5 w-3.5 mr-1" />
        Thêm bài học
      </Button>
    </div>
  );
}
