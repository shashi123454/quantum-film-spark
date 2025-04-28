
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      features: [
        "10 Image to Video Conversions",
        "720p Video Quality",
        "Basic Animation Effects",
        "24h Support",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      features: [
        "100 Image to Video Conversions",
        "1080p Video Quality",
        "Advanced Animation Effects",
        "Priority Support",
        "Custom Watermark",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      features: [
        "Unlimited Conversions",
        "4K Video Quality",
        "All Animation Effects",
        "24/7 Priority Support",
        "API Access",
        "Custom Integration",
      ],
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple <span className="glow-text">Pricing</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`glass-panel p-8 relative ${
                plan.popular ? 'border-neon-purple border-2' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-purple text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                {plan.price}<span className="text-lg text-gray-400">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-neon-purple" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'futuristic-button' 
                    : 'border-white/20 bg-white/5 hover:bg-white/10'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
