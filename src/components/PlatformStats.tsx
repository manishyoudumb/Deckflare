
import React from 'react';

const PlatformStats = () => {
  return (
    <div className="bg-gray-50 rounded-3xl p-8 my-16">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="flex items-center mb-2">
            <div className="rounded-full bg-black w-6 h-6 flex items-center justify-center mr-2">
              <span className="text-white text-xs">D</span>
            </div>
            <h3 className="font-medium">
              The <span className="text-gray-400">Deckflare</span> approach 
              delivers <span className="text-gray-400">measurable brand</span> growth.
            </h3>
          </div>
          
          <div className="mt-8">
            <h2 className="text-6xl font-bold mb-2">38%</h2>
            <p className="text-sm">Average increase in brand recognition metrics.</p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="bg-white rounded-3xl p-4 shadow-sm mb-4">
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-xs font-medium">Brand Sentiment</span>
                  </div>
                  <span className="text-xs text-gray-400">Up 32% this quarter</span>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-4 shadow-sm mb-4">
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-deckflare-yellow rounded-full mr-2"></span>
                    <span className="text-xs font-medium">Customer Loyalty</span>
                  </div>
                  <span className="text-xs text-gray-400">Retention increased by 28%</span>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="bg-indigo-600 rounded-3xl p-4 shadow-sm text-white">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs font-medium">Market Share</span>
                  <div className="font-bold">+14.2%</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <span className="text-xs">Q1</span>
              <span className="text-xs">Q2</span>
              <span className="text-xs">Q3</span>
              <span className="text-xs">Q4</span>
              <span className="text-xs">Now</span>
            </div>
            
            <div className="mt-2 bg-gray-200 h-2 rounded-full overflow-hidden">
              <div className="bg-deckflare-yellow h-full rounded-full" style={{ width: '84%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformStats;
