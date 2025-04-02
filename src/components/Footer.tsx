
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="rounded-full bg-black w-8 h-8 flex items-center justify-center mr-2">
            <span className="text-white text-sm">D</span>
          </div>
          <span className="font-medium">Deckflare</span>
        </div>
        
        <div className="flex space-x-8">
          <Link to="/about" className="text-sm text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link to="/blog" className="text-sm text-gray-600 hover:text-gray-800">
            Blog
          </Link>
          <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </div>
        
        <div className="mt-4 md:mt-0">
          <span className="text-sm text-gray-400">&copy; 2023 Deckflare. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
