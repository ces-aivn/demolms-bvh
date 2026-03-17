import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { RatingStars } from "@/components/shared/rating-stars";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Hệ thống học tập rất chuyên nghiệp và dễ sử dụng. Tôi đã hoàn thành khóa học Quản lý Di sản Văn hóa và áp dụng được nhiều kiến thức thiết thực vào công việc hàng ngày.",
    name: "Nguyễn Thị Minh Châu",
    role: "Chuyên viên, Cục Di sản Văn hóa",
    rating: 5,
    initial: "C",
  },
  {
    id: 2,
    quote:
      "Các bài giảng được thiết kế bài bản, giảng viên có chuyên môn cao. Tôi đặc biệt ấn tượng với khóa học về Huấn luyện Thể thao — nội dung cập nhật và sát thực tế.",
    name: "Trần Đức Mạnh",
    role: "Huấn luyện viên, Tổng cục Thể dục Thể thao",
    rating: 5,
    initial: "M",
  },
  {
    id: 3,
    quote:
      "Nhờ khóa học Nghiệp vụ Hướng dẫn viên Du lịch, tôi nâng cao được kỹ năng thuyết minh và phục vụ du khách. Chứng chỉ từ hệ thống được đồng nghiệp và cơ quan công nhận.",
    name: "Lê Thị Hương Giang",
    role: "Hướng dẫn viên, Tổng cục Du lịch",
    rating: 5,
    initial: "G",
  },
];

export function Testimonials() {
  return (
    <section
      className="py-24 px-4 relative overflow-hidden"
      style={{ backgroundImage: "url('/images/news/news-01.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
    >
      {/* Light overlay to keep readability */}
      <div className="absolute inset-0 bg-white/90 dark:bg-navy-950/90 backdrop-blur-sm" />
      <div className="relative max-w-5xl mx-auto z-10">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-secondary/10 text-secondary-700 border-secondary/20 hover:bg-secondary/20 text-xs px-3 py-1">Đánh giá nổi bật</Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Học viên Nói Gì</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Chia sẻ từ những học viên đã hoàn thành khóa học và ứng dụng kiến
            thức vào thực tiễn công tác.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <Card key={t.id} className="relative bg-white/80 dark:bg-navy-900/70 backdrop-blur-md border border-white/60 shadow-sm overflow-hidden group hover:-translate-y-1 hover:shadow-md transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6 relative z-10">
                <Quote className="h-8 w-8 text-primary/15 mb-3" />
                <p className="text-sm text-foreground/80 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Avatar className="h-10 w-10 border-2 border-primary/20">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary-600 text-white font-semibold text-xs">
                      {t.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{t.role}</p>
                    <RatingStars rating={t.rating} className="mt-0.5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
