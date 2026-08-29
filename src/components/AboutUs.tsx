import React from 'react';
import { motion } from 'framer-motion';
import { CLOUDBEE_BRAND } from '../data/cloudbeeContent';
import { Cloud, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-28 px-6 bg-[#090A0F] text-[#F8F9FA] relative overflow-hidden bg-noise border-b border-[#1E293B]">
      {/* Background Visual Motif */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-[#00F5D4]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-[#4F46E5]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#00F5D4]" />
          <span className="text-xs font-heading font-extrabold uppercase tracking-ultra text-[#00F5D4]">
            ABOUT CLOUDBEE
          </span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Display Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-[#F8F9FA] leading-[0.9]">
              RISE ABOVE
              <br />
              <span className="text-[#00F5D4]">THE NOISE.</span>
            </h2>

            <div className="p-6 rounded-2xl bg-[#0F172A] border-l-4 border-l-[#00F5D4] border-y border-r border-[#334155] flex items-center gap-4">
              <Cloud className="w-8 h-8 text-[#00F5D4] shrink-0" />
              <p className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#F8F9FA]">
                Combining strategy, creativity, and high-craft production into one fluid agency model.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-8"
          >
            <p className="text-lg md:text-xl font-sans text-[#F8F9FA] leading-relaxed font-medium">
              {CLOUDBEE_BRAND.positioning}
            </p>

            <div className="space-y-4 text-sm font-sans text-[#94A3B8] leading-relaxed">
              <p>
                In a hyper-saturated digital landscape, attention isn't bought—it's earned through magnetic stories, unforgettable experiences, and strategic precision.
              </p>
              <p>
                At CloudBee, we operate at the intersection of imagination and execution. We don't believe in generic templates or fragmented agency handoffs. We craft holistic brand universes that connect with human emotions and drive long-term business equity.
              </p>
            </div>

            {/* Core Capability Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1E293B]">
              <div className="flex items-center gap-2 text-xs font-heading font-extrabold text-[#F8F9FA]">
                <CheckCircle2 className="w-4 h-4 text-[#00F5D4]" />
                <span>360° Brand Strategy</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-heading font-extrabold text-[#F8F9FA]">
                <CheckCircle2 className="w-4 h-4 text-[#00F5D4]" />
                <span>Creative Direction</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-heading font-extrabold text-[#F8F9FA]">
                <CheckCircle2 className="w-4 h-4 text-[#00F5D4]" />
                <span>Full-Scale Production</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-heading font-extrabold text-[#F8F9FA]">
                <CheckCircle2 className="w-4 h-4 text-[#00F5D4]" />
                <span>Experiential Activations</span>
              </div>
            </div>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#00F5D4] text-[#090A0F] font-heading font-extrabold text-xs uppercase tracking-widest hover:bg-[#F8F9FA] transition-colors border border-[#00F5D4]"
                data-cursor="button"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
