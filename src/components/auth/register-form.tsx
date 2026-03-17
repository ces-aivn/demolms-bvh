"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RoleSelector } from "@/components/auth/role-selector";
import { organizations } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

type Role = "learner" | "instructor" | "admin";

const STEPS = ["Vai trò", "Thông tin", "Đơn vị"];

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-6">
      {STEPS.map((label, i) => {
        const step = i + 1;
        const done = step < current;
        const active = step === current;
        return (
          <div key={step} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold border-2 transition-colors",
                  done
                    ? "bg-primary border-primary text-white"
                    : active
                    ? "border-primary text-primary bg-primary-50"
                    : "border-muted-foreground/30 text-muted-foreground"
                )}
              >
                {done ? "✓" : step}
              </div>
              <span
                className={cn(
                  "mt-1 text-[10px] font-medium",
                  active ? "text-primary" : "text-muted-foreground"
                )}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  "h-0.5 w-10 mx-1 mb-4 transition-colors",
                  done ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export function RegisterForm() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<Role | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="space-y-4">
      <StepIndicator current={step} />

      {/* Step 1: Role selection */}
      {step === 1 && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground text-center mb-2">
            Chọn vai trò phù hợp với công việc của bạn
          </p>
          <RoleSelector value={role} onChange={setRole} />
          <Button
            className="w-full bg-primary hover:bg-primary-800"
            size="lg"
            disabled={!role}
            onClick={() => setStep(2)}
          >
            Tiếp theo <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Step 2: Personal info */}
      {step === 2 && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-sm font-medium" htmlFor="fullname">Họ và tên</label>
              <Input id="fullname" placeholder="Nguyễn Văn A" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium" htmlFor="email">Email công vụ</label>
              <Input id="email" type="email" placeholder="ten@gov.vn" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="phone">Số điện thoại</label>
            <Input id="phone" type="tel" placeholder="0912 345 678" />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="password">Mật khẩu</label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Tối thiểu 8 ký tự"
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

          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="confirm">Xác nhận mật khẩu</label>
            <div className="relative">
              <Input
                id="confirm"
                type={showConfirm ? "text" : "password"}
                placeholder="Nhập lại mật khẩu"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>
              <ChevronLeft className="mr-1 h-4 w-4" /> Quay lại
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary-800" onClick={() => setStep(3)}>
              Tiếp theo <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Organization */}
      {step === 3 && (
        <div className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Đơn vị công tác</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Chọn đơn vị..." />
              </SelectTrigger>
              <SelectContent>
                {organizations.map((org) => (
                  <SelectItem key={org.id} value={org.id}>
                    {org.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="position">Chức vụ / Vị trí</label>
            <Input id="position" placeholder="VD: Chuyên viên, Phó trưởng phòng..." />
          </div>

          <div className="flex gap-3 pt-1">
            <Button variant="outline" className="flex-1" onClick={() => setStep(2)}>
              <ChevronLeft className="mr-1 h-4 w-4" /> Quay lại
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary-800" asChild>
              <Link href="/dashboard">Đăng ký</Link>
            </Button>
          </div>
        </div>
      )}

      <p className="text-center text-sm text-muted-foreground">
        Đã có tài khoản?{" "}
        <Link href="/login" className="text-primary font-medium hover:underline">
          Đăng nhập
        </Link>
      </p>
    </div>
  );
}
