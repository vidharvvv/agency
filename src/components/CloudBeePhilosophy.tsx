import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Cloud, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { CLOUDBEE_BRAND } from '../data/cloudbeeContent';

export const CloudBeePhilosophy: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'cloud' | 'bee' | 'both'>('both');
  const sectionRef = React.useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.2,
  });

  // Parallax scroll effects
  const headlineY = useTransform(smoothProgress, [0, 0.5, 1], [60, 0, -40]);
  const headlineScale = useTransform(smoothProgress, [0, 0.5, 1], [0.94, 1, 0.98]);
  const cardsRotateX = useTransform(smoothProgress, [0, 0.4, 1], [15, 0, -10]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 bg-[#090A0F] text-[#F8F9FA] relative overflow-hidden bg-noise border-t border-[#1E293B]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-[#00F5D4]" />
          <span className="text-xs font-heading font-extrabold uppercase tracking-ultra text-[#00F5D4]">
            ABOUT CLOUDBEE
          </span>
        </motion.div>

        {/* Large Editorial Headline with Parallax Scroll */}
        <motion.h2
          style={{ y: headlineY, scale: headlineScale }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#F8F9FA] leading-[0.95] max-w-5xl"
        >
          Every remarkable campaign begins as an idea forming in the{' '}
          <span className="text-[#00F5D4] underline decoration-[#00F5D4]/40 underline-offset-8">
            cloud.
          </span>
        </motion.h2>

        {/* Center Framed Split Composition */}
        <motion.div
          style={{ rotateX: cardsRotateX }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start transform-style-3d"
        >
          {/* Left Column: Positioning Statement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-[#0F172A]/80 border-l-4 border-l-[#00F5D4] border-y border-r border-[#334155] backdrop-blur-xl shadow-xl">
              <div className="text-xs uppercase tracking-widest font-heading font-extrabold text-[#00F5D4] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Strategic Foundation</span>
              </div>
              <p className="text-lg md:text-xl font-sans text-[#F8F9FA] leading-relaxed font-medium">
                {CLOUDBEE_BRAND.positioning}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual Dual Split CLOUD vs BEE */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* CLOUD Side */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.25 }}
              onMouseEnter={() => setActiveTab('cloud')}
              onMouseLeave={() => setActiveTab('both')}
              className={`p-8 rounded-2xl transition-all duration-500 relative overflow-hidden border ${
                activeTab === 'cloud'
                  ? 'bg-[#0F172A] text-[#F8F9FA] border-[#00F5D4] shadow-[0_0_35px_rgba(0,245,212,0.2)] scale-[1.02]'
                  : 'bg-[#090A0F]/90 text-[#F8F9FA] border-[#1E293B]'
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-full bg-[#00F5D4]/15 flex items-center justify-center border border-[#00F5D4]/30">
                  <Cloud className="w-6 h-6 text-[#00F5D4]" />
                </div>
                <span className="font-heading font-black text-4xl opacity-20">01</span>
              </div>

              <h3 className="font-display text-2xl font-black uppercase tracking-tight mb-3 text-[#F8F9FA]">
                {CLOUDBEE_BRAND.concept.cloud.title}
              </h3>

              <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed font-sans mb-6">
                {CLOUDBEE_BRAND.concept.cloud.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {CLOUDBEE_BRAND.concept.cloud.keywords.map((word) => (
                  <span key={word} className="shadcn-badge">
                    {word}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* BEE Side */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.35 }}
              onMouseEnter={() => setActiveTab('bee')}
              onMouseLeave={() => setActiveTab('both')}
              className={`p-8 rounded-2xl transition-all duration-500 relative overflow-hidden border ${
                activeTab === 'bee'
                  ? 'bg-[#0F172A] text-[#F8F9FA] border-[#00F5D4] shadow-[0_0_35px_rgba(0,245,212,0.2)] scale-[1.02]'
                  : 'bg-[#090A0F]/90 text-[#F8F9FA] border-[#1E293B]'
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-full bg-[#00F5D4]/15 flex items-center justify-center border border-[#00F5D4]/30">
                  <Zap className="w-6 h-6 text-[#00F5D4]" />
                </div>
                <span className="font-heading font-black text-4xl opacity-20">02</span>
              </div>

              <h3 className="font-display text-2xl font-black uppercase tracking-tight mb-3 text-[#F8F9FA]">
                {CLOUDBEE_BRAND.concept.bee.title}
              </h3>

              <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed font-sans mb-6">
                {CLOUDBEE_BRAND.concept.bee.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {CLOUDBEE_BRAND.concept.bee.keywords.map((word) => (
                  <span key={word} className="shadcn-badge">
                    {word}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Synthesis Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-[#0F172A]/90 text-[#F8F9FA] flex flex-col md:flex-row items-center justify-between gap-6 border border-[#334155] backdrop-blur-xl"
        >
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-[#00F5D4] animate-ping shrink-0" />
            <span className="font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase text-[#F8F9FA]">
              THE ALCHEMY: IMAGINATION (CLOUD) + ACTION (BEE) = UNSTOPPABLE BUZZ
            </span>
          </div>
          <a
            href="#the-way"
            className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#00F5D4] hover:text-white transition-colors shrink-0"
          >
            <span>See How It Works</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
