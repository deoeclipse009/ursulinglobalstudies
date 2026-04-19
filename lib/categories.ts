import type { Category } from "@/content/types";

export const CATEGORY_COLOR: Record<Category, { bg: string; text: string; hex: string }> = {
  Environment: { bg: "bg-cat-environment", text: "text-white", hex: "#2C9B66" },
  Economy: { bg: "bg-cat-economy", text: "text-white", hex: "#6E7A87" },
  Politics: { bg: "bg-cat-politics", text: "text-ink", hex: "#F2C94C" },
  "Hype/Trend": { bg: "bg-cat-hype", text: "text-white", hex: "#8B5CF6" },
  "Technology/AI": { bg: "bg-cat-tech", text: "text-white", hex: "#3B82F6" },
  Health: { bg: "bg-cat-health", text: "text-white", hex: "#E63946" },
};
