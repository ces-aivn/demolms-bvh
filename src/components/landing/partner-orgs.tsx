import Image from "next/image";
import { Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { organizations } from "@/lib/mock-data";

// Map org IDs to available real logos
const ORG_LOGOS: Record<string, string> = {
  "org-02": "/images/orgs/soict-logo.png",
  "org-03": "/images/orgs/vnpt-logo.jpg",
};

export function PartnerOrgs() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Đơn vị Thành viên</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Các đơn vị trực thuộc Bộ Văn hóa, Thể thao và Du lịch tham gia xây
            dựng và cung cấp nội dung đào tạo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {organizations.map((org) => (
            <Card key={org.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 overflow-hidden">
                    {ORG_LOGOS[org.id] ? (
                      <Image
                        src={ORG_LOGOS[org.id]}
                        alt={org.shortName}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    ) : (
                      <Building2 className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-semibold text-sm leading-snug">{org.name}</h3>
                      <Badge variant="outline" className="text-[10px] shrink-0">
                        {org.shortName}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-2">
                      {org.description}
                    </p>
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <span>{org.courseCount} khóa học</span>
                      <span>•</span>
                      <span>{org.memberCount.toLocaleString("vi-VN")} thành viên</span>
                    </div>
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
