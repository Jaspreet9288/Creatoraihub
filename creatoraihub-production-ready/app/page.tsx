import Link from "next/link";
import { ArrowRight, BarChart3, FileText, Hash, Lightbulb, PenLine, PlaySquare, Sparkles, Wand2 } from "lucide-react";

import { AuthButton } from "@/components/auth-button";
import { Button } from "@/components/ui/button";

const tools = [
  {
    title: "AI YouTube Title Generator",
    description: "Turn rough ideas into search-friendly, click-worthy video titles.",
    icon: PlaySquare,
  },
  {
    title: "Description Generator",
    description: "Draft polished descriptions with CTAs, chapters, and keywords.",
    icon: FileText,
  },
  {
    title: "Tags Generator",
    description: "Find focused tags and topic clusters for better discoverability.",
    icon: Hash,
  },
  {
    title: "Script Writer",
    description: "Create structured scripts with intros, beats, and outros.",
    icon: PenLine,
  },
  {
    title: "Thumbnail Prompt Generator",
    description: "Generate visual prompts for thumbnails that match your video angle.",
    icon: Wand2,
  },
  {
    title: "Viral Hooks Generator",
    description: "Write opening hooks designed to stop the scroll fast.",
    icon: Lightbulb,
  },
  {
    title: "Channel Growth Tools",
    description: "Plan content pillars, analyze formats, and build repeatable systems.",
    icon: BarChart3,
  },
  {
    title: "Dashboard",
    description: "Keep your creator workflow organized after login.",
    icon: Sparkles,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="border-b bg-background/95">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-lg font-bold">
            CreatorAI Hub
          </Link>
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link href="#tools">Tools</Link>
            </Button>
            <AuthButton />
          </div>
        </div>
      </nav>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            AI workspace for creators
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Create better YouTube content faster with CreatorAI Hub.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Generate titles, descriptions, scripts, hooks, thumbnail prompts, tags,
            and growth ideas in one clean creator dashboard.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/auth/sign-up">
                Start free <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/auth/login">Sign in</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-5 shadow-sm">
          <div className="rounded-md border bg-muted/40 p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium">Today&apos;s workflow</span>
              <span className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                Ready
              </span>
            </div>
            <div className="space-y-3">
              {["Hook ideas", "Video titles", "SEO description", "Thumbnail prompt"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-md bg-background p-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="border-t bg-muted/30 py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-3xl font-bold">Creator tools included</h2>
            <p className="mt-3 text-muted-foreground">
              Everything a growing channel needs to plan, package, and publish
              stronger videos.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <div key={tool.title} className="rounded-lg border bg-background p-5 shadow-sm">
                <tool.icon className="mb-4 h-5 w-5" />
                <h3 className="font-semibold">{tool.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>CreatorAI Hub helps creators move from idea to publish-ready assets.</p>
          <div className="flex gap-4">
            <Link href="/auth/login" className="hover:text-foreground">
              Login
            </Link>
            <Link href="/auth/sign-up" className="hover:text-foreground">
              Sign up
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
