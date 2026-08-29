import React from 'react';
import { CLIENT_LOGOS } from '../data/cloudbeeContent';

export const BrandMarquee: React.FC = () => {
  return (
    <section className="py-16 bg-[#090A0F] text-[#F8F9FA] overflow-hidden border-y border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <span className="text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-ultra text-[#00F5D4]">
          BRANDS WE CREATE WITH
        </span>
      </div>

      {/* Infinite Smooth Scrolling Marquee */}
      <div className="relative flex overflow-x-hidden">
        <div className="py-4 animate-marquee whitespace-nowrap flex items-center gap-12 sm:gap-16">
          {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="inline-flex items-center gap-4 text-[#94A3B8]/60 hover:text-[#00F5D4] transition-colors duration-300 font-heading font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tighter cursor-default"
            >
              <span>{logo.name}</span>
              <span className="text-[#00F5D4] text-sm">✦</span>
              <span className="text-[10px] font-mono text-[#F8F9FA]/30 tracking-widest uppercase">
                {logo.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
