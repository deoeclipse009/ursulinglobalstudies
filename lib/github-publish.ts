import "server-only";
import type { Article } from "@/content/types";

/**
 * Publishes an article by committing to GitHub, which triggers the normal
 * site deploy (e.g. Vercel). One commit contains the updated
 * content/published-articles.json and, optionally, the cover image.
 *
 * Env: GITHUB_TOKEN (fine-grained token, "Contents: read and write" on this
 * repo only), GITHUB_REPO ("owner/name"), GITHUB_BRANCH (default "main").
 */
const ARTICLES_PATH = "content/published-articles.json";

export function publishingConfigured() {
  return Boolean(process.env.GITHUB_TOKEN && process.env.GITHUB_REPO);
}

async function gh<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPO}${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "x-github-api-version": "2022-11-28",
      ...(init?.body ? { "content-type": "application/json" } : {}),
      ...(init?.headers as Record<string, string> | undefined),
    },
  });
  if (!res.ok) {
    const err = new Error(`GitHub ${init?.method ?? "GET"} ${path} failed: ${res.status} ${(await res.text()).slice(0, 300)}`);
    (err as Error & { status?: number }).status = res.status;
    throw err;
  }
  return (await res.json()) as T;
}

export interface PublishInput {
  article: Article;
  cover?: { base64: string; extension: string };
  /** Replace an existing article with the same slug instead of failing. */
  overwrite: boolean;
}

export interface PublishResult {
  commitUrl: string;
  updated: boolean;
}

export async function publishArticle(input: PublishInput): Promise<PublishResult> {
  if (!publishingConfigured()) {
    throw new Error("Publishing isn't configured: set GITHUB_TOKEN and GITHUB_REPO.");
  }
  // Retry once if someone else pushed between our read and our ref update.
  try {
    return await commitOnce(input);
  } catch (e) {
    if ((e as { status?: number }).status === 422) return commitOnce(input);
    throw e;
  }
}

async function commitOnce({ article, cover, overwrite }: PublishInput): Promise<PublishResult> {
  const branch = process.env.GITHUB_BRANCH || "main";
  const ref = await gh<{ object: { sha: string } }>(`/git/ref/heads/${branch}`);
  const headSha = ref.object.sha;
  const head = await gh<{ tree: { sha: string } }>(`/git/commits/${headSha}`);

  // Raw media type: works past the 1 MB limit of the base64 contents response.
  const existing = await gh<Article[]>(
    `/contents/${ARTICLES_PATH}?ref=${encodeURIComponent(headSha)}`,
    { headers: { accept: "application/vnd.github.raw+json" } },
  );
  const index = existing.findIndex((a) => a.slug === article.slug);
  if (index >= 0 && !overwrite) {
    throw new Error(`An article with slug "${article.slug}" already exists. Tick "replace existing" or change the slug.`);
  }

  if (!cover) {
    // Without an upload the article must point at an image already in the repo.
    try {
      await gh(`/contents/public${article.coverImage}?ref=${encodeURIComponent(headSha)}`);
    } catch {
      throw new Error(`Cover image ${article.coverImage} isn't in the repo yet. Attach a cover image.`);
    }
  }

  const tree: { path: string; mode: "100644"; type: "blob"; sha: string }[] = [];

  if (cover) {
    const imagePath = `public/images/${article.slug}.${cover.extension}`;
    const blob = await gh<{ sha: string }>(`/git/blobs`, {
      method: "POST",
      body: JSON.stringify({ content: cover.base64, encoding: "base64" }),
    });
    tree.push({ path: imagePath, mode: "100644", type: "blob", sha: blob.sha });
    article = { ...article, coverImage: `/images/${article.slug}.${cover.extension}` };
  }

  const next = [...existing];
  if (index >= 0) next[index] = article;
  else next.push(article);
  const jsonBlob = await gh<{ sha: string }>(`/git/blobs`, {
    method: "POST",
    body: JSON.stringify({ content: JSON.stringify(next, null, 2) + "\n", encoding: "utf-8" }),
  });
  tree.push({ path: ARTICLES_PATH, mode: "100644", type: "blob", sha: jsonBlob.sha });

  const newTree = await gh<{ sha: string }>(`/git/trees`, {
    method: "POST",
    body: JSON.stringify({ base_tree: head.tree.sha, tree }),
  });
  const commit = await gh<{ sha: string; html_url: string }>(`/git/commits`, {
    method: "POST",
    body: JSON.stringify({
      message: `${index >= 0 ? "Update" : "Add"} article: ${article.title}\n\nPublished from the UGS admin page.`,
      tree: newTree.sha,
      parents: [headSha],
    }),
  });
  await gh(`/git/refs/heads/${branch}`, {
    method: "PATCH",
    body: JSON.stringify({ sha: commit.sha, force: false }),
  });
  return { commitUrl: commit.html_url, updated: index >= 0 };
}
