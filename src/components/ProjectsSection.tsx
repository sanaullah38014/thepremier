import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { COMPANY_INFO, PORTFOLIO_ITEMS } from '../data/companyData';
import { PortfolioItem } from '../types';

interface ProjectsSectionProps {
  onOpenQuote?: (projectRef?: string) => void;
}

interface ProjectRowProps {
  project: PortfolioItem;
  index: number;
  active: boolean;
  onActivate: () => void;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project, index, active, onActivate }) => (
  <a
    href={`#project/${project.id}`}
    className={`project-story-row group ${active ? 'is-active' : ''}`}
    onClick={onActivate}
  >
    <div className="flex items-start gap-4 sm:gap-6">
      <span className="project-story-index">0{index + 1}</span>
      <div className="min-w-0 flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-[#449342]/40 bg-[#449342]/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#C1F6ED]">
            {project.category}
          </span>
          {project.year && <span className="text-xs font-mono text-slate-500">{project.year}</span>}
        </div>
        <h3 className="font-['Outfit'] text-2xl font-bold leading-tight text-slate-300 transition-colors duration-300 group-hover:text-white sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
          {project.description || project.subtitle}
        </p>
        {project.deliverables && project.deliverables.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.deliverables.slice(0, 3).map((deliverable) => (
              <span key={deliverable} className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#449342]" />
                {deliverable}
              </span>
            ))}
          </div>
        )}
      </div>
      <ArrowRight className="project-story-arrow mt-1 hidden h-5 w-5 shrink-0 text-[#3FD0C9] sm:block" />
    </div>
  </a>
);

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenQuote }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<(HTMLElement | null)[]>([]);
  const activeProject = PORTFOLIO_ITEMS[activeIndex] || PORTFOLIO_ITEMS[0];

  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean) as HTMLElement[];
    if (!rows.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
        const nextIndex = visible[0]?.target.getAttribute('data-project-index');
        if (nextIndex) setActiveIndex(Number(nextIndex));
      },
      { rootMargin: '-38% 0px -45% 0px', threshold: 0.1 },
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="border-t border-[#3FD0C9]/20 bg-[#011E22] py-20 text-white lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#3FD0C9]/30 bg-[#02353C] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#C1F6ED]">
            <Sparkles className="h-3.5 w-3.5 text-[#449342]" />
            <span>Verified Portfolio</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {COMPANY_INFO.portfolioHeading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            Scroll through selected engineering, infrastructure, and technology work delivered by The Premier.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="project-story-preview lg:sticky lg:top-28">
            <div className="project-story-image-wrap">
              <img key={activeProject.id} src={activeProject.image} alt={activeProject.title} className="project-story-image" />
              <div className="project-story-image-shade" />
              <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C1F6ED]">Project 0{activeIndex + 1}</span>
                <h3 className="mt-2 font-['Outfit'] text-2xl font-bold text-white sm:text-3xl">{activeProject.title}</h3>
                {activeProject.metrics && <p className="mt-2 text-sm text-[#C1F6ED]">{activeProject.metrics}</p>}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-[#3FD0C9]/20 pt-4 text-xs font-mono text-slate-400">
              <span>Scroll to explore</span>
              <span className="text-[#3FD0C9]">{String(activeIndex + 1).padStart(2, '0')} / {String(PORTFOLIO_ITEMS.length).padStart(2, '0')}</span>
            </div>
          </div>

          <div className="project-story-list">
            {PORTFOLIO_ITEMS.map((project, index) => (
              <div
                key={project.id}
                ref={(element) => {
                  rowRefs.current[index] = element;
                  element?.setAttribute('data-project-index', String(index));
                }}
              >
                <ProjectRow project={project} index={index} active={activeIndex === index} onActivate={() => setActiveIndex(index)} />
              </div>
            ))}
            <button type="button" onClick={() => onOpenQuote?.()} className="is-style-gradient mt-8 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white">
              Discuss a Project <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
