import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.lanyao-energy.com"),
  title: {
    default: "北海蓝曜储能贸易有限公司 | 新能源储能进出口贸易服务商",
    template: "%s | 北海蓝曜储能贸易有限公司",
  },
  description: "北海蓝曜储能贸易有限公司专注储能设备进出口、光伏产品贸易、锂电池外贸、家用储能批发和一站式新能源贸易服务。",
  keywords: ["储能设备进出口", "光伏产品贸易", "锂电池外贸", "家用储能批发", "新能源贸易", "Energy Storage Trade"],
  openGraph: {
    siteName: "北海蓝曜储能贸易有限公司",
    type: "website",
    locale: "zh_CN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
