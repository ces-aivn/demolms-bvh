import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RegisterForm } from "@/components/auth/register-form";
import { MINISTRY_SHORT, MINISTRY_NAME } from "@/lib/constants";

export default function RegisterPage() {
  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="text-center pb-2">
        {/* Gov logo mark */}
        <div className="flex justify-center mb-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white font-bold text-base shadow-md">
            BV
          </div>
        </div>
        <p className="text-xs font-semibold text-primary tracking-wide uppercase mb-1">
          {MINISTRY_SHORT}
        </p>
        <CardTitle className="text-2xl font-bold">Đăng ký tài khoản</CardTitle>
        <CardDescription>
          Tạo tài khoản để học tập trên {MINISTRY_NAME}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <RegisterForm />
      </CardContent>
    </Card>
  );
}
