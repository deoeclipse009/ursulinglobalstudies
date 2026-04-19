import type { Metadata } from "next";
import Link from "next/link";
import {
  PenLine,
  Palette,
  Monitor,
  Newspaper,
  Lightbulb,
  Heart,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ursulin Global Studies is a student community at SMA Regina Pacis Surakarta fostering global awareness through critical thinking, responsible research, and humanist publishing.",
};

const OBJECTIVES = [
  "Cultivate global awareness and understanding of international issues.",
  "Build research, writing, and critical-thinking skills among students.",
  "Strengthen information literacy and the ability to separate fact from noise.",
  "Turn values into action through humanist initiatives in our school community.",
];

const MISSIONS = [
  "Publish accurate, relevant analysis of global and international issues, sourced responsibly from trusted media.",
  "Develop critical thinking, information literacy, and a culture of writing through research and internal discussion.",
  "Be an open, safe, and collaborative learning space where students engage with global issues from many perspectives.",
  "Encourage social awareness through real action grounded in humanist values.",
  "Instill ethics of information use and awareness of the impact of public digital content.",
];

const PROGRAMS = [
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
];

const DIVISIONS = [
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
];

const STUDENT_BENEFITS = [
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
];

const SCHOOL_BENEFITS = [
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
];

export default function AboutPage() {
  const issueDate = new Date().toLocaleDateString("en-US", {
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
              A community run by students — for students
            </p>

            <h1 className="font-serif text-4xl font-black leading-[1] tracking-tight text-ink sm:text-6xl lg:text-[6rem]">
              This is{" "}
              <em className="font-normal italic text-brand">who we are.</em>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text sm:text-lg">
              Ursulin Global Studies is a student-driven community at SMA Regina
              Pacis Surakarta focused on global awareness, information literacy,
              and humanitarian care through writing, insight, and action.
            </p>
          </div>

          <hr className="rule-double" />

          {/* Three-column stats row */}
          <div className="grid grid-cols-3 gap-6 py-10 sm:gap-10 sm:py-12">
            {[
              { value: "6", label: "Categories" },
              { value: "3", label: "Programs" },
              { value: "100%", label: "Student-run" },
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

      {/* ══════════════ LATAR BELAKANG (BACKGROUND) ══════════════ */}
      <section className="container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">
              Background
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Why we started.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="drop-cap text-base leading-relaxed text-text sm:text-lg">
              UGS was born from a simple need: critical thinking and a real
              understanding of global issues, in a time when information moves
              faster than ever and gets more complex with every scroll. We think
              students shouldn't just receive information, we should analyze
              it, verify it, and understand the context around events that
              shape everyone's lives.
            </p>
            <p className="mt-5 text-base leading-relaxed text-text sm:text-lg">
              That's the whole idea. Not a club. Not a content factory. A
              learning space that takes the world seriously and takes young
              voices seriously too.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ OBJECTIVES ══════════════ */}
      <section className="border-y border-ink/10 bg-feed/40 py-16 sm:py-20">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">
              Objectives
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
              What we're trying to do.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {OBJECTIVES.map((o, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-ink/10 bg-paper p-5 sm:p-6"
              >
                <span className="font-serif text-3xl font-black leading-none text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-text sm:text-base">
                  {o}
                </p>
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
              Vision
            </p>
            <p className="font-serif text-2xl font-bold leading-snug sm:text-3xl">
              To be a student community that grows global awareness through
              critical understanding, responsible research, and humanist
              publishing.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-2xl border border-ink/10 bg-paper p-8 sm:p-10">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Mission
            </p>
            <ul className="space-y-4">
              {MISSIONS.map((m, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                  <span className="text-sm leading-relaxed text-text sm:text-base">
                    {m}
                  </span>
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
              Programs
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Three programs. One mission.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text sm:text-lg">
              Every UGS activity lives inside one of these three programs.
              Together they cover what we publish, what we teach, and what we do
              in the world.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {PROGRAMS.map((p) => (
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
                <h3 className="font-serif text-2xl font-bold text-ink">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text sm:text-base">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ DIVISIONS ══════════════ */}
      <section className="container py-16 sm:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">
            Divisions
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Three teams, one newsroom.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text sm:text-lg">
            When you apply, you pick two preferred divisions. We place each
            member in the one that best fits the team's needs.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIVISIONS.map((d) => (
            <div
              key={d.title}
              className="group rounded-2xl border border-ink/10 bg-paper p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-paper">
                <d.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-ink">
                {d.title}
              </h3>
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
              Who benefits
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
              What UGS gives back.
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* For students */}
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-ink">
                <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-paper">
                  For students
                </span>
              </h3>
              <ul className="space-y-5">
                {STUDENT_BENEFITS.map((b, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-ink/10 bg-paper p-5 sm:p-6"
                  >
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
                  For the school
                </span>
              </h3>
              <ul className="space-y-5">
                {SCHOOL_BENEFITS.map((b, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-ink/10 bg-paper p-5 sm:p-6"
                  >
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
            UGS isn't just a community.
            <br />
            It's a place to learn how to see the world.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text sm:text-lg">
            With the school's support, UGS can keep being a space that's
            positive, responsible, and useful, both for the students in it and
            for the wider community at SMA Regina Pacis Surakarta.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="brand">
              <Link href="/news">
                Read our stories <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
          <hr className="rule-double-reverse mx-auto mt-12 w-24" />
        </div>
      </section>
    </>
  );
}
