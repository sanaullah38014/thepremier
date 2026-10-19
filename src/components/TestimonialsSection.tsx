import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, Building2, Cpu, GraduationCap, HeartHandshake, PackageCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/companyData';

interface TestimonialsSectionProps {
  onOpenQuote: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenQuote }) => {
  const getSectorIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Building2 className="w-5 h-5 text-[#3FD0C9]" />;
      case 1:
        return <Cpu className="w-5 h-5 text-[#3FD0C9]" />;
      case 2:
        return <GraduationCap className="w-5 h-5 text-[#449342]" />;
      case 3:
        return <HeartHandshake className="w-5 h-5 text-[#449342]" />;
      case 4:
        return <PackageCheck className="w-5 h-5 text-[#C1F6ED]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#3FD0C9]" />;
    }
  };

  return (
    <section
      id="testimonials"
      className="testimonials-story-section py-20 lg:py-24 bg-[#011E22] text-white border-t border-[#3FD0C9]/20 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-[#3FD0C9]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#02353C]/80 border border-[#3FD0C9]/30 text-[#C1F6ED] text-xs font-bold uppercase tracking-wider mb-3 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#449342]" />
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Client <span className="blue-gradient-text">Testimonials</span> &amp;{' '}
            <span className="text-[#449342]">Partnerships</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Real feedback from public sector departments, commercial technology enterprises, educational institutions, and international humanitarian organizations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="testimonial-story-card p-6 rounded-3xl bg-[#01262B]/90 border border-[#3FD0C9]/30 hover:border-[#449342]/60 transition-all duration-300 flex flex-col justify-between shadow-xl group relative"
            >
              <div className="space-y-4">
                {/* Sector Badge & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#011E22] border border-[#3FD0C9]/30 text-[11px] font-mono text-[#C1F6ED]">
                    {getSectorIcon(idx)}
                    <span>{t.sectorBadge}</span>
                  </div>
                  <Quote className="w-6 h-6 text-[#3FD0C9]/40 group-hover:text-[#449342] transition-colors" />
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#449342]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#449342]" />
                  ))}
                </div>

                {/* Quote Body */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-4 border-t border-[#3FD0C9]/20 flex items-center justify-between">
                <div>
                  <h4 className="font-['Outfit'] font-bold text-white text-base group-hover:text-[#C1F6ED] transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#449342] font-medium mt-0.5">
                    {t.organization}
                  </p>
                  {t.role && (
                    <p className="text-[11px] text-slate-400 font-mono">
                      {t.role}
                    </p>
                  )}
                </div>

                <div className="w-9 h-9 rounded-xl bg-[#011E22] border border-[#3FD0C9]/40 flex items-center justify-center text-[#449342]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#02353C]/80 border border-[#3FD0C9]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-['Outfit'] text-lg font-bold text-white">
              Ready to collaborate on your next engineering, IT, or procurement project?
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Contact our head office on Mardan Road, Sawari, Buner or request a structured consultation.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="is-style-gradient px-6 py-2.5 rounded-xl text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-md hover:scale-105 transition-all"
          >
            GET YOUR FREE CONSULT
          </button>
        </div>
      </div>
    </section>
  );
};
