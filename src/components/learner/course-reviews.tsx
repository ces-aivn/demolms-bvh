import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatDateVi } from "@/lib/utils";
import type { Review } from "@/types";

interface CourseReviewsProps {
  reviews: Review[];
  reviewerNames: Record<string, string>;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`h-3.5 w-3.5 ${s <= rating ? "fill-secondary text-secondary" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

export function CourseReviews({ reviews, reviewerNames }: CourseReviewsProps) {
  if (reviews.length === 0) {
    return <p className="text-sm text-muted-foreground">Chưa có đánh giá nào.</p>;
  }

  const avgRating = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;

  return (
    <div>
      <div className="flex items-center gap-3 mb-5 p-4 bg-muted/40 rounded-xl">
        <div className="text-center">
          <p className="text-4xl font-bold text-foreground">{avgRating.toFixed(1)}</p>
          <StarRating rating={Math.round(avgRating)} />
          <p className="text-xs text-muted-foreground mt-1">{reviews.length} đánh giá</p>
        </div>
        <div className="flex-1 space-y-1">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = reviews.filter((r) => r.rating === star).length;
            const pct = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
            return (
              <div key={star} className="flex items-center gap-2 text-xs">
                <span className="w-3 text-right text-muted-foreground">{star}</span>
                <Star className="h-3 w-3 fill-secondary text-secondary shrink-0" />
                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: `${pct}%` }} />
                </div>
                <span className="w-4 text-muted-foreground">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        {reviews.slice(0, 4).map((review) => (
          <div key={review.id} className="flex gap-3">
            <Avatar className="h-8 w-8 shrink-0">
              <AvatarFallback className="bg-primary-100 text-primary text-xs font-bold">
                {(reviewerNames[review.userId] ?? "?").charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium">{reviewerNames[review.userId] ?? "Học viên"}</span>
                <StarRating rating={review.rating} />
                <span className="text-xs text-muted-foreground ml-auto">{formatDateVi(review.date)}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
