import { Video, Article, CategoryInfo } from "@/types";

export const categories: CategoryInfo[] = [
  { name: "ビジネス", slug: "business", color: "bg-blue-500" },
  { name: "テクノロジー", slug: "technology", color: "bg-purple-500" },
  { name: "マネー", slug: "money", color: "bg-green-500" },
  { name: "キャリア", slug: "career", color: "bg-orange-500" },
  { name: "ライフスタイル", slug: "lifestyle", color: "bg-pink-500" },
  { name: "教育", slug: "education", color: "bg-yellow-500" },
];

export const videos: Video[] = [
  {
    id: "1",
    title: "2026年のAI最新トレンド｜ビジネスリーダーが知るべき5つのポイント",
    description:
      "AIの進化が加速する2026年、ビジネスリーダーが押さえておくべき最新トレンドを解説します。生成AI、自動化、データ活用の観点から、具体的な活用事例とともにお届けします。",
    thumbnailUrl: "https://picsum.photos/seed/video1/640/360",
    videoUrl: "https://example.com/video1.mp4",
    duration: "24:35",
    category: "テクノロジー",
    publishedAt: "2026-01-10",
    views: 15420,
    speaker: "田中 太郎",
  },
  {
    id: "2",
    title: "新NISA活用術｜プロが教える資産形成の始め方",
    description:
      "2024年から始まった新NISA制度を最大限活用するための戦略を、ファイナンシャルプランナーが詳しく解説。初心者でも始められる具体的なステップをご紹介します。",
    thumbnailUrl: "https://picsum.photos/seed/video2/640/360",
    videoUrl: "https://example.com/video2.mp4",
    duration: "32:10",
    category: "マネー",
    publishedAt: "2026-01-09",
    views: 28930,
    speaker: "鈴木 花子",
  },
  {
    id: "3",
    title: "スタートアップCEOの1日｜成功する起業家の時間管理術",
    description:
      "急成長スタートアップのCEOに密着。朝のルーティンから夜の振り返りまで、成功する起業家の時間の使い方を公開します。",
    thumbnailUrl: "https://picsum.photos/seed/video3/640/360",
    videoUrl: "https://example.com/video3.mp4",
    duration: "18:45",
    category: "キャリア",
    publishedAt: "2026-01-08",
    views: 12050,
    speaker: "佐藤 健一",
  },
  {
    id: "4",
    title: "グローバル経済2026｜日本企業が取るべき戦略とは",
    description:
      "世界経済の動向と日本企業への影響を分析。為替、金利、地政学リスクを踏まえた経営戦略について専門家が議論します。",
    thumbnailUrl: "https://picsum.photos/seed/video4/640/360",
    videoUrl: "https://example.com/video4.mp4",
    duration: "45:20",
    category: "ビジネス",
    publishedAt: "2026-01-07",
    views: 8920,
    speaker: "山田 一郎",
  },
  {
    id: "5",
    title: "リモートワーク時代の健康管理｜在宅でも健康を保つ秘訣",
    description:
      "リモートワークが定着した今、運動不足や生活リズムの乱れに悩む人が増加。専門家が教える、在宅勤務でも健康を維持するための実践的なアドバイス。",
    thumbnailUrl: "https://picsum.photos/seed/video5/640/360",
    videoUrl: "https://example.com/video5.mp4",
    duration: "21:15",
    category: "ライフスタイル",
    publishedAt: "2026-01-06",
    views: 19340,
    speaker: "伊藤 美咲",
  },
  {
    id: "6",
    title: "MBA不要論？｜これからのビジネス教育を考える",
    description:
      "従来のMBA教育は本当に必要なのか？オンライン学習やマイクロクレデンシャルの台頭で変わりゆくビジネス教育の未来を考察します。",
    thumbnailUrl: "https://picsum.photos/seed/video6/640/360",
    videoUrl: "https://example.com/video6.mp4",
    duration: "38:50",
    category: "教育",
    publishedAt: "2026-01-05",
    views: 7650,
    speaker: "中村 学",
  },
];

export const articles: Article[] = [
  {
    id: "1",
    title: "ChatGPTを超える？2026年注目のAIスタートアップ10選",
    excerpt:
      "OpenAI一強時代の終焉か。2026年に急成長が期待されるAIスタートアップを徹底分析。",
    content: `
## はじめに

2023年のChatGPT登場から3年。AI業界は急速な進化を遂げ、新たなプレイヤーが次々と台頭しています。

## 注目のAIスタートアップ

### 1. Anthropic
Claude AIを開発するAnthropicは、安全性を重視したAI開発で注目を集めています。

### 2. Mistral AI
フランス発のスタートアップで、オープンソースの大規模言語モデルを提供しています。

### 3. Cohere
エンタープライズ向けのAIソリューションに特化し、急成長を遂げています。

## まとめ

AI業界の競争は激化しており、今後も新たなイノベーションが期待されます。
    `,
    thumbnailUrl: "https://picsum.photos/seed/article1/640/360",
    category: "テクノロジー",
    publishedAt: "2026-01-10",
    readTime: 8,
    author: "編集部",
  },
  {
    id: "2",
    title: "円安時代の資産防衛術｜外貨建て投資の始め方",
    excerpt:
      "円の価値が揺らぐ中、資産を守るための外貨建て投資について初心者にもわかりやすく解説。",
    content: `
## 円安が続く理由

日米金利差や貿易収支の影響で、円安傾向が続いています。

## 外貨建て投資の選択肢

### 外貨預金
最も手軽に始められる外貨投資の方法です。

### 外貨建てMMF
外貨預金よりも高い利回りが期待できます。

### 米国株投資
為替リスクと株式リスクを両方取りますが、高いリターンが期待できます。

## リスク管理の重要性

為替変動リスクを理解し、分散投資を心がけましょう。
    `,
    thumbnailUrl: "https://picsum.photos/seed/article2/640/360",
    category: "マネー",
    publishedAt: "2026-01-09",
    readTime: 6,
    author: "山本 直樹",
  },
  {
    id: "3",
    title: "転職市場2026｜求められるスキルと成功の秘訣",
    excerpt:
      "DX人材の需要は依然高く、未経験からのキャリアチェンジも可能。最新の転職市場動向を解説。",
    content: `
## 2026年の転職市場概況

人手不足が続く中、転職市場は売り手市場が続いています。

## 求められるスキル

### テクニカルスキル
プログラミング、データ分析、クラウド技術などが引き続き高い需要があります。

### ソフトスキル
コミュニケーション能力、リーダーシップ、問題解決能力も重視されています。

## 成功する転職活動のポイント

1. 自己分析を徹底する
2. 業界研究を怠らない
3. 面接準備を入念に行う
    `,
    thumbnailUrl: "https://picsum.photos/seed/article3/640/360",
    category: "キャリア",
    publishedAt: "2026-01-08",
    readTime: 5,
    author: "田中 誠",
  },
  {
    id: "4",
    title: "サステナビリティ経営の最前線｜ESG投資の今",
    excerpt:
      "企業のサステナビリティへの取り組みが投資判断に与える影響とは。ESG経営の最新動向を追う。",
    content: `
## ESG投資とは

環境（Environment）、社会（Social）、ガバナンス（Governance）を重視した投資手法です。

## 日本企業の取り組み

### 脱炭素への挑戦
2050年カーボンニュートラル達成に向けた取り組みが加速しています。

### ダイバーシティ推進
女性管理職比率の向上など、多様性への取り組みも進んでいます。

## 投資家の視点

ESGスコアが高い企業への投資が増加傾向にあります。
    `,
    thumbnailUrl: "https://picsum.photos/seed/article4/640/360",
    category: "ビジネス",
    publishedAt: "2026-01-07",
    readTime: 7,
    author: "高橋 真由美",
  },
  {
    id: "5",
    title: "デジタルデトックスのすすめ｜スマホ依存から抜け出す方法",
    excerpt:
      "常にスマホを手放せない現代人へ。心身の健康を取り戻すデジタルデトックスの実践法。",
    content: `
## スマホ依存の実態

1日の平均スマホ利用時間は4時間を超え、依存が社会問題化しています。

## デジタルデトックスの効果

### 睡眠の質向上
就寝前のスマホ使用を控えることで、睡眠の質が改善します。

### 集中力アップ
通知に邪魔されない時間を作ることで、深い集中が可能になります。

## 実践方法

1. 通知をオフにする
2. スマホを置く場所を決める
3. デジタルデトックス時間を設ける
    `,
    thumbnailUrl: "https://picsum.photos/seed/article5/640/360",
    category: "ライフスタイル",
    publishedAt: "2026-01-06",
    readTime: 4,
    author: "木村 健太",
  },
  {
    id: "6",
    title: "リスキリング最前線｜40代からのプログラミング学習",
    excerpt:
      "年齢を理由に諦めていませんか？40代からでも遅くない、プログラミング学習の始め方。",
    content: `
## なぜ40代からプログラミングなのか

DX推進により、プログラミングスキルの需要は年々高まっています。

## 学習のポイント

### 目標を明確にする
何を作りたいのか、なぜ学ぶのかを明確にしましょう。

### 無理のないペースで
仕事と両立しながら、継続できるペースで学習を進めます。

## おすすめの学習リソース

1. オンライン学習プラットフォーム
2. プログラミングスクール
3. 書籍とハンズオン
    `,
    thumbnailUrl: "https://picsum.photos/seed/article6/640/360",
    category: "教育",
    publishedAt: "2026-01-05",
    readTime: 6,
    author: "渡辺 智子",
  },
];

export function getVideoById(id: string): Video | undefined {
  return videos.find((video) => video.id === id);
}

export function getArticleById(id: string): Article | undefined {
  return articles.find((article) => article.id === id);
}

export function formatViews(views: number): string {
  if (views >= 10000) {
    return `${(views / 10000).toFixed(1)}万`;
  }
  return views.toLocaleString();
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}
