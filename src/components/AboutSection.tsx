import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Building,
  FileBadge,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Eye,
  Target,
  Quote,
  UserCheck,
  Lightbulb,
  Users,
  Leaf,
  PhoneCall,
  CalendarCheck,
  ShoppingCart,
  CreditCard,
} from 'lucide-react';
import {
  COMPANY_INFO,
  MILESTONES,
  BUSINESS_VALUES,
  VISION,
  MISSION,
  LEADERSHIP,
  PROCESS_STEPS,
} from '../data/companyData';
import { PremierLogo } from './PremierLogo';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  const getBusinessValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-[#3FD0C9]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#2EAF7D]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-[#C1F6ED]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#2EAF7D]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#3FD0C9]" />;
    }
  };

  const getProcessIcon = (step: string) => {
    switch (step) {
      case '01':
        return <PhoneCall className="w-5 h-5 text-[#3FD0C9]" />;
      case '02':
        return <CalendarCheck className="w-5 h-5 text-[#2EAF7D]" />;
      case '03':
        return <ShoppingCart className="w-5 h-5 text-[#C1F6ED]" />;
      case '04':
        return <CreditCard className="w-5 h-5 text-[#449342]" />;
      default:
        return <ArrowRight className="w-5 h-5 text-[#3FD0C9]" />;
    }
  };

  return (
    <section
      id="about"
      className="about-story-section py-20 lg:py-28 bg-[#02353C] text-white border-t border-[#3FD0C9]/20 transition-colors relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[500px] bg-[#3FD0C9]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header: Exact from PDF Page 2 */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#01262B]/80 border border-[#3FD0C9]/30 text-[#C1F6ED] text-xs font-bold uppercase tracking-wider mb-3 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2EAF7D]" />
            <span>{COMPANY_INFO.aboutSectionLabel}</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {COMPANY_INFO.aboutHeading}
          </h2>
        </div>

        {/* 1. Who We Are Corporate Overview Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#01262B]/90 border border-[#3FD0C9]/25 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-[#02353C] text-[#C1F6ED] font-bold text-xs uppercase tracking-wider border border-[#3FD0C9]/40 font-mono">
                  Verified Corporate Entity
                </span>
                <span className="text-xs font-bold text-[#2EAF7D] font-mono">
                  Initiated {COMPANY_INFO.foundedDate}
                </span>
              </div>

              <h3 className="font-['Outfit'] text-2xl sm:text-3xl font-extrabold text-white">
                {COMPANY_INFO.name}
              </h3>

              {/* Exact Description from PDF Page 2 */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {COMPANY_INFO.aboutDescription}
              </p>

              {/* Exact Additional Description from PDF Page 2 */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {COMPANY_INFO.aboutAdditionalDescription}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-[#02353C]/90 border border-[#3FD0C9]/25 flex items-start gap-3 shadow-md">
                  <FileBadge className="w-5 h-5 text-[#2EAF7D] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">
                      PEC Registered Contractor
                    </span>
                    <span className="text-slate-300">
                      Sole proprietorship initiated January 2014 as "The Premier Engineering Solutions"
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#02353C]/90 border border-[#3FD0C9]/25 flex items-start gap-3 shadow-md">
                  <Building className="w-5 h-5 text-[#3FD0C9] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">
                      SECP &amp; PSEB Registered
                    </span>
                    <span className="text-slate-300">
                      CUIN: {COMPANY_INFO.secpCuin} • Incorporated July 3, 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Brand Deck */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-[#01262B] to-[#03444D] border border-[#3FD0C9]/40 text-center shadow-xl">
              <PremierLogo size="lg" />
              <div className="mt-5 w-full pt-4 border-t border-[#3FD0C9]/20 space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-200">
                  <span>PEC Status:</span>
                  <span className="font-bold text-[#2EAF7D]">Contractor</span>
                </div>
                <div className="flex justify-between text-slate-200">
                  <span>SECP Status:</span>
                  <span className="font-bold text-[#3FD0C9]">Private Limited</span>
                </div>
                <div className="flex justify-between text-slate-200">
                  <span>PSEB Status:</span>
                  <span className="font-bold text-[#C1F6ED]">Registered</span>
                </div>
                <div className="flex justify-between text-slate-200">
                  <span>Initiated:</span>
                  <span className="font-bold text-white">{COMPANY_INFO.foundedDate}</span>
                </div>
                <div className="flex justify-between text-slate-200">
                  <span>{COMPANY_INFO.ceoTitle}:</span>
                  <span className="font-bold text-white">{COMPANY_INFO.ceo}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Real Business Values from PDF Page 2: "Solutions That Reduce Cost Increase Business Efficiency" */}
        <div className="mt-14">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-mono text-[#C1F6ED] uppercase tracking-wider font-bold block mb-1">
              Core Principles &amp; Features
            </span>
            <h3 className="font-['Outfit'] text-2xl sm:text-4xl font-extrabold text-white">
              {COMPANY_INFO.featuresHeading}
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              Our fundamental tenets for reducing client costs while maximizing operational performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUSINESS_VALUES.map((val, idx) => (
              <div
                key={val.title}
                className="p-6 rounded-3xl bg-[#01262B]/90 border border-[#3FD0C9]/25 hover:border-[#2EAF7D]/60 hover:bg-[#03444D]/50 transition-all space-y-3 shadow-xl group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#2EAF7D] font-bold">0{idx + 1}</span>
                  <div className="p-2.5 rounded-xl bg-[#02353C] border border-[#3FD0C9]/30 group-hover:scale-110 transition-transform">
                    {getBusinessValueIcon(val.iconName)}
                  </div>
                </div>
                <h4 className="font-['Outfit'] text-lg font-bold text-white group-hover:text-[#3FD0C9] transition-colors">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Real Vision & Mission Grid (from PDF Page 3) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#01262B]/90 border border-[#3FD0C9]/30 shadow-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#02353C] border border-[#3FD0C9]/40 text-[#C1F6ED] text-xs font-bold uppercase tracking-wider font-mono">
              <Eye className="w-3.5 h-3.5 text-[#3FD0C9]" />
              <span>{VISION.heading}</span>
            </div>
            <h3 className="font-['Outfit'] text-2xl font-bold text-white">
              Recognized Global Powerhouse
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {VISION.content}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#01262B]/90 border border-[#2EAF7D]/35 shadow-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#02353C] border border-[#2EAF7D]/40 text-[#2EAF7D] text-xs font-bold uppercase tracking-wider font-mono">
              <Target className="w-3.5 h-3.5 text-[#2EAF7D]" />
              <span>{MISSION.heading}</span>
            </div>
            <h3 className="font-['Outfit'] text-2xl font-bold text-white">
              Sustainable &amp; Cost-Effective Delivery
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {MISSION.content}
            </p>
          </div>
        </div>

        {/* 4. Real 4 Easy Steps Process: "Lets Start With Our Unique Solutions" (from PDF Page 3) */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#01262B] via-[#02353C] to-[#01262B] border border-[#3FD0C9]/35 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-[#C1F6ED] uppercase tracking-wider font-bold block mb-1">
              Structured Engagement Process
            </span>
            <h3 className="font-['Outfit'] text-2xl sm:text-4xl font-extrabold text-white">
              {COMPANY_INFO.easyStepsHeading}
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              A transparent four-step workflow from initial contact to delivery and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-[#02353C]/90 border border-[#3FD0C9]/25 hover:border-[#2EAF7D]/50 transition-all flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#2EAF7D] font-bold">
                      STEP {step.step}
                    </span>
                    <div className="p-2 rounded-lg bg-[#01262B] border border-[#3FD0C9]/30">
                      {getProcessIcon(step.step)}
                    </div>
                  </div>
                  <h4 className="font-['Outfit'] text-base font-bold text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="pt-4 mt-2">
                  <button
                    onClick={onOpenQuote}
                    className="w-full py-2 px-3 rounded-xl bg-[#01262B] hover:bg-[#2EAF7D] text-[#C1F6ED] hover:text-[#02353C] font-bold text-xs transition-colors border border-[#3FD0C9]/30 text-center"
                  >
                    {step.ctaText} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Leadership Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#01262B]/90 border border-[#3FD0C9]/30 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
            <div className="p-4 rounded-2xl bg-[#02353C] border border-[#3FD0C9]/30 shrink-0 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#01262B] border border-[#3FD0C9]/30 flex items-center justify-center text-[#3FD0C9] mb-3">
                <UserCheck className="w-8 h-8 text-[#2EAF7D]" />
              </div>
              <h4 className="font-['Outfit'] text-base font-bold text-white">
                {LEADERSHIP.name}
              </h4>
              <span className="text-xs text-[#3FD0C9] font-mono">
                {LEADERSHIP.title}
              </span>
              <span className="text-[11px] text-slate-300 mt-1">
                {COMPANY_INFO.name}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C1F6ED] font-bold">
                <Quote className="w-4 h-4 text-[#3FD0C9]" />
                <span>Executive Leadership Message</span>
              </div>
              <h3 className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white">
                Building Excellence, Innovation, and Trust Across Pakistan
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {LEADERSHIP.bio1}
              </p>
              <p className="text-slate-200 text-sm leading-relaxed font-medium text-[#C1F6ED]">
                {LEADERSHIP.bio2}
              </p>
            </div>
          </div>
        </div>

        {/* 6. Growth Milestones Timeline */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#01262B]/90 border border-[#3FD0C9]/30 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold text-[#C1F6ED] uppercase tracking-wider mb-1 font-mono">
                Corporate Milestones
              </div>
              <h3 className="font-['Outfit'] text-2xl font-bold text-white">
                Evolution &amp; Statutory Track Record
              </h3>
            </div>
            <span className="text-xs text-[#2EAF7D] font-mono">Verified Timeline</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {MILESTONES.map((m, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedMilestone(idx)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  selectedMilestone === idx
                    ? 'border-[#2EAF7D] bg-[#03444D] shadow-lg shadow-[#2EAF7D]/30 scale-[1.02]'
                    : 'border-[#3FD0C9]/20 bg-[#02353C]/60 hover:border-[#3FD0C9]/40'
                }`}
              >
                <div className="font-mono text-xs font-black text-[#2EAF7D]">
                  {m.year}
                </div>
                <div className="font-bold text-xs sm:text-sm text-white mt-1">
                  {m.title}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 p-6 rounded-2xl bg-[#02353C]/95 border border-[#3FD0C9]/30 flex flex-col sm:flex-row items-start justify-between gap-4">
            <div>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#2EAF7D] text-white">
                {MILESTONES[selectedMilestone].badge}
              </span>
              <h4 className="font-['Outfit'] text-lg font-bold text-white mt-2">
                {MILESTONES[selectedMilestone].year}: {MILESTONES[selectedMilestone].title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
                {MILESTONES[selectedMilestone].description}
              </p>
            </div>
            <button
              onClick={onOpenQuote}
              className="is-style-gradient flex-shrink-0 px-5 py-2.5 rounded-xl text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
            >
              <span>{COMPANY_INFO.heroCta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
