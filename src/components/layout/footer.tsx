import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { MINISTRY_NAME, MINISTRY_SHORT, COPYRIGHT_YEAR } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-primary text-white font-bold text-sm">
                BV
              </div>
              <div>
                <p className="font-bold text-sm leading-none">{MINISTRY_SHORT}</p>
                <p className="text-xs text-white/60 mt-0.5">E-Learning Platform</p>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              Hệ thống học tập trực tuyến phục vụ đào tạo, bồi dưỡng cán bộ, công chức,
              viên chức ngành Văn hóa, Thể thao và Du lịch.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
                <span>51 Ngô Quyền, Hoàn Kiếm, Hà Nội</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <span>(024) 3943 6682</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <span>elearning@bvhttdl.gov.vn</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/90 uppercase tracking-wide">
              Liên kết nhanh
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                { label: "Trang chủ", href: "/" },
                { label: "Danh mục khóa học", href: "/courses" },
                { label: "Đăng ký học", href: "/register" },
                { label: "Đăng nhập", href: "/login" },
                { label: "Hướng dẫn sử dụng", href: "#" },
                { label: "Câu hỏi thường gặp", href: "#" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white/90 uppercase tracking-wide">
              Về nền tảng
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Nền tảng học tập trực tuyến được phát triển theo Đề án &ldquo;Chuyển đổi số
              ngành Văn hóa, Thể thao và Du lịch đến năm 2030&rdquo;.
            </p>
            <div className="space-y-1 text-sm text-white/70">
              <p>Hỗ trợ kỹ thuật: <span className="text-white/90">support@bvhttdl.gov.vn</span></p>
              <p>Giờ làm việc: Thứ 2 - Thứ 6, 8:00 - 17:00</p>
            </div>
            <div className="mt-4 flex gap-2">
              {["Chính sách", "Điều khoản", "Bảo mật"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs text-white/50 hover:text-white/80 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 lg:px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/50">
            &copy; {COPYRIGHT_YEAR} {MINISTRY_NAME}. Bảo lưu mọi quyền.
          </p>
          <p className="text-xs text-white/40">
            Phiên bản 1.0.0 | Cổng thông tin học tập điện tử
          </p>
        </div>
      </div>
    </footer>
  );
}
