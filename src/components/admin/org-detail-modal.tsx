"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { StatusBadge } from "@/components/shared/status-badge";
import { courses } from "@/lib/mock-data";
import type { Organization } from "@/types";

interface OrgDetailModalProps {
  org: Organization | null;
  open: boolean;
  onClose: () => void;
}

export function OrgDetailModal({ org, open, onClose }: OrgDetailModalProps) {
  if (!org) return null;

  const orgCourses = courses.filter((c) => c.organizationId === org.id).slice(0, 5);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Chi tiết đơn vị</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-start gap-3 rounded-lg border p-3 bg-muted/30">
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-base">{org.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{org.shortName}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{org.description}</p>
            </div>
            <StatusBadge status="Hoạt động" variant="success" />
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg border p-3 text-center">
              <p className="text-2xl font-bold text-primary">{org.courseCount}</p>
              <p className="text-xs text-muted-foreground mt-0.5">Khóa học</p>
            </div>
            <div className="rounded-lg border p-3 text-center">
              <p className="text-2xl font-bold text-primary">{org.memberCount.toLocaleString("vi-VN")}</p>
              <p className="text-xs text-muted-foreground mt-0.5">Thành viên</p>
            </div>
          </div>

          {orgCourses.length > 0 && (
            <div>
              <p className="text-sm font-medium mb-2">Khóa học của đơn vị</p>
              <div className="space-y-1.5">
                {orgCourses.map((c) => (
                  <div key={c.id} className="flex items-center justify-between text-xs rounded border p-2 gap-2">
                    <span className="truncate font-medium">{c.title}</span>
                    <span className="text-muted-foreground shrink-0">{c.enrolledCount} HV</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
