import Link from "next/link";
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      {/* Icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
        <SearchX className="h-10 w-10 text-primary" />
      </div>

      {/* 404 */}
      <p className="text-8xl font-bold text-primary/20 leading-none select-none mb-2">
        404
      </p>

      {/* Title */}
      <h1 className="text-2xl font-bold text-foreground mb-2">
        Trang không tồn tại
      </h1>

      {/* Description */}
      <p className="text-muted-foreground max-w-sm mb-8">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển. Vui lòng
        kiểm tra lại địa chỉ URL hoặc quay lại trang chủ.
      </p>

      {/* Action */}
      <Button asChild className="bg-primary hover:bg-primary/90">
        <Link href="/">Quay lại trang chủ</Link>
      </Button>
    </div>
  );
}
