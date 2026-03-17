import { StatusBadge } from "@/components/shared/status-badge";

interface ApprovalBadgeProps {
  status: string;
}

export function ApprovalBadge({ status }: ApprovalBadgeProps) {
  switch (status) {
    case "published":
      return <StatusBadge status="Đã duyệt" variant="success" />;
    case "draft":
      return <StatusBadge status="Nháp" variant="neutral" />;
    case "pending":
      return <StatusBadge status="Chờ duyệt" variant="warning" />;
    case "rejected":
      return <StatusBadge status="Từ chối" variant="danger" />;
    case "archived":
      return <StatusBadge status="Lưu trữ" variant="neutral" />;
    default:
      return <StatusBadge status={status} variant="neutral" />;
  }
}
