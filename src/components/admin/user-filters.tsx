"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { organizations } from "@/lib/mock-data";

interface UserFiltersProps {
  role: string;
  status: string;
  orgId: string;
  onRoleChange: (v: string) => void;
  onStatusChange: (v: string) => void;
  onOrgChange: (v: string) => void;
}

export function UserFilters({ role, status, orgId, onRoleChange, onStatusChange, onOrgChange }: UserFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Select value={role} onValueChange={onRoleChange}>
        <SelectTrigger className="h-9 w-40 text-sm">
          <SelectValue placeholder="Vai trò" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tất cả vai trò</SelectItem>
          <SelectItem value="learner">Học viên</SelectItem>
          <SelectItem value="instructor">Giảng viên</SelectItem>
          <SelectItem value="admin">Quản trị viên</SelectItem>
        </SelectContent>
      </Select>

      <Select value={status} onValueChange={onStatusChange}>
        <SelectTrigger className="h-9 w-44 text-sm">
          <SelectValue placeholder="Trạng thái" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tất cả trạng thái</SelectItem>
          <SelectItem value="active">Hoạt động</SelectItem>
          <SelectItem value="inactive">Không hoạt động</SelectItem>
        </SelectContent>
      </Select>

      <Select value={orgId} onValueChange={onOrgChange}>
        <SelectTrigger className="h-9 w-52 text-sm">
          <SelectValue placeholder="Đơn vị" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tất cả đơn vị</SelectItem>
          {organizations.map((org) => (
            <SelectItem key={org.id} value={org.id}>{org.shortName}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
