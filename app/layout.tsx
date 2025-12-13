import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeroSection from "@/components/elements/hero-section";
import NavBar from "@/components/elements/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaurang Khator",
  description: "Developed by Gaurang Khator",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col md:flex-row min-h-screen bg-zinc-900 text-white">
          <aside className="w-full md:w-[460px] p-4 md:p-6 bg-zinc-900 md:shrink-0 md:h-screen md:sticky md:top-0">
            <HeroSection />
          </aside>
          <main className="flex-1 flex flex-col px-4 md:px-10 py-6 md:py-8 pb-8 md:pb-8">
            <NavBar />
            <section className="mt-6 md:mt-10">
              {children} 
            </section>
          </main>
      </div>
      </body>
    </html>
  );
}
