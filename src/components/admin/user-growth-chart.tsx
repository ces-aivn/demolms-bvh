import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart } from "@/components/charts/line-chart";

const MONTHS = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"];

interface UserGrowthChartProps {
  monthlyUsers: number[];
}

export function UserGrowthChart({ monthlyUsers }: UserGrowthChartProps) {
  const data = monthlyUsers.map((value, i) => ({ label: MONTHS[i], value }));

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Người dùng mới theo tháng</CardTitle>
      </CardHeader>
      <CardContent>
        <LineChart data={data} color="#1A237E" />
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Tổng cộng {monthlyUsers.reduce((a, b) => a + b, 0).toLocaleString("vi-VN")} người dùng trong năm
        </p>
      </CardContent>
    </Card>
  );
}
