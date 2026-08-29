import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLOUDBEE_BRAND } from '../data/cloudbeeContent';
import { ArrowUpRight, Mail, CheckCircle2, Camera, Share2, Globe, Video } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#0F172A] text-[#F8F9FA] relative overflow-hidden bg-noise border-t border-[#1E293B]">
      {/* Background Glowing Ambient Orb */}
      <div className="absolute top-10 right-10 w-[550px] h-[550px] rounded-full bg-[#00F5D4]/12 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Display Headline */}
        <div className="max-w-5xl mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#00F5D4]" />
            <span className="text-xs font-heading font-extrabold uppercase tracking-ultra text-[#00F5D4]">
              INITIATE PROJECT
            </span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tighter text-[#F8F9FA] leading-[0.9]">
            LET'S CREATE
            <br />
            <span className="text-[#00F5D4]">SOMETHING</span>
            <br />
            WORTH TALKING ABOUT.
          </h2>

          <div className="pt-4 flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${CLOUDBEE_BRAND.email}`}
              className="font-heading font-extrabold text-2xl md:text-3xl text-[#F8F9FA] hover:text-[#00F5D4] transition-colors flex items-center gap-2 underline decoration-[#00F5D4]"
              data-cursor="hover"
            >
              <Mail className="w-6 h-6 text-[#00F5D4]" />
              <span>{CLOUDBEE_BRAND.email}</span>
            </a>
          </div>
        </div>

        {/* Minimal Underlined Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-16 text-center space-y-4 bg-[#090A0F]/60 p-8 rounded-2xl border border-[#334155]"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00F5D4] text-[#090A0F] mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-extrabold text-3xl text-white uppercase">
                    TRANSMISSION RECEIVED
                  </h3>
                  <p className="text-sm font-sans text-[#94A3B8] max-w-md mx-auto">
                    Thank you! The CloudBee core team will review your brief and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Input */}
                  <div>
                    <label className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00F5D4] block mb-1">
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-underline w-full text-lg sm:text-xl font-heading"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00F5D4] block mb-1">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-underline w-full text-lg sm:text-xl font-heading"
                    />
                  </div>

                  {/* Company Input */}
                  <div>
                    <label className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00F5D4] block mb-1">
                      COMPANY
                    </label>
                    <input
                      type="text"
                      placeholder="Apex Ventures"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="input-underline w-full text-lg sm:text-xl font-heading"
                    />
                  </div>

                  {/* Project Input */}
                  <div>
                    <label className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00F5D4] block mb-1">
                      PROJECT TYPE
                    </label>
                    <input
                      type="text"
                      placeholder="Brand Strategy / Campaign / Production"
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="input-underline w-full text-lg sm:text-xl font-heading"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00F5D4] block mb-1">
                      MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe your vision and requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-underline w-full text-lg sm:text-xl font-heading resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      data-cursor="button"
                      data-cursor-label="TALK"
                      className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#00F5D4] text-[#090A0F] font-heading font-black text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(0,245,212,0.35)] hover:bg-[#F8F9FA] transition-all duration-300"
                    >
                      <span>LET'S TALK</span>
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Social Channels & Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="p-8 rounded-2xl bg-[#090A0F]/80 border border-[#334155] space-y-6 shadow-xl">
              <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00F5D4] block">
                CONNECT & FOLLOW
              </span>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="p-4 bg-[#0F172A] rounded-xl border border-[#334155] hover:border-[#00F5D4] text-[#F8F9FA] flex items-center gap-3 transition-colors group"
                >
                  <Camera className="w-5 h-5 text-[#00F5D4]" />
                  <span className="text-xs font-heading font-extrabold group-hover:text-[#00F5D4]">Instagram</span>
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="p-4 bg-[#0F172A] rounded-xl border border-[#334155] hover:border-[#00F5D4] text-[#F8F9FA] flex items-center gap-3 transition-colors group"
                >
                  <Share2 className="w-5 h-5 text-[#00F5D4]" />
                  <span className="text-xs font-heading font-extrabold group-hover:text-[#00F5D4]">LinkedIn</span>
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="p-4 bg-[#0F172A] rounded-xl border border-[#334155] hover:border-[#00F5D4] text-[#F8F9FA] flex items-center gap-3 transition-colors group"
                >
                  <Globe className="w-5 h-5 text-[#00F5D4]" />
                  <span className="text-xs font-heading font-extrabold group-hover:text-[#00F5D4]">Behance</span>
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="p-4 bg-[#0F172A] rounded-xl border border-[#334155] hover:border-[#00F5D4] text-[#F8F9FA] flex items-center gap-3 transition-colors group"
                >
                  <Video className="w-5 h-5 text-[#00F5D4]" />
                  <span className="text-xs font-heading font-extrabold group-hover:text-[#00F5D4]">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
