
import React from 'react';
import { Sparkles, Zap, Globe, Star } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-6 w-6 text-neon-blue" />,
    title: "Advanced AI",
    description: "Our state-of-the-art deep learning models create natural, fluid motions that look incredibly realistic."
  },
  {
    icon: <Zap className="h-6 w-6 text-neon-purple" />,
    title: "Instant Processing",
    description: "Transform your images into videos in seconds, not hours. Our optimized pipeline delivers results fast."
  },
  {
    icon: <Globe className="h-6 w-6 text-neon-blue" />,
    title: "Cloud Processing",
    description: "No need for powerful hardware. Our cloud-based solution handles all the complex computation for you."
  },
  {
    icon: <Star className="h-6 w-6 text-neon-purple" />,
    title: "High Quality",
    description: "Maintain the quality of your original images while adding lifelike motion with 4K resolution support."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Cutting-Edge <span className="glow-text">Features</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform leverages the latest advancements in AI to deliver outstanding results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)]"
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-white/5 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
