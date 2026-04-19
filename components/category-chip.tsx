import type { Category } from "@/content/types";
import { CATEGORY_COLOR } from "@/lib/categories";
import { cn } from "@/lib/utils";

interface CategoryChipProps {
  category: Category;
  size?: "sm" | "md";
  className?: string;
}

export function CategoryChip({ category, size = "sm", className }: CategoryChipProps) {
  const style = CATEGORY_COLOR[category];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-semibold uppercase tracking-wide",
        style.bg,
        style.text,
        size === "sm" ? "px-2.5 py-1 text-[10px]" : "px-3 py-1.5 text-xs",
        className,
      )}
    >
      {category}
    </span>
  );
}
