"use client";

import { useState } from "react";
import { Eye, Edit, Trash2 } from "lucide-react";
import { DataTable, type Column } from "@/components/shared/data-table";
import { StatusBadge } from "@/components/shared/status-badge";
import { ActionDropdown } from "@/components/shared/action-dropdown";
import { OrgDetailModal } from "@/components/admin/org-detail-modal";
import { users } from "@/lib/mock-data";
import type { Organization } from "@/types";

interface OrgTableProps {
  orgs: Organization[];
}

export function OrgTable({ orgs }: OrgTableProps) {
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);

  const columns: Column<Record<string, unknown>>[] = [
    {
      key: "name",
      label: "Tên đơn vị",
      sortable: true,
      render: (val, row) => (
        <div>
          <p className="font-medium text-sm">{String(val)}</p>
          <p className="text-xs text-muted-foreground">{String(row.shortName ?? "")}</p>
        </div>
      ),
    },
    {
      key: "courseCount",
      label: "Khóa học",
      sortable: true,
      render: (val) => (
        <span className="text-sm font-medium">{String(val)}</span>
      ),
    },
    {
      key: "memberCount",
      label: "Thành viên",
      sortable: true,
      render: (val) => (
        <span className="text-sm">{Number(val).toLocaleString("vi-VN")}</span>
      ),
    },
    {
      key: "id",
      label: "Hạn mức",
      render: () => <span className="text-sm text-muted-foreground">50 khóa</span>,
    },
    {
      key: "id",
      label: "Quản trị viên",
      render: (_val, row) => {
        const admin = users.find(
          (u) => u.organizationId === String(row.id) && u.role === "admin"
        );
        return <span className="text-sm">{admin?.name ?? "—"}</span>;
      },
    },
    {
      key: "id",
      label: "Trạng thái",
      render: () => <StatusBadge status="Hoạt động" variant="success" />,
    },
    {
      key: "id",
      label: "Hành động",
      render: (_val, row) => (
        <ActionDropdown
          actions={[
            {
              label: "Xem chi tiết",
              icon: Eye,
              onClick: () => setSelectedOrg(row as unknown as Organization),
            },
            { label: "Chỉnh sửa", icon: Edit },
            { label: "Xóa đơn vị", icon: Trash2, variant: "destructive" },
          ]}
        />
      ),
    },
  ];

  return (
    <>
      <DataTable
        columns={columns}
        data={orgs as unknown as Record<string, unknown>[]}
        searchPlaceholder="Tìm kiếm đơn vị..."
        searchKeys={["name", "shortName"]}
        pageSize={10}
      />
      <OrgDetailModal
        org={selectedOrg}
        open={!!selectedOrg}
        onClose={() => setSelectedOrg(null)}
      />
    </>
  );
}
