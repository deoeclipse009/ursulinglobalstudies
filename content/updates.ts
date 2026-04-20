import type { Update, UpcomingEvent } from "./types";

/**
 * Community updates — recruitment, events, milestones.
 *
 * To add: append a new object. `slug` must be unique.
 * To translate: add a `translations.id` object with `title` and/or `body`.
 */
export const updates: Update[] = [
  {
    slug: "spring-2026-recruitment",
    title: "Join the UGS Team for Spring 2026",
    body: "We're looking for passionate students to join our News Writer, Multimedia & Digital, and Website Development divisions. Help us shape the future of student journalism at Ursulin. Applications close April 30, 2026.",
    date: "2026-04-10",
    kind: "announcement",
    translations: {
      id: {
        title: "Bergabunglah dengan Tim UGS untuk Spring 2026",
        body: "Kami mencari pelajar bersemangat untuk bergabung di divisi News Writer, Multimedia & Digital, dan Website Development. Bantu kami membentuk masa depan jurnalisme pelajar di Ursulin. Pendaftaran ditutup 30 April 2026.",
      },
    },
  },
  {
    slug: "data-journalism-division",
    title: "Building Our Data Journalism Division",
    body: "We're launching a new initiative to bring data-driven stories to our readers. Stay tuned for interactive visualizations and in-depth analysis on the topics that matter most to our generation.",
    date: "2026-03-28",
    kind: "milestone",
    icon: "📊",
    translations: {
      id: {
        title: "Membangun Divisi Jurnalisme Data Kami",
        body: "Kami meluncurkan inisiatif baru untuk menghadirkan cerita berbasis data kepada pembaca kami. Nantikan visualisasi interaktif dan analisis mendalam tentang topik yang paling penting bagi generasi kita.",
      },
    },
  },
  {
    slug: "podcast-launch",
    title: "Podcast Launch: The UGS Debrief",
    body: "Our first podcast series is in production. Weekly episodes featuring student conversations about the stories that shape our world — from climate policy to the apps that define our lives.",
    date: "2026-03-15",
    kind: "milestone",
    icon: "🎙️",
    translations: {
      id: {
        title: "Peluncuran Podcast: The UGS Debrief",
        body: "Serial podcast pertama kami sedang dalam produksi. Episode mingguan menampilkan percakapan pelajar tentang berita yang membentuk dunia kita — dari kebijakan iklim hingga aplikasi yang mendefinisikan kehidupan kita.",
      },
    },
  },
  {
    slug: "global-correspondent-network",
    title: "Expanding Our Global Correspondent Network",
    body: "We've welcomed student correspondents from 12 new countries, bringing diverse perspectives to our coverage of global events. Our reach now spans 4 continents.",
    date: "2026-02-20",
    kind: "milestone",
    icon: "🌍",
    translations: {
      id: {
        title: "Memperluas Jaringan Koresponden Global Kami",
        body: "Kami menyambut koresponden pelajar dari 12 negara baru, membawa perspektif beragam ke liputan kami tentang peristiwa global. Jangkauan kami kini mencakup 4 benua.",
      },
    },
  },
  {
    slug: "website-redesign",
    title: "Website Redesign Complete",
    body: "After three months of design and development, our new website is live. Cleaner navigation, faster loading, and a far better mobile experience.",
    date: "2026-02-01",
    kind: "milestone",
    icon: "✨",
    translations: {
      id: {
        title: "Desain Ulang Website Selesai",
        body: "Setelah tiga bulan desain dan pengembangan, website baru kami sudah online. Navigasi lebih bersih, loading lebih cepat, dan pengalaman mobile yang jauh lebih baik.",
      },
    },
  },
];

export const upcomingEvents: UpcomingEvent[] = [
  {
    date: "2026-04-22",
    title: "Earth Day Special Coverage",
    body: "A full day of environmental journalism featuring student voices from around the globe discussing climate action, sustainability, and the future of our planet.",
    translations: {
      id: {
        title: "Liputan Spesial Hari Bumi",
        body: "Satu hari penuh jurnalisme lingkungan menampilkan suara-suara pelajar dari seluruh dunia yang membahas aksi iklim, keberlanjutan, dan masa depan planet kita.",
      },
    },
  },
  {
    date: "2026-05-05",
    title: "Student Journalism Workshop",
    body: "Free workshop for aspiring student journalists covering research techniques, interviewing skills, fact-checking, and digital storytelling.",
    translations: {
      id: {
        title: "Workshop Jurnalisme Pelajar",
        body: "Workshop gratis untuk calon jurnalis pelajar yang mencakup teknik riset, keterampilan wawancara, fact-checking, dan bercerita digital.",
      },
    },
  },
  {
    date: "2026-05-20",
    title: "UGS Town Hall: Summer 2026",
    body: "Join us for our quarterly town hall where we'll discuss coverage plans, introduce new team members, and hear from student readers about what matters most.",
    translations: {
      id: {
        title: "UGS Town Hall: Summer 2026",
        body: "Bergabunglah dalam town hall triwulanan kami di mana kami akan membahas rencana liputan, memperkenalkan anggota tim baru, dan mendengar dari pembaca pelajar tentang hal yang paling penting.",
      },
    },
  },
];

export function getSortedUpdates(): Update[] {
  return [...updates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
