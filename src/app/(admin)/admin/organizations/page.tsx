"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { OrgTable } from "@/components/admin/org-table";
import { OrgForm } from "@/components/admin/org-form";
import { organizations } from "@/lib/mock-data";

export default function AdminOrganizationsPage() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="space-y-5">
      <PageHeader
        title="Quản lý Đơn vị"
        description={`${organizations.length} đơn vị trong hệ thống`}
        actions={
          <Button size="sm" className="gap-1.5" onClick={() => setFormOpen(true)}>
            <Plus className="h-4 w-4" />
            Thêm đơn vị
          </Button>
        }
      />

      <OrgTable orgs={organizations} />

      <OrgForm open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}
