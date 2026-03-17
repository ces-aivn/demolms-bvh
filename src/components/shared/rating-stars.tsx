import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  showValue?: boolean;
  className?: string;
}

export function RatingStars({ rating, showValue = false, className }: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-3.5 w-3.5",
              i < fullStars
                ? "fill-secondary text-secondary"
                : i === fullStars && hasHalf
                ? "fill-secondary/50 text-secondary"
                : "fill-none text-muted-foreground"
            )}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-xs font-medium text-foreground">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}
