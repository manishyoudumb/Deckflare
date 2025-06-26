
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col items-center py-16 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50 rounded-3xl">
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-1">
            Elevate your brand presence
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Strategic Brand Management
          </p>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Optimize,<br />Outperform
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We transform your brand's potential into market dominance through innovative management strategies.
        </p>
        <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-8 py-6">
          <Link to="/demo">Explore Services</Link>
        </Button>
      </div>
      
      <div className="mt-12 w-full flex justify-center">
        <div className="relative w-full max-w-2xl">
          <div className="absolute -top-6 -left-8 w-16 h-16 bg-deckflare-yellow rounded-full opacity-40 animate-float"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-deckflare-yellow rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-2xl text-center">
                <h3 className="text-3xl font-bold text-deckflare-yellow mb-2">90%</h3>
                <p className="text-sm text-gray-600">Brand visibility increase</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl text-center">
                <h3 className="text-3xl font-bold text-deckflare-yellow mb-2">45%</h3>
                <p className="text-sm text-gray-600">Conversion boost</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl text-center">
                <h3 className="text-3xl font-bold text-deckflare-yellow mb-2">2x</h3>
                <p className="text-sm text-gray-600">ROI improvement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
