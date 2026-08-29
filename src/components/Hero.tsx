import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { HeroReel } from './HeroReel';
import { CLOUDBEE_BRAND } from '../data/cloudbeeContent';
import { CloudBeeLogoSvg } from './CloudBeeLogoSvg';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buzzRef = useRef<HTMLHeadingElement | null>(null);
  
  // Mouse position tracking for Mouse Light & Parallax
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000, targetX: 0, targetY: 0 });
  const [isNearBuzz, setIsNearBuzz] = useState(false);

  // Track scroll progress throughout sticky container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 22,
    mass: 0.2,
    restDelta: 0.0001,
  });

  // 9. SCROLL TRANSFORMATION: CAMERA FLY-THROUGH VIA BUZZ EXPANSION
  const textUpY = useTransform(smoothProgress, [0, 1], [0, -140]);
  const textFade = useTransform(smoothProgress, [0, 0.6, 1], [1, 0.9, 0.2]);
  
  // BUZZ Zoom through camera effect as user scrolls
  const buzzZoomScale = useTransform(smoothProgress, [0, 0.6, 1], [1, 2.2, 5]);
  const buzzZoomZ = useTransform(smoothProgress, [0, 0.6, 1], [0, 450, 1000]);
  const buzzZoomOpacity = useTransform(smoothProgress, [0, 0.5, 0.9], [1, 0.85, 0]);

  // Background perspective grid tilt
  const gridRotateX = useTransform(smoothProgress, [0, 1], [65, 35]);
  const gridZ = useTransform(smoothProgress, [0, 1], [0, -120]);

  // Gallery 3D carousel visibility: 100% visible on load
  const galleryOpacity = useTransform(smoothProgress, [0, 0.7, 1], [1, 1, 0.85]);
  const galleryScale = useTransform(smoothProgress, [0, 0.7, 1], [1, 1.02, 0.95]);


  // Mouse move handler for interactive parallax & lighting
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      setMousePos({
        x: clientX,
        y: clientY,
        targetX: (clientX - centerX) / centerX,
        targetY: (clientY - centerY) / centerY,
      });

      // Check proximity to BUZZ element
      if (buzzRef.current) {
        const rect = buzzRef.current.getBoundingClientRect();
        const dist = Math.hypot(clientX - (rect.left + rect.width / 2), clientY - (rect.top + rect.height / 2));
        setIsNearBuzz(dist < 280);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Magnetic Button Hover Physics
  const [btn1Pos, setBtn1Pos] = useState({ x: 0, y: 0 });
  const [btn2Pos, setBtn2Pos] = useState({ x: 0, y: 0 });

  const handleMagneticMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    setPos: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-16 bg-[#090A0F] text-[#F8F9FA] bg-noise flex flex-col justify-between overflow-hidden perspective-[1200px]"
    >
      {/* 6. MOUSE LIGHT: Radial Teal Gradient following cursor */}

        
        {/* 6. MOUSE LIGHT: Radial Teal Gradient following cursor */}
        <div
          className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(${isNearBuzz ? '750px' : '550px'} circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 245, 212, ${
              isNearBuzz ? 0.18 : 0.1
            }), transparent 80%)`,
          }}
        />

        {/* 4. PERSPECTIVE GRID: Infinite subtle scroll toward viewer */}
        <motion.div
          style={{ rotateX: gridRotateX, translateZ: gridZ }}
          className="absolute inset-0 pointer-events-none origin-bottom opacity-20 transform-style-3d z-0"
        >
          <motion.div
            animate={{ backgroundPositionY: ['0px', '65px'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="w-full h-[220%] absolute top-[-60%]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(51, 65, 85, 0.6) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(51, 65, 85, 0.6) 1px, transparent 1px)
              `,
              backgroundSize: '65px 65px',
            }}
          />
        </motion.div>

        {/* 2. Official CloudBee Logo Watermark Background */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] md:w-[1150px] lg:w-[1400px] opacity-10 pointer-events-none z-0">
          <CloudBeeLogoSvg variant="background" colorTheme="dark" className="w-full h-full" />
        </div>

        {/* Ambient Glow Spheres */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-[#00F5D4]/12 blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-[#4F46E5]/15 blur-3xl pointer-events-none z-0" />

        {/* MAIN HERO CONTENT CONTAINER */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col items-center justify-between flex-grow pt-10">
          
          {/* Top Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 bg-[#0F172A]/80 border border-[#334155] backdrop-blur-xl mb-2 rounded-full shadow-lg"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#00F5D4] animate-ping" />
            <span className="text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-ultra text-[#00F5D4]">
              {CLOUDBEE_BRAND.eyebrow}
            </span>
          </motion.div>

          {/* 3. BEE MOTION: Tiny Abstract Bee/Particle Element orbiting text */}
          <div className="absolute top-28 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 pointer-events-none z-30 hidden md:block">
            <motion.div
              animate={{
                x: [ -280, -140, 0, 180, 320, 140, -120, -280 ],
                y: [ -20, 30, -15, 25, -10, 35, -25, -20 ],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-4 h-4"
            >
              {/* Burnt Orange Bee Core Accent */}
              <div className="w-3.5 h-3.5 rounded-full bg-[#E06B32] shadow-[0_0_15px_#E06B32] border border-white/40 flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-white animate-ping" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#E06B32]/30 blur-sm pointer-events-none" />
            </motion.div>
          </div>

          {/* Center 3D Circular Revolving Gallery (Emerges smoothly as BUZZ expands) */}
          <motion.div
            style={{ opacity: galleryOpacity, scale: galleryScale }}
            className="w-full my-auto py-2 z-20"
          >
            <HeroReel scrollProgress={smoothProgress} onSelectProject={() => scrollToSection('#work')} />
          </motion.div>

          {/* 1. CINEMATIC STAGGERED TEXT REVEAL + 5. MOUSE PARALLAX + 9. SCROLL FLY-THROUGH */}
          <motion.div
            style={{ y: textUpY, opacity: textFade }}
            className="w-full text-center space-y-4 mt-16 md:mt-24 pt-8 z-30"
          >

            <div className="space-y-0.5 relative">
              {/* 7. PARTICLES: Subtle floating micro-particles drifting around BUZZ */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {[...Array(6)].map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      y: [0, i % 2 === 0 ? -16 : 16, 0],
                      x: [0, i % 3 === 0 ? 12 : -12, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.4,
                    }}
                    className="absolute w-1.5 h-1.5 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4]"
                    style={{
                      top: `${20 + i * 12}%`,
                      left: `${30 + i * 8}%`,
                    }}
                  />
                ))}
              </div>

              {/* Line 1: CREATING (Mouse Parallax Layer 1) */}
              <motion.h1
                initial={{ opacity: 0, y: 45, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  x: mousePos.targetX * 5,
                  y: mousePos.targetY * 5,
                }}
                className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] tracking-tighter leading-[0.85] uppercase text-[#F8F9FA] drop-shadow-2xl"
              >
                CREATING
              </motion.h1>

              {/* Line 2: THE REAL (Mouse Parallax Layer 2) */}
              <motion.h2
                initial={{ opacity: 0, y: 45, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  x: mousePos.targetX * 10,
                  y: mousePos.targetY * 10,
                }}
                className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] tracking-tighter leading-[0.85] uppercase text-[#F8F9FA]/90"
              >
                THE REAL
              </motion.h2>

              {/* Line 3: BUZZ. (2. BUZZ Scale Pulse + 9. Scroll Fly-Through Camera Zoom) */}
              <motion.div
                ref={buzzRef}
                initial={{ opacity: 0, y: 45, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  x: mousePos.targetX * 18,
                  y: mousePos.targetY * 18,
                  scale: buzzZoomScale,
                  translateZ: buzzZoomZ,
                  opacity: buzzZoomOpacity,
                }}
                className="relative inline-block"
              >
                <motion.h2
                  animate={{
                    scale: [1, 1.015, 1],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] tracking-tighter leading-[0.85] uppercase text-[#00F5D4] glow-mint transition-all duration-300"
                >
                  BUZZ.
                </motion.h2>
              </motion.div>
            </div>

            {/* 8. CTA MAGNETIC INTERACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
              <motion.button
                style={{ x: btn1Pos.x, y: btn1Pos.y }}
                onMouseMove={(e) => handleMagneticMove(e, setBtn1Pos)}
                onMouseLeave={() => setBtn1Pos({ x: 0, y: 0 })}
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                className="group relative px-9 py-4 rounded-full bg-[#00F5D4] text-[#090A0F] font-heading font-black text-xs uppercase tracking-widest overflow-hidden shadow-[0_0_35px_rgba(0,245,212,0.4)] transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
                data-cursor="button"
              >
                <span className="relative z-10">Start a Project</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                <div className="absolute inset-0 bg-[#F8F9FA] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </motion.button>

              <motion.button
                style={{ x: btn2Pos.x, y: btn2Pos.y }}
                onMouseMove={(e) => handleMagneticMove(e, setBtn2Pos)}
                onMouseLeave={() => setBtn2Pos({ x: 0, y: 0 })}
                onClick={() => scrollToSection('#work')}
                whileHover={{ scale: 1.05 }}
                className="group px-9 py-4 rounded-full bg-[#0F172A]/90 border border-[#334155] hover:border-[#00F5D4] text-[#F8F9FA] hover:bg-[#F8F9FA] hover:text-[#090A0F] font-heading font-extrabold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto backdrop-blur-xl shadow-lg"
                data-cursor="hover"
              >
                <span>Explore Our Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div>
        </div>
    </section>
  );
};

