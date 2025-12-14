'use client';

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeroSection from "@/components/elements/hero-section";
import NavBar from "@/components/elements/NavBar";

import About from "./sections/about/page";
import Skills from "./sections/skills/page";
import Projects from "./sections/projects/page";
import Certifications from "./sections/certifications/page";
import Achievements from "./sections/achievements/page";
import Education from "./sections/education/page";
import Resume from "./sections/resume/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'certifications':
        return <Certifications />;
      case 'achievements':
        return <Achievements />;
      case 'education':
        return <Education />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <html lang="en">
      <head>
        <title>Gaurang Khator</title>
        <meta name="description" content="Developed by Gaurang Khator" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col md:flex-row min-h-screen bg-zinc-900 text-white">
          <aside className="w-full md:w-[460px] p-4 md:p-6 bg-zinc-900 md:shrink-0 md:h-screen md:sticky md:top-0">
            <HeroSection />
          </aside>
          <main className="flex-1 flex flex-col px-4 md:px-10 py-6 md:py-8 pb-8 md:pb-8">
            <NavBar activeSection={activeSection} onNavigate={setActiveSection} />
            <section className="mt-6 md:mt-10">
              {renderSection()}
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}