export function SkeletonTable({ rows = 5, cols = 5 }: { rows?: number; cols?: number }) {
  return (
    <div className="rounded-lg border bg-card overflow-hidden animate-pulse">
      {/* Table header */}
      <div className="border-b px-4 py-3 flex gap-4">
        {Array.from({ length: cols }).map((_, i) => (
          <div
            key={i}
            className="h-3.5 bg-gray-200 rounded"
            style={{ width: i === 0 ? "30%" : `${Math.floor(70 / (cols - 1))}%` }}
          />
        ))}
      </div>
      {/* Table rows */}
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <div
          key={rowIdx}
          className="border-b last:border-b-0 px-4 py-3.5 flex items-center gap-4"
        >
          {Array.from({ length: cols }).map((_, colIdx) => (
            <div
              key={colIdx}
              className={`h-3 rounded ${rowIdx % 2 === 0 ? "bg-gray-200" : "bg-gray-150"}`}
              style={{
                width: colIdx === 0 ? "30%" : `${Math.floor(70 / (cols - 1))}%`,
                backgroundColor: colIdx === 0 ? "#e5e7eb" : "#efefef",
              }}
            />
          ))}
        </div>
      ))}
      {/* Pagination placeholder */}
      <div className="px-4 py-3 flex items-center justify-between border-t">
        <div className="h-3 w-24 bg-gray-200 rounded" />
        <div className="flex gap-2">
          <div className="h-7 w-7 bg-gray-200 rounded" />
          <div className="h-7 w-7 bg-gray-200 rounded" />
          <div className="h-7 w-7 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
