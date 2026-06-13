import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

export default function RefundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MarketingNav />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-20 w-full">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Refund Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: June 2025</p>

        <div className="flex flex-col gap-8">
          <section>
            <h2 className="text-lg font-semibold mb-3">Our Policy</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              We want you to be happy with CreatorAI Hub. If you're not satisfied with your Pro
              subscription, we offer a <strong>7-day money-back guarantee</strong> on your first
              payment. Simply contact us within 7 days of your purchase and we'll issue a full refund
              — no questions asked.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Eligibility</h2>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {[
                "Refund requests must be made within 7 days of the initial payment.",
                "Only your first Pro subscription payment is eligible for the money-back guarantee.",
                "Subsequent renewals are non-refundable, but you may cancel anytime to prevent future charges.",
                "Free plan usage is not eligible for refund (there is nothing charged).",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-violet-500 shrink-0">•</span> {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">How to Request a Refund</h2>
            <p className="text-muted-foreground leading-relaxed text-sm mb-3">
              To request a refund, email us at{" "}
              <a href="mailto:support@ai13.life" className="text-violet-600 hover:underline">
                support@ai13.life
              </a>{" "}
              with:
            </p>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {[
                "Your registered email address",
                "The date of your payment",
                "Your Razorpay payment ID (found in your payment confirmation email)",
                "A brief reason for the refund request (optional but helpful)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-violet-500 shrink-0">•</span> {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Processing Time</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Approved refunds are processed within 5–10 business days and will be returned to
              your original payment method. Razorpay may take additional time to credit the amount
              depending on your bank or card issuer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Cancellations</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              You may cancel your Pro subscription at any time from your account settings.
              Cancellation stops future renewals but does not refund the current billing period
              (unless you are within the 7-day money-back window).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Questions about this policy?{" "}
              <a href="mailto:support@ai13.life" className="text-violet-600 hover:underline">
                support@ai13.life
              </a>
            </p>
          </section>
        </div>
      </main>
      <MarketingFooter />
    </div>
  );
}
