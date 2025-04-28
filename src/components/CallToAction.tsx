
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto glass-panel p-10 lg:p-14 relative overflow-hidden">
        {/* Glowing orbs in background */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-blue/20 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-purple/20 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Bring Your <span className="glow-text">Images to Life?</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mb-8">
            Join thousands of creators, marketers, and designers who are transforming their content with our AI-powered technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="futuristic-button px-8 py-6 text-lg">
              Get Started for Free
            </Button>
            <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 px-6 py-6 text-lg flex items-center gap-2">
              <span>See Pricing</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
