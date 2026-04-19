import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/article-card";
import { CategoryChip } from "@/components/category-chip";
import { getSortedArticles } from "@/content/articles";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  const all = getSortedArticles();
  const [featured, ...rest] = all;
  const latest = rest.slice(0, 6);

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
          {/* Folio bar — tiny caps row at the top of every broadsheet */}
          <div className="folio">
            <span>Volume 1</span>
            <span className="hidden sm:inline">{issueDate}</span>
            <span>Surakarta Edition</span>
          </div>

          {/* Masthead */}
          <div className="py-10 text-center sm:py-14">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-ink/60">
              The student newsroom of SMA Regina Pacis Surakarta
            </p>

            <h1 className="font-serif text-5xl font-black leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-[7.5rem]">
              Ursulin Global Studies
            </h1>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/50 sm:text-xs">
              Humanis dan Berwawasan Global
            </p>
          </div>

          {/* Double rule — the defining newspaper stroke */}
          <hr className="rule-double" />

          {/* Lede row — three columns, classic newspaper underneath-masthead layout */}
          <div className="grid gap-8 py-10 sm:grid-cols-3 sm:gap-10 sm:py-14">
            <div className="sm:col-span-2">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-brand">
                From the editors
              </p>
              <h2 className="font-serif text-3xl font-bold leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
                News that speaks{" "}
                <em className="font-normal italic text-brand">your language.</em>
              </h2>
              <p className="drop-cap mt-5 max-w-xl text-base leading-relaxed text-text sm:text-lg">
                UGS is a student community of SMA Regina Pacis Surakarta that reads the world so you don't
                have to do it alone. We research, fact-check, and publish stories
                that matter to our generation, from the policies shaping our
                feeds to the climate we'll inherit. Built by students, for
                students.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" variant="brand">
                  <Link href="/news">
                    Read the latest <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">About UGS</Link>
                </Button>
              </div>
            </div>

            {/* Vertical-rule separated sidebar with the three pillars */}
            <aside className="sm:border-l sm:border-ink/20 sm:pl-8">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-ink/60">
                Inside this issue
              </p>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <Globe className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Global coverage</p>
                    <p className="text-xs text-text">
                      Six categories, global reach.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Users className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Youth perspectives</p>
                    <p className="text-xs text-text">
                      Reported and edited by students.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Always fresh</p>
                    <p className="text-xs text-text">
                      Published continuously, not on deadline.
                    </p>
                  </div>
                </li>
              </ul>
            </aside>
          </div>

          {/* Bottom double rule closes the masthead block */}
          <hr className="rule-double-reverse" />
        </div>
      </section>

      {/* ══════════════ FEATURED ══════════════ */}
      {featured && (
        <section className="container py-16 sm:py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-brand">
                Featured
              </p>
              <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
                The story we're reading now
              </h2>
            </div>
            <Link
              href="/news"
              className="hidden text-sm font-medium text-ink/60 transition-colors hover:text-brand sm:inline-flex sm:items-center sm:gap-1 focus-brand rounded"
            >
              All stories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Link
            href={`/news/${featured.slug}`}
            className="group grid gap-8 overflow-hidden rounded-2xl border border-ink/10 bg-paper p-4 transition-shadow hover:shadow-lg sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8 focus-brand"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-feed lg:aspect-auto lg:h-full">
              <Image
                src={featured.coverImage}
                alt={featured.coverImageAlt}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <CategoryChip category={featured.category} size="md" />
              </div>
              <h3 className="font-serif text-2xl font-bold leading-tight text-ink transition-colors group-hover:text-brand sm:text-3xl lg:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-text sm:text-lg">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-ink/60">
                <span className="font-medium text-ink">{featured.author}</span>
                <span aria-hidden>·</span>
                <time dateTime={featured.publishedAt}>
                  {formatDate(featured.publishedAt)}
                </time>
                <span aria-hidden>·</span>
                <span>{featured.readingMinutes} min read</span>
              </div>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand">
                Read the full story{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ══════════════ LATEST ══════════════ */}
      <section className="container pb-16 sm:pb-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-brand">
              Latest
            </p>
            <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
              More from the newsroom
            </h2>
          </div>
          <Link
            href="/news"
            className="text-sm font-medium text-ink/60 transition-colors hover:text-brand inline-flex items-center gap-1 focus-brand rounded"
          >
            All stories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* ══════════════ MISSION STRIP ══════════════ */}
      <section className="container pb-24">
        <div className="rounded-2xl bg-ink px-6 py-14 text-center text-paper sm:px-12 sm:py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-data">
            Our mission
          </p>
          <p className="mx-auto max-w-3xl font-serif text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
            Don't just scroll. Question what shows up — and notice what doesn't.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-sm text-paper/70 sm:text-base">
            UGS is built by students, for students. Six categories. 100%
            fact-checked. No ads, no algorithms.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="brand">
              <Link href="/about">
                How we work <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
