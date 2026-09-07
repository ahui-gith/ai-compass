import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Compass — AI 产品导航",
  description: "收集、罗列市面上的优质 AI 产品，帮助开发者快速找到所需工具。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
