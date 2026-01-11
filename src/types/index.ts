export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  category: Category;
  publishedAt: string;
  views: number;
  speaker?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnailUrl: string;
  category: Category;
  publishedAt: string;
  readTime: number;
  author: string;
}

export type Category =
  | "ビジネス"
  | "テクノロジー"
  | "マネー"
  | "キャリア"
  | "ライフスタイル"
  | "教育";

export interface CategoryInfo {
  name: Category;
  slug: string;
  color: string;
}
