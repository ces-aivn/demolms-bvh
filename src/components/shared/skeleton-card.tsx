export function SkeletonCard() {
  return (
    <div className="rounded-lg border bg-card overflow-hidden animate-pulse">
      {/* Thumbnail */}
      <div className="h-40 bg-gray-200" />
      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Badge row */}
        <div className="flex gap-2">
          <div className="h-5 w-16 rounded-full bg-gray-200" />
          <div className="h-5 w-12 rounded-full bg-gray-200" />
        </div>
        {/* Title */}
        <div className="space-y-1.5">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-4/5" />
        </div>
        {/* Instructor */}
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gray-200 shrink-0" />
          <div className="h-3 bg-gray-200 rounded w-28" />
        </div>
        {/* Progress bar */}
        <div className="h-1.5 bg-gray-200 rounded-full w-full" />
        {/* Footer */}
        <div className="flex items-center justify-between pt-1">
          <div className="h-3 bg-gray-200 rounded w-20" />
          <div className="h-3 bg-gray-200 rounded w-12" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonCardGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
