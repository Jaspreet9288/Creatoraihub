"use client";

import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <MarketingNav />

      <main className="flex-1 max-w-2xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center">
            <MessageSquare size={18} className="text-violet-600" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Contact us</h1>
          <p className="text-muted-foreground">
            We'd love to hear from you. Fill in the form and we'll get back within 24 hours.
          </p>
          <a
            href="mailto:support@ai13.life"
            className="text-sm text-violet-600 hover:underline flex items-center gap-1.5 w-fit"
          >
            <Mail size={14} /> support@ai13.life
          </a>
        </div>

        {sent ? (
          <div className="rounded-xl border bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 p-8 text-center flex flex-col items-center gap-3">
            <span className="text-3xl">✅</span>
            <h2 className="font-semibold">Message sent!</h2>
            <p className="text-sm text-muted-foreground">
              Thanks, {form.name || "there"}! We'll reply to {form.email} within 24 hours.
            </p>
            <Button variant="outline" size="sm" onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-xl border bg-card p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                required
                placeholder="How can we help?"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell us more…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
              />
            </div>
            <Button type="submit" disabled={loading} className="self-start">
              {loading ? "Sending…" : "Send message"}
            </Button>
          </form>
        )}
      </main>

      <MarketingFooter />
    </div>
  );
}
