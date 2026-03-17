"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/shared/status-badge";
import { activityLogs, organizations } from "@/lib/mock-data";
import type { User } from "@/types";

interface UserDetailModalProps {
  user: User | null;
  open: boolean;
  onClose: () => void;
}

const roleLabel: Record<string, string> = {
  learner: "Học viên",
  instructor: "Giảng viên",
  admin: "Quản trị viên",
};

export function UserDetailModal({ user, open, onClose }: UserDetailModalProps) {
  if (!user) return null;

  const org = organizations.find((o) => o.id === user.organizationId);
  const logs = activityLogs.filter((l) => l.userId === user.id).slice(0, 5);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Chi tiết người dùng</DialogTitle>
        </DialogHeader>

        <div className="flex items-center gap-4 py-2">
          <Avatar className="h-14 w-14">
            <AvatarFallback className="bg-primary-100 text-primary text-lg font-bold">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-base">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className="text-xs">{roleLabel[user.role]}</Badge>
              <StatusBadge
                status={user.status === "inactive" ? "Không hoạt động" : "Hoạt động"}
                variant={user.status === "inactive" ? "neutral" : "success"}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm border rounded-lg p-3 bg-muted/30">
          <div>
            <p className="text-xs text-muted-foreground">Đơn vị</p>
            <p className="font-medium">{org?.shortName ?? "—"}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Ngày tham gia</p>
            <p className="font-medium">{user.joinedDate}</p>
          </div>
        </div>

        {logs.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2">Hoạt động gần đây</p>
            <div className="space-y-1.5">
              {logs.map((log) => (
                <div key={log.id} className="flex items-start gap-2 text-xs rounded border p-2">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium">{log.action}</span>
                    <span className="text-muted-foreground"> — {log.target}</span>
                  </div>
                  <span className="text-muted-foreground shrink-0">
                    {new Date(log.timestamp).toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
