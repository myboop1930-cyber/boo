import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BooPicks - ビジネス動画＆記事メディア",
  description:
    "ビジネスに役立つ動画と記事を毎日配信。キャリアアップ、マネー、テクノロジーなど、あなたの成長を支援するコンテンツをお届けします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased bg-gray-50">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
