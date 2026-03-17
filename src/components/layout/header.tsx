"use client";

import Link from "next/link";
import Image from "next/image";

import { Menu, Bell, ChevronDown, LogOut, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { PUBLIC_NAV, MINISTRY_SHORT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { RoleSwitcher } from "@/components/layout/role-switcher";

interface HeaderProps {
  variant?: "public" | "portal";
  userName?: string;
  userAvatar?: string;
  userRole?: string;
  onMenuToggle?: () => void;
  notificationCount?: number;
}

export function Header({
  variant = "public",
  userName = "Nguyễn Thị Minh Châu",
  userAvatar,
  userRole = "learner",
  onMenuToggle,
  notificationCount = 3,
}: HeaderProps) {
  const roleLabel: Record<string, string> = {
    learner: "Học viên",
    instructor: "Giảng viên",
    admin: "Quản trị viên",
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Left: Logo + menu toggle */}
        <div className="flex items-center gap-3">
          {variant === "portal" && (
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={onMenuToggle}
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo/bvhttdl-logo.png"
              alt="BVHTTDL"
              width={40}
              height={40}
              className="shrink-0"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-primary text-sm leading-none">
                {MINISTRY_SHORT}
              </span>
              <p className="text-[10px] text-muted-foreground leading-none mt-0.5">
                E-Learning
              </p>
            </div>
          </Link>
        </div>

        {/* Center: Public nav */}
        {variant === "public" && (
          <nav className="hidden md:flex items-center gap-6">
            {PUBLIC_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Right */}
        <div className="flex items-center gap-2">
          {variant === "public" ? (
            <>
              <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
                <Link href="/login">Đăng nhập</Link>
              </Button>
              <Button size="sm" asChild className="bg-primary hover:bg-primary-800">
                <Link href="/register">Đăng ký</Link>
              </Button>
            </>
          ) : (
            <>
              {/* Role switcher — demo navigation */}
              <RoleSwitcher />

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-primary">
                    {notificationCount}
                  </Badge>
                )}
              </Button>

              {/* User dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 h-9 px-2"
                  >
                    <Avatar className="h-7 w-7">
                      <AvatarImage src={userAvatar} alt={userName} />
                      <AvatarFallback className="bg-primary text-white text-xs">
                        {userName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden sm:block text-sm font-medium max-w-[120px] truncate">
                      {userName}
                    </span>
                    <ChevronDown className="h-3 w-3 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel className="font-normal">
                    <p className="font-medium text-sm">{userName}</p>
                    <p className="text-xs text-muted-foreground">
                      {roleLabel[userRole] ?? userRole}
                    </p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Hồ sơ cá nhân
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      Cài đặt
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link
                      href="/login"
                      className={cn("cursor-pointer text-destructive focus:text-destructive")}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Đăng xuất
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
