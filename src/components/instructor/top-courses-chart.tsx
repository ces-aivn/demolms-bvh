import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "@/components/charts/bar-chart";
import type { InstructorStats } from "@/types";

interface TopCoursesChartProps {
  stats: InstructorStats;
}

export function TopCoursesChart({ stats }: TopCoursesChartProps) {
  const chartData = stats.topCourses.map((c) => ({
    label: c.title.length > 30 ? c.title.slice(0, 30) + "…" : c.title,
    value: c.enrolled,
  }));

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Top khóa học theo học viên</CardTitle>
      </CardHeader>
      <CardContent>
        <BarChart data={chartData} color="bg-primary" labelWidth="w-44" />
      </CardContent>
    </Card>
  );
}
