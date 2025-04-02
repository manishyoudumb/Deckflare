
import React from 'react';
import { Check, ChevronRight } from 'lucide-react';

const AutomatedInvoicing = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Comprehensive <span className="text-white">brand management<br />
        services for</span> businesses
      </h2>
      
      <div className="flex flex-wrap gap-2 mb-12">
        <span className="px-4 py-1 bg-red-100 text-red-600 text-xs rounded-full">Strategy</span>
        <span className="px-4 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">Identity</span>
        <span className="px-4 py-1 bg-deckflare-yellow bg-opacity-20 text-deckflare-yellow-dark text-xs rounded-full">Growth</span>
      </div>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center hover:bg-black hover:text-white transition-colors rounded-full px-6 py-4 border border-gray-100 group">
          <div className="w-full md:w-1/3 flex items-center mb-4 md:mb-0">
            <div className="w-5 h-5 rounded-full bg-deckflare-yellow flex items-center justify-center mr-3">
              <Check size={12} className="text-white" />
            </div>
            <span className="font-medium">Brand Strategy Development</span>
          </div>
          <div className="w-full md:w-1/3 text-gray-400 text-sm pl-8 md:pl-0 mb-4 md:mb-0">
            Market Analysis
          </div>
          <div className="w-full md:w-1/3 flex justify-between items-center pl-8 md:pl-0">
            <span className="text-sm text-gray-600 group-hover:text-white">Comprehensive market research and positioning strategy tailored to your industry.</span>
            <div className="w-6 h-6 rounded-full bg-deckflare-yellow flex items-center justify-center">
              <ChevronRight size={12} className="text-black" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center hover:bg-black hover:text-white transition-colors rounded-full px-6 py-4 border border-gray-100 group">
          <div className="w-full md:w-1/3 flex items-center mb-4 md:mb-0">
            <div className="w-5 h-5 rounded-full bg-deckflare-yellow flex items-center justify-center mr-3">
              <Check size={12} className="text-white" />
            </div>
            <span className="font-medium">Brand Strategy Development</span>
          </div>
          <div className="w-full md:w-1/3 text-gray-400 text-sm pl-8 md:pl-0 mb-4 md:mb-0">
            Market Analysis
          </div>
          <div className="w-full md:w-1/3 flex justify-between items-center pl-8 md:pl-0">
            <span className="text-sm text-gray-600 group-hover:text-white">Comprehensive market research and positioning strategy tailored to your industry.</span>
            <div className="w-6 h-6 rounded-full bg-deckflare-yellow flex items-center justify-center">
              <ChevronRight size={12} className="text-black" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center hover:bg-black hover:text-white transition-colors rounded-full px-6 py-4 border border-gray-100 group">
          <div className="w-full md:w-1/3 flex items-center mb-4 md:mb-0">
            <div className="w-5 h-5 rounded-full bg-deckflare-yellow flex items-center justify-center mr-3">
              <Check size={12} className="text-white" />
            </div>
            <span className="font-medium">Content Strategy</span>
          </div>
          <div className="w-full md:w-1/3 text-gray-400 text-sm pl-8 md:pl-0 mb-4 md:mb-0">
            Multi-channel Content
          </div>
          <div className="w-full md:w-1/3 flex justify-between items-center pl-8 md:pl-0">
            <span className="text-sm text-gray-600 group-hover:text-white">Develop targeted content that builds brand authority and customer engagement.</span>
            <div className="w-6 h-6 rounded-full bg-deckflare-yellow flex items-center justify-center">
              <ChevronRight size={12} className="text-black" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center hover:bg-black hover:text-white transition-colors rounded-full px-6 py-4 border border-gray-100 group">
          <div className="w-full md:w-1/3 flex items-center mb-4 md:mb-0">
            <div className="w-5 h-5 rounded-full bg-deckflare-yellow flex items-center justify-center mr-3">
              <Check size={12} className="text-white" />
            </div>
            <span className="font-medium">Brand Monitoring</span>
          </div>
          <div className="w-full md:w-1/3 text-gray-400 text-sm pl-8 md:pl-0 mb-4 md:mb-0">
            Sentiment Analysis
          </div>
          <div className="w-full md:w-1/3 flex justify-between items-center pl-8 md:pl-0">
            <span className="text-sm text-gray-600 group-hover:text-white">Track brand performance and sentiment across all platforms in real-time.</span>
            <div className="w-6 h-6 rounded-full bg-deckflare-yellow flex items-center justify-center">
              <ChevronRight size={12} className="text-black" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center hover:bg-black hover:text-white transition-colors rounded-full px-6 py-4 border border-gray-100 group">
          <div className="w-full md:w-1/3 flex items-center mb-4 md:mb-0">
            <div className="w-5 h-5 rounded-full bg-deckflare-yellow flex items-center justify-center mr-3">
              <Check size={12} className="text-white" />
            </div>
            <span className="font-medium">Crisis Management</span>
          </div>
          <div className="w-full md:w-1/3 text-gray-400 text-sm pl-8 md:pl-0 mb-4 md:mb-0">
            Rapid Response
          </div>
          <div className="w-full md:w-1/3 flex justify-between items-center pl-8 md:pl-0">
            <span className="text-sm text-gray-600 group-hover:text-white">Protect your brand reputation with strategic crisis response planning.</span>
            <div className="w-6 h-6 rounded-full bg-deckflare-yellow flex items-center justify-center">
              <ChevronRight size={12} className="text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedInvoicing;
