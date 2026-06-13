import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-14 flex items-center px-6 gap-4">
        <Link
          href="/protected"
          className="flex items-center gap-2 font-semibold text-sm"
        >
          <Sparkles size={18} className="text-violet-500" />
          CreatorAI Hub
        </Link>
        <div className="flex-1" />
        <Link
          href="/pricing"
          className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition-colors mr-2"
        >
          Pricing
        </Link>
        <ThemeSwitcher />
        <Suspense fallback={<div className="h-8 w-20 animate-pulse rounded bg-muted" />}>
          <AuthButton />
        </Suspense>
      </nav>

      {/* Page content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  );
}
