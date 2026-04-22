import type { Update, UpcomingEvent } from "./types";

/**
 * Community updates — recruitment, events, milestones.
 *
 * To add: append a new object. `slug` must be unique.
 * To translate: add a `translations.id` object with `title` and/or `body`.
 */
export const updates: Update[] = [
  {
    slug: "ugs-website-live",
    title: "UGS Website is Live",
    body: "The UGS website is officially up and running. We built it from scratch - clean, fast, and designed to carry real stories. This is just the beginning.",
    date: "2026-04-22",
    kind: "milestone",
    icon: "✨",
    translations: {
      id: {
        title: "Website UGS Sudah Live",
        body: "Website UGS resmi sudah berjalan. Kami membangunnya dari awal - bersih, cepat, dan dirancang untuk menyampaikan cerita nyata. Ini baru permulaan.",
      },
    },
  },
  {
    slug: "recruitment-prep",
    title: "Getting Ready for Open Recruitment",
    body: "We're preparing everything needed to open up the UGS team. Divisions, roles, and how to apply - all of it will be posted here first when it's ready.",
    date: "2026-04-22",
    kind: "announcement",
    icon: "📋",
    translations: {
      id: {
        title: "Mempersiapkan Rekrutmen Terbuka",
        body: "Kami sedang mempersiapkan semua yang diperlukan untuk membuka tim UGS. Divisi, peran, dan cara mendaftar - semuanya akan diposting di sini lebih dulu saat sudah siap.",
      },
    },
  },
  {
    slug: "gathering-news",
    title: "Gathering the Best News for You",
    body: "Our team is actively researching, writing, and verifying stories. We want what we publish to be worth your time -so we're being careful about what goes out.",
    date: "2026-04-22",
    kind: "milestone",
    icon: "✏️",
    translations: {
      id: {
        title: "Mengumpulkan Berita Terbaik untukmu",
        body: "Tim kami aktif meneliti, menulis, dan memverifikasi cerita. Kami ingin apa yang kami terbitkan layak waktumu - jadi kami berhati-hati dengan apa yang kami keluarkan.",
      },
    },
  },
  {
    slug: "community-building",
    title: "Early Stages of Community Building",
    body: "We're in the early stages of designing what a UGS community looks and feels like - the kind of space that's good for students, made by students. More to come.",
    date: "2026-04-22",
    kind: "milestone",
    icon: "🤝",
    translations: {
      id: {
        title: "Tahap Awal Pembangunan Komunitas",
        body: "Kami sedang merancang seperti apa komunitas UGS - ruang yang baik untuk pelajar, dibuat oleh pelajar. Masih banyak yang akan datang.",
      },
    },
  },
];

export const upcomingEvents: UpcomingEvent[] = [];

export function getSortedUpdates(): Update[] {
  return [...updates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
