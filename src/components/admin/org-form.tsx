"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { users } from "@/lib/mock-data";

interface OrgFormProps {
  open: boolean;
  onClose: () => void;
}

export function OrgForm({ open, onClose }: OrgFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quota, setQuota] = useState("");
  const [adminId, setAdminId] = useState("");

  const admins = users.filter((u) => u.role === "admin" || u.role === "instructor");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Đã lưu đơn vị: ${name}`);
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Thêm đơn vị mới</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="org-name" className="text-sm font-medium">Tên đơn vị *</label>
            <Input
              id="org-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="VD: Cục Di sản Văn hóa"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="org-desc" className="text-sm font-medium">Mô tả</label>
            <Input
              id="org-desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Mô tả ngắn về đơn vị"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="org-quota" className="text-sm font-medium">Hạn mức khóa học</label>
            <Input
              id="org-quota"
              type="number"
              min={1}
              value={quota}
              onChange={(e) => setQuota(e.target.value)}
              placeholder="VD: 20"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">Quản trị viên</label>
            <Select value={adminId} onValueChange={setAdminId}>
              <SelectTrigger className="h-9 text-sm">
                <SelectValue placeholder="Chọn quản trị viên" />
              </SelectTrigger>
              <SelectContent>
                {admins.map((u) => (
                  <SelectItem key={u.id} value={u.id}>{u.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="gap-2 pt-2">
            <Button type="button" variant="outline" onClick={onClose}>Hủy</Button>
            <Button type="submit">Lưu đơn vị</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
