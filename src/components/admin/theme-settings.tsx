"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ThemeColors {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

interface ThemeSettingsProps {
  initialColors: ThemeColors;
}

export function ThemeSettings({ initialColors }: ThemeSettingsProps) {
  const [colors, setColors] = useState(initialColors);

  function handleChange(field: keyof ThemeColors, value: string) {
    setColors((prev) => ({ ...prev, [field]: value }));
  }

  const colorFields: { key: keyof ThemeColors; label: string; description: string }[] = [
    { key: "primaryColor", label: "Màu chính (Primary)", description: "Màu nút bấm, liên kết và điểm nhấn chính" },
    { key: "secondaryColor", label: "Màu phụ (Secondary)", description: "Màu nhấn mạnh thứ hai, huy hiệu" },
    { key: "accentColor", label: "Màu điểm nhấn (Accent)", description: "Màu thanh điều hướng và tiêu đề" },
  ];

  return (
    <div className="space-y-5 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Màu sắc giao diện</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {colorFields.map(({ key, label, description }) => (
            <div key={key} className="flex items-center gap-4">
              <div className="flex-1 min-w-0 space-y-1.5">
                <label className="text-sm font-medium">{label}</label>
                <p className="text-xs text-muted-foreground">{description}</p>
                <Input
                  value={colors[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  placeholder="#000000"
                  className="font-mono text-sm"
                />
              </div>
              <div className="flex flex-col items-center gap-2 shrink-0">
                <input
                  type="color"
                  value={colors[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="h-10 w-10 cursor-pointer rounded-full border-2 border-muted p-0.5"
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Xem trước giao diện</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <div
              className="px-4 py-3 text-white text-sm font-medium"
              style={{ backgroundColor: colors.accentColor }}
            >
              Thanh điều hướng — {colors.accentColor}
            </div>
            <div className="p-4 space-y-3 bg-white">
              <div className="flex gap-2">
                <button
                  className="px-4 py-2 rounded-md text-white text-sm font-medium"
                  style={{ backgroundColor: colors.primaryColor }}
                >
                  Nút chính
                </button>
                <button
                  className="px-4 py-2 rounded-md text-white text-sm font-medium"
                  style={{ backgroundColor: colors.secondaryColor }}
                >
                  Nút phụ
                </button>
              </div>
              <div className="flex gap-2">
                <span
                  className="inline-flex rounded-full px-3 py-1 text-xs font-medium text-white"
                  style={{ backgroundColor: colors.primaryColor }}
                >
                  Huy hiệu
                </span>
                <span
                  className="inline-flex rounded-full px-3 py-1 text-xs font-medium text-white"
                  style={{ backgroundColor: colors.accentColor }}
                >
                  Nhãn
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button
        onClick={() => alert("Đã lưu cài đặt giao diện!")}
        className="gap-1.5"
      >
        <Save className="h-4 w-4" />
        Lưu giao diện
      </Button>
    </div>
  );
}
