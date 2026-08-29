import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import type { CaseStudy } from '../data/cloudbeeContent';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onSelectNext: (nextId: string) => void;
  allCaseStudies: CaseStudy[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onSelectNext,
  allCaseStudies,
}) => {
  if (!caseStudy) return null;

  const currentIndex = allCaseStudies.findIndex((cs) => cs.id === caseStudy.id);
  const nextCaseStudy = allCaseStudies[(currentIndex + 1) % allCaseStudies.length];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#090A0F]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#090A0F] text-[#F8F9FA] w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl relative border border-[#334155] max-h-[90vh] flex flex-col bg-noise"
        >
          {/* Header Bar */}
          <div className="p-6 md:px-8 border-b border-[#1E293B] flex items-center justify-between bg-[#0F172A]/90 backdrop-blur-xl sticky top-0 z-30">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#00F5D4] text-[#090A0F] flex items-center justify-center text-xs font-heading font-extrabold">
                {caseStudy.number}
              </span>
              <div>
                <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-[#00F5D4] block">
                  {caseStudy.client}
                </span>
                <span className="font-heading font-extrabold text-sm md:text-base text-[#F8F9FA]">
                  {caseStudy.title}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-[#090A0F] text-[#F8F9FA] flex items-center justify-center hover:bg-[#00F5D4] hover:text-[#090A0F] transition-colors border border-[#334155]"
              aria-label="Close case study modal"
              data-cursor="hover"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 md:p-10 overflow-y-auto space-y-12">
            {/* Hero Card Graphic */}
            <div className={`w-full h-64 sm:h-80 md:h-96 rounded-xl bg-gradient-to-r ${caseStudy.heroGradient} p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden shadow-xl border border-white/10`}>
              <div className="flex justify-between items-start">
                <span className="text-xs uppercase font-mono tracking-widest px-3 py-1 bg-black/50 border border-white/20 backdrop-blur-md rounded-full">
                  CASE STUDY {caseStudy.year}
                </span>
                <Sparkles className="w-8 h-8 text-[#00F5D4]" />
              </div>

              <div>
                <span className="shadcn-badge mb-2">
                  {caseStudy.category}
                </span>
                <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-none mb-4">
                  {caseStudy.title}
                </h1>
                <p className="text-sm md:text-base text-white/80 font-sans max-w-2xl">
                  {caseStudy.shortDescription}
                </p>
              </div>
            </div>

            {/* Overview Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-xl bg-[#0F172A]/50 border border-[#334155] text-xs">
              <div>
                <span className="text-[#94A3B8] block uppercase font-heading font-bold tracking-wider mb-1">Client</span>
                <span className="font-heading font-extrabold text-[#F8F9FA] text-sm">{caseStudy.client}</span>
              </div>
              <div>
                <span className="text-[#94A3B8] block uppercase font-heading font-bold tracking-wider mb-1">Category</span>
                <span className="font-heading font-extrabold text-[#F8F9FA] text-sm">{caseStudy.category}</span>
              </div>
              <div>
                <span className="text-[#94A3B8] block uppercase font-heading font-bold tracking-wider mb-1">Year</span>
                <span className="font-heading font-extrabold text-[#F8F9FA] text-sm">{caseStudy.year}</span>
              </div>
              <div>
                <span className="text-[#94A3B8] block uppercase font-heading font-bold tracking-wider mb-1">Services</span>
                <span className="font-heading font-extrabold text-[#00F5D4] text-sm">
                  {caseStudy.servicesProvided.length} Core Modules
                </span>
              </div>
            </div>

            {/* Results Grid Highlights */}
            <div>
              <h3 className="text-xs font-heading font-extrabold uppercase tracking-ultra text-[#00F5D4] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Verified Impact & Results</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {caseStudy.results.map((res, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[#0F172A] text-white border border-[#334155]">
                    <span className="font-display font-black text-3xl sm:text-4xl text-[#00F5D4] block">
                      {res.value}
                    </span>
                    <span className="text-xs font-heading uppercase tracking-wider text-[#94A3B8] mt-1 block font-bold">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-[#090A0F] border-l-2 border-[#00F5D4] border-y border-r border-[#1E293B]">
                <h4 className="font-heading font-extrabold text-lg text-[#F8F9FA] uppercase mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00F5D4]" />
                  01 / The Challenge
                </h4>
                <p className="text-sm font-sans text-[#94A3B8] leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#090A0F] border-l-2 border-[#00F5D4] border-y border-r border-[#1E293B]">
                <h4 className="font-heading font-extrabold text-lg text-[#F8F9FA] uppercase mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00F5D4]" />
                  02 / Strategic Core
                </h4>
                <p className="text-sm font-sans text-[#94A3B8] leading-relaxed">
                  {caseStudy.strategy}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#090A0F] border-l-2 border-[#00F5D4] border-y border-r border-[#1E293B]">
                <h4 className="font-heading font-extrabold text-lg text-[#F8F9FA] uppercase mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00F5D4]" />
                  03 / The Creative Idea
                </h4>
                <p className="text-sm font-sans text-[#94A3B8] leading-relaxed">
                  {caseStudy.creativeIdea}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#090A0F] border-l-2 border-[#00F5D4] border-y border-r border-[#1E293B]">
                <h4 className="font-heading font-extrabold text-lg text-[#F8F9FA] uppercase mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00F5D4]" />
                  04 / Execution & Touchpoints
                </h4>
                <p className="text-sm font-sans text-[#94A3B8] leading-relaxed">
                  {caseStudy.execution}
                </p>
              </div>
            </div>

            {/* Next Project Trigger */}
            <div className="p-8 rounded-xl bg-[#0F172A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#334155]">
              <div>
                <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-[#00F5D4]">Up Next</span>
                <h3 className="font-display font-extrabold text-2xl uppercase mt-1">{nextCaseStudy.title}</h3>
              </div>

              <button
                onClick={() => onSelectNext(nextCaseStudy.id)}
                className="px-6 py-3 rounded-full bg-[#00F5D4] text-[#090A0F] font-heading font-black text-xs uppercase tracking-widest hover:bg-[#F8F9FA] transition-colors flex items-center gap-2 shadow-lg"
                data-cursor="button"
              >
                <span>View Next Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
