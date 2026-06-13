import {
  BarChart3,
  FileText,
  Hash,
  Lightbulb,
  PenLine,
  Sparkles,
  Wand2,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";

const dashboardTools = [
  {
    title: "AI YouTube Title Generator",
    description: "Create stronger title options for your next upload.",
    icon: Youtube,
    action: "Generate titles",
  },
  {
    title: "Description Generator",
    description: "Draft SEO descriptions, CTAs, and chapter outlines.",
    icon: FileText,
    action: "Write description",
  },
  {
    title: "Tags Generator",
    description: "Build keyword groups and video tags from a topic.",
    icon: Hash,
    action: "Find tags",
  },
  {
    title: "Script Writer",
    description: "Plan intros, sections, examples, and closing CTAs.",
    icon: PenLine,
    action: "Draft script",
  },
  {
    title: "Thumbnail Prompt Generator",
    description: "Prompt thumbnail concepts with emotion, scene, and style.",
    icon: Wand2,
    action: "Create prompt",
  },
  {
    title: "Viral Hooks Generator",
    description: "Write opening hooks that make viewers keep watching.",
    icon: Lightbulb,
    action: "Write hooks",
  },
  {
    title: "Channel Growth Tools",
    description: "Map content pillars and repeatable growth experiments.",
    icon: BarChart3,
    action: "Plan growth",
  },
  {
    title: "Dashboard",
    description: "Review your creator workflow and next content actions.",
    icon: Sparkles,
    action: "Open dashboard",
  },
];

async function getUser() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/login");
  }

  return user;
}

export default async function ProtectedPage() {
  const user = await getUser();
  const displayName =
    user.user_metadata?.full_name || user.email?.split("@")[0] || "creator";

  return (
    <div className="space-y-8">
      <section className="rounded-lg border bg-background p-6 shadow-sm">
        <p className="text-sm font-medium text-muted-foreground">Dashboard</p>
        <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {displayName}</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Pick a tool and start shaping your next video package. These
              cards are ready for your AI workflows and future tool pages.
            </p>
          </div>
          <Button asChild>
            <Link href="#tools">Start a creator project</Link>
          </Button>
        </div>
      </section>

      <section id="tools">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Creator tools</h2>
          <span className="text-sm text-muted-foreground">
            {dashboardTools.length} tools available
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dashboardTools.map((tool) => (
            <div key={tool.title} className="flex min-h-56 flex-col rounded-lg border bg-background p-5 shadow-sm">
              <tool.icon className="mb-4 h-5 w-5" />
              <h3 className="font-semibold">{tool.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                {tool.description}
              </p>
              <span className="mt-5 rounded-md border px-3 py-2 text-center text-sm font-medium text-muted-foreground">
                {tool.action}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
