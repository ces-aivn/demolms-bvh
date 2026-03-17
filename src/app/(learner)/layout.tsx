"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LEARNER_NAV } from "@/lib/constants";

export default function LearnerLayout({ children }: { children: ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50/50 dark:bg-navy-950/20 selection:bg-primary/20">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex">
        <Sidebar
          items={LEARNER_NAV}
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((p) => !p)}
        />
      </div>

      {/* Mobile nav drawer */}
      <MobileNav
        items={LEARNER_NAV}
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          variant="portal"
          userName="Nguyễn Thị Minh Châu"
          userRole="learner"
          onMenuToggle={() => setMobileNavOpen(true)}
          notificationCount={3}
        />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
