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
    translations: {
      id: {
        title: "Terkunci: Gelombang Global Larangan Media Sosial bagi Remaja",
        excerpt:
          "Kamu membuka TikTok. Instagram. Mungkin Snapchat. Lalu — tidak ada apa-apa. Bukan karena aplikasinya mati, tapi karena pemerintah memutuskan kamu terlalu muda untuk ada di sana.",
        content: [
          {
            type: "paragraph",
            html: "Kamu membuka TikTok. Instagram. Mungkin Snapchat. Lalu — tidak ada apa-apa. <strong>Bukan karena aplikasinya mati. Tapi karena pemerintah memutuskan kamu terlalu muda untuk ada di sana.</strong>",
          },
          {
            type: "paragraph",
            html: "Itulah kenyataan yang dihadapi jutaan remaja saat ini. Dimulai dari Australia pada 2025 — negara pertama yang sepenuhnya melarang media sosial bagi siapa pun di bawah 16 tahun. Dalam satu bulan, <strong>sekitar 4,7 juta akun remaja dihapus</strong>. Itu baru langkah pertama.",
          },
          { type: "eyebrow", text: "Apa yang terjadi" },
          {
            type: "paragraph",
            html: "<strong>Ini bukan lagi eksperimen satu negara — ini adalah gelombang regulasi global.</strong> Spanyol mendorong larangan untuk anak di bawah 16 tahun dengan verifikasi usia wajib. Prancis menargetkan anak di bawah 15 tahun. Indonesia ikut pada Maret 2026 dengan pembatasan pada TikTok, Instagram, dan Facebook. Denmark, Jerman, Malaysia, Inggris — semuanya sedang merencanakan atau aktif memperdebatkan hal yang sama.",
          },
          {
            type: "statsGrid",
            items: [
              { flag: "🇦🇺", label: "Australia", value: "Di bawah 16 tahun dilarang — aktif sejak 2025" },
              { flag: "🇮🇩", label: "Indonesia", value: "Pembatasan di bawah 16 tahun — Maret 2026" },
              { flag: "🇪🇸", label: "Spanyol", value: "Di bawah 16 tahun + verifikasi usia" },
              { flag: "🇫🇷", label: "Prancis", value: "Larangan di bawah 15 tahun — perkiraan 2026" },
              { flag: "🇩🇰", label: "Denmark", value: "Larangan di bawah 15 tahun direncanakan" },
              { flag: "🇩🇪", label: "Jerman", value: "Membahas usia 14–16 tahun" },
              { flag: "🇬🇧", label: "Inggris Raya", value: "Konsultasi aktif" },
              { flag: "🇲🇾", label: "Malaysia", value: "Larangan di bawah 16 tahun direncanakan" },
            ],
          },
          { type: "eyebrow", text: "Mengapa ini terjadi" },
          {
            type: "paragraph",
            html: "Pemerintah menunjuk kesehatan mental — studi yang menghubungkan penggunaan berlebihan dengan <strong>kecemasan, kecanduan, dan rentang perhatian yang semakin pendek</strong>. Tapi ini lebih dalam. Platform ini tidak dibangun untuk menjadi sehat. <strong>Algoritma yang dirancang untuk memaksimalkan keterlibatan</strong> tidak peduli apakah kamu merasa lebih buruk setelah scrolling. Mereka peduli agar kamu kembali. Tambah kekhawatiran privasi data dan paparan konten berbahaya, dan pemerintah mulai memperlakukan akses media sosial seperti rokok: dibatasi usia.",
          },
          {
            type: "callout",
            html: "Ini bukan sekadar soal kesehatan mental. Ini soal siapa yang mengontrol apa yang dilihat anak muda — dan siapa yang berhak memutuskan itu.",
          },
          {
            type: "list",
            items: [
              { label: "Akses informasi", text: "siapa yang bisa melihat apa, di mana, dan kapan" },
              { label: "Siklus tren", text: "bagaimana budaya menyebar jika pengguna muda dikunci keluar" },
              { label: "Penyaringan konten", text: "aturan berbeda = realitas berbeda per negara" },
              { label: "Identitas digital", text: "verifikasi usia menjadi norma baru" },
            ],
          },
          {
            type: "paragraph",
            html: "Internet dulu terasa tanpa batas. Sama untuk semua orang. Yang terjadi sekarang adalah sebaliknya — akses menjadi <strong>bersyarat, tersaring, dibentuk oleh tempat tinggalmu</strong>.",
          },
          {
            type: "heading",
            level: 2,
            text: "Dua orang. Aplikasi yang sama. Momen yang sama. Feed yang benar-benar berbeda — karena pemerintah mereka membuat keputusan yang berbeda.",
          },
          { type: "eyebrow", text: "Apa yang bisa kamu lakukan" },
          {
            type: "paragraph",
            html: "<strong>Jangan mengandalkan hanya satu platform untuk berita.</strong> Jika TikTok adalah satu-satunya sumbermu dan aksesnya dipotong, kamu terjebak. Cross-check — hanya butuh sepuluh detik. Perhatikan juga kebiasaanmu: apakah kamu membuka aplikasi karena ingin, atau hanya karena refleks? Dan ingat — <strong>datamu dilacak</strong> ada larangan atau tidak.",
          },
          { type: "eyebrow", text: "Gambaran yang lebih besar" },
          {
            type: "paragraph",
            html: "Ini bukan soal aplikasi. Ini tentang pergeseran lambat menuju <strong>ruang digital yang terkontrol</strong> — di mana apa yang kamu lihat dibentuk oleh algoritma dan pemerintah secara bersamaan. Bagian yang paling menakutkan bukan apa yang ada di feedmu. <strong>Melainkan apa yang tidak ada — dan bahwa kamu tidak akan pernah tahu.</strong>",
          },
          {
            type: "quote",
            html: "Jangan hanya scroll. Tanyakan apa yang muncul — dan perhatikan apa yang tidak.",
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
    },
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
    translations: {
      id: {
        title: "Youth Climate Summit 2026: Generasi Kita Bertindak",
        excerpt:
          "Liputan dari KTT iklim pemuda global di mana para pelajar mengusulkan solusi yang selama puluhan tahun dihindari pemerintah.",
        content: [
          {
            type: "paragraph",
            html: "Lebih dari 3.000 pelajar dari 48 negara berkumpul di Jakarta minggu lalu untuk Youth Climate Summit 2026 — konferensi lingkungan yang dipimpin pelajar terbesar yang pernah diadakan di Asia Tenggara. Pesannya jelas: <strong>kami tidak lagi menunggu izin untuk peduli terhadap masa depan kami.</strong>",
          },
          { type: "eyebrow", text: "Apa yang dibahas" },
          {
            type: "paragraph",
            html: "KTT ini berfokus pada tiga pilar: pelacakan emisi di tingkat sekolah, larangan plastik sekali pakai di kampus, dan laboratorium kebijakan pelajar pan-regional yang merancang rekomendasi legislasi langsung untuk para pembuat undang-undang. Delegasi dari Indonesia, Australia, Filipina, dan Jepang mempresentasikan program percontohan yang sudah berjalan di sekolah mereka.",
          },
          {
            type: "callout",
            html: "Delegasi Ursulin sendiri mempresentasikan sistem pengomposan limbah makanan yang berhasil mengurangi sampah kafetaria sebesar 62% dalam satu semester.",
          },
          { type: "eyebrow", text: "Langkah selanjutnya" },
          {
            type: "paragraph",
            html: "Deklarasi bersama ditandatangani oleh perwakilan dari lebih dari 40 sekolah yang berkomitmen untuk audit emisi triwulanan dan peluncuran dataset terbuka bersama. KTT berikutnya dijadwalkan di Seoul pada 2027.",
          },
          {
            type: "quote",
            html: "Orang dewasa terus mengatakan generasi berikutnya yang akan menyelesaikan ini. Kamilah generasi berikutnya. Kami tidak lagi menunggu izin.",
          },
        ],
      },
    },
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
    translations: {
      id: {
        title: "Esports Masuk Arus Utama: Rekor Penonton Turnamen Pecah",
        excerpt:
          "Kejuaraan game terbaru melampaui olahraga tradisional dalam jumlah penonton online, menandai pergeseran budaya yang telah lama berkembang.",
        content: [
          {
            type: "paragraph",
            html: "Untuk pertama kalinya, sebuah final esports menarik <strong>lebih banyak penonton online secara bersamaan daripada final UEFA Champions League tahun lalu</strong>. Bukan perbandingan tipis. Kejuaraan Dunia Valorant 2026 mencapai puncak 6,8 juta penonton bersamaan di Twitch dan YouTube — angka yang dulu hanya dimiliki olahraga tradisional.",
          },
          { type: "eyebrow", text: "Mengapa terjadi pergeseran" },
          {
            type: "paragraph",
            html: "Tiga hal berubah. Nilai produksi kini menyaingi siaran TV. Para pemain telah menjadi kepribadian penuh dengan pengikut lintas platform. Dan — yang paling penting — Gen Z menonton dengan cara berbeda: klip, siaran langsung, dan layar kedua, bukan siaran terjadwal.",
          },
          {
            type: "list",
            items: [
              { label: "Produksi", text: "pembukaan sinematik, pengambilan gambar drone, arc narasi" },
              { label: "Kepribadian", text: "pemain sebagai streamer, bukan hanya atlet" },
              { label: "Distribusi", text: "liputan yang mengutamakan klip dan berorientasi sosial" },
            ],
          },
          {
            type: "paragraph",
            html: "Liga olahraga tradisional memperhatikan. NBA dan La Liga keduanya mengumumkan peningkatan produksi terinspirasi esports untuk 2026. Pertanyaannya bukan lagi apakah esports itu sah — melainkan apakah olahraga lainnya bisa mengikuti.",
          },
        ],
      },
    },
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
    translations: {
      id: {
        title: "Alat Belajar AI Ada di Setiap Kelas — Tapi Apakah Benar-Benar Membantu?",
        excerpt:
          "Pandangan lebih dalam tentang bagaimana Gen Z sebenarnya menggunakan AI untuk belajar, apa yang diamati guru, dan apakah nilai benar-benar meningkat.",
        content: [
          {
            type: "paragraph",
            html: "Masuk ke kelas SMA mana saja di 2026 dan kamu akan melihatnya: pelajar diam-diam memeriksa tutor AI di sela-sela pertanyaan, menyusun esai dengan bantuan AI, membuat kartu flash dalam hitungan detik. <strong>Alatnya ada di mana-mana. Yang kurang jelas adalah apakah mereka benar-benar membuat pelajar lebih pintar.</strong>",
          },
          { type: "eyebrow", text: "Datanya" },
          {
            type: "paragraph",
            html: "Sebuah studi 2026 dari OECD melacak 14.000 pelajar di 12 negara. Mereka yang secara rutin menggunakan alat belajar AI mendapat nilai rata-rata 8% lebih tinggi pada tes pemecahan masalah — tetapi hanya jika mereka menggunakannya untuk <em>menjelaskan konsep</em>. Pelajar yang menggunakan AI untuk <em>menghasilkan jawaban</em> mendapat nilai 11% lebih rendah pada tes yang sama.",
          },
          {
            type: "callout",
            html: "Alatnya bukan masalahnya. Cara kamu menggunakannya adalah segalanya.",
          },
          { type: "eyebrow", text: "Apa yang pelajar ceritakan kepada kami" },
          {
            type: "paragraph",
            html: "Kami mensurvei 200 pelajar SMA Regina Pacis Surakarta secara informal. Polanya: sebagian besar mengatakan AI membantu mereka belajar lebih cepat, tetapi hanya sekitar sepertiga yang merasa mereka benar-benar <em>memahami</em> materi dengan lebih baik. Sisanya merasa lebih siap — dan juga lebih cemas.",
          },
          {
            type: "paragraph",
            html: "Guru-guru yang kami ajak bicara tidak anti-AI. Mereka anti-jalan pintas. Garis yang terus mereka tarik: gunakan untuk mengajukan pertanyaan yang lebih baik, bukan untuk menghindari pertanyaan sama sekali.",
          },
        ],
      },
    },
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

export function getLocalizedArticle(article: Article, lang: string) {
  const tr = lang !== "en" ? article.translations?.[lang as "id"] : undefined;
  return {
    title: tr?.title ?? article.title,
    excerpt: tr?.excerpt ?? article.excerpt,
    content: tr?.content ?? article.content,
  };
}
