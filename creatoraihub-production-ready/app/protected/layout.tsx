import Link from "next/link";

import { AuthButton } from "@/components/auth-button";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-muted/20">
      <nav className="border-b bg-background">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/protected" className="text-lg font-bold">
            CreatorAI Hub
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="hidden text-muted-foreground hover:text-foreground sm:inline">
              Home
            </Link>
            <AuthButton />
          </div>
        </div>
      </nav>
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">{children}</div>
    </main>
  );
}
