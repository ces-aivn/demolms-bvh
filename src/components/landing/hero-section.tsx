import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MINISTRY_NAME } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary to-navy text-white"
      style={{ backgroundImage: "url('/images/hero/event.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark overlay over the background photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary/85 to-navy/90" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full border-2 border-white/30 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-20 left-20 h-20 w-20 rounded-full border border-white/20 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-10 right-20 h-60 w-60 rounded-full border-2 border-white/10 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-40 h-32 w-32 rounded-full border border-white/20 animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full border border-white/5 animate-[scale-up_4s_ease-in-out_infinite_alternate]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-24 md:py-32 text-center">
        <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 font-semibold text-xs px-4 py-1.5 animate-fade-in-up">
          {MINISTRY_NAME}
        </Badge>

        <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] mb-5 tracking-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Hệ thống Học tập Trực tuyến
          <span className="block mt-2 text-secondary drop-shadow-md">Bộ Văn hóa, Thể thao và Du lịch</span>
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          <div className="h-px w-12 bg-white/30" />
          <GraduationCap className="h-4 w-4 text-secondary/60" />
          <div className="h-px w-12 bg-white/30" />
        </div>

        <p className="text-base md:text-lg text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Nâng cao năng lực chuyên môn cho cán bộ, công chức, viên chức ngành
          Văn hóa, Thể thao và Du lịch Việt Nam thông qua các khóa học trực tuyến
          chất lượng cao.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary-400 font-semibold shadow-[0_0_20px_rgba(255,193,7,0.4)] hover:shadow-[0_0_30px_rgba(255,193,7,0.6)] transition-all rounded-full px-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}
            asChild
          >
            <Link href="/register">
              <GraduationCap className="mr-2 h-5 w-5" />
              Bắt đầu học
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 rounded-full px-8 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: "0.4s" }}
            asChild
          >
            <Link href="/courses">
              Tìm hiểu thêm
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
