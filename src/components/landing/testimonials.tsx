import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Học viên Nói Gì</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Chia sẻ từ những học viên đã hoàn thành khóa học và ứng dụng kiến
            thức vào thực tiễn công tác.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <Card key={t.id} className="relative">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-3" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-white font-semibold text-sm">
                      {t.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                    <RatingStars rating={t.rating} className="mt-1" />
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
