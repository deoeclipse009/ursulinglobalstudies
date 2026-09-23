import "server-only";
import type { Article } from "@/content/types";

/**
 * Publishes an article by committing to GitHub, which triggers the normal
 * site deploy (e.g. Vercel). One commit contains the updated
 * content/published-articles.json and, optionally, the cover image.
 *
 * Each editor publishes with their own GitHub settings: a fine-grained token
 * ("Contents: Read and write" on the site repo only), the repo ("owner/name")
 * and the branch the host deploys from.
 */
const ARTICLES_PATH = "content/published-articles.json";

export interface GithubTarget {
  githubToken: string | null;
  githubRepo: string | null;
  githubBranch: string;
}

export function publishingConfigured(t: GithubTarget) {
  return Boolean(t.githubToken && t.githubRepo);
}

/** Resolves if the token can push to the repo and the branch exists; throws a readable error otherwise. */
export async function checkGithubAccess(t: GithubTarget): Promise<string> {
  const repo = await gh<{ permissions?: { push?: boolean }; full_name: string }>(t, "");
  if (!repo.permissions?.push) throw new Error(`The token can read ${repo.full_name} but can't push to it.`);
  await gh(t, `/git/ref/heads/${t.githubBranch}`);
  return `OK: can publish to ${repo.full_name} (${t.githubBranch}).`;
}

async function gh<T>(t: GithubTarget, path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`https://api.github.com/repos/${t.githubRepo}${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${t.githubToken}`,
      "x-github-api-version": "2022-11-28",
      ...(init?.body ? { "content-type": "application/json" } : {}),
      ...(init?.headers as Record<string, string> | undefined),
    },
  });
  if (!res.ok) {
    const hint =
      res.status === 401 ? " (token invalid or expired)" : res.status === 404 ? " (repo/branch not found, or the token has no access to it)" : "";
    const err = new Error(`GitHub ${init?.method ?? "GET"} ${path || "/"} failed: ${res.status}${hint} ${(await res.text()).slice(0, 200)}`);
    (err as Error & { status?: number }).status = res.status;
    throw err;
  }
  return (await res.json()) as T;
}

export interface PublishInput {
  target: GithubTarget;
  /** Shown in the commit message. */
  publishedBy: string;
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
  if (!publishingConfigured(input.target)) {
    throw new Error("Add your GitHub token and repository on the Account page before publishing.");
  }
  // Retry once if someone else pushed between our read and our ref update.
  try {
    return await commitOnce(input);
  } catch (e) {
    if ((e as { status?: number }).status === 422) return commitOnce(input);
    throw e;
  }
}

async function commitOnce({ target: t, publishedBy, article, cover, overwrite }: PublishInput): Promise<PublishResult> {
  const branch = t.githubBranch || "main";
  const ref = await gh<{ object: { sha: string } }>(t, `/git/ref/heads/${branch}`);
  const headSha = ref.object.sha;
  const head = await gh<{ tree: { sha: string } }>(t, `/git/commits/${headSha}`);

  // Raw media type: works past the 1 MB limit of the base64 contents response.
  const existing = await gh<Article[]>(t, 
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
      await gh(t, `/contents/public${article.coverImage}?ref=${encodeURIComponent(headSha)}`);
    } catch {
      throw new Error(`Cover image ${article.coverImage} isn't in the repo yet. Attach a cover image.`);
    }
  }

  const tree: { path: string; mode: "100644"; type: "blob"; sha: string }[] = [];

  if (cover) {
    const imagePath = `public/images/${article.slug}.${cover.extension}`;
    const blob = await gh<{ sha: string }>(t, `/git/blobs`, {
      method: "POST",
      body: JSON.stringify({ content: cover.base64, encoding: "base64" }),
    });
    tree.push({ path: imagePath, mode: "100644", type: "blob", sha: blob.sha });
    article = { ...article, coverImage: `/images/${article.slug}.${cover.extension}` };
  }

  const next = [...existing];
  if (index >= 0) next[index] = article;
  else next.push(article);
  const jsonBlob = await gh<{ sha: string }>(t, `/git/blobs`, {
    method: "POST",
    body: JSON.stringify({ content: JSON.stringify(next, null, 2) + "\n", encoding: "utf-8" }),
  });
  tree.push({ path: ARTICLES_PATH, mode: "100644", type: "blob", sha: jsonBlob.sha });

  const newTree = await gh<{ sha: string }>(t, `/git/trees`, {
    method: "POST",
    body: JSON.stringify({ base_tree: head.tree.sha, tree }),
  });
  const commit = await gh<{ sha: string; html_url: string }>(t, `/git/commits`, {
    method: "POST",
    body: JSON.stringify({
      message: `${index >= 0 ? "Update" : "Add"} article: ${article.title}\n\nPublished by ${publishedBy} from the UGS admin page.`,
      tree: newTree.sha,
      parents: [headSha],
    }),
  });
  await gh(t, `/git/refs/heads/${branch}`, {
    method: "PATCH",
    body: JSON.stringify({ sha: commit.sha, force: false }),
  });
  return { commitUrl: commit.html_url, updated: index >= 0 };
}
