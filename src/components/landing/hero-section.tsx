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
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full border-2 border-white/30" />
        <div className="absolute top-20 left-20 h-20 w-20 rounded-full border border-white/20" />
        <div className="absolute bottom-10 right-20 h-60 w-60 rounded-full border-2 border-white/10" />
        <div className="absolute bottom-20 right-40 h-32 w-32 rounded-full border border-white/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full border border-white/5" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-28 text-center">
        <Badge className="mb-5 bg-secondary/20 text-secondary border-secondary/30 font-semibold text-xs px-3 py-1">
          {MINISTRY_NAME}
        </Badge>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 tracking-tight">
          Hệ thống Học tập Trực tuyến
          <br />
          <span className="text-secondary">Bộ Văn hóa, Thể thao và Du lịch</span>
        </h1>

        <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
          Nâng cao năng lực chuyên môn cho cán bộ, công chức, viên chức ngành
          Văn hóa, Thể thao và Du lịch Việt Nam thông qua các khóa học trực tuyến
          chất lượng cao.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-lg"
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
            className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
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
