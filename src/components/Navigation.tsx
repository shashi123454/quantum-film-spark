
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center z-50 relative">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-md animate-pulse-glow"></div>
        <span className="text-xl font-bold tracking-tight glow-text">MotionAI</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
        <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
        <a href="#upload" className="text-gray-300 hover:text-white transition-colors">Create</a>
        <a href="#examples" className="text-gray-300 hover:text-white transition-colors">Examples</a>
        <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
        <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10">Sign In</Button>
        <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">Get Started</Button>
      </div>
      
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-6 w-6" />
      </Button>
    </nav>
  );
};

export default Navigation;
