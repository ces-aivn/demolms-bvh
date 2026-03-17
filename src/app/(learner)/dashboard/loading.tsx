import { SkeletonDashboard } from "@/components/shared/skeleton-dashboard";

export default function LearnerDashboardLoading() {
  return (
    <div className="p-4 lg:p-6">
      <SkeletonDashboard />
    </div>
  );
}
