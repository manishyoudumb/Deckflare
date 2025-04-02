
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-6 w-full">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <div className="rounded-full bg-black w-8 h-8 flex items-center justify-center mr-2">
            <span className="text-white text-sm">D</span>
          </div>
          <span className="font-medium text-gray-800">Deckflare</span>
        </Link>
      </div>
      
      <div className="flex items-center space-x-6">
        <Link to="/about" className="text-sm font-medium text-gray-800 hover:text-gray-600">
          About
        </Link>
        <Link to="/blog" className="text-sm font-medium text-gray-800 hover:text-gray-600">
          Blog
        </Link>
        <Button variant="secondary" className="rounded-full bg-black text-white hover:bg-gray-800">
          <Link to="/demo">View Demo</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
