
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Demo = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <Navbar />
        
        <div className="py-16 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-8 text-center">Experience Deckflare</h1>
          
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl">
            Schedule a personalized demo to see how our AI-powered platform can transform your aviation parts procurement.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-8 w-full max-w-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deckflare-yellow focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deckflare-yellow focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deckflare-yellow focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deckflare-yellow focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What areas are you most interested in?
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deckflare-yellow focus:border-transparent"
                >
                  <option>AI Procurement Assistance</option>
                  <option>Blockchain Verification</option>
                  <option>Automated Invoicing</option>
                  <option>Global Quotes System</option>
                </select>
              </div>
              
              <Button className="w-full py-2 rounded-md bg-deckflare-yellow hover:bg-deckflare-yellow-dark text-white">
                Schedule Demo
              </Button>
            </form>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Demo;
