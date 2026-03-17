"use client";

import { Globe, Mail, Bell, Palette } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlatformSettingsTab } from "@/components/admin/platform-settings";
import { EmailTemplatesTab } from "@/components/admin/email-templates";
import { NotificationRules } from "@/components/admin/notification-rules";
import { ThemeSettings } from "@/components/admin/theme-settings";
import { platformSettings, emailTemplates } from "@/lib/mock-data";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="Cài đặt Hệ thống"
        description="Quản lý cấu hình và tùy chỉnh nền tảng học tập"
      />

      <Tabs defaultValue="general">
        <TabsList className="flex-wrap h-auto gap-1 mb-2">
          <TabsTrigger value="general" className="gap-1.5">
            <Globe className="h-4 w-4" />
            Chung
          </TabsTrigger>
          <TabsTrigger value="email" className="gap-1.5">
            <Mail className="h-4 w-4" />
            Email
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-1.5">
            <Bell className="h-4 w-4" />
            Thông báo
          </TabsTrigger>
          <TabsTrigger value="theme" className="gap-1.5">
            <Palette className="h-4 w-4" />
            Giao diện
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <PlatformSettingsTab settings={platformSettings} />
        </TabsContent>

        <TabsContent value="email">
          <EmailTemplatesTab templates={emailTemplates} />
        </TabsContent>

        <TabsContent value="notifications">
          <NotificationRules />
        </TabsContent>

        <TabsContent value="theme">
          <ThemeSettings
            initialColors={{
              primaryColor: platformSettings.primaryColor,
              secondaryColor: platformSettings.secondaryColor,
              accentColor: platformSettings.accentColor,
            }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
