"use client";

import { GraduationCap, Users, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

type Role = "learner" | "instructor" | "admin";

interface RoleSelectorProps {
  value: Role | null;
  onChange: (role: Role) => void;
}

const ROLES = [
  {
    value: "learner" as Role,
    icon: GraduationCap,
    label: "Học viên",
    description: "Tham gia và hoàn thành các khóa học",
  },
  {
    value: "instructor" as Role,
    icon: Users,
    label: "Giảng viên",
    description: "Xây dựng và giảng dạy khóa học",
  },
  {
    value: "admin" as Role,
    icon: Shield,
    label: "Quản trị viên",
    description: "Quản lý hệ thống và người dùng",
  },
];

export function RoleSelector({ value, onChange }: RoleSelectorProps) {
  return (
    <div className="grid grid-cols-1 gap-3">
      {ROLES.map(({ value: role, icon: Icon, label, description }) => {
        const selected = value === role;
        return (
          <button
            key={role}
            type="button"
            onClick={() => onChange(role)}
            className={cn(
              "flex items-center gap-4 rounded-lg border-2 p-4 text-left transition-all hover:border-primary/40",
              selected
                ? "border-primary bg-primary-50"
                : "border-border bg-white hover:bg-muted/30"
            )}
          >
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors",
                selected ? "bg-primary text-white" : "bg-muted text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className={cn("font-semibold text-sm", selected && "text-primary")}>
                {label}
              </p>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
            <div
              className={cn(
                "ml-auto h-4 w-4 shrink-0 rounded-full border-2 transition-colors",
                selected ? "border-primary bg-primary" : "border-border"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
