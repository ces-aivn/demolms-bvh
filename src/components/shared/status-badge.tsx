import { cn } from "@/lib/utils";

type Variant = "success" | "warning" | "danger" | "info" | "neutral";

interface StatusBadgeProps {
  status: string;
  variant: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  success: "bg-green-100 text-green-800 border-green-200",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
  danger: "bg-red-100 text-red-800 border-red-200",
  info: "bg-blue-100 text-blue-800 border-blue-200",
  neutral: "bg-gray-100 text-gray-600 border-gray-200",
};

export function StatusBadge({ status, variant, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {status}
    </span>
  );
}
