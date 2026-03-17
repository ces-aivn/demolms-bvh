"use client";

import { FileText, FileSpreadsheet, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExportOptions() {
  function handleExport(format: string) {
    alert(`Đang xuất báo cáo định dạng ${format}...`);
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-muted-foreground">Xuất báo cáo:</span>
      <Button
        variant="outline"
        size="sm"
        className="gap-1.5 text-red-600 border-red-200 hover:bg-red-50"
        onClick={() => handleExport("PDF")}
      >
        <FileText className="h-4 w-4" />
        PDF
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="gap-1.5 text-green-600 border-green-200 hover:bg-green-50"
        onClick={() => handleExport("CSV")}
      >
        <FileSpreadsheet className="h-4 w-4" />
        CSV
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="gap-1.5 text-blue-600 border-blue-200 hover:bg-blue-50"
        onClick={() => handleExport("Excel")}
      >
        <Download className="h-4 w-4" />
        Excel
      </Button>
    </div>
  );
}
