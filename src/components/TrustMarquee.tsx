import React from 'react';
import { ShieldCheck, Building, Cpu, PackageCheck, ClipboardCheck, Sparkles, CheckCircle2, HeartHandshake } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const TrustMarquee: React.FC = () => {
  const accreditations = [
    { name: 'Pakistan Engineering Council', role: 'Registered Contractor', badge: `License #${COMPANY_INFO.licenseNo}`, icon: ShieldCheck, color: 'text-[#2EAF7D]' },
    { name: 'SECP Registered', role: 'Private Limited Company', badge: `CUIN: ${COMPANY_INFO.secpCuin}`, icon: Building, color: 'text-[#3FD0C9]' },
    { name: 'Civil Engineering & Construction', role: 'Infrastructure Works', badge: 'Standard Practices', icon: Sparkles, color: 'text-[#C1F6ED]' },
    { name: 'IT Services & Digital Solutions', role: 'Enterprise Systems', badge: 'Custom Solutions', icon: Cpu, color: 'text-[#2EAF7D]' },
    { name: 'General Order Supplies', role: 'Sourcing & Delivery', badge: 'Timely Logistics', icon: PackageCheck, color: 'text-[#3FD0C9]' },
    { name: 'Project Management & Consultancy', role: 'Planning & BOQ', badge: 'QA/QC Rigor', icon: ClipboardCheck, color: 'text-[#C1F6ED]' },
    { name: 'Founded in January 2014', role: 'Established Experience', badge: '10+ Years', icon: CheckCircle2, color: 'text-[#2EAF7D]' },
    { name: 'Quality & Safety Commitment', role: 'HSE Protocols', badge: 'Responsible Delivery', icon: HeartHandshake, color: 'text-[#3FD0C9]' },
  ];

  return (
    <div className="w-full py-7 border-y border-[#3FD0C9]/20 bg-[#02353C]/95 backdrop-blur-xl overflow-hidden relative text-white">
      {/* Side Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#02353C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#02353C] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-3.5 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C1F6ED]">
        <span className="w-2 h-2 rounded-full bg-[#2EAF7D] animate-ping" />
        <span>Verified Corporate Registrations &amp; Core Disciplines</span>
      </div>

      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8">
          {accreditations.concat(accreditations).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#01262B]/85 border border-[#3FD0C9]/25 shadow-lg shadow-[#011E22]/80 hover:border-[#3FD0C9]/70 hover:shadow-[0_0_20px_rgba(63,208,201,0.2)] transition-all flex-shrink-0 group"
              >
                <div className={`p-2.5 rounded-xl bg-[#02353C] ${item.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-[#3FD0C9] transition-colors whitespace-nowrap">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-slate-300 flex items-center gap-1.5 whitespace-nowrap mt-0.5">
                    <span>{item.role}</span>
                    <span className="text-[#C1F6ED]/40">•</span>
                    <span className="text-[#3FD0C9] font-mono font-medium">{item.badge}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
