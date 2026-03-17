"use client";

import { useState } from "react";
import { Bell, Mail, Smartphone, Clock } from "lucide-react";

interface ToggleRowProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}

function ToggleRow({ icon, label, description, checked, onChange }: ToggleRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 h-8 w-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium">{label}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        </div>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${checked ? "bg-primary" : "bg-muted-foreground/30"}`}
      >
        <span
          className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${checked ? "translate-x-6" : "translate-x-1"}`}
        />
      </button>
    </div>
  );
}

export function NotificationSettings() {
  const [settings, setSettings] = useState({
    email: true,
    push: false,
    deadline: true,
    newsletter: false,
  });

  function toggle(key: keyof typeof settings) {
    setSettings((s) => ({ ...s, [key]: !s[key] }));
  }

  return (
    <div className="divide-y">
      <ToggleRow
        icon={<Mail className="h-4 w-4 text-muted-foreground" />}
        label="Email thông báo"
        description="Nhận email khi có cập nhật khóa học và tin tức"
        checked={settings.email}
        onChange={() => toggle("email")}
      />
      <ToggleRow
        icon={<Smartphone className="h-4 w-4 text-muted-foreground" />}
        label="Push thông báo"
        description="Thông báo trên thiết bị di động"
        checked={settings.push}
        onChange={() => toggle("push")}
      />
      <ToggleRow
        icon={<Clock className="h-4 w-4 text-muted-foreground" />}
        label="Nhắc nhở deadline"
        description="Nhắc trước 24 giờ khi đến hạn nộp bài"
        checked={settings.deadline}
        onChange={() => toggle("deadline")}
      />
      <ToggleRow
        icon={<Bell className="h-4 w-4 text-muted-foreground" />}
        label="Bản tin học tập"
        description="Nhận bản tin hàng tuần về khóa học mới"
        checked={settings.newsletter}
        onChange={() => toggle("newsletter")}
      />
    </div>
  );
}
