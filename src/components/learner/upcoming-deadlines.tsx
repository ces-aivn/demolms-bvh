import { Calendar, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Deadline {
  id: string;
  courseTitle: string;
  task: string;
  date: string;
  type: "quiz" | "assignment" | "live";
  urgent: boolean;
}

const MOCK_DEADLINES: Deadline[] = [
  { id: "d1", courseTitle: "Quản lý Di sản Văn hóa", task: "Bài kiểm tra chương 2", date: "2024-03-25", type: "quiz", urgent: true },
  { id: "d2", courseTitle: "Kỹ năng Hướng dẫn viên Du lịch", task: "Nộp bài tập thực hành", date: "2024-03-27", type: "assignment", urgent: true },
  { id: "d3", courseTitle: "Pháp luật Du lịch", task: "Bài kiểm tra cuối kỳ", date: "2024-03-30", type: "quiz", urgent: false },
  { id: "d4", courseTitle: "Bảo tồn Di tích Lịch sử", task: "Buổi học trực tuyến", date: "2024-04-02", type: "live", urgent: false },
  { id: "d5", courseTitle: "Luật Di sản Văn hóa", task: "Nộp bài luận", date: "2024-04-05", type: "assignment", urgent: false },
];

const typeLabel: Record<string, string> = {
  quiz: "Kiểm tra",
  assignment: "Nộp bài",
  live: "Học trực tiếp",
};

const typeColor: Record<string, string> = {
  quiz: "bg-blue-100 text-blue-700",
  assignment: "bg-purple-100 text-purple-700",
  live: "bg-green-100 text-green-700",
};

export function UpcomingDeadlines() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          Lịch sắp tới
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 pt-0">
        {MOCK_DEADLINES.map((d) => (
          <div
            key={d.id}
            className={cn(
              "flex items-start gap-3 p-2.5 rounded-lg border",
              d.urgent ? "border-red-200 bg-red-50" : "border-border bg-background"
            )}
          >
            {d.urgent && (
              <AlertCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate">{d.courseTitle}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{d.task}</p>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <Badge className={cn("text-[10px] px-1.5", typeColor[d.type])}>
                {typeLabel[d.type]}
              </Badge>
              <span className="text-[10px] text-muted-foreground">{d.date}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
