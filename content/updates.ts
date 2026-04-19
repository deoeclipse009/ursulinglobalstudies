import type { Update } from "./types";

/**
 * Community updates — recruitment, events, milestones.
 *
 * To add: append a new object. `slug` must be unique.
 */
export const updates: Update[] = [
  {
    slug: "spring-2026-recruitment",
    title: "Join the UGS Team for Spring 2026",
    body: "We're looking for passionate students to join our News Writer, Multimedia & Digital, and Website Development divisions. Help us shape the future of student journalism at Ursulin. Applications close April 30, 2026.",
    date: "2026-04-10",
    kind: "announcement",
  },
  {
    slug: "data-journalism-division",
    title: "Building Our Data Journalism Division",
    body: "We're launching a new initiative to bring data-driven stories to our readers. Stay tuned for interactive visualizations and in-depth analysis on the topics that matter most to our generation.",
    date: "2026-03-28",
    kind: "milestone",
    icon: "📊",
  },
  {
    slug: "podcast-launch",
    title: "Podcast Launch: The UGS Debrief",
    body: "Our first podcast series is in production. Weekly episodes featuring student conversations about the stories that shape our world — from climate policy to the apps that define our lives.",
    date: "2026-03-15",
    kind: "milestone",
    icon: "🎙️",
  },
  {
    slug: "global-correspondent-network",
    title: "Expanding Our Global Correspondent Network",
    body: "We've welcomed student correspondents from 12 new countries, bringing diverse perspectives to our coverage of global events. Our reach now spans 4 continents.",
    date: "2026-02-20",
    kind: "milestone",
    icon: "🌍",
  },
  {
    slug: "website-redesign",
    title: "Website Redesign Complete",
    body: "After three months of design and development, our new website is live. Cleaner navigation, faster loading, and a far better mobile experience.",
    date: "2026-02-01",
    kind: "milestone",
    icon: "✨",
  },
];

export const upcomingEvents = [
  {
    date: "2026-04-22",
    title: "Earth Day Special Coverage",
    body: "A full day of environmental journalism featuring student voices from around the globe discussing climate action, sustainability, and the future of our planet.",
  },
  {
    date: "2026-05-05",
    title: "Student Journalism Workshop",
    body: "Free workshop for aspiring student journalists covering research techniques, interviewing skills, fact-checking, and digital storytelling.",
  },
  {
    date: "2026-05-20",
    title: "UGS Town Hall: Summer 2026",
    body: "Join us for our quarterly town hall where we'll discuss coverage plans, introduce new team members, and hear from student readers about what matters most.",
  },
];

export function getSortedUpdates(): Update[] {
  return [...updates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
