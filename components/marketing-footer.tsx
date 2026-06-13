import Link from "next/link";
import { Sparkles } from "lucide-react";

export function MarketingFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-sm w-fit">
              <Sparkles size={16} className="text-violet-500" />
              CreatorAI Hub
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              10 AI-powered tools for YouTube creators. Write better titles,
              scripts, and descriptions — instantly.
            </p>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Product</p>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
              <Link href="/auth/sign-up" className="hover:text-foreground transition-colors">Get Started Free</Link>
              <Link href="/auth/login" className="hover:text-foreground transition-colors">Sign In</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Legal</p>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="/refund" className="hover:text-foreground transition-colors">Refund Policy</Link>
            </nav>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CreatorAI Hub. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for YouTube creators 🎬
          </p>
        </div>
      </div>
    </footer>
  );
}
