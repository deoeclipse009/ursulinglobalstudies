import type { Article } from "./types";

/**
 * All UGS articles live here.
 *
 * How to add a new article:
 *   1. Append a new object to this array.
 *   2. `slug` must be unique, lowercase, hyphenated.
 *   3. `content` is an array of blocks — see `./types.ts` for every block type.
 *   4. Save. That's it — the /news list and /news/[slug] page update automatically.
 */
export const articles: Article[] = [
  {
    slug: "teen-social-media-bans-global-wave",
    title: "Locked Out: The Global Wave of Teen Social Media Bans",
    excerpt:
      "You open TikTok. Instagram. Maybe Snapchat. And then — nothing. Not because the app is down, but because the government decided you're too young to be there.",
    coverImage:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1800&q=80",
    coverImageAlt:
      "Close-up of a teenager holding a phone showing a locked social media app",
    author: "UGS Newsroom",
    publishedAt: "2026-04-12",
    category: "Politics",
    readingMinutes: 6,
    content: [
      {
        type: "paragraph",
        html: "You open TikTok. Instagram. Maybe Snapchat. And then — nothing. <strong>Not because the app is down. But because the government decided you're too young to be there.</strong>",
      },
      {
        type: "paragraph",
        html: "That's the reality hitting millions of teens right now. It started with Australia in 2025 — the first country to fully ban social media for anyone under 16. In one month, <strong>around 4.7 million teen accounts were removed</strong>. That was the opening move.",
      },
      { type: "eyebrow", text: "What's happening" },
      {
        type: "paragraph",
        html: "<strong>This is no longer one country's experiment — it's a global regulatory wave.</strong> Spain is pushing a ban for under-16s with mandatory age verification. France is targeting under-15s. Indonesia joins in March 2026 with restrictions on TikTok, Instagram, and Facebook. Denmark, Germany, Malaysia, the UK — all either planning or actively debating the same thing.",
      },
      {
        type: "statsGrid",
        items: [
          { flag: "🇦🇺", label: "Australia", value: "Under-16 ban — active since 2025" },
          { flag: "🇮🇩", label: "Indonesia", value: "Under-16 restriction — March 2026" },
          { flag: "🇪🇸", label: "Spain", value: "Under-16 + age verification" },
          { flag: "🇫🇷", label: "France", value: "Under-15 ban — expected 2026" },
          { flag: "🇩🇰", label: "Denmark", value: "Under-15 ban planned" },
          { flag: "🇩🇪", label: "Germany", value: "Debating under 14–16" },
          { flag: "🇬🇧", label: "United Kingdom", value: "Active consultations" },
          { flag: "🇲🇾", label: "Malaysia", value: "Under-16 ban planned" },
        ],
      },
      { type: "eyebrow", text: "Why it's happening" },
      {
        type: "paragraph",
        html: "Governments point to mental health — studies linking heavy usage to <strong>anxiety, addiction, and shorter attention spans</strong>. But it goes deeper. These platforms weren't built to be healthy. <strong>Algorithms designed to maximize engagement</strong> don't care if you feel worse after scrolling. They care that you come back. Add in data privacy concerns and exposure to harmful content, and governments are starting to treat social media access the same way they treat cigarettes: age-restricted.",
      },
      {
        type: "callout",
        html: "It's not just about mental health. It's about who controls what young people see — and who gets to decide that.",
      },
      {
        type: "list",
        items: [
          {
            label: "Information access",
            text: "who can see what, where, and when",
          },
          {
            label: "Trend cycles",
            text: "how culture spreads if young users are locked out",
          },
          {
            label: "Content filtering",
            text: "different rules = different realities per country",
          },
          {
            label: "Digital identity",
            text: "age verification becomes the new normal",
          },
        ],
      },
      {
        type: "paragraph",
        html: "The internet used to feel borderless. The same for everyone. What's happening now is the opposite — access is becoming <strong>conditional, filtered, shaped by wherever you live</strong>.",
      },
      {
        type: "heading",
        level: 2,
        text: "Two people. Same app. Same moment. Completely different feeds — because their governments made different calls.",
      },
      { type: "eyebrow", text: "What you can do" },
      {
        type: "paragraph",
        html: "<strong>Don't rely on just one platform for news.</strong> If TikTok is your only source and access gets cut, you're stuck. Cross-check things — it takes ten seconds. Notice your habits too: are you opening apps because you want to, or just out of reflex? And remember — <strong>your data is being tracked</strong> whether there's a ban or not.",
      },
      { type: "eyebrow", text: "The bigger picture" },
      {
        type: "paragraph",
        html: "This isn't about apps. It's about a slow shift toward <strong>controlled digital spaces</strong> — where what you see is shaped by algorithms and governments at the same time. The scariest part isn't what's on your feed. <strong>It's what's missing from it — and that you'd never know.</strong>",
      },
      {
        type: "quote",
        html: "Don't just scroll. Question what shows up — and notice what doesn't.",
      },
      { type: "divider" },
      {
        type: "sources",
        items: [
          "Australian eSafety Commissioner. (2025). <em>Online Safety Amendment (Social Media Minimum Age) Act 2024: Implementation report.</em> eSafety.gov.au.",
          "Reuters. (2026, January). <em>Europe moves toward teen social media bans as Spain, France finalize age restrictions.</em> Reuters.com.",
          "Kementerian Komunikasi dan Digital Republik Indonesia. (2026). <em>Kebijakan pembatasan akses media sosial bagi pengguna di bawah 16 tahun.</em> Kominfo.go.id.",
          "BBC News. (2026, February). <em>Social media age limits: Which countries are introducing bans and why?</em>",
          "We Are Social & Meltwater. (2026). <em>Digital 2026: Indonesia country report.</em> Datareportal.com.",
        ],
      },
    ],
  },
  {
    slug: "youth-climate-summit-2026",
    title: "Youth Climate Summit 2026: Our Generation Takes Action",
    excerpt:
      "Coverage from the global youth climate summit where students propose solutions that governments have spent decades avoiding.",
    coverImage:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1800&q=80",
    coverImageAlt: "Students gathered at a climate rally holding handmade signs",
    author: "Alex Rivera",
    publishedAt: "2026-04-07",
    category: "Environment",
    readingMinutes: 7,
    content: [
      {
        type: "paragraph",
        html: "More than 3,000 students from 48 countries gathered in Jakarta last week for the Youth Climate Summit 2026 — the largest student-led environmental conference ever held in Southeast Asia. The message was clear: <strong>we're done waiting for permission to care about our future.</strong>",
      },
      { type: "eyebrow", text: "What was on the table" },
      {
        type: "paragraph",
        html: "The summit focused on three pillars: school-level emissions tracking, single-use plastic bans on campus, and a pan-regional student policy lab that drafts legislation recommendations directly for lawmakers. Delegates from Indonesia, Australia, the Philippines, and Japan presented pilot programs already running in their schools.",
      },
      {
        type: "callout",
        html: "Ursulin's own delegation presented a food-waste composting system that cut cafeteria waste by 62% in one semester.",
      },
      { type: "eyebrow", text: "What's next" },
      {
        type: "paragraph",
        html: "A joint declaration was signed by representatives from 40+ schools committing to quarterly emissions audits and the launch of a shared open dataset. The next summit is slated for Seoul in 2027.",
      },
      {
        type: "quote",
        html: "The adults keep saying the next generation will fix this. We're the next generation. We're not waiting for permission anymore.",
      },
    ],
  },


  {
    slug: "esports-goes-mainstream",
    title: "Esports Goes Mainstream: Record-Breaking Tournament Viewership",
    excerpt:
      "The latest gaming championship surpasses traditional sports in online viewership, marking a cultural shift that's been building for years.",
    coverImage:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1800&q=80",
    coverImageAlt: "Esports arena filled with fans watching a tournament on giant screens",
    author: "Jordan Lee",
    publishedAt: "2026-04-03",
    category: "Hype/Trend",
    readingMinutes: 6,
    content: [
      {
        type: "paragraph",
        html: "For the first time, a single esports final pulled <strong>more concurrent online viewers than last year's UEFA Champions League final</strong>. It wasn't close. The 2026 Valorant World Championship peaked at 6.8 million concurrent viewers across Twitch and YouTube — numbers that used to belong only to traditional sports.",
      },
      { type: "eyebrow", text: "Why the shift" },
      {
        type: "paragraph",
        html: "Three things changed. Production value now rivals broadcast TV. Players have become full-fledged personalities with multi-platform followings. And — crucially — Gen Z watches differently: clips, streams, and second screens, not scheduled broadcasts.",
      },
      {
        type: "list",
        items: [
          { label: "Production", text: "cinematic opens, drone shots, narrative arcs" },
          { label: "Personality", text: "players as streamers, not just athletes" },
          { label: "Distribution", text: "clip-first, social-native coverage" },
        ],
      },
      {
        type: "paragraph",
        html: "Traditional sports leagues are paying attention. The NBA and La Liga both announced esports-inspired production upgrades for 2026. The question is no longer whether esports is legitimate — it's whether the rest of sports can keep up.",
      },
    ],
  },


  {
    slug: "ai-study-tools-classroom",
    title: "AI Study Tools Are in Every Classroom — But Are They Helping?",
    excerpt:
      "A closer look at how Gen Z is actually using AI to study, what teachers are seeing, and whether grades are really going up.",
    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80",
    coverImageAlt: "A student studying with a laptop and notebook side by side",
    author: "Riley Park",
    publishedAt: "2026-03-28",
    category: "Technology/AI",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        html: "Walk into any high school classroom in 2026 and you'll see it: students quietly checking AI tutors between questions, drafting essays with AI assistance, generating flashcards in seconds. <strong>The tools are everywhere. What's less clear is whether they're actually making students smarter.</strong>",
      },
      { type: "eyebrow", text: "The data" },
      {
        type: "paragraph",
        html: "A 2026 study from the OECD tracked 14,000 students across 12 countries. Those who used AI study tools regularly scored an average of 8% higher on problem-solving tests — but only if they used them to <em>explain concepts</em>. Students who used AI to <em>produce answers</em> scored 11% lower on the same tests.",
      },
      {
        type: "callout",
        html: "The tool isn't the problem. How you use it is everything.",
      },
      { type: "eyebrow", text: "What students told us" },
      {
        type: "paragraph",
        html: "We surveyed 200 SMA Regina Pacis Surakarta students informally. The pattern: most said AI helps them study faster, but only about a third said they feel they actually <em>understand</em> the material better. The rest said they felt more prepared — and also more anxious.",
      },
      {
        type: "paragraph",
        html: "Teachers we spoke to aren't anti-AI. They're anti-shortcut. The line they keep drawing: use it to ask better questions, not to avoid asking them at all.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getSortedArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
