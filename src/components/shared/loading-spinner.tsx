import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

const SIZE_CLASSES = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-2",
  lg: "h-12 w-12 border-3",
};

export function LoadingSpinner({ size = "md", className, label }: LoadingSpinnerProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
      <div
        className={cn(
          "rounded-full border-primary/20 border-t-primary animate-spin",
          SIZE_CLASSES[size]
        )}
        role="status"
        aria-label={label ?? "Đang tải..."}
      />
      {label && (
        <p className="text-sm text-muted-foreground">{label}</p>
      )}
    </div>
  );
}

export function FullPageSpinner({ label = "Đang tải..." }: { label?: string }) {
  return (
    <div className="flex h-64 w-full items-center justify-center">
      <LoadingSpinner size="lg" label={label} />
    </div>
  );
}
