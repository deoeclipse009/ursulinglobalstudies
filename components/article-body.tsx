import type { ContentBlock } from "@/content/types";
import { ArrowRight } from "lucide-react";

interface ArticleBodyProps {
  blocks: ContentBlock[];
}

export function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className="prose-article">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} dangerouslySetInnerHTML={{ __html: block.html }} />
            );

          case "heading": {
            const className =
              block.level === 2
                ? "mt-10 mb-5 text-2xl font-bold leading-tight text-ink sm:text-3xl"
                : "mt-8 mb-3 text-xl font-semibold text-ink";
            return block.level === 2 ? (
              <h2 key={i} className={className}>
                {block.text}
              </h2>
            ) : (
              <h3 key={i} className={className}>
                {block.text}
              </h3>
            );
          }

          case "eyebrow":
            return (
              <p
                key={i}
                className="mb-3 mt-10 text-xs font-bold uppercase tracking-[0.12em] text-brand"
              >
                {block.text}
              </p>
            );

          case "callout":
            return (
              <blockquote
                key={i}
                className="my-8 border-l-4 border-brand bg-brand/[0.04] py-4 pl-5 pr-4"
              >
                <p
                  className="m-0 text-base font-semibold leading-relaxed text-ink sm:text-lg"
                  dangerouslySetInnerHTML={{ __html: block.html }}
                />
              </blockquote>
            );

          case "quote":
            return (
              <figure key={i} className="my-10 rounded-xl bg-ink px-6 py-8 text-center sm:px-10 sm:py-10">
                <blockquote>
                  <p
                    className="text-lg font-semibold leading-snug text-paper sm:text-xl"
                    dangerouslySetInnerHTML={{ __html: block.html }}
                  />
                </blockquote>
              </figure>
            );

          case "list":
            return (
              <div
                key={i}
                className="my-7 rounded-xl border border-ink/10 bg-feed/40 p-5 sm:p-6"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-brand">
                  Why this actually matters
                </p>
                <ul className="space-y-3">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <ArrowRight
                        className="mt-1 h-4 w-4 flex-shrink-0 text-brand"
                        aria-hidden
                      />
                      <span className="text-sm leading-relaxed text-text sm:text-base">
                        <strong className="font-semibold text-ink">
                          {item.label}
                        </strong>{" "}
                        — {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );

          case "statsGrid":
            return (
              <div
                key={i}
                className="my-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {block.items.map((item, j) => (
                  <div
                    key={j}
                    className="rounded-lg border border-ink/10 bg-paper px-4 py-3"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-brand">
                      {item.flag && <span className="text-base">{item.flag}</span>}
                      <span>{item.label}</span>
                    </div>
                    <p className="mt-1 text-sm text-text">{item.value}</p>
                  </div>
                ))}
              </div>
            );

          case "divider":
            return <hr key={i} className="my-10 border-ink/10" />;

          case "sources":
            return (
              <div key={i} className="mt-12 border-t border-ink/10 pt-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-ink/60">
                  Sources
                </p>
                <ol className="list-decimal space-y-2 pl-5 text-sm text-text/80">
                  {block.items.map((src, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: src }} />
                  ))}
                </ol>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
