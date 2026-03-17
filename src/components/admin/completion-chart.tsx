import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "@/components/charts/bar-chart";

const MONTHS = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"];

interface CompletionChartProps {
  monthlyCompletions: number[];
}

export function CompletionChart({ monthlyCompletions }: CompletionChartProps) {
  const data = monthlyCompletions.map((value, i) => ({ label: MONTHS[i], value }));

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Lượt hoàn thành theo tháng</CardTitle>
      </CardHeader>
      <CardContent>
        <BarChart data={data} color="bg-green-500" />
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Tổng {monthlyCompletions.reduce((a, b) => a + b, 0).toLocaleString("vi-VN")} lượt hoàn thành trong năm
        </p>
      </CardContent>
    </Card>
  );
}
