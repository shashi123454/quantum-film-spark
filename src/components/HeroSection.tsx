
import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Play, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-background to-background"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px]"></div>
      </div>

      {/* Content */}
      <div className="max-w-5xl flex flex-col items-center space-y-10 z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-white/90 mb-2">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-neon-purple" />
              <span>Revolutionary AI Technology</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transform Static Images into
            <span className="glow-text block"> Dynamic Videos</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Our cutting-edge AI technology brings your images to life with natural, fluid motion. Create stunning videos from still photos in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Button className="futuristic-button w-full sm:w-auto flex items-center space-x-2">
              <Upload className="h-5 w-5" />
              <span>Upload Image</span>
            </Button>
            
            <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 w-full sm:w-auto flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>See Examples</span>
            </Button>
          </div>
        </div>
        
        {/* Preview/Demo Window */}
        <div className="w-full max-w-4xl rounded-xl overflow-hidden neon-border">
          <div className="glass-panel w-full aspect-video flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="inline-flex justify-center items-center rounded-full h-16 w-16 bg-neon-purple/20 border border-neon-purple/30">
                <Upload className="h-6 w-6 text-neon-purple" />
              </div>
              <div className="text-gray-300">
                <p className="font-medium">Drag and drop your image here</p>
                <p className="text-sm text-gray-400">or click to browse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
