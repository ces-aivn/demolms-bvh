import { Flame } from "lucide-react";
import { formatDateVi } from "@/lib/utils";

interface WelcomeBannerProps {
  name: string;
  streak?: number;
}

export function WelcomeBanner({ name, streak = 7 }: WelcomeBannerProps) {
  const today = formatDateVi(new Date().toISOString().split("T")[0]);
  const firstName = name.split(" ").pop() ?? name;

  return (
    <div className="rounded-xl bg-gradient-to-r from-primary to-primary-800 p-5 text-white mb-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/70 mb-1">{today}</p>
          <h1 className="text-xl font-bold">Xin chào, {firstName}!</h1>
          <p className="text-sm text-white/80 mt-1">
            Tiếp tục hành trình học tập của bạn. Mỗi ngày một bước tiến!
          </p>
        </div>
        <div className="shrink-0 flex flex-col items-center bg-white/15 rounded-lg px-3 py-2">
          <Flame className="h-5 w-5 text-secondary mb-1" />
          <span className="text-lg font-bold leading-none">{streak}</span>
          <span className="text-[10px] text-white/70 mt-0.5">ngày liên tiếp</span>
        </div>
      </div>
    </div>
  );
}
