"use client";

import { useState } from "react";
import { Plus, ChevronDown, ChevronRight, ArrowUp, ArrowDown, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LessonEditor } from "./lesson-editor";

interface Lesson {
  id: string;
  title: string;
  type: "video" | "document" | "quiz";
  duration: string;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface ModuleListProps {
  modules: Module[];
  onChange: (modules: Module[]) => void;
}

export function ModuleList({ modules, onChange }: ModuleListProps) {
  const [expanded, setExpanded] = useState<Set<string>>(
    new Set(modules.map((m) => m.id))
  );

  const toggle = (id: string) => {
    const arr = Array.from(expanded);
    const next = new Set(arr.includes(id) ? arr.filter((x) => x !== id) : arr.concat(id));
    setExpanded(next);
  };

  const addModule = () => {
    const newMod: Module = {
      id: `mod-${Date.now()}`,
      title: `Module ${modules.length + 1}`,
      lessons: [],
    };
    onChange([...modules, newMod]);
    setExpanded((prev) => new Set(Array.from(prev).concat(newMod.id)));
  };

  const updateTitle = (id: string, title: string) => {
    onChange(modules.map((m) => (m.id === id ? { ...m, title } : m)));
  };

  const updateLessons = (id: string, lessons: Lesson[]) => {
    onChange(modules.map((m) => (m.id === id ? { ...m, lessons } : m)));
  };

  const moveUp = (idx: number) => {
    if (idx === 0) return;
    const next = [...modules];
    [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
    onChange(next);
  };

  const moveDown = (idx: number) => {
    if (idx === modules.length - 1) return;
    const next = [...modules];
    [next[idx], next[idx + 1]] = [next[idx + 1], next[idx]];
    onChange(next);
  };

  const removeModule = (id: string) => {
    onChange(modules.filter((m) => m.id !== id));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Cấu trúc khóa học</h3>
        <span className="text-xs text-muted-foreground">
          {modules.length} module · {modules.reduce((s, m) => s + m.lessons.length, 0)} bài học
        </span>
      </div>

      {modules.map((mod, idx) => (
        <div key={mod.id} className="border rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 p-3 bg-muted/30">
            <button
              type="button"
              onClick={() => toggle(mod.id)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {expanded.has(mod.id) ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            <span className="text-xs font-medium text-muted-foreground w-6 shrink-0">
              {idx + 1}.
            </span>
            <Input
              value={mod.title}
              onChange={(e) => updateTitle(mod.id, e.target.value)}
              className="h-7 text-sm flex-1 bg-white"
            />
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => moveUp(idx)}
                disabled={idx === 0}
                className="p-1 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => moveDown(idx)}
                disabled={idx === modules.length - 1}
                className="p-1 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              >
                <ArrowDown className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => removeModule(mod.id)}
                className="p-1 text-muted-foreground hover:text-destructive transition-colors"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {expanded.has(mod.id) && (
            <div className="p-3">
              <LessonEditor
                lessons={mod.lessons}
                onChange={(lessons) => updateLessons(mod.id, lessons)}
              />
            </div>
          )}
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={addModule}
        className="w-full border-dashed"
      >
        <Plus className="h-4 w-4 mr-1.5" />
        Thêm module
      </Button>
    </div>
  );
}
