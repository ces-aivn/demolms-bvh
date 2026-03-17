interface LineChartProps {
  data: { label: string; value: number }[];
  color?: string;
}

export function LineChart({ data, color = "#B71C1C" }: LineChartProps) {
  if (data.length === 0) return null;

  const W = 400;
  const H = 140;
  const PAD = { top: 10, right: 10, bottom: 32, left: 36 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;

  const maxVal = Math.max(...data.map((d) => d.value), 1);
  const minVal = Math.min(...data.map((d) => d.value), 0);
  const range = maxVal - minVal || 1;

  const xStep = data.length > 1 ? chartW / (data.length - 1) : 0;

  const points = data.map((d, i) => ({
    x: PAD.left + i * xStep,
    y: PAD.top + chartH - ((d.value - minVal) / range) * chartH,
    value: d.value,
    label: d.label,
  }));

  const polyline = points.map((p) => `${p.x},${p.y}`).join(" ");

  // Y-axis ticks
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((t) => ({
    y: PAD.top + chartH - t * chartH,
    val: Math.round(minVal + t * range),
  }));

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      style={{ height: "140px" }}
    >
      {/* Grid lines */}
      {yTicks.map((tick) => (
        <g key={tick.y}>
          <line
            x1={PAD.left}
            y1={tick.y}
            x2={W - PAD.right}
            y2={tick.y}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          <text
            x={PAD.left - 4}
            y={tick.y + 4}
            textAnchor="end"
            fontSize="9"
            fill="#9ca3af"
          >
            {tick.val}
          </text>
        </g>
      ))}

      {/* Line */}
      <polyline
        points={polyline}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Area fill */}
      <polygon
        points={`${PAD.left},${PAD.top + chartH} ${polyline} ${PAD.left + (data.length - 1) * xStep},${PAD.top + chartH}`}
        fill={color}
        fillOpacity="0.08"
      />

      {/* Dots */}
      {points.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="3"
          fill="white"
          stroke={color}
          strokeWidth="2"
        />
      ))}

      {/* X-axis labels — show every 3rd to avoid crowding */}
      {points.map((p, i) => {
        if (data.length > 6 && i % 3 !== 0 && i !== data.length - 1) return null;
        return (
          <text
            key={i}
            x={p.x}
            y={H - 4}
            textAnchor="middle"
            fontSize="9"
            fill="#9ca3af"
          >
            {p.label}
          </text>
        );
      })}
    </svg>
  );
}
