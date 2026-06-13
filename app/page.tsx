import Link from "next/link";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { Button } from "@/components/ui/button";
import {
  Sparkles, FileText, Hash, AlignLeft, Image, Lightbulb,
  CheckSquare, Crown, Zap, Tag, Video,
} from "lucide-react";

const tools = [
  { icon: Sparkles,    name: "Title Generator",            desc: "10 high-CTR titles built for clicks and search." },
  { icon: FileText,    name: "Script Writer",              desc: "Full structured script with hook, body & outro." },
  { icon: AlignLeft,   name: "Description Generator",      desc: "SEO-ready description with timestamps & CTAs." },
  { icon: Hash,        name: "Hashtag Generator",          desc: "30 trending hashtags to maximise reach." },
  { icon: Tag,         name: "Tags Generator",             desc: "Comma-separated tags that boost search ranking." },
  { icon: Video,       name: "Shorts Script Generator",    desc: "Punchy 60-second script built for Shorts." },
  { icon: Image,       name: "Thumbnail Prompt Generator", desc: "Midjourney & DALL·E prompts for eye-catching thumbnails." },
  { icon: Zap,         name: "Viral Hook Generator",       desc: "10 scroll-stopping hooks for your video intro." },
  { icon: Lightbulb,   name: "Content Ideas Generator",    desc: "20 unique video ideas tailored to your niche." },
  { icon: CheckSquare, name: "Upload Checklist",           desc: "Personalised pre-publish checklist so nothing slips." },
];

const steps = [
  { n: "01", title: "Sign up free", desc: "Create your account in seconds — no credit card required." },
  { n: "02", title: "Pick a tool",  desc: "Choose from 10 AI-powered tools built for YouTube creators." },
  { n: "03", title: "Generate & publish", desc: "Type your topic, hit Generate, copy the result, and post." },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MarketingNav />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="flex flex-col items-center text-center px-6 py-24 gap-6 bg-gradient-to-b from-violet-50/60 to-background dark:from-violet-950/20">
        <span className="rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 text-xs font-medium px-3 py-1">
          10 AI-powered YouTube tools
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl">
          Supercharge Your YouTube Channel with AI
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl">
          Write better titles, scripts, descriptions, hashtags, and more — in seconds.
          No API key. No setup. Just results.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="/auth/sign-up">Start for Free →</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────── */}
      <section className="border-y bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-3 gap-6 text-center">
          {[
            ["10", "Creator Tools"],
            ["0", "API Keys Needed"],
            ["∞", "Ideas Generated"],
          ].map(([num, label]) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-3xl font-extrabold text-violet-600">{num}</span>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tools Grid ──────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12 flex flex-col gap-3">
          <h2 className="text-3xl font-bold tracking-tight">Everything you need to grow</h2>
          <p className="text-muted-foreground">10 tools. One dashboard. Zero guesswork.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.name} className="rounded-xl border bg-card p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-lg bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center">
                  <Icon size={18} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{tool.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── How it works ────────────────────────── */}
      <section className="bg-muted/30 border-y">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12 flex flex-col gap-3">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="text-muted-foreground">From topic to published — in minutes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.n} className="flex flex-col gap-3">
                <span className="text-4xl font-black text-violet-200 dark:text-violet-800">{step.n}</span>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Preview ──────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12 flex flex-col gap-3">
          <h2 className="text-3xl font-bold tracking-tight">Simple pricing</h2>
          <p className="text-muted-foreground">Start free. Upgrade when you're ready.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Free */}
          <div className="rounded-xl border bg-card p-6 flex flex-col gap-4">
            <div>
              <p className="font-semibold">Free</p>
              <p className="text-3xl font-extrabold mt-1">₹0<span className="text-base font-normal text-muted-foreground">/mo</span></p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {["10 generations per day", "5 core tools", "Basic support"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <Button variant="outline" asChild className="mt-auto">
              <Link href="/auth/sign-up">Get started free</Link>
            </Button>
          </div>
          {/* Pro */}
          <div className="rounded-xl border-2 border-violet-500 bg-card p-6 flex flex-col gap-4 relative overflow-hidden">
            <span className="absolute top-3 right-3 text-[10px] font-bold uppercase bg-violet-500 text-white rounded-full px-2 py-0.5">Popular</span>
            <div>
              <p className="font-semibold">Pro</p>
              <p className="text-3xl font-extrabold mt-1">₹999<span className="text-base font-normal text-muted-foreground">/mo</span></p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {["Unlimited generations", "All 10 tools", "Priority support", "Export to Notion", "Advanced analytics"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-violet-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-auto bg-violet-600 hover:bg-violet-700">
              <Link href="/pricing">Upgrade to Pro →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────── */}
      <section className="bg-violet-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center flex flex-col items-center gap-6">
          <Crown size={32} className="text-yellow-300" />
          <h2 className="text-3xl font-bold">Ready to grow your channel?</h2>
          <p className="text-violet-200 max-w-md">
            Join thousands of creators using CreatorAI Hub to save hours every week.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/auth/sign-up">Start for Free — No Card Required →</Link>
          </Button>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
