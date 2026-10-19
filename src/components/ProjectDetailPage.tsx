import React from 'react';
import { ArrowLeft, ArrowRight, Briefcase, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { PortfolioItem } from '../types';

interface ProjectDetailPageProps {
  project: PortfolioItem;
  onBack: () => void;
  onOpenQuote: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack, onOpenQuote }) => (
  <main className="min-h-screen bg-[#011E22] pb-20 pt-28 text-white">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <button type="button" onClick={onBack} className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#C1F6ED] transition-colors hover:text-[#3FD0C9]">
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </button>

      <div className="overflow-hidden rounded-3xl border border-[#3FD0C9]/30 bg-[#01262B] shadow-2xl">
        <div className="relative h-64 sm:h-96">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#011E22] via-[#011E22]/35 to-transparent" />
          <div className="absolute inset-x-6 bottom-6 sm:inset-x-10 sm:bottom-10">
            <span className="inline-flex items-center gap-2 rounded-md border border-[#449342]/50 bg-[#449342]/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#C1F6ED]">
              <Briefcase className="h-3.5 w-3.5" />
              {project.category}
            </span>
            <h1 className="mt-3 font-['Outfit'] text-3xl font-extrabold sm:text-5xl">{project.title}</h1>
          </div>
        </div>

        <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_18rem]">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-[#3FD0C9]">Portfolio Record</p>
            <h2 className="mt-3 font-['Outfit'] text-2xl font-bold text-white">{project.subtitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              This portfolio entry is listed by The Premier Services &amp; Solutions in its published website portfolio.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              The supplied website data identifies the project title and category above. Additional client, delivery, timeline, and outcome details were not included in the source record.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#C1F6ED]">
              <CheckCircle2 className="h-4 w-4 text-[#449342]" />
              Verified against the supplied website data extraction
            </div>
          </div>

          <aside className="self-start rounded-2xl border border-[#3FD0C9]/20 bg-[#02353C]/70 p-5">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Company</p>
            <p className="mt-2 text-sm font-semibold text-white">{COMPANY_INFO.name}</p>
            <button type="button" onClick={onOpenQuote} className="is-style-gradient mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white">
              Discuss This Project
              <ArrowRight className="h-4 w-4" />
            </button>
          </aside>
        </div>
      </div>
    </div>
  </main>
);
