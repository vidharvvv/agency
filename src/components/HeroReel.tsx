import React, { useState } from 'react';
import { motion, MotionValue, useTransform, useSpring } from 'framer-motion';
import { Play, Sparkles, ArrowUpRight } from 'lucide-react';

interface HeroReelProps {
  scrollProgress: MotionValue<number>;
  onSelectProject?: (projectId: string) => void;
}

export const HeroReel: React.FC<HeroReelProps> = ({ scrollProgress, onSelectProject }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Crisp, fast spring — low mass = instant response, no lag
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.05,
    restDelta: 0.0001,
  });

  const reelCards = [
    { id: 'project-nexus',   title: 'PROJECT RESONANCE', client: 'Future Mobility Co.',  category: 'Brand Film & Identity',   gradient: 'from-[#0F172A] via-[#090A0F] to-[#00F5D4]' },
    { id: 'project-solaris', title: 'AURA EXPERIENTIAL',  client: 'NextGen Summit',        category: '3D Activation',           gradient: 'from-[#00F5D4] via-[#4F46E5] to-[#090A0F]' },
    { id: 'project-kairo',   title: 'VELOCITY CAMPAIGN',  client: 'Pulse Lifestyle',       category: 'Digital Strategy',        gradient: 'from-[#090A0F] via-[#6366F1] to-[#00F5D4]' },
    { id: 'project-vortex',  title: 'ELEMENTAL LUX',      client: 'Vortex Spirits',        category: 'Flagship Showcase',       gradient: 'from-[#00F5D4] via-[#090A0F] to-[#4F46E5]' },
    { id: 'project-kinetic', title: 'KINETIC SOUND',      client: 'Audio Dynamics',        category: 'Commercial Production',   gradient: 'from-[#4F46E5] via-[#00F5D4] to-[#090A0F]' },
    { id: 'project-hive',    title: 'THE HIVE SUMMIT',    client: 'CloudBee Core',         category: 'Experiential 360°',       gradient: 'from-[#090A0F] via-[#00F5D4] to-[#6366F1]' },
    { id: 'project-apex',    title: 'APEX HORIZON',       client: 'Apex Ventures',         category: 'Growth GTM',              gradient: 'from-[#00F5D4] via-[#4F46E5] to-[#090A0F]' },
  ];

  const totalCards = reelCards.length;
  const circleRadius = 440;

  return (
    <div
      className="relative w-full py-12 mb-12 md:mb-16 overflow-visible select-none z-20"
      style={{ perspective: '1400px' }}
    >
      <div
        className="flex items-center justify-center relative"
        style={{ minHeight: '480px', transformStyle: 'preserve-3d' }}
      >
        {reelCards.map((card, index) => {
          const isHovered = hoveredId === card.id;

          // Angle based on scroll
          const cardAngle = useTransform(
            smoothProgress,
            [0, 1],
            [
              (index / totalCards) * (2 * Math.PI),
              (index / totalCards) * (2 * Math.PI) + 2.5 * Math.PI,
            ]
          );

          // Pure math transforms — no extra springs per card
          const cardX       = useTransform(cardAngle, (a) => Math.sin(a) * circleRadius);
          const cardZ       = useTransform(cardAngle, (a) => Math.cos(a) * circleRadius - 100);
          const cardRotateY = useTransform(cardAngle, (a) => (a * 180) / Math.PI);
          const cardScale   = useTransform(cardAngle, (a) => 0.78 + (Math.cos(a) + 1) * 0.15);
          const cardOpacity = useTransform(cardAngle, (a) => 0.45 + (Math.cos(a) + 1) * 0.27);

          return (
            <motion.div
              key={card.id}
              style={{
                position: 'absolute',
                x: cardX,
                z: isHovered ? 260 : cardZ,
                rotateY: cardRotateY,
                scale: isHovered ? 1.25 : cardScale,
                opacity: cardOpacity,
                cursor: 'pointer',
                // GPU compositing hints — eliminate paint jank
                willChange: 'transform, opacity',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
              whileHover={{ y: -14 }}
              transition={{ y: { duration: 0.25, ease: 'easeOut' } }}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectProject && onSelectProject(card.id)}
            >
              <div
                className={`w-[220px] sm:w-[265px] md:w-[300px] h-[320px] sm:h-[375px] md:h-[420px] rounded-2xl p-6 flex flex-col justify-between border bg-gradient-to-b ${card.gradient} transition-[border-color,box-shadow] duration-200 shadow-xl ${
                  isHovered
                    ? 'border-[#00F5D4] shadow-[0_0_40px_rgba(0,245,212,0.45)] ring-1 ring-[#00F5D4]'
                    : 'border-[#334155]'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="shadcn-badge">{card.category}</span>
                  <div className="w-8 h-8 rounded-full bg-black/60 text-[#F8F9FA] flex items-center justify-center border border-white/10">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Center Icon */}
                <div className="my-auto flex justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-black/50">
                    <Sparkles className="w-7 h-7 text-[#00F5D4]" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#00F5D4] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] inline-block" />
                      {card.client}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </div>
                  <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#F8F9FA] uppercase leading-tight tracking-tight">
                    {card.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
