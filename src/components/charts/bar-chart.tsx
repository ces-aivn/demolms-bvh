interface BarChartProps {
  data: { label: string; value: number }[];
  color?: string;
  maxValue?: number;
  labelWidth?: string;
}

export function BarChart({ data, color = "bg-primary", maxValue, labelWidth = "w-10" }: BarChartProps) {
  const max = maxValue ?? Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="space-y-2">
      {data.map((item) => {
        const pct = Math.round((item.value / max) * 100);
        return (
          <div key={item.label} className="flex items-center gap-3 group">
            <span className={`text-xs text-muted-foreground ${labelWidth} shrink-0 text-right truncate`}>
              {item.label}
            </span>
            <div className="flex-1 h-5 bg-muted/50 rounded-md overflow-hidden">
              <div
                className={`h-full rounded-md transition-all duration-500 group-hover:opacity-90 ${color}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-xs font-semibold w-10 text-right shrink-0 tabular-nums">
              {item.value.toLocaleString("vi-VN")}
            </span>
          </div>
        );
      })}
    </div>
  );
}
