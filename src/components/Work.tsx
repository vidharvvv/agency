import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../data/cloudbeeContent';
import type { CaseStudy } from '../data/cloudbeeContent';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';

export const Work: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const categories = ['ALL', 'Brand Strategy', 'Creative', 'Digital Marketing', 'Events', 'Production'];

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (selectedCategory === 'ALL') return true;
    return study.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <section id="work" className="py-28 px-6 bg-[#090A0F] text-[#F8F9FA] relative overflow-hidden bg-noise border-b border-[#1E293B]">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#00F5D4]/10 blur-3xl pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#00F5D4]" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-ultra text-[#00F5D4]">
                Portfolio & Flagship Cases
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#F8F9FA]">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-base md:text-lg text-[#94A3B8] max-w-md font-sans">
            Floating physical panels in dark 3D space. Explore strategy, creative direction, and campaign impact.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-12 no-scrollbar">
          <Filter className="w-4 h-4 text-[#00F5D4] shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-heading font-extrabold uppercase tracking-wider transition-all duration-200 shrink-0 border ${
                selectedCategory === cat
                  ? 'bg-[#00F5D4] text-[#090A0F] border-[#00F5D4] shadow-[0_0_20px_rgba(0,245,212,0.3)]'
                  : 'bg-[#0F172A] text-[#94A3B8] border-[#334155] hover:bg-[#1E293B] hover:text-[#F8F9FA]'
              }`}
              data-cursor="hover"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Floating Project Panel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {filteredStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => setActiveModalStudy(study)}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group cursor-pointer flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0F172A]/80 border border-[#334155] hover:border-[#00F5D4] transition-all duration-500 shadow-2xl backdrop-blur-xl relative overflow-hidden"
              data-cursor="view"
              data-cursor-label="VIEW"
            >
              {/* Project Card Media Graphic */}
              <div
                className={`w-full h-72 sm:h-80 md:h-96 rounded-xl bg-gradient-to-br ${study.heroGradient} p-8 text-[#F8F9FA] flex flex-col justify-between relative overflow-hidden shadow-2xl border border-white/10 group-hover:border-[#00F5D4] transition-colors`}
              >
                <div className="flex justify-between items-start z-10">
                  <span className="font-heading font-black text-2xl md:text-3xl text-white/90">
                    {study.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#090A0F]/50 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#00F5D4] group-hover:text-[#090A0F] transition-colors border border-white/10">
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>

                <div className="z-10">
                  <span className="shadcn-badge mb-2">
                    {study.client}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
                    {study.title}
                  </h3>
                </div>
              </div>

              {/* Project Card Text Details */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-[#94A3B8] font-heading font-extrabold uppercase tracking-wider">
                  <span>{study.category}</span>
                  <span>{study.year}</span>
                </div>

                <p className="text-sm font-sans text-[#94A3B8] leading-relaxed line-clamp-2">
                  {study.shortDescription}
                </p>

                {/* Primary Metric Preview */}
                <div className="pt-4 border-t border-[#1E293B] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00F5D4]" />
                    <span className="text-xs font-heading font-extrabold text-[#F8F9FA]">
                      {study.results[0]?.label}: {study.results[0]?.value}
                    </span>
                  </div>

                  <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#00F5D4] group-hover:underline flex items-center gap-1">
                    View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Reader */}
      <CaseStudyModal
        caseStudy={activeModalStudy}
        onClose={() => setActiveModalStudy(null)}
        onSelectNext={(nextId) => {
          const next = CASE_STUDIES.find((cs) => cs.id === nextId);
          if (next) setActiveModalStudy(next);
        }}
        allCaseStudies={CASE_STUDIES}
      />
    </section>
  );
};
