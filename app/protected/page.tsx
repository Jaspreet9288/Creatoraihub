import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import {
  FileText, Hash, AlignLeft, Image, Lightbulb,
  CheckSquare, Sparkles, Crown, Zap, Tag, Video, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TOOLS = [
  { slug: "title-generator",       name: "Title Generator",       desc: "10 high-CTR YouTube titles.",                  icon: Sparkles,    color: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400",  free: true  },
  { slug: "description-generator", name: "Description Generator", desc: "SEO-ready description with timestamps.",        icon: AlignLeft,   color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",          free: false },
  { slug: "hashtag-generator",     name: "Hashtag Generator",     desc: "30 trending hashtags for max reach.",           icon: Hash,        color: "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400",          free: true  },
  { slug: "tags-generator",        name: "Tags Generator",        desc: "Comma-separated tags for search ranking.",      icon: Tag,         color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",  free: true  },
  { slug: "script-writer",         name: "Script Writer",         desc: "Full script with hook, body & outro.",          icon: FileText,    color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400", free: false },
  { slug: "shorts-script",         name: "Shorts Script",         desc: "Punchy 45–60 second Shorts script.",            icon: Video,       color: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400",             free: false },
  { slug: "thumbnail-prompt",      name: "Thumbnail Prompt",      desc: "Midjourney & DALL·E prompts.",                  icon: Image,       color: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400",  free: false },
  { slug: "viral-hook",            name: "Viral Hook Generator",  desc: "10 scroll-stopping video hooks.",               icon: Zap,         color: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400",          free: true  },
  { slug: "content-ideas",         name: "Content Ideas",         desc: "20 video ideas for your niche.",                icon: Lightbulb,   color: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",     free: true  },
  { slug: "upload-checklist",      name: "Upload Checklist",      desc: "Pre-publish checklist for every video.",        icon: CheckSquare, color: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400",         free: false },
];

export default async function ProtectedPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const email = user?.email;
  const name = email?.split("@")[0] ?? "Creator";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Welcome back, {name} 👋</h1>
        <p className="text-muted-foreground text-sm">
          Pick a tool below to start creating. New tools unlock with Pro.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {TOOLS.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.slug}
              href={`/protected/tools/${tool.slug}`}
              className="group rounded-xl border bg-card p-5 flex flex-col gap-3 hover:shadow-md hover:border-violet-300 dark:hover:border-violet-700 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${tool.color}`}>
                  <Icon size={18} />
                </div>
                {!tool.free && (
                  <span className="text-[10px] font-bold uppercase bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 rounded-full px-2 py-0.5">
                    Pro
                  </span>
                )}
              </div>
              <div>
                <p className="font-semibold text-sm">{tool.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{tool.desc}</p>
              </div>
              <span className="text-xs text-violet-600 dark:text-violet-400 flex items-center gap-1 mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                Open tool <ArrowRight size={11} />
              </span>
            </Link>
          );
        })}
      </div>

      <div className="rounded-xl border-2 border-violet-200 dark:border-violet-800 bg-violet-50/50 dark:bg-violet-950/20 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center shrink-0">
          <Crown size={20} className="text-violet-600" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm">Unlock all 10 tools with Pro</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Unlimited generations, Script Writer, Shorts Script, Thumbnail Prompts & more — ₹999/month.
          </p>
        </div>
        <Button size="sm" asChild className="bg-violet-600 hover:bg-violet-700 shrink-0">
          <Link href="/pricing">Upgrade to Pro →</Link>
        </Button>
      </div>
    </div>
  );
}
