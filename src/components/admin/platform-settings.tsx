"use client";

import { useState } from "react";
import { Save, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { PlatformSettings } from "@/types";

interface PlatformSettingsTabProps {
  settings: PlatformSettings;
}

export function PlatformSettingsTab({ settings }: PlatformSettingsTabProps) {
  const [form, setForm] = useState(settings);

  function handleChange(field: keyof PlatformSettings, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    alert("Đã lưu cài đặt nền tảng!");
  }

  return (
    <form onSubmit={handleSave} className="space-y-5 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Thông tin nền tảng</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Tên nền tảng</label>
            <Input value={form.platformName} onChange={(e) => handleChange("platformName", e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Mô tả</label>
            <Input value={form.description} onChange={(e) => handleChange("description", e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Email liên hệ</label>
            <Input type="email" value={form.contactEmail} onChange={(e) => handleChange("contactEmail", e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Số điện thoại</label>
            <Input value={form.contactPhone} onChange={(e) => handleChange("contactPhone", e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Địa chỉ</label>
            <Input value={form.address} onChange={(e) => handleChange("address", e.target.value)} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Logo nền tảng</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center bg-muted/30">
              <Upload className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Tải lên logo</p>
              <p className="text-xs text-muted-foreground">PNG, JPG tối đa 2MB. Kích thước đề xuất: 200×200px</p>
              <Button type="button" variant="outline" size="sm" className="mt-1">
                <Upload className="h-3.5 w-3.5 mr-1.5" />
                Chọn tệp
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button type="submit" className="gap-1.5">
        <Save className="h-4 w-4" />
        Lưu cài đặt
      </Button>
    </form>
  );
}
