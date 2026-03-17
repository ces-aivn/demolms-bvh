"use client";

import { useState } from "react";
import { Save, Globe, BookOpen, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/page-header";
import { CourseForm } from "@/components/instructor/course-form";
import { ModuleList } from "@/components/instructor/module-list";
import { DomainBadge } from "@/components/shared/domain-badge";

interface Lesson {
  id: string;
  title: string;
  type: "video" | "document" | "quiz";
  duration: string;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface FormData {
  title: string;
  description: string;
  domain: string;
  level: string;
}

const LEVEL_LABELS: Record<string, string> = {
  "co-ban": "Cơ bản",
  "trung-cap": "Trung cấp",
  "nang-cao": "Nâng cao",
};

const INITIAL_FORM: FormData = {
  title: "Quản lý Di sản Văn hóa Phi vật thể",
  description:
    "Khóa học cung cấp kiến thức về bảo tồn và phát huy giá trị di sản văn hóa phi vật thể theo quy định pháp luật Việt Nam. Học viên sẽ nắm vững các nguyên tắc UNESCO và áp dụng vào thực tiễn quản lý.",
  domain: "van-hoa",
  level: "trung-cap",
};

const INITIAL_MODULES: Module[] = [
  {
    id: "mod-1",
    title: "Tổng quan về Di sản Văn hóa Phi vật thể",
    lessons: [
      { id: "l-1", title: "Khái niệm và phân loại di sản phi vật thể", type: "video", duration: "25 phút" },
      { id: "l-2", title: "Công ước UNESCO 2003", type: "document", duration: "30 phút" },
      { id: "l-3", title: "Kiểm tra chương 1", type: "quiz", duration: "20 phút" },
    ],
  },
  {
    id: "mod-2",
    title: "Nhận diện và Kiểm kê Di sản",
    lessons: [
      { id: "l-4", title: "Phương pháp nhận diện di sản phi vật thể", type: "video", duration: "40 phút" },
      { id: "l-5", title: "Lập hồ sơ khoa học di sản", type: "document", duration: "35 phút" },
    ],
  },
  {
    id: "mod-3",
    title: "Bảo tồn và Phát huy Giá trị",
    lessons: [
      { id: "l-6", title: "Chiến lược bảo tồn di sản sống", type: "video", duration: "45 phút" },
      { id: "l-7", title: "Kiểm tra cuối khóa", type: "quiz", duration: "30 phút" },
    ],
  },
];

export default function CourseBuilderPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [modules, setModules] = useState<Module[]>(INITIAL_MODULES);
  const [saved, setSaved] = useState(false);

  const totalLessons = modules.reduce((s, m) => s + m.lessons.length, 0);

  const handleSaveDraft = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4">
      <PageHeader
        title="Tạo khóa học"
        description="Xây dựng nội dung và cấu trúc khóa học của bạn"
        actions={
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleSaveDraft}>
              <Save className="h-4 w-4 mr-1.5" />
              {saved ? "Đã lưu!" : "Lưu nháp"}
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-800">
              <Globe className="h-4 w-4 mr-1.5" />
              Xuất bản
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left panel — form + modules */}
        <div className="lg:col-span-3 space-y-5">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold">Thông tin khóa học</CardTitle>
            </CardHeader>
            <CardContent>
              <CourseForm data={form} onChange={setForm} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold">Nội dung khóa học</CardTitle>
            </CardHeader>
            <CardContent>
              <ModuleList modules={modules} onChange={setModules} />
            </CardContent>
          </Card>
        </div>

        {/* Right panel — preview */}
        <div className="lg:col-span-2">
          <div className="sticky top-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold">Xem trước</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center relative">
                  <BookOpen className="h-14 w-14 text-primary/30" />
                  <div className="absolute top-2 left-2 flex gap-1.5">
                    {form.domain && (
                      <DomainBadge domain={form.domain as "van-hoa" | "the-thao" | "du-lich"} />
                    )}
                    {form.level && (
                      <Badge className="text-[10px] bg-orange-100 text-orange-800">
                        {LEVEL_LABELS[form.level]}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-sm leading-snug">
                    {form.title || "Tên khóa học"}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {form.description || "Mô tả khóa học sẽ hiển thị ở đây..."}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    PGS.TS Nguyễn Văn An
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5" />
                      {totalLessons} bài học
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      0 học viên
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {modules.length} module
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold">Tóm tắt nội dung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {modules.map((mod, i) => (
                  <div key={mod.id} className="flex items-start gap-2 text-xs">
                    <span className="h-5 w-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium">{mod.title || `Module ${i + 1}`}</p>
                      <p className="text-muted-foreground">{mod.lessons.length} bài học</p>
                    </div>
                  </div>
                ))}
                {modules.length === 0 && (
                  <p className="text-xs text-muted-foreground">Chưa có module nào.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
