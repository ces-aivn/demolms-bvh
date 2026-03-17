"use client";

import { useState } from "react";
import { Award, Download, Share2, QrCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { formatDateVi } from "@/lib/utils";
import type { Certificate, Course } from "@/types";

interface CertificateCardProps {
  cert: Certificate;
  course: Course;
  userName: string;
}

function QrPlaceholder() {
  return (
    <div className="w-24 h-24 border-2 border-foreground/20 rounded-lg flex items-center justify-center bg-white">
      <div className="grid grid-cols-3 gap-0.5 p-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-sm"
            style={{ background: Math.random() > 0.4 ? "#1A237E" : "transparent" }}
          />
        ))}
      </div>
    </div>
  );
}

export function CertificateCard({ cert, course, userName }: CertificateCardProps) {
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        {/* Certificate header */}
        <div className="bg-gradient-to-r from-[#1A237E] to-primary p-5 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
          <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white/5 translate-y-6 -translate-x-6" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Award className="h-5 w-5 text-secondary" />
              <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">
                Chứng chỉ Hoàn thành
              </span>
            </div>
            <h3 className="font-bold text-base leading-snug line-clamp-2">{course.title}</h3>
          </div>
        </div>

        <CardContent className="p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">Học viên</p>
              <p className="font-medium text-xs">{userName}</p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">Ngày cấp</p>
              <p className="font-medium text-xs">{formatDateVi(cert.issuedDate)}</p>
            </div>
          </div>

          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">Mã xác nhận</p>
            <Badge variant="outline" className="font-mono text-[10px] px-2">
              {cert.verificationCode}
            </Badge>
          </div>

          <Separator />

          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="flex-1 gap-1.5 text-xs h-8">
              <Download className="h-3.5 w-3.5" />
              Tải xuống
            </Button>
            <Button size="sm" variant="outline" className="flex-1 gap-1.5 text-xs h-8">
              <Share2 className="h-3.5 w-3.5" />
              Chia sẻ
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="gap-1.5 text-xs h-8 px-2.5"
              onClick={() => setDetailOpen(true)}
            >
              <QrCode className="h-3.5 w-3.5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Detail dialog */}
      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base">Chi tiết chứng chỉ</DialogTitle>
          </DialogHeader>

          {/* Mini certificate */}
          <div className="border-2 border-[#1A237E] rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#1A237E] to-primary p-4 text-white text-center">
              <Award className="h-8 w-8 text-secondary mx-auto mb-2" />
              <p className="text-xs text-white/70 uppercase tracking-widest mb-1">
                Bộ Văn hóa, Thể thao và Du lịch
              </p>
              <h3 className="font-bold text-sm">Chứng chỉ Hoàn thành Khóa học</h3>
            </div>
            <div className="bg-white p-5 text-center space-y-2">
              <p className="text-xs text-gray-500">Chứng nhận rằng</p>
              <p className="text-base font-bold text-[#1A237E]">{userName}</p>
              <p className="text-xs text-gray-500">đã hoàn thành khóa học</p>
              <p className="text-sm font-semibold text-gray-800 leading-snug">{course.title}</p>
              <p className="text-xs text-gray-400">Ngày cấp: {formatDateVi(cert.issuedDate)}</p>
              <div className="flex justify-center pt-2">
                <QrPlaceholder />
              </div>
              <p className="text-[10px] text-gray-400 font-mono">{cert.verificationCode}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button className="flex-1 bg-primary hover:bg-primary-800 gap-1.5" size="sm">
              <Download className="h-3.5 w-3.5" />
              Tải PDF
            </Button>
            <Button variant="outline" className="flex-1 gap-1.5" size="sm">
              <Share2 className="h-3.5 w-3.5" />
              Chia sẻ
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
