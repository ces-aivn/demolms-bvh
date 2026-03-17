"use client";

import { Upload } from "lucide-react";

export function UploadArea() {
  return (
    <div className="border-2 border-dashed border-muted-foreground/30 rounded-xl p-8 text-center hover:border-primary/50 hover:bg-primary-50/30 transition-all cursor-pointer group">
      <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-100 transition-colors">
        <Upload className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <p className="text-sm font-medium text-foreground mb-1">
        Kéo thả hoặc{" "}
        <span className="text-primary underline underline-offset-2">chọn tệp</span>{" "}
        để tải lên
      </p>
      <p className="text-xs text-muted-foreground">
        Hỗ trợ: MP4, PDF, DOCX, PPT, JPG, PNG · Tối đa 500MB
      </p>
    </div>
  );
}
