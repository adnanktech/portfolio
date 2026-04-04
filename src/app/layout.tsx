import type { Metadata } from "next";
import { Inter , Big_Shoulders } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],

})




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
      suppressHydrationWarning
      // 2. KEEP THIS: It loads your fonts correctly
      className={`${inter.variable} ${bigShoulders.variable} antialiased`}
    >
      {/* 3. CLEAN THIS: Added 'bg-white text-slate-900' (or dark equivalent) 
          to ensure a clean starting background */}
      <body className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
