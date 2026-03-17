import Link from "next/link";
import { BookOpen, Trophy, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DOMAINS = [
  {
    slug: "van-hoa",
    icon: BookOpen,
    title: "Văn hóa",
    description:
      "Bảo tồn di sản, quản lý bảo tàng, nghệ thuật truyền thống, pháp luật và chính sách văn hóa.",
    courseCount: 6,
    bgClass: "bg-red-50 group-hover:bg-primary",
    iconClass: "text-primary group-hover:text-white",
    badgeClass: "bg-red-100 text-red-800",
  },
  {
    slug: "the-thao",
    icon: Trophy,
    title: "Thể thao",
    description:
      "Huấn luyện thể thao, quản lý cơ sở vật chất, luật thi đấu và chăm sóc sức khỏe vận động viên.",
    courseCount: 6,
    bgClass: "bg-blue-50 group-hover:bg-blue-700",
    iconClass: "text-blue-700 group-hover:text-white",
    badgeClass: "bg-blue-100 text-blue-800",
  },
  {
    slug: "du-lich",
    icon: MapPin,
    title: "Du lịch",
    description:
      "Nghiệp vụ hướng dẫn viên, quản lý khách sạn, marketing du lịch và quy hoạch phát triển.",
    courseCount: 6,
    bgClass: "bg-green-50 group-hover:bg-green-700",
    iconClass: "text-green-700 group-hover:text-white",
    badgeClass: "bg-green-100 text-green-800",
  },
];

export function DomainCategories() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Lĩnh vực Đào tạo</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ba lĩnh vực chuyên môn cốt lõi phục vụ công tác đào tạo và bồi dưỡng
            cán bộ ngành Văn hóa, Thể thao và Du lịch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DOMAINS.map(({ slug, icon: Icon, title, description, courseCount, bgClass, iconClass, badgeClass }) => (
            <Link key={slug} href={`/courses?domain=${slug}`}>
              <Card className="group h-full hover:shadow-lg transition-all duration-200 cursor-pointer border-2 hover:border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-5">
                    <div
                      className={`h-16 w-16 rounded-2xl flex items-center justify-center transition-colors duration-200 ${bgClass}`}
                    >
                      <Icon className={`h-8 w-8 transition-colors duration-200 ${iconClass}`} />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {description}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <Badge className={badgeClass}>{courseCount} khóa học</Badge>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
