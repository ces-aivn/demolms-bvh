"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { INSTRUCTOR_NAV } from "@/lib/constants";

export default function InstructorLayout({ children }: { children: ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex">
        <Sidebar
          items={INSTRUCTOR_NAV}
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((p) => !p)}
        />
      </div>

      {/* Mobile nav drawer */}
      <MobileNav
        items={INSTRUCTOR_NAV}
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          variant="portal"
          userName="PGS.TS Nguyễn Văn An"
          userRole="instructor"
          onMenuToggle={() => setMobileNavOpen(true)}
          notificationCount={1}
        />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
