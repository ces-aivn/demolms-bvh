"use client";

import { Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CourseFormData {
  title: string;
  description: string;
  domain: string;
  level: string;
}

interface CourseFormProps {
  data: CourseFormData;
  onChange: (data: CourseFormData) => void;
}

export function CourseForm({ data, onChange }: CourseFormProps) {
  const set = (field: keyof CourseFormData, value: string) =>
    onChange({ ...data, [field]: value });

  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <label htmlFor="title" className="text-sm font-medium">
          Tên khóa học <span className="text-destructive">*</span>
        </label>
        <Input
          id="title"
          value={data.title}
          onChange={(e) => set("title", e.target.value)}
          placeholder="Nhập tên khóa học..."
          className="text-sm"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="description" className="text-sm font-medium">
          Mô tả khóa học
        </label>
        <textarea
          id="description"
          value={data.description}
          onChange={(e) => set("description", e.target.value)}
          placeholder="Mô tả nội dung, mục tiêu và đối tượng học viên..."
          className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Lĩnh vực</label>
          <Select value={data.domain} onValueChange={(v) => set("domain", v)}>
            <SelectTrigger className="text-sm h-9">
              <SelectValue placeholder="Chọn lĩnh vực" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="van-hoa">Văn hóa</SelectItem>
              <SelectItem value="the-thao">Thể thao</SelectItem>
              <SelectItem value="du-lich">Du lịch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium">Cấp độ</label>
          <Select value={data.level} onValueChange={(v) => set("level", v)}>
            <SelectTrigger className="text-sm h-9">
              <SelectValue placeholder="Chọn cấp độ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="co-ban">Cơ bản</SelectItem>
              <SelectItem value="trung-cap">Trung cấp</SelectItem>
              <SelectItem value="nang-cao">Nâng cao</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">Ảnh bìa khóa học</label>
        <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer bg-muted/10">
          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">
            Kéo thả hoặc{" "}
            <span className="text-primary font-medium">chọn tệp</span> để tải lên
          </p>
          <p className="text-xs text-muted-foreground mt-1">PNG, JPG tối đa 5MB</p>
        </div>
      </div>
    </div>
  );
}
