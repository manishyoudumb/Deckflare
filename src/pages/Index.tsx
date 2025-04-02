
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandStrategy from '@/components/BrandStrategy';
import PlatformStats from '@/components/PlatformStats';
import AutomatedInvoicing from '@/components/AutomatedInvoicing';
import GlobalQuotes from '@/components/GlobalQuotes';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <Navbar />
        <Hero />
        <BrandStrategy />
        <PlatformStats />
        <AutomatedInvoicing />
        <GlobalQuotes />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
