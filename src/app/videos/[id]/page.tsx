import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVideoById, videos, formatViews, formatDate } from "@/data/sample";
import CategoryBadge from "@/components/CategoryBadge";
import VideoCard from "@/components/VideoCard";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const video = getVideoById(resolvedParams.id);

  if (!video) {
    return {
      title: "動画が見つかりません | BooPicks",
    };
  }

  return {
    title: `${video.title} | BooPicks`,
    description: video.description,
  };
}

export default async function VideoDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const video = getVideoById(resolvedParams.id);

  if (!video) {
    notFound();
  }

  const relatedVideos = videos
    .filter((v) => v.id !== video.id && v.category === video.category)
    .slice(0, 3);

  const otherVideos = videos
    .filter(
      (v) => v.id !== video.id && !relatedVideos.find((rv) => rv.id === v.id)
    )
    .slice(0, 3);

  const recommendedVideos =
    relatedVideos.length >= 3
      ? relatedVideos
      : [...relatedVideos, ...otherVideos].slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Video Player Section */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-video">
            <Image
              src={video.thumbnailUrl}
              alt={video.title}
              fill
              className="object-cover"
              priority
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors hover:scale-105 duration-300">
                <svg
                  className="w-12 h-12 text-indigo-600 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            {/* Duration */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
              {video.duration}
            </div>
          </div>
        </div>
      </section>

      {/* Video Info */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          <CategoryBadge category={video.category} />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4 mb-4">
            {video.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-6">
            {video.speaker && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span className="font-medium text-gray-700">
                  {video.speaker}
                </span>
              </div>
            )}
            <span>{formatViews(video.views)}回視聴</span>
            <span>{formatDate(video.publishedAt)}</span>
          </div>

          <p className="text-gray-600 leading-relaxed">{video.description}</p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              保存
            </button>
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              共有
            </button>
          </div>
        </div>
      </section>

      {/* Related Videos */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">関連動画</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recommendedVideos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/videos"
              className="text-indigo-600 font-medium hover:text-indigo-700"
            >
              すべての動画を見る →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
