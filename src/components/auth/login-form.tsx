"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SsoButton } from "@/components/auth/sso-button";
import { cn } from "@/lib/utils";

type InputMode = "email" | "phone";

export function LoginForm() {
  const [inputMode, setInputMode] = useState<InputMode>("email");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="space-y-4">
      {/* Tab switch */}
      <div className="flex rounded-lg border bg-muted/40 p-1 gap-1">
        {(["email", "phone"] as InputMode[]).map((mode) => (
          <button
            key={mode}
            type="button"
            onClick={() => setInputMode(mode)}
            className={cn(
              "flex-1 rounded-md py-1.5 text-sm font-medium transition-all",
              inputMode === mode
                ? "bg-white shadow-sm text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {mode === "email" ? "Email" : "Số điện thoại"}
          </button>
        ))}
      </div>

      {/* Email / Phone input */}
      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="login-identifier">
          {inputMode === "email" ? "Email công vụ" : "Số điện thoại"}
        </label>
        <Input
          id="login-identifier"
          type={inputMode === "email" ? "email" : "tel"}
          placeholder={inputMode === "email" ? "ten@bvhttdl.gov.vn" : "0912 345 678"}
          autoComplete={inputMode === "email" ? "email" : "tel"}
        />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium" htmlFor="login-password">
            Mật khẩu
          </label>
          <Link href="#" className="text-xs text-primary hover:underline">
            Quên mật khẩu?
          </Link>
        </div>
        <div className="relative">
          <Input
            id="login-password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            autoComplete="current-password"
            className="pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Remember me */}
      <label className="flex items-center gap-2 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
          className="h-4 w-4 rounded border-border accent-primary"
        />
        <span className="text-sm text-muted-foreground">Nhớ mật khẩu</span>
      </label>

      {/* Submit */}
      <Button className="w-full bg-gradient-to-r from-primary to-primary-800 hover:from-primary-800 hover:to-primary-900 shadow-md hover:shadow-lg transition-all" size="lg" asChild>
        <Link href="/dashboard">Đăng nhập</Link>
      </Button>

      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground">hoặc</span>
        <Separator className="flex-1" />
      </div>

      <SsoButton />

      <p className="text-center text-sm text-muted-foreground">
        Chưa có tài khoản?{" "}
        <Link href="/register" className="text-primary font-medium hover:underline">
          Đăng ký
        </Link>
      </p>

      {/* Demo accounts */}
      <div className="rounded-lg bg-muted p-3 text-xs text-muted-foreground space-y-1">
        <p className="font-medium text-foreground">Tài khoản demo:</p>
        <p>Học viên: chau.ntm@bvhttdl.gov.vn</p>
        <p>Giảng viên: an.nv@bvhttdl.gov.vn</p>
        <p>Quản trị: huong.dtt@bvhttdl.gov.vn</p>
      </div>
    </div>
  );
}
