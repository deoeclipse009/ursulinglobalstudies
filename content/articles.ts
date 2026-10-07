import type { Article } from "./types";
import publishedArticles from "./published-articles.json";

/**
 * All UGS articles live here.
 *
 * Articles come from two places:
 *   - `published-articles.json`: articles added through the hidden admin page
 *     (/admin) or by an AI coding agent following AGENTS.md. Prefer this.
 *   - The `handwrittenArticles` array below: older articles written by hand.
 *
 * Rules for either: `slug` must be unique, lowercase, hyphenated, and
 * `content` is an array of blocks (see `./types.ts` for every block type).
 * The /news list and /news/[slug] pages update automatically.
 */
const handwrittenArticles: Article[] = [
  {
    slug: "fuel-price-hike-indonesia-april-2026",
    title: "Fuel Shock: Why Your Everyday Costs Just Got Higher",
    excerpt:
      "You didn't change anything. But your wallet might feel it this week. Indonesia raised fuel prices again, and the impact reaches further than most people realize.",
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
        html: "You didn't change anything. But your wallet might feel it this week. Indonesia raised fuel prices again, and the impact reaches further than most people realize.",
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
  {
    slug: "israel-lebanon-escalation-may-2026",
    title: "Ceasefire in Name Only: Inside the Israel–Lebanon Escalation",
    excerpt:
      "A truce was signed weeks ago. The strikes never really stopped. This report examines what's driving one of the deadliest chapters yet in the Israel-Hezbollah conflict, and why it refuses to end quietly.",
    coverImage: "/images/israel-lebanon-escalation-may-2026.png",
    coverImageAlt: "The Qasmiya Bridge over the Litani River, destroyed in an Israeli strike, March 2026",
    coverImageCredit: "Photo: Megaphone / Wikimedia Commons (CC BY 4.0)",
    author: "UGS Newsroom",
    publishedAt: "2026-05-09",
    category: "Politics",
    readingMinutes: 6,
    content: [
      {
        type: "paragraph",
        html: "A truce was signed weeks ago. The strikes never really stopped. This report examines what's driving one of the deadliest chapters yet in the Israel-Hezbollah conflict, and why it refuses to end quietly.",
      },
      { type: "eyebrow", text: "WHAT'S HAPPENING" },
      {
        type: "paragraph",
        html: "Israeli air raids struck at least seven districts across southern Lebanon on May 8, 2026, including Toura, Tyre, Blat, Marjayoun, Nabatieh, Bint Jbeil, and Sidon, killing at least 20 people, according to Lebanese state media. The country's health ministry reported 50 deaths in the preceding 24 hours alone, among them a civil defense rescuer. An Israeli drone also struck a vehicle in the Hasbaya district.",
      },
      {
        type: "paragraph",
        html: "An Al Jazeera correspondent on the ground called it \"a significant escalation compared to the past couple of days,\" and it's not hard to see why. The Israeli military issued fresh forced-evacuation orders for towns across the south, while Hezbollah said its own missile and drone strikes on Israeli positions were retaliation for what it called ongoing ceasefire violations. Israel confirmed one of those drones wounded two of its soldiers.",
      },
      {
        type: "paragraph",
        html: "What makes this harder to process is that a ceasefire is technically still in place. It simply is not holding.",
      },
      {
        type: "statsGrid",
        items: [
          { label: "Mar 2, 2026", value: "War begins: Hezbollah fires on Israel after the killing of Iranian Supreme Leader Ali Khamenei" },
          { label: "Mar 19, 2026", value: "1,001 dead, per Lebanon's Health Ministry, as Israeli ground troops enter southern Lebanon" },
          { label: "Apr 16, 2026", value: "First direct Israel–Lebanon talks since 1993, held in Washington, D.C." },
          { label: "Apr 17–24, 2026", value: "10-day ceasefire announced, then extended by three weeks" },
          { label: "May 8, 2026", value: "Death toll nears 2,759, despite the \"active\" ceasefire" },
        ],
      },
      { type: "eyebrow", text: "WHY IT MATTERS" },
      {
        type: "paragraph",
        html: "This is not a contained, faraway conflict, even for readers thousands of kilometers away in Indonesia. Since March, more than 2,700 people have been killed and over 8,500 injured, including medical workers, journalists, and a Lebanese Catholic priest. More than 165 children were among the dead as of mid-April alone. UN peacekeepers, including UNIFIL forces with French and Indonesian personnel, have also come under fire; the IDF has admitted one of its own tank strikes hit a UN base.",
      },
      {
        type: "paragraph",
        html: "There is also a second, quieter way this conflict reaches everyone: oil. The Israel–Lebanon front is tangled up with a wider regional war involving Iran. Iran's response, closing the Strait of Hormuz, through which roughly a fifth of the world's oil moves, has already rattled global energy markets. That single chokepoint is a major reason fuel prices and interest rates have moved worldwide this year, Indonesia included.",
      },
      { type: "eyebrow", text: "THE BIGGER PICTURE" },
      {
        type: "paragraph",
        html: "The war traces back to March 2, when Hezbollah fired on Israel following the killing of Iran's Supreme Leader Ali Khamenei, folding a long-simmering Israel-Hezbollah conflict into a much larger regional war involving Iran directly. Within weeks, Israeli forces were operating inside Lebanon, destroying bridges over the Litani River to cut off Hezbollah's supply routes, while Hezbollah kept launching rockets and drones, at times up to 200 in a single operation.",
      },
      {
        type: "paragraph",
        html: "A ceasefire brokered in Washington on April 17 was supposed to change that. Lebanese Prime Minister Nawaf Salam says Beirut wants to \"solidify\" it, and new talks are scheduled for May 14–15 in Washington to address halting the attacks and releasing prisoners. But both sides keep accusing each other of violations, and on the ground, the fighting hasn't meaningfully paused.",
      },
      { type: "eyebrow", text: "WHAT YOU SHOULD KNOW" },
      {
        type: "paragraph",
        html: "Civilians are still paying the highest price. More than 165 children have died since the war began, and reporters, medics, and clergy have been killed alongside combatants. Ceasefires that exist on paper but not in practice are unfortunately common in modern conflicts, which is exactly why the outcome of the May 14–15 Washington talks matters so much.",
      },
      {
        type: "paragraph",
        html: "If fuel or loan costs have been creeping up lately, this is part of the reason why. The same instability driving headlines out of Beirut is quietly showing up in receipts and bank statements elsewhere, this newsroom's home city included.",
      },
      {
        type: "callout",
        html: "\"A significant escalation compared to the past couple of days,\" Al Jazeera reported from southern Lebanon on May 8, 2026.",
      },
      {
        type: "quote",
        html: "The ceasefire has a name. What it doesn't have yet is a hold on the ground.",
      },
      { type: "divider" },
      {
        type: "sources",
        items: [
          "Al Jazeera. (2026). <em>More than a dozen reported killed in Israeli attacks on south Lebanon.</em> aljazeera.com.",
          "Al Jazeera. (2026). <em>Israel to intensify Lebanon offensive to 'crush' Hezbollah.</em> aljazeera.com.",
          "Security Council Report. (2026). <em>Lebanon, May 2026 Monthly Forecast.</em> securitycouncilreport.org.",
        ],
      },
    ],
    translations: {
      id: {
        title: "Gencatan Senjata Cuma di Atas Kertas: Eskalasi Israel-Lebanon Belum Juga Reda",
        excerpt:
          "Gencatan senjata sudah diteken beberapa minggu lalu. Tapi serangan nggak pernah benar-benar berhenti. Ini penjelasan soal salah satu babak paling mematikan dalam konflik Israel-Hezbollah, dan kenapa perang ini enggan berakhir dengan tenang.",
        content: [
          {
            type: "paragraph",
            html: "Gencatan senjata sudah diteken beberapa minggu lalu. Tapi serangan nggak pernah benar-benar berhenti. Ini penjelasan soal salah satu babak paling mematikan dalam konflik Israel-Hezbollah, dan kenapa perang ini enggan berakhir dengan tenang.",
          },
          { type: "eyebrow", text: "APA YANG TERJADI" },
          {
            type: "paragraph",
            html: "Serangan udara Israel menghantam setidaknya tujuh distrik di Lebanon selatan pada 8 Mei 2026, termasuk Toura, Tyre, Blat, Marjayoun, Nabatieh, Bint Jbeil, dan Sidon, menewaskan sedikitnya 20 orang, menurut media pemerintah Lebanon. Kementerian Kesehatan negara itu melaporkan 50 kematian hanya dalam 24 jam sebelumnya, termasuk seorang petugas penyelamat pertahanan sipil. Sebuah drone Israel juga menghantam kendaraan di distrik Hasbaya.",
          },
          {
            type: "paragraph",
            html: "Seorang koresponden Al Jazeera di lapangan menyebutnya \"eskalasi signifikan dibanding beberapa hari terakhir,\" dan tidak sulit memahami kenapa. Militer Israel mengeluarkan perintah evakuasi paksa baru untuk kota-kota di selatan, sementara Hezbollah menyebut serangan rudal dan dronenya ke posisi Israel sebagai balasan atas apa yang mereka sebut pelanggaran gencatan senjata yang terus berlangsung. Israel mengonfirmasi salah satu drone tersebut melukai dua tentaranya.",
          },
          {
            type: "paragraph",
            html: "Secara teknis, gencatan senjata masih berlaku. Yang jadi masalah, itu tidak benar-benar bertahan di lapangan.",
          },
          {
            type: "statsGrid",
            items: [
              { label: "2 Mar 2026", value: "Perang dimulai: Hezbollah menyerang Israel setelah terbunuhnya Pemimpin Tertinggi Iran Ali Khamenei" },
              { label: "19 Mar 2026", value: "1.001 tewas, menurut Kementerian Kesehatan Lebanon, saat pasukan darat Israel memasuki Lebanon selatan" },
              { label: "16 Apr 2026", value: "Perundingan langsung pertama Israel–Lebanon sejak 1993, digelar di Washington, D.C." },
              { label: "17–24 Apr 2026", value: "Gencatan senjata 10 hari diumumkan, lalu diperpanjang tiga minggu" },
              { label: "8 Mei 2026", value: "Jumlah korban tewas mendekati 2.759, meski gencatan senjata dinyatakan \"aktif\"" },
            ],
          },
          { type: "eyebrow", text: "KENAPA INI PENTING" },
          {
            type: "paragraph",
            html: "Ini bukan konflik yang terkurung di satu tempat jauh, bahkan untuk pembaca yang tinggal ribuan kilometer jauhnya di Indonesia. Sejak Maret, lebih dari 2.700 orang tewas dan lebih dari 8.500 terluka, termasuk tenaga medis, jurnalis, dan seorang pastor Katolik Lebanon. Lebih dari 165 anak-anak termasuk di antara korban tewas hanya sampai pertengahan April. Pasukan penjaga perdamaian PBB, termasuk pasukan UNIFIL yang beranggotakan personel Prancis dan Indonesia, juga ikut terkena tembakan; IDF sendiri mengakui salah satu serangan tanknya mengenai pangkalan PBB.",
          },
          {
            type: "paragraph",
            html: "Ada juga cara kedua yang lebih senyap bagaimana konflik ini menjangkau semua orang: minyak. Front Israel–Lebanon terjalin dengan perang regional yang lebih besar yang melibatkan Iran, dan respons Iran, yaitu menutup Selat Hormuz, jalur yang dilewati sekitar seperlima minyak dunia, sudah mengguncang pasar energi global. Satu titik sempit itu jadi alasan besar kenapa harga BBM dan suku bunga bergerak di seluruh dunia tahun ini, termasuk di Indonesia.",
          },
          { type: "eyebrow", text: "GAMBARAN LEBIH BESAR" },
          {
            type: "paragraph",
            html: "Perang ini bermula sejak 2 Maret, ketika Hezbollah menyerang Israel setelah terbunuhnya Pemimpin Tertinggi Iran, Ali Khamenei, yang melipat konflik Israel-Hezbollah yang sudah lama membara ke dalam perang regional yang jauh lebih besar dan melibatkan Iran secara langsung. Dalam hitungan minggu, pasukan Israel sudah beroperasi di dalam Lebanon, menghancurkan jembatan-jembatan di atas Sungai Litani untuk memutus jalur pasokan Hezbollah, sementara Hezbollah terus meluncurkan roket dan drone, kadang hingga 200 dalam satu operasi.",
          },
          {
            type: "paragraph",
            html: "Gencatan senjata yang dimediasi di Washington pada 17 April seharusnya mengubah itu semua. Perdana Menteri Lebanon Nawaf Salam menyebut Beirut ingin \"memperkuat\" kesepakatan itu, dan perundingan baru dijadwalkan pada 14–15 Mei di Washington untuk membahas penghentian serangan dan pembebasan tahanan. Tapi kedua pihak terus saling menuduh melanggar, dan di lapangan, pertempuran belum benar-benar berhenti.",
          },
          { type: "eyebrow", text: "YANG PERLU KAMU TAHU" },
          {
            type: "paragraph",
            html: "Warga sipil masih menanggung akibat paling berat. Lebih dari 165 anak telah tewas sejak perang dimulai, dan jurnalis, tenaga medis, serta rohaniwan ikut gugur bersama para kombatan. Gencatan senjata yang cuma ada di atas kertas tapi tidak di lapangan sayangnya jadi hal yang umum dalam konflik modern, itulah kenapa hasil perundingan Washington 14–15 Mei begitu penting.",
          },
          {
            type: "paragraph",
            html: "Kalau biaya BBM atau cicilan pinjaman belakangan ikut merangkak naik, ini salah satu alasannya. Ketidakstabilan yang sama yang mendorong berita utama dari Beirut diam-diam muncul juga di struk belanja dan laporan bank di tempat lain, termasuk di kota tempat newsroom ini berada.",
          },
          {
            type: "callout",
            html: "\"Eskalasi signifikan dibanding beberapa hari terakhir,\" lapor Al Jazeera dari Lebanon selatan, 8 Mei 2026.",
          },
          {
            type: "quote",
            html: "Gencatan senjata itu sudah punya nama. Yang belum ia punya adalah kendali nyata di lapangan.",
          },
          { type: "divider" },
          {
            type: "sources",
            items: [
              "Al Jazeera. (2026). <em>More than a dozen reported killed in Israeli attacks on south Lebanon.</em> aljazeera.com.",
              "Al Jazeera. (2026). <em>Israel to intensify Lebanon offensive to 'crush' Hezbollah.</em> aljazeera.com.",
              "Security Council Report. (2026). <em>Lebanon, May 2026 Monthly Forecast.</em> securitycouncilreport.org.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "bumi-makin-panas-climate-may-2026",
    title: "Earth Just Logged Its Fourth-Hottest April Ever",
    excerpt:
      "The planet keeps setting records it shouldn't be proud of. Four decades of data, and this week's BMKG warnings, show the heat closing in on Indonesia.",
    coverImage: "/images/bumi-makin-panas-climate-may-2026.jpg",
    coverImageAlt: "Dried, cracked earth, a symbol of a warming, drying planet",
    coverImageCredit: "Photo: Vladislav Nekrasov / Wikimedia Commons (CC BY 4.0)",
    author: "UGS Newsroom",
    publishedAt: "2026-05-12",
    category: "Environment",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        html: "The planet keeps setting records it shouldn't be proud of. Four decades of data, and this week's BMKG warnings, show the heat closing in on Indonesia.",
      },
      { type: "eyebrow", text: "WHAT'S HAPPENING" },
      {
        type: "paragraph",
        html: "April 2026 was Earth's fourth-warmest April on record, trailing only 2024, 2025, and 2020, according to NOAA's National Centers for Environmental Information. Global surface temperature ran 1.12°C above the 20th-century average. More striking still, this was the 50th consecutive April to land above average. The last below-average April was in 1976, a full half-century ago.",
      },
      {
        type: "paragraph",
        html: "It isn't just a global statistics problem. Closer to home, BMKG recorded several Indonesian regions, including East Java, Central Java, East Kalimantan, Central Kalimantan, Central Sulawesi, and West Papua, hitting 36.5°C between May 7 and 10. At the same time, Southeast Sulawesi and Central Papua were getting drenched, with rainfall over 140mm in a single day. BMKG says both extremes come from the same tangle of atmospheric disturbances: the Madden-Julian Oscillation, equatorial Rossby and Kelvin waves, and the remnants of Tropical Cyclone Hagupit. Hot weather, it turns out, can trigger the very clouds that dump heavy rain hours later.",
      },
      {
        type: "statsGrid",
        items: [
          { label: "April 2026 global anomaly", value: "+1.12°C above the 20th-century average, 4th-warmest April on record" },
          { label: "Consecutive above-average Aprils", value: "50 years running, since 1976" },
          { label: "Jan–Apr 2026 ranking", value: "5th-highest year-to-date on record" },
          { label: "Indonesia regional highs, May 7–10", value: "Up to 36.5°C (Java, Kalimantan, Sulawesi, Papua)" },
          { label: "Land burned in Indonesia, Jan–Feb 2026", value: "32,637 hectares, 20x the same period last year" },
        ],
      },
      { type: "eyebrow", text: "WHY IT MATTERS" },
      {
        type: "paragraph",
        html: "Scientists are also watching for something bigger brewing later this year: a possible \"Godzilla El Niño.\" Forecasts put the odds at 25% for a \"very strong\" event and 50% for a \"strong\" one, which would mean prolonged drought layered on top of an already-hot year. That is a serious problem for a country where rice paddies depend on predictable rain. The 1997-98 El Niño cut Indonesian rice production by 6%; the 2024 event cut it by 17.5%. Indonesia had already burned 20 times more land by February 2026 than it had by the same point last year, a warning sign for the dry season still ahead.",
      },
      { type: "eyebrow", text: "THE BIGGER PICTURE" },
      {
        type: "paragraph",
        html: "None of this is happening in isolation from the rest of the news cycle. Even as the world grapples with a regional war disrupting oil supply through the Strait of Hormuz, the short-term scramble for alternative energy sources, more coal, more oil, whatever is fastest to secure, makes the long-term climate math even harder. Energy shocks and climate change tend to feed each other: instability pushes countries toward whatever fuel is available now, not necessarily the cleanest one.",
      },
      {
        type: "paragraph",
        html: "The UN's World Meteorological Organization has also flagged this as part of a longer trend, not a one-off. Year-to-date, 2026 already ranks among the top five warmest years ever measured, and scientists expect the years right after this one to be hotter still, not cooler.",
      },
      { type: "eyebrow", text: "WHAT YOU SHOULD KNOW" },
      {
        type: "paragraph",
        html: "Anyone who felt unusually hot weather in early May wasn't imagining it; BMKG's own data backs that up. The bigger risk isn't just an uncomfortable week. It's what a strengthening El Niño could do to food prices and water availability later this year, especially in farming communities that are already stretched thin.",
      },
      {
        type: "paragraph",
        html: "Watch your local water usage, and watch the news around food prices in the months ahead. If the \"Godzilla El Niño\" forecasts hold up, this is where it'll show up first.",
      },
      {
        type: "callout",
        html: "\"This was the 50th consecutive April to land above average. The last below-average April was in 1976.\"",
      },
      {
        type: "quote",
        html: "The planet isn't warning us anymore. It's just reporting the numbers.",
      },
      { type: "divider" },
      {
        type: "sources",
        items: [
          "National Centers for Environmental Information (NOAA). (2026). <em>Assessing the Global Temperature and Precipitation Analysis in April 2026.</em> ncei.noaa.gov.",
          "Warta Garut. (2026). <em>BMKG Peringatkan Cuaca Panas dan Hujan Lebat Masih Mengancam hingga Pertengahan Mei 2026.</em> wartagarut.com.",
          "Mongabay. (2026). <em>Indonesia braces for possible 'Godzilla El Niño' as fire season escalates early.</em> news.mongabay.com.",
          "UN News. (2026). <em>Global temperatures set to stay near record levels: UN weather agency.</em> news.un.org.",
        ],
      },
    ],
    translations: {
      id: {
        title: "Bumi Makin Panas: Bumi Baru Saja Mencatat April Terpanas Keempat",
        excerpt:
          "Planet ini terus mencetak rekor yang sebenarnya bukan sesuatu untuk dibanggakan. Data empat dekade terakhir, dan peringatan BMKG minggu ini, menunjukkan panas yang makin mendekat ke Indonesia.",
        content: [
          {
            type: "paragraph",
            html: "Planet ini terus mencetak rekor yang sebenarnya bukan sesuatu untuk dibanggakan. Data empat dekade terakhir, dan peringatan BMKG minggu ini, menunjukkan panas yang makin mendekat ke Indonesia.",
          },
          { type: "eyebrow", text: "APA YANG TERJADI" },
          {
            type: "paragraph",
            html: "April 2026 adalah bulan April terpanas keempat dalam catatan sejarah, hanya kalah dari 2024, 2025, dan 2020, menurut National Centers for Environmental Information milik NOAA. Suhu permukaan global berada 1,12°C di atas rata-rata abad ke-20. Yang lebih mencolok, ini adalah bulan April ke-50 berturut-turut yang berada di atas rata-rata. April terakhir yang di bawah rata-rata terjadi pada 1976, setengah abad penuh yang lalu.",
          },
          {
            type: "paragraph",
            html: "Ini bukan cuma soal statistik global. Lebih dekat ke rumah, BMKG mencatat beberapa wilayah Indonesia, termasuk Jawa Timur, Jawa Tengah, Kalimantan Timur, Kalimantan Tengah, Sulawesi Tengah, dan Papua Barat, menyentuh 36,5°C antara 7 dan 10 Mei. Di saat yang bersamaan, Sulawesi Tenggara dan Papua Tengah justru diguyur hujan lebat, dengan curah hujan di atas 140mm dalam sehari. BMKG menyebut kedua ekstrem ini berasal dari gangguan atmosfer yang sama: Madden-Julian Oscillation, gelombang Rossby dan Kelvin ekuator, serta sisa-sisa Siklon Tropis Hagupit. Cuaca panas, ternyata, bisa memicu awan yang beberapa jam kemudian menumpahkan hujan deras.",
          },
          {
            type: "statsGrid",
            items: [
              { label: "Anomali global April 2026", value: "+1,12°C di atas rata-rata abad ke-20, April terpanas ke-4 dalam sejarah" },
              { label: "April berturut-turut di atas rata-rata", value: "50 tahun beruntun, sejak 1976" },
              { label: "Peringkat Jan–Apr 2026", value: "Tertinggi ke-5 sepanjang tahun berjalan dalam catatan sejarah" },
              { label: "Suhu tertinggi wilayah Indonesia, 7–10 Mei", value: "Hingga 36,5°C (Jawa, Kalimantan, Sulawesi, Papua)" },
              { label: "Lahan terbakar di Indonesia, Jan–Feb 2026", value: "32.637 hektare, 20 kali lipat periode yang sama tahun lalu" },
            ],
          },
          { type: "eyebrow", text: "KENAPA INI PENTING" },
          {
            type: "paragraph",
            html: "Para ilmuwan juga sedang mengawasi sesuatu yang lebih besar yang mungkin muncul akhir tahun ini: kemungkinan \"El Niño Godzilla.\" Prakiraan menyebut peluang 25% untuk kejadian \"sangat kuat\" dan 50% untuk yang \"kuat,\" yang berarti kekeringan berkepanjangan menumpuk di atas tahun yang sudah panas. Ini masalah serius untuk negara yang sawahnya bergantung pada hujan yang bisa diprediksi. El Niño 1997-98 memangkas produksi padi Indonesia sebesar 6%; kejadian 2024 memangkasnya 17,5%. Indonesia bahkan sudah membakar lahan 20 kali lebih banyak sampai Februari 2026 dibanding periode yang sama tahun lalu, tanda peringatan untuk musim kemarau yang masih di depan.",
          },
          { type: "eyebrow", text: "GAMBARAN LEBIH BESAR" },
          {
            type: "paragraph",
            html: "Semua ini juga tidak terjadi terpisah dari berita-berita lain. Bahkan ketika dunia bergulat dengan perang regional yang mengganggu pasokan minyak lewat Selat Hormuz, perebutan jangka pendek untuk sumber energi alternatif, mulai dari batu bara sampai minyak, apa pun yang paling cepat didapat, membuat perhitungan iklim jangka panjang makin sulit. Guncangan energi dan perubahan iklim cenderung saling memperburuk satu sama lain: ketidakstabilan mendorong negara-negara memakai bahan bakar apa pun yang tersedia sekarang, bukan yang paling bersih.",
          },
          {
            type: "paragraph",
            html: "Organisasi Meteorologi Dunia PBB juga menandai bahwa ini bagian dari tren yang lebih panjang, bukan kejadian sekali saja. Sepanjang tahun berjalan, 2026 sudah masuk lima besar tahun terpanas yang pernah tercatat, dan para ilmuwan memperkirakan tahun-tahun setelah ini akan lebih panas lagi, bukan lebih sejuk.",
          },
          { type: "eyebrow", text: "YANG PERLU KAMU TAHU" },
          {
            type: "paragraph",
            html: "Kalau tempat tinggalmu terasa panas tidak biasa di awal Mei, itu bukan cuma perasaanmu; data BMKG sendiri membuktikannya. Risiko yang lebih besar bukan sekadar seminggu yang tidak nyaman, melainkan apa yang bisa dilakukan El Niño yang makin menguat terhadap harga pangan dan ketersediaan air nanti di tahun ini, terutama bagi komunitas petani yang sudah kesulitan.",
          },
          {
            type: "paragraph",
            html: "Perhatikan pemakaian air di sekitarmu, dan pantau berita soal harga pangan dalam beberapa bulan ke depan. Kalau prakiraan \"El Niño Godzilla\" itu benar terjadi, di situlah dampaknya akan pertama kali terlihat.",
          },
          {
            type: "callout",
            html: "\"Ini adalah bulan April ke-50 berturut-turut yang berada di atas rata-rata. April terakhir yang di bawah rata-rata terjadi pada 1976.\"",
          },
          {
            type: "quote",
            html: "Planet ini bukan lagi memberi kita peringatan. Ia cuma melaporkan angka-angkanya.",
          },
          { type: "divider" },
          {
            type: "sources",
            items: [
              "National Centers for Environmental Information (NOAA). (2026). <em>Assessing the Global Temperature and Precipitation Analysis in April 2026.</em> ncei.noaa.gov.",
              "Warta Garut. (2026). <em>BMKG Peringatkan Cuaca Panas dan Hujan Lebat Masih Mengancam hingga Pertengahan Mei 2026.</em> wartagarut.com.",
              "Mongabay. (2026). <em>Indonesia braces for possible 'Godzilla El Niño' as fire season escalates early.</em> news.mongabay.com.",
              "UN News. (2026). <em>Global temperatures set to stay near record levels: UN weather agency.</em> news.un.org.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "bi-rate-hike-may-2026",
    title: "Why Bank Indonesia Just Surprised Everyone",
    excerpt:
      "Economists expected a small move. BI delivered a big one. The central bank raised rates further than almost anyone predicted, and the decision reaches straight into loans, savings, and the rupiah in your pocket.",
    coverImage: "/images/bi-rate-hike-may-2026.jpg",
    coverImageAlt: "Bank Indonesia's regional office in Surakarta",
    coverImageCredit: "Photo: Igornababan / Wikimedia Commons (CC BY-SA 4.0)",
    author: "UGS Newsroom",
    publishedAt: "2026-05-23",
    category: "Economy",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        html: "Economists expected a small move. BI delivered a big one. The central bank raised rates further than almost anyone predicted, and the decision reaches straight into loans, savings, and the rupiah in your pocket.",
      },
      { type: "eyebrow", text: "WHAT'S HAPPENING" },
      {
        type: "paragraph",
        html: "Bank Indonesia raised its benchmark BI-Rate by 50 basis points on May 19-20, 2026, from 4.75% to 5.25%, the first hike after eight straight months of holding steady. The Deposit Facility rate climbed to 4.25%, and the Lending Facility rate rose to 6.00%, both up 50 bps as well.",
      },
      {
        type: "paragraph",
        html: "The size of the move caught markets off guard. In a CNBC Indonesia poll of 15 financial institutions ahead of the decision, 9 expected a smaller 25 bps increase, and 6 predicted no change at all. Nobody polled expected the full 50 bps BI ultimately delivered.",
      },
      {
        type: "statsGrid",
        items: [
          { label: "BI-Rate", value: "4.75% → 5.25% (+50 bps)" },
          { label: "Deposit Facility Rate", value: "→ 4.25% (+50 bps)" },
          { label: "Lending Facility Rate", value: "→ 6.00% (+50 bps)" },
          { label: "Analyst consensus (15 institutions)", value: "9 forecast +25 bps · 6 forecast no change" },
          { label: "Actual decision", value: "+50 bps, above every polled forecast" },
          { label: "Rupiah, May 19", value: "≈ Rp17,718 per US dollar" },
        ],
      },
      { type: "eyebrow", text: "WHY IT MATTERS" },
      {
        type: "paragraph",
        html: "Anyone with a floating-rate mortgage, vehicle loan, or personal credit line should expect it to get more expensive. Banks typically follow BI's lead and raise their own lending rates within weeks, which means bigger monthly payments on new and existing floating loans. New borrowing, whether for a motorbike, a laptop, or a small business, also gets pricier as a direct result.",
      },
      {
        type: "paragraph",
        html: "Savers, however, come out ahead. Banks are expected to raise deposit rates too, making savings accounts and time deposits more competitive for anyone parking money rather than borrowing it.",
      },
      { type: "eyebrow", text: "THE BIGGER PICTURE" },
      {
        type: "paragraph",
        html: "Bank Indonesia was blunt about why it moved so aggressively: the rupiah needed protecting. The currency had slipped to around Rp17,700 per US dollar amid what BI itself described as global turmoil from the Middle East conflict, specifically the closure of the Strait of Hormuz and the resulting spike in oil prices, the same instability behind Indonesia's fuel price hike and the ongoing Israel–Lebanon war. A weaker rupiah makes imported energy, which Indonesia relies on, even more expensive, feeding directly into the inflation BI is trying to keep inside its 2.5%±1% target band.",
      },
      {
        type: "paragraph",
        html: "To soften the blow on growth, BI says it is keeping its liquidity incentive program running, planning to funnel roughly Rp424.7 trillion to banks that keep lending to small businesses, agriculture, and manufacturing, an attempt to tighten monetary policy without freezing the economy that depends on credit.",
      },
      { type: "eyebrow", text: "WHAT YOU SHOULD KNOW" },
      {
        type: "paragraph",
        html: "This hike doesn't hit everyone the same way. Young borrowers financing their first vehicle or home, and small businesses running on credit, will likely feel it first and hardest. If you're currently shopping for a loan, locking in terms sooner rather than later may be worth considering before lending rates fully catch up to this decision.",
      },
      {
        type: "paragraph",
        html: "If this all feels familiar, it should: fuel prices, interest rates, and a war roughly 7,000 kilometers away are all, right now, tugging on the same thread, the price of oil.",
      },
      {
        type: "callout",
        html: "\"Nobody polled expected the full 50 basis points BI ultimately delivered.\"",
      },
      {
        type: "quote",
        html: "One decision, three ways it lands: prices at the pump, payments on your loans, and rates on your savings all just moved because of the same global squeeze.",
      },
      { type: "divider" },
      {
        type: "sources",
        items: [
          "CNBC Indonesia. (2026). <em>Breaking News! BI Rate Naik Jadi 5,25% di Mei 2026.</em> cnbcindonesia.com.",
          "Bank Indonesia. (2026). <em>BI-Rate Increased by 50 bps to 5.25%: Strengthening Stability, Supporting Economic Growth.</em> bi.go.id.",
          "detikJateng. (2026). <em>Berapa Nilai Tukar Dolar AS ke Rupiah Hari Ini 19 Mei 2026? Cek Kurs BI!</em> detik.com.",
          "Suara Surabaya. (2026). <em>BI-Rate Naik Agresif Jadi 5,25 Persen, Berikut Dampaknya ke Masyarakat.</em> suarasurabaya.net.",
        ],
      },
    ],
    translations: {
      id: {
        title: "Suku Bunga Naik: Kenapa Bank Indonesia Mengejutkan Semua Orang",
        excerpt:
          "Para ekonom memperkirakan langkah kecil. BI justru mengambil langkah besar. Ini alasan bank sentral menaikkan suku bunga lebih tinggi dari hampir semua prediksi, dan apa artinya untuk pinjaman, tabungan, serta rupiah di kantongmu.",
        content: [
          {
            type: "paragraph",
            html: "Para ekonom memperkirakan langkah kecil. BI justru mengambil langkah besar. Ini alasan bank sentral menaikkan suku bunga lebih tinggi dari hampir semua prediksi, dan apa artinya untuk pinjaman, tabungan, serta rupiah di kantongmu.",
          },
          { type: "eyebrow", text: "APA YANG TERJADI" },
          {
            type: "paragraph",
            html: "Bank Indonesia menaikkan BI-Rate acuannya sebesar 50 basis poin pada 19-20 Mei 2026, dari 4,75% menjadi 5,25%, kenaikan pertama setelah delapan bulan berturut-turut bertahan. Suku bunga Deposit Facility naik ke 4,25%, dan Lending Facility naik ke 6,00%, keduanya juga naik 50 bps.",
          },
          {
            type: "paragraph",
            html: "Besarnya kenaikan ini bikin pasar kaget. Dalam jajak pendapat CNBC Indonesia terhadap 15 lembaga keuangan sebelum keputusan diambil, 9 memperkirakan kenaikan yang lebih kecil, 25 bps, dan 6 memprediksi tidak ada perubahan sama sekali. Tidak ada satu pun yang memperkirakan kenaikan penuh 50 bps yang akhirnya diputuskan BI.",
          },
          {
            type: "statsGrid",
            items: [
              { label: "BI-Rate", value: "4,75% → 5,25% (+50 bps)" },
              { label: "Suku Bunga Deposit Facility", value: "→ 4,25% (+50 bps)" },
              { label: "Suku Bunga Lending Facility", value: "→ 6,00% (+50 bps)" },
              { label: "Konsensus analis (15 lembaga)", value: "9 memprediksi +25 bps · 6 memprediksi tidak berubah" },
              { label: "Keputusan aktual", value: "+50 bps, di atas semua prediksi yang disurvei" },
              { label: "Rupiah, 19 Mei", value: "≈ Rp17.718 per dolar AS" },
            ],
          },
          { type: "eyebrow", text: "KENAPA INI PENTING" },
          {
            type: "paragraph",
            html: "Kalau kamu atau keluargamu punya KPR bunga mengambang, kredit kendaraan, atau pinjaman pribadi, siap-siap biayanya makin mahal. Bank biasanya mengikuti langkah BI dan menaikkan suku bunga pinjaman mereka sendiri dalam hitungan minggu, yang berarti cicilan bulanan yang lebih besar untuk pinjaman bunga mengambang, baik yang baru maupun yang sudah berjalan. Pinjaman baru, entah untuk motor, laptop, atau usaha kecil, juga langsung jadi lebih mahal.",
          },
          {
            type: "paragraph",
            html: "Tapi bukan semuanya kabar buruk. Para penabung justru diuntungkan: bank diperkirakan juga akan menaikkan suku bunga simpanan, membuat tabungan dan deposito berjangka jadi lebih menarik bagi siapa pun yang menyimpan uang, bukan meminjamnya.",
          },
          { type: "eyebrow", text: "GAMBARAN LEBIH BESAR" },
          {
            type: "paragraph",
            html: "Bank Indonesia terus terang soal alasan langkah agresif ini: rupiah perlu dilindungi. Nilai tukarnya sudah melemah ke sekitar Rp17.700 per dolar AS di tengah apa yang disebut BI sendiri sebagai gejolak global akibat konflik Timur Tengah, khususnya penutupan Selat Hormuz dan lonjakan harga minyak yang menyertainya, ketidakstabilan yang sama yang berada di balik kenaikan harga BBM Indonesia dan perang Israel–Lebanon yang masih berlangsung. Rupiah yang melemah membuat energi impor, yang masih diandalkan Indonesia, makin mahal, dan langsung mendorong inflasi yang berusaha dijaga BI tetap di dalam target 2,5%±1%.",
          },
          {
            type: "paragraph",
            html: "Untuk meredam dampaknya terhadap pertumbuhan, BI mengatakan tetap menjalankan program insentif likuiditasnya, dengan rencana menyalurkan sekitar Rp424,7 triliun ke bank-bank yang terus menyalurkan kredit ke usaha kecil, pertanian, dan manufaktur, upaya untuk mengetatkan kebijakan moneter tanpa membekukan ekonomi yang bergantung pada kredit.",
          },
          { type: "eyebrow", text: "YANG PERLU KAMU TAHU" },
          {
            type: "paragraph",
            html: "Kenaikan ini tidak berdampak sama ke semua orang. Peminjam muda yang sedang mencicil kendaraan atau rumah pertama, dan usaha kecil yang mengandalkan kredit, kemungkinan besar akan merasakannya lebih dulu dan lebih berat. Kalau kamu sedang mencari pinjaman, mengunci suku bunga lebih cepat daripada menunda mungkin layak dipertimbangkan sebelum suku bunga pinjaman sepenuhnya menyesuaikan dengan keputusan ini.",
          },
          {
            type: "paragraph",
            html: "Kalau semua ini terasa familier, memang seharusnya begitu: harga BBM, suku bunga, dan perang yang jaraknya sekitar 7.000 kilometer, saat ini semuanya sedang tertarik oleh benang yang sama, yaitu harga minyak.",
          },
          {
            type: "callout",
            html: "\"Tidak ada satu pun yang disurvei memperkirakan kenaikan penuh 50 basis poin yang akhirnya diputuskan BI.\"",
          },
          {
            type: "quote",
            html: "Satu keputusan, tiga cara ia berdampak: harga di SPBU, cicilan pinjamanmu, dan bunga tabunganmu, semuanya baru saja bergerak karena tekanan global yang sama.",
          },
          { type: "divider" },
          {
            type: "sources",
            items: [
              "CNBC Indonesia. (2026). <em>Breaking News! BI Rate Naik Jadi 5,25% di Mei 2026.</em> cnbcindonesia.com.",
              "Bank Indonesia. (2026). <em>BI-Rate Increased by 50 bps to 5.25%: Strengthening Stability, Supporting Economic Growth.</em> bi.go.id.",
              "detikJateng. (2026). <em>Berapa Nilai Tukar Dolar AS ke Rupiah Hari Ini 19 Mei 2026? Cek Kurs BI!</em> detik.com.",
              "Suara Surabaya. (2026). <em>BI-Rate Naik Agresif Jadi 5,25 Persen, Berikut Dampaknya ke Masyarakat.</em> suarasurabaya.net.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "trump-xi-summit-tariffs-september-2026",
    title: "Trump-Xi Summit: Why This Trade Tariff Hits Your Wallet",
    excerpt:
      "Today in Washington, the leaders of the world's two largest economies are meeting face-to-face. What they decide on tariffs and chips could dictate the price of your phone next month, and the demand for your region's nickel and palm oil.",
    coverImage: "/images/trump-xi-summit-sep-2026.jpg",
    coverImageAlt: "President Donald Trump and President Xi Jinping at a bilateral meeting",
    coverImageCredit: "Photo: The White House / Wikimedia Commons (public domain), from the 2019 G20 meeting in Osaka",
    author: "UGS Newsroom",
    publishedAt: "2026-09-24",
    category: "Politics",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        html: "Today in Washington, the leaders of the world's two largest economies are meeting face-to-face. What they decide on tariffs and chips could dictate the price of your phone next month, and the demand for your region's nickel and palm oil.",
      },
      { type: "eyebrow", text: "WHAT'S HAPPENING" },
      {
        type: "paragraph",
        html: "On September 24, 2026, US President Donald Trump hosted Chinese President Xi Jinping at the White House. The summit comes with only weeks left in the tariff truce between the two nations, a temporary pause set to expire in November 2026, after which new tariffs could take effect immediately on goods traded between both countries.",
      },
      {
        type: "paragraph",
        html: "Three issues are on the table. First, extending the tariff pause. Second, military tensions around Taiwan, including proposed US arms sales to the island. Third, a preliminary agreement to jointly evaluate safety risks tied to artificial intelligence (AI), technology that lets systems learn and make autonomous decisions from data.",
      },
      {
        type: "paragraph",
        html: "One figure under discussion is a US arms package for Taiwan announced in August 2026, valued at an estimated US$1.1 billion, or roughly Rp17.8 trillion at the September 2026 benchmark rate (US$1 = Rp16,200). It drew immediate sharp protests from China's Ministry of Foreign Affairs, the body responsible for Beijing's official position on Taiwan.",
      },
      {
        type: "paragraph",
        html: "China remains central to US trade: in the second quarter of 2026, Chinese exports to the US made up roughly 14.8 percent of China's total exports. Any tariff decision reverberates across both economies and trading partners like Indonesia. On the US side, technical evaluations of tariff impacts and patent enforcement fall under the United States Trade Representative (USTR).",
      },
      {
        type: "statsGrid",
        items: [
          { label: "2018", value: "US imposes broad tariffs on Chinese imports; Beijing retaliates" },
          { label: "Jan 2020", value: "US and China sign the \"Phase One\" trade deal (Jan 15)" },
          { label: "2022–2024", value: "US tightens advanced chip export controls (Nvidia); China restricts gallium and germanium exports (since Aug 2023)" },
          { label: "Mar 2026", value: "US and China agree to extend the tariff pause until November 2026" },
          { label: "Aug 2026", value: "US announces proposed US$1.1 billion arms package for Taiwan" },
          { label: "Sep 24, 2026", value: "Trump receives Xi Jinping at the White House" },
        ],
      },
      { type: "eyebrow", text: "WHY IT MATTERS" },
      {
        type: "paragraph",
        html: "The outcome decides whether new tariffs kick in. If the pause is not extended, production costs for items with Chinese or American components, including smartphones and laptops, could rise, directly affecting students in Indonesia who rely on these devices for school. The chip dispute plays in too: the US has restricted advanced chip exports to China for several years, and the AI talks involve whether those controls might loosen. If they stay, prices for chip-based hardware could stay elevated as manufacturers seek costlier supply chains.",
      },
      {
        type: "paragraph",
        html: "China is a primary buyer of Indonesian nickel, crude palm oil (CPO), and coal. If its economy slows under US tariffs, demand for Indonesian exports will soften, according to Bank Indonesia and CNBC Indonesia. On growth, there are two figures: China's official 2026 target is 4.5–5.0 percent (China Daily), while the World Bank projects 4.4 percent, assuming an all-out trade war is avoided. One is Beijing's domestic target, the other an external estimate. Neither is a realized figure.",
      },
      {
        type: "paragraph",
        html: "There is another risk. If the US market closes to Chinese goods, those products could be diverted en masse toward Southeast Asia, including Indonesia, at undercut prices, a practice known as dumping. Indonesia's Ministry of Trade has flagged this as a monitored risk, not a confirmed occurrence, for the textile sector in Central Java, where many small and medium enterprises depend on textile sales.",
      },
      {
        type: "paragraph",
        html: "Uncertainty around the summit could also affect the rupiah. If investors feel uneasy, capital tends to shift to safe-haven assets like the US dollar, which could weaken the rupiah.",
      },
      {
        type: "callout",
        html: "This isn't just about tariffs. It's about who controls the next generation of microchips, and who pays the price difference.",
      },
      { type: "eyebrow", text: "THE BIGGER PICTURE" },
      {
        type: "paragraph",
        html: "US-China trade friction is not new. It escalated in 2018 when the first Trump administration imposed sweeping tariffs on Chinese imports and Beijing retaliated. The \"Phase One\" agreement of January 2020 brought a reprieve, but relations froze again with the pandemic, and tensions have stayed high since.",
      },
      {
        type: "heading",
        level: 2,
        text: "One summit in Washington, but the fallout doesn't stay there.",
      },
      {
        type: "paragraph",
        html: "From 2022 to 2024, the conflict shifted to tech infrastructure. The US restricted sales of advanced semiconductors to China, including Nvidia's, and China responded by limiting exports of gallium and germanium, raw materials used in chip manufacturing. The Taiwan dispute is rooted in what China calls its One China Principle, the position that there is only one China and Taiwan is an inalienable part of it. Beijing therefore views any US arms sale to Taiwan as a direct violation.",
      },
      {
        type: "paragraph",
        html: "Two narratives compete. Washington frames its measures as protection for national security and the domestic economy, citing trade deficits and alleged forced technology transfers. Beijing describes them as efforts to contain China's rise and argues chip export controls violate WTO free-market principles. Both defend distinct interests and both downplay the costs borne by others: US consumers absorb tariff-driven price increases, while China keeps restricting foreign tech companies at home.",
      },
      { type: "eyebrow", text: "WHAT YOU SHOULD KNOW" },
      {
        type: "paragraph",
        html: "The impact reaches well beyond gadget buyers. Palm oil farmers, nickel miners, textile workers in Central Java, and anyone spending rupiah share an indirect connection to what is decided in Washington.",
      },
      {
        type: "paragraph",
        html: "Whether tariffs work is still debated. The US government claims tariff pressure brought China to the table. Chinese officials and several economists argue tariffs mainly burden US consumers through higher retail prices. As of this writing, no formal signed agreement has been released, and it is unclear whether the US will ease chip export controls in exchange for Chinese commitments on AI safety.",
      },
      {
        type: "paragraph",
        html: "Market reactions are still to come. In the coming weeks, watch local electronics component prices, the rupiah exchange rate, and export data for nickel and CPO heading to China. Until a formal written agreement is published, the status remains a tariff truce, a temporary agreement to hold off on new tariffs while negotiations continue, not a final resolution.",
      },
      {
        type: "quote",
        html: "Tariffs and microchips sound a world away from Surakarta. But the supply chain ends on the shelf at your local store, and in the income of palm oil farmers and textile workers around you.",
      },
      { type: "divider" },
      {
        type: "sources",
        items: [
          "Reuters. (2026). <em>Trump and Xi summit in Washington on trade and security.</em> reuters.com.",
          "Washington Post. (2026). <em>Trump hosts Xi Jinping as trade deadline looms.</em> washingtonpost.com.",
          "Al Jazeera. (2026). <em>US-China summit: Taiwan and AI high on the agenda.</em> aljazeera.com.",
          "Kementerian Perdagangan RI. (2026). <em>Laporan Kinerja Perdagangan Luar Negeri.</em> kemendag.go.id.",
          "World Bank. (2026). <em>Global Economic Prospects Report 2026.</em> worldbank.org.",
          "CNBC Indonesia. (2026). <em>Dampak Hubungan Dagang AS-China Terhadap Ekspor Indonesia.</em> cnbcindonesia.com.",
          "China Daily. (2026). <em>Target pertumbuhan ekonomi Tiongkok 2026.</em> chinadaily.com.cn.",
        ],
      },
    ],
    translations: {
      id: {
        title: "KTT Trump-Xi: Kenapa Tarif Dagang Ini Sampai ke Dompetmu",
        excerpt:
          "Hari ini di Washington, dua presiden paling berkuasa di dunia duduk satu meja. Yang mereka putuskan soal tarif dan cip bisa menentukan harga HP-mu bulan depan, dan permintaan Tiongkok atas nikel serta sawit dari daerahmu sendiri.",
        content: [
          {
            type: "paragraph",
            html: "Hari ini di Washington, dua presiden paling berkuasa di dunia duduk satu meja. Yang mereka putuskan soal tarif dan cip bisa menentukan harga HP-mu bulan depan, dan permintaan Tiongkok atas nikel serta sawit dari daerahmu sendiri.",
          },
          { type: "eyebrow", text: "APA YANG TERJADI" },
          {
            type: "paragraph",
            html: "Pada 24 September 2026, Presiden AS Donald Trump menerima kunjungan Presiden Tiongkok Xi Jinping di Gedung Putih. Pertemuan puncak ini digelar saat masa jeda tarif dagang kedua negara tinggal menghitung minggu. Jeda itu berakhir November 2026, dan kalau tidak diperpanjang, tarif baru bisa langsung berlaku pada barang yang keluar-masuk kedua negara.",
          },
          {
            type: "paragraph",
            html: "Ada tiga topik di meja perundingan. Pertama, perpanjangan jeda tarif impor. Kedua, ketegangan militer di sekitar Taiwan, termasuk rencana AS menjual senjata ke sana. Ketiga, kesepakatan awal untuk memetakan bersama risiko keamanan kecerdasan buatan (AI), teknologi yang membuat mesin bisa belajar dan mengambil keputusan sendiri dari data.",
          },
          {
            type: "paragraph",
            html: "Salah satu angka yang ikut dibahas adalah paket penjualan senjata AS ke Taiwan yang diumumkan Agustus 2026, dengan perkiraan nilai US$1,1 miliar, setara sekitar Rp17,8 triliun memakai kurs acuan September 2026 (US$1 = Rp16.200). Rencana ini langsung memicu protes keras dari Kementerian Luar Negeri Tiongkok, lembaga yang menjaga sikap resmi Beijing soal status Taiwan.",
          },
          {
            type: "paragraph",
            html: "Tiongkok bukan pemain kecil dalam perdagangan dengan AS. Pada kuartal kedua 2026, ekspor Tiongkok ke AS tercatat sekitar 14,8 persen dari total ekspornya. Setiap keputusan soal tarif langsung terasa besar bagi kedua ekonomi, dan bagi negara lain yang berdagang dengan keduanya, termasuk Indonesia. Di pihak AS, evaluasi teknis dampak tarif dan penegakan perlindungan paten ditangani Perwakilan Perdagangan AS (USTR).",
          },
          {
            type: "statsGrid",
            items: [
              { label: "2018", value: "AS berlakukan tarif besar-besaran ke barang impor Tiongkok, dibalas Beijing" },
              { label: "Jan 2020", value: "AS-Tiongkok teken kesepakatan dagang \"Fase Satu\" (15 Januari)" },
              { label: "2022–2024", value: "AS perketat ekspor cip canggih (Nvidia); Tiongkok batasi ekspor galium dan germanium (sejak Agu 2023)" },
              { label: "Mar 2026", value: "AS-Tiongkok sepakat jeda tarif sampai November 2026" },
              { label: "Agu 2026", value: "AS umumkan rencana paket senjata US$1,1 miliar ke Taiwan" },
              { label: "24 Sep 2026", value: "Trump terima kunjungan Xi Jinping di Gedung Putih" },
            ],
          },
          { type: "eyebrow", text: "MENGAPA INI PENTING" },
          {
            type: "paragraph",
            html: "Hasil pertemuan ini menentukan apakah tarif baru berlaku atau tidak. Kalau jeda tidak diperpanjang, biaya produksi barang yang memakai komponen dari Tiongkok atau AS, termasuk HP dan laptop, berisiko naik dan langsung terasa oleh pelajar di Indonesia yang memakainya untuk sekolah. Isu cip ikut menyentuh perangkat itu: AS membatasi penjualan cip canggih ke Tiongkok sejak beberapa tahun terakhir, dan pembicaraan soal AI menyangkut apakah pembatasan itu akan dilonggarkan. Kalau tidak, harga komponen berbasis cip berpotensi tetap tinggi karena produsen harus mencari jalur pasokan lain yang lebih mahal.",
          },
          {
            type: "paragraph",
            html: "Tiongkok adalah pembeli utama nikel, minyak sawit mentah (CPO), dan batu bara Indonesia. Kalau ekonominya melambat karena tarif AS, permintaan atas komoditas Indonesia ikut melemah, menurut Bank Indonesia dan CNBC Indonesia. Soal pertumbuhan ada dua acuan: target resmi pemerintah Tiongkok untuk 2026 di kisaran 4,5–5,0 persen (China Daily), sementara proyeksi Bank Dunia 4,4 persen dengan asumsi tidak terjadi perang tarif penuh. Yang satu target kebijakan domestik Beijing, yang lain estimasi lembaga luar. Keduanya bukan angka realisasi.",
          },
          {
            type: "paragraph",
            html: "Ada juga risiko dari arah lain. Kalau pasar AS tertutup untuk barang Tiongkok, barang-barang itu bisa dialihkan besar-besaran ke Asia Tenggara, termasuk Indonesia, dengan harga sangat murah, praktik yang disebut dumping. Kementerian Perdagangan RI mencatat ini sebagai risiko yang diwaspadai, bukan kasus yang sudah terbukti, bagi industri tekstil di Jawa Tengah, tempat banyak usaha kecil dan menengah bergantung pada penjualan tekstil.",
          },
          {
            type: "paragraph",
            html: "Ketidakpastian dari KTT ini juga bisa memengaruhi rupiah. Kalau investor merasa tidak yakin, mereka cenderung memindahkan dana ke aset yang dianggap lebih aman seperti dolar AS, dan itu bisa melemahkan rupiah.",
          },
          {
            type: "callout",
            html: "Ini bukan cuma soal tarif. Ini juga soal siapa yang menguasai cip generasi berikutnya, dan siapa yang harus membayar selisih harganya.",
          },
          { type: "eyebrow", text: "GAMBARAN BESARNYA" },
          {
            type: "paragraph",
            html: "Ketegangan dagang AS-Tiongkok bukan hal baru. Ini dimulai sejak 2018, saat pemerintahan Trump periode pertama memberlakukan tarif besar-besaran atas barang impor Tiongkok, yang dibalas Beijing. Sempat ada jeda lewat kesepakatan \"Fase Satu\" pada Januari 2020, tapi hubungan dagang kembali membeku begitu pandemi datang, dan ketegangan berlanjut sampai sekarang.",
          },
          {
            type: "heading",
            level: 2,
            text: "Satu pertemuan di Washington, tapi efeknya tidak berhenti di sana.",
          },
          {
            type: "paragraph",
            html: "Sejak 2022 hingga 2024, front pertempurannya bergeser ke teknologi. AS membatasi penjualan cip canggih, termasuk buatan Nvidia, ke Tiongkok, dan Tiongkok membalas dengan membatasi ekspor galium dan germanium, bahan yang dipakai dalam pembuatan semikonduktor. Isu Taiwan berakar pada Prinsip Satu Tiongkok, kebijakan yang menyatakan hanya ada satu Tiongkok dan Taiwan adalah bagian yang tidak terpisahkan darinya, sehingga setiap rencana penjualan senjata AS ke Taiwan dianggap Beijing sebagai pelanggaran.",
          },
          {
            type: "paragraph",
            html: "Ada dua cara pandang yang bersaing. Washington menyebut langkahnya perlindungan keamanan nasional dan ekonomi domestik, dengan alasan defisit dagang dan dugaan transfer teknologi paksa oleh Tiongkok. Beijing menyebutnya upaya membendung kebangkitan Tiongkok, dan menuding kontrol ekspor cip melanggar prinsip pasar bebas WTO. Keduanya membela kepentingan masing-masing dan sama-sama tidak menyebut biaya yang ditanggung pihak lain: konsumen AS menanggung kenaikan harga akibat tarif, sementara Tiongkok tetap membatasi perusahaan teknologi asing di dalam negerinya.",
          },
          { type: "eyebrow", text: "YANG PERLU KAMU TAHU" },
          {
            type: "paragraph",
            html: "Yang terpapar bukan cuma pembeli gadget. Petani sawit, penambang nikel, buruh tekstil di Jawa Tengah, dan siapa pun yang belanja pakai rupiah punya kaitan tidak langsung dengan apa yang diputuskan di Washington.",
          },
          {
            type: "paragraph",
            html: "Efektivitas tarif sendiri masih diperdebatkan. Pemerintah AS mengklaim tekanan tarif berhasil memaksa Tiongkok berunding. Sebaliknya, pihak Tiongkok dan sejumlah ekonom menilai tarif justru membebani konsumen AS lewat harga yang lebih mahal. Sampai laporan ini ditulis, belum ada dokumen kesepakatan resmi yang ditandatangani, dan belum jelas apakah AS akan melonggarkan kontrol ekspor cip sebagai imbalan komitmen keamanan AI dari Tiongkok.",
          },
          {
            type: "paragraph",
            html: "Reaksi pasar masih harus ditunggu. Dalam beberapa minggu ke depan, amati harga komponen elektronik di toko langgananmu, nilai tukar rupiah, dan berita ekspor nikel atau CPO ke Tiongkok. Sampai ada kesepakatan tertulis yang dipublikasikan, situasi ini masih berstatus jeda sementara (tariff truce), kesepakatan sementara untuk menunda tarif baru sambil negosiasi berjalan, bukan penyelesaian akhir.",
          },
          {
            type: "quote",
            html: "Tarif dan cip terdengar jauh dari Surakarta. Tapi rantai pasoknya berakhir di rak toko dekat rumahmu, dan di harga yang dibayar petani sawit serta buruh tekstil di sekitarmu.",
          },
          { type: "divider" },
          {
            type: "sources",
            items: [
              "Reuters. (2026). <em>Trump and Xi summit in Washington on trade and security.</em> reuters.com.",
              "Washington Post. (2026). <em>Trump hosts Xi Jinping as trade deadline looms.</em> washingtonpost.com.",
              "Al Jazeera. (2026). <em>US-China summit: Taiwan and AI high on the agenda.</em> aljazeera.com.",
              "Kementerian Perdagangan RI. (2026). <em>Laporan Kinerja Perdagangan Luar Negeri.</em> kemendag.go.id.",
              "World Bank. (2026). <em>Global Economic Prospects Report 2026.</em> worldbank.org.",
              "CNBC Indonesia. (2026). <em>Dampak Hubungan Dagang AS-China Terhadap Ekspor Indonesia.</em> cnbcindonesia.com.",
              "China Daily. (2026). <em>Target pertumbuhan ekonomi Tiongkok 2026.</em> chinadaily.com.cn.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "swiss-glaciers-lose-5-5-percent-october-2026",
    title: "Swiss Glaciers: 5.5 Percent of Ice Lost in a Year",
    excerpt:
      "Ice in the Swiss mountains might be far from your daily life, but the numbers are moving fast. In Papua, Indonesia has its own tropical ice, and BMKG estimates it will be completely gone by late 2026 or early 2027.",
    coverImage: "/images/swiss-glaciers-oct-2026.jpg",
    coverImageAlt: "Satellite image of glaciers in the Swiss Alps, July 31, 2022",
    coverImageCredit: "Photo: Contains modified Copernicus Sentinel data, European Union / Wikimedia Commons",
    author: "UGS Newsroom",
    publishedAt: "2026-10-01",
    category: "Environment",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        html: "Ice in the Swiss mountains might be far from your daily life, but the numbers are moving fast. On October 1, 2026, Swiss glacier monitors reported that 5.5 percent of the country's ice volume vanished in a year, and nearly a fifth of all ice has been lost in five years. In Papua, Indonesia has its own tropical ice, and BMKG estimates it will be completely gone by late 2026 or early 2027.",
      },
      { type: "eyebrow", text: "WHAT'S HAPPENING" },
      {
        type: "paragraph",
        html: "On October 1, 2026, the Swiss glacier monitoring network (GLAMOS) and the Swiss Academy of Sciences (SCNAT) released their annual report. Switzerland's glacier ice volume decreased by <strong>5.5 percent</strong> during the 2026 measurement period. Glaciers are giant expanses of mountain ice, formed from snow compacting over hundreds to thousands of years.",
      },
      {
        type: "paragraph",
        html: "That is the second-largest annual percentage drop. The largest remains 2022, at around 6 percent. The percentage is calculated from the remaining ice, not the initial amount, so the same percentage means less actual ice lost each year. In the five years since 2021, nearly 20 percent of Switzerland's ice volume has disappeared.",
      },
      {
        type: "paragraph",
        html: "Two causes hit at once. Winter brought little snow, then summer 2026 became the hottest on record in Switzerland since 1864. According to MeteoSwiss, the national weather service, the national average summer temperature was 17.2°C, 0.4°C above the 2003 record. Snow acts like a blanket: it protects the ice from heat and adds new ice.",
      },
      {
        type: "paragraph",
        html: "Scientists directly measured 23 reference glaciers, measured annually to represent the rest, and extrapolated to about 1,300 Swiss glaciers, so 5.5 percent is a national estimate, not a measurement of every glacier. According to the report as cited by AP and AFP, average ice thickness shrank by 2.5 to 4 meters, and up to 10 meters at the lower ends of some glaciers. Four glaciers, Allalin, Clariden, Aletsch, and Rhône, saw their greatest recorded melt.",
      },
      {
        type: "statsGrid",
        items: [
          { label: "Sep 28, 2022", value: "GLAMOS reports a record: more than 6% of ice volume lost (about 3 cubic km)" },
          { label: "Sep 28, 2023", value: "4% lost; the two years (2022–2023) total 10%" },
          { label: "Oct 1, 2024", value: "2.5% lost, above the one-decade average" },
          { label: "2025", value: "3% lost, fourth largest on record (per AP)" },
          { label: "Oct 1, 2026", value: "5.5% lost; nearly 20% since 2021" },
        ],
      },
      { type: "eyebrow", text: "WHY IT MATTERS" },
      {
        type: "paragraph",
        html: "Swiss ice has no documented direct link to Surakarta, Jakarta, or small Indonesian islands. No source draws that line. What exists are two longer chains, and both have limits.",
      },
      {
        type: "heading",
        level: 2,
        text: "From the Alps to Papua and Java: the chain exists, but it's not a straight line.",
      },
      {
        type: "paragraph",
        html: "The first chain is in Papua. Puncak Jaya has ice often called eternal ice, tropical glaciers. According to BMKG (Indonesia's meteorology, climatology, and geophysical agency), the area was about 4.3 square kilometers in 1988, a figure from one source. BMKG estimates the ice will completely vanish by late 2026 or early 2027. This is an estimate: there is no observational confirmation that the ice is already gone.",
      },
      {
        type: "paragraph",
        html: "Papuan and Swiss glaciers are melting because of the same heat: global warming. BMKG also noted El Niño, the warming of the Pacific Ocean that usually makes Indonesia drier and hotter, accelerated the melting. Swiss ice does not cause Papuan ice to melt. According to Thomas Djamaluddin of BRIN (National Research and Innovation Agency), the lost ice at Puncak Jaya cannot return as global temperatures keep rising, and its direct local impact is limited.",
      },
      {
        type: "callout",
        html: "\"Perhaps we are the last generation to see eternal ice in Indonesia.\" — BMKG, Instagram post, July 2026",
      },
      {
        type: "paragraph",
        html: "The second chain is on the coast of Java. BRIN notes sea levels on Java's northern coast are rising 2.4 to 4.3 millimeters per year, while BMKG states 4 to 6 millimeters per year for Indonesia in general. The two figures differ and their regional coverage isn't the same. The land there is also sinking, known as land subsidence. BRIN notes more than 10 centimeters per year in parts of Jakarta, a figure from a single source. BRIN cites extracted groundwater as one of the main factors, and subsidence worsens the impact of rising seas.",
      },
      { type: "eyebrow", text: "THE BIGGER PICTURE" },
      {
        type: "paragraph",
        html: "Available sea-level figures are for all the world's glaciers, not per country. According to a global study published in <em>Nature</em> in February 2025, glaciers lost 6,542 gigatons of ice between 2000 and 2023 (one gigaton is one billion tons), equal to 18 millimeters of sea-level rise, or 0.75 millimeters per year. Another study estimates about 1.0 millimeters per year in 2015–2024. No source calculates the Swiss share.",
      },
      {
        type: "paragraph",
        html: "In Switzerland, the pace is accelerating. According to AFP, citing GLAMOS, 10 percent of ice volume was lost between 1990 and 2000, while 27 percent was lost in the last 10 years. The 2022–2026 rate is called more than double any five-year period ever monitored. Both claims come from a single source, AFP.",
      },
      {
        type: "paragraph",
        html: "The second-largest ranking applies to percentage. According to AP, the absolute volume lost in 2003 was larger, because Swiss ice volume today is roughly a third of what it was then. The 2003 record itself is debated: AP says 3.5 percent, NASA says nearly 4 percent. According to AP, in May 2025 a mass of rock and ice from a glacier crashed into almost the entire village of Blatten in southern Switzerland.",
      },
      { type: "eyebrow", text: "WHAT YOU SHOULD KNOW" },
      {
        type: "paragraph",
        html: "The most directly exposed is Switzerland. According to AP, its mountains are called the water towers of Europe: ice and snow feed the Danube, Po, Rhine, and Rhône. More than half of Switzerland's electricity comes from hydropower. From July to September 2026, glaciers released around 2.2 trillion liters of meltwater, more than four times the annual drinking water consumption of all Swiss households.",
      },
      {
        type: "paragraph",
        html: "Meltwater is not the same as lost ice. ETH Zurich notes the water temporarily relieves summer shortages, but its contribution shrinks as glaciers get smaller. The effect on Swiss water supplies and hydropower in 2027 has not been calculated, and there is no official count of glaciers that vanished entirely in 2026; ETH Zurich only mentions that a few small glaciers completely melted.",
      },
      {
        type: "paragraph",
        html: "One quote from Matthias Huss is easily read too broadly. At the Scex Rouge glacier, he said it might have no ice in 10 or 15 years, a statement about one glacier, not all Swiss ice. On cause, Huss stated that current warming is 100 percent attributable to human activity, a claim noted by AP. From Indonesia, follow BMKG for Puncak Jaya's ice and BRIN for land subsidence and sea levels.",
      },
      {
        type: "quote",
        html: "Two ice peaks, one warming. And one question unanswered by any source: how far Swiss ice touches the sea in Java.",
      },
      { type: "divider" },
      {
        type: "sources",
        items: [
          "GLAMOS. (2026). <em>Annual mass balance on Swiss glaciers in 2025/2026.</em> glamos.ch.",
          "SCNAT/WSL. (2026). <em>Swiss glaciers lose a further five per cent of their volume.</em> wsl.ch.",
          "Reuters. (2026). <em>Swiss glaciers lose more than 5% of ice after record heatwave.</em>",
          "Associated Press. (2026). <em>Swiss glaciers lose over 5% of ice volume in 2026 as heat waves, low winter snow accelerate thaw.</em>",
          "Agence France-Presse. (2026). <em>'Catastrophic': Swiss glaciers lose fifth of mass in five years.</em>",
          "swissinfo.ch (data MeteoSwiss). (2026). <em>Switzerland's record-breaking summer by numbers.</em>",
          "Zemp, M., et al. (2025). <em>Community estimate of global glacier mass changes from 2000 to 2023.</em> Nature.",
          "Detik. (2026). <em>Tak Ada yang Abadi, Gletser di Puncak Jaya Diprediksi Habis Total Akhir 2026.</em>",
          "CNN Indonesia. (2026). <em>Salju Abadi di Puncak Jaya Segera Punah, Pakar Bongkar Pemicunya.</em>",
          "Republika. (2026). <em>Temuan BRIN: Jakarta, Cirebon, Hingga Demak, Permukaan Tanah Pesisir Pantura Terus Menurun.</em>",
          "Kompas TV. (2026). <em>BRIN Beberkan Jakarta Turun Lebih dari 10 Cm per Tahun, Ini Penyebabnya.</em>",
        ],
      },
    ],
    translations: {
      id: {
        title: "Gletser Swiss: 5,5 Persen Esnya Hilang dalam Setahun",
        excerpt:
          "Es di pegunungan Swiss mungkin jauh dari hidupmu, tapi angkanya bergerak cepat. Di Papua, Indonesia punya es tropis sendiri, dan BMKG memperkirakan es itu habis pada akhir 2026 atau awal 2027.",
        content: [
          {
            type: "paragraph",
            html: "Es di pegunungan Swiss mungkin jauh dari hidupmu, tapi angkanya bergerak cepat. Pada 1 Oktober 2026, para pemantau gletser Swiss melaporkan bahwa 5,5 persen volume es negara itu hilang dalam setahun, dan hampir seperlima dari seluruh es hilang dalam lima tahun. Di Papua, Indonesia punya es tropis sendiri, dan BMKG memperkirakan es itu habis pada akhir 2026 atau awal 2027.",
          },
          { type: "eyebrow", text: "APA YANG TERJADI" },
          {
            type: "paragraph",
            html: "Pada 1 Oktober 2026, jaringan pemantau gletser Swiss (GLAMOS) dan Swiss Academy of Sciences (SCNAT) merilis laporan tahunan mereka. Volume es gletser Swiss berkurang <strong>5,5 persen</strong> pada periode pengukuran 2026. Gletser adalah hamparan es raksasa di pegunungan, terbentuk dari salju yang memadat selama ratusan sampai ribuan tahun.",
          },
          {
            type: "paragraph",
            html: "Angka itu penurunan tahunan terbesar kedua dalam persentase. Yang terbesar tetap terjadi pada 2022, sekitar 6 persen. Persentase ini dihitung dari es yang masih ada, bukan dari jumlah awal, jadi persen yang sama berarti es yang makin sedikit setiap tahun. Dalam lima tahun sejak 2021, hampir 20 persen volume es Swiss hilang.",
          },
          {
            type: "paragraph",
            html: "Penyebabnya dua hal yang datang bersamaan. Musim dingin membawa sedikit salju, lalu musim panas 2026 menjadi yang terpanas dalam catatan Swiss sejak 1864. Menurut MeteoSwiss, dinas cuaca nasional Swiss, suhu rata-rata nasional musim panas itu 17,2°C, atau 0,4°C di atas rekor 2003. Salju bekerja seperti selimut: ia melindungi es dari panas dan menambah es baru.",
          },
          {
            type: "paragraph",
            html: "Para ilmuwan mengukur langsung 23 gletser acuan, yaitu gletser yang diukur setiap tahun untuk mewakili yang lain. Hasilnya diperluas ke sekitar 1.300 gletser Swiss, jadi 5,5 persen adalah perkiraan nasional, bukan hasil mengukur setiap gletser. Menurut laporan yang dikutip AP dan AFP, ketebalan rata-rata es menyusut 2,5 sampai 4 meter, dan di ujung bawah sebagian gletser sampai 10 meter. Empat gletser, yaitu Allalin, Clariden, Aletsch, dan Rhône, mengalami lelehan terbesar dalam catatan masing-masing.",
          },
          {
            type: "statsGrid",
            items: [
              { label: "28 Sep 2022", value: "GLAMOS melaporkan rekor: lebih dari 6% volume es hilang (sekitar 3 kilometer kubik)" },
              { label: "28 Sep 2023", value: "4% hilang; dua tahun (2022–2023) totalnya 10%" },
              { label: "1 Okt 2024", value: "2,5% hilang, di atas rata-rata satu dekade" },
              { label: "2025", value: "3% hilang, terbesar keempat dalam catatan (menurut AP)" },
              { label: "1 Okt 2026", value: "5,5% hilang; hampir 20% sejak 2021" },
            ],
          },
          { type: "eyebrow", text: "MENGAPA INI PENTING" },
          {
            type: "paragraph",
            html: "Es Swiss tidak punya hubungan langsung yang terdokumentasi dengan Surakarta, Jakarta, atau pulau kecil Indonesia. Tidak ada sumber yang menarik garis itu. Yang ada adalah dua rantai yang lebih panjang, dan keduanya punya batas.",
          },
          {
            type: "heading",
            level: 2,
            text: "Dari Alpen ke Papua dan Jawa: rantainya ada, tapi tidak lurus.",
          },
          {
            type: "paragraph",
            html: "Rantai pertama ada di Papua. Puncak Jaya punya es yang sering disebut es abadi, yaitu gletser tropis. Menurut BMKG, luasnya sekitar 4,3 kilometer persegi pada 1988, angka dari satu sumber. BMKG memperkirakan es itu habis total pada akhir 2026 atau awal 2027, dan ini perkiraan: belum ada konfirmasi pengamatan bahwa es sudah hilang.",
          },
          {
            type: "paragraph",
            html: "Gletser Papua dan gletser Swiss meleleh karena panas yang sama, yaitu pemanasan global. BMKG juga menyebut El Niño, pemanasan laut Pasifik yang biasanya membuat Indonesia lebih kering dan panas, mempercepat pencairan itu. Es Swiss tidak menyebabkan es Papua mencair. Menurut Thomas Djamaluddin dari BRIN, es yang hilang di Puncak Jaya tidak mungkin kembali karena suhu global terus naik, dan dampak lokal langsungnya terbatas.",
          },
          {
            type: "callout",
            html: "\"Mungkin kita generasi terakhir yang melihat es abadi di Indonesia.\" — BMKG, unggahan Instagram, Juli 2026",
          },
          {
            type: "paragraph",
            html: "Rantai kedua ada di pesisir Jawa. BRIN mencatat muka laut di pantai utara Jawa naik 2,4 sampai 4,3 milimeter per tahun, sedangkan BMKG menyebut 4 sampai 6 milimeter per tahun untuk Indonesia secara umum. Kedua angka itu berbeda, dan cakupan wilayahnya juga tidak sama. Tanah di sana ikut turun, yang disebut penurunan muka tanah (land subsidence). BRIN mencatat lebih dari 10 sentimeter per tahun di sebagian Jakarta, angka dari satu sumber. Air tanah yang disedot disebut BRIN sebagai salah satu faktor utamanya, dan penurunan itu memperparah dampak kenaikan laut.",
          },
          { type: "eyebrow", text: "GAMBARAN BESARNYA" },
          {
            type: "paragraph",
            html: "Angka kenaikan laut yang tersedia adalah untuk seluruh gletser dunia, bukan per negara. Menurut studi global di <em>Nature</em> pada Februari 2025, gletser dunia kehilangan 6.542 gigaton es pada 2000–2023 (satu gigaton adalah satu miliar ton), setara kenaikan laut 18 milimeter, atau 0,75 milimeter per tahun. Studi lain menaksir sekitar 1,0 milimeter per tahun pada 2015–2024. Tidak ada sumber yang menghitung bagian es Swiss.",
          },
          {
            type: "paragraph",
            html: "Di Swiss, lajunya makin cepat. Menurut AFP yang mengutip GLAMOS, 10 persen volume es hilang pada 1990–2000, sedangkan 27 persen hilang dalam 10 tahun terakhir. Laju 2022–2026 disebut lebih dari dua kali lipat periode lima tahun mana pun yang pernah dipantau. Kedua klaim itu berasal dari satu sumber, yaitu AFP.",
          },
          {
            type: "paragraph",
            html: "Peringkat terbesar kedua berlaku untuk persentase. Menurut AP, dalam volume absolut kehilangan pada 2003 lebih besar, karena volume es Swiss kini kira-kira sepertiga dari saat itu. Rekor 2003 sendiri diperdebatkan: AP menyebut 3,5 persen, NASA menyebut hampir 4 persen. Menurut AP, pada Mei 2025 massa batu dan es dari sebuah gletser menimpa hampir seluruh desa Blatten di Swiss selatan.",
          },
          { type: "eyebrow", text: "YANG PERLU KAMU TAHU" },
          {
            type: "paragraph",
            html: "Yang paling terpapar langsung adalah Swiss. Menurut AP, pegunungannya disebut menara air Eropa: es dan salju di sana mengalirkan air ke Sungai Danube, Po, Rhine, dan Rhône. Lebih dari separuh listrik Swiss juga berasal dari PLTA. Dari Juli sampai September 2026, gletser melepas sekitar 2,2 triliun liter air lelehan, lebih dari empat kali konsumsi air minum tahunan seluruh rumah tangga Swiss.",
          },
          {
            type: "paragraph",
            html: "Air lelehan bukan sama dengan es yang hilang. ETH Zurich menyebut air itu sementara meredakan kekurangan air musim panas, tetapi sumbangannya menyusut seiring gletser mengecil. Efeknya pada pasokan air dan PLTA Swiss pada 2027 belum dihitung, dan jumlah gletser yang lenyap total pada 2026 belum ada hitungan resminya; ETH Zurich hanya menyebut beberapa gletser kecil melebur sepenuhnya.",
          },
          {
            type: "paragraph",
            html: "Satu kutipan Matthias Huss mudah terbaca terlalu luas. Di gletser Scex Rouge, ia mengatakan gletser itu mungkin tak punya es dalam 10 atau 15 tahun, pernyataan tentang satu gletser, bukan semua es Swiss. Soal sebab, Huss menyatakan pemanasan saat ini 100 persen dapat dikaitkan dengan aktivitas manusia; klaim itu dicatat AP. Dari Indonesia, ikuti BMKG untuk es Puncak Jaya dan BRIN untuk penurunan tanah dan muka laut.",
          },
          {
            type: "quote",
            html: "Dua puncak es, satu pemanasan. Dan satu pertanyaan yang belum dijawab sumber mana pun: seberapa jauh es Swiss menyentuh laut di Jawa.",
          },
          { type: "divider" },
          {
            type: "sources",
            items: [
              "GLAMOS. (2026). <em>Annual mass balance on Swiss glaciers in 2025/2026.</em> glamos.ch.",
              "SCNAT/WSL. (2026). <em>Swiss glaciers lose a further five per cent of their volume.</em> wsl.ch.",
              "Reuters. (2026). <em>Swiss glaciers lose more than 5% of ice after record heatwave.</em>",
              "Associated Press. (2026). <em>Swiss glaciers lose over 5% of ice volume in 2026 as heat waves, low winter snow accelerate thaw.</em>",
              "Agence France-Presse. (2026). <em>'Catastrophic': Swiss glaciers lose fifth of mass in five years.</em>",
              "swissinfo.ch (data MeteoSwiss). (2026). <em>Switzerland's record-breaking summer by numbers.</em>",
              "Zemp, M., dkk. (2025). <em>Community estimate of global glacier mass changes from 2000 to 2023.</em> Nature.",
              "Detik. (2026). <em>Tak Ada yang Abadi, Gletser di Puncak Jaya Diprediksi Habis Total Akhir 2026.</em>",
              "CNN Indonesia. (2026). <em>Salju Abadi di Puncak Jaya Segera Punah, Pakar Bongkar Pemicunya.</em>",
              "Republika. (2026). <em>Temuan BRIN: Jakarta, Cirebon, Hingga Demak, Permukaan Tanah Pesisir Pantura Terus Menurun.</em>",
              "Kompas TV. (2026). <em>BRIN Beberkan Jakarta Turun Lebih dari 10 Cm per Tahun, Ini Penyebabnya.</em>",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "new-york-measles-emergency-october-2026",
    title: "New York Declares Measles Emergency: What Happened?",
    excerpt:
      "New York recorded 108 measles cases as of October 3, while the United States has reported 3,887 cases in 2026.",
    coverImage: "/images/measles-new-york-oct-2026.jpg",
    coverImageAlt: "Electron micrograph of measles virus particles",
    coverImageCredit: "Photo: Cynthia S. Goldsmith, CDC / Wikimedia Commons (public domain)",
    author: "Gabriel Ovadio",
    publishedAt: "2026-10-07",
    category: "Health",
    readingMinutes: 4,
    content: [
      {
        type: "paragraph",
        html: "New York recorded 108 measles cases as of October 3, while the United States has reported 3,887 cases in 2026.",
      },
      { type: "eyebrow", text: "GLOBAL HEALTH" },
      {
        type: "paragraph",
        html: "NEW YORK, October 5, 2026 — New York Governor Kathy Hochul declared a <em>State Disaster Emergency</em> after measles cases increased in several rural areas of the state. As of October 3, 2026, New York had recorded <strong>108 cases</strong>, including seven in New York City and 101 in other areas.",
      },
      {
        type: "paragraph",
        html: "A total of 92 cases have occurred since July 15, 2026, in rural communities with lower immunization coverage, spread across 18 counties. The New York government then expanded who could administer the MMR vaccine and assist with testing to speed up the response.",
      },
      {
        type: "paragraph",
        html: "The development comes as the United States faces a wider increase in measles cases. The CDC recorded 3,887 confirmed cases across the U.S. as of October 1, 2026, while Pennsylvania reported 1,004 cases, 198 hospitalizations, and five deaths as of October 5, 2026.",
      },
      {
        type: "callout",
        html: "\"This is a public health emergency.\" — Kathy Hochul, Governor of New York, October 5, 2026",
      },
      {
        type: "heading",
        level: 2,
        text: "Why Does the Measles Outbreak Matter for Schools?",
      },
      {
        type: "paragraph",
        html: "For students, the issue is not only about the number of cases. Measles is highly contagious, meaning lower immunization coverage in a community can increase the need for contact tracing, health screenings, and preventive measures in schools.",
      },
      {
        type: "quote",
        html: "This outbreak does not mean Indonesia is experiencing the same situation. However, the cases in the United States show how immunization coverage, access to healthcare, and school environments can become interconnected when a preventable disease begins to spread again.",
      },
      { type: "divider" },
      {
        type: "sources",
        items: [
          "Reuters. (2026). <em>New York declares first US measles disaster emergency since 2025 surge.</em> 5 October 2026.",
          "Associated Press. (2026). <em>Pennsylvania's measles outbreak is the largest in decades in the US.</em> 5 October 2026.",
          "U.S. Centers for Disease Control and Prevention. <em>Measles Cases and Outbreaks.</em> Data as of 1 October 2026.",
        ],
      },
    ],
    translations: {
      id: {
        title: "New York Darurat Campak: Apa yang Terjadi?",
        excerpt:
          "New York mencatat 108 kasus campak hingga 3 Oktober, sementara Amerika Serikat telah melaporkan 3.887 kasus pada 2026.",
        content: [
          {
            type: "paragraph",
            html: "New York mencatat 108 kasus campak hingga 3 Oktober, sementara Amerika Serikat telah melaporkan 3.887 kasus pada 2026.",
          },
          { type: "eyebrow", text: "KESEHATAN GLOBAL" },
          {
            type: "paragraph",
            html: "NEW YORK, 5 Oktober 2026 — Gubernur New York Kathy Hochul menetapkan status <em>State Disaster Emergency</em> setelah kasus campak meningkat di sejumlah wilayah pedesaan negara bagian tersebut. Hingga 3 Oktober 2026, New York mencatat <strong>108 kasus</strong>, terdiri dari tujuh kasus di New York City dan 101 kasus di wilayah lain.",
          },
          {
            type: "paragraph",
            html: "Sebanyak 92 kasus terjadi sejak 15 Juli 2026 di komunitas pedesaan dengan cakupan imunisasi yang lebih rendah, tersebar di 18 county. Pemerintah New York kemudian memperluas siapa saja yang dapat memberikan vaksin MMR dan membantu proses pemeriksaan untuk mempercepat respons.",
          },
          {
            type: "paragraph",
            html: "Perkembangan ini terjadi ketika Amerika Serikat menghadapi lonjakan kasus campak yang lebih luas. CDC mencatat 3.887 kasus terkonfirmasi di AS hingga 1 Oktober 2026, sementara Pennsylvania melaporkan 1.004 kasus, 198 rawat inap, dan lima kematian hingga 5 Oktober 2026.",
          },
          {
            type: "callout",
            html: "\"Ini adalah keadaan darurat kesehatan masyarakat.\" — Kathy Hochul, Gubernur New York, 5 Oktober 2026",
          },
          {
            type: "heading",
            level: 2,
            text: "Mengapa Wabah Campak Berkaitan dengan Sekolah?",
          },
          {
            type: "paragraph",
            html: "Bagi pelajar, persoalannya bukan hanya jumlah kasus. Campak sangat mudah menular, sehingga rendahnya perlindungan imunisasi di suatu komunitas dapat meningkatkan kebutuhan pelacakan kontak, pemeriksaan kesehatan, dan langkah pencegahan di lingkungan sekolah.",
          },
          {
            type: "quote",
            html: "Wabah ini tidak berarti Indonesia sedang mengalami situasi yang sama. Namun, kasus di Amerika Serikat menunjukkan bagaimana cakupan imunisasi, akses layanan kesehatan, dan lingkungan sekolah dapat saling berkaitan ketika penyakit yang sebenarnya dapat dicegah kembali menyebar.",
          },
          { type: "divider" },
          {
            type: "sources",
            items: [
              "Reuters. (2026). <em>New York declares first US measles disaster emergency since 2025 surge.</em> 5 Oktober 2026.",
              "Associated Press. (2026). <em>Pennsylvania's measles outbreak is the largest in decades in the US.</em> 5 Oktober 2026.",
              "U.S. Centers for Disease Control and Prevention. <em>Measles Cases and Outbreaks.</em> Data per 1 Oktober 2026.",
            ],
          },
        ],
      },
    },
  },
];

export const articles: Article[] = [
  ...handwrittenArticles,
  ...(publishedArticles as Article[]),
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
