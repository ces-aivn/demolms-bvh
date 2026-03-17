import type { LucideIcon } from "lucide-react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Trend {
  value: number;
  direction: "up" | "down";
}

interface StatsWidgetProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  trend?: Trend;
  iconClassName?: string;
  className?: string;
}

export function StatsWidget({
  icon: Icon,
  value,
  label,
  trend,
  iconClassName,
  className,
}: StatsWidgetProps) {
  return (
    <Card className={cn("", className)}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-1">{label}</p>
            <p className="text-2xl font-bold text-foreground tracking-tight">
              {typeof value === "number" ? value.toLocaleString("vi-VN") : value}
            </p>
            {trend && (
              <div
                className={cn(
                  "flex items-center gap-1 mt-1.5 text-xs font-medium",
                  trend.direction === "up" ? "text-green-600" : "text-destructive"
                )}
              >
                {trend.direction === "up" ? (
                  <TrendingUp className="h-3.5 w-3.5" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5" />
                )}
                <span>
                  {trend.direction === "up" ? "+" : "-"}
                  {trend.value}% so với tháng trước
                </span>
              </div>
            )}
          </div>
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50",
              iconClassName
            )}
          >
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
