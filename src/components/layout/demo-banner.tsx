"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { X, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ROLE_LABELS: Record<string, string> = {
  admin: "Quản trị viên",
  instructor: "Giảng viên",
  learner: "Học viên",
};

function detectRole(pathname: string): string {
  if (pathname.startsWith("/admin")) return "admin";
  if (pathname.startsWith("/instructor")) return "instructor";
  return "learner";
}

const ROLE_BADGE_CLASSES: Record<string, string> = {
  admin: "bg-navy-700 text-white border-navy-600",
  instructor: "bg-primary/20 text-primary border-primary/30",
  learner: "bg-secondary/20 text-secondary-foreground border-secondary/30",
};

export function DemoBanner() {
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const role = detectRole(pathname);

  if (!visible) return null;

  return (
    <div className="w-full bg-slate-100 border-b border-slate-200 px-4 py-1.5 flex items-center justify-between text-xs text-slate-600 z-50">
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <Info className="h-3.5 w-3.5 shrink-0 text-slate-500" />
        <span className="truncate">
          Đây là bản demo —{" "}
          <span className="font-medium text-slate-700">
            Hệ thống Học tập Trực tuyến BVHTTDL
          </span>
        </span>
        <Badge
          variant="outline"
          className={`hidden sm:inline-flex text-[10px] px-1.5 py-0 h-4 shrink-0 ${
            ROLE_BADGE_CLASSES[role] ?? ROLE_BADGE_CLASSES.learner
          }`}
        >
          {ROLE_LABELS[role] ?? "Học viên"}
        </Badge>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="ml-2 p-0.5 rounded hover:bg-slate-200 transition-colors shrink-0"
        aria-label="Đóng banner"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
