import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types";
import { formatDate } from "@/data/sample";
import CategoryBadge from "./CategoryBadge";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({
  article,
  featured = false,
}: ArticleCardProps) {
  if (featured) {
    return (
      <Link href={`/articles/${article.id}`} className="group block">
        <div className="grid md:grid-cols-2 gap-6 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
          <div className="relative aspect-video md:aspect-auto">
            <Image
              src={article.thumbnailUrl}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <CategoryBadge category={article.category} />
            <h3 className="text-2xl font-bold text-gray-900 mt-3 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <span>{article.author}</span>
              <span>・</span>
              <span>{formatDate(article.publishedAt)}</span>
              <span>・</span>
              <span>{article.readTime}分で読める</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/articles/${article.id}`} className="group block">
      <div className="relative aspect-video overflow-hidden rounded-xl mb-3">
        <Image
          src={article.thumbnailUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Article Icon */}
        <div className="absolute top-2 right-2 bg-white/90 p-2 rounded-lg">
          <svg
            className="w-4 h-4 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
      </div>

      <CategoryBadge category={article.category} size="sm" />
      <h3 className="font-bold text-gray-900 mt-2 mb-1 line-clamp-2 group-hover:text-indigo-600 transition-colors">
        {article.title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-2 mb-2">{article.excerpt}</p>
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <span>{article.author}</span>
        <span>・</span>
        <span>{article.readTime}分</span>
      </div>
    </Link>
  );
}
