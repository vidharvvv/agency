import { useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CloudBeePhilosophy } from './components/CloudBeePhilosophy';
import { CloudBeeWay } from './components/CloudBeeWay';
import { Services } from './components/Services';
import { Approach } from './components/Approach';
import { WhyUs } from './components/WhyUs';
import { BigStatement } from './components/BigStatement';
import { Work } from './components/Work';
import { BrandMarquee } from './components/BrandMarquee';
import { Stats } from './components/Stats';
import { AboutUs } from './components/AboutUs';
import { CreativeManifesto } from './components/CreativeManifesto';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  useEffect(() => {
    // Initialize Lenis award-winning smooth scrolling physics
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080909] text-[#F4F0E6] selection:bg-[#E06B32] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Custom Context-Aware Cursor */}
      <CustomCursor />

      {/* Sticky/Floating Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <CloudBeePhilosophy />
        <CloudBeeWay />
        <Services />
        <Approach />
        <WhyUs />
        <BigStatement />
        <Work />
        <BrandMarquee />
        <Stats />
        <AboutUs />
        <CreativeManifesto />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
