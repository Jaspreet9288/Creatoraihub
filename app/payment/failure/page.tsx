import Link from "next/link";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

export default function PaymentFailurePage() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="flex flex-col items-center text-center gap-6 max-w-sm">
        <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
          <XCircle size={36} className="text-red-500" />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Payment failed</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Something went wrong with your payment. Don't worry — you have not been charged.
            Please try again or contact us for help.
          </p>
        </div>

        <div className="rounded-xl border bg-muted/40 p-4 w-full text-left flex flex-col gap-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Common reasons</p>
          {[
            "Insufficient balance",
            "Card declined by bank",
            "Network interruption",
            "UPI timeout",
          ].map((r) => (
            <p key={r} className="text-sm flex items-center gap-2">
              <span className="text-red-400">•</span> {r}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Button asChild className="w-full bg-violet-600 hover:bg-violet-700">
            <Link href="/pricing">Try Again →</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/protected">Back to Dashboard</Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          Need help?{" "}
          <a href="mailto:support@ai13.life" className="underline hover:text-foreground">
            support@ai13.life
          </a>
        </p>
      </div>
    </div>
  );
}
