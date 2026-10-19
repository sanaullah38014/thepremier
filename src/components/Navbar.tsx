import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  Phone,
  Shield,
  ArrowRight,
  ChevronRight,
  Play,
} from 'lucide-react';
import { PremierLogo } from './PremierLogo';
import { NAV_ITEMS, COMPANY_INFO } from '../data/companyData';
import { NavItemKey } from '../types';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: NavItemKey) => void;
  onOpenSearch: () => void;
  onOpenQuote: () => void;
  onReplayIntro?: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenSearch,
  onOpenQuote,
  onReplayIntro,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: NavItemKey) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Main Navbar Bar */}
      <nav
        id="main-navigation-bar"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#02353C]/95 backdrop-blur-xl shadow-2xl shadow-[#011E22]/80 border-b border-[#3FD0C9]/25 py-3'
            : 'bg-[#02353C]/80 backdrop-blur-md border-b border-[#3FD0C9]/20 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <button
            id="navbar-brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3FD0C9] rounded-xl text-left transform transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group"
            aria-label="The Premier Home"
          >
            <PremierLogo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  href={item.href}
                  to={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={({ isActive }) => `relative px-4 py-2 rounded-xl text-xs lg:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white bg-[#03444D] border border-[#3FD0C9]/50 shadow-md shadow-[#3FD0C9]/20'
                      : 'text-slate-200 hover:text-[#3FD0C9] hover:bg-[#03444D]/50'
                  }`}
                >
                  {item.label}
                  {({ isActive }) => isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-[#2EAF7D] rounded-full" />
                  )}
                </NavLink>
            ))}
          </div>

          {/* Right Action Icons & CTA */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            {/* Instant Search Button */}
            <button
              id="navbar-search-btn"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#01262B]/80 text-slate-200 hover:text-white hover:bg-[#03444D] transition-all text-xs font-medium border border-[#3FD0C9]/30 hover:border-[#3FD0C9]/60"
              title="Quick Search (Ctrl + K)"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5 text-[#3FD0C9]" />
              <span className="hidden xl:inline">Search Specs</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-[#02353C] border border-[#3FD0C9]/40 rounded text-[#C1F6ED]">
                ⌘K
              </kbd>
            </button>

            {/* Replay Intro Quick Trigger (Tablet) */}
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="lg:hidden p-2 rounded-xl bg-[#01262B]/80 text-slate-200 hover:text-white border border-[#3FD0C9]/30 hover:border-[#3FD0C9]"
                title="Replay Brand Intro"
              >
                <Play className="w-4 h-4 text-[#2EAF7D]" />
              </button>
            )}

            {/* Primary CTA: Request Quote / RFP */}
            <button
              id="navbar-request-quote-cta"
              onClick={onOpenQuote}
              className="is-style-gradient px-4 lg:px-5 py-2.5 rounded-xl text-white text-xs lg:text-sm font-bold shadow-lg shadow-[#2EAF7D]/30 flex items-center gap-2 group"
            >
              <span>Get Proposal</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Right Controls: Search + Hamburger */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              id="mobile-search-btn"
              onClick={onOpenSearch}
              className="p-2.5 rounded-xl bg-[#01262B] text-slate-200 border border-[#3FD0C9]/30"
              aria-label="Open Search"
            >
              <Search className="w-5 h-5 text-[#3FD0C9]" />
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#01262B] text-white border border-[#3FD0C9]/30"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-red-400" /> : <Menu className="w-6 h-6 text-[#3FD0C9]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer-backdrop"
          className="fixed inset-0 z-50 bg-[#011E22]/85 backdrop-blur-md flex flex-col md:hidden animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-nav-drawer-panel"
            className="w-full max-w-sm ml-auto h-full bg-[#02353C] border-l border-[#3FD0C9]/30 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header with Logo */}
              <div className="flex items-center justify-between pb-5 border-b border-[#3FD0C9]/20">
                <PremierLogo size="sm" />
                <button
                  id="mobile-drawer-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-[#01262B] text-slate-300 hover:text-white border border-[#3FD0C9]/30"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* PEC Badge for Mobile */}
              <div className="mt-4 p-3 rounded-xl bg-[#01262B]/80 border border-[#3FD0C9]/30 flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-[#2EAF7D] flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">
                    PEC Registered Contractor
                  </p>
                  <p className="text-[10px] text-[#C1F6ED] font-mono">
                    #{COMPANY_INFO.licenseNo} • Est. Jan 2014
                  </p>
                </div>
              </div>

              {/* Mobile Nav Links */}
              <div className="mt-6 flex flex-col space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <NavLink
                      key={item.id}
                      id={`mobile-nav-item-${item.id}`}
                      to={item.href}
                      onClick={() => handleNavClick(item.id)}
                      className={({ isActive }) => `w-full min-h-[48px] px-4 rounded-xl flex items-center justify-between text-base font-semibold transition-all ${
                        isActive
                          ? 'bg-[#03444D] text-white font-bold border-l-4 border-[#2EAF7D]'
                          : 'text-slate-200 hover:bg-[#03444D]/50 hover:text-[#3FD0C9]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </NavLink>
                  );
                })}
              </div>

              {/* Replay Intro Button in Mobile Menu */}
              {onReplayIntro && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReplayIntro();
                  }}
                  className="mt-4 w-full min-h-[44px] px-4 rounded-xl bg-[#01262B]/70 border border-[#3FD0C9]/30 text-[#C1F6ED] flex items-center gap-2.5 text-xs font-semibold hover:border-[#3FD0C9]"
                >
                  <Play className="w-4 h-4 text-[#2EAF7D]" />
                  <span>Replay Brand Animation</span>
                </button>
              )}
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-[#3FD0C9]/20 space-y-3">
              <button
                id="mobile-drawer-quote-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="is-style-gradient w-full min-h-[50px] rounded-xl text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs text-slate-300 pt-2">
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1 hover:text-[#3FD0C9]">
                  <Phone className="w-3.5 h-3.5 text-[#3FD0C9]" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <span className="font-mono text-[#C1F6ED] text-[10px]">EST. 2014</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
