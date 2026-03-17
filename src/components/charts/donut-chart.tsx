interface DonutChartProps {
  data: { label: string; value: number; color: string }[];
}

export function DonutChart({ data }: DonutChartProps) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const R = 52;
  const CX = 64;
  const CY = 64;
  const stroke = 20;

  let cumAngle = -Math.PI / 2;

  const segments = data.map((item) => {
    const angle = (item.value / total) * 2 * Math.PI;
    const x1 = CX + R * Math.cos(cumAngle);
    const y1 = CY + R * Math.sin(cumAngle);
    cumAngle += angle;
    const x2 = CX + R * Math.cos(cumAngle);
    const y2 = CY + R * Math.sin(cumAngle);
    const largeArc = angle > Math.PI ? 1 : 0;
    return { ...item, x1, y1, x2, y2, largeArc, angle };
  });

  return (
    <div className="flex items-center gap-6">
      <svg width="128" height="128" viewBox="0 0 128 128" className="shrink-0">
        {segments.map((seg, i) => {
          if (seg.angle < 0.01) return null;
          return (
            <path
              key={i}
              d={`M ${seg.x1} ${seg.y1} A ${R} ${R} 0 ${seg.largeArc} 1 ${seg.x2} ${seg.y2}`}
              fill="none"
              stroke={seg.color}
              strokeWidth={stroke}
            />
          );
        })}
        <circle cx={CX} cy={CY} r={R - stroke / 2 - 2} fill="white" />
        <text x={CX} y={CY - 6} textAnchor="middle" fontSize="18" fontWeight="bold" fill="#111827">
          {total.toLocaleString("vi-VN")}
        </text>
        <text x={CX} y={CY + 12} textAnchor="middle" fontSize="9" fill="#6b7280">
          tổng cộng
        </text>
      </svg>

      <div className="space-y-2 min-w-0">
        {data.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs text-muted-foreground truncate">{item.label}</span>
            <span className="text-xs font-semibold ml-auto pl-2">
              {((item.value / total) * 100).toFixed(0)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
