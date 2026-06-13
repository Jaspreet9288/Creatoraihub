import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Crown, ArrowRight } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="flex flex-col items-center text-center gap-6 max-w-sm">
        <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <Crown size={36} className="text-green-600 dark:text-green-400" />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">You're on Pro! 🎉</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Payment confirmed. Your Pro subscription is now active. Enjoy unlimited
            generations and all 10 creator tools.
          </p>
        </div>

        <div className="rounded-xl border bg-muted/40 p-4 w-full text-left flex flex-col gap-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">What's unlocked</p>
          {[
            "Unlimited generations",
            "All 10 creator tools",
            "Script Writer & Shorts Script",
            "Thumbnail Prompt Generator",
            "Upload Checklist Generator",
          ].map((f) => (
            <p key={f} className="text-sm flex items-center gap-2">
              <span className="text-green-500">✓</span> {f}
            </p>
          ))}
        </div>

        <Button asChild className="w-full bg-violet-600 hover:bg-violet-700">
          <Link href="/protected">
            Go to Dashboard <ArrowRight size={15} className="ml-1.5" />
          </Link>
        </Button>
        <p className="text-xs text-muted-foreground">
          A receipt has been sent to your email. Questions?{" "}
          <a href="mailto:support@ai13.life" className="underline hover:text-foreground">
            support@ai13.life
          </a>
        </p>
      </div>
    </div>
  );
}
