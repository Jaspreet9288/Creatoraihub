"use client";

import Link from "next/link";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { Button } from "@/components/ui/button";
import { Check, Crown, Zap } from "lucide-react";

const FREE_FEATURES = [
  "10 generations per day",
  "5 core tools (Title, Hashtag, Tags, Viral Hook, Content Ideas)",
  "Copy to clipboard",
  "Basic email support",
];

const PRO_FEATURES = [
  "Unlimited generations",
  "All 10 creator tools",
  "Script Writer & Shorts Script",
  "Thumbnail Prompt Generator",
  "Upload Checklist Generator",
  "Description Generator",
  "Priority support",
  "Export to Notion (coming soon)",
  "Advanced analytics (coming soon)",
];

export default function PricingPage() {
  const handleUpgrade = () => {
    alert(
      "Payment integration via Razorpay is coming soon!\n\nPlease contact us at support@ai13.life to upgrade manually for now."
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MarketingNav />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-20 w-full">
        {/* Header */}
        <div className="text-center flex flex-col gap-3 mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight">Simple, transparent pricing</h1>
          <p className="text-muted-foreground text-lg">
            Start free. Upgrade when you need more power.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
          {/* Free */}
          <div className="rounded-2xl border bg-card p-8 flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap size={18} className="text-muted-foreground" />
                <span className="font-semibold">Free</span>
              </div>
              <p className="text-4xl font-extrabold">₹0</p>
              <p className="text-sm text-muted-foreground mt-1">Forever free, no card needed</p>
            </div>
            <ul className="flex flex-col gap-3">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" asChild className="mt-auto">
              <Link href="/auth/sign-up">Get started free</Link>
            </Button>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border-2 border-violet-500 bg-card p-8 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-violet-500 text-white text-[10px] font-bold uppercase rounded-full px-2.5 py-1">
              <Crown size={10} /> Most Popular
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Crown size={18} className="text-violet-500" />
                <span className="font-semibold">Pro</span>
              </div>
              <p className="text-4xl font-extrabold">₹999</p>
              <p className="text-sm text-muted-foreground mt-1">per month, billed monthly</p>
            </div>
            <ul className="flex flex-col gap-3">
              {PRO_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-violet-500 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={handleUpgrade}
              className="mt-auto bg-violet-600 hover:bg-violet-700"
            >
              Upgrade to Pro — ₹999/month
            </Button>
            <p className="text-xs text-muted-foreground text-center -mt-2">
              Secure payment via Razorpay · Cancel anytime
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">Frequently asked questions</h2>
          <div className="flex flex-col gap-6">
            {[
              {
                q: "Do I need to enter my card details for the free plan?",
                a: "No. The free plan is completely free — no credit card required at signup.",
              },
              {
                q: "What payment methods does the Pro plan accept?",
                a: "We use Razorpay which supports UPI, debit/credit cards, net banking, and wallets.",
              },
              {
                q: "Can I cancel my Pro subscription anytime?",
                a: "Yes. You can cancel at any time from your account settings. You'll retain Pro access until the end of the billing period.",
              },
              {
                q: "Do I need an AI API key?",
                a: "No. CreatorAI Hub handles all AI generation — you never need to manage your own API keys.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b pb-6 last:border-0 last:pb-0">
                <p className="font-semibold text-sm mb-2">{item.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
