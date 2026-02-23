import { AuthPage } from "@/components/auth/AuthPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인",
  description: "Booknote에 로그인하여 독서 노트와 인용구를 관리하세요.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <AuthPage />;
}
