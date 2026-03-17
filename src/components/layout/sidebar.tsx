"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

interface SidebarProps {
  items: NavItem[];
  collapsed?: boolean;
  onToggle?: () => void;
  className?: string;
}

type LucideIconName = keyof typeof LucideIcons;

function NavIcon({ name, className }: { name: string; className?: string }) {
  const Icon = LucideIcons[name as LucideIconName] as React.ComponentType<{
    className?: string;
  }>;
  if (!Icon) return <LucideIcons.Circle className={className} />;
  return <Icon className={className} />;
}

export function Sidebar({
  items,
  collapsed = false,
  onToggle,
  className,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "relative flex flex-col h-full bg-white border-r transition-all duration-300",
        collapsed ? "w-16" : "w-60",
        className
      )}
    >
      {/* Nav items */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        {items.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                "hover:bg-primary-50 hover:text-primary",
                isActive
                  ? "bg-primary-50 text-primary border-r-2 border-primary"
                  : "text-foreground/70"
              )}
            >
              <NavIcon
                name={item.icon}
                className={cn(
                  "h-5 w-5 shrink-0",
                  isActive ? "text-primary" : "text-foreground/50"
                )}
              />
              {!collapsed && (
                <span className="truncate">{item.label}</span>
              )}
              {!collapsed && item.badge != null && item.badge > 0 && (
                <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white font-medium">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      {onToggle && (
        <div className="border-t p-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-center text-muted-foreground hover:text-foreground"
            onClick={onToggle}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeft className="h-4 w-4 mr-2" />
                <span className="text-xs">Thu gọn</span>
              </>
            )}
          </Button>
        </div>
      )}
    </aside>
  );
}
