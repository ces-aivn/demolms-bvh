import type { ReactNode } from "react";
import Link from "next/link";
import { MINISTRY_NAME, MINISTRY_SHORT } from "@/lib/constants";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-navy-50 flex flex-col">
      {/* Top bar */}
      <header className="px-6 py-4">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-primary text-white font-bold text-sm">
            BV
          </div>
          <div>
            <p className="font-bold text-primary text-sm leading-none">{MINISTRY_SHORT}</p>
            <p className="text-xs text-muted-foreground leading-none mt-0.5">E-Learning</p>
          </div>
        </Link>
      </header>

      {/* Main content centered */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">{children}</div>
      </main>

      {/* Footer note */}
      <footer className="px-6 py-4 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {MINISTRY_NAME}
        </p>
      </footer>
    </div>
  );
}
