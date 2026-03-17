"use client";

import { usePathname, useRouter } from "next/navigation";
import { GraduationCap, Users, Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Role = "learner" | "instructor" | "admin";

const ROLES: { id: Role; label: string; icon: React.ElementType; href: string }[] = [
  { id: "learner", label: "Học viên", icon: GraduationCap, href: "/dashboard" },
  { id: "instructor", label: "Giảng viên", icon: Users, href: "/instructor/dashboard" },
  { id: "admin", label: "Quản trị viên", icon: Shield, href: "/admin/dashboard" },
];

function detectRole(pathname: string): Role {
  if (pathname.startsWith("/admin")) return "admin";
  if (pathname.startsWith("/instructor")) return "instructor";
  return "learner";
}

export function RoleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentRoleId = detectRole(pathname);
  const currentRole = ROLES.find((r) => r.id === currentRoleId) ?? ROLES[0];
  const Icon = currentRole.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1.5 h-8 px-2.5 text-xs font-medium border-primary/30 text-primary hover:bg-primary/5"
        >
          <Icon className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{currentRole.label}</span>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Chuyển vai trò demo
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {ROLES.map((role) => {
          const RoleIcon = role.icon;
          const isActive = role.id === currentRoleId;
          return (
            <DropdownMenuItem
              key={role.id}
              onClick={() => router.push(role.href)}
              className={isActive ? "bg-primary/10 text-primary font-medium" : "cursor-pointer"}
            >
              <RoleIcon className="mr-2 h-4 w-4" />
              {role.label}
              {isActive && (
                <span className="ml-auto text-[10px] text-primary">Hiện tại</span>
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
