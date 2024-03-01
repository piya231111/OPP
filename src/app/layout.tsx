import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "สัตว์เลี้ยงของคนไทย",
  description: "5 อันดับ สัตวเลี้ยงที่เป็นที่นิยมในไทย",
  icons: {
    icon: ['/icons/favicon.ico?v=4'],
    apple:['/icons/apple-touch-icon.png?v=4'],
    shortcut:['/icons/apple-touch-icon.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
