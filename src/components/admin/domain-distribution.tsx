import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DonutChart } from "@/components/charts/donut-chart";

interface DomainDistributionProps {
  data: { label: string; value: number; color: string }[];
}

export function DomainDistribution({ data }: DomainDistributionProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Phân bố khóa học theo lĩnh vực</CardTitle>
      </CardHeader>
      <CardContent>
        <DonutChart data={data} />
      </CardContent>
    </Card>
  );
}
