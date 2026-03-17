import { BookOpen, Award, CheckCircle, Star, UserPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ActivityItem {
  id: string;
  icon: "enroll" | "complete" | "badge" | "rating" | "join";
  text: string;
  time: string;
}

const ACTIVITIES: ActivityItem[] = [
  { id: "a1", icon: "enroll", text: "Đã đăng ký khóa học Pháp luật Du lịch Cơ bản", time: "1 ngày trước" },
  { id: "a2", icon: "complete", text: "Hoàn thành bài 3 - Nhận diện và Kiểm kê Di sản", time: "2 ngày trước" },
  { id: "a3", icon: "badge", text: "Đạt huy hiệu \"Điểm cao xuất sắc\"", time: "3 ngày trước" },
  { id: "a4", icon: "rating", text: "Đánh giá 5 sao khóa học Kỹ năng Hướng dẫn viên", time: "5 ngày trước" },
  { id: "a5", icon: "complete", text: "Hoàn thành khóa học Quản lý Di sản Văn hóa", time: "1 tuần trước" },
];

const iconMap = {
  enroll: { Icon: BookOpen, color: "bg-blue-100 text-blue-600" },
  complete: { Icon: CheckCircle, color: "bg-green-100 text-green-600" },
  badge: { Icon: Award, color: "bg-yellow-100 text-yellow-600" },
  rating: { Icon: Star, color: "bg-purple-100 text-purple-600" },
  join: { Icon: UserPlus, color: "bg-primary-100 text-primary" },
};

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Hoạt động gần đây</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-3">
            {ACTIVITIES.map((item) => {
              const { Icon, color } = iconMap[item.icon];
              return (
                <div key={item.id} className="flex items-start gap-3 pl-2">
                  <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full z-10 ${color}`}>
                    <Icon className="h-3 w-3" />
                  </div>
                  <div className="flex-1 min-w-0 pb-1">
                    <p className="text-xs leading-snug">{item.text}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{item.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
