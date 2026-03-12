'use client';

import { useEffect, useState } from 'react';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text animation after a brief delay
    const textTimer = setTimeout(() => setShowText(true), 300);
    return () => clearTimeout(textTimer);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVisible(false);
    // Give animation time to complete before calling onComplete
    setTimeout(() => onComplete(), 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e as any);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 cursor-pointer overflow-hidden"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Click to enter portfolio"
    >
   
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 md:px-8">
       
        <div
          className={`transition-all duration-1000 transform ${
            showText ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            GAURANG KHATOR
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 transform ${
            showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-blue-400 font-light tracking-wide">
            <i>Software Developer</i>
          </p>
        </div>

        <div
          className={`mt-8 md:mt-12 transition-all duration-1000 delay-500 ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-gray-400 text-sm md:text-base animate-pulse">
            Click anywhere to continue
          </p>
        </div>
      </div>

      {/* Subtle animation line */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div
          className={`w-8 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-1000 ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default IntroScreen;
