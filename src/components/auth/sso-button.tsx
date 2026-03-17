import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SsoButtonProps {
  onClick?: () => void;
}

export function SsoButton({ onClick }: SsoButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full border-navy/30 text-navy hover:bg-navy/5 hover:border-navy/50"
      onClick={onClick}
    >
      <Shield className="mr-2 h-4 w-4 text-navy" />
      Đăng nhập SSO Chính phủ (Demo)
    </Button>
  );
}
