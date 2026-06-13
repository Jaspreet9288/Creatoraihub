import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MarketingNav />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-20 w-full">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: June 2025</p>

        <div className="flex flex-col gap-8">
          <section>
            <h2 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              By accessing or using CreatorAI Hub ("Service"), you agree to be bound by these
              Terms of Service. If you do not agree to these terms, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              CreatorAI Hub provides AI-powered content generation tools for YouTube creators,
              including title generators, script writers, hashtag generators, and more.
              The Service is provided on an "as is" and "as available" basis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">3. Account Registration</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              You must register for an account to use the Service. You are responsible for
              maintaining the confidentiality of your login credentials and for all activity
              under your account. You must be at least 13 years old to register.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">4. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              You agree not to: use the Service for any unlawful purpose; attempt to reverse-engineer
              or scrape the Service; use the Service to generate spam, misleading, or harmful content;
              share your account credentials with others; or circumvent usage limits.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">5. Content Ownership</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Content you generate using CreatorAI Hub is yours to use. We do not claim ownership
              of generated content. However, you are solely responsible for ensuring that
              generated content does not infringe third-party rights before publishing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">6. Subscription & Billing</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              The Pro plan is billed monthly via Razorpay. Subscriptions auto-renew until cancelled.
              You may cancel at any time; cancellation takes effect at the end of the current
              billing period. No refunds are issued for partial months — see our Refund Policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              To the fullest extent permitted by law, CreatorAI Hub shall not be liable for any
              indirect, incidental, special, or consequential damages arising from your use of
              the Service. Our total liability shall not exceed the amount paid by you in the
              30 days preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">8. Termination</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              We reserve the right to suspend or terminate your account at any time for violation
              of these Terms. You may also delete your account at any time by contacting
              support@ai13.life.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">9. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              We may update these Terms at any time. We will notify you of material changes
              via email. Continued use of the Service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">10. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              These Terms are governed by the laws of India. Any disputes shall be resolved
              in the courts of India.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">11. Contact</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Questions?{" "}
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
