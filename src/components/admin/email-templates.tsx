"use client";

import { Eye, Edit, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { EmailTemplate } from "@/types";

interface EmailTemplatesTabProps {
  templates: EmailTemplate[];
}

export function EmailTemplatesTab({ templates }: EmailTemplatesTabProps) {
  return (
    <div className="space-y-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Mẫu Email hệ thống</CardTitle>
        </CardHeader>
        <CardContent className="divide-y">
          {templates.map((tpl) => (
            <div key={tpl.id} className="py-4 first:pt-0 last:pb-0">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 shrink-0">
                  <Mail className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{tpl.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Tiêu đề: {tpl.subject}</p>
                  <p className="text-xs text-muted-foreground">{tpl.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Cập nhật: {tpl.lastUpdated}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs gap-1"
                    onClick={() => alert(`Xem mẫu: ${tpl.name}`)}
                  >
                    <Eye className="h-3 w-3" />
                    Xem
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs gap-1"
                    onClick={() => alert(`Sửa mẫu: ${tpl.name}`)}
                  >
                    <Edit className="h-3 w-3" />
                    Sửa
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
