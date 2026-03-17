import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="flex h-16 w-16 mx-auto mb-6 items-center justify-center rounded-2xl bg-secondary/15 border border-secondary/20">
          <GraduationCap className="h-8 w-8 text-secondary" />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
          Đăng ký ngay để bắt đầu
          <br />
          hành trình học tập
        </h2>
        <p className="text-white/70 mb-8 leading-relaxed">
          Tham gia cùng hàng nghìn cán bộ ngành Văn hóa, Thể thao và Du lịch
          đang nâng cao năng lực chuyên môn qua hệ thống học tập trực tuyến.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary-400 font-semibold shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all rounded-full px-8 text-base"
            asChild
          >
            <Link href="/register">
              Đăng ký miễn phí
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 text-base backdrop-blur-sm"
            asChild
          >
            <Link href="/courses">Xem khóa học</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
