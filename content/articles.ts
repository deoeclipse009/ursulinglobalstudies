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
    slug: "fuel-price-hike-indonesia-april-2026",
    title: "Fuel Shock: Why Your Everyday Costs Just Got Higher",
    excerpt:
      "You didn't change anything. But your wallet might feel it this week. Here's what happened with Indonesia's latest fuel price hike, and why it's bigger than most people realize.",
    coverImage: "/images/spbu-pertamina-1759386985287_169.jpeg",
    coverImageAlt: "Fuel dispensers at a Pertamina gas station in Indonesia",
    coverImageCredit: "Photo: detik.com/jogja",
    author: "UGS Newsroom",
    publishedAt: "2026-04-22",
    category: "Economy",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        html: "You didn't change anything. But your wallet might feel it this week. Here's what happened with Indonesia's latest fuel price hike, and why it's bigger than most people realize.",
      },
      { type: "eyebrow", text: "WHAT'S HAPPENING" },
      {
        type: "paragraph",
        html: "On April 18, 2026, Pertamina officially raised prices on three types of non-subsidized fuel: Pertamax Turbo, Dexlite, and Pertamina Dex. The numbers are hard to ignore. Dexlite jumped from Rp14,200 to Rp23,600 per liter. Pertamina Dex went from Rp14,500 to Rp23,900. Pertamax Turbo leapt from Rp13,100 all the way to Rp19,400. <strong>That's a Rp9,400 per-liter increase on diesel. Not a small adjustment.</strong>",
      },
      {
        type: "paragraph",
        html: "The good news is that subsidized fuels like Pertalite and Solar haven't moved. Pertalite stays at Rp10,000 per liter. Solar at Rp6,800. So if you're a regular commuter on a motorcycle, your direct fuel cost is the same. But that's only part of the story.",
      },
      {
        type: "statsGrid",
        items: [
          { label: "Pertamax Turbo", value: "Rp13,100 → Rp19,400 (+Rp6,300)" },
          { label: "Dexlite", value: "Rp14,200 → Rp23,600 (+Rp9,400)" },
          { label: "Pertamina Dex", value: "Rp14,500 → Rp23,900 (+Rp9,400)" },
          { label: "Pertamax", value: "Rp12,300 → No change" },
          { label: "Pertalite", value: "Rp10,000 → No change" },
          { label: "Bio Solar", value: "Rp6,800 → No change" },
        ],
      },
      { type: "eyebrow", text: "WHY IT MATTERS" },
      {
        type: "paragraph",
        html: "Dexlite and Pertamina Dex are diesel fuels. They're what trucks, delivery vehicles, and heavy machinery run on. When diesel gets more expensive, moving goods gets more expensive. And when moving goods costs more, everything at the end of that supply chain follows.",
      },
      {
        type: "paragraph",
        html: "Economists are already flagging the ripple effects. One projection puts the additional inflation impact at around <strong>0.42%</strong>, nudging annual inflation from 2.51% toward 2.93%. Another warns food price inflation could hit <strong>5 to 6 percent in April</strong> if logistics costs go unchecked.",
      },
      {
        type: "paragraph",
        html: "The reason things haven't spiked overnight: most freight trucks still run on subsidized Solar, which hasn't changed. That subsidy is the cushion right now. But if it ever moves, the impact would be a completely different conversation.",
      },
      {
        type: "callout",
        html: "Fuel prices aren't just about energy. They're a pressure point that runs through the entire economy: logistics, food, goods, and the cost of living for millions of people.",
      },
      { type: "eyebrow", text: "THE BIGGER PICTURE" },
      {
        type: "paragraph",
        html: "Two things are driving this. First, global oil prices are still volatile because of the ongoing conflict in Iran. Second, the rupiah has been weakening against the US dollar, which makes importing energy more expensive. Indonesia imports part of its energy needs, so when the currency dips, fuel costs go up with it.",
      },
      {
        type: "paragraph",
        html: "Pertamina says the adjustment follows a government pricing formula under the Ministry of Energy regulation. But for most people, the formula doesn't matter as much as the price tag does.",
      },
      {
        type: "heading",
        level: 2,
        text: "One price change. But the effects don't stop at the pump.",
      },
      { type: "eyebrow", text: "WHAT YOU SHOULD KNOW" },
      {
        type: "paragraph",
        html: "The people most exposed here aren't the ones filling up Pertamax Turbo. It's the small vendors, warungs, and market sellers who depend on third-party delivery. When their supplier's transport costs go up, they adjust prices to survive. It's not greed. It's just math.",
      },
      {
        type: "paragraph",
        html: "Rural communities feel this harder than urban ones. The farther goods travel, the more expensive distribution becomes, and the wider the gap between city prices and village prices gets.",
      },
      {
        type: "paragraph",
        html: "<strong>Keep an eye on staple goods in your area over the next few weeks.</strong> That's where this will show up first.",
      },
      {
        type: "quote",
        html: "The price at the pump is just the starting point. Follow the supply chain. That's where the real story is.",
      },
      { type: "divider" },
      {
        type: "sources",
        items: [
          "CNBC Indonesia. (2026). <em>Resmi Naik! Daftar Harga BBM di SPBU Pertamina, Berlaku 20 April 2026.</em> cnbcindonesia.com.",
          "Kontan. (2026). <em>Menakar Dampak Kenaikan Harga BBM Non-Subsidi dan LPG 12 Kg terhadap Inflasi.</em> kontan.co.id.",
          "Kontan. (2026). <em>Kenaikan Harga BBM Non-Subsidi Tekan Daya Beli, Pertumbuhan Ekonomi Bisa Tertahan.</em> kontan.co.id.",
          "Kompas Money. (2026). <em>Harga 3 Jenis BBM Pertamina Ini Naik Per 18 April 2026.</em> money.kompas.com.",
          "RMOL. (2026). <em>Efek Domino Kenaikan Harga BBM Nonsubsidi.</em> rmol.id.",
        ],
      },
    ],
    translations: {
      id: {
        title: "BBM Naik, Dompet Terasa: Apa yang Sebenarnya Terjadi?",
        excerpt:
          "Kamu tidak mengubah apa-apa. Tapi biaya hidupmu mungkin sudah mulai bergerak. Ini penjelasan kenaikan BBM April 2026 dan kenapa dampaknya lebih besar dari yang kelihatan.",
        content: [
          {
            type: "paragraph",
            html: "Kamu tidak mengubah apa-apa. Tapi biaya hidupmu mungkin sudah mulai bergerak. Ini penjelasan kenaikan BBM April 2026 dan kenapa dampaknya lebih besar dari yang kelihatan.",
          },
          { type: "eyebrow", text: "APA YANG TERJADI" },
          {
            type: "paragraph",
            html: "Per 18 April 2026, Pertamina resmi menaikkan harga tiga jenis BBM nonsubsidi: Pertamax Turbo, Dexlite, dan Pertamina Dex. Angkanya cukup mengejutkan. Dexlite naik dari Rp14.200 menjadi Rp23.600 per liter. Pertamina Dex dari Rp14.500 menjadi Rp23.900. Pertamax Turbo dari Rp13.100 langsung ke Rp19.400. <strong>Untuk Dexlite dan Pertamina Dex, kenaikannya Rp9.400 per liter. Itu bukan penyesuaian kecil.</strong>",
          },
          {
            type: "paragraph",
            html: "Kabar baiknya: Pertalite dan Solar subsidi tidak ikut naik. Pertalite tetap Rp10.000 per liter, Solar tetap Rp6.800. Kalau kamu naik motor tiap hari, biaya BBM langsungmu belum berubah. Tapi itu baru setengah ceritanya.",
          },
          {
            type: "statsGrid",
            items: [
              { label: "Pertamax Turbo", value: "Rp13.100 → Rp19.400 (+Rp6.300)" },
              { label: "Dexlite", value: "Rp14.200 → Rp23.600 (+Rp9.400)" },
              { label: "Pertamina Dex", value: "Rp14.500 → Rp23.900 (+Rp9.400)" },
              { label: "Pertamax", value: "Rp12.300 → Tidak berubah" },
              { label: "Pertalite", value: "Rp10.000 → Tidak berubah" },
              { label: "Bio Solar", value: "Rp6.800 → Tidak berubah" },
            ],
          },
          { type: "eyebrow", text: "KENAPA INI PENTING" },
          {
            type: "paragraph",
            html: "Dexlite dan Pertamina Dex adalah solar. Itu bahan bakar yang dipakai truk, kendaraan logistik, dan mesin industri. Ketika solar nonsubsidi naik, biaya distribusi barang ikut naik. Dan ketika distribusi mahal, harga semua barang di ujung rantai pasok pun ikut bergerak.",
          },
          {
            type: "paragraph",
            html: "Para ekonom sudah mulai memperingatkan efek berantainya. Satu proyeksi memperkirakan tambahan inflasi sekitar <strong>0,42%</strong>, mendorong inflasi tahunan dari 2,51% menuju 2,93%. Proyeksi lain menyebut <strong>inflasi pangan bisa menembus 5 sampai 6 persen</strong> di April ini kalau biaya logistik tidak segera dikendalikan.",
          },
          {
            type: "paragraph",
            html: "Kenapa belum langsung terasa? Karena sebagian besar truk pengangkut barang masih pakai Solar subsidi yang belum berubah harganya. Itu yang jadi bantalan sementara. Tapi kalau suatu hari subsidi itu ikut dicabut, situasinya bisa berubah drastis.",
          },
          {
            type: "callout",
            html: "Harga BBM bukan cuma soal bensin. Ini titik tekan yang menjalar ke seluruh ekonomi: logistik, pangan, barang pokok, dan biaya hidup jutaan orang.",
          },
          { type: "eyebrow", text: "GAMBARAN LEBIH BESAR" },
          {
            type: "paragraph",
            html: "Ada dua hal yang mendorong kenaikan ini. Pertama, harga minyak dunia masih bergejolak karena konflik yang sedang terjadi di Iran. Kedua, nilai tukar rupiah melemah terhadap dolar AS, yang membuat biaya impor energi semakin berat. Indonesia masih mengimpor sebagian kebutuhan energinya, jadi ketika rupiah turun, harga BBM pun ikut naik.",
          },
          {
            type: "paragraph",
            html: "Pertamina menyebut penyesuaian ini mengikuti formula harga dari Kementerian ESDM, bukan keputusan bisnis semata. Tapi bagi kebanyakan orang, formulanya tidak terlalu penting. Yang terasa adalah angka di papan SPBU.",
          },
          {
            type: "heading",
            level: 2,
            text: "Satu kenaikan harga. Tapi efeknya tidak berhenti di SPBU.",
          },
          { type: "eyebrow", text: "YANG PERLU KAMU TAHU" },
          {
            type: "paragraph",
            html: "Yang paling terdampak bukan pengendara Pertamax Turbo. Tapi pedagang warung, penjual pasar, dan usaha kecil yang bergantung pada pengiriman barang dari supplier. Ketika ongkos kirim supplier naik, mereka menyesuaikan harga jual untuk bisa tetap bertahan. Bukan karena serakah. Tapi karena memang begitu hitungannya.",
          },
          {
            type: "paragraph",
            html: "Daerah pedesaan merasakannya lebih berat dari kota. Makin jauh barang harus dikirim, makin besar biaya distribusinya, makin lebar juga selisih harga antara kota dan desa.",
          },
          {
            type: "paragraph",
            html: "<strong>Perhatikan harga bahan pokok di sekitarmu dalam beberapa minggu ke depan.</strong> Di situlah dampak ini akan pertama kali kelihatan.",
          },
          {
            type: "quote",
            html: "Harga di SPBU itu cuma awal. Ikuti rantai distribusinya. Di situ cerita yang sebenarnya tersimpan.",
          },
          { type: "divider" },
          {
            type: "sources",
            items: [
              "CNBC Indonesia. (2026). <em>Resmi Naik! Daftar Harga BBM di SPBU Pertamina, Berlaku 20 April 2026.</em> cnbcindonesia.com.",
              "Kontan. (2026). <em>Menakar Dampak Kenaikan Harga BBM Non-Subsidi dan LPG 12 Kg terhadap Inflasi.</em> kontan.co.id.",
              "Kontan. (2026). <em>Kenaikan Harga BBM Non-Subsidi Tekan Daya Beli, Pertumbuhan Ekonomi Bisa Tertahan.</em> kontan.co.id.",
              "Kompas Money. (2026). <em>Harga 3 Jenis BBM Pertamina Ini Naik Per 18 April 2026.</em> money.kompas.com.",
              "RMOL. (2026). <em>Efek Domino Kenaikan Harga BBM Nonsubsidi.</em> rmol.id.",
            ],
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
