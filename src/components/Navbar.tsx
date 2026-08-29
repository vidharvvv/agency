import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { CLOUDBEE_BRAND } from '../data/cloudbeeContent';
import { CloudBeeLogoSvg } from './CloudBeeLogoSvg';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'APPROACH', href: '#approach' },
    { name: 'WORK', href: '#work' },
    { name: 'WHY US', href: '#why-us' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#090A0F]/85 backdrop-blur-xl border-b border-[#1E293B]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group text-[#F8F9FA] no-underline focus:outline-none"
            data-cursor="hover"
          >
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <CloudBeeLogoSvg variant="mark" className="w-full h-full" colorTheme="dark" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl md:text-2xl tracking-tighter text-[#F8F9FA] leading-none">
                CLOUDBEE
              </span>
              <span className="text-[8px] uppercase tracking-widest text-[#00F5D4] font-extrabold mt-0.5">
                CREATIVE AGENCY
              </span>
            </div>
          </a>

          {/* Desktop Center Framed Pill Navigation (shadcn UI inspired) */}
          <nav className="hidden lg:flex items-center gap-7 bg-[#0F172A]/80 px-7 py-2.5 rounded-full border border-[#334155] backdrop-blur-xl shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-[11px] font-heading font-extrabold tracking-widest text-[#94A3B8] hover:text-[#00F5D4] transition-colors duration-200 relative group py-1"
                data-cursor="hover"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00F5D4] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right CTA Button (shadcn UI inspired) */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              data-cursor="button"
              data-cursor-label="TALK"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00F5D4] text-[#090A0F] font-heading font-black text-xs tracking-widest uppercase overflow-hidden group shadow-[0_0_25px_rgba(0,245,212,0.3)] hover:shadow-[0_0_35px_rgba(0,245,212,0.5)] transition-all duration-300"
            >
              <span className="relative z-10 group-hover:translate-x-[-2px] transition-transform duration-300">
                LET'S TALK
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#090A0F] relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#F8F9FA] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-[#0F172A] text-[#F8F9FA] border border-[#334155] focus:outline-none z-50 hover:bg-[#00F5D4] hover:text-[#090A0F] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Animated Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#090A0F] text-[#F8F9FA] flex flex-col justify-between p-8 md:p-12 overflow-y-auto bg-noise border-b border-[#1E293B]"
          >
            <div className="mt-20">
              <span className="text-xs uppercase tracking-widest text-[#00F5D4] font-bold block mb-6">
                NAVIGATION
              </span>
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="font-display font-black text-4xl sm:text-5xl text-[#F8F9FA] hover:text-[#00F5D4] transition-colors duration-200 flex items-center justify-between group uppercase"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-8 h-8 text-[#00F5D4] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="border-t border-[#1E293B] pt-8 mt-12 flex flex-col gap-4">
              <div className="text-xs uppercase tracking-widest text-[#94A3B8]">
                DIRECT CONTACT
              </div>
              <a
                href={`mailto:${CLOUDBEE_BRAND.email}`}
                className="font-heading text-xl text-[#00F5D4] hover:underline font-bold"
              >
                {CLOUDBEE_BRAND.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
