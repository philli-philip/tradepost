import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "Idle Clans' trading post",
  description:
    "Get the most recent trading data to make the most out of your game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-950`}
      >
        <main className="font-[family-name:var(--font-geist-sans)] py-8 md:px-4 max-w-5xl mx-auto">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
