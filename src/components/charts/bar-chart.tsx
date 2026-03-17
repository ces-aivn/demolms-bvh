interface BarChartProps {
  data: { label: string; value: number }[];
  color?: string;
  maxValue?: number;
}

export function BarChart({ data, color = "bg-primary", maxValue }: BarChartProps) {
  const max = maxValue ?? Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="space-y-2.5">
      {data.map((item) => {
        const pct = Math.round((item.value / max) * 100);
        return (
          <div key={item.label} className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground w-44 truncate shrink-0 text-right">
              {item.label}
            </span>
            <div className="flex-1 h-6 bg-muted rounded overflow-hidden">
              <div
                className={`h-full rounded transition-all ${color}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-xs font-semibold w-10 text-right shrink-0">
              {item.value.toLocaleString("vi-VN")}
            </span>
          </div>
        );
      })}
    </div>
  );
}
