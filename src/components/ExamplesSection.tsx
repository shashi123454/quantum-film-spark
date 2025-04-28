
import React from 'react';

const examples = [
  {
    title: "Nature Animation",
    description: "Transforming still landscapes into living scenes",
    prompt: "Add gentle movement to the trees and create flowing water in the stream",
    beforeImage: "/placeholder.svg",
    afterVideo: "/placeholder.svg"
  },
  {
    title: "Portrait Enhancement",
    description: "Bringing portraits to life with subtle animations",
    prompt: "Add a slight smile and gentle head movement",
    beforeImage: "/placeholder.svg",
    afterVideo: "/placeholder.svg"
  },
  {
    title: "Urban Motion",
    description: "Adding life to city photographs",
    prompt: "Animate traffic movement and add floating clouds in the sky",
    beforeImage: "/placeholder.svg",
    afterVideo: "/placeholder.svg"
  }
];

const ExamplesSection = () => {
  return (
    <section id="examples" className="py-20 px-6 relative bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">See It In <span className="glow-text">Action</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore examples of how our AI transforms static images into dynamic videos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-4">{example.title}</h3>
              <p className="text-gray-400 mb-4">{example.description}</p>
              
              <div className="space-y-4">
                <div className="relative aspect-video bg-black/40 rounded-lg overflow-hidden">
                  <img 
                    src={example.beforeImage} 
                    alt={`Before: ${example.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 px-2 py-1 rounded text-sm">
                    Before
                  </div>
                </div>
                
                <div className="relative aspect-video bg-black/40 rounded-lg overflow-hidden">
                  <img 
                    src={example.afterVideo} 
                    alt={`After: ${example.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 px-2 py-1 rounded text-sm">
                    After
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-sm text-gray-400">
                    <span className="text-neon-purple font-medium">Prompt: </span>
                    {example.prompt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
