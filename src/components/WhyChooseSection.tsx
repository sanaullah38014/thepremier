import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Award,
  Layers,
  CheckCircle2,
  HardHat,
  SearchCheck,
  Building2,
  Briefcase,
  Landmark,
  Store,
  Home,
  ArrowRight,
  Sparkles,
  Users,
  Lightbulb,
  Leaf,
  Globe2,
  HeartHandshake,
  GraduationCap,
  Building,
} from 'lucide-react';
import {
  WHY_CHOOSE_US,
  INDUSTRIES_SERVED,
  COMPANY_INFO,
} from '../data/companyData';

interface WhyChooseSectionProps {
  onOpenQuote: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOpenQuote }) => {
  const getDifferentiatorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#3FD0C9]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#449342]" />;
      case 'HardHat':
        return <HardHat className="w-5 h-5 text-[#449342]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#C1F6ED]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-[#449342]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#449342]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#449342]" />;
    }
  };

  const getIndustryIcon = (name: string) => {
    switch (name) {
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-[#449342]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#3FD0C9]" />;
      case 'Globe2':
        return <Globe2 className="w-5 h-5 text-[#3FD0C9]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#449342]" />;
      case 'Building':
        return <Building className="w-5 h-5 text-[#C1F6ED]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#449342]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#3FD0C9]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#3FD0C9]" />;
    }
  };

  return (
    <section
      id="why-us"
      className="why-story-section py-20 lg:py-28 bg-[#011E22] text-white border-t border-[#3FD0C9]/20 transition-colors relative"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-[#3FD0C9]/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Why Choose Us Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#02353C]/80 border border-[#3FD0C9]/30 text-[#C1F6ED] text-xs font-bold uppercase tracking-wider mb-3 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#449342]" />
            <span>Key Differentiators</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Choose <span className="blue-gradient-text">The Premier</span> Services &amp;{' '}
            <span className="text-[#449342]">Solutions</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            We bring together technical expertise, dependable project management, and a commitment to quality that gives our clients confidence from start to finish.
          </p>
        </div>

        {/* 6 Key Differentiators Grid with Rotating Neon Gradient Border & Dark SaaS Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {WHY_CHOOSE_US.map((item, index) => {
            const tags = [
              'MULTI-DISCIPLINARY',
              'STATUTORY COMPLIANT',
              'FIELD-PROVEN',
              'CLIENT-CENTRIC',
              'QUALITY ASSURED',
              'END-TO-END MANAGEMENT',
            ];
            const tag = tags[index % tags.length];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="neon-border-card group cursor-pointer"
                onClick={onOpenQuote}
              >
                <div className="neon-border-card-inner p-6 sm:p-7 relative overflow-hidden">
                  {/* Subtle Top Glass Reflection Line */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* Header: Icon + Number & SaaS Category Chip */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="p-3.5 rounded-2xl bg-[#011E22]/90 border border-[#3FD0C9]/40 shadow-inner group-hover:border-[#449342]/70 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(63,208,201,0.5)] transition-all duration-300">
                      {getDifferentiatorIcon(item.iconName)}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-[#011E22]/80 border border-[#3FD0C9]/30 font-mono text-[10px] font-bold text-[#C1F6ED] uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#449342] animate-pulse" />
                        {tag}
                      </span>
                      <span className="font-mono text-xs font-black text-slate-400 group-hover:text-white transition-colors">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5 flex-1">
                    <h3 className="font-['Outfit'] text-xl font-bold text-white group-hover:text-[#C1F6ED] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* SaaS Interactive Bottom Indicator */}
                  <div className="mt-6 pt-4 border-t border-[#3FD0C9]/20 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 group-hover:text-[#449342] transition-colors flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#449342]" />
                      <span>The Premier Differentiator</span>
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-[#011E22] border border-[#3FD0C9]/30 group-hover:border-[#449342] group-hover:bg-[#449342]/20 flex items-center justify-center text-slate-400 group-hover:text-[#449342] transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2. Industries / Sectors We Serve */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#C1F6ED] uppercase tracking-wider font-bold block mb-1">
              Sector Expertise
            </span>
            <h3 className="font-['Outfit'] text-2xl sm:text-4xl font-extrabold text-white">
              Industries &amp; Sectors We Serve
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              Providing tailored engineering, infrastructure, IT, and procurement solutions across key sectors in Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES_SERVED.map((ind, idx) => (
              <div
                key={ind.title}
                className="p-5 rounded-2xl bg-[#01262B]/80 border border-[#3FD0C9]/25 hover:border-[#3FD0C9]/60 transition-all space-y-2.5 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30">
                    {getIndustryIcon(ind.iconName)}
                  </div>
                  <div>
                    <h4 className="font-['Outfit'] text-base font-bold text-white">
                      {ind.title}
                    </h4>
                    <span className="text-[11px] font-mono text-[#C1F6ED]">
                      Sector 0{idx + 1}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Quality & Safety Commitment Card */}
        <div className="mt-20 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#01262B] via-[#02353C] to-[#01262B] border border-[#3FD0C9]/35 shadow-2xl">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#3FD0C9]/25">
              <div>
                <span className="text-xs font-mono text-[#449342] uppercase tracking-wider font-bold block">
                  Safety &amp; Compliance Standards
                </span>
                <h3 className="font-['Outfit'] text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                  Quality, Safety &amp; Environmental Responsibility
                </h3>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-[#449342]/20 border border-[#449342]/40 text-[#449342] font-mono text-xs font-bold self-start sm:self-auto">
                HIGH STANDARDS
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We maintain rigorous quality assurance and proactive health, safety, and environmental protocols across all civil works, engineering operations, and institutional supply deliveries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div className="p-5 rounded-2xl bg-[#011E22]/80 border border-[#3FD0C9]/30 space-y-2 shadow-md">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#3FD0C9]" />
                  <span>Quality Assurance Approach</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We establish clear benchmarks, inspect materials, adhere to engineering specifications, and maintain transparent reporting at every project milestone.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#011E22]/80 border border-[#449342]/30 space-y-2 shadow-md">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <HardHat className="w-4 h-4 text-[#449342]" />
                  <span>Health, Safety &amp; Environment (HSE)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Protecting personnel, clients, and project environments through regular hazard assessments, protective equipment enforcement, and safe execution protocols.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#3FD0C9]/20">
              <span className="text-xs text-slate-400 font-mono">
                PEC Registered Contractor • SECP CUIN: {COMPANY_INFO.secpCuin}
              </span>
              <button
                id="why-choose-quote-cta"
                onClick={onOpenQuote}
                className="is-style-gradient px-6 py-2.5 rounded-xl text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2"
              >
                <span>Request Project Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
