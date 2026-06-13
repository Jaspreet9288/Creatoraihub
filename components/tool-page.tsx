"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  generateTitles,
  generateDescription,
  generateHashtags,
  generateTags,
  generateScript,
  generateShortsScript,
  generateThumbnailPrompts,
  generateViralHooks,
  generateContentIdeas,
  generateUploadChecklist,
} from "@/lib/generators";

type ToolKey =
  | "title-generator"
  | "description-generator"
  | "hashtag-generator"
  | "tags-generator"
  | "script-writer"
  | "shorts-script"
  | "thumbnail-prompt"
  | "viral-hook"
  | "content-ideas"
  | "upload-checklist";

interface ToolConfig {
  title: string;
  description: string;
  inputLabel: string;
  inputPlaceholder: string;
  secondaryInputLabel?: string;
  secondaryInputPlaceholder?: string;
  outputType: "list" | "text";
  outputLabel: string;
  generate: (primary: string, secondary?: string) => string | string[];
}

const TOOL_CONFIGS: Record<ToolKey, ToolConfig> = {
  "title-generator": {
    title: "YouTube Title Generator",
    description: "Generate 10 high-CTR titles optimised for clicks and search.",
    inputLabel: "Video Topic",
    inputPlaceholder: "e.g. How to grow on YouTube in 2025",
    outputType: "list",
    outputLabel: "Generated Titles",
    generate: (topic) => generateTitles(topic),
  },
  "description-generator": {
    title: "Description Generator",
    description: "Write an SEO-friendly description with timestamps and CTAs.",
    inputLabel: "Video Topic",
    inputPlaceholder: "e.g. How to grow on YouTube in 2025",
    secondaryInputLabel: "Channel Name (optional)",
    secondaryInputPlaceholder: "e.g. Creator Academy",
    outputType: "text",
    outputLabel: "Generated Description",
    generate: (topic, channel) => generateDescription(topic, channel),
  },
  "hashtag-generator": {
    title: "Hashtag Generator",
    description: "Get 30 trending hashtags to maximise discoverability.",
    inputLabel: "Video Topic",
    inputPlaceholder: "e.g. YouTube growth tips",
    outputType: "list",
    outputLabel: "Generated Hashtags",
    generate: (topic) => generateHashtags(topic),
  },
  "tags-generator": {
    title: "Tags Generator",
    description: "Generate comma-separated YouTube tags that boost search ranking.",
    inputLabel: "Video Topic",
    inputPlaceholder: "e.g. YouTube growth tips",
    outputType: "text",
    outputLabel: "Generated Tags",
    generate: (topic) => generateTags(topic),
  },
  "script-writer": {
    title: "Script Writer",
    description: "Full video script with hook, body, pro tips, and outro.",
    inputLabel: "Video Topic",
    inputPlaceholder: "e.g. How to grow on YouTube in 2025",
    secondaryInputLabel: "Duration (minutes)",
    secondaryInputPlaceholder: "e.g. 10",
    outputType: "text",
    outputLabel: "Generated Script",
    generate: (topic, duration) => generateScript(topic, duration),
  },
  "shorts-script": {
    title: "Shorts Script Generator",
    description: "Write a punchy 45–60 second YouTube Shorts script.",
    inputLabel: "Short Topic",
    inputPlaceholder: "e.g. YouTube algorithm tip",
    outputType: "text",
    outputLabel: "Generated Shorts Script",
    generate: (topic) => generateShortsScript(topic),
  },
  "thumbnail-prompt": {
    title: "Thumbnail Prompt Generator",
    description: "Get Midjourney & DALL·E prompts for eye-catching thumbnails.",
    inputLabel: "Video Topic",
    inputPlaceholder: "e.g. How to grow on YouTube in 2025",
    outputType: "list",
    outputLabel: "Generated Prompts",
    generate: (topic) => generateThumbnailPrompts(topic),
  },
  "viral-hook": {
    title: "Viral Hook Generator",
    description: "Generate 10 scroll-stopping hooks for your video intro.",
    inputLabel: "Video Topic",
    inputPlaceholder: "e.g. YouTube growth tips",
    outputType: "list",
    outputLabel: "Generated Hooks",
    generate: (topic) => generateViralHooks(topic),
  },
  "content-ideas": {
    title: "Content Ideas Generator",
    description: "20 unique video ideas tailored to your niche.",
    inputLabel: "Your Niche / Topic",
    inputPlaceholder: "e.g. personal finance for beginners",
    outputType: "list",
    outputLabel: "Generated Ideas",
    generate: (topic) => generateContentIdeas(topic),
  },
  "upload-checklist": {
    title: "Upload Checklist Generator",
    description: "A personalised step-by-step checklist before every upload.",
    inputLabel: "Video Topic",
    inputPlaceholder: "e.g. How to start a YouTube channel",
    outputType: "text",
    outputLabel: "Generated Checklist",
    generate: (topic) => generateUploadChecklist(topic),
  },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="shrink-0 p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
      title="Copy"
    >
      {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
    </button>
  );
}

export function ToolPage({ toolKey }: { toolKey: string }) {
  const config = TOOL_CONFIGS[toolKey as ToolKey];
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [result, setResult] = useState<string | string[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [allCopied, setAllCopied] = useState(false);

  if (!config) return null;

  const handleGenerate = async () => {
    if (!primary.trim()) return;
    setLoading(true);
    setResult(null);
    await new Promise((r) => setTimeout(r, 800));
    setResult(config.generate(primary, secondary || undefined));
    setLoading(false);
  };

  const copyAll = async () => {
    const text = Array.isArray(result) ? result.join("\n") : result ?? "";
    await navigator.clipboard.writeText(text);
    setAllCopied(true);
    setTimeout(() => setAllCopied(false), 2000);
  };

  const resultList = Array.isArray(result) ? result : null;
  const resultText = typeof result === "string" ? result : null;

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <Link
          href="/protected"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit mb-2"
        >
          <ArrowLeft size={14} /> Back to dashboard
        </Link>
        <h1 className="text-2xl font-bold">{config.title}</h1>
        <p className="text-muted-foreground text-sm">{config.description}</p>
      </div>

      {/* Input card */}
      <div className="rounded-xl border bg-card p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="primary">{config.inputLabel}</Label>
          <Input
            id="primary"
            placeholder={config.inputPlaceholder}
            value={primary}
            onChange={(e) => setPrimary(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
          />
        </div>
        {config.secondaryInputLabel && (
          <div className="flex flex-col gap-2">
            <Label htmlFor="secondary">{config.secondaryInputLabel}</Label>
            <Input
              id="secondary"
              placeholder={config.secondaryInputPlaceholder}
              value={secondary}
              onChange={(e) => setSecondary(e.target.value)}
            />
          </div>
        )}
        <Button
          onClick={handleGenerate}
          disabled={!primary.trim() || loading}
          className="self-start"
        >
          {loading ? (
            <>
              <Loader2 size={15} className="animate-spin mr-2" />
              Generating…
            </>
          ) : (
            <>
              <Sparkles size={15} className="mr-2" />
              Generate
            </>
          )}
        </Button>
      </div>

      {/* Results */}
      {result !== null && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-sm">{config.outputLabel}</h2>
            <Button size="sm" variant="outline" onClick={copyAll}>
              {allCopied ? (
                <><Check size={13} className="mr-1.5 text-green-500" /> Copied!</>
              ) : (
                <><Copy size={13} className="mr-1.5" /> Copy All</>
              )}
            </Button>
          </div>

          {/* List output */}
          {resultList && (
            <div className="flex flex-col gap-2">
              {resultList.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 rounded-lg border bg-card p-3"
                >
                  <span className="text-xs text-muted-foreground shrink-0 mt-0.5 w-5 text-right">
                    {i + 1}.
                  </span>
                  <p className="flex-1 text-sm leading-relaxed">{item}</p>
                  <CopyButton text={item} />
                </div>
              ))}
            </div>
          )}

          {/* Text output */}
          {resultText && (
            <div className="relative">
              <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed rounded-xl border bg-muted/40 p-5 overflow-auto max-h-[600px]">
                {resultText}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
