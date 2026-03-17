"use client";

import { UserCheck, UserX, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function UserActions() {
  function handleBulkAction(action: string) {
    alert(`Hành động hàng loạt: ${action}`);
  }

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-9 gap-1">
            Hành động hàng loạt
            <ChevronDown className="h-3.5 w-3.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={() => handleBulkAction("Kích hoạt")}>
            <UserCheck className="mr-2 h-4 w-4 text-green-600" />
            Kích hoạt
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleBulkAction("Vô hiệu hóa")}>
            <UserX className="mr-2 h-4 w-4 text-destructive" />
            Vô hiệu hóa
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleBulkAction("Xuất danh sách")}>
            <Download className="mr-2 h-4 w-4" />
            Xuất danh sách
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
