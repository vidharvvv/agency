import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { STATS_DATA } from '../data/cloudbeeContent';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

export const Stats: React.FC = () => {
  const [showRealData, setShowRealData] = useState<boolean>(false);

  return (
    <section className="py-24 px-6 bg-[#090A0F] text-[#F8F9FA] relative overflow-hidden bg-noise border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-px bg-[#00F5D4]" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-ultra text-[#00F5D4]">
                Proven Momentum
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#F8F9FA]">
              THE CLOUDBEE IMPACT
            </h2>
          </div>

          <button
            onClick={() => setShowRealData(!showRealData)}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#0F172A] border border-[#334155] hover:border-[#00F5D4] transition-colors text-xs font-heading font-extrabold uppercase tracking-wider text-[#F8F9FA]"
            data-cursor="hover"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#00F5D4]" />
            <span>Mode: {showRealData ? 'Live Data Sample' : 'Placeholder CMS ([XX]+)'}</span>
          </button>
        </div>

        {/* 4 Large Metric Cards (shadcn UI inspired) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-[#0F172A]/80 text-[#F8F9FA] border-l-4 border-l-[#00F5D4] border-y border-r border-[#334155] shadow-xl relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300 backdrop-blur-xl"
            >
              <Sparkles className="w-6 h-6 text-[#00F5D4] mb-6" />

              <div className="font-display font-black text-5xl sm:text-6xl text-[#00F5D4] tracking-tight leading-none mb-3 glow-mint">
                {showRealData ? stat.realValue : stat.placeholder}
              </div>

              <div className="text-sm font-heading font-extrabold uppercase tracking-wider text-[#F8F9FA]">
                {stat.label}
              </div>

              <div className="mt-4 pt-4 border-t border-[#1E293B] text-[10px] uppercase font-mono text-[#94A3B8]">
                Ready for verified telemetry
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
