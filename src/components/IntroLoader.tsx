import React, { useState, useEffect } from 'react';
import { PremierLogo } from './PremierLogo';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Zap } from 'lucide-react';

interface IntroLoaderProps {
  onComplete: () => void;
  isOpen: boolean;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete, isOpen }) => {
  const [progress, setProgress] = useState<number>(0);
  const [stage, setStage] = useState<'loading' | 'revealing' | 'complete'>('loading');

  useEffect(() => {
    if (!isOpen) {
      setProgress(100);
      setStage('complete');
      return;
    }

    setProgress(0);
    setStage('loading');

    // Smooth easing progress counter simulation
    const startTime = Date.now();
    const duration = 2200; // 2.2s smooth loader

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      
      // Easing curve (power3.out style)
      const t = elapsed / duration;
      const easedProgress = Math.min(100, Math.floor((1 - Math.pow(1 - Math.min(1, t), 3)) * 100));

      setProgress(easedProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        setProgress(100);
        setStage('revealing');

        // Allow reveal animations to play out then unmask site
        setTimeout(() => {
          setStage('complete');
          setTimeout(() => {
            onComplete();
          }, 600);
        }, 1200);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isOpen, onComplete]);

  if (!isOpen && stage === 'complete') {
    return null;
  }

  // Circular progress math
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      id="premier-intro-loader"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#011E22] text-white transition-all duration-800 ${
        stage === 'complete' ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Cinematic Ambient Mesh and Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#01262B] via-[#3FD0C9]/30 to-transparent blur-[140px] animate-pulseGlow" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-[#449342]/20 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#449342]/10 blur-[120px]" />
        <div className="absolute inset-0 bg-cyber-grid opacity-30" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl">
        
        {/* Progress Radial Ring with Emblem Center */}
        <div className="relative w-44 h-44 flex items-center justify-center mb-8">
          {/* Background Track Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="rgba(31, 127, 216, 0.15)"
              strokeWidth="4"
              fill="none"
            />
            {/* Active Glowing Progress Ring */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="url(#loaderProgressGradient)"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="none"
              className="transition-all duration-75 ease-out"
            />
            <defs>
              <linearGradient id="loaderProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3FD0C9" />
                <stop offset="50%" stopColor="#3FD0C9" />
                <stop offset="100%" stopColor="#449342" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Stylized "P" Emblem */}
          <div className="relative z-10 transition-transform duration-700 ease-out hover:scale-110">
            <PremierLogo size="lg" showText={false} />
          </div>

          {/* Percentage Pill */}
          <div className="absolute -bottom-3 px-3.5 py-0.5 rounded-full bg-[#01262B]/90 border border-[#3FD0C9]/50 text-[11px] font-mono font-bold text-[#C1F6ED] shadow-lg shadow-[#3FD0C9]/30">
            {progress}%
          </div>
        </div>

        {/* Staggered Wordmark Mask Reveal Sequence */}
        <div className="space-y-3 overflow-hidden">
          {/* Word 1: THE PREMIER */}
          <div className="overflow-hidden">
            <h1
              className={`font-['Outfit'] text-3xl sm:text-5xl font-black tracking-[0.22em] text-white uppercase transition-all duration-700 delay-100 ease-out ${
                stage === 'revealing' || progress > 70
                  ? 'translate-y-0 opacity-100 scale-100 blur-none'
                  : 'translate-y-8 opacity-0 scale-90 blur-sm'
              }`}
            >
              <span className="blue-gradient-text">THE PREMIER</span>
            </h1>
          </div>

          {/* Line 2: SERVICES & SOLUTIONS */}
          <div className="overflow-hidden">
            <h2
              className={`font-['Plus_Jakarta_Sans'] text-xs sm:text-base font-bold uppercase tracking-[0.32em] text-[#C1F6ED] transition-all duration-700 delay-300 ease-out ${
                stage === 'revealing' || progress > 85
                  ? 'translate-y-0 opacity-100 blur-none'
                  : 'translate-y-6 opacity-0 blur-sm'
              }`}
            >
              SERVICES &amp; SOLUTIONS <span className="text-[#449342]">(PVT. LTD.)</span>
            </h2>
          </div>

          {/* Tagline Slider: Engineering & IT Excellence */}
          <div className="overflow-hidden pt-2">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#02353C]/80 border border-[#3FD0C9]/40 text-xs sm:text-sm font-semibold tracking-wider text-slate-200 transition-all duration-700 delay-500 ease-out ${
                stage === 'revealing' || progress >= 95
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#449342] animate-ping" />
              <span className="text-[#449342] font-mono">EST. JAN 2014</span>
              <span className="text-slate-400">•</span>
              <span className="text-white font-medium">PEC Registered Engineering Contractor</span>
            </div>
          </div>
        </div>

        {/* Quick Skip Control */}
        <button
          id="skip-intro-loader-btn"
          onClick={() => {
            setStage('complete');
            setTimeout(() => onComplete(), 200);
          }}
          className="mt-8 text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 opacity-60 hover:opacity-100"
        >
          <span>Skip Cinematic Intro</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
