import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { DemoBanner } from "@/components/layout/demo-banner";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hệ thống Học tập Trực tuyến - Bộ VHTTDL",
  description:
    "Hệ thống học tập trực tuyến của Bộ Văn hóa, Thể thao và Du lịch Việt Nam. Nâng cao năng lực chuyên môn cho cán bộ, công chức, viên chức ngành văn hóa.",
  keywords: "học trực tuyến, bộ văn hóa, BVHTTDL, đào tạo, e-learning",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body className="antialiased font-sans">
        <DemoBanner />
        {children}
      </body>
    </html>
  );
}
