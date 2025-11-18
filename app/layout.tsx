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
        <div className="flex min-h-screen bg-zinc-900 text-white">
          <aside className="w-[330px] p-6 bg-zinc-800 flex-shrink-0 h-screen sticky top-0">
            <HeroSection />
          </aside>
          <main className="flex-1 flex flex-col px-10 py-8">
            <NavBar />
            <section className="mt-10">
              {children} 
            </section>
          </main>
      </div>
      </body>
    </html>
  );
}
