import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const CreativeManifesto: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const manifestoLines = [
    { text: "Ideas form.", color: "text-[#94A3B8]/60" },
    { text: "Ideas evolve.", color: "text-[#F8F9FA]/80" },
    { text: "Ideas move.", color: "text-[#F8F9FA]" },
    { text: "Ideas spread.", color: "text-[#00F5D4]" },
  ];

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-[#090A0F] text-[#F8F9FA] relative overflow-hidden bg-noise border-b border-[#1E293B] flex items-center justify-center min-h-[85vh]"
    >
      {/* Background Particle Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#00F5D4]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
        <span className="shadcn-badge">
          THE CREATIVE MANIFESTO
        </span>

        {/* Staggered Animated Word Sequence */}
        <div className="space-y-4 md:space-y-6">
          {manifestoLines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.3 }}
              className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black uppercase tracking-tight ${line.color}`}
            >
              {line.text}
            </motion.div>
          ))}
        </div>

        {/* Grand Final Anthem Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.9, delay: 1.6 }}
          className="pt-8 border-t border-[#1E293B]"
        >
          <h2 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black uppercase tracking-tighter text-[#00F5D4] glow-mint leading-none">
            THAT'S THE REAL BUZZ.
          </h2>
          <p className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest text-[#94A3B8] mt-6">
            CloudBee Agency • Strategy × Art × Execution
          </p>
        </motion.div>
      </div>
    </section>
  );
};
