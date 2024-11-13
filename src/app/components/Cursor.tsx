"use client"

import { useEffect } from 'react';

const Cursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor') as HTMLElement; // TypeScript: assert it's HTMLElement

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.pageX - 15}px`; // Adjust for the cursor size
        cursor.style.top = `${e.pageY - 15}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cursor"
      className="w-3 h-3 bg-yellow-500 rounded-full absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2 
                 border-4 border-yellow-400 
                 shadow-lg shadow-yellow-500/40" // Subtle glow and visible border
    />
  );
};

export default Cursor;
