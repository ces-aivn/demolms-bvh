"use client";

import { useState, useMemo } from "react";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { UserTable } from "@/components/admin/user-table";
import { UserFilters } from "@/components/admin/user-filters";
import { UserActions } from "@/components/admin/user-actions";
import { users } from "@/lib/mock-data";

export default function AdminUsersPage() {
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");
  const [orgId, setOrgId] = useState("all");

  const filtered = useMemo(() => {
    return users.filter((u) => {
      if (role !== "all" && u.role !== role) return false;
      if (status !== "all" && (u.status ?? "active") !== status) return false;
      if (orgId !== "all" && u.organizationId !== orgId) return false;
      return true;
    });
  }, [role, status, orgId]);

  return (
    <div className="space-y-5">
      <PageHeader
        title="Quản lý Người dùng"
        description={`${users.length} người dùng trong hệ thống`}
        actions={
          <Button size="sm" className="gap-1.5">
            <UserPlus className="h-4 w-4" />
            Thêm người dùng
          </Button>
        }
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <UserFilters
          role={role}
          status={status}
          orgId={orgId}
          onRoleChange={setRole}
          onStatusChange={setStatus}
          onOrgChange={setOrgId}
        />
        <UserActions />
      </div>

      <UserTable users={filtered} />
    </div>
  );
}
