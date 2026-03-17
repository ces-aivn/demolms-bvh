export function SkeletonDashboard() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Page header */}
      <div className="space-y-2">
        <div className="h-7 w-56 bg-gray-200 rounded" />
        <div className="h-4 w-80 bg-gray-200 rounded" />
      </div>

      {/* Stats widgets row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-card p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-3.5 w-24 bg-gray-200 rounded" />
              <div className="h-8 w-8 bg-gray-200 rounded-lg" />
            </div>
            <div className="h-8 w-20 bg-gray-200 rounded" />
            <div className="h-3 w-32 bg-gray-200 rounded" />
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-lg border bg-card p-4 space-y-3">
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="h-48 bg-gray-200 rounded-lg" />
        </div>
        <div className="rounded-lg border bg-card p-4 space-y-3">
          <div className="h-4 w-28 bg-gray-200 rounded" />
          <div className="h-48 bg-gray-200 rounded-lg" />
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid gap-4 lg:grid-cols-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-card p-4 space-y-3">
            <div className="h-4 w-36 bg-gray-200 rounded" />
            {Array.from({ length: 4 }).map((_, j) => (
              <div key={j} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-200 shrink-0" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                  <div className="h-2.5 bg-gray-200 rounded w-1/2" />
                </div>
                <div className="h-5 w-14 bg-gray-200 rounded-full" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
