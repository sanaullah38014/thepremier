import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, Layers, Briefcase, FileText, ArrowRight, Building2, Cpu, Zap, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA, SELECTED_AREAS_OF_WORK, BLOG_POSTS, COMPANY_INFO } from '../data/companyData';
import { SearchResultItem } from '../types';

interface SearchFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (type: 'service' | 'project' | 'blog' | 'about', id: string) => void;
}

export const SearchFilterModal: React.FC<SearchFilterModalProps> = ({
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const allItems: SearchResultItem[] = useMemo(() => {
    const services: SearchResultItem[] = SERVICES_DATA.map((s) => ({
      id: s.id,
      title: s.title,
      type: 'service',
      category: s.category === 'it-solutions' ? 'IT & Digital' : 'Engineering & Construction',
      snippet: s.shortDesc,
      targetId: 'services',
    }));

    const projects: SearchResultItem[] = SELECTED_AREAS_OF_WORK.map((p) => ({
      id: p.id,
      title: p.title,
      type: 'project',
      category: p.categoryLabel,
      snippet: `${p.description} — ${p.ourRole}`,
      targetId: 'projects',
    }));

    const blogs: SearchResultItem[] = BLOG_POSTS.map((b) => ({
      id: b.id,
      title: b.title,
      type: 'blog',
      category: b.category,
      snippet: b.excerpt,
      targetId: 'blog',
    }));

    const about: SearchResultItem = {
      id: 'about-overview',
      title: `${COMPANY_INFO.name} (Est. ${COMPANY_INFO.foundedDate}, PEC Registered)`,
      type: 'about',
      category: 'Corporate Overview',
      snippet: `${COMPANY_INFO.aboutDescription} ${COMPANY_INFO.aboutAdditionalDescription}`,
      targetId: 'about',
    };

    return [...services, ...projects, ...blogs, about];
  }, []);

  const filteredResults = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allItems.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        (selectedCategory === 'service' && item.type === 'service') ||
        (selectedCategory === 'project' && item.type === 'project') ||
        (selectedCategory === 'blog' && item.type === 'blog') ||
        (selectedCategory === 'engineering' && (item.category.toLowerCase().includes('eng') || item.category.toLowerCase().includes('civil'))) ||
        (selectedCategory === 'it' && (item.category.toLowerCase().includes('it') || item.category.toLowerCase().includes('digital')));

      if (!matchesCategory) return false;
      if (!q) return true;

      return (
        item.title.toLowerCase().includes(q) ||
        item.snippet.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [allItems, searchQuery, selectedCategory]);

  if (!isOpen) return null;

  return (
    <div
      id="search-filter-modal-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#011E22]/85 backdrop-blur-md animate-fadeIn text-white"
      onClick={onClose}
    >
      <div
        id="search-filter-modal-dialog"
        className="w-full max-w-2xl bg-[#01262B] rounded-3xl shadow-2xl border border-[#3FD0C9]/40 overflow-hidden transition-all duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#3FD0C9]/20 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#3FD0C9] flex-shrink-0" />
          <input
            id="global-search-input"
            type="text"
            placeholder="Search engineering services, capabilities, insights, PEC registrations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none text-white placeholder-slate-400 focus:outline-none text-base sm:text-lg"
            autoFocus
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            id="close-search-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#02353C] text-slate-400 hover:text-white text-xs border border-[#3FD0C9]/30 ml-1 font-mono"
          >
            ESC
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="px-4 py-2.5 bg-[#011E22]/70 border-b border-[#3FD0C9]/15 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
          {[
            { id: 'all', label: 'All Results' },
            { id: 'service', label: 'Services' },
            { id: 'project', label: 'Capabilities & Projects' },
            { id: 'blog', label: 'Insights & Articles' },
            { id: 'engineering', label: 'Civil Works' },
            { id: 'it', label: 'IT Solutions' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-full font-medium transition-all shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#3FD0C9] text-white shadow-sm'
                  : 'bg-[#02353C]/60 text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 sm:p-4 space-y-2">
          {filteredResults.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              <p className="text-sm font-medium">No results found for "{searchQuery}"</p>
              <p className="text-xs mt-1 text-slate-500">
                Try searching for civil engineering, roads, IT systems, supplies, or PEC registration.
              </p>
            </div>
          ) : (
            filteredResults.map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                onClick={() => {
                  onSelectResult(item.type, item.id);
                  onClose();
                }}
                className="p-3 sm:p-3.5 rounded-2xl bg-[#011E22]/80 border border-[#3FD0C9]/20 hover:border-[#449342]/60 hover:bg-[#02353C] cursor-pointer transition-all duration-200 group flex items-start justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        item.type === 'service'
                          ? 'bg-[#3FD0C9]/20 text-[#C1F6ED] border border-[#3FD0C9]/30'
                          : item.type === 'project'
                          ? 'bg-[#449342]/20 text-[#449342] border border-[#449342]/30'
                          : item.type === 'blog'
                          ? 'bg-[#449342]/20 text-[#449342] border border-[#449342]/30'
                          : 'bg-[#3FD0C9]/20 text-[#3FD0C9] border border-[#3FD0C9]/30'
                      }`}
                    >
                      {item.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono capitalize">
                      {item.type}
                    </span>
                  </div>
                  <h4 className="font-['Outfit'] font-bold text-white text-sm sm:text-base group-hover:text-[#C1F6ED] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.snippet}
                  </p>
                </div>
                <div className="pt-2 text-slate-500 group-hover:text-[#C1F6ED] transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#011E22]/90 border-t border-[#3FD0C9]/20 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono">
            {filteredResults.length} {filteredResults.length === 1 ? 'item' : 'items'} found
          </span>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Press ESC to exit</span>
            <span className="text-[#449342] font-bold font-mono">
              The Premier Services &amp; Solutions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
