import Link from "next/link";
import { BookOpen, Trophy, MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const DOMAINS = [
  {
    slug: "van-hoa",
    icon: BookOpen,
    title: "Văn hóa",
    description:
      "Bảo tồn di sản, quản lý bảo tàng, nghệ thuật truyền thống, pháp luật và chính sách văn hóa.",
    courseCount: 6,
    bgImage: "/images/hero/trienlamvanhoa.jpg",
    iconClass: "text-white",
    badgeClass: "bg-white/20 text-white border-white/30",
  },
  {
    slug: "the-thao",
    icon: Trophy,
    title: "Thể thao",
    description:
      "Huấn luyện thể thao, quản lý cơ sở vật chất, luật thi đấu và chăm sóc sức khỏe vận động viên.",
    courseCount: 6,
    bgImage: "/images/hero/thethao.jpeg",
    iconClass: "text-white",
    badgeClass: "bg-white/20 text-white border-white/30",
  },
  {
    slug: "du-lich",
    icon: MapPin,
    title: "Du lịch",
    description:
      "Nghiệp vụ hướng dẫn viên, quản lý khách sạn, marketing du lịch và quy hoạch phát triển.",
    courseCount: 6,
    bgImage: "/images/hero/event.jpg",
    iconClass: "text-white",
    badgeClass: "bg-white/20 text-white border-white/30",
  },
];

export function DomainCategories() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-xs px-3 py-1">Khám phá</Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Lĩnh vực Đào tạo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ba lĩnh vực chuyên môn cốt lõi phục vụ công tác đào tạo và bồi dưỡng
            cán bộ ngành Văn hóa, Thể thao và Du lịch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOMAINS.map(({ slug, icon: Icon, title, description, courseCount, bgImage, iconClass }) => (
            <Link key={slug} href={`/courses?domain=${slug}`}>
              <div
                className="group relative h-[360px] rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(183,28,28,0.3)] border border-black/5 dark:border-white/10"
              >
                {/* Background image with zoom effect */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${bgImage}')` }} 
                />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/60 to-transparent transition-opacity duration-300 group-hover:from-navy-900/95 group-hover:via-navy-900/80" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-left z-10">
                  <div className="mb-auto transform transition-transform duration-500 group-hover:translate-y-2">
                    <div className="h-14 w-14 rounded-2xl flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/20 shadow-lg group-hover:scale-110 group-hover:bg-primary/80 transition-all duration-300">
                      <Icon className={`h-7 w-7 ${iconClass}`} />
                    </div>
                  </div>
                  
                  <div className="transform transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                    <h3 className="font-bold text-2xl mb-2 text-white drop-shadow-md">
                      {title}
                    </h3>
                    <p className="text-sm text-white/80 mb-6 leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {description}
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm rounded-full px-3 py-1 font-medium">
                        {courseCount} khóa học
                      </Badge>
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
