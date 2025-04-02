
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <Navbar />
        
        <div className="py-16">
          <h1 className="text-5xl font-bold mb-8">About Deckflare</h1>
          
          <div className="prose max-w-none">
            <p className="text-xl mb-8">
              Deckflare is revolutionizing aircraft parts procurement with AI-powered solutions that optimize supply chain logistics and boost efficiency.
            </p>
            
            <p className="mb-6">
              Founded by aviation industry experts, our platform addresses the unique challenges of aviation parts sourcing, quality verification, and inventory management.
            </p>
            
            <h2 className="text-3xl font-bold mt-12 mb-6">Our Mission</h2>
            <p className="mb-6">
              To transform aviation procurement through innovative technology, reducing aircraft downtime and operational costs while ensuring the highest quality standards.
            </p>
            
            <h2 className="text-3xl font-bold mt-12 mb-6">Our Vision</h2>
            <p className="mb-6">
              A future where aircraft maintenance and parts procurement is seamless, transparent, and efficient, powered by AI and blockchain technology.
            </p>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default About;
