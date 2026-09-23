import { NextResponse } from "next/server";
import { availableProviders } from "@/lib/ai/convert";
import { publishingConfigured } from "@/lib/github-publish";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    providers: availableProviders(),
    publishing: publishingConfigured(),
    repo: process.env.GITHUB_REPO ?? null,
    branch: process.env.GITHUB_BRANCH || "main",
  });
}
