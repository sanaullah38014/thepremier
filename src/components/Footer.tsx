import React from 'react';
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  FileBadge,
  Building,
} from 'lucide-react';
import { PremierLogo } from './PremierLogo';
import { COMPANY_INFO, NAV_ITEMS } from '../data/companyData';
import { NavItemKey } from '../types';

interface FooterProps {
  onNavigate: (id: NavItemKey) => void;
  onOpenQuote: () => void;
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#011E22] text-slate-300 border-t border-[#3FD0C9]/20 transition-colors">
      {/* Top Banner: Statutory Certification Authority */}
      <div className="border-b border-[#3FD0C9]/20 py-6 px-4 sm:px-6 lg:px-8 bg-[#011E22]/90">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2.5 rounded-2xl bg-[#02353C] border border-[#3FD0C9]/40 text-[#449342] flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white font-['Outfit']">
                Pakistan Engineering Council (PEC) Registered Contractor
              </p>
              <p className="text-xs text-slate-400">
                License No: <span className="font-mono text-[#449342] font-semibold">{COMPANY_INFO.licenseNo}</span> • Founded January 2014 • SECP CUIN: {COMPANY_INFO.secpCuin}
              </p>
            </div>
          </div>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#02353C] hover:bg-[#03444D] text-slate-300 hover:text-white border border-[#3FD0C9]/30 transition-colors flex items-center gap-2 text-xs font-semibold"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[#3FD0C9]" />
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1 — Company Info */}
          <div className="lg:col-span-4 space-y-4">
            <PremierLogo size="md" />
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
              Integrated engineering, construction, IT, and general order supply solutions in Pakistan. Established <strong>January 2014</strong>. Incorporated under SECP (CUIN: <strong>{COMPANY_INFO.secpCuin}</strong>). Registered with <strong>Pakistan Engineering Council (PEC)</strong>.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-400">
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#449342] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.headOffice}</span>
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#3FD0C9] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors font-mono">
                  {COMPANY_INFO.phone}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#449342] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                Website: {COMPANY_INFO.website}
              </span>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit'] font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-[#C1F6ED] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit'] font-mono">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#C1F6ED] transition-colors text-left">
                  Civil Engineering &amp; Construction
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#C1F6ED] transition-colors text-left">
                  IT Services &amp; Digital Solutions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#C1F6ED] transition-colors text-left">
                  General Order Supplies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#C1F6ED] transition-colors text-left">
                  Project Management &amp; Consultancy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#C1F6ED] transition-colors text-left">
                  Quality Assurance &amp; Material Testing
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact & Registration Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit'] font-mono">
              Statutory Registration
            </h4>
            
            <div className="space-y-2 text-xs text-slate-400">
              <div className="p-3 rounded-xl bg-[#01262B] border border-[#3FD0C9]/25 space-y-1">
                <div className="flex items-center justify-between text-white font-semibold">
                  <span>PEC Registration:</span>
                  <span className="text-[#449342]">Contractor</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">License #{COMPANY_INFO.licenseNo}</div>
              </div>

              <div className="p-3 rounded-xl bg-[#01262B] border border-[#3FD0C9]/25 space-y-1">
                <div className="flex items-center justify-between text-white font-semibold">
                  <span>SECP Incorporation:</span>
                  <span className="text-[#C1F6ED]">Pvt. Ltd.</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">CUIN: {COMPANY_INFO.secpCuin}</div>
              </div>

              <div className="p-3 rounded-xl bg-[#01262B] border border-[#3FD0C9]/25 space-y-1">
                <div className="flex items-center justify-between text-white font-semibold">
                  <span>PSEB IT &amp; Tech:</span>
                  <span className="text-[#449342]">Registered</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">Export &amp; Software House</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="footer-quote-cta"
                onClick={onOpenQuote}
                className="is-style-gradient w-full py-3 rounded-xl text-white font-bold text-xs shadow-md transition-all text-center"
              >
                Request a Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="mt-12 pt-8 border-t border-[#3FD0C9]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 font-mono text-[11px] text-[#C1F6ED]">
            <span>{COMPANY_INFO.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
