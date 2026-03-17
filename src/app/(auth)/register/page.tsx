import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RegisterForm } from "@/components/auth/register-form";
import { MINISTRY_SHORT } from "@/lib/constants";

export default function RegisterPage() {
  return (
    <Card className="shadow-xl border-0 overflow-hidden">
      {/* Gov stripe accent */}
      <div className="h-1.5 bg-gradient-to-r from-primary via-primary-700 to-navy" />
      <CardHeader className="text-center pb-2 pt-6">
        {/* Gov logo mark */}
        <div className="flex justify-center mb-3">
          <Image
            src="/images/logo/bvhttdl-logo.png"
            alt="BVHTTDL"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
        <p className="text-[11px] font-semibold text-primary tracking-wider uppercase mb-1">
          {MINISTRY_SHORT}
        </p>
        <CardTitle className="text-xl font-bold">Đăng ký tài khoản</CardTitle>
        <CardDescription className="text-sm">
          Tạo tài khoản để học tập trên hệ thống
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4 pb-6 px-6">
        <RegisterForm />
      </CardContent>
    </Card>
  );
}
