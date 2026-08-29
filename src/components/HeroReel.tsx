import React, { useState } from 'react';
import { motion, MotionValue, useTransform, useSpring } from 'framer-motion';
import { Play, Sparkles, ArrowUpRight } from 'lucide-react';

interface HeroReelProps {
  scrollProgress: MotionValue<number>;
  onSelectProject?: (projectId: string) => void;
}

export const HeroReel: React.FC<HeroReelProps> = ({ scrollProgress, onSelectProject }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Fast GPU responsive spring physics for 60fps revolving wheel
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 70,
    damping: 26,
    mass: 0.1,
    restDelta: 0.0001,
  });

  // 7 Flagship projects placed in 3D Circular Orbit
  const reelCards = [
    {
      id: 'project-nexus',
      title: 'PROJECT RESONANCE',
      client: 'Future Mobility Co.',
      category: 'Brand Film & Identity',
      gradient: 'from-[#0F172A] via-[#090A0F] to-[#00F5D4]',
    },
    {
      id: 'project-solaris',
      title: 'AURA EXPERIENTIAL',
      client: 'NextGen Summit',
      category: '3D Activation',
      gradient: 'from-[#00F5D4] via-[#4F46E5] to-[#090A0F]',
    },
    {
      id: 'project-kairo',
      title: 'VELOCITY CAMPAIGN',
      client: 'Pulse Lifestyle',
      category: 'Digital Strategy',
      gradient: 'from-[#090A0F] via-[#6366F1] to-[#00F5D4]',
    },
    {
      id: 'project-vortex',
      title: 'ELEMENTAL LUX',
      client: 'Vortex Spirits',
      category: 'Flagship Showcase',
      gradient: 'from-[#00F5D4] via-[#090A0F] to-[#4F46E5]',
    },
    {
      id: 'project-kinetic',
      title: 'KINETIC SOUND',
      client: 'Audio Dynamics',
      category: 'Commercial Production',
      gradient: 'from-[#4F46E5] via-[#00F5D4] to-[#090A0F]',
    },
    {
      id: 'project-hive',
      title: 'THE HIVE SUMMIT',
      client: 'CloudBee Core',
      category: 'Experiential 360°',
      gradient: 'from-[#090A0F] via-[#00F5D4] to-[#6366F1]',
    },
    {
      id: 'project-apex',
      title: 'APEX HORIZON',
      client: 'Apex Ventures',
      category: 'Growth GTM',
      gradient: 'from-[#00F5D4] via-[#4F46E5] to-[#090A0F]',
    },
  ];

  const totalCards = reelCards.length;
  const circleRadius = 440; // 3D Circle Radius in pixels

  return (
    <div className="relative w-full py-12 mb-12 md:mb-16 overflow-visible perspective-[1400px] select-none z-20">
      {/* 3D Revolving Circle Gallery Container */}
      <motion.div
        style={{ transformStyle: 'preserve-3d' }}
        className="flex items-center justify-center min-h-[420px] sm:min-h-[480px] md:min-h-[540px] transform-style-3d relative"
      >
        {reelCards.map((card, index) => {
          const isHovered = hoveredId === card.id;

          // Compute angle around 3D revolving circle
          const cardAngle = useTransform(
            smoothProgress,
            [0, 1],
            [
              (index / totalCards) * (2 * Math.PI),
              (index / totalCards) * (2 * Math.PI) + 2.5 * Math.PI,
            ]
          );

          // 3D Circular Orbit Coordinates
          const cardX = useTransform(cardAngle, (angle) => Math.sin(angle) * circleRadius);
          const cardZ = useTransform(cardAngle, (angle) => Math.cos(angle) * circleRadius - 100);
          const cardRotateY = useTransform(cardAngle, (angle) => (angle * 180) / Math.PI);
          const cardScale = useTransform(cardAngle, (angle) => 0.82 + (Math.cos(angle) + 1) * 0.14);
          const cardOpacity = useTransform(cardAngle, (angle) => 0.5 + (Math.cos(angle) + 1) * 0.25);

          return (
            <motion.div
              key={card.id}
              style={{
                x: cardX,
                z: isHovered ? 260 : cardZ,
                rotateY: cardRotateY,
                scale: isHovered ? 1.28 : cardScale,
                opacity: cardOpacity,
                cursor: 'pointer',
                willChange: 'transform, opacity',
              }}
              animate={{
                y: isHovered ? -16 : [0, index % 2 === 0 ? -10 : -14, 0],
              }}
              transition={{
                y: isHovered
                  ? { duration: 0.3 }
                  : { duration: 4 + (index % 3), repeat: Infinity, ease: 'easeInOut', delay: index * 0.35 },
              }}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectProject && onSelectProject(card.id)}
              className={`absolute w-[220px] sm:w-[270px] md:w-[310px] h-[320px] sm:h-[380px] md:h-[430px] rounded-2xl p-6 flex flex-col justify-between border cursor-pointer transition-colors duration-200 shadow-xl bg-[#0F172A] bg-gradient-to-b ${card.gradient} ${
                isHovered
                  ? 'border-[#00F5D4] shadow-[0_0_45px_rgba(0,245,212,0.5)] z-50 ring-2 ring-[#00F5D4]'
                  : 'border-[#334155] opacity-90 hover:opacity-100 z-10'
              }`}
              data-cursor="view"
              data-cursor-label="VIEW"
            >
              {/* Top Badge (shadcn UI inspired) */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="shadcn-badge">
                  {card.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#090A0F]/80 text-[#F8F9FA] flex items-center justify-center group-hover:bg-[#00F5D4] group-hover:text-[#090A0F] transition-colors border border-white/10">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Center Abstract Graphic Motif */}
              <div className="relative z-10 my-auto flex justify-center">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-[#090A0F]/60 group-hover:border-[#00F5D4] group-hover:scale-110 transition-transform duration-200">
                  <Sparkles className="w-7 h-7 text-[#00F5D4]" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-ping" />
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#00F5D4] block">
                      {card.client}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-[#00F5D4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h4 className="font-heading font-extrabold text-sm sm:text-base md:text-lg text-[#F8F9FA] uppercase leading-tight tracking-tight">
                  {card.title}
                </h4>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
