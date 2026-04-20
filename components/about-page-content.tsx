"use client";

import Link from "next/link";
import {
  PenLine,
  Palette,
  Monitor,
  Newspaper,
  Lightbulb,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

const OBJECTIVES = {
  en: [
    "Cultivate global awareness and understanding of international issues.",
    "Build research, writing, and critical-thinking skills among students.",
    "Strengthen information literacy and the ability to separate fact from noise.",
    "Turn values into action through humanist initiatives in our school community.",
  ],
  id: [
    "Menumbuhkan kesadaran global dan pemahaman tentang isu-isu internasional.",
    "Membangun keterampilan riset, menulis, dan berpikir kritis di kalangan pelajar.",
    "Memperkuat literasi informasi dan kemampuan memisahkan fakta dari kebisingan.",
    "Mengubah nilai menjadi aksi nyata melalui inisiatif humanis di komunitas sekolah.",
  ],
};

const MISSIONS = {
  en: [
    "Publish accurate, relevant analysis of global and international issues, sourced responsibly from trusted media.",
    "Develop critical thinking, information literacy, and a culture of writing through research and internal discussion.",
    "Be an open, safe, and collaborative learning space where students engage with global issues from many perspectives.",
    "Encourage social awareness through real action grounded in humanist values.",
    "Instill ethics of information use and awareness of the impact of public digital content.",
  ],
  id: [
    "Menerbitkan analisis yang akurat dan relevan tentang isu-isu global dan internasional, bersumber secara bertanggung jawab dari media terpercaya.",
    "Mengembangkan pemikiran kritis, literasi informasi, dan budaya menulis melalui riset dan diskusi internal.",
    "Menjadi ruang belajar yang terbuka, aman, dan kolaboratif di mana pelajar terlibat dengan isu global dari berbagai perspektif.",
    "Mendorong kepedulian sosial melalui aksi nyata yang berlandaskan nilai-nilai humanis.",
    "Menanamkan etika penggunaan informasi dan kesadaran akan dampak konten digital publik.",
  ],
};

const PROGRAMS = {
  en: [
    {
      icon: Newspaper,
      name: "UGS News",
      tag: "Publication",
      body: "Our flagship program: articles on global and international issues that are current, relevant, and consequential. Every piece is researched simply but responsibly, drawing on international media, academic journals, and official reports. Published as short-form on social and full-length in digital documents — designed to sharpen information literacy and build the habit of writing with care.",
    },
    {
      icon: Lightbulb,
      name: "UGS Insights",
      tag: "Education",
      body: "Short, digestible explainers that introduce concepts, terms, and context behind the stories — diplomacy, bilateral, multilateral, historical moments, international observances. Built for students who want to expand their worldview without wading through long reads. Published continuously and tuned to what's actually happening right now.",
    },
    {
      icon: Heart,
      name: "UGS Care",
      tag: "Action",
      body: "Our annual humanist program, where understanding turns into action. Each year we choose one theme — literacy, education, environment, or humanitarian work — and design an initiative realistic for students to carry out. Every activity is announced openly through our social and platform channels, because accountability is part of the work.",
    },
  ],
  id: [
    {
      icon: Newspaper,
      name: "UGS News",
      tag: "Publikasi",
      body: "Program unggulan kami: artikel tentang isu-isu global dan internasional yang aktual, relevan, dan bermakna. Setiap karya diriset secara sederhana namun bertanggung jawab, mengacu pada media internasional, jurnal akademik, dan laporan resmi. Diterbitkan dalam format pendek di media sosial dan penuh di dokumen digital — dirancang untuk mempertajam literasi informasi dan membangun kebiasaan menulis dengan penuh perhatian.",
    },
    {
      icon: Lightbulb,
      name: "UGS Insights",
      tag: "Edukasi",
      body: "Penjelasan singkat yang mudah dicerna tentang konsep, istilah, dan konteks di balik berita — diplomasi, bilateral, multilateral, momen sejarah, peringatan internasional. Dibangun untuk pelajar yang ingin memperluas wawasan tanpa harus membaca terlalu panjang. Diterbitkan terus-menerus dan disesuaikan dengan apa yang sedang benar-benar terjadi.",
    },
    {
      icon: Heart,
      name: "UGS Care",
      tag: "Aksi",
      body: "Program humanis tahunan kami, di mana pemahaman berubah menjadi aksi. Setiap tahun kami memilih satu tema — literasi, pendidikan, lingkungan, atau kerja kemanusiaan — dan merancang inisiatif yang realistis untuk dilaksanakan pelajar. Setiap kegiatan diumumkan secara terbuka melalui saluran sosial dan platform kami, karena akuntabilitas adalah bagian dari pekerjaan.",
    },
  ],
};

const DIVISIONS = {
  en: [
    {
      icon: PenLine,
      title: "News Writer",
      body: "Researches, writes, and fact-checks UGS News articles across six global categories.",
    },
    {
      icon: Palette,
      title: "Multimedia & Digital",
      body: "Creates UGS Insights graphics, videos, and the social feed that carries the newsroom.",
    },
    {
      icon: Monitor,
      title: "Website Development",
      body: "Maintains and evolves this platform, the home of the newsroom online.",
    },
  ],
  id: [
    {
      icon: PenLine,
      title: "News Writer",
      body: "Meriset, menulis, dan memeriksa fakta artikel UGS News di enam kategori global.",
    },
    {
      icon: Palette,
      title: "Multimedia & Digital",
      body: "Membuat grafis, video, dan feed sosial UGS Insights yang membawa newsroom ini.",
    },
    {
      icon: Monitor,
      title: "Website Development",
      body: "Memelihara dan mengembangkan platform ini, rumah online newsroom.",
    },
  ],
};

const STUDENT_BENEFITS = {
  en: [
    {
      title: "Global awareness & information literacy",
      body: "Students learn to understand issues in context and tell credible information from noise in a crowded media landscape.",
    },
    {
      title: "Hands-on research and writing experience",
      body: "Through UGS News and Insights, members get real practice in simple research, sourced writing, and responsible presentation.",
    },
    {
      title: "Academic and character growth",
      body: "UGS strengthens critical thinking, social care, responsibility, and readiness for academic forums and future work.",
    },
  ],
  id: [
    {
      title: "Kesadaran global & literasi informasi",
      body: "Pelajar belajar memahami isu dalam konteks dan membedakan informasi yang kredibel dari kebisingan di lanskap media yang padat.",
    },
    {
      title: "Pengalaman riset dan menulis secara langsung",
      body: "Melalui UGS News dan Insights, anggota mendapat latihan nyata dalam riset sederhana, penulisan bersumber, dan presentasi yang bertanggung jawab.",
    },
    {
      title: "Pertumbuhan akademik dan karakter",
      body: "UGS memperkuat pemikiran kritis, kepedulian sosial, tanggung jawab, dan kesiapan untuk forum akademik dan pekerjaan di masa depan.",
    },
  ],
};

const SCHOOL_BENEFITS = {
  en: [
    {
      title: "A positive, globally minded identity",
      body: "UGS reflects SMA Regina Pacis Surakarta's active role in shaping students who are aware of global and humanitarian issues.",
    },
    {
      title: "Non-formal work that supports Profil Pelajar Pancasila",
      body: "UGS aligns with the values of critical reasoning, gotong royong, and global diversity.",
    },
    {
      title: "Tangible proof of student engagement",
      body: "Through UGS Care and open publishing, the school keeps a public, accountable track record of meaningful student work.",
    },
  ],
  id: [
    {
      title: "Identitas positif dan berpandangan global",
      body: "UGS mencerminkan peran aktif SMA Regina Pacis Surakarta dalam membentuk pelajar yang peka terhadap isu global dan kemanusiaan.",
    },
    {
      title: "Kegiatan non-formal yang mendukung Profil Pelajar Pancasila",
      body: "UGS selaras dengan nilai-nilai penalaran kritis, gotong royong, dan keberagaman global.",
    },
    {
      title: "Bukti nyata keterlibatan pelajar",
      body: "Melalui UGS Care dan publikasi terbuka, sekolah memiliki rekam jejak publik yang akuntabel dari karya pelajar yang bermakna.",
    },
  ],
};

export function AboutPageContent() {
  const { t, lang } = useLanguage();
  const l = lang === "id" ? "id" : "en";

  const objectives = OBJECTIVES[l];
  const missions = MISSIONS[l];
  const programs = PROGRAMS[l];
  const divisions = DIVISIONS[l];
  const studentBenefits = STUDENT_BENEFITS[l];
  const schoolBenefits = SCHOOL_BENEFITS[l];

  const issueDate = new Date().toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* ══════════════ VINTAGE MASTHEAD HERO ══════════════ */}
      <section className="relative overflow-hidden bg-newsprint">
        <div className="container pt-10 sm:pt-14">
          <div className="folio">
            <span>Newsroom</span>
            <span className="hidden sm:inline">{issueDate}</span>
            <span>Est. 2026</span>
          </div>

          <div className="py-12 text-center sm:py-16">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-ink/60">
              {t("about.eyebrow")}
            </p>

            <h1 className="font-serif text-4xl font-black leading-[1] tracking-tight text-ink sm:text-6xl lg:text-[6rem]">
              {t("about.headline.before")}{" "}
              <em className="font-normal italic text-brand">{t("about.headline.accent")}</em>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text sm:text-lg">
              {t("about.description")}
            </p>
          </div>

          <hr className="rule-double" />

          {/* Three-column stats row */}
          <div className="grid grid-cols-3 gap-6 py-10 sm:gap-10 sm:py-12">
            {[
              { value: "6", label: t("about.stats.categories") },
              { value: "3", label: t("about.stats.programs") },
              { value: "100%", label: t("about.stats.studentRun") },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-4xl font-black text-ink sm:text-6xl">
                  {s.value}
                </p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/50 sm:text-xs">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <hr className="rule-double-reverse" />
        </div>
      </section>

      {/* ══════════════ BACKGROUND ══════════════ */}
      <section className="container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">
              {t("about.background.eyebrow")}
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
              {t("about.background.title")}
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="drop-cap text-base leading-relaxed text-text sm:text-lg">
              {t("about.background.body1")}
            </p>
            <p className="mt-5 text-base leading-relaxed text-text sm:text-lg">
              {t("about.background.body2")}
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ OBJECTIVES ══════════════ */}
      <section className="border-y border-ink/10 bg-feed/40 py-16 sm:py-20">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">
              {t("about.objectives.eyebrow")}
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
              {t("about.objectives.title")}
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {objectives.map((o, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-ink/10 bg-paper p-5 sm:p-6"
              >
                <span className="font-serif text-3xl font-black leading-none text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-text sm:text-base">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ VISION & MISSION ══════════════ */}
      <section className="container py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Vision */}
          <div className="rounded-2xl bg-ink p-8 text-paper sm:p-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-data">
              {t("about.vision.eyebrow")}
            </p>
            <p className="font-serif text-2xl font-bold leading-snug sm:text-3xl">
              {t("about.vision.body")}
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-2xl border border-ink/10 bg-paper p-8 sm:p-10">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brand">
              {t("about.mission.eyebrow")}
            </p>
            <ul className="space-y-4">
              {missions.map((m, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                  <span className="text-sm leading-relaxed text-text sm:text-base">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════ PROGRAMS ══════════════ */}
      <section className="border-y border-ink/10 bg-newsprint py-16 sm:py-24">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">
              {t("about.programs.eyebrow")}
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              {t("about.programs.title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text sm:text-lg">
              {t("about.programs.subtitle")}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {programs.map((p) => (
              <article
                key={p.name}
                className="group rounded-2xl border border-ink/15 bg-paper p-7 transition-all hover:-translate-y-1 hover:border-ink hover:shadow-md sm:p-8"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink text-paper transition-colors group-hover:bg-brand">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/50">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text sm:text-base">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ DIVISIONS ══════════════ */}
      <section className="container py-16 sm:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">
            {t("about.divisions.eyebrow")}
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {t("about.divisions.title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text sm:text-lg">
            {t("about.divisions.subtitle")}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d) => (
            <div
              key={d.title}
              className="group rounded-2xl border border-ink/10 bg-paper p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-paper">
                <d.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-ink">{d.title}</h3>
              <p className="text-sm leading-relaxed text-text">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ BENEFITS ══════════════ */}
      <section className="border-t border-ink/10 bg-feed/40 py-16 sm:py-24">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">
              {t("about.benefits.eyebrow")}
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
              {t("about.benefits.title")}
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* For students */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-ink">
                <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-paper">
                  {t("about.benefits.students")}
                </span>
              </h3>
              <ul className="space-y-5">
                {studentBenefits.map((b, i) => (
                  <li key={i} className="rounded-xl border border-ink/10 bg-paper p-5 sm:p-6">
                    <h4 className="mb-2 font-semibold text-ink">{b.title}</h4>
                    <p className="text-sm leading-relaxed text-text">{b.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* For school */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-ink">
                <span className="rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-wider text-paper">
                  {t("about.benefits.school")}
                </span>
              </h3>
              <ul className="space-y-5">
                {schoolBenefits.map((b, i) => (
                  <li key={i} className="rounded-xl border border-ink/10 bg-paper p-5 sm:p-6">
                    <h4 className="mb-2 font-semibold text-ink">{b.title}</h4>
                    <p className="text-sm leading-relaxed text-text">{b.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CLOSING ══════════════ */}
      <section className="container py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <hr className="rule-double mx-auto w-24" />
          <p className="mt-8 font-serif text-3xl font-bold italic leading-snug text-ink sm:text-4xl lg:text-5xl">
            {t("about.closing.quote.line1")}
            <br />
            {t("about.closing.quote.line2")}
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text sm:text-lg">
            {t("about.closing.body")}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="brand">
              <Link href="/news">
                {t("about.closing.cta.read")} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">{t("about.closing.cta.contact")}</Link>
            </Button>
          </div>
          <hr className="rule-double-reverse mx-auto mt-12 w-24" />
        </div>
      </section>
    </>
  );
}
