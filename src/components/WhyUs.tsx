import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHY_US_POINTS } from '../data/cloudbeeContent';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const [hoveredPointId, setHoveredPointId] = useState<string | null>('strategic-thinking');

  return (
    <section id="why-us" className="py-28 px-6 bg-[#090A0F] text-[#F8F9FA] relative overflow-hidden bg-noise border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#1E293B] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#00F5D4]" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-ultra text-[#00F5D4]">
                Our Structural Pillars
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#F8F9FA]">
              WHY US
            </h2>
          </div>
          <p className="text-base md:text-lg text-[#94A3B8] max-w-md font-sans">
            Four massive typographic posters defining CloudBee's edge over conventional agencies.
          </p>
        </div>

        {/* FOUR MASSIVE TYPOGRAPHIC POSTERS */}
        <div className="space-y-6">
          {WHY_US_POINTS.map((point) => {
            const isHovered = hoveredPointId === point.id;

            return (
              <motion.div
                key={point.id}
                onMouseEnter={() => setHoveredPointId(point.id)}
                onClick={() => setHoveredPointId(isHovered ? null : point.id)}
                className={`p-8 md:p-14 rounded-2xl transition-all duration-500 border cursor-pointer relative overflow-hidden ${
                  isHovered
                    ? 'bg-[#0F172A] text-[#F8F9FA] border-[#00F5D4] shadow-[0_0_35px_rgba(0,245,212,0.2)] border-l-4 border-l-[#00F5D4]'
                    : 'bg-[#090A0F] text-[#F8F9FA] border-[#1E293B] hover:border-[#334155]'
                }`}
                data-cursor="hover"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Number & Massive Typography */}
                  <div className="flex items-start md:items-center gap-6 md:gap-10">
                    <span
                      className={`font-heading font-black text-4xl md:text-6xl transition-colors duration-300 ${
                        isHovered ? 'text-[#00F5D4]' : 'text-[#1E293B]'
                      }`}
                    >
                      {point.number}
                    </span>
                    <div>
                      <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F8F9FA]">
                        {point.title}
                      </h3>
                      <p
                        className={`text-sm md:text-base font-sans mt-2 font-medium ${
                          isHovered ? 'text-[#00F5D4]' : 'text-[#94A3B8]'
                        }`}
                      >
                        {point.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Expand Arrow Button */}
                  <div
                    className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isHovered ? 'bg-[#00F5D4] text-[#090A0F] border-white/20 rotate-45 scale-110' : 'bg-[#0F172A] text-[#F8F9FA] border-[#1E293B]'
                    }`}
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

                {/* Expanded Poster Content */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="mt-8 pt-8 border-t border-[#1E293B] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      <div className="lg:col-span-8">
                        <p className="text-base md:text-lg text-[#F8F9FA]/90 font-sans leading-relaxed font-normal">
                          {point.expandedDesc}
                        </p>
                      </div>

                      <div className="lg:col-span-4 p-5 rounded-xl bg-[#090A0F] border border-[#334155] flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-[#00F5D4] shrink-0" />
                        <div className="text-xs text-[#94A3B8] font-semibold">
                          <span className="text-[#00F5D4] block uppercase font-heading font-extrabold">Standard</span>
                          {point.impactMetric}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
