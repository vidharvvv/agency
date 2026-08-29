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
    // Initialize Lenis award-winning silky smooth scrolling physics
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
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
    <div className="relative min-h-screen bg-[#090A0F] text-[#F8F9FA] selection:bg-[#00F5D4] selection:text-[#090A0F] font-sans antialiased overflow-x-hidden">
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
