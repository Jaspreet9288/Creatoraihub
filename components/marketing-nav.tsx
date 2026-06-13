"use client";

import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function MarketingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-sm">
          <Sparkles size={18} className="text-violet-500" />
          CreatorAI Hub
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </nav>

        {/* Desktop auth */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/auth/login">Sign in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth/sign-up">Get Started Free →</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background px-6 py-4 flex flex-col gap-4">
          <Link href="/pricing" className="text-sm" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/contact" className="text-sm" onClick={() => setOpen(false)}>Contact</Link>
          <div className="flex flex-col gap-2 pt-2 border-t">
            <Button variant="outline" size="sm" asChild>
              <Link href="/auth/login" onClick={() => setOpen(false)}>Sign in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/auth/sign-up" onClick={() => setOpen(false)}>Get Started Free</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
