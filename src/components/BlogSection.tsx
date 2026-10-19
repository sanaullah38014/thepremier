import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS, COMPANY_INFO } from '../data/companyData';
import { BlogPostItem } from '../types';

interface BlogRowProps {
  post: BlogPostItem;
  index: number;
  active: boolean;
  onActivate: () => void;
}

const BlogRow: React.FC<BlogRowProps> = ({ post, index, active, onActivate }) => (
  <article
    className={`blog-story-row group ${active ? 'is-active' : ''}`}
    onClick={onActivate}
  >
    <div className="flex items-start gap-4 sm:gap-6">
      <span className="blog-story-index">0{index + 1}</span>
      <div className="min-w-0 flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
          <span className="rounded-md border border-[#3FD0C9]/30 bg-[#02353C] px-2 py-1 text-[#C1F6ED]">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-['Outfit'] text-2xl font-bold leading-tight text-slate-300 transition-colors duration-300 group-hover:text-white sm:text-3xl">
          {post.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
          {post.excerpt}
        </p>
        <span className="blog-story-read-link mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3FD0C9]">
          Read insight <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  </article>
);

export const BlogSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<(HTMLElement | null)[]>([]);
  const activePost = BLOG_POSTS[activeIndex] || BLOG_POSTS[0];

  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean) as HTMLElement[];
    if (!rows.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
        const nextIndex = visible[0]?.target.getAttribute('data-blog-index');
        if (nextIndex) setActiveIndex(Number(nextIndex));
      },
      { rootMargin: '-38% 0px -45% 0px', threshold: 0.1 },
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" className="blog-story-section border-t border-[#3FD0C9]/20 bg-[#011E22] py-20 text-white lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#3FD0C9]/30 bg-[#02353C] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#C1F6ED]">
            <BookOpen className="h-3.5 w-3.5 text-[#449342]" />
            <span>Insights &amp; Industry Knowledge</span>
          </div>
          <h2 className="font-['Outfit'] text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {COMPANY_INFO.blogSectionHeading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            Scroll through practical perspectives on engineering delivery, technology, and dependable operations.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="blog-story-preview lg:sticky lg:top-28">
            <div className="blog-story-image-wrap">
              <img key={activePost.id} src={activePost.image} alt={activePost.title} className="blog-story-image" />
              <div className="blog-story-image-shade" />
              <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C1F6ED]">Technical Bulletin 0{activeIndex + 1}</span>
                <h3 className="mt-2 font-['Outfit'] text-2xl font-bold text-white sm:text-3xl">{activePost.title}</h3>
                <p className="mt-2 text-sm text-[#C1F6ED]">{activePost.author}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-[#3FD0C9]/20 pt-4 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-[#449342]" /> {activePost.date}</span>
              <span className="text-[#3FD0C9]">{String(activeIndex + 1).padStart(2, '0')} / {String(BLOG_POSTS.length).padStart(2, '0')}</span>
            </div>
          </div>

          <div className="blog-story-list">
            {BLOG_POSTS.map((post, index) => (
              <div
                key={post.id}
                ref={(element) => {
                  rowRefs.current[index] = element;
                  element?.setAttribute('data-blog-index', String(index));
                }}
              >
                <BlogRow post={post} index={index} active={activeIndex === index} onActivate={() => setActiveIndex(index)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
