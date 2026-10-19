import React from 'react';
import {
  Search,
  Layers,
  FileCheck,
  ArrowUp,
} from 'lucide-react';
import { NavItemKey } from '../types';

interface FloatingDockProps {
  onNavigate: (id: NavItemKey) => void;
  onOpenSearch: () => void;
  onOpenQuote: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({
  onNavigate,
  onOpenSearch,
  onOpenQuote,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="floating-action-dock"
      className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-40 px-3.5 py-2 rounded-full bg-[#01262B]/90 backdrop-blur-2xl border border-[#3FD0C9]/40 shadow-2xl shadow-[#011E22]/80 flex items-center gap-1.5 sm:gap-2 transition-all duration-300 hover:scale-[1.02] text-white"
    >
      {/* Search Trigger */}
      <button
        id="dock-search-btn"
        onClick={onOpenSearch}
        className="p-2 sm:px-3 sm:py-1.5 rounded-full hover:bg-[#02353C] text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-semibold"
        title="Search (⌘K)"
      >
        <Search className="w-3.5 h-3.5 text-[#3FD0C9]" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden md:inline px-1.5 py-0.5 text-[9px] font-mono bg-[#011E22] border border-[#3FD0C9]/40 text-[#C1F6ED] rounded">⌘K</kbd>
      </button>

      <span className="w-px h-4 bg-[#3FD0C9]/30" />

      {/* Services Button */}
      <button
        id="dock-services-btn"
        onClick={() => onNavigate('services')}
        className="p-2 sm:px-3 sm:py-1.5 rounded-full hover:bg-[#02353C] text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-semibold"
        title="Explore Services"
      >
        <Layers className="w-3.5 h-3.5 text-[#449342]" />
        <span className="hidden sm:inline">Services</span>
      </button>

      <span className="w-px h-4 bg-[#3FD0C9]/30" />

      {/* Main RFP Quote CTA */}
      <button
        id="dock-rfp-quote-btn"
        onClick={onOpenQuote}
        className="is-style-gradient px-4 py-1.5 rounded-full text-white text-xs font-bold shadow-lg shadow-[#3FD0C9]/40 transition-all flex items-center gap-1.5 group"
      >
        <FileCheck className="w-3.5 h-3.5" />
        <span>Get Proposal</span>
      </button>

      <span className="w-px h-4 bg-[#3FD0C9]/30" />

      {/* Top Scroll */}
      <button
        id="dock-top-btn"
        onClick={scrollToTop}
        className="p-2 rounded-full hover:bg-[#02353C] text-slate-400 hover:text-white transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-3.5 h-3.5 text-[#3FD0C9]" />
      </button>
    </div>
  );
};
