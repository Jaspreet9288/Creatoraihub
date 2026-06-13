import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MarketingNav />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-20 w-full">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: June 2025</p>

        <div className="prose prose-sm dark:prose-invert max-w-none flex flex-col gap-8">
          <section>
            <h2 className="text-lg font-semibold mb-3">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information you provide directly to us — including your name and email address when
              you create an account — and information about how you use CreatorAI Hub (pages visited,
              tools used, generation history).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to: provide, maintain, and improve our services;
              send you transactional emails (account confirmation, password reset); respond to your
              support requests; and monitor usage to prevent abuse.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">3. Cookies & Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies to maintain your session after login. We do not use third-party advertising
              cookies. Analytics data (page views, feature usage) may be collected in aggregate,
              anonymised form to improve the product.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">4. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or rent your personal information. We may share data with
              infrastructure providers (Supabase for authentication, Vercel for hosting) strictly
              as needed to operate the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your account data for as long as your account is active. You may request
              deletion of your account and associated data at any time by emailing
              support@ai13.life.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">6. Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use industry-standard measures (HTTPS, encrypted database storage, secure session
              handling) to protect your data. No method of transmission over the internet is 100%
              secure; we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, correct, or delete your personal data at any time.
              To exercise any of these rights, please contact us at support@ai13.life.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">8. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this policy from time to time. We will notify you of significant changes
              via email or a prominent notice on the site. Continued use after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">9. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions about this policy? Contact us at{" "}
              <a href="mailto:support@ai13.life" className="text-violet-600 hover:underline">
                support@ai13.life
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <MarketingFooter />
    </div>
  );
}
