"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MINISTRY_SHORT } from "@/lib/constants";
import type { NavItem } from "@/types";

interface MobileNavProps {
  items: NavItem[];
  open: boolean;
  onClose: () => void;
}

type LucideIconName = keyof typeof LucideIcons;

function NavIcon({ name, className }: { name: string; className?: string }) {
  const Icon = LucideIcons[name as LucideIconName] as React.ComponentType<{
    className?: string;
  }>;
  if (!Icon) return <LucideIcons.Circle className={className} />;
  return <Icon className={className} />;
}

export function MobileNav({ items, open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="px-4 py-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white font-bold text-xs">
                BV
              </div>
              <SheetTitle className="font-bold text-primary text-sm">
                {MINISTRY_SHORT} E-Learning
              </SheetTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {items.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  "hover:bg-primary-50 hover:text-primary",
                  isActive
                    ? "bg-primary-50 text-primary"
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
                <span>{item.label}</span>
                {item.badge != null && item.badge > 0 && (
                  <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white font-medium">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
