import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, UserPlus, Star, BookOpen, Award } from "lucide-react";

const ACTIVITIES = [
  {
    id: 1,
    icon: CheckCircle2,
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
    text: "Trần Đức Mạnh đã hoàn thành Bài 12: Phương pháp kiểm kê di sản",
    time: "5 phút trước",
  },
  {
    id: 2,
    icon: UserPlus,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    text: "Ngô Thị Bích Ngọc đã đăng ký Luật Di sản Văn hóa",
    time: "23 phút trước",
  },
  {
    id: 3,
    icon: Star,
    iconColor: "text-yellow-600",
    bgColor: "bg-yellow-50",
    text: "Phạm Văn Hải đã đánh giá 5 sao cho khóa Quản lý Di sản Văn hóa Phi vật thể",
    time: "1 giờ trước",
  },
  {
    id: 4,
    icon: BookOpen,
    iconColor: "text-primary",
    bgColor: "bg-primary-50",
    text: "Lê Thị Phương Thảo đã bắt đầu Module 3: Bảo tồn và phát huy giá trị",
    time: "2 giờ trước",
  },
  {
    id: 5,
    icon: Award,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
    text: "Bùi Văn Long đã nhận chứng chỉ hoàn thành Bảo tồn Kiến trúc Cổ",
    time: "4 giờ trước",
  },
  {
    id: 6,
    icon: UserPlus,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    text: "Đinh Quốc Hùng đã đăng ký Quản lý Di sản Văn hóa Phi vật thể",
    time: "Hôm qua",
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Hoạt động gần đây</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {ACTIVITIES.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="flex items-start gap-3">
              <div className={`h-8 w-8 rounded-full ${item.bgColor} flex items-center justify-center shrink-0 mt-0.5`}>
                <Icon className={`h-4 w-4 ${item.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm leading-snug line-clamp-2">{item.text}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.time}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
