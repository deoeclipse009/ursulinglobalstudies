export type Lang = "en" | "id";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "id", label: "Bahasa Indonesia" },
];

// Every UI string on the site. Add keys here as needed.
// If you don't fill the `id` value, it falls back to `en` automatically.
export const dict = {
  // Navigation
  "nav.home": { en: "Home", id: "Beranda" },
  "nav.news": { en: "News", id: "Berita" },
  "nav.about": { en: "About", id: "Tentang" },
  "nav.updates": { en: "Updates", id: "Kabar" },
  "nav.contact": { en: "Contact", id: "Kontak" },

  // Home page
  "home.folio.edition": { en: "Surakarta Edition", id: "Edisi Surakarta" },
  "home.folio.issue": { en: "Vol. I · No. 01", id: "Vol. I · No. 01" },
  "home.masthead.tagline": {
    en: "The student newsroom of SMA Regina Pacis Surakarta",
    id: "Newsroom pelajar SMA Regina Pacis Surakarta",
  },
  "home.masthead.pillars": { en: "News · Insight · Care", id: "Berita · Wawasan · Peduli" },
  "home.lede.eyebrow": { en: "From the editors", id: "Dari redaksi" },
  "home.lede.headline.before": { en: "News that speaks", id: "Berita dalam" },
  "home.lede.headline.accent": { en: "your language.", id: "bahasamu." },
  "home.lede.body": {
    en: "UGS is a student community that reads the world so you don't have to do it alone. We research, fact-check, and publish stories that matter to our generation — from the policies shaping our feeds to the climate we'll inherit. Built by students, for students.",
    id: "UGS adalah komunitas pelajar yang membaca dunia supaya kamu tidak perlu melakukannya sendirian. Kami meriset, memeriksa fakta, dan menerbitkan cerita yang penting bagi generasi kita — dari kebijakan yang membentuk feed kita hingga iklim yang akan kita warisi. Dibuat oleh pelajar, untuk pelajar.",
  },
  "home.cta.read": { en: "Read the latest", id: "Baca terbaru" },
  "home.cta.about": { en: "About UGS", id: "Tentang UGS" },
  "home.sidebar.title": { en: "Inside this issue", id: "Dalam edisi ini" },
  "home.sidebar.global.title": { en: "Global coverage", id: "Cakupan global" },
  "home.sidebar.global.body": { en: "Six categories, global reach.", id: "Enam kategori, jangkauan global." },
  "home.sidebar.youth.title": { en: "Youth perspectives", id: "Perspektif muda" },
  "home.sidebar.youth.body": { en: "Reported and edited by students.", id: "Diliput dan disunting oleh pelajar." },
  "home.sidebar.fresh.title": { en: "Always fresh", id: "Selalu baru" },
  "home.sidebar.fresh.body": { en: "Published continuously, not on deadline.", id: "Diterbitkan terus-menerus, bukan sekadar tenggat." },

  "home.featured.eyebrow": { en: "Featured", id: "Unggulan" },
  "home.featured.title": { en: "The story we're reading now", id: "Cerita yang sedang kami baca" },
  "home.featured.cta": { en: "Read the full story", id: "Baca kisah lengkap" },
  "home.latest.eyebrow": { en: "Latest", id: "Terbaru" },
  "home.latest.title": { en: "More from the newsroom", id: "Lebih banyak dari newsroom" },
  "home.allStories": { en: "All stories", id: "Semua cerita" },

  "home.mission.eyebrow": { en: "Our mission", id: "Misi kami" },
  "home.mission.headline": {
    en: "Don't just scroll. Question what shows up — and notice what doesn't.",
    id: "Jangan hanya scroll. Tanyakan apa yang muncul — dan perhatikan apa yang tidak.",
  },
  "home.mission.body": {
    en: "UGS is built by students, for students. Six categories. 100% fact-checked. No ads, no algorithms.",
    id: "UGS dibangun oleh pelajar, untuk pelajar. Enam kategori. 100% terverifikasi. Tanpa iklan, tanpa algoritma.",
  },
  "home.mission.cta": { en: "How we work", id: "Cara kami bekerja" },

  // News list page
  "news.eyebrow": { en: "News Hub", id: "Pusat Berita" },
  "news.title": { en: "All stories. One newsroom.", id: "Semua cerita. Satu newsroom." },
  "news.subtitle": {
    en: "Browse our coverage across six categories. Every story is researched, written, and fact-checked by students.",
    id: "Jelajahi liputan kami di enam kategori. Setiap cerita diriset, ditulis, dan diperiksa faktanya oleh pelajar.",
  },
  "news.filter.all": { en: "All", id: "Semua" },
  "news.empty": { en: "No stories in this category yet. Check back soon.", id: "Belum ada cerita di kategori ini. Periksa kembali nanti." },

  // Article page
  "article.back": { en: "All stories", id: "Semua cerita" },
  "article.readTime": { en: "min read", id: "menit baca" },
  "article.related.eyebrow": { en: "Keep reading", id: "Lanjutkan membaca" },
  "article.related.title": { en: "More from UGS", id: "Lebih banyak dari UGS" },
  "article.sources": { en: "Sources", id: "Sumber" },
  "article.whyItMatters": { en: "Why this actually matters", id: "Mengapa ini penting" },
  "article.translationNotice": {
    en: "Indonesian translation coming soon — showing English version.",
    id: "Terjemahan Bahasa Indonesia segera hadir — menampilkan versi Bahasa Inggris.",
  },

  // Contact page
  "contact.eyebrow": { en: "Contact", id: "Kontak" },
  "contact.title": { en: "Get in touch.", id: "Hubungi kami." },
  "contact.subtitle": {
    en: "Have a story tip, question, or want to collaborate? We'd love to hear from you.",
    id: "Punya tip cerita, pertanyaan, atau ingin berkolaborasi? Kami ingin mendengar dari kamu.",
  },
  "contact.connect.title": { en: "Connect with us", id: "Terhubung dengan kami" },
  "contact.form.title": { en: "Send a message", id: "Kirim pesan" },
  "contact.form.name": { en: "Name", id: "Nama" },
  "contact.form.name.placeholder": { en: "Your name", id: "Nama kamu" },
  "contact.form.email": { en: "Email", id: "Email" },
  "contact.form.message": { en: "Message", id: "Pesan" },
  "contact.form.message.placeholder": { en: "Tell us what's on your mind...", id: "Ceritakan apa yang ada di pikiranmu..." },
  "contact.form.submit": { en: "Submit", id: "Kirim" },
  "contact.form.sent": { en: "Sent — check your mail client", id: "Terkirim — periksa aplikasi email kamu" },
  "contact.tips.title": { en: "Story tips", id: "Tip cerita" },
  "contact.tips.body": {
    en: "Have a story we should cover? Send tips to",
    id: "Punya cerita yang perlu kami liput? Kirim tip ke",
  },

  // Updates page
  "updates.eyebrow": { en: "Updates", id: "Kabar" },
  "updates.title": { en: "What the team is up to.", id: "Apa yang sedang dikerjakan tim." },
  "updates.subtitle": {
    en: "Stay posted on recruitment, events, and the projects we're building.",
    id: "Tetap update soal rekrutmen, acara, dan proyek yang sedang kami bangun.",
  },
  "updates.recruitment": { en: "Open recruitment", id: "Rekrutmen terbuka" },
  "updates.events": { en: "Upcoming events", id: "Acara mendatang" },
  "updates.whatsUp": { en: "What we're up to", id: "Yang sedang kami kerjakan" },
  "updates.apply": { en: "Apply now", id: "Daftar sekarang" },
  "updates.deadline": { en: "Deadline", id: "Batas waktu" },

  // Footer
  "footer.explore": { en: "Explore", id: "Jelajahi" },
  "footer.connect": { en: "Connect", id: "Terhubung" },
  "footer.description": {
    en: "A student community at SMA Regina Pacis Surakarta fostering global awareness through critical thinking, responsible research, and humanist publishing.",
    id: "Komunitas pelajar SMA Regina Pacis Surakarta yang menumbuhkan kesadaran global melalui pemikiran kritis, riset bertanggung jawab, dan publikasi humanis.",
  },
  "footer.tagline": { en: '"Stay aware. Stay critical."', id: '"Tetap sadar. Tetap kritis."' },
  "footer.rights": { en: "© {year} Ursulin Global Studies. Student-run. Fact-checked.", id: "© {year} Ursulin Global Studies. Dikelola pelajar. Terverifikasi." },
  "footer.location": { en: "SMA Regina Pacis Surakarta · Surakarta, Indonesia", id: "SMA Regina Pacis Surakarta · Surakarta, Indonesia" },

  // Language toggle
  "lang.label": { en: "Language", id: "Bahasa" },

  // About page
  "about.eyebrow": { en: "A community run by students — for students", id: "Komunitas yang dijalankan pelajar — untuk pelajar" },
  "about.headline.before": { en: "This is", id: "Inilah" },
  "about.headline.accent": { en: "who we are.", id: "siapa kami." },
  "about.description": {
    en: "Ursulin Global Studies is a student-driven community at SMA Regina Pacis Surakarta focused on global awareness, information literacy, and humanitarian care through writing, insight, and action.",
    id: "Ursulin Global Studies adalah komunitas pelajar di SMA Regina Pacis Surakarta yang berfokus pada kesadaran global, literasi informasi, dan kepedulian kemanusiaan melalui tulisan, wawasan, dan aksi.",
  },
  "about.stats.categories": { en: "Categories", id: "Kategori" },
  "about.stats.programs": { en: "Programs", id: "Program" },
  "about.stats.studentRun": { en: "Student-run", id: "Dikelola Pelajar" },
  "about.background.eyebrow": { en: "Background", id: "Latar Belakang" },
  "about.background.title": { en: "Why we started.", id: "Mengapa kami memulai." },
  "about.background.body1": {
    en: "UGS was born from a simple need: critical thinking and a real understanding of global issues, in a time when information moves faster than ever and gets more complex with every scroll. We think students shouldn't just receive information, we should analyze it, verify it, and understand the context around events that shape everyone's lives.",
    id: "UGS lahir dari kebutuhan sederhana: berpikir kritis dan memahami isu global secara nyata, di masa ketika informasi bergerak lebih cepat dari sebelumnya dan semakin kompleks setiap kali kita scroll. Kami percaya pelajar tidak seharusnya hanya menerima informasi — kami harus menganalisisnya, memverifikasinya, dan memahami konteks di balik peristiwa yang memengaruhi kehidupan semua orang.",
  },
  "about.background.body2": {
    en: "That's the whole idea. Not a club. Not a content factory. A learning space that takes the world seriously and takes young voices seriously too.",
    id: "Itulah intinya. Bukan sekadar klub. Bukan pabrik konten. Ruang belajar yang menanggapi dunia dengan serius dan juga menanggapi suara-suara muda dengan serius.",
  },
  "about.objectives.eyebrow": { en: "Objectives", id: "Tujuan" },
  "about.objectives.title": { en: "What we're trying to do.", id: "Apa yang ingin kami capai." },
  "about.vision.eyebrow": { en: "Vision", id: "Visi" },
  "about.vision.body": {
    en: "To be a student community that grows global awareness through critical understanding, responsible research, and humanist publishing.",
    id: "Menjadi komunitas pelajar yang menumbuhkan kesadaran global melalui pemahaman kritis, riset bertanggung jawab, dan publikasi humanis.",
  },
  "about.mission.eyebrow": { en: "Mission", id: "Misi" },
  "about.programs.eyebrow": { en: "Programs", id: "Program" },
  "about.programs.title": { en: "Three programs. One mission.", id: "Tiga program. Satu misi." },
  "about.programs.subtitle": {
    en: "Every UGS activity lives inside one of these three programs. Together they cover what we publish, what we teach, and what we do in the world.",
    id: "Setiap kegiatan UGS berada dalam salah satu dari tiga program ini. Bersama-sama, ketiganya mencakup apa yang kami terbitkan, apa yang kami ajarkan, dan apa yang kami lakukan di dunia.",
  },
  "about.divisions.eyebrow": { en: "Divisions", id: "Divisi" },
  "about.divisions.title": { en: "Three teams, one newsroom.", id: "Tiga tim, satu newsroom." },
  "about.divisions.subtitle": {
    en: "When you apply, you pick two preferred divisions. We place each member in the one that best fits the team's needs.",
    id: "Saat mendaftar, kamu memilih dua divisi yang diinginkan. Kami menempatkan setiap anggota di divisi yang paling sesuai dengan kebutuhan tim.",
  },
  "about.benefits.eyebrow": { en: "Who benefits", id: "Siapa yang diuntungkan" },
  "about.benefits.title": { en: "What UGS gives back.", id: "Apa yang UGS berikan." },
  "about.benefits.students": { en: "For students", id: "Untuk pelajar" },
  "about.benefits.school": { en: "For the school", id: "Untuk sekolah" },
  "about.closing.body": {
    en: "With the school's support, UGS can keep being a space that's positive, responsible, and useful, both for the students in it and for the wider community at SMA Regina Pacis Surakarta.",
    id: "Dengan dukungan sekolah, UGS dapat terus menjadi ruang yang positif, bertanggung jawab, dan bermanfaat — baik bagi pelajar yang ada di dalamnya maupun bagi komunitas yang lebih luas di SMA Regina Pacis Surakarta.",
  },
  "about.closing.quote.line1": { en: "UGS isn't just a community.", id: "UGS bukan sekadar komunitas." },
  "about.closing.quote.line2": { en: "It's a place to learn how to see the world.", id: "Ini adalah tempat untuk belajar melihat dunia." },
  "about.closing.cta.read": { en: "Read our stories", id: "Baca cerita kami" },
  "about.closing.cta.contact": { en: "Get in touch", id: "Hubungi kami" },

  // Updates page — recruitment block
  "updates.recruitment.title": { en: "Join the UGS Team — 2026", id: "Bergabunglah dengan Tim UGS — 2026" },
  "updates.recruitment.body": {
    en: "We're getting everything ready to open recruitment for the UGS team. Details on divisions, roles, and how to apply will be posted here first. Stay tuned.",
    id: "Kami sedang mempersiapkan segalanya untuk membuka rekrutmen tim UGS. Detail divisi, peran, dan cara mendaftar akan diposting di sini lebih dulu. Pantau terus.",
  },
} as const;

export type DictKey = keyof typeof dict;