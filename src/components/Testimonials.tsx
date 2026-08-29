import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../data/cloudbeeContent';
import { Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-28 px-6 bg-[#090A0F] text-[#F8F9FA] relative overflow-hidden bg-noise border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#00F5D4]" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-ultra text-[#00F5D4]">
                Client Voices & Endorsements
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#F8F9FA]">
              TESTIMONIALS
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-[#0F172A] text-[#F8F9FA] flex items-center justify-center hover:bg-[#00F5D4] hover:text-[#090A0F] transition-colors border border-[#334155]"
              aria-label="Previous testimonial"
              data-cursor="hover"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#0F172A] text-[#F8F9FA] flex items-center justify-center hover:bg-[#00F5D4] hover:text-[#090A0F] transition-colors border border-[#334155]"
              aria-label="Next testimonial"
              data-cursor="hover"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Editorial Quote Card Carousel */}
        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-14 rounded-2xl bg-[#0F172A]/80 text-[#F8F9FA] border-l-4 border-l-[#00F5D4] border-y border-r border-[#334155] shadow-2xl relative overflow-hidden flex flex-col justify-between backdrop-blur-xl"
            >
              {/* Background Quotation Mark Watermark */}
              <Quote className="absolute -top-6 -right-6 w-48 h-48 text-white/5 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="shadcn-badge">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  <span>{current.category}</span>
                </div>

                <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#F8F9FA] leading-relaxed italic">
                  “{current.quote}”
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-[#1E293B] flex items-center justify-between relative z-10">
                <div>
                  <h4 className="font-heading font-extrabold text-lg text-white uppercase">
                    {current.author}
                  </h4>
                  <p className="text-xs text-[#94A3B8] font-sans">
                    {current.role} • <span className="text-[#00F5D4] font-heading font-bold">{current.company}</span>
                  </p>
                </div>

                <div className="text-xs font-mono text-[#94A3B8]/40">
                  0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
