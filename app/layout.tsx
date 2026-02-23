import { Header } from "@/components/layout/header";
import { SessionProviderWrapper } from "@/components/providers/SessionProviderWrapper";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://booknote.site";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Booknote - 독서 노트와 인용구",
    template: "%s | Booknote",
  },
  description:
    "독서를 기록하고, 인용구와 노트로 기억을 남기는 개인 독서 관리 서비스입니다.",
  keywords: ["독서", "독서 노트", "인용구", "책 기록", "독서 관리"],
  authors: [{ name: "Booknote" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: baseUrl,
    siteName: "Booknote",
    title: "Booknote - 독서 노트와 인용구",
    description:
      "독서를 기록하고, 인용구와 노트로 기억을 남기는 개인 독서 관리 서비스입니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Booknote - 독서 노트와 인용구",
    description:
      "독서를 기록하고, 인용구와 노트로 기억을 남기는 개인 독서 관리 서비스입니다.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Booknote",
    description:
      "독서를 기록하고, 인용구와 노트로 기억을 남기는 개인 독서 관리 서비스입니다.",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    url: baseUrl,
  };

  return (
    <html lang="ko">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SessionProviderWrapper>
          <Header />
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
