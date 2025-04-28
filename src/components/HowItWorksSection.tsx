
import React from 'react';
import { Upload, Sparkles, Play } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-8 w-8 text-neon-blue" />,
    title: "Upload Your Image",
    description: "Select and upload any still image you want to animate. We support JPG, PNG, and WEBP formats."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-neon-purple" />,
    title: "AI Processing",
    description: "Our advanced neural networks analyze your image and generate natural motion patterns."
  },
  {
    icon: <Play className="h-8 w-8 text-neon-blue" />,
    title: "Download Video",
    description: "Preview your animated result and download in multiple formats including MP4 and GIF."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 relative bg-slate-900/50">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px]"></div>
        <div className="absolute right-1/4 top-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It <span className="glow-text">Works</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Simple 3-step process to transform your images into captivating videos
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full opacity-20 blur-sm"></div>
                <div className="relative z-10 rounded-full w-16 h-16 flex items-center justify-center glass-panel border border-white/10 mb-6">
                  {step.icon}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple w-full max-w-[100px] mt-8 ml-32"></div>
              )}
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
