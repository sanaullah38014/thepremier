import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Send,
  CheckCircle2,
  FileCheck,
  Sparkles,
  Clock,
  HelpCircle,
  ChevronDown,
  Globe,
} from 'lucide-react';
import { COMPANY_INFO, FAQ_ITEMS } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceCategory: 'Civil Engineering & Construction',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="contact-story-section py-20 lg:py-28 bg-[#011E22] text-white border-t border-[#3FD0C9]/20 transition-colors relative"
    >
      {/* Background Ambient Glow */}
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[500px] bg-[#3FD0C9]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Exact Heading from PDF Page 4 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#02353C]/80 border border-[#3FD0C9]/30 text-[#C1F6ED] text-xs font-bold uppercase tracking-wider mb-3 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-[#449342]" />
            <span>Direct Inquiries &amp; Consultations</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {COMPANY_INFO.contactHeading}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether you have an upcoming project, need a technical consultation, require general supplies, or want to discuss a partnership — we are here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Verified Contact Details & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Corporate Profile Card */}
            <div className="p-6 rounded-3xl bg-[#01262B]/90 border border-[#3FD0C9]/30 shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#449342] animate-pulse" />
                <h4 className="font-['Outfit'] text-base font-bold text-white">
                  {COMPANY_INFO.name}
                </h4>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#011E22]/80 border border-[#3FD0C9]/20">
                  <MapPin className="w-4 h-4 text-[#449342] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Location</span>
                    <span className="text-slate-200">{COMPANY_INFO.headOffice}</span>
                  </div>
                </div>

                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#011E22]/80 border border-[#3FD0C9]/20 hover:border-[#449342]/60 transition-colors group block"
                >
                  <Phone className="w-4 h-4 text-[#3FD0C9] group-hover:text-[#449342] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">{COMPANY_INFO.phonePrompt}</span>
                    <span className="text-[#C1F6ED] font-mono text-sm font-bold">{COMPANY_INFO.phoneDisplay}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#011E22]/80 border border-[#3FD0C9]/20 hover:border-[#449342]/60 transition-colors group block"
                >
                  <Mail className="w-4 h-4 text-[#449342] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">{COMPANY_INFO.emailPrompt}</span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[#C1F6ED] font-mono">{COMPANY_INFO.email}</span>
                      <span className="text-slate-400 font-mono text-[11px]">{COMPANY_INFO.altEmail}</span>
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#011E22]/80 border border-[#3FD0C9]/20">
                  <Globe className="w-4 h-4 text-[#3FD0C9] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Official Website</span>
                    <a
                      href={COMPANY_INFO.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#C1F6ED] hover:underline font-mono"
                    >
                      {COMPANY_INFO.website}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#011E22]/80 border border-[#3FD0C9]/20">
                  <Clock className="w-4 h-4 text-[#3FD0C9] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Working Hours</span>
                    <span>{COMPANY_INFO.businessHours}</span>
                    <span className="text-slate-400 block mt-0.5">{COMPANY_INFO.weekendHours}</span>
                  </div>
                </div>
              </div>

              {/* Registration credentials */}
              <div className="pt-3 border-t border-[#3FD0C9]/20 grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2.5 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30">
                  <span className="text-slate-400 block">PEC Reg</span>
                  <span className="text-[#449342] font-bold">Contractor #{COMPANY_INFO.licenseNo}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30">
                  <span className="text-slate-400 block">SECP CUIN</span>
                  <span className="text-[#C1F6ED] font-bold">{COMPANY_INFO.secpCuin}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Consultation / Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#01262B]/90 border border-[#3FD0C9]/30 shadow-2xl">
              <h3 className="font-['Outfit'] text-xl font-bold text-white">
                Request a Consultation or Project Proposal
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Please complete the form below. Our team reviews all inquiries promptly.
              </p>

              {submitted ? (
                <div
                  id="contact-form-success"
                  className="mt-6 p-6 rounded-2xl bg-[#011E22] border border-[#449342]/50 text-center space-y-3 animate-fadeIn"
                >
                  <div className="w-12 h-12 rounded-full bg-[#449342] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#449342]/50">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-white font-['Outfit']">
                    Thank You for Contacting Us
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    We have received your message and will get back to you within 1 business day.
                  </p>
                  <button
                    id="submit-another-inquiry-btn"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        serviceCategory: 'Civil Engineering & Construction',
                        location: '',
                        message: '',
                      });
                    }}
                    className="mt-3 px-5 py-2.5 rounded-xl bg-[#02353C] hover:bg-[#3FD0C9] text-white font-semibold text-xs transition-colors border border-[#3FD0C9]/40"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="corporate-contact-form" onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3FD0C9]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3FD0C9]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 333 1234567"
                        className="w-full px-4 py-3 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3FD0C9]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Service Required
                      </label>
                      <select
                        value={formData.serviceCategory}
                        onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#3FD0C9]"
                      >
                        <option>Civil Engineering &amp; Construction</option>
                        <option>IT Services &amp; Digital Solutions</option>
                        <option>General Order Supplies</option>
                        <option>Project Management &amp; Consultancy</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Project Location / City
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Buner, Islamabad"
                        className="w-full px-4 py-3 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3FD0C9]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your requirements, project scope, or questions..."
                      className="w-full px-4 py-3 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3FD0C9]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="is-style-gradient w-full py-4 rounded-2xl text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 group"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* FAQ Accordion Section (Section 14 of Master Prompt) */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#C1F6ED] uppercase tracking-wider font-bold block mb-1">
              Common Questions
            </span>
            <h3 className="font-['Outfit'] text-2xl sm:text-4xl font-extrabold text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              Clear, transparent information regarding our registrations, capabilities, and project engagement process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {FAQ_ITEMS.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl bg-[#01262B]/80 border border-[#3FD0C9]/25 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-['Outfit'] font-bold text-sm sm:text-base text-white hover:text-[#C1F6ED] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-[#02353C] border border-[#3FD0C9]/30 text-xs font-mono text-[#449342] flex items-center justify-center shrink-0">
                        {fIdx + 1}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C1F6ED] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#449342]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#3FD0C9]/15 bg-[#011E22]/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
