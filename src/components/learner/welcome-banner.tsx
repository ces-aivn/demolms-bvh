import { Flame, Sparkles } from "lucide-react";
import { formatDateVi } from "@/lib/utils";

interface WelcomeBannerProps {
  name: string;
  streak?: number;
}

export function WelcomeBanner({ name, streak = 7 }: WelcomeBannerProps) {
  const today = formatDateVi(new Date().toISOString().split("T")[0]);
  const firstName = name.split(" ").pop() ?? name;

  return (
    <div className="relative rounded-xl bg-gradient-to-br from-primary via-primary-800 to-navy-900 p-6 text-white mb-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-20 translate-x-20" />
      <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-secondary/10 rounded-full translate-y-16" />
      <div className="absolute top-4 right-40 opacity-20">
        <Sparkles className="h-6 w-6 text-secondary" />
      </div>

      <div className="relative flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-xs font-medium text-white/60 uppercase tracking-wider mb-1.5">{today}</p>
          <h1 className="text-2xl font-bold tracking-tight">Xin chào, {firstName}!</h1>
          <p className="text-sm text-white/70 mt-1.5 max-w-md">
            Tiếp tục hành trình học tập của bạn. Mỗi ngày một bước tiến!
          </p>
        </div>
        <div className="shrink-0 flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
          <Flame className="h-6 w-6 text-secondary mb-1" />
          <span className="text-2xl font-bold leading-none">{streak}</span>
          <span className="text-[10px] text-white/60 mt-1 font-medium">ngày liên tiếp</span>
        </div>
      </div>
    </div>
  );
}
