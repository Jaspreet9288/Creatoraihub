function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function toTitleCase(str: string): string {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

// ── Title Generator ────────────────────────────────────────────
export function generateTitles(topic: string): string[] {
  const t = topic.trim();
  const T = toTitleCase(t);
  const year = new Date().getFullYear();
  const nums = [5, 7, 10, 12, 3, 8];
  const n = () => pick(nums);
  return [
    `How to ${T} in ${year} (Complete Beginner's Guide)`,
    `${n()} ${T} Secrets That Actually Work (Most People Miss These)`,
    `Why Everyone Is Wrong About ${T} — The Truth Revealed`,
    `I Tried ${T} for 30 Days — Here's What Happened`,
    `The ULTIMATE ${T} Guide (${year} Edition)`,
    `Stop Making These ${T} Mistakes! Do This Instead`,
    `${T}: What Nobody Tells You`,
    `How I Mastered ${T} in Just 7 Days`,
    `${n()} Things I Wish I Knew Before Starting ${T}`,
    `Is ${T} Worth It in ${year}? My Brutally Honest Review`,
  ];
}

// ── Description Generator ─────────────────────────────────────
export function generateDescription(topic: string, channel?: string): string {
  const t = topic.trim();
  const ch = channel?.trim() || "this channel";
  const year = new Date().getFullYear();
  return `In this video, I'm breaking down everything you need to know about ${t} in ${year}. Whether you're a complete beginner or looking to level up, this guide covers it all.

🎯 What You'll Learn:
• The fundamentals of ${t} you can't afford to miss
• Common mistakes and how to avoid them  
• My proven step-by-step framework
• Real-world examples and case studies
• Tips to get faster results

⏱️ Timestamps:
00:00 – Introduction
01:30 – What is ${t}?
04:15 – Why ${t} matters in ${year}
08:00 – Step-by-step breakdown
15:30 – Common mistakes to avoid
20:00 – Pro tips & tricks
24:45 – Final thoughts & next steps

📌 Resources Mentioned:
• [Resource 1]
• [Resource 2]
• [Resource 3]

🔔 SUBSCRIBE to ${ch} for more content like this!
👍 If this helped you, smash LIKE — it helps the channel grow!
💬 Drop your questions in the COMMENTS — I read every one!

📱 Follow me:
• Instagram: @[handle]
• Twitter/X: @[handle]
• LinkedIn: [link]

📧 Business enquiries: [email]

#${t.replace(/\s+/g, "")} #YouTube #${year} #ContentCreator

DISCLAIMER: This video is for educational purposes only.`;
}

// ── Hashtag Generator ─────────────────────────────────────────
export function generateHashtags(topic: string): string[] {
  const t = topic.trim().toLowerCase().replace(/\s+/g, "");
  const T = topic.trim().replace(/\s+/g, "");
  const year = new Date().getFullYear();
  return [
    `#${T}`, `#${t}tips`, `#${t}guide`, `#${t}${year}`,
    `#${t}tutorial`, `#${t}forbeginners`, `#${t}strategy`,
    `#learn${t}`, `#${t}hacks`, `#${t}explained`,
    `#youtube`, `#youtuber`, `#youtubetips`, `#youtubestrategy`,
    `#contentcreator`, `#contentcreation`, `#socialmedia`,
    `#videocontent`, `#videomarketing`, `#digitalmarketing`,
    `#onlinebusiness`, `#entrepreneur`, `#growyourchannel`,
    `#${t}life`, `#${t}journey`, `#viral`,
    `#trending`, `#subscribe`, `#${t}community`, `#${t}review`,
  ];
}

// ── Tags Generator ────────────────────────────────────────────
export function generateTags(topic: string): string {
  const t = topic.trim();
  const words = t.toLowerCase().split(" ").filter(Boolean);
  const year = new Date().getFullYear();
  const tags = [
    t, `${t} tutorial`, `${t} guide`, `${t} tips`,
    `${t} for beginners`, `${t} ${year}`, `how to ${t}`,
    `best ${t}`, `${t} explained`, `${t} step by step`,
    `${t} strategy`, `${t} tricks`, `${t} hacks`, `learn ${t}`,
    `${t} course`, `${t} review`, ...words,
    "youtube", "youtube tips", "content creator", "digital marketing",
  ];
  return [...new Set(tags)].join(", ");
}

// ── Script Writer ─────────────────────────────────────────────
export function generateScript(topic: string, duration?: string): string {
  const t = topic.trim();
  const dur = parseInt(duration || "10") || 10;
  const year = new Date().getFullYear();
  return `🎬 VIDEO SCRIPT: "${t}"
Estimated Duration: ~${dur} minutes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 HOOK (0:00 – 0:30)
[ON CAMERA – HIGH ENERGY]

"What if I told you that everything you think you know about ${t} is WRONG?

In the next ${dur} minutes, I'm going to show you exactly how to [main benefit].

Stick around until the end — I'm sharing a tip that changed everything for me."

[CUT TO B-ROLL]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 INTRO (0:30 – 1:30)
[ON CAMERA]

"Hey! If you're new here, I'm [NAME] and I help [audience] achieve [goal].

Today we're diving deep into ${t}. By the end of this video you'll know:
• [Key point 1]
• [Key point 2]
• [Key point 3]

Let's get into it."

[SUBSCRIBE ANIMATION]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 MAIN CONTENT (1:30 – ${Math.floor(dur * 0.7) + 1}:00)

SECTION 1: What Is ${t}?
"First, let's clarify what ${t} actually is. Most people think it's [common misconception] — but that's only part of the story.

Here's the key insight: [core concept]. This is what separates creators who succeed from those who give up."

[DEMONSTRATE WITH VISUALS]

SECTION 2: Step-by-Step Process
"Here are the exact steps I follow:

Step 1: [First step] — [brief explanation]
Step 2: [Second step] — [brief explanation]  
Step 3: [Third step] — [brief explanation]

[SCREEN RECORDING / TUTORIAL FOOTAGE]

SECTION 3: Common Mistakes
"Before we go further, here are the mistakes I see creators make constantly:

Mistake #1: [Mistake] → Fix: [Solution]
Mistake #2: [Mistake] → Fix: [Solution]"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 PRO TIPS (${Math.floor(dur * 0.7) + 1}:00 – ${Math.floor(dur * 0.85) + 1}:00)
[ON CAMERA]

"Here are advanced tips most people overlook:
💡 Tip 1: [Pro tip]
💡 Tip 2: [Pro tip]
💡 Tip 3: [Pro tip]"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 OUTRO (${Math.floor(dur * 0.85) + 1}:00 – ${dur}:00)
[ON CAMERA – WARM]

"So there you have it — everything you need to master ${t} in ${year}.

Quick recap:
✅ [Takeaway 1]
✅ [Takeaway 2]
✅ [Takeaway 3]

If this video helped you, smash LIKE and SUBSCRIBE for more content like this.
See you in the next one!"

[END SCREEN – 20 seconds with subscribe button]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
}

// ── Shorts Script ─────────────────────────────────────────────
export function generateShortsScript(topic: string): string {
  const t = topic.trim();
  return `⚡ SHORTS SCRIPT: "${t}"
Target: 45–60 seconds
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🪝 HOOK (0–3 seconds) — Pick one:
Option A: "This ${t} tip changed everything for me. Watch."
Option B: "Nobody talks about THIS with ${t}..."
Option C: "I spent 30 days learning ${t}. Here's what actually works."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 BODY (3–45 seconds)
[FAST-PACED, ZERO FLUFF]

"Here's what most people get wrong about ${t}:

#1: [Key point — one sentence]
#2: [Key point — one sentence]
#3: [Key point — one sentence]

The thing nobody tells you? [Surprising insight]

Here's exactly what to do instead:
→ [Actionable step 1]
→ [Actionable step 2]
→ [Actionable step 3]

This is the part that [result / pays off / changed everything]."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 CTA (45–60 seconds)
"Follow for more ${t} tips that actually work.
Comment 'YES' if this helped you!"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 PRODUCTION NOTES:
• Text on screen for each point (captions on from day 1)
• Fast cuts — no shot longer than 3 seconds
• Trending audio in background (low volume)
• End with your face + subscribe overlay`;
}

// ── Thumbnail Prompts ─────────────────────────────────────────
export function generateThumbnailPrompts(topic: string): string[] {
  const t = topic.trim();
  const T = toTitleCase(t);
  return [
    `Midjourney: A confident creator at a professional desk, ${t} on dual monitors, bright studio lighting, shocked/excited expression, bold text overlay "${T.toUpperCase()}", 16:9 ratio, ultra-detailed --ar 16:9 --style raw`,
    `DALL·E: Split-screen "BEFORE vs AFTER" — left side dark/confused, right side bright/successful with ${t} results, bold yellow text, YouTube thumbnail style, high contrast`,
    `Canva concept: Bright orange-to-red gradient, large bold white text "${T}" centered, creator pointing right on left side, "2025 GUIDE" badge top-right, clean minimal style`,
    `Midjourney: Explosive infographic style, neon-blue glowing background, floating 3D icons representing ${t}, dramatic rim lighting, viral YouTube thumbnail --ar 16:9 --v 6`,
    `DALL·E: Person holding handwritten sign "${T.toUpperCase()}", shocked face, bright yellow background, bold black text at bottom "This Changes Everything", hyper-realistic`,
    `Canva concept: Dark navy background, creator pointing at camera, large red "WARNING" badge, white bold text "${t} Mistakes", professional studio lighting, fire emoji details`,
  ];
}

// ── Viral Hook Generator ──────────────────────────────────────
export function generateViralHooks(topic: string): string[] {
  const t = topic.trim();
  const T = toTitleCase(t);
  return [
    `"I spent $10,000 learning ${t} so you don't have to. Here's everything."`,
    `"Nobody talks about the dark side of ${t}. Until now."`,
    `"I went from 0 to [result] with ${t} in 90 days. Here's exactly how."`,
    `"This one ${t} trick gets me [impressive result] every single time."`,
    `"Stop doing ${t} the hard way. Do THIS instead."`,
    `"The ${t} method that's working right now (not what the 'gurus' teach)"`,
    `"I tested every ${t} strategy so you don't have to. The winner surprised me."`,
    `"Here's why 99% of people fail at ${t} — and the 1% who don't."`,
    `"My ${T} results after 12 months: the honest truth nobody shares."`,
    `"The ${T} secret that changed my life (I can't believe it's this simple)"`,
  ];
}

// ── Content Ideas ─────────────────────────────────────────────
export function generateContentIdeas(topic: string): string[] {
  const t = topic.trim();
  const T = toTitleCase(t);
  const year = new Date().getFullYear();
  return [
    `The Complete Beginner's Guide to ${T} (${year})`,
    `${T} Myths Debunked — What Actually Works`,
    `My ${T} Journey: Month 1 vs Month 6`,
    `I Tested 5 ${T} Methods — Here Are The Results`,
    `The ${T} Mistakes That Cost Me [time/money]`,
    `${T} vs [Alternative] — Which Is Better?`,
    `How to Do ${T} on a Zero Budget`,
    `Advanced ${T} Techniques Most People Don't Know`,
    `I Asked 100 Experts About ${T} — Here's What They Said`,
    `The Dark Side of ${T} Nobody Talks About`,
    `${T} in ${year}: What's Changed and What Hasn't`,
    `Day in the Life: Using ${T} Every Day`,
    `${T} Tools I Can't Live Without`,
    `How [Famous Creator] Does ${T} (And What You Can Learn)`,
    `${T} Case Study: How I Got [Specific Result]`,
    `Live ${T} Session: Watch Me Work in Real Time`,
    `Rating ${T} Advice from the Internet (Brutal Honesty)`,
    `Every ${T} Question I Get Asked — Answered`,
    `${T} Tier List: Ranking Every Method Worst to Best`,
    `What I'd Do Differently With ${T} If Starting Today`,
  ];
}

// ── Upload Checklist ──────────────────────────────────────────
export function generateUploadChecklist(topic: string): string {
  const t = topic.trim();
  return `✅ YOUTUBE UPLOAD CHECKLIST: "${t}"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📹 PRE-PRODUCTION
☐ Topic researched and validated (check search volume)
☐ Competitor videos on "${t}" analysed
☐ Script / outline written and reviewed
☐ Thumbnail concept planned BEFORE filming
☐ B-roll shot list created
☐ Equipment ready: camera, mic, lighting, battery
☐ Background clean and on-brand
☐ Outfit ready (avoid busy patterns)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎬 PRODUCTION
☐ Audio test done (no echo, no background hum)
☐ White balance set for location
☐ Recording at 1080p or 4K
☐ Hook filmed first (most important scene)
☐ B-roll captured for all key points
☐ Multiple takes for critical sections
☐ Check footage on set before wrapping

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✂️ POST-PRODUCTION
☐ Video edited — jump cuts reviewed, pacing solid
☐ Intro trimmed to under 30 seconds
☐ Captions / subtitles added
☐ Background music added (royalty-free)
☐ End screen + subscribe animation added
☐ Color graded
☐ Export: H.264, 1080p, high bitrate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🖼️ THUMBNAIL
☐ 1280 × 720 px canvas
☐ Bold text (max 6 words, readable at 100px wide)
☐ High-contrast colours
☐ Face visible and expressive (if applicable)
☐ Tested on mobile — still readable when small
☐ A/B test variant created

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 YOUTUBE STUDIO — BEFORE UPLOAD
☐ Title written (keyword "${t}" near the front)
☐ Title is under 60 characters
☐ Description — keyword in first 2 lines
☐ First 150 chars of description are compelling
☐ Timestamps added (at least 5)
☐ Tags added (15–20 relevant tags)
☐ Category set correctly
☐ Language set to target audience language
☐ Thumbnail uploaded
☐ Cards and end screen linked

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 SCHEDULING
☐ Published at best time for your audience
☐ Premiere vs instant publish decided
☐ Cross-posting plan: Reels, TikTok, Twitter/X
☐ Community post draft ready to alert subscribers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 POST-PUBLISH (First 48 Hours)
☐ Shared to all social platforms
☐ Replying to early comments (boosts algorithm)
☐ Top comment pinned with CTA or question
☐ Analytics checked at 24h and 48h
☐ Engaged with anyone who shared the video
☐ Performance logged for future planning

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎉 Done! Your video is live. Great work.`;
}
