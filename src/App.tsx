import React, { useState, useEffect } from 'react';
import { IntroLoader } from './components/IntroLoader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustMarquee } from './components/TrustMarquee';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SearchFilterModal } from './components/SearchFilterModal';
import { QuoteModal } from './components/QuoteModal';
import { FloatingDock } from './components/FloatingDock';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { PORTFOLIO_ITEMS } from './data/companyData';
import { NavItemKey } from './types';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<NavItemKey>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [quotePreselectedService, setQuotePreselectedService] = useState<string>('Civil Engineering & Construction');
  const [quotePreselectedBudget, setQuotePreselectedBudget] = useState<string>('');
  const [quotePreselectedTimeline, setQuotePreselectedTimeline] = useState<string>('Within 3 Months');
  const [projectId, setProjectId] = useState<string | null>(null);

  // Default dark theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
    const syncProjectRoute = () => {
      const match = window.location.hash.match(/^#project\/(.+)$/);
      setProjectId(match?.[1] || null);
    };
    syncProjectRoute();
    window.addEventListener('hashchange', syncProjectRoute);
    return () => window.removeEventListener('hashchange', syncProjectRoute);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  // Keyboard shortcut for Search (Ctrl+K or ⌘K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Active section spy on scroll
  useEffect(() => {
    const sections: NavItemKey[] = ['home', 'services', 'about', 'projects', 'why-us', 'testimonials', 'blog', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id: NavItemKey) => {
    setActiveSection(id);
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      try {
        window.history.pushState(null, '', '#home');
      } catch (err) {
        // Safe for iframe
      }
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
      try {
        window.history.pushState(null, '', `#${id}`);
      } catch (err) {
        // Safe for iframe
      }
    }
  };

  const handleOpenQuote = (serviceTitle?: string) => {
    if (serviceTitle) {
      setQuotePreselectedService(serviceTitle);
    }
    setIsQuoteOpen(true);
  };

  const handleSelectSearchResult = (type: 'service' | 'project' | 'blog' | 'about', id: string) => {
    switch (type) {
      case 'service':
        handleNavigate('services');
        break;
      case 'project':
        handleNavigate('projects');
        break;
      case 'blog':
        handleNavigate('blog');
        break;
      case 'about':
        handleNavigate('about');
        break;
      default:
        handleNavigate('home');
    }
  };

  return (
    <div className="min-h-screen bg-[#02353C] text-white flex flex-col font-['Plus_Jakarta_Sans'] transition-colors duration-200 selection:bg-[#2EAF7D] selection:text-[#02353C] relative">
      {/* Full-screen intro loader */}
      {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}

      {/* Top Sticky Navigation with Logo & Replay button */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onReplayIntro={handleReplayIntro}
      />

      {/* Main Content Sections */}
      {projectId ? (
        <ProjectDetailPage
          project={PORTFOLIO_ITEMS.find((project) => project.id === projectId) || PORTFOLIO_ITEMS[0]}
          onBack={() => {
            window.location.hash = 'projects';
            setProjectId(null);
          }}
          onOpenQuote={() => handleOpenQuote()}
        />
      ) : (
      <main className="flex-1 w-full pb-16">
        <HeroSection
          onNavigate={handleNavigate}
          onOpenQuote={() => handleOpenQuote()}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* Live Accreditation Trust Marquee */}
        <TrustMarquee />

        {/* Core Services Section */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* Corporate History & Milestones */}
        <AboutSection onOpenQuote={() => handleOpenQuote()} />

        {/* Capabilities & Projects Section */}
        <ProjectsSection onOpenQuote={handleOpenQuote} />

        {/* Why Choose Us & Key Differentiators */}
        <WhyChooseSection onOpenQuote={() => handleOpenQuote()} />

        {/* Real Testimonials from Verified Clients (PDF Page 4) */}
        <TestimonialsSection onOpenQuote={() => handleOpenQuote()} />

        {/* Technical Insights & Articles (Scroll-driven) */}
        <BlogSection />

        {/* Contact, Inquiries & FAQ */}
        <ContactSection />
      </main>
      )}

      {/* Floating Action Dock */}
      <FloatingDock
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
        isDarkMode={isDarkMode}
      />

      {/* Global Quick Search Filter Modal (⌘K) */}
      <SearchFilterModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSelectSearchResult}
      />

      {/* Corporate Consultation Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedService={quotePreselectedService}
        preselectedBudget={quotePreselectedBudget}
        preselectedTimeline={quotePreselectedTimeline}
      />
    </div>
  );
}
