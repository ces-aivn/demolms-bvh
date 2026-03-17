import { FileText, Film, ImageIcon, Calendar, HardDrive } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { MediaItem } from "@/types";

interface MediaGridProps {
  items: MediaItem[];
}

const TYPE_CONFIG = {
  video: {
    label: "Video",
    className: "bg-blue-100 text-blue-700",
    Icon: Film,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-400",
  },
  document: {
    label: "Tài liệu",
    className: "bg-orange-100 text-orange-700",
    Icon: FileText,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-400",
  },
  image: {
    label: "Hình ảnh",
    className: "bg-green-100 text-green-700",
    Icon: ImageIcon,
    bgColor: "bg-green-50",
    iconColor: "text-green-400",
  },
};

export function MediaGrid({ items }: MediaGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        <FileText className="h-12 w-12 mx-auto mb-3 opacity-30" />
        <p className="text-sm">Không tìm thấy tệp nào.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((item) => {
        const cfg = TYPE_CONFIG[item.type];
        const Icon = cfg.Icon;
        return (
          <Card
            key={item.id}
            className="group hover:shadow-md transition-all cursor-pointer overflow-hidden"
          >
            {/* Thumbnail */}
            <div
              className={`aspect-video flex items-center justify-center ${cfg.bgColor} relative`}
            >
              <Icon className={`h-10 w-10 ${cfg.iconColor}`} />
              <div className="absolute top-2 left-2">
                <Badge className={`text-[10px] ${cfg.className}`}>
                  {cfg.label}
                </Badge>
              </div>
              {item.duration && (
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded">
                  {item.duration}
                </div>
              )}
            </div>

            <CardContent className="p-3">
              <p className="text-xs font-medium line-clamp-2 leading-snug mb-2">
                {item.filename}
              </p>
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <HardDrive className="h-3 w-3" />
                  {item.size}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(item.uploadDate).toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "2-digit",
                  })}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
