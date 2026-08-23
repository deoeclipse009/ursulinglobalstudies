import type { Article } from "./types";

/**
 * All UGS articles live here.
 *
 * How to add a new article:
 *   1. Append a new object to this array.
 *   2. `slug` must be unique, lowercase, hyphenated.
 *   3. `content` is an array of blocks; see `./types.ts` for every block type.
 *   4. Save. That's it: the /news list and /news/[slug] page update automatically.
 */
export const articles: Article[] = [
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
          "Wikipedia. (2026). <em>Timeline of the 2026 Lebanon war.</em> en.wikipedia.org.",
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
              "Wikipedia. (2026). <em>Timeline of the 2026 Lebanon war.</em> en.wikipedia.org.",
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
