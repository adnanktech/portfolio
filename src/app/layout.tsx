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

// 1. CHANGE THIS: Put your name/title here for SEO
export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Web Developer and Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // 2. KEEP THIS: It loads your fonts correctly
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {/* 3. CLEAN THIS: Added 'bg-white text-slate-900' (or dark equivalent) 
          to ensure a clean starting background */}
      <body className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 flex flex-col">
        {children}
      </body>
    </html>
  );
}
