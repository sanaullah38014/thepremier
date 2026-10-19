import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import {
  Building2,
  Cpu,
  PackageCheck,
  ClipboardCheck,
  ShieldCheck,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Eye,
  X,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked progression across the services track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth physics spring so motion glides and halts right where the user stops scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Track translation: Starts with Card 1 & Card 2 in view, glides remaining cards step-by-step from right to left
  const x = useTransform(smoothProgress, [0, 1], ['0%', '-67%']);

  const getIcon = (name: string) => {
    const props = { className: 'w-5 h-5' };
    switch (name) {
      case 'Building2':
        return <Building2 {...props} className="text-[#3FD0C9]" />;
      case 'Cpu':
        return <Cpu {...props} className="text-[#449342]" />;
      case 'PackageCheck':
        return <PackageCheck {...props} className="text-[#449342]" />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} className="text-[#449342]" />;
      case 'Users':
        return <Users {...props} className="text-[#C1F6ED]" />;
      case 'ClipboardCheck':
        return <ClipboardCheck {...props} className="text-[#3FD0C9]" />;
      default:
        return <Building2 {...props} className="text-[#3FD0C9]" />;
    }
  };

  return (
    <section
      id="services"
      ref={containerRef}
      className="services-story-section relative bg-[#011E22] text-white border-t border-[#3FD0C9]/20 md:h-[230vh]"
    >
      {/* Sticky Viewport Container: holds header and cards in view while scrolling advances them */}
      <div className="md:sticky md:top-16 md:h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden py-12 md:py-6">
        
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#3FD0C9]/12 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[350px] bg-[#449342]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-6 sm:mb-8">
          {/* Section Header with exact wording */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#02353C]/90 border border-[#449342]/35 text-[#449342] text-xs font-bold uppercase tracking-wider mb-2.5 font-mono shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#449342]" />
                <span>OFFICIAL STATUTORY ACCREDITATION</span>
              </div>
              
              <h2 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Transparency You Can Trust <span className="blue-gradient-text">SECP / PSEB Registered</span>
              </h2>
              
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                The company registered with Securities and Exchange Commission of Pakistan (SECP) as a private limited company under Corporate Unique Identification No. 0262294 on July 3, 2024.
              </p>
            </div>

            {/* Registration accreditation badge */}
            <div className="shrink-0 self-start md:self-end">
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#01262B]/90 border border-[#449342]/40 text-xs font-mono text-slate-200 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#449342] animate-pulse" />
                <span className="text-[#449342] font-bold">CUIN: 0262294</span>
                <span className="text-slate-400">• SECP Registered</span>
              </div>
            </div>
          </div>

          {/* Desktop Progress Bar indicating card progression */}
          <div className="hidden md:block mt-5 h-1.5 w-full bg-[#02353C] rounded-full overflow-hidden border border-[#3FD0C9]/20">
            <motion.div
              className="h-full bg-gradient-to-r from-[#3FD0C9] via-[#3FD0C9] to-[#449342] rounded-full"
              style={{ scaleX: smoothProgress, transformOrigin: '0%' }}
            />
          </div>
        </div>

        {/* Desktop Scroll-linked Horizontal Card Track */}
        <div className="hidden md:block relative w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <motion.div
            style={{ x }}
            className="flex items-stretch gap-6 pl-2"
          >
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.86, rotateX: 8 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                id={`service-card-${service.id}`}
                className="service-story-card w-[360px] lg:w-[410px] shrink-0 rounded-3xl bg-[#01262B]/95 border border-[#3FD0C9]/35 hover:border-[#449342]/70 transition-colors duration-300 overflow-hidden flex flex-col justify-between group shadow-2xl backdrop-blur-xl"
              >
                <div>
                  {/* Media Image Frame */}
                  <div className="relative h-44 w-full overflow-hidden bg-[#011E22]">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01262B] via-[#01262B]/40 to-transparent" />

                    {/* Service Number Badge */}
                    <div className="absolute top-3.5 right-4 px-3 py-1 rounded-full bg-[#011E22]/90 backdrop-blur-md border border-[#3FD0C9]/40 text-xs font-mono font-bold text-[#449342] shadow-md">
                      {service.serviceNumber}
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-3.5 left-4 p-2.5 rounded-2xl bg-[#02353C]/90 backdrop-blur-md border border-[#3FD0C9]/40 shadow-md">
                      {getIcon(service.iconName)}
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="font-['Outfit'] text-lg font-bold text-white group-hover:text-[#C1F6ED] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 pt-0 border-t border-[#3FD0C9]/20 mt-2 flex items-center justify-between gap-3">
                  <button
                    id={`service-modal-trigger-${service.id}`}
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-bold text-[#C1F6ED] hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Scope</span>
                  </button>

                  <button
                    id={`service-quote-btn-${service.id}`}
                    onClick={() => onOpenQuote(service.title)}
                    className="px-4 py-2 rounded-xl bg-[#02353C] hover:bg-[#3FD0C9] text-white text-xs font-bold transition-all border border-[#3FD0C9]/35 shadow-sm"
                  >
                    {service.ctaText || 'Contact us'}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Swipeable Carousel with Snap (for screens < 768px) */}
        <div className="md:hidden w-full overflow-x-auto snap-x snap-mandatory flex gap-4 px-4 pb-4 no-scrollbar">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="w-[85vw] max-w-[340px] shrink-0 snap-center rounded-3xl bg-[#01262B]/95 border border-[#3FD0C9]/35 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-[#011E22]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01262B] via-transparent to-transparent" />
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded-full bg-[#011E22]/90 border border-[#3FD0C9]/40 text-xs font-mono font-bold text-[#449342]">
                    {service.serviceNumber}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-['Outfit'] text-base font-bold text-white leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4 text-xs text-slate-300">
                  <p className="line-clamp-3 leading-relaxed">{service.shortDesc}</p>
                </div>
              </div>
              <div className="p-4 pt-0 flex items-center justify-between border-t border-[#3FD0C9]/20 mt-2">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-bold text-[#C1F6ED]"
                >
                  View Scope
                </button>
                <button
                  onClick={() => onOpenQuote(service.title)}
                  className="px-3 py-1.5 rounded-xl bg-[#3FD0C9] text-white text-xs font-bold"
                >
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div
          id="service-detail-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#011E22]/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalService(null)}
        >
          <div
            id="service-detail-modal-dialog"
            className="w-full max-w-2xl bg-[#01262B] rounded-3xl shadow-2xl border border-[#3FD0C9]/40 overflow-hidden text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-52 w-full bg-[#011E22]">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#01262B] via-[#01262B]/50 to-transparent" />
              <button
                id="close-service-modal-btn"
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#3FD0C9] text-white font-mono">
                  {activeModalService.serviceNumber}
                </span>
                <h3 className="font-['Outfit'] text-2xl font-bold mt-1 text-white">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {activeModalService.fullDesc}
              </p>

              <div>
                <h4 className="text-xs font-mono font-bold text-[#C1F6ED] uppercase tracking-wider mb-3">
                  Comprehensive Scope &amp; Activity Items
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#02353C]/80 border border-[#3FD0C9]/25 text-xs text-slate-300 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#449342] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#3FD0C9]/20 flex flex-col sm:flex-row gap-3">
                <button
                  id="modal-quote-btn"
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onOpenQuote(title);
                  }}
                  className="is-style-gradient flex-1 py-3.5 rounded-xl text-white font-bold text-sm shadow-md transition-all text-center"
                >
                  Contact Us for {activeModalService.title}
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="px-5 py-3.5 rounded-xl bg-[#02353C] border border-[#3FD0C9]/40 hover:border-[#449342] text-slate-200 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-[#449342]" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
