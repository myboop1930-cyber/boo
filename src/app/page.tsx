import Link from "next/link";
import { videos, articles, categories } from "@/data/sample";
import VideoCard from "@/components/VideoCard";
import ArticleCard from "@/components/ArticleCard";

export default function Home() {
  const featuredVideo = videos[0];
  const latestVideos = videos.slice(1, 4);
  const featuredArticle = articles[0];
  const latestArticles = articles.slice(1, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ビジネスの最前線を、
              <br />
              動画と記事で。
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              BooPicksは、テクノロジー、マネー、キャリアなど
              <br className="hidden sm:block" />
              ビジネスに役立つ情報を動画と記事で毎日配信するメディアです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/videos"
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                動画を見る
              </Link>
              <Link
                href="/articles"
                className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                記事を読む
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.slug}
                className={`${category.color} text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">注目の動画</h2>
            <Link
              href="/videos"
              className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-1"
            >
              すべて見る
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <VideoCard video={featuredVideo} featured />

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {latestVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">注目の記事</h2>
            <Link
              href="/articles"
              className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-1"
            >
              すべて見る
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <ArticleCard article={featuredArticle} featured />

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              最新情報をお届けします
            </h2>
            <p className="text-white/90 mb-8">
              毎週、厳選されたビジネストピックスと注目コンテンツをメールでお届け。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="メールアドレス"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                登録する
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">動画コンテンツ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                1,000+
              </div>
              <div className="text-gray-600">記事コンテンツ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                50万+
              </div>
              <div className="text-gray-600">月間視聴者</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                100+
              </div>
              <div className="text-gray-600">専門家パートナー</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
