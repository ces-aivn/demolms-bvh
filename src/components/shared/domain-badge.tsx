import { cn } from "@/lib/utils";

interface DomainBadgeProps {
  domain: "van-hoa" | "the-thao" | "du-lich";
  className?: string;
}

const DOMAIN_CONFIG = {
  "van-hoa": { label: "Văn hóa", className: "bg-red-100 text-red-800" },
  "the-thao": { label: "Thể thao", className: "bg-blue-100 text-blue-800" },
  "du-lich": { label: "Du lịch", className: "bg-green-100 text-green-800" },
} as const;

export function DomainBadge({ domain, className }: DomainBadgeProps) {
  const config = DOMAIN_CONFIG[domain];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
