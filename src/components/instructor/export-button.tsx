"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExportButton() {
  const handleExport = () => {
    alert("Tính năng xuất CSV sẽ tải xuống danh sách học viên với tiến độ và điểm số.");
  };

  return (
    <Button variant="outline" size="sm" onClick={handleExport}>
      <Download className="h-4 w-4 mr-1.5" />
      Xuất CSV
    </Button>
  );
}
