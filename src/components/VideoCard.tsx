import Link from "next/link";
import Image from "next/image";
import { Video } from "@/types";
import { formatViews, formatDate } from "@/data/sample";
import CategoryBadge from "./CategoryBadge";

interface VideoCardProps {
  video: Video;
  featured?: boolean;
}

export default function VideoCard({ video, featured = false }: VideoCardProps) {
  if (featured) {
    return (
      <Link href={`/videos/${video.id}`} className="group block">
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors group-hover:scale-110 duration-300">
              <svg className="w-8 h-8 text-indigo-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Duration */}
          <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
            {video.duration}
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <CategoryBadge category={video.category} />
            <h3 className="text-2xl font-bold text-white mt-3 mb-2 line-clamp-2">
              {video.title}
            </h3>
            <p className="text-gray-200 text-sm line-clamp-2 mb-3">
              {video.description}
            </p>
            <div className="flex items-center gap-4 text-gray-300 text-sm">
              {video.speaker && <span>{video.speaker}</span>}
              <span>{formatViews(video.views)}回視聴</span>
              <span>{formatDate(video.publishedAt)}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/videos/${video.id}`} className="group block">
      <div className="relative aspect-video overflow-hidden rounded-xl mb-3">
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-indigo-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
          {video.duration}
        </div>
      </div>

      <CategoryBadge category={video.category} size="sm" />
      <h3 className="font-bold text-gray-900 mt-2 mb-1 line-clamp-2 group-hover:text-indigo-600 transition-colors">
        {video.title}
      </h3>
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <span>{formatViews(video.views)}回視聴</span>
        <span>・</span>
        <span>{formatDate(video.publishedAt)}</span>
      </div>
    </Link>
  );
}
