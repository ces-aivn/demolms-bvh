"use client";

import { useState } from "react";
import { Eye, UserCheck, UserX } from "lucide-react";
import { DataTable, type Column } from "@/components/shared/data-table";
import { StatusBadge } from "@/components/shared/status-badge";
import { ActionDropdown } from "@/components/shared/action-dropdown";
import { UserDetailModal } from "@/components/admin/user-detail-modal";
import { organizations } from "@/lib/mock-data";
import type { User } from "@/types";

interface UserTableProps {
  users: User[];
}

const roleConfig: Record<string, { label: string; className: string }> = {
  learner: { label: "Học viên", className: "bg-blue-100 text-blue-800 border-blue-200" },
  instructor: { label: "Giảng viên", className: "bg-purple-100 text-purple-800 border-purple-200" },
  admin: { label: "Quản trị", className: "bg-red-100 text-red-800 border-red-200" },
};

export function UserTable({ users }: UserTableProps) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const columns: Column<Record<string, unknown>>[] = [
    {
      key: "name",
      label: "Họ tên",
      sortable: true,
      render: (val) => <span className="font-medium">{String(val)}</span>,
    },
    {
      key: "email",
      label: "Email",
      sortable: true,
      render: (val) => <span className="text-muted-foreground text-xs">{String(val)}</span>,
    },
    {
      key: "role",
      label: "Vai trò",
      sortable: true,
      render: (val) => {
        const cfg = roleConfig[String(val)] ?? { label: String(val), className: "" };
        return (
          <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${cfg.className}`}>
            {cfg.label}
          </span>
        );
      },
    },
    {
      key: "organizationId",
      label: "Đơn vị",
      sortable: true,
      render: (val) => {
        const org = organizations.find((o) => o.id === String(val));
        return <span className="text-sm">{org?.shortName ?? "—"}</span>;
      },
    },
    {
      key: "status",
      label: "Trạng thái",
      sortable: true,
      render: (val) => (
        <StatusBadge
          status={val === "inactive" ? "Không hoạt động" : "Hoạt động"}
          variant={val === "inactive" ? "neutral" : "success"}
        />
      ),
    },
    {
      key: "joinedDate",
      label: "Ngày tham gia",
      sortable: true,
      render: (val) => <span className="text-xs text-muted-foreground">{String(val)}</span>,
    },
    {
      key: "id",
      label: "Hành động",
      render: (_val, row) => (
        <ActionDropdown
          actions={[
            { label: "Xem chi tiết", icon: Eye, onClick: () => setSelectedUser(row as unknown as User) },
            { label: "Kích hoạt", icon: UserCheck },
            { label: "Vô hiệu hóa", icon: UserX, variant: "destructive" },
          ]}
        />
      ),
    },
  ];

  return (
    <>
      <DataTable
        columns={columns}
        data={users as unknown as Record<string, unknown>[]}
        searchPlaceholder="Tìm kiếm người dùng..."
        searchKeys={["name", "email"]}
        pageSize={10}
      />
      <UserDetailModal
        user={selectedUser}
        open={!!selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </>
  );
}
