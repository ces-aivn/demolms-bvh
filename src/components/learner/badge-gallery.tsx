import { Award, Star, BookOpen, Trophy, Globe, Zap, MessageSquare, Shield, Monitor, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Badge } from "@/types";

const ICON_MAP: Record<string, React.ElementType> = {
  Award, Star, BookOpen, Trophy, Globe, Zap, MessageSquare, Shield, Monitor, Users,
};

interface BadgeGalleryProps {
  badges: Badge[];
}

export function BadgeGallery({ badges }: BadgeGalleryProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {badges.map((badge) => {
        const Icon = ICON_MAP[badge.icon] ?? Award;
        return (
          <div
            key={badge.id}
            className={cn(
              "flex flex-col items-center gap-2 p-3 rounded-xl border text-center transition-all",
              badge.earned
                ? "border-secondary/50 bg-secondary/5 hover:shadow-md"
                : "border-border bg-muted/30 opacity-50 grayscale"
            )}
          >
            <div className={cn(
              "h-10 w-10 rounded-full flex items-center justify-center",
              badge.earned ? "bg-secondary/20" : "bg-muted"
            )}>
              <Icon className={cn("h-5 w-5", badge.earned ? "text-secondary" : "text-muted-foreground")} />
            </div>
            <div>
              <p className="text-xs font-semibold leading-snug">{badge.name}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">{badge.description}</p>
            </div>
            {badge.earned ? (
              <span className="text-[10px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Đã đạt</span>
            ) : (
              <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">Chưa đạt</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
