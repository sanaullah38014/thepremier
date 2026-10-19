import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedBudget?: string;
  preselectedTimeline?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'Civil Engineering & Construction',
  preselectedTimeline = 'Within 3 Months',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: preselectedService,
    location: '',
    timeline: preselectedTimeline,
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: preselectedService,
        timeline: preselectedTimeline || prev.timeline,
      }));
    }
  }, [preselectedService, preselectedTimeline]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div
      id="quote-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#011E22]/85 backdrop-blur-md animate-fadeIn text-white"
      onClick={onClose}
    >
      <div
        id="quote-modal-dialog"
        className="w-full max-w-xl bg-[#01262B] rounded-3xl shadow-2xl border border-[#3FD0C9]/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-[#01262B] to-[#03444D] text-white relative border-b border-[#3FD0C9]/30">
          <button
            id="close-quote-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 text-[#C1F6ED] text-xs font-bold uppercase tracking-wider mb-1 font-mono">
            <ShieldCheck className="w-4 h-4 text-[#449342]" />
            <span>Consultation &amp; Project Inquiry</span>
          </div>
          <h3 className="font-['Outfit'] text-2xl font-bold text-white">
            Request a Consultation
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Discuss your requirements with our technical and management team.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#449342] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#449342]/50">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-['Outfit'] text-xl font-bold text-white">
                Request Submitted Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for your interest in <strong>{COMPANY_INFO.name}</strong>. A member of our team will contact you at <strong>{formData.email || formData.phone}</strong> within 1 business day.
              </p>
              <button
                id="quote-modal-done-btn"
                onClick={onClose}
                className="is-style-gradient mt-4 px-6 py-2.5 rounded-xl text-white font-bold text-xs shadow-md transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30 text-xs sm:text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-[#3FD0C9] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Organization / Client
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company or Department"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30 text-xs sm:text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-[#3FD0C9] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30 text-xs sm:text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-[#3FD0C9] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 333 1234567"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30 text-xs sm:text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-[#3FD0C9] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30 text-xs sm:text-sm text-white focus:ring-2 focus:ring-[#3FD0C9] focus:outline-none"
                  >
                    <option>Civil Engineering &amp; Construction</option>
                    <option>IT Services &amp; Digital Solutions</option>
                    <option>General Order Supplies</option>
                    <option>Project Management &amp; Consultancy</option>
                    <option>General Consultation / Other</option>
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
                    placeholder="e.g. Buner, Swat, Islamabad"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30 text-xs sm:text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-[#3FD0C9] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Project Description / Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Outline your project scope, estimated timeline, or specific questions..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#011E22] border border-[#3FD0C9]/30 text-xs sm:text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-[#3FD0C9] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="is-style-gradient w-full py-4 rounded-2xl text-white font-bold text-xs sm:text-sm shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
