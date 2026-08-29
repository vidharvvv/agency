import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CloudBeeLogoSvg } from './CloudBeeLogoSvg';

export const BigStatement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.92, 1, 0.95]);
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.75, 0.9], [0.3, 1, 1, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] py-32 px-6 bg-[#090A0F] text-[#F8F9FA] flex items-center justify-center overflow-hidden bg-noise border-y border-[#1E293B]"
    >
      {/* Official CloudBee Logo Background Watermark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] md:w-[1100px] opacity-10 pointer-events-none z-0">
        <CloudBeeLogoSvg variant="background" colorTheme="dark" className="w-full h-full" />
      </div>

      {/* Dynamic Glowing Mint & Indigo Orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#00F5D4]/12 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-20 w-[400px] h-[400px] rounded-full bg-[#4F46E5]/15 blur-3xl pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          style={{ scale: textScale, opacity: textOpacity }}
          className="space-y-6 md:space-y-10"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#0F172A]/80 border border-[#334155] backdrop-blur-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00F5D4] animate-ping" />
            <span className="text-xs font-heading font-extrabold uppercase tracking-ultra text-[#00F5D4]">
              THE CORE ANTHEM
            </span>
          </div>

          {/* First Line Statement */}
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-[#F8F9FA]/70 leading-none">
            WE DON'T
            <br />
            <span className="text-[#F8F9FA]">JUST CREATE IDEAS.</span>
          </h2>

          {/* Animated Main Buzz Statement */}
          <div className="relative inline-block py-4">
            <h2 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black uppercase tracking-tighter text-[#00F5D4] leading-none glow-mint">
              WE CREATE BUZZ.
            </h2>
          </div>

          {/* Secondary Statement Transition */}
          <div className="pt-8 border-t border-[#1E293B]">
            <h3 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#F8F9FA]">
              IDEAS THAT <span className="text-[#00F5D4]">TRAVEL.</span>
            </h3>
            <p className="mt-4 text-base sm:text-lg font-sans text-[#94A3B8] max-w-xl mx-auto">
              Stories that resonate. Experiences people remember.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
