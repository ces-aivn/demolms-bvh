import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 px-4 bg-navy text-white">
      <div className="max-w-2xl mx-auto text-center">
        <GraduationCap className="h-14 w-14 mx-auto mb-5 text-secondary opacity-90" />
        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
          Đăng ký ngay để bắt đầu
          <br />
          hành trình học tập
        </h2>
        <p className="text-white/70 mb-8 text-base leading-relaxed">
          Tham gia cùng hàng nghìn cán bộ ngành Văn hóa, Thể thao và Du lịch
          đang nâng cao năng lực chuyên môn qua hệ thống học tập trực tuyến.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-lg"
            asChild
          >
            <Link href="/register">
              Đăng ký miễn phí
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
            asChild
          >
            <Link href="/courses">Xem khóa học</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
