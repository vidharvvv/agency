import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { CLOUDBEE_WAY_STAGES } from '../data/cloudbeeContent';
import { CheckCircle2, Zap, Compass, Lightbulb, Rocket, Share2 } from 'lucide-react';

export const CloudBeeWay: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('stage-1');
  const activeStage = CLOUDBEE_WAY_STAGES.find((s) => s.id === activeStageId) || CLOUDBEE_WAY_STAGES[0];
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.2,
  });

  const panelRotateX = useTransform(smoothProgress, [0, 0.5, 1], [20, 0, -15]);
  const panelY = useTransform(smoothProgress, [0, 0.5, 1], [50, 0, -30]);

  const getStageIcon = (id: string) => {
    switch (id) {
      case 'stage-1': return <Compass className="w-6 h-6" />;
      case 'stage-2': return <Lightbulb className="w-6 h-6" />;
      case 'stage-3': return <Rocket className="w-6 h-6" />;
      case 'stage-4': return <Share2 className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="the-way"
      ref={containerRef}
      className="py-28 px-6 bg-[#090A0F] text-[#F8F9FA] relative overflow-hidden bg-noise border-b border-[#1E293B]"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00F5D4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#4F46E5]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#00F5D4]" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-ultra text-[#00F5D4]">
                Interactive 3D Ecosystem
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#F8F9FA]">
              THE CLOUDBEE WAY
            </h2>
          </div>
          <p className="text-base md:text-lg text-[#94A3B8] max-w-md font-sans">
            01 RISE ABOVE → 02 SHAPE THE IDEA → 03 IGNITE THE BUZZ → 04 LET IT TRAVEL.
          </p>
        </motion.div>

        {/* 3D STAGE PANELS DISPLAY WITH SCROLL ELEVATION */}
        <motion.div
          style={{ rotateX: panelRotateX, y: panelY }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[520px] transform-style-3d"
        >
          {/* Stage Selector Panels (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CLOUDBEE_WAY_STAGES.map((stage, idx) => {
              const isActive = stage.id === activeStageId;
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 40, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  onClick={() => setActiveStageId(stage.id)}
                  onMouseEnter={() => setActiveStageId(stage.id)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`p-7 rounded-2xl border cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-56 ${
                    isActive
                      ? 'bg-[#0F172A] border-[#00F5D4] shadow-[0_0_35px_rgba(0,245,212,0.25)] border-l-4 border-l-[#00F5D4]'
                      : 'bg-[#090A0F] border-[#1E293B] hover:border-[#00F5D4]/50'
                  }`}
                  data-cursor="hover"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-black text-4xl text-[#00F5D4]">
                      {stage.number}
                    </span>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center border ${
                      isActive ? 'bg-[#00F5D4] text-[#090A0F] border-white/20' : 'bg-[#0F172A] text-[#F8F9FA] border-[#1E293B]'
                    }`}>
                      {getStageIcon(stage.id)}
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-heading font-extrabold uppercase tracking-widest text-[#94A3B8] block mb-1">
                      {stage.subtitle}
                    </span>
                    <h3 className="font-display font-black text-xl text-[#F8F9FA] uppercase">
                      {stage.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Stage Detail Interactive Card (5 cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="p-8 sm:p-10 rounded-2xl bg-[#0F172A]/90 border-l-4 border-[#00F5D4] border-y border-r border-[#334155] shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="shadcn-badge">
                    STAGE {activeStage.number}
                  </span>
                  <span className="text-xs font-sans text-[#94A3B8] italic">
                    {activeStage.subtitle}
                  </span>
                </div>

                <h3 className="font-display text-3xl font-black text-[#F8F9FA] uppercase tracking-tight mb-4">
                  {activeStage.title}
                </h3>

                <p className="text-sm md:text-base text-[#F8F9FA]/90 leading-relaxed font-sans mb-6">
                  {activeStage.description}
                </p>

                <div className="p-4 bg-[#090A0F] border border-[#1E293B] mb-6 flex items-center gap-3 rounded-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00F5D4] animate-ping shrink-0" />
                  <span className="text-xs font-heading font-bold text-[#F8F9FA] uppercase tracking-wider">
                    BEE MOMENTUM: {activeStage.beeAction}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00F5D4] block mb-2">
                    Key Outputs & Focus:
                  </span>
                  {activeStage.details.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs text-[#94A3B8] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
