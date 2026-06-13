import { notFound } from "next/navigation";
import { ToolPage } from "@/components/tool-page";

const VALID_TOOLS = new Set([
  "title-generator",
  "description-generator",
  "hashtag-generator",
  "tags-generator",
  "script-writer",
  "shorts-script",
  "thumbnail-prompt",
  "viral-hook",
  "content-ideas",
  "upload-checklist",
]);

export default async function ToolPageRoute({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool } = await params;
  if (!VALID_TOOLS.has(tool)) notFound();
  return (
    <div className="py-2">
      <ToolPage toolKey={tool} />
    </div>
  );
}

export async function generateStaticParams() {
  return [...VALID_TOOLS].map((tool) => ({ tool }));
}
