import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '../data/cloudbeeContent';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

export const Services: React.FC = () => {
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>('brand-strategy');

  return (
    <section id="services" className="py-28 px-6 bg-[#090A0F] text-[#F8F9FA] relative overflow-hidden bg-noise border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#1E293B] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#00F5D4]" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-ultra text-[#00F5D4]">
                Ecosystem & Offerings
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#F8F9FA]">
              SERVICES
            </h2>
          </div>
          <p className="text-base md:text-lg text-[#94A3B8] max-w-md font-sans leading-relaxed">
            A complete ecosystem designed to build identity, amplify presence, and create meaningful impact.
          </p>
        </div>

        {/* EDITORIAL VERTICAL ROW LIST */}
        <div className="space-y-4">
          {SERVICES_DATA.map((service) => {
            const isHovered = hoveredServiceId === service.id;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredServiceId(service.id)}
                onClick={() => setHoveredServiceId(isHovered ? null : service.id)}
                className={`p-6 sm:p-8 md:p-10 rounded-2xl transition-all duration-500 border cursor-pointer relative overflow-hidden ${
                  isHovered
                    ? 'bg-[#0F172A] text-[#F8F9FA] border-[#00F5D4] shadow-[0_0_35px_rgba(0,245,212,0.2)] translate-x-3 border-l-4 border-l-[#00F5D4]'
                    : 'bg-[#090A0F] text-[#F8F9FA] border-[#1E293B] hover:border-[#334155]'
                }`}
                data-cursor="explore"
                data-cursor-label="EXPLORE"
              >
                {/* Expanding Electric Mint Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 left-0 right-0 h-1 bg-[#00F5D4] origin-left pointer-events-none"
                />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Number & Massive Typography */}
                  <div className="flex items-start md:items-center gap-6 md:gap-10">
                    <span
                      className={`font-heading font-black text-3xl sm:text-4xl md:text-5xl transition-all duration-300 ${
                        isHovered ? 'text-[#00F5D4] scale-110' : 'text-[#1E293B]'
                      }`}
                    >
                      {service.number}
                    </span>

                    <div>
                      <h3
                        className={`font-display font-black uppercase tracking-tight transition-all duration-300 ${
                          isHovered ? 'text-3xl sm:text-4xl md:text-5xl text-[#F8F9FA]' : 'text-2xl sm:text-3xl md:text-4xl text-[#F8F9FA]/90'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-sans text-[#94A3B8] mt-1 font-medium">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right Arrow Action */}
                  <div
                    className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isHovered ? 'bg-[#00F5D4] text-[#090A0F] border-white/20 rotate-45 scale-110 shadow-lg' : 'bg-[#0F172A] text-[#F8F9FA] border-[#1E293B]'
                    }`}
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

                {/* Expanded Capabilities & Abstract Visual Panel */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-8 pt-8 border-t border-[#1E293B] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      <div className="lg:col-span-8 space-y-6">
                        <p className="text-base md:text-lg text-[#F8F9FA]/90 font-sans leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-3">
                          <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00F5D4] block">
                            Capabilities & Deliverables:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.deliverables.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-2.5 text-xs text-[#94A3B8] font-medium">
                                <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Abstract Visual Graphic Card */}
                      <div className="lg:col-span-4 h-48 rounded-2xl bg-gradient-to-br from-[#090A0F] to-[#0F172A] p-6 flex flex-col justify-between border border-[#334155]">
                        <div className="flex items-center justify-between">
                          <Sparkles className="w-5 h-5 text-[#00F5D4]" />
                          <span className="text-[10px] font-mono text-[#94A3B8]">MODULE {service.number}</span>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase font-bold tracking-widest text-[#00F5D4] mb-1">Scope</div>
                          <div className="font-heading font-extrabold text-base text-[#F8F9FA]">{service.title}</div>
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
