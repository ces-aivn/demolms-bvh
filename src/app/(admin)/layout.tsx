"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ADMIN_NAV } from "@/lib/constants";
import { Sidebar } from "@/components/layout/sidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50/80 dark:bg-navy-950/40 selection:bg-primary/20">
      {/* Desktop sidebar — navy theme for admin */}
      <div className="hidden lg:flex">
        <Sidebar
          items={ADMIN_NAV}
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((p) => !p)}
          className="bg-navy-900 border-navy-800 [&_a]:text-white/70 [&_a:hover]:bg-white/10 [&_a:hover]:text-white [&_.text-primary]:text-secondary [&_.bg-primary-50]:bg-white/10 [&_.border-primary]:border-secondary"
        />
      </div>

      {/* Mobile nav drawer */}
      <MobileNav
        items={ADMIN_NAV}
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          variant="portal"
          userName="Đinh Thị Thu Hương"
          userRole="admin"
          onMenuToggle={() => setMobileNavOpen(true)}
          notificationCount={5}
        />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
