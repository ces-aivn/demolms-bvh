import { cn } from "@/lib/utils";

type Variant = "success" | "warning" | "danger" | "info" | "neutral";

interface StatusBadgeProps {
  status: string;
  variant: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  success: "bg-green-50 text-green-700 border-green-200",
  warning: "bg-yellow-50 text-yellow-700 border-yellow-200",
  danger: "bg-red-50 text-red-700 border-red-200",
  info: "bg-blue-50 text-blue-700 border-blue-200",
  neutral: "bg-gray-50 text-gray-600 border-gray-200",
};

const dotColors: Record<Variant, string> = {
  success: "bg-green-500",
  warning: "bg-yellow-500",
  danger: "bg-red-500",
  info: "bg-blue-500",
  neutral: "bg-gray-400",
};

export function StatusBadge({ status, variant, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dotColors[variant])} />
      {status}
    </span>
  );
}
