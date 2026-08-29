import React from 'react';
import { motion } from 'framer-motion';
import { CLOUDBEE_BRAND } from '../data/cloudbeeContent';
import { ArrowUp } from 'lucide-react';
import { CloudBeeLogoSvg } from './CloudBeeLogoSvg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'APPROACH', href: '#approach' },
    { name: 'WORK', href: '#work' },
    { name: 'WHY US', href: '#why-us' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="bg-[#090A0F] text-[#F8F9FA] pt-24 pb-12 px-6 relative overflow-hidden bg-noise border-t border-[#1E293B]">
      {/* Official CloudBee Logo Background Watermark */}
      <div className="absolute right-[-10%] bottom-[-5%] w-[600px] md:w-[900px] opacity-10 pointer-events-none z-0">
        <CloudBeeLogoSvg variant="background" colorTheme="dark" className="w-full h-full" />
      </div>

      {/* Traveling Electric Mint Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#1E293B] overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="w-48 h-full bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent shadow-[0_0_15px_#00F5D4]"
        />
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#1E293B]">
          <div>
            <span className="text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-ultra text-[#00F5D4] block mb-2">
              {CLOUDBEE_BRAND.eyebrow}
            </span>
            <h2 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-white leading-none">
              CLOUDBEE
            </h2>
            <p className="font-heading font-bold text-xl md:text-2xl text-[#00F5D4] mt-2">
              {CLOUDBEE_BRAND.tagline}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="w-16 h-16 rounded-full bg-[#0F172A] text-[#00F5D4] border border-[#334155] flex items-center justify-center hover:bg-[#00F5D4] hover:text-[#090A0F] transition-colors duration-300 shadow-xl self-start md:self-auto"
            aria-label="Scroll back to top"
            data-cursor="hover"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation & Positioning Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          <div>
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00F5D4] block mb-4">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 font-heading">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#94A3B8] hover:text-[#00F5D4] transition-colors uppercase tracking-wider text-xs font-extrabold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00F5D4] block mb-4">
              CORE CAPABILITIES
            </span>
            <ul className="space-y-2.5 text-xs text-[#94A3B8] font-sans">
              <li>Brand Strategy & Identity System</li>
              <li>Creative Advertising & Copy</li>
              <li>Performance Digital Marketing</li>
              <li>Commercial Film & 3D Media</li>
              <li>Experiential & Event Staging</li>
              <li>Go-To-Market Growth Advisory</li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00F5D4] block mb-4">
              AGENCY CONTACT
            </span>
            <p className="text-xs text-[#94A3B8] font-sans leading-relaxed mb-4">
              CloudBee is a creative, marketing, and experience agency helping brands rise above the noise and create meaningful impact.
            </p>
            <a
              href={`mailto:${CLOUDBEE_BRAND.email}`}
              className="text-sm font-heading font-extrabold text-[#00F5D4] hover:underline block"
            >
              {CLOUDBEE_BRAND.email}
            </a>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]/60 font-sans">
          <div>{CLOUDBEE_BRAND.copyright}</div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#00F5D4] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#00F5D4] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#00F5D4] cursor-pointer">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
