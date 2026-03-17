import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clock, Target, RefreshCw } from "lucide-react";

export function QuizSettings() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold">Cài đặt bài kiểm tra</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              Thời gian làm bài (phút)
            </label>
            <Input
              type="number"
              defaultValue={30}
              min={5}
              max={180}
              className="h-9 text-sm"
            />
            <p className="text-[11px] text-muted-foreground">0 = không giới hạn</p>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium flex items-center gap-1.5">
              <Target className="h-3.5 w-3.5 text-muted-foreground" />
              Điểm đạt tối thiểu (%)
            </label>
            <Input
              type="number"
              defaultValue={60}
              min={0}
              max={100}
              className="h-9 text-sm"
            />
            <p className="text-[11px] text-muted-foreground">Cần đạt để hoàn thành</p>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium flex items-center gap-1.5">
              <RefreshCw className="h-3.5 w-3.5 text-muted-foreground" />
              Số lần làm tối đa
            </label>
            <Input
              type="number"
              defaultValue={3}
              min={1}
              max={10}
              className="h-9 text-sm"
            />
            <p className="text-[11px] text-muted-foreground">0 = không giới hạn</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
