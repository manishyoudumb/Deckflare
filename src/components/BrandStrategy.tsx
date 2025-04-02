
import React from 'react';
import { ArrowRight } from 'lucide-react';

const AIPowered = () => {
  return (
    <div className="py-16 px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Leverage the power<br />
        of strategic <span className="inline-flex items-center">
          <span className="w-6 h-6 rounded-full bg-indigo-500 inline-block mx-1"></span>
          <span className="w-6 h-6 rounded-full bg-deckflare-yellow inline-block mx-1"></span>
          <span className="w-6 h-6 rounded-full bg-black inline-block mx-1"></span>
        </span> brand<br />
        management
      </h2>
      
      <div className="flex flex-col md:flex-row mt-16 gap-8">
        <div className="w-full md:w-1/2">
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-2xl">
                <div className="w-8 h-8 bg-deckflare-yellow rounded-full mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-medium mb-2">Brand Strategy</h4>
                <p className="text-sm text-gray-600">Comprehensive analysis and positioning</p>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <div className="w-8 h-8 bg-deckflare-yellow rounded-full mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-medium mb-2">Visual Identity</h4>
                <p className="text-sm text-gray-600">Consistent and memorable design systems</p>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <div className="w-8 h-8 bg-deckflare-yellow rounded-full mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-medium mb-2">Market Positioning</h4>
                <p className="text-sm text-gray-600">Stand out with targeted positioning</p>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <div className="w-8 h-8 bg-deckflare-yellow rounded-full mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <h4 className="font-medium mb-2">Growth Strategy</h4>
                <p className="text-sm text-gray-600">Data-driven expansion planning</p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-sm font-medium">Explore our solutions</p>
              <button className="rounded-full bg-white p-2 shadow-md">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="mb-8">
            <div className="flex gap-6 mb-6">
              <span className="text-sm font-medium">01</span>
              <div>
                <h3 className="font-medium mb-2">Brand Analysis</h3>
                <p className="text-sm text-gray-600">Comprehensive market research and competitive analysis to position your brand effectively.</p>
              </div>
            </div>
            
            <div className="flex gap-6 mb-6">
              <span className="text-sm font-medium">02</span>
              <div>
                <h3 className="font-medium mb-2">Strategic Planning</h3>
                <p className="text-sm text-gray-600">Develop robust brand strategies that align with your business objectives and market needs.</p>
              </div>
            </div>
            
            <div className="flex gap-6 mb-6">
              <span className="text-sm font-medium">03</span>
              <div>
                <h3 className="font-medium mb-2">Implementation</h3>
                <p className="text-sm text-gray-600">Execute brand strategies across all touchpoints with precision and consistency.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-deckflare-yellow rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-white mb-2">78%</h3>
            <p className="text-sm text-white">Our clients see increased customer engagement after rebranding.</p>
          </div>
          
          <p className="mt-6 text-sm text-gray-600">
            Explore how our brand management expertise can transform your market presence and drive business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIPowered;
