import { SkeletonCardGrid } from "@/components/shared/skeleton-card";

export default function CoursesLoading() {
  return (
    <div className="space-y-6">
      {/* Header skeleton */}
      <div className="animate-pulse space-y-2">
        <div className="h-7 w-40 bg-gray-200 rounded" />
        <div className="h-4 w-64 bg-gray-200 rounded" />
      </div>
      {/* Filter bar skeleton */}
      <div className="animate-pulse flex gap-3 flex-wrap">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-9 w-28 bg-gray-200 rounded-md" />
        ))}
      </div>
      <SkeletonCardGrid count={6} />
    </div>
  );
}
