import { Metadata } from "next";
import { articles, categories } from "@/data/sample";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "記事一覧 | BooPicks",
  description: "ビジネスに役立つ記事コンテンツを毎日配信。テクノロジー、マネー、キャリアなど幅広いジャンルをカバー。",
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">記事</h1>
          <p className="text-gray-600 max-w-2xl">
            ビジネスの最新トレンドから実践的なノウハウまで。
            専門家が書き下ろす記事コンテンツをお届けします。
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              すべて
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
              もっと見る
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
