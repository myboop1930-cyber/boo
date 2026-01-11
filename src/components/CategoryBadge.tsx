import { Category } from "@/types";
import { categories } from "@/data/sample";

interface CategoryBadgeProps {
  category: Category;
  size?: "sm" | "md";
}

export default function CategoryBadge({
  category,
  size = "md",
}: CategoryBadgeProps) {
  const categoryInfo = categories.find((c) => c.name === category);
  const colorClass = categoryInfo?.color || "bg-gray-500";

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
  };

  return (
    <span
      className={`inline-block ${colorClass} text-white rounded-full font-medium ${sizeClasses[size]}`}
    >
      {category}
    </span>
  );
}
