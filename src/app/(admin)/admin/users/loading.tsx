import { SkeletonTable } from "@/components/shared/skeleton-table";

export default function AdminUsersLoading() {
  return (
    <div className="space-y-6">
      {/* Header skeleton */}
      <div className="animate-pulse flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-7 w-44 bg-gray-200 rounded" />
          <div className="h-4 w-60 bg-gray-200 rounded" />
        </div>
        <div className="h-9 w-32 bg-gray-200 rounded-md" />
      </div>
      {/* Filter bar */}
      <div className="animate-pulse flex gap-3">
        <div className="h-9 w-64 bg-gray-200 rounded-md" />
        <div className="h-9 w-32 bg-gray-200 rounded-md" />
        <div className="h-9 w-32 bg-gray-200 rounded-md" />
      </div>
      <SkeletonTable rows={8} cols={6} />
    </div>
  );
}
