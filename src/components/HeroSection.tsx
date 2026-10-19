import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Globe2,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { NavItemKey } from '../types';

interface HeroSectionProps {
  onNavigate: (id: NavItemKey) => void;
  onOpenQuote: () => void;
  onOpenSearch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const heroSceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = heroSceneRef.current;
    if (!scene || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 30;
      const y = (event.clientY / window.innerHeight - 0.5) * 30;
      scene.style.setProperty('--parallax-x', `${x}px`);
      scene.style.setProperty('--parallax-y', `${y}px`);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-[#02353C] via-[#03444D] to-[#0E544B] text-white"
    >
      {/* Brand Aurora Glows (Teal-Navy, Emerald Green & Bright Turquoise) */}
      <div ref={heroSceneRef} className="hero-ambient absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-parallax absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full bg-gradient-to-b from-[#3FD0C9]/25 via-[#2EAF7D]/35 to-transparent blur-[140px]" />
        <div className="hero-parallax absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#2EAF7D]/25 blur-[130px]" />
        <div className="hero-parallax absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-[#3FD0C9]/20 blur-[150px]" />
        <div className="absolute inset-0 bg-cyber-grid opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Badges: Brand Essence & PEC / SECP Status */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#02353C]/95 border border-[#3FD0C9]/40 text-[#C1F6ED] text-xs font-semibold backdrop-blur-md shadow-lg shadow-[#011E22]/60">
            <span className="w-2 h-2 rounded-full bg-[#2EAF7D] animate-pulse" />
            <span className="font-mono text-[#3FD0C9] font-bold">PEC CONTRACTOR</span>
            <span className="text-[#C1F6ED]/40">•</span>
            <span className="text-white">Initiated Jan 2014</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#02353C]/85 border border-[#2EAF7D]/40 text-[#C1F6ED] text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#3FD0C9]" />
            <span>SECP &amp; PSEB Registered (CUIN: 0262294)</span>
          </div>
        </div>

        {/* Two-Column Layout: Real Hero Text & Interactive Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Real Summary from PDF */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <h1 className="font-['Outfit'] text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white">
                Welcome to <span className="blue-gradient-text">The Premier</span>
              </h1>
            </div>

            {/* Real Hero Description from PDF Page 1 */}
            <p className="text-slate-100 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
              {COMPANY_INFO.heroSummary}
            </p>

            {/* CTA Action Buttons in gradient green tones (#2EAF7D to #3FD0C9) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-services-solutions-btn"
                onClick={() => onNavigate('services')}
                className="is-style-gradient px-8 py-4 rounded-2xl text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 group relative overflow-hidden shadow-lg shadow-[#2EAF7D]/35"
              >
                <span>Services and Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                id="hero-website-btn"
                href={COMPANY_INFO.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 rounded-2xl bg-[#02353C]/80 hover:bg-[#03444D] text-white hover:text-[#C1F6ED] font-bold text-sm sm:text-base border border-[#3FD0C9]/35 hover:border-[#3FD0C9]/70 hover:shadow-[0_0_20px_rgba(63,208,201,0.3)] transition-all flex items-center justify-center gap-2.5 backdrop-blur-md"
              >
                <Globe2 className="w-4 h-4 text-[#3FD0C9]" />
                <span>thepremierss.com</span>
              </a>
            </div>

            {/* Verified Foundation Highlights from PDF */}
            <div className="pt-4 border-t border-[#3FD0C9]/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-100">
                <CheckCircle2 className="w-4 h-4 text-[#2EAF7D] flex-shrink-0" />
                <span className="font-medium">PEC Registered Contractor</span>
              </div>
              <div className="flex items-center gap-2 text-slate-100">
                <CheckCircle2 className="w-4 h-4 text-[#3FD0C9] flex-shrink-0" />
                <span className="font-medium">SECP CUIN: {COMPANY_INFO.secpCuin}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-100">
                <CheckCircle2 className="w-4 h-4 text-[#C1F6ED] flex-shrink-0" />
                <span className="font-medium">PSEB Registered Firm</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Quality Corporate Image Without Overlay Text */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-[#3FD0C9]/35 shadow-2xl shadow-[#011E22]/90 bg-[#02353C]/80 group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85"
                alt="The Premier Corporate Engineering and Technology Headquarters"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
