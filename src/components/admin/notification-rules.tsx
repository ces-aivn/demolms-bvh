"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NotificationRule {
  key: string;
  label: string;
  description: string;
  enabled: boolean;
}

const INITIAL_RULES: NotificationRule[] = [
  { key: "email_notifications", label: "Thông báo qua Email", description: "Gửi email cho người dùng khi có sự kiện quan trọng", enabled: true },
  { key: "push_notifications", label: "Thông báo đẩy (Push)", description: "Gửi thông báo đẩy đến trình duyệt hoặc thiết bị di động", enabled: false },
  { key: "admin_alerts", label: "Cảnh báo quản trị viên", description: "Thông báo cho admin khi có hành động cần phê duyệt", enabled: true },
  { key: "system_events", label: "Sự kiện hệ thống", description: "Ghi log và thông báo các sự kiện quan trọng của hệ thống", enabled: true },
  { key: "course_reminders", label: "Nhắc nhở khóa học", description: "Nhắc học viên về tiến độ và deadline khóa học", enabled: true },
  { key: "cert_notifications", label: "Thông báo chứng chỉ", description: "Gửi thông báo khi học viên được cấp chứng chỉ", enabled: true },
];

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={cn(
        "relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        enabled ? "bg-primary" : "bg-input"
      )}
    >
      <span
        className={cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform",
          enabled ? "translate-x-4" : "translate-x-0"
        )}
      />
    </button>
  );
}

export function NotificationRules() {
  const [rules, setRules] = useState(INITIAL_RULES);

  function toggleRule(key: string, value: boolean) {
    setRules((prev) => prev.map((r) => r.key === key ? { ...r, enabled: value } : r));
  }

  function handleSave() {
    alert("Đã lưu cài đặt thông báo!");
  }

  return (
    <div className="space-y-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Quy tắc thông báo</CardTitle>
        </CardHeader>
        <CardContent className="divide-y">
          {rules.map((rule) => (
            <div key={rule.key} className="flex items-center justify-between py-4 first:pt-0 last:pb-0 gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{rule.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{rule.description}</p>
              </div>
              <Toggle enabled={rule.enabled} onChange={(v) => toggleRule(rule.key, v)} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="gap-1.5">
        <Save className="h-4 w-4" />
        Lưu cài đặt
      </Button>
    </div>
  );
}
