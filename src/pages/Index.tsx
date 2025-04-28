
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  // Add animations for elements as they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('section > div').forEach((section) => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section > div').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed background with adjusted z-index */}
      <div className="fixed inset-0 z-0">
        {/* Background gradients */}
        <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-background to-background"></div>
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" 
          style={{ backgroundSize: '100px 100px' }}
        ></div>
      </div>

      {/* Content with appropriate z-index */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
