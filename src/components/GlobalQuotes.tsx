
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GlobalQuotes = () => {
  return (
    <div className="relative bg-gray-100 rounded-3xl p-8 my-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-8 left-1/4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="absolute top-12 right-1/4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Clouds */}
        <div className="absolute top-4 left-8">
          <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16 A16 16 0 0 1 32 16 A16 16 0 0 1 64 16 V32 H0 Z" fill="white" fillOpacity="0.5"/>
          </svg>
        </div>
        <div className="absolute top-20 right-20">
          <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12 A12 12 0 0 1 24 12 A12 12 0 0 1 48 12 V24 H0 Z" fill="white" fillOpacity="0.7"/>
          </svg>
        </div>
        <div className="absolute bottom-16 left-1/3">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 A10 10 0 0 1 20 10 A10 10 0 0 1 40 10 V20 H0 Z" fill="white" fillOpacity="0.6"/>
          </svg>
        </div>
      </div>
      
      <div className="flex flex-col items-center relative z-10 py-12">
        <div className="rounded-full bg-black w-8 h-8 flex items-center justify-center mb-4">
          <span className="text-white text-xs">D</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Share your <span className="text-gray-400">vision,</span><br />
          achieve <span className="text-black">brand excellence.</span>
        </h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-deckflare-yellow rounded-full mr-3"></div>
              <div>
                <h4 className="font-medium">Sarah Johnson</h4>
                <p className="text-xs text-gray-500">Marketing Director</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">"Deckflare transformed our brand identity and doubled our market recognition in just 6 months."</p>
          </div>
          
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-indigo-500 rounded-full mr-3"></div>
              <div>
                <h4 className="font-medium">Michael Chen</h4>
                <p className="text-xs text-gray-500">CEO, TechVision</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">"The strategic approach to our brand refresh resulted in 45% higher customer engagement across all channels."</p>
          </div>
          
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-black rounded-full mr-3"></div>
              <div>
                <h4 className="font-medium">Emma Rodriguez</h4>
                <p className="text-xs text-gray-500">Brand Manager</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">"Deckflare's holistic approach to brand management has been the key to our consistent growth year over year."</p>
          </div>
        </div>
        
        <Button className="mt-12 rounded-full bg-black text-white hover:bg-gray-800 px-6">
          <Link to="/demo">Get Started</Link>
          <span className="ml-2 flex items-center justify-center w-4 h-4 bg-white rounded-full">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Button>
      </div>
      
      <div className="flex justify-between mt-8">
        <a href="/about" className="text-sm text-gray-600 hover:text-gray-800">About</a>
        <a href="/blog" className="text-sm text-gray-600 hover:text-gray-800">Blog</a>
      </div>
    </div>
  );
};

export default GlobalQuotes;
