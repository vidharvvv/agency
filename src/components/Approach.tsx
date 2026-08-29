import React from 'react';
import { motion } from 'framer-motion';
import { APPROACH_STAGES } from '../data/cloudbeeContent';
import { ArrowDown, Sparkles, Target, Eye, Zap, TrendingUp } from 'lucide-react';

export const Approach: React.FC = () => {
  const getStageIcon = (id: string) => {
    switch (id) {
      case 'understand': return <Target className="w-6 h-6 text-[#00F5D4]" />;
      case 'imagine': return <Eye className="w-6 h-6 text-[#00F5D4]" />;
      case 'activate': return <Zap className="w-6 h-6 text-[#00F5D4]" />;
      case 'grow': return <TrendingUp className="w-6 h-6 text-[#00F5D4]" />;
      default: return <Sparkles className="w-6 h-6 text-[#00F5D4]" />;
    }
  };

  return (
    <section id="approach" className="py-28 px-6 bg-[#090A0F] text-[#F8F9FA] relative overflow-hidden bg-noise border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#00F5D4]" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-ultra text-[#00F5D4]">
                Continuous Path Methodology
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#F8F9FA]">
              OUR APPROACH
            </h2>
          </div>
          <p className="text-base md:text-lg text-[#94A3B8] max-w-md font-sans">
            UNDERSTAND ↓ IMAGINE ↓ ACTIVATE ↓ GROW. A continuous animated journey converting strategy into market impact.
          </p>
        </div>

        {/* Continuous Animated Path Architecture */}
        <div className="relative">
          {/* Connecting Animated Path Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0F172A] via-[#00F5D4] to-[#0F172A] -translate-y-1/2 z-0 opacity-40" />

          {/* Traveling Mint Particle along the Path */}
          <motion.div
            animate={{ x: ['0%', '100%', '0%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="hidden lg:block absolute top-1/2 left-0 w-4 h-4 rounded-full bg-[#00F5D4] shadow-[0_0_20px_#00F5D4] -translate-y-1/2 z-20 pointer-events-none"
          />

          {/* Grid of 4 Stages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {APPROACH_STAGES.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-8 rounded-2xl bg-[#0F172A]/80 border-l-4 border-l-[#00F5D4] border-y border-r border-[#334155] backdrop-blur-xl relative group hover:border-[#00F5D4] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Down Arrow for Mobile / Flow Indicator */}
                {index < APPROACH_STAGES.length - 1 && (
                  <div className="lg:hidden flex justify-center py-2 text-[#00F5D4]">
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#090A0F] border border-[#1E293B] flex items-center justify-center">
                      {getStageIcon(stage.id)}
                    </div>
                    <span className="shadcn-badge">
                      {stage.eyebrow}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-black uppercase tracking-tight text-[#F8F9FA] mb-3">
                    {stage.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[#94A3B8] font-sans leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1E293B] space-y-1.5">
                  {stage.deliverables.map((item, i) => (
                    <div key={i} className="text-[11px] font-medium text-[#94A3B8] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Path Flow Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-[#0F172A]/60 border border-[#334155] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#00F5D4]" />
            <span className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest text-[#F8F9FA]">
              UNDERSTAND ↓ IMAGINE ↓ ACTIVATE ↓ GROW
            </span>
          </div>
          <span className="text-xs text-[#94A3B8] font-sans italic">
            Continuous loop of creative refinement & business expansion
          </span>
        </div>
      </div>
    </section>
  );
};
