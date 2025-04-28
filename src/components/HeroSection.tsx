
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Play, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const HeroSection = () => {
  const [prompt, setPrompt] = useState('');

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
        </div>
        
        {/* Upload & Prompt Area */}
        <Card className="w-full max-w-4xl rounded-xl overflow-hidden neon-border glass-panel">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Upload Area */}
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-semibold">Upload Your Image</h3>
                <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-neon-purple transition-colors h-[200px] flex items-center justify-center">
                  <Input
                    type="file"
                    className="hidden"
                    id="hero-image-upload"
                    accept="image/*"
                  />
                  <label
                    htmlFor="hero-image-upload"
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <Upload className="h-12 w-12 text-neon-purple mb-4" />
                    <p className="text-lg font-medium mb-2">Drop your image here</p>
                    <p className="text-sm text-gray-400">or click to browse</p>
                  </label>
                </div>
              </div>

              {/* Prompt Area */}
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-semibold">Describe Animation</h3>
                <Textarea
                  placeholder="Describe how you want your image animated. For example: 'Make the clouds move slowly across the sky'"
                  className="flex-grow min-h-[140px] bg-white/5 border-white/20"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              <Button className="futuristic-button w-full md:w-auto flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>Generate Video</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
          <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 w-full sm:w-auto flex items-center space-x-2">
            <Play className="h-5 w-5" />
            <span>See Examples</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
